/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
#ifdef XP_WIN
#include <windows.h>
#else
#include <unistd.h>
#endif

#include "TestHarness.h"

// Work around the fact that the nsWeakPtr, used by AudioChannelService.h, is
// not exposed to consumers outside the internal API.
#include "nsIWeakReference.h"
typedef nsCOMPtr<nsIWeakReference> nsWeakPtr;

#include "AudioChannelService.h"
#include "AudioChannelAgent.h"

#define TEST_ENSURE_BASE(_test, _msg)       \
  PR_BEGIN_MACRO                            \
    if (!(_test)) {                           \
      fail(_msg);                           \
      return NS_ERROR_FAILURE;              \
    } else {                                \
      passed(_msg);                         \
    }                                       \
  PR_END_MACRO

using namespace mozilla::dom;

class Agent : public nsIAudioChannelAgentCallback
{
public:
  NS_DECL_ISUPPORTS

  Agent(AudioChannelType aType)
  : mType(aType)
  , mWaitCallback(false)
  , mRegistered(false)
  , mCanPlay(AUDIO_CHANNEL_STATE_MUTED)
  {
    mAgent = do_CreateInstance("@mozilla.org/audiochannelagent;1");
  }

  virtual ~Agent() {}

  nsresult Init()
  {
    nsresult rv = mAgent->Init(mType, this);
    NS_ENSURE_SUCCESS(rv, rv);

    return mAgent->SetVisibilityState(false);
  }

  nsresult StartPlaying(AudioChannelState *_ret)
  {
    if (mRegistered)
      StopPlaying();

    nsresult rv = mAgent->StartPlaying((int32_t *)_ret);
    mRegistered = true;
    return rv;
  }

  nsresult StopPlaying()
  {
    mRegistered = false;
    int loop = 0;
    while (mWaitCallback) {
      #ifdef XP_WIN
      Sleep(1000);
      #else
      sleep(1);
      #endif
      if (loop++ == 5) {
        TEST_ENSURE_BASE(false, "StopPlaying timeout");
      }
    }
    return mAgent->StopPlaying();
  }

  nsresult SetVisibilityState(bool visible)
  {
    if (mRegistered) {
      mWaitCallback = true;
    }
    return mAgent->SetVisibilityState(visible);
  }

  NS_IMETHODIMP CanPlayChanged(int32_t canPlay)
  {
    mCanPlay = static_cast<AudioChannelState>(canPlay);
    mWaitCallback = false;
    return NS_OK;
  }

  nsresult GetCanPlay(AudioChannelState *_ret)
  {
    int loop = 0;
    while (mWaitCallback) {
      #ifdef XP_WIN
      Sleep(1000);
      #else
      sleep(1);
      #endif
      if (loop++ == 5) {
        TEST_ENSURE_BASE(false, "GetCanPlay timeout");
      }
    }
    *_ret = mCanPlay;
    return NS_OK;
  }

  nsCOMPtr<AudioChannelAgent> mAgent;
  AudioChannelType mType;
  bool mWaitCallback;
  bool mRegistered;
  AudioChannelState mCanPlay;
};

NS_IMPL_ISUPPORTS1(Agent, nsIAudioChannelAgentCallback)

nsresult
TestDoubleStartPlaying()
{
  nsCOMPtr<Agent> agent = new Agent(AUDIO_CHANNEL_NORMAL);

  nsresult rv = agent->Init();
  NS_ENSURE_SUCCESS(rv, rv);

  AudioChannelState playable;
  rv = agent->mAgent->StartPlaying((int32_t *)&playable);
  NS_ENSURE_SUCCESS(rv, rv);

  rv = agent->mAgent->StartPlaying((int32_t *)&playable);
  TEST_ENSURE_BASE(NS_FAILED(rv),
    "Test0: StartPlaying calling twice must return error");

  agent->mAgent->StopPlaying();
  return NS_OK;
}

nsresult
TestOneNormalChannel()
{
  nsCOMPtr<Agent> agent = new Agent(AUDIO_CHANNEL_NORMAL);
  nsresult rv = agent->Init();
  NS_ENSURE_SUCCESS(rv, rv);

  AudioChannelState playable;
  rv = agent->StartPlaying(&playable);
  NS_ENSURE_SUCCESS(rv, rv);
  TEST_ENSURE_BASE(playable == AUDIO_CHANNEL_STATE_MUTED,
    "Test1: A normal channel unvisible agent must be muted");

  rv = agent->SetVisibilityState(true);
  NS_ENSURE_SUCCESS(rv, rv);

  rv = agent->GetCanPlay(&playable);
  NS_ENSURE_SUCCESS(rv, rv);
  TEST_ENSURE_BASE(playable == AUDIO_CHANNEL_STATE_NORMAL,
    "Test1: A normal channel visible agent must be playable");

  agent->StopPlaying();
  return rv;
}

nsresult
TestTwoNormalChannels()
{
  nsCOMPtr<Agent> agent1 = new Agent(AUDIO_CHANNEL_NORMAL);
  nsresult rv = agent1->Init();
  NS_ENSURE_SUCCESS(rv, rv);

  nsCOMPtr<Agent> agent2 = new Agent(AUDIO_CHANNEL_NORMAL);
  rv = agent2->Init();
  NS_ENSURE_SUCCESS(rv, rv);

  AudioChannelState playable;
  rv = agent1->StartPlaying(&playable);
  NS_ENSURE_SUCCESS(rv, rv);
  TEST_ENSURE_BASE(playable == AUDIO_CHANNEL_STATE_MUTED,
    "Test2: A normal channel unvisible agent1 must be muted");

  rv = agent2->StartPlaying(&playable);
  NS_ENSURE_SUCCESS(rv, rv);
  TEST_ENSURE_BASE(playable == AUDIO_CHANNEL_STATE_MUTED,
    "Test2: A normal channel unvisible agent2 must be muted");

  rv = agent1->SetVisibilityState(true);
  NS_ENSURE_SUCCESS(rv, rv);

  rv = agent2->SetVisibilityState(true);
  NS_ENSURE_SUCCESS(rv, rv);

  rv = agent1->GetCanPlay(&playable);
  NS_ENSURE_SUCCESS(rv, rv);
  TEST_ENSURE_BASE(playable == AUDIO_CHANNEL_STATE_NORMAL,
    "Test2: A normal channel visible agent1 must be playable");

  rv = agent2->GetCanPlay(&playable);
  NS_ENSURE_SUCCESS(rv, rv);
  TEST_ENSURE_BASE(playable == AUDIO_CHANNEL_STATE_NORMAL,
    "Test2: A normal channel visible agent2 must be playable");

  agent1->StopPlaying();
  agent2->StopPlaying();
  return rv;
}

nsresult
TestContentChannels()
{
  nsCOMPtr<Agent> agent1 = new Agent(AUDIO_CHANNEL_CONTENT);
  nsresult rv = agent1->Init();
  NS_ENSURE_SUCCESS(rv, rv);

  nsCOMPtr<Agent> agent2 = new Agent(AUDIO_CHANNEL_CONTENT);
  rv = agent2->Init();
  NS_ENSURE_SUCCESS(rv, rv);

  // All content channels in the foreground can be allowed to play
  rv = agent1->SetVisibilityState(true);
  NS_ENSURE_SUCCESS(rv, rv);

  rv = agent2->SetVisibilityState(true);
  NS_ENSURE_SUCCESS(rv, rv);

  AudioChannelState playable;
  rv = agent1->StartPlaying(&playable);
  NS_ENSURE_SUCCESS(rv, rv);
  TEST_ENSURE_BASE(playable == AUDIO_CHANNEL_STATE_NORMAL,
    "Test3: A content channel visible agent1 must be playable");

  rv = agent2->StartPlaying(&playable);
  NS_ENSURE_SUCCESS(rv, rv);
  TEST_ENSURE_BASE(playable == AUDIO_CHANNEL_STATE_NORMAL,
    "Test3: A content channel visible agent2 must be playable");

  // Test the transition state of one content channel tried to set non-visible
  // state first when app is going to background.
  rv = agent1->SetVisibilityState(false);
  NS_ENSURE_SUCCESS(rv, rv);

  rv = agent1->GetCanPlay(&playable);
  NS_ENSURE_SUCCESS(rv, rv);
  TEST_ENSURE_BASE(playable == AUDIO_CHANNEL_STATE_NORMAL,
    "Test3: A content channel unvisible agent1 must be playable from "
    "foreground to background");

  // Test all content channels set non-visible already
  rv = agent2->SetVisibilityState(false);
  NS_ENSURE_SUCCESS(rv, rv);

  rv = agent2->GetCanPlay(&playable);
  NS_ENSURE_SUCCESS(rv, rv);
  TEST_ENSURE_BASE(playable == AUDIO_CHANNEL_STATE_NORMAL,
    "Test3: A content channel unvisible agent2 must be playable from "
    "foreground to background");

  // Clear the content channels & mActiveContentChildIDs in AudioChannelService.
  // If agent stop playable in the background, we will reserve it's childID in
  // mActiveContentChildIDs, then it can allow to play next song. So we set agents
  // to foreground first then stopping to play
  rv = agent1->SetVisibilityState(true);
  NS_ENSURE_SUCCESS(rv, rv);
  rv = agent2->SetVisibilityState(true);
  NS_ENSURE_SUCCESS(rv, rv);
  rv = agent1->StopPlaying();
  NS_ENSURE_SUCCESS(rv, rv);
  rv = agent2->StopPlaying();
  NS_ENSURE_SUCCESS(rv, rv);

  // Test that content channels can't be allow to play when they starts from
  // the background state
  rv = agent1->SetVisibilityState(false);
  NS_ENSURE_SUCCESS(rv, rv);
  rv = agent2->SetVisibilityState(false);
  NS_ENSURE_SUCCESS(rv, rv);

  rv = agent1->StartPlaying(&playable);
  NS_ENSURE_SUCCESS(rv, rv);
  TEST_ENSURE_BASE(playable == AUDIO_CHANNEL_STATE_MUTED,
    "Test3: A content channel unvisible agent1 must be muted while playing "
    "from background state");

  rv = agent2->StartPlaying(&playable);
  NS_ENSURE_SUCCESS(rv, rv);
  TEST_ENSURE_BASE(playable == AUDIO_CHANNEL_STATE_MUTED,
    "Test3: A content channel unvisible agent2 must be muted while playing "
    "from background state");

  agent1->StopPlaying();
  agent2->StopPlaying();
  return rv;
}

nsresult
TestFadedState()
{
  nsCOMPtr<Agent> normalAgent = new Agent(AUDIO_CHANNEL_NORMAL);
  nsresult rv = normalAgent->Init();
  NS_ENSURE_SUCCESS(rv, rv);

  nsCOMPtr<Agent> contentAgent = new Agent(AUDIO_CHANNEL_CONTENT);
  rv = contentAgent->Init();
  NS_ENSURE_SUCCESS(rv, rv);

  nsCOMPtr<Agent> notificationAgent = new Agent(AUDIO_CHANNEL_NOTIFICATION);
  rv = notificationAgent->Init();
  NS_ENSURE_SUCCESS(rv, rv);

  rv = normalAgent->SetVisibilityState(true);
  NS_ENSURE_SUCCESS(rv, rv);

  rv = contentAgent->SetVisibilityState(true);
  NS_ENSURE_SUCCESS(rv, rv);

  rv = notificationAgent->SetVisibilityState(true);
  NS_ENSURE_SUCCESS(rv, rv);

  AudioChannelState playable;
  rv = normalAgent->StartPlaying(&playable);
  NS_ENSURE_SUCCESS(rv, rv);
  TEST_ENSURE_BASE(playable == AUDIO_CHANNEL_STATE_NORMAL,
    "Test4: A normal channel visible agent must be playable");

  rv = contentAgent->StartPlaying(&playable);
  NS_ENSURE_SUCCESS(rv, rv);
  TEST_ENSURE_BASE(playable == AUDIO_CHANNEL_STATE_NORMAL,
    "Test4: A content channel visible agent must be playable");

  rv = notificationAgent->StartPlaying(&playable);
  NS_ENSURE_SUCCESS(rv, rv);
  TEST_ENSURE_BASE(playable == AUDIO_CHANNEL_STATE_NORMAL,
    "Test4: A notification channel visible agent must be playable");

    rv = contentAgent->GetCanPlay(&playable);
  NS_ENSURE_SUCCESS(rv, rv);
  TEST_ENSURE_BASE(playable == AUDIO_CHANNEL_STATE_FADED,
    "Test4: A content channel unvisible agent must be faded because of "
    "notification channel is playing");

  rv = contentAgent->SetVisibilityState(false);
  NS_ENSURE_SUCCESS(rv, rv);

  rv = contentAgent->GetCanPlay(&playable);
  NS_ENSURE_SUCCESS(rv, rv);
  TEST_ENSURE_BASE(playable == AUDIO_CHANNEL_STATE_FADED,
    "Test4: A content channel unvisible agent must be faded because of "
    "notification channel is playing");

  rv = notificationAgent->SetVisibilityState(false);
  NS_ENSURE_SUCCESS(rv, rv);

  rv = notificationAgent->GetCanPlay(&playable);
  NS_ENSURE_SUCCESS(rv, rv);
  TEST_ENSURE_BASE(playable == AUDIO_CHANNEL_STATE_NORMAL,
    "Test4: A notification channel unvisible agent must be playable from "
    "foreground to background");

  rv = notificationAgent->StopPlaying();
  NS_ENSURE_SUCCESS(rv, rv);

  rv = contentAgent->GetCanPlay(&playable);
  NS_ENSURE_SUCCESS(rv, rv);
  TEST_ENSURE_BASE(playable == AUDIO_CHANNEL_STATE_NORMAL,
    "Test4: A content channel unvisible agent must be playable "
    "because of notification channel is stopped");

  rv = contentAgent->SetVisibilityState(true);
  NS_ENSURE_SUCCESS(rv, rv);

  normalAgent->StopPlaying();
  contentAgent->StopPlaying();
  return rv;
}

nsresult
TestPriorities()
{
  nsCOMPtr<Agent> normalAgent = new Agent(AUDIO_CHANNEL_NORMAL);
  nsresult rv = normalAgent->Init();
  NS_ENSURE_SUCCESS(rv, rv);

  nsCOMPtr<Agent> contentAgent = new Agent(AUDIO_CHANNEL_CONTENT);
  rv = contentAgent->Init();
  NS_ENSURE_SUCCESS(rv, rv);

  nsCOMPtr<Agent> notificationAgent = new Agent(AUDIO_CHANNEL_NOTIFICATION);
  rv = notificationAgent->Init();
  NS_ENSURE_SUCCESS(rv, rv);

  nsCOMPtr<Agent> alarmAgent = new Agent(AUDIO_CHANNEL_ALARM);
  rv = alarmAgent->Init();
  NS_ENSURE_SUCCESS(rv, rv);

  nsCOMPtr<Agent> telephonyAgent = new Agent(AUDIO_CHANNEL_TELEPHONY);
  rv = telephonyAgent->Init();
  NS_ENSURE_SUCCESS(rv, rv);

  nsCOMPtr<Agent> ringerAgent = new Agent(AUDIO_CHANNEL_RINGER);
  rv = ringerAgent->Init();
  NS_ENSURE_SUCCESS(rv, rv);

  nsCOMPtr<Agent> pNotificationAgent =
    new Agent(AUDIO_CHANNEL_PUBLICNOTIFICATION);
  rv = pNotificationAgent->Init();
  NS_ENSURE_SUCCESS(rv, rv);

  AudioChannelState playable;

  rv = normalAgent->StartPlaying(&playable);
  NS_ENSURE_SUCCESS(rv, rv);
  TEST_ENSURE_BASE(playable == AUDIO_CHANNEL_STATE_MUTED,
    "Test5: A normal channel unvisible agent must be muted");

  rv = contentAgent->StartPlaying(&playable);
  NS_ENSURE_SUCCESS(rv, rv);
  TEST_ENSURE_BASE(playable == AUDIO_CHANNEL_STATE_MUTED,
    "Test5: A content channel unvisible agent agent must be muted while "
    "playing from background state");

  rv = notificationAgent->StartPlaying(&playable);
  NS_ENSURE_SUCCESS(rv, rv);
  TEST_ENSURE_BASE(playable == AUDIO_CHANNEL_STATE_NORMAL,
    "Test5: A notification channel unvisible agent must be playable");

  rv = alarmAgent->StartPlaying(&playable);
  NS_ENSURE_SUCCESS(rv, rv);
  TEST_ENSURE_BASE(playable == AUDIO_CHANNEL_STATE_NORMAL,
    "Test5: An alarm channel unvisible agent must be playable");

  rv = notificationAgent->StartPlaying(&playable);
  NS_ENSURE_SUCCESS(rv, rv);
  TEST_ENSURE_BASE(playable == AUDIO_CHANNEL_STATE_MUTED,
    "Test5: A notification channel unvisible agent must be muted when an "
    "alarm is playing");

  rv = telephonyAgent->StartPlaying(&playable);
  NS_ENSURE_SUCCESS(rv, rv);
  TEST_ENSURE_BASE(playable == AUDIO_CHANNEL_STATE_NORMAL,
    "Test5: A telephony channel unvisible agent must be playable");

  rv = alarmAgent->StartPlaying(&playable);
  NS_ENSURE_SUCCESS(rv, rv);
  TEST_ENSURE_BASE(playable == AUDIO_CHANNEL_STATE_MUTED,
    "Test5: An alarm channel unvisible agent must be muted when a telephony "
    "is playing");

  rv = ringerAgent->StartPlaying(&playable);
  NS_ENSURE_SUCCESS(rv, rv);
  TEST_ENSURE_BASE(playable == AUDIO_CHANNEL_STATE_NORMAL,
    "Test5: A ringer channel unvisible agent must be playable");

  rv = telephonyAgent->StartPlaying(&playable);
  NS_ENSURE_SUCCESS(rv, rv);
  TEST_ENSURE_BASE(playable == AUDIO_CHANNEL_STATE_MUTED,
    "Test5: A telephony channel unvisible agent must be muted when a ringer "
    "is playing");

  rv = pNotificationAgent->StartPlaying(&playable);
  NS_ENSURE_SUCCESS(rv, rv);
  TEST_ENSURE_BASE(playable == AUDIO_CHANNEL_STATE_NORMAL,
    "Test5: A pNotification channel unvisible agent must be playable");

  rv = ringerAgent->StartPlaying(&playable);
  NS_ENSURE_SUCCESS(rv, rv);
  TEST_ENSURE_BASE(playable == AUDIO_CHANNEL_STATE_MUTED,
    "Test5: A ringer channel unvisible agent must be muted when a public "
    "notification is playing");

  // Stop to play notification channel or normal/content will be faded.
  // Which already be tested on Test 4.
  rv = notificationAgent->StopPlaying();
  NS_ENSURE_SUCCESS(rv, rv);

  // Settings visible the normal channel.
  rv = normalAgent->SetVisibilityState(true);
  NS_ENSURE_SUCCESS(rv, rv);

  rv = normalAgent->GetCanPlay(&playable);
  NS_ENSURE_SUCCESS(rv, rv);
  TEST_ENSURE_BASE(playable == AUDIO_CHANNEL_STATE_NORMAL,
    "Test5: A normal channel visible agent must be playable");

  // Set the content channel as visible .
  rv = contentAgent->SetVisibilityState(true);
  NS_ENSURE_SUCCESS(rv, rv);

  // Content must be playable because visible.
  rv = contentAgent->GetCanPlay(&playable);
  NS_ENSURE_SUCCESS(rv, rv);
  TEST_ENSURE_BASE(playable == AUDIO_CHANNEL_STATE_NORMAL,
    "Test5: A content channel visible agent must be playable");

  // Set the alarm channel as visible.
  rv = alarmAgent->SetVisibilityState(true);
  NS_ENSURE_SUCCESS(rv, rv);

  rv = alarmAgent->GetCanPlay(&playable);
  NS_ENSURE_SUCCESS(rv, rv);
  TEST_ENSURE_BASE(playable == AUDIO_CHANNEL_STATE_NORMAL,
    "Test5: An alarm channel visible agent must be playable");

  // Set the telephony channel as visible.
  rv = telephonyAgent->SetVisibilityState(true);
  NS_ENSURE_SUCCESS(rv, rv);

  rv = telephonyAgent->GetCanPlay(&playable);
  NS_ENSURE_SUCCESS(rv, rv);
  TEST_ENSURE_BASE(playable == AUDIO_CHANNEL_STATE_NORMAL,
    "Test5: A telephony channel visible agent must be playable");

  // Set the ringer channel as visible.
  rv = ringerAgent->SetVisibilityState(true);
  NS_ENSURE_SUCCESS(rv, rv);

  rv = ringerAgent->GetCanPlay(&playable);
  NS_ENSURE_SUCCESS(rv, rv);
  TEST_ENSURE_BASE(playable == AUDIO_CHANNEL_STATE_NORMAL,
    "Test5: A ringer channel visible agent must be playable");

  // Set the public notification channel as visible.
  rv = pNotificationAgent->SetVisibilityState(true);
  NS_ENSURE_SUCCESS(rv, rv);

  rv = pNotificationAgent->GetCanPlay(&playable);
  NS_ENSURE_SUCCESS(rv, rv);
  TEST_ENSURE_BASE(playable == AUDIO_CHANNEL_STATE_NORMAL,
    "Test5: A pNotification channel visible agent must be playable");

  normalAgent->StopPlaying();
  contentAgent->StopPlaying();
  alarmAgent->StopPlaying();
  telephonyAgent->StopPlaying();
  ringerAgent->StopPlaying();
  pNotificationAgent->StopPlaying();
  return rv;
}

int main(int argc, char** argv)
{
  ScopedXPCOM xpcom("AudioChannelService");
  if (xpcom.failed())
    return 1;

  if (NS_FAILED(TestDoubleStartPlaying()))
    return 1;

  if (NS_FAILED(TestOneNormalChannel()))
    return 1;

  if (NS_FAILED(TestTwoNormalChannels()))
    return 1;

  if (NS_FAILED(TestContentChannels()))
    return 1;

  if (NS_FAILED(TestFadedState()))
    return 1;

  if (NS_FAILED(TestPriorities()))
    return 1;

  return 0;
}

