/* Copyright 2012 Mozilla Foundation and Mozilla contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Set to true to debug all RIL layers
this.DEBUG_ALL = false;

// Set individually to debug specific layers
this.DEBUG_WORKER = false || DEBUG_ALL;
this.DEBUG_CONTENT_HELPER = false || DEBUG_ALL;
this.DEBUG_RIL = false || DEBUG_ALL;

this.REQUEST_GET_SIM_STATUS = 1;
this.REQUEST_ENTER_SIM_PIN = 2;
this.REQUEST_ENTER_SIM_PUK = 3;
this.REQUEST_ENTER_SIM_PIN2 = 4;
this.REQUEST_ENTER_SIM_PUK2 = 5;
this.REQUEST_CHANGE_SIM_PIN = 6;
this.REQUEST_CHANGE_SIM_PIN2 = 7;
this.REQUEST_ENTER_NETWORK_DEPERSONALIZATION_CODE = 8;
this.REQUEST_GET_CURRENT_CALLS = 9;
this.REQUEST_DIAL = 10;
this.REQUEST_GET_IMSI = 11;
this.REQUEST_HANGUP = 12;
this.REQUEST_HANGUP_WAITING_OR_BACKGROUND = 13;
this.REQUEST_HANGUP_FOREGROUND_RESUME_BACKGROUND = 14;
this.REQUEST_SWITCH_WAITING_OR_HOLDING_AND_ACTIVE = 15;
this.REQUEST_SWITCH_HOLDING_AND_ACTIVE = 15;
this.REQUEST_CONFERENCE = 16;
this.REQUEST_UDUB = 17;
this.REQUEST_LAST_CALL_FAIL_CAUSE = 18;
this.REQUEST_SIGNAL_STRENGTH = 19;
this.REQUEST_VOICE_REGISTRATION_STATE = 20;
this.REQUEST_DATA_REGISTRATION_STATE = 21;
this.REQUEST_OPERATOR = 22;
this.REQUEST_RADIO_POWER = 23;
this.REQUEST_DTMF = 24;
this.REQUEST_SEND_SMS = 25;
this.REQUEST_SEND_SMS_EXPECT_MORE = 26;
this.REQUEST_SETUP_DATA_CALL = 27;
this.REQUEST_SIM_IO = 28;
this.REQUEST_SEND_USSD = 29;
this.REQUEST_CANCEL_USSD = 30;
this.REQUEST_GET_CLIR = 31;
this.REQUEST_SET_CLIR = 32;
this.REQUEST_QUERY_CALL_FORWARD_STATUS = 33;
this.REQUEST_SET_CALL_FORWARD = 34;
this.REQUEST_QUERY_CALL_WAITING = 35;
this.REQUEST_SET_CALL_WAITING = 36;
this.REQUEST_SMS_ACKNOWLEDGE = 37;
this.REQUEST_GET_IMEI = 38;
this.REQUEST_GET_IMEISV = 39;
this.REQUEST_ANSWER = 40;
this.REQUEST_DEACTIVATE_DATA_CALL = 41;
this.REQUEST_QUERY_FACILITY_LOCK = 42;
this.REQUEST_SET_FACILITY_LOCK = 43;
this.REQUEST_CHANGE_BARRING_PASSWORD = 44;
this.REQUEST_QUERY_NETWORK_SELECTION_MODE = 45;
this.REQUEST_SET_NETWORK_SELECTION_AUTOMATIC = 46;
this.REQUEST_SET_NETWORK_SELECTION_MANUAL = 47;
this.REQUEST_QUERY_AVAILABLE_NETWORKS = 48;
this.REQUEST_DTMF_START = 49;
this.REQUEST_DTMF_STOP = 50;
this.REQUEST_BASEBAND_VERSION = 51;
this.REQUEST_SEPARATE_CONNECTION = 52;
this.REQUEST_SET_MUTE = 53;
this.REQUEST_GET_MUTE = 54;
this.REQUEST_QUERY_CLIP = 55;
this.REQUEST_LAST_DATA_CALL_FAIL_CAUSE = 56;
this.REQUEST_DATA_CALL_LIST = 57;
this.REQUEST_RESET_RADIO = 58;
this.REQUEST_OEM_HOOK_RAW = 59;
this.REQUEST_OEM_HOOK_STRINGS = 60;
this.REQUEST_SCREEN_STATE = 61;
this.REQUEST_SET_SUPP_SVC_NOTIFICATION = 62;
this.REQUEST_WRITE_SMS_TO_SIM = 63;
this.REQUEST_DELETE_SMS_ON_SIM = 64;
this.REQUEST_SET_BAND_MODE = 65;
this.REQUEST_QUERY_AVAILABLE_BAND_MODE = 66;
this.REQUEST_STK_GET_PROFILE = 67;
this.REQUEST_STK_SET_PROFILE = 68;
this.REQUEST_STK_SEND_ENVELOPE_COMMAND = 69;
this.REQUEST_STK_SEND_TERMINAL_RESPONSE = 70;
this.REQUEST_STK_HANDLE_CALL_SETUP_REQUESTED_FROM_SIM = 71;
this.REQUEST_EXPLICIT_CALL_TRANSFER = 72;
this.REQUEST_SET_PREFERRED_NETWORK_TYPE = 73;
this.REQUEST_GET_PREFERRED_NETWORK_TYPE = 74;
this.REQUEST_GET_NEIGHBORING_CELL_IDS = 75;
this.REQUEST_SET_LOCATION_UPDATES = 76;
this.REQUEST_CDMA_SET_SUBSCRIPTION_SOURCE = 77;
this.REQUEST_CDMA_SET_ROAMING_PREFERENCE = 78;
this.REQUEST_CDMA_QUERY_ROAMING_PREFERENCE = 79;
this.REQUEST_SET_TTY_MODE = 80;
this.REQUEST_QUERY_TTY_MODE = 81;
this.REQUEST_CDMA_SET_PREFERRED_VOICE_PRIVACY_MODE = 82;
this.REQUEST_CDMA_QUERY_PREFERRED_VOICE_PRIVACY_MODE = 83;
this.REQUEST_CDMA_FLASH = 84;
this.REQUEST_CDMA_BURST_DTMF = 85;
this.REQUEST_CDMA_VALIDATE_AND_WRITE_AKEY = 86;
this.REQUEST_CDMA_SEND_SMS = 87;
this.REQUEST_CDMA_SMS_ACKNOWLEDGE = 88;
this.REQUEST_GSM_GET_BROADCAST_SMS_CONFIG = 89;
this.REQUEST_GSM_SET_BROADCAST_SMS_CONFIG = 90;
this.REQUEST_GSM_SMS_BROADCAST_ACTIVATION = 91;
this.REQUEST_CDMA_GET_BROADCAST_SMS_CONFIG = 92;
this.REQUEST_CDMA_SET_BROADCAST_SMS_CONFIG = 93;
this.REQUEST_CDMA_SMS_BROADCAST_ACTIVATION = 94;
this.REQUEST_CDMA_SUBSCRIPTION = 95;
this.REQUEST_CDMA_WRITE_SMS_TO_RUIM = 96;
this.REQUEST_CDMA_DELETE_SMS_ON_RUIM = 97;
this.REQUEST_DEVICE_IDENTITY = 98;
this.REQUEST_EXIT_EMERGENCY_CALLBACK_MODE = 99;
this.REQUEST_GET_SMSC_ADDRESS = 100;
this.REQUEST_SET_SMSC_ADDRESS = 101;
this.REQUEST_REPORT_SMS_MEMORY_STATUS = 102;
this.REQUEST_REPORT_STK_SERVICE_IS_RUNNING = 103;
this.REQUEST_CDMA_GET_SUBSCRIPTION_SOURCE = 104;
this.REQUEST_ISIM_AUTHENTICATION = 105;
this.REQUEST_ACKNOWLEDGE_INCOMING_GSM_SMS_WITH_PDU = 106;
this.REQUEST_STK_SEND_ENVELOPE_WITH_STATUS = 107;
this.REQUEST_DIAL_EMERGENCY_CALL = 10016;

// Akami/Maguro specific parcel types.
this.REQUEST_VOICE_RADIO_TECH = 105;
this.REQUEST_IMS_REGISTRATION_STATE = 106;
this.REQUEST_IMS_SEND_SMS = 107;
this.REQUEST_GET_DATA_CALL_PROFILE = 108;
this.REQUEST_SET_UICC_SUBSCRIPTION = 109;
this.REQUEST_SET_DATA_SUBSCRIPTION = 110;
this.REQUEST_GET_UICC_SUBSCRIPTION = 111;
this.REQUEST_GET_DATA_SUBSCRIPTION = 112;
this.REQUEST_SET_SUBSCRIPTION_MODE = 113;
this.REQUEST_SET_TRANSMIT_POWER = 114;
this.REQUEST_SETUP_QOS = 115;
this.REQUEST_RELEASE_QOS = 116;
this.REQUEST_GET_QOS_STATUS = 117;
this.REQUEST_MODIFY_QOS = 118;
this.REQUEST_SUSPEND_QOS = 119;
this.REQUEST_RESUME_QOS = 120;

this.RESPONSE_TYPE_SOLICITED = 0;
this.RESPONSE_TYPE_UNSOLICITED = 1;

this.UNSOLICITED_RESPONSE_BASE = 1000;
this.UNSOLICITED_RESPONSE_RADIO_STATE_CHANGED = 1000;
this.UNSOLICITED_RESPONSE_CALL_STATE_CHANGED = 1001;
this.UNSOLICITED_RESPONSE_VOICE_NETWORK_STATE_CHANGED = 1002;
this.UNSOLICITED_RESPONSE_NEW_SMS = 1003;
this.UNSOLICITED_RESPONSE_NEW_SMS_STATUS_REPORT = 1004;
this.UNSOLICITED_RESPONSE_NEW_SMS_ON_SIM = 1005;
this.UNSOLICITED_ON_USSD = 1006;
this.UNSOLICITED_ON_USSD_REQUEST = 1007;
this.UNSOLICITED_NITZ_TIME_RECEIVED = 1008;
this.UNSOLICITED_SIGNAL_STRENGTH = 1009;
this.UNSOLICITED_DATA_CALL_LIST_CHANGED = 1010;
this.UNSOLICITED_SUPP_SVC_NOTIFICATION = 1011;
this.UNSOLICITED_STK_SESSION_END = 1012;
this.UNSOLICITED_STK_PROACTIVE_COMMAND = 1013;
this.UNSOLICITED_STK_EVENT_NOTIFY = 1014;
this.UNSOLICITED_STK_CALL_SETUP = 1015;
this.UNSOLICITED_SIM_SMS_STORAGE_FULL = 1016;
this.UNSOLICITED_SIM_REFRESH = 1017;
this.UNSOLICITED_CALL_RING = 1018;
this.UNSOLICITED_RESPONSE_SIM_STATUS_CHANGED = 1019;
this.UNSOLICITED_RESPONSE_CDMA_NEW_SMS = 1020;
this.UNSOLICITED_RESPONSE_NEW_BROADCAST_SMS = 1021;
this.UNSOLICITED_CDMA_RUIM_SMS_STORAGE_FULL = 1022;
this.UNSOLICITED_RESTRICTED_STATE_CHANGED = 1023;
this.UNSOLICITED_ENTER_EMERGENCY_CALLBACK_MODE = 1024;
this.UNSOLICITED_CDMA_CALL_WAITING = 1025;
this.UNSOLICITED_CDMA_OTA_PROVISION_STATUS = 1026;
this.UNSOLICITED_CDMA_INFO_REC = 1027;
this.UNSOLICITED_OEM_HOOK_RAW = 1028;
this.UNSOLICITED_RINGBACK_TONE = 1029;
this.UNSOLICITED_RESEND_INCALL_MUTE = 1030;
this.UNSOLICITED_CDMA_SUBSCRIPTION_SOURCE_CHANGED = 1031;
this.UNSOLICITED_CDMA_PRL_CHANGED = 1032;
this.UNSOLICITED_EXIT_EMERGENCY_CALLBACK_MODE = 1033;
this.UNSOLICITED_RIL_CONNECTED = 1034;

// Akami/Maguro specific parcels.
this.UNSOLICITED_VOICE_RADIO_TECH_CHANGED = 1034;
this.UNSOLICITED_RESPONSE_IMS_NETWORK_STATE_CHANGED = 1035;
this.UNSOLICITED_RESPONSE_TETHERED_MODE_STATE_CHANGED = 1036;
this.UNSOLICITED_RESPONSE_DATA_NETWORK_STATE_CHANGED = 1037;
this.UNSOLICITED_ON_SS = 1038;
this.UNSOLICITED_STK_CC_ALPHA_NOTIFY = 1039;
this.UNSOLICITED_UICC_SUBSCRIPTION_STATUS_CHANGED = 1040;
this.UNSOLICITED_QOS_STATE_CHANGED_IND = 1041;

this.ERROR_SUCCESS = 0;
this.ERROR_RADIO_NOT_AVAILABLE = 1;
this.ERROR_GENERIC_FAILURE = 2;
this.ERROR_PASSWORD_INCORRECT = 3;
this.ERROR_SIM_PIN2 = 4;
this.ERROR_SIM_PUK2 = 5;
this.ERROR_REQUEST_NOT_SUPPORTED = 6;
this.ERROR_CANCELLED = 7;
this.ERROR_OP_NOT_ALLOWED_DURING_VOICE_CALL = 8;
this.ERROR_OP_NOT_ALLOWED_BEFORE_REG_TO_NW = 9;
this.ERROR_SMS_SEND_FAIL_RETRY = 10;
this.ERROR_SIM_ABSENT = 11;
this.ERROR_SUBSCRIPTION_NOT_AVAILABLE = 12;
this.ERROR_MODE_NOT_SUPPORTED = 13;
this.ERROR_FDN_CHECK_FAILURE = 14;
this.ERROR_ILLEGAL_SIM_OR_ME = 15;
this.ERROR_DIAL_MODIFIED_TO_USSD = 17;
this.ERROR_DIAL_MODIFIED_TO_SS = 18;
this.ERROR_DIAL_MODIFIED_TO_DIAL = 19;
this.ERROR_USSD_MODIFIED_TO_DIAL = 20;
this.ERROR_USSD_MODIFIED_TO_SS = 21;
this.ERROR_USSD_MODIFIED_TO_USSD = 22;
this.ERROR_SS_MODIFIED_TO_DIAL = 23;
this.ERROR_SS_MODIFIED_TO_USSD = 24;
this.ERROR_SS_MODIFIED_TO_SS = 25;
this.ERROR_SUBSCRIPTION_NOT_SUPPORTED = 26;

this.GECKO_ERROR_SUCCESS = null;
this.GECKO_ERROR_RADIO_NOT_AVAILABLE = "RadioNotAvailable";
this.GECKO_ERROR_GENERIC_FAILURE = "GenericFailure";
this.GECKO_ERROR_REQUEST_NOT_SUPPORTED = "RequestNotSupported";
this.GECKO_ERROR_ILLEGAL_SIM_OR_ME = "IllegalSIMorME";
this.GECKO_ERROR_PASSWORD_INCORRECT = "IncorrectPassword";

this.RIL_ERROR_TO_GECKO_ERROR = {};
RIL_ERROR_TO_GECKO_ERROR[ERROR_SUCCESS] = GECKO_ERROR_SUCCESS;
RIL_ERROR_TO_GECKO_ERROR[ERROR_RADIO_NOT_AVAILABLE] = GECKO_ERROR_RADIO_NOT_AVAILABLE;
RIL_ERROR_TO_GECKO_ERROR[ERROR_GENERIC_FAILURE] = GECKO_ERROR_GENERIC_FAILURE;
RIL_ERROR_TO_GECKO_ERROR[ERROR_REQUEST_NOT_SUPPORTED] = GECKO_ERROR_REQUEST_NOT_SUPPORTED;
RIL_ERROR_TO_GECKO_ERROR[ERROR_ILLEGAL_SIM_OR_ME] = GECKO_ERROR_ILLEGAL_SIM_OR_ME;
RIL_ERROR_TO_GECKO_ERROR[ERROR_PASSWORD_INCORRECT] = GECKO_ERROR_PASSWORD_INCORRECT;

// 3GPP 23.040 clause 9.2.3.6 TP-Message-Reference(TP-MR):
// The number of times the MS automatically repeats the SMS-SUBMIT shall be in
// the range 1 to 3 but the precise number is an implementation matter.
this.SMS_RETRY_MAX = 3;

this.RADIO_STATE_OFF = 0;
this.RADIO_STATE_UNAVAILABLE = 1;
this.RADIO_STATE_ON = 2;

// RIL v5 legacy constants:
this.RADIO_STATE_SIM_NOT_READY = 2;
this.RADIO_STATE_SIM_LOCKED_OR_ABSENT = 3;
this.RADIO_STATE_SIM_READY = 4;
this.RADIO_STATE_RUIM_NOT_READY = 5;
this.RADIO_STATE_RUIM_READY = 6;
this.RADIO_STATE_RUIM_LOCKED_OR_ABSENT = 7;
this.RADIO_STATE_NV_NOT_READY = 8;
this.RADIO_STATE_NV_READY = 9;

this.CARD_STATE_ABSENT = 0;
this.CARD_STATE_PRESENT = 1;
this.CARD_STATE_ERROR = 2;

this.CARD_PERSOSUBSTATE_UNKNOWN = 0;
this.CARD_PERSOSUBSTATE_IN_PROGRESS = 1;
this.CARD_PERSOSUBSTATE_READY = 2;
this.CARD_PERSOSUBSTATE_SIM_NETWORK = 3;
this.CARD_PERSOSUBSTATE_SIM_NETWORK_SUBSET = 4;
this.CARD_PERSOSUBSTATE_SIM_CORPORATE = 5;
this.CARD_PERSOSUBSTATE_SIM_SERVICE_PROVIDER = 6;
this.CARD_PERSOSUBSTATE_SIM_SIM = 7;
this.CARD_PERSOSUBSTATE_SIM_NETWORK_PUK = 8;
this.CARD_PERSOSUBSTATE_SIM_NETWORK_SUBSET_PUK = 9;
this.CARD_PERSOSUBSTATE_SIM_CORPORATE_PUK = 10;
this.CARD_PERSOSUBSTATE_SIM_SERVICE_PROVIDER_PUK = 11;
this.CARD_PERSOSUBSTATE_SIM_SIM_PUK = 12;
this.CARD_PERSOSUBSTATE_RUIM_NETWORK1 = 13;
this.CARD_PERSOSUBSTATE_RUIM_NETWORK2 = 14;
this.CARD_PERSOSUBSTATE_RUIM_HRPD = 15;
this.CARD_PERSOSUBSTATE_RUIM_CORPORATE = 16;
this.CARD_PERSOSUBSTATE_RUIM_SERVICE_PROVIDER = 17;
this.CARD_PERSOSUBSTATE_RUIM_RUIM = 18;
this.CARD_PERSOSUBSTATE_RUIM_NETWORK1_PUK = 19;
this.CARD_PERSOSUBSTATE_RUIM_NETWORK2_PUK = 20;
this.CARD_PERSOSUBSTATE_RUIM_HRPD_PUK = 21;
this.CARD_PERSOSUBSTATE_RUIM_CORPORATE_PUK = 22;
this.CARD_PERSOSUBSTATE_RUIM_SERVICE_PROVIDER_PUK = 23;
this.CARD_PERSOSUBSTATE_RUIM_RUIM_PUK = 24;

this.CARD_APPSTATE_ILLEGAL = -1;
this.CARD_APPSTATE_UNKNOWN = 0;
this.CARD_APPSTATE_DETECTED = 1;
this.CARD_APPSTATE_PIN = 2; // If PIN1 or UPin is required.
this.CARD_APPSTATE_PUK = 3; // If PUK1 or Puk for UPin is required.
this.CARD_APPSTATE_SUBSCRIPTION_PERSO = 4; // perso_substate should be looked
                                            // at when app_state is assigned
                                            // to this value.
this.CARD_APPSTATE_READY = 5;

this.CARD_PINSTATE_UNKNOWN = 0;
this.CARD_PINSTATE_ENABLED_NOT_VERIFIED = 1;
this.CARD_PINSTATE_ENABLED_VERIFIED = 2;
this.CARD_PINSTATE_DISABLED = 3;
this.CARD_PINSTATE_ENABLED_BLOCKED = 4;
this.CARD_PINSTATE_ENABLED_PERM_BLOCKED = 5;

this.CARD_APPTYPE_UNKNOWN = 0;
this.CARD_APPTYPE_SIM = 1;
this.CARD_APPTYPE_USIM = 2;
this.CARD_APPTYPE_RUIM = 3;
this.CARD_APPTYPE_CSIM = 4;
this.CARD_APPTYPE_ISIM = 5;

this.CARD_MAX_APPS = 8;

this.NETWORK_STATE_UNKNOWN = "unknown";
this.NETWORK_STATE_AVAILABLE = "available";
this.NETWORK_STATE_CONNECTED = "connected";
this.NETWORK_STATE_FORBIDDEN = "forbidden";

this.NETWORK_SELECTION_MODE_AUTOMATIC = 0;
this.NETWORK_SELECTION_MODE_MANUAL = 1;

this.NETWORK_INFO_VOICE_REGISTRATION_STATE = "voiceRegistrationState";
this.NETWORK_INFO_DATA_REGISTRATION_STATE = "dataRegistrationState";
this.NETWORK_INFO_OPERATOR = "operator";
this.NETWORK_INFO_NETWORK_SELECTION_MODE = "networkSelectionMode";
this.NETWORK_INFO_MESSAGE_TYPES = [
  NETWORK_INFO_VOICE_REGISTRATION_STATE,
  NETWORK_INFO_DATA_REGISTRATION_STATE,
  NETWORK_INFO_OPERATOR,
  NETWORK_INFO_NETWORK_SELECTION_MODE
];

this.GECKO_PREFERRED_NETWORK_TYPE_WCDMA_GSM = "wcdma/gsm";
this.GECKO_PREFERRED_NETWORK_TYPE_GSM_ONLY = "gsm";
this.GECKO_PREFERRED_NETWORK_TYPE_WCDMA_ONLY = "wcdma";
this.GECKO_PREFERRED_NETWORK_TYPE_DEFAULT = GECKO_PREFERRED_NETWORK_TYPE_WCDMA_GSM;
this.RIL_PREFERRED_NETWORK_TYPE_TO_GECKO = [
  GECKO_PREFERRED_NETWORK_TYPE_WCDMA_GSM,
  GECKO_PREFERRED_NETWORK_TYPE_GSM_ONLY,
  GECKO_PREFERRED_NETWORK_TYPE_WCDMA_ONLY
];

// Network registration states. See TS 27.007 7.2
this.NETWORK_CREG_STATE_NOT_SEARCHING = 0;
this.NETWORK_CREG_STATE_REGISTERED_HOME = 1;
this.NETWORK_CREG_STATE_SEARCHING = 2;
this.NETWORK_CREG_STATE_DENIED = 3;
this.NETWORK_CREG_STATE_UNKNOWN = 4;
this.NETWORK_CREG_STATE_REGISTERED_ROAMING = 5;
this.NETWORK_CREG_STATE_NOT_SEARCHING_EMERGENCY_CALLS = 10;
this.NETWORK_CREG_STATE_SEARCHING_EMERGENCY_CALLS = 12;
this.NETWORK_CREG_STATE_DENIED_EMERGENCY_CALLS = 13;
this.NETWORK_CREG_STATE_UNKNOWN_EMERGENCY_CALLS = 14;

this.NETWORK_CREG_TECH_UNKNOWN = 0;
this.NETWORK_CREG_TECH_GPRS = 1;
this.NETWORK_CREG_TECH_EDGE = 2;
this.NETWORK_CREG_TECH_UMTS = 3;
this.NETWORK_CREG_TECH_IS95A = 4;
this.NETWORK_CREG_TECH_IS95B = 5;
this.NETWORK_CREG_TECH_1XRTT = 6;
this.NETWORK_CREG_TECH_EVDO0 = 7;
this.NETWORK_CREG_TECH_EVDOA = 8;
this.NETWORK_CREG_TECH_HSDPA = 9;
this.NETWORK_CREG_TECH_HSUPA = 10;
this.NETWORK_CREG_TECH_HSPA = 11;
this.NETWORK_CREG_TECH_EVDOB = 12;
this.NETWORK_CREG_TECH_EHRPD = 13;
this.NETWORK_CREG_TECH_LTE = 14;
this.NETWORK_CREG_TECH_HSPAP = 15;

this.CALL_STATE_ACTIVE = 0;
this.CALL_STATE_HOLDING = 1;
this.CALL_STATE_DIALING = 2;
this.CALL_STATE_ALERTING = 3;
this.CALL_STATE_INCOMING = 4;
this.CALL_STATE_WAITING = 5;
this.CALL_STATE_BUSY = 6;

this.TOA_INTERNATIONAL = 0x91;
this.TOA_UNKNOWN = 0x81;

this.CALL_PRESENTATION_ALLOWED = 0;
this.CALL_PRESENTATION_RESTRICTED = 1;
this.CALL_PRESENTATION_UNKNOWN = 2;
this.CALL_PRESENTATION_PAYPHONE = 3;

// Call forwarding actions, see TS 27.007 7.11 "mode"
this.CALL_FORWARD_ACTION_QUERY_STATUS = 2;

// ICC commands, see TS 27.007 +CRSM commands
this.ICC_COMMAND_SEEK = 0xa2;
this.ICC_COMMAND_READ_BINARY = 0xb0;
this.ICC_COMMAND_READ_RECORD = 0xb2;
this.ICC_COMMAND_GET_RESPONSE = 0xc0;
this.ICC_COMMAND_UPDATE_BINARY = 0xd6;
this.ICC_COMMAND_UPDATE_RECORD = 0xdc;

// ICC constants, GSM SIM file ids from TS 51.011
this.ICC_EF_ICCID  = 0x2fe2;
this.ICC_EF_IMG    = 0x4f20;
this.ICC_EF_PBR    = 0x4f30;
this.ICC_EF_PLMNsel = 0x6f30; // PLMN for SIM
this.ICC_EF_SST    = 0x6f38;
this.ICC_EF_UST    = 0x6f38; // For USIM
this.ICC_EF_ADN    = 0x6f3a;
this.ICC_EF_FDN    = 0x6f3b;
this.ICC_EF_SMS    = 0x6f3c;
this.ICC_EF_MSISDN = 0x6f40;
this.ICC_EF_CBMI   = 0x6f45;
this.ICC_EF_SPN    = 0x6f46;
this.ICC_EF_SDN    = 0x6f49;
this.ICC_EF_EXT1   = 0x6f4a;
this.ICC_EF_EXT2   = 0x6f4b;
this.ICC_EF_EXT3   = 0x6f4c;
this.ICC_EF_CBMIR  = 0x6f50;
this.ICC_EF_AD     = 0x6fad;
this.ICC_EF_PNN    = 0x6fc5;
this.ICC_EF_OPL    = 0x6fc6;
this.ICC_EF_MBDN   = 0x6fc7;
this.ICC_EF_EXT6   = 0x6fc8;   // Ext record for EF[MBDN]
this.ICC_EF_MBI    = 0x6fc9;
this.ICC_EF_MWIS   = 0x6fca;
this.ICC_EF_CFIS   = 0x6fcb;
this.ICC_EF_SPDI   = 0x6fcd;

// Types of files  TS 11.11 9.3
this.TYPE_RFU = 0;
this.TYPE_MF  = 1;
this.TYPE_DF  = 2;
this.TYPE_EF  = 4;

this.RESPONSE_DATA_FILE_SIZE = 2;
this.RESPONSE_DATA_FILE_ID_1 = 4;
this.RESPONSE_DATA_FILE_ID_2 = 5;
this.RESPONSE_DATA_FILE_TYPE = 6;
this.RESPONSE_DATA_RFU_3 = 7;
this.RESPONSE_DATA_ACCESS_CONDITION_1 = 8;
this.RESPONSE_DATA_ACCESS_CONDITION_2 = 9;
this.RESPONSE_DATA_ACCESS_CONDITION_3 = 10;
this.RESPONSE_DATA_FILE_STATUS = 11;
this.RESPONSE_DATA_LENGTH = 12;
this.RESPONSE_DATA_STRUCTURE = 13;
this.RESPONSE_DATA_RECORD_LENGTH = 14;

// Types of files  TS 11.11 9.3
this.EF_TYPE_TRANSPARENT = 0;
this.EF_TYPE_LINEAR_FIXED = 1;
this.EF_TYPE_CYCLIC = 3;

// Status code of EFsms
// see 3GPP TS 51.011 clause 10.5.3
this.EFSMS_STATUS_FREE       = 0x00;
this.EFSMS_STATUS_READ       = 0x01;
this.EFSMS_STATUS_TO_BE_READ = 0x03;
this.EFSMS_STATUS_TO_BE_SENT = 0x07;

// For retrieving MSISDN, TS 151.011 clause 10.5.5
this.MSISDN_FOOTER_SIZE_BYTES = 14;
this.MSISDN_MAX_NUMBER_SIZE_BYTES = 10;

// READ_RECORD mode,  TS 102.221
this.READ_RECORD_ABSOLUTE_MODE = 4;

// GET_RESPONSE mandatory response size for EF, see TS 51.011 clause 9, 
// 'Response data in case of an EF.'
this.GET_RESPONSE_EF_SIZE_BYTES = 15;

// EF path
this.EF_PATH_MF_SIM       = "3f00";
this.EF_PATH_DF_PHONEBOOK = "5f3a";
this.EF_PATH_DF_TELECOM   = "7f10";
this.EF_PATH_DF_GSM       = "7f20";
this.EF_PATH_ADF_USIM     = "7fff";

// Status code of sw1 for ICC I/O,
// see GSM11.11 and TS 51.011 clause 9.4, and ISO 7816-4
this.ICC_STATUS_NORMAL_ENDING = 0x90;
this.ICC_STATUS_NORMAL_ENDING_WITH_EXTRA = 0x91;
this.ICC_STATUS_SAT_BUSY = 0x93;
this.ICC_STATUS_WITH_SIM_DATA = 0x9e;
this.ICC_STATUS_WITH_RESPONSE_DATA = 0x9f;
this.ICC_STATUS_ERROR_WRONG_LENGTH = 0x67;
this.ICC_STATUS_ERROR_COMMAND_NOT_ALLOWED = 0x69;
this.ICC_STATUS_ERROR_WRONG_PARAMETERS = 0x6a;

// ICC call barring facility.
// TS 27.007, clause 7.4, +CLCK
this.ICC_CB_FACILITY_SIM = "SC";

// ICC service class
// TS 27.007, clause 7.4, +CLCK
this.ICC_SERVICE_CLASS_NONE = 0; // no user input
this.ICC_SERVICE_CLASS_VOICE = (1 << 0);
this.ICC_SERVICE_CLASS_DATA = (1 << 1);
this.ICC_SERVICE_CLASS_FAX = (1 << 2);
this.ICC_SERVICE_CLASS_SMS = (1 << 3);
this.ICC_SERVICE_CLASS_DATA_SYNC = (1 << 4);
this.ICC_SERVICE_CLASS_DATA_ASYNC = (1 << 5);
this.ICC_SERVICE_CLASS_PACKET = (1 << 6);
this.ICC_SERVICE_CLASS_PAD = (1 << 7);
this.ICC_SERVICE_CLASS_MAX = (1 << 7); // Max ICC_SERVICE_CLASS value

this.ICC_USIM_TYPE1_TAG   = 0xa8;
this.ICC_USIM_TYPE2_TAG   = 0xa9;
this.ICC_USIM_TYPE3_TAG   = 0xaa;
this.ICC_USIM_EFADN_TAG   = 0xc0;
this.ICC_USIM_EFIAP_TAG   = 0xc1;
this.ICC_USIM_EFEXT1_TAG  = 0xc2;
this.ICC_USIM_EFSNE_TAG   = 0xc3;
this.ICC_USIM_EFANR_TAG   = 0xc4;
this.ICC_USIM_EFPBC_TAG   = 0xc5;
this.ICC_USIM_EFGRP_TAG   = 0xc6;
this.ICC_USIM_EFAAS_TAG   = 0xc7;
this.ICC_USIM_EFGSD_TAG   = 0xc8;
this.ICC_USIM_EFUID_TAG   = 0xc9;
this.ICC_USIM_EFEMAIL_TAG = 0xca;
this.ICC_USIM_EFCCP1_TAG  = 0xcb;

/**
 * STK constants.
 */
//  Tags for Ber Tlv.
this.BER_UNKNOWN_TAG = 0x00;
this.BER_PROACTIVE_COMMAND_TAG = 0xd0;
this.BER_SMS_PP_DOWNLOAD_TAG = 0xd1;
this.BER_MENU_SELECTION_TAG = 0xd3;
this.BER_EVENT_DOWNLOAD_TAG = 0xd6;

// Flags in Comprehension TLV.
this.COMPREHENSIONTLV_FLAG_CR = 0x80;  // Comprehension required.

// Tags for Comprehension TLV.
this.COMPREHENSIONTLV_TAG_COMMAND_DETAILS = 0x01;
this.COMPREHENSIONTLV_TAG_DEVICE_ID = 0x02;
this.COMPREHENSIONTLV_TAG_RESULT = 0x03;
this.COMPREHENSIONTLV_TAG_DURATION = 0x04;
this.COMPREHENSIONTLV_TAG_ALPHA_ID = 0x05;
this.COMPREHENSIONTLV_TAG_ADDRESS = 0x06;
this.COMPREHENSIONTLV_TAG_SUBADDRESS = 0x08;
this.COMPREHENSIONTLV_TAG_SMS_TPDU = 0x0b;
this.COMPREHENSIONTLV_TAG_TEXT_STRING = 0x0d;
this.COMPREHENSIONTLV_TAG_TONE = 0x0e;
this.COMPREHENSIONTLV_TAG_ITEM = 0x0f;
this.COMPREHENSIONTLV_TAG_ITEM_ID = 0x10;
this.COMPREHENSIONTLV_TAG_RESPONSE_LENGTH = 0x11;
this.COMPREHENSIONTLV_TAG_FILE_LIST = 0x12;
this.COMPREHENSIONTLV_TAG_LOCATION_INFO = 0x13;
this.COMPREHENSIONTLV_TAG_IMEI = 0x14;
this.COMPREHENSIONTLV_TAG_HELP_REQUEST = 0x15;
this.COMPREHENSIONTLV_TAG_NMR = 0x16;
this.COMPREHENSIONTLV_TAG_DEFAULT_TEXT = 0x17;
this.COMPREHENSIONTLV_TAG_CAUSE = 0x1a;
this.COMPREHENSIONTLV_TAG_LOCATION_STATUS = 0x1b;
this.COMPREHENSIONTLV_TAG_TRANSACTION_ID = 0x1c;
this.COMPREHENSIONTLV_TAG_EVENT_LIST = 0x19;
this.COMPREHENSIONTLV_TAG_ICON_ID = 0x1e;
this.COMPREHENSIONTLV_TAG_ICON_ID_LIST = 0x1f;
this.COMPREHENSIONTLV_TAG_DATE_TIME_ZONE = 0x26;
this.COMPREHENSIONTLV_TAG_IMMEDIATE_RESPONSE = 0x2b;
this.COMPREHENSIONTLV_TAG_LANGUAGE = 0x2d;
this.COMPREHENSIONTLV_TAG_URL = 0x31;
this.COMPREHENSIONTLV_TAG_ACCESS_TECH = 0x3f;
this.COMPREHENSIONTLV_TAG_SERVICE_RECORD = 0x41;
this.COMPREHENSIONTLV_TAG_IMEISV = 0x62;
this.COMPREHENSIONTLV_TAG_BATTERY_STATE = 0x63;
this.COMPREHENSIONTLV_TAG_NETWORK_SEARCH_MODE = 0x65;
this.COMPREHENSIONTLV_TAG_MEID = 0x6d;
this.COMPREHENSIONTLV_TAG_BROADCAST_NETWORK_INFO = 0x7a;

// Tags for Service Provider Display Information TLV
this.SPDI_TAG_SPDI = 0xa3;
this.SPDI_TAG_PLMN_LIST = 0x80;

// MM INFORMATION message content IEIs
// See 3GPP TS 24.008 table 9.2.18
this.PNN_IEI_FULL_NETWORK_NAME = 0x43;
this.PNN_IEI_SHORT_NETWORK_NAME = 0x45;

// Device identifiers, see TS 11.14, clause 12.7
this.STK_DEVICE_ID_KEYPAD = 0x01;
this.STK_DEVICE_ID_DISPLAY = 0x02;
this.STK_DEVICE_ID_EARPIECE = 0x03;
this.STK_DEVICE_ID_SIM = 0x81;
this.STK_DEVICE_ID_ME = 0x82;
this.STK_DEVICE_ID_NETWORK = 0x83;

// STK Proactive commands.
this.STK_CMD_REFRESH = 0x01;
this.STK_CMD_MORE_TIME = 0x02;
this.STK_CMD_POLL_INTERVAL = 0x03;
this.STK_CMD_POLL_OFF = 0x04;
this.STK_CMD_SET_UP_EVENT_LIST = 0x05;
this.STK_CMD_SET_UP_CALL = 0x10;
this.STK_CMD_SEND_SS = 0x11;
this.STK_CMD_SEND_USSD = 0x12;
this.STK_CMD_SEND_SMS = 0x13;
this.STK_CMD_SEND_DTMF = 0x14;
this.STK_CMD_LAUNCH_BROWSER = 0x15;
this.STK_CMD_PLAY_TONE = 0x20;
this.STK_CMD_DISPLAY_TEXT = 0x21;
this.STK_CMD_GET_INKEY = 0x22;
this.STK_CMD_GET_INPUT = 0x23;
this.STK_CMD_SELECT_ITEM = 0x24;
this.STK_CMD_SET_UP_MENU = 0x25;
this.STK_CMD_PROVIDE_LOCAL_INFO = 0x26;
this.STK_CMD_SET_UP_IDLE_MODE_TEXT = 0x28;

// STK Result code.
// TS 11.14, clause 12.12

// Results '0X' and '1X' indicate that the command has been performed.

// Command performed successfully.
this.STK_RESULT_OK = 0x00;

// Command performed with partial comprehension.
this.STK_RESULT_PRFRMD_WITH_PARTIAL_COMPREHENSION = 0x01;

// Command performed, with missing information.
this.STK_RESULT_PRFRMD_WITH_MISSING_INFO = 0x02;

// REFRESH performed with additional EFs read.
this.STK_RESULT_PRFRMD_WITH_ADDITIONAL_EFS_READ = 0x03;

// Command performed successfully, but requested icon could not be
// displayed.
this.STK_RESULT_PRFRMD_ICON_NOT_DISPLAYED = 0x04;

// Command performed, but modified by call control by NAA.
this.STK_RESULT_PRFRMD_MODIFIED_BY_NAA = 0x05;

// Command performed successfully, limited service.
this.STK_RESULT_PRFRMD_LIMITED_SERVICE = 0x06;

// Command performed with modification.
this.STK_RESULT_PRFRMD_WITH_MODIFICATION = 0x07;

// REFRESH performed but indicated NAA was not active.
this.STK_RESULT_PRFRMD_NAA_NOT_ACTIVE = 0x08;

// Command performed successfully; tone not played.
this.STK_RESULT_PRFRMD_TONE_NOT_PLAYED = 0x09;

// Proactive UICC session terminated by the user.
this.STK_RESULT_UICC_SESSION_TERM_BY_USER = 0x10;

// Backward move in the proactive UICC session requested by the user.
this.STK_RESULT_BACKWARD_MOVE_BY_USER = 0x11;

// No response from user.
this.STK_RESULT_NO_RESPONSE_FROM_USER = 0x12;

// Help information required by the user.
this.STK_RESULT_HELP_INFO_REQUIRED = 0x13;

// USSD or SS transaction terminated by the user.
this.STK_RESULT_USSD_SS_SESSION_TERM_BY_USER = 0x14;

// Results '2X' indicate to the UICC that it may be worth re-trying the
// command at a later opportunity.

// Terminal currently unable to process command.
this.STK_RESULT_TERMINAL_CRNTLY_UNABLE_TO_PROCESS = 0x20;

// Network currently unable to process command.
this.STK_RESULT_NETWORK_CRNTLY_UNABLE_TO_PROCESS = 0x21;

// User did not accept the proactive command.
this.STK_RESULT_USER_NOT_ACCEPT = 0x22;

// User cleared down call before connection or network release.
this.STK_RESULT_USER_CLEAR_DOWN_CALL = 0x23;

// Action in contradiction with the current timer state.
this.STK_RESULT_CONTRADICTION_WITH_TIMER = 0x24;

// Interaction with call control by NAA; temporary problem.
this.STK_RESULT_NAA_CALL_CONTROL_TEMPORARY = 0x25;

// Launch browser generic error code.
this.STK_RESULT_LAUNCH_BROWSER_ERROR = 0x26;

// MMS temporary problem.
this.STK_RESULT_MMS_TEMPORARY = 0x27;

// Results '3X' indicate that it is not worth the UICC re-trying with an
// identical command; as it will only get the same response. However, the
// decision to retry lies with the application.

// Command beyond terminal's capabilities.
this.STK_RESULT_BEYOND_TERMINAL_CAPABILITY = 0x30;

// Command type not understood by terminal.
this.STK_RESULT_CMD_TYPE_NOT_UNDERSTOOD = 0x31;

// Command data not understood by terminal.
this.STK_RESULT_CMD_DATA_NOT_UNDERSTOOD = 0x32;

// Command number not known by terminal.
this.STK_RESULT_CMD_NUM_NOT_KNOWN = 0x33;

// SS Return Error.
this.STK_RESULT_SS_RETURN_ERROR = 0x34;

// SMS RP-ERROR.
this.STK_RESULT_SMS_RP_ERROR = 0x35;

// Error, required values are missing.
this.STK_RESULT_REQUIRED_VALUES_MISSING = 0x36;

// USSD Return Error.
this.STK_RESULT_USSD_RETURN_ERROR = 0x37;

// MultipleCard commands error.
this.STK_RESULT_MULTI_CARDS_CMD_ERROR = 0x38;

// Interaction with call control by USIM or MO short message control by
// USIM; permanent problem.
this.STK_RESULT_USIM_CALL_CONTROL_PERMANENT = 0x39;

// Bearer Independent Protocol error.
this.STK_RESULT_BIP_ERROR = 0x3a;

// Access Technology unable to process command.
this.STK_RESULT_ACCESS_TECH_UNABLE_TO_PROCESS = 0x3b;

// Frames error.
this.STK_RESULT_FRAMES_ERROR = 0x3c;

// MMS Error.
this.STK_RESULT_MMS_ERROR = 0x3d;

// STK presentation types, TS 11.14, clause 12.6, Command Qualifier: Select Item
this.STK_PRESENTATION_TYPE_NOT_SPECIFIED = 0x00; // Bit 1 is 0.
this.STK_PRESENTATION_TYPE_DATA_VALUES = 0x01; // Bit 1 is 1, bit 2 is 0.
this.STK_PRESENTATION_TYPE_NAVIGATION_OPTIONS = 0x03; // Bit 1 is 1, bit 2 is 1.

// STK Coding Scheme.
this.STK_TEXT_CODING_GSM_7BIT_PACKED = 0x00;
this.STK_TEXT_CODING_GSM_8BIT = 0x04;
this.STK_TEXT_CODING_UCS2 = 0x08;

// STK Event List.
this.STK_EVENT_TYPE_MT_CALL = 0x00;
this.STK_EVENT_TYPE_CALL_CONNECTED = 0x01;
this.STK_EVENT_TYPE_CALL_DISCONNECTED = 0x02;
this.STK_EVENT_TYPE_LOCATION_STATUS = 0x03;
this.STK_EVENT_TYPE_USER_ACTIVITY = 0x04;
this.STK_EVENT_TYPE_IDLE_SCREEN_AVAILABLE = 0x05;
this.STK_EVENT_TYPE_CARD_READER_STATUS = 0x06;
this.STK_EVENT_TYPE_LANGUAGE_SELECTION = 0x07;
this.STK_EVENT_TYPE_BROWSER_TERMINATION = 0x08;
this.STK_EVENT_TYPE_DATA_AVAILABLE = 0x09;
this.STK_EVENT_TYPE_CHANNEL_STATUS = 0x0a;
this.STK_EVENT_TYPE_SINGLE_ACCESS_TECHNOLOGY_CHANGED = 0x0b;
this.STK_EVENT_TYPE_DISPLAY_PARAMETER_CHANGED = 0x0c;
this.STK_EVENT_TYPE_LOCAL_CONNECTION = 0x0d;
this.STK_EVENT_TYPE_NETWORK_SEARCH_MODE_CHANGED = 0x0e;
this.STK_EVENT_TYPE_BROWSING_STATUS = 0x0f;

// STK Service state of Location Status.
this.STK_SERVICE_STATE_NORMAL      = 0x00;
this.STK_SERVICE_STATE_LIMITED     = 0x01;
this.STK_SERVICE_STATE_UNAVAILABLE = 0x02;

// Refresh mode.
this.STK_REFRESH_NAA_INIT_AND_FULL_FILE_CHANGE = 0x00;
this.STK_REFRESH_FILE_CHANGE = 0x01;
this.STK_REFRESH_NAA_INIT_AND_FILE_CHANGE = 0x02;
this.STK_REFRESH_NAA_INIT = 0x03;
this.STK_REFRESH_UICC_RESET = 0x04;

// Tone type.
this.STK_TONE_TYPE_DIAL_TONE                = 0x01;
this.STK_TONE_TYPE_CALLED_SUBSCRIBER_BUSY   = 0x02;
this.STK_TONE_TYPE_CONGESTION               = 0x03;
this.STK_TONE_TYPE_RADIO_PATH_ACK           = 0x04;
this.STK_TONE_TYPE_RADIO_PATH_NOT_AVAILABLE = 0x05;
this.STK_TONE_TYPE_ERROR                    = 0x06;
this.STK_TONE_TYPE_CALL_WAITING_TONE        = 0x07;
this.STK_TONE_TYPE_RINGING_TONE             = 0x08;
this.STK_TONE_TYPE_GENERAL_BEEP             = 0x10;
this.STK_TONE_TYPE_POSITIVE_ACK_TONE        = 0x11;
this.STK_TONE_TYPE_NEGATIVE_ACK_TONE        = 0x12;

// Time unit.
this.STK_TIME_UNIT_MINUTE       = 0x00;
this.STK_TIME_UNIT_SECOND       = 0x01;
this.STK_TIME_UNIT_TENTH_SECOND = 0x02;

// Local Information type.
this.STK_LOCAL_INFO_NNA = 0x00;
this.STK_LOCAL_INFO_IMEI = 0x01;
this.STK_LOCAL_INFO_NMR_FOR_NNA = 0x02;
this.STK_LOCAL_INFO_DATE_TIME_ZONE = 0x03;
this.STK_LOCAL_INFO_LANGUAGE = 0x04;
this.STK_LOCAL_INFO_ACCESS_TECH = 0x06;
this.STK_LOCAL_INFO_ESN = 0x07;
this.STK_LOCAL_INFO_IMEISV = 0x08;
this.STK_LOCAL_INFO_SEARCH_MODE = 0x09;
this.STK_LOCAL_INFO_CHARGE_STATE = 0x0A;
this.STK_LOCAL_INFO_MEID = 0x0B;
this.STK_LOCAL_INFO_BROADCAST_NETWORK_INFO = 0x0D;
this.STK_LOCAL_INFO_MULTIPLE_ACCESS_TECH = 0x0E;
this.STK_LOCAL_INFO_INFO_FOR_MULTIPLE_ACCESS_TECH = 0x0F;
this.STK_LOCAL_INFO_NMR_FOR_MULTIPLE_ACCESS_TECH = 0x10;

/**
 * (U)SIM Services.
 *
 * @see 3GPP TS 51.011 10.3.7 (SIM) and 3GPP TS 31.102 4.2.8 (USIM).
 */
this.GECKO_ICC_SERVICES = {
  sim: {
    ADN: 2,
    FDN: 3,
    PLMNSEL: 7,
    CBMI: 14,
    SPN: 17,
    SDN: 18,
    DATA_DOWNLOAD_SMS_PP: 26,
    CBMIR: 30,
    BDN: 31,
    PNN: 51,
    OPL: 52,
    SPDI: 56
  },
  usim: {
    FDN: 2,
    SDN: 4,
    BDN: 6,
    CBMI: 15,
    CBMIR: 16,
    SPN: 19,
    DATA_DOWNLOAD_SMS_PP: 28,
    PNN: 45,
    OPL: 46,
    SPDI: 51
  }
};

/**
 * Cell Broadcast constants
 */

this.CB_FORMAT_GSM  = 0;
this.CB_FORMAT_ETWS = 1;
this.CB_FORMAT_CMAS = 2;
this.CB_FORMAT_UMTS = 3;

// CBS Data Coding Scheme: Language groups
// see 3GPP TS 23.038 section 5
this.CB_DCS_LANG_GROUP_1 = [
  "de", "en", "it", "fr", "es", "nl", "sv", "da", "pt", "fi",
  "no", "el", "tr", "hu", "pl", null
];
this.CB_DCS_LANG_GROUP_2 = [
  "cs", "he", "ar", "ru", "is", null, null, null, null, null,
  null, null, null, null, null, null
];

// See 3GPP TS 23.041 v11.2.0 section 9.4.1.2.2
this.CB_NON_MMI_SETTABLE_RANGES = [
  /*0x1000 - 0x107F*/4096,  4224,  /*0x1080 - 0x10FF*/4224,  4352,
  /*0x1112 - 0x1112*/4370,  4371,  /*0x111F - 0x111F*/4383,  4384,
  /*0xF000 - 0xFFFE*/61440, 65535, /*0xFFFF - 0xFFFF*/65535, 65536
];

// User Data max length in septets
this.CB_MAX_CONTENT_7BIT = 93;
// User Data max length in octets
this.CB_MAX_CONTENT_8BIT = 82;
// User Data max length in chars
this.CB_MAX_CONTENT_UCS2 = 41;

this.CB_MESSAGE_SIZE_ETWS = 56;
this.CB_MESSAGE_SIZE_GSM  = 88;

// GSM Cell Broadcast Geographical Scope
// See 3GPP TS 23.041 clause 9.4.1.2.1
this.CB_GSM_GEOGRAPHICAL_SCOPE_CELL_WIDE_IMMEDIATE = 0;
this.CB_GSM_GEOGRAPHICAL_SCOPE_PLMN_WIDE           = 1;
this.CB_GSM_GEOGRAPHICAL_SCOPE_LOCATION_AREA_WIDE  = 2;
this.CB_GSM_GEOGRAPHICAL_SCOPE_CELL_WIDE           = 3;

// GSM Cell Broadcast Geographical Scope
// See 3GPP TS 23.041 clause 9.4.1.2.1
this.CB_GSM_GEOGRAPHICAL_SCOPE_NAMES = [
  "cell-immediate",
  "plmn",
  "location-area",
  "cell"
];

// GSM Cell Broadcast Message Identifiers
// see 3GPP TS 23.041 clause 9.4.1.2.2
this.CB_GSM_MESSAGEID_ETWS_BEGIN = 0x1100;
this.CB_GSM_MESSAGEID_ETWS_END   = 0x1107;

// ETWS Warning-Type
// see 3GPP TS 23.041 clause 9.3.24
this.CB_ETWS_WARNING_TYPE_NAMES = [
  "earthquake",
  "tsunami",
  "earthquake-tsunami",
  "test",
  "other"
];

/**
 * GSM PDU constants
 */

// PDU TYPE-OF-ADDRESS
this.PDU_TOA_UNKNOWN       = 0x80; // Unknown. This is used when the user or
                                    // network has no a priori information
                                    // about the numbering plan.
this.PDU_TOA_ISDN          = 0x81; // ISDN/Telephone numbering
this.PDU_TOA_DATA_NUM      = 0x83; // Data numbering plan
this.PDU_TOA_TELEX_NUM     = 0x84; // Telex numbering plan
this.PDU_TOA_NATIONAL_NUM  = 0x88; // National numbering plan
this.PDU_TOA_PRIVATE_NUM   = 0x89; // Private numbering plan
this.PDU_TOA_ERMES_NUM     = 0x8A; // Ermes numbering plan
this.PDU_TOA_INTERNATIONAL = 0x90; // International number
this.PDU_TOA_NATIONAL      = 0xA0; // National number. Prefix or escape digits
                                    // shall not be included
this.PDU_TOA_NETWORK_SPEC  = 0xB0; // Network specific number This is used to
                                    // indicate administration/service number
                                    // specific to the serving network
this.PDU_TOA_SUBSCRIBER    = 0xC0; // Subscriber number. This is used when a
                                    // specific short number representation is
                                    // stored in one or more SCs as part of a
                                    // higher layer application
this.PDU_TOA_ALPHANUMERIC  = 0xD0; // Alphanumeric, (coded according to GSM TS
                                    // 03.38 7-bit default alphabet)
this.PDU_TOA_ABBREVIATED   = 0xE0; // Abbreviated number

/**
 * First octet of the SMS-DELIVER PDU
 *
 * RP:     0   Reply Path parameter is not set in this PDU
 *         1   Reply Path parameter is set in this PDU
 *
 * UDHI:   0   The UD field contains only the short message
 *         1   The beginning of the UD field contains a header in addition of
 *             the short message
 *
 * SRI: (is only set by the SMSC)
 *         0    A status report will not be returned to the SME
 *         1    A status report will be returned to the SME
 *
 * MMS: (is only set by the SMSC)
 *         0    More messages are waiting for the MS in the SMSC
 *         1    No more messages are waiting for the MS in the SMSC
 *
 * MTI:   bit1    bit0    Message type
 *         0       0       SMS-DELIVER (SMSC ==> MS)
 *         0       0       SMS-DELIVER REPORT (MS ==> SMSC, is generated
 *                         automatically by the M20, after receiving a
 *                         SMS-DELIVER)
 *         0       1       SMS-SUBMIT (MS ==> SMSC)
 *         0       1       SMS-SUBMIT REPORT (SMSC ==> MS)
 *         1       0       SMS-STATUS REPORT (SMSC ==> MS)
 *         1       0       SMS-COMMAND (MS ==> SMSC)
 *         1       1       Reserved
 */
this.PDU_RP    = 0x80;       // Reply path. Parameter indicating that
                              // reply path exists.
this.PDU_UDHI  = 0x40;       // User data header indicator. This bit is
                              // set to 1 if the User Data field starts
                              // with a header
this.PDU_SRI_SRR = 0x20;     // Status report indication (SMS-DELIVER)
                              // or request (SMS-SUBMIT)
this.PDU_VPF_ABSOLUTE = 0x18;// Validity period aboslute format
                              // (SMS-SUBMIT only)
this.PDU_VPF_RELATIVE = 0x10;// Validity period relative format
                              // (SMS-SUBMIT only)
this.PDU_VPF_ENHANCED = 0x8; // Validity period enhance format
                              // (SMS-SUBMIT only)
this.PDU_MMS_RD       = 0x04;// More messages to send. (SMS-DELIVER only) or
                              // Reject duplicates (SMS-SUBMIT only)

// MTI - Message Type Indicator
this.PDU_MTI_SMS_RESERVED        = 0x03;
this.PDU_MTI_SMS_STATUS_REPORT   = 0x02;
this.PDU_MTI_SMS_COMMAND         = 0x02;
this.PDU_MTI_SMS_SUBMIT          = 0x01;
this.PDU_MTI_SMS_DELIVER         = 0x00;

// PI - Parameter Indicator
this.PDU_PI_EXTENSION           = 0x80;
this.PDU_PI_USER_DATA_LENGTH    = 0x04;
this.PDU_PI_DATA_CODING_SCHEME  = 0x02;
this.PDU_PI_PROTOCOL_IDENTIFIER = 0x01;
this.PDU_PI_RESERVED            = 0x78;

// FCS - Failure Cause
// 0...127   see 3GPP TS 24.011 clause E.2
// 128...255 see 3GPP TS 23.040 clause 9.2.3.22
// others    see 3GPP TS 27.005 clause 3.2.5
this.PDU_FCS_OK                       = 0x00;
this.PDU_FCS_PROTOCOL_ERROR           = 0x6F;
this.PDU_FCS_MEMORY_CAPACITY_EXCEEDED = 0XD3;
this.PDU_FCS_USAT_BUSY                = 0XD4;
this.PDU_FCS_USIM_DATA_DOWNLOAD_ERROR = 0xD5;
this.PDU_FCS_RESERVED                 = 0xE0;
this.PDU_FCS_UNSPECIFIED              = 0xFF;
// Special internal value that means we should not acknowledge an
// incoming text right away, but need to wait for other components
// (e.g. storage) to complete. This can be any value, so long it
// doesn't conflict with the PDU_FCS_* constants above.
this.MOZ_FCS_WAIT_FOR_EXPLICIT_ACK    = 0x0F;

// ST - Status
// Bit 7..0 = 000xxxxx, short message transaction completed
this.PDU_ST_0_RECEIVED             = 0x00;
this.PDU_ST_0_FORWARDED_NO_CONFIRM = 0x01;
this.PDU_ST_0_REPLACED_BY_SC       = 0x02;
this.PDU_ST_0_RESERVED_BEGIN       = 0x03;
this.PDU_ST_0_SC_SPECIFIC_BEGIN    = 0x10;
this.PDU_ST_0_SC_SPECIFIC_END      = 0x1F;
// Bit 7..0 = 001xxxxx, temporary error, SC still trying to transfer SM
this.PDU_ST_1_CONGESTION        = 0x20;
this.PDU_ST_1_SME_BUSY          = 0x21;
this.PDU_ST_1_SME_NO_RESPONSE   = 0x22;
this.PDU_ST_1_SERVICE_REJECTED  = 0x23;
this.PDU_ST_1_QOS_UNAVAILABLE   = 0x24;
this.PDU_ST_1_SME_ERROR         = 0x25;
this.PDU_ST_1_RESERVED_BEGIN    = 0x26;
this.PDU_ST_1_SC_SPECIFIC_BEGIN = 0x30;
this.PDU_ST_1_SC_SPECIFIC_END   = 0x3F;
// Bit 7..0 = 010xxxxx, permanent error, SC is not making any more transfer
// attempts
this.PDU_ST_2_RPC_ERROR                = 0x40;
this.PDU_ST_2_DEST_INCOMPATIBLE        = 0x41;
this.PDU_ST_2_CONNECTION_REJECTED      = 0x42;
this.PDU_ST_2_NOT_OBTAINABLE           = 0x43;
this.PDU_ST_2_QOS_UNAVAILABLE          = 0x44;
this.PDU_ST_2_INTERWORKING_UNAVALIABLE = 0x45;
this.PDU_ST_2_VALIDITY_EXPIRED         = 0x46;
this.PDU_ST_2_DELETED_BY_SME           = 0x47;
this.PDU_ST_2_DELETED_BY_SC            = 0x48;
this.PDU_ST_2_SM_MISSING               = 0x49;
this.PDU_ST_2_RESERVED_BEGIN           = 0x4A;
this.PDU_ST_2_SC_SPECIFIC_BEGIN        = 0x50;
this.PDU_ST_2_SC_SPECIFIC_END          = 0x5F;
// Bit 7..0 = 011xxxxx, temporary error, SC is not making any more transfer
// attempts
this.PDU_ST_3_CONGESTION        = 0x60;
this.PDU_ST_3_SME_BUSY          = 0x61;
this.PDU_ST_3_SME_NO_RESPONSE   = 0x62;
this.PDU_ST_3_SERVICE_REJECTED  = 0x63;
this.PDU_ST_3_QOS_UNAVAILABLE   = 0x64;
this.PDU_ST_3_SME_ERROR         = 0x65;
this.PDU_ST_3_RESERVED_BEGIN    = 0x66;
this.PDU_ST_3_SC_SPECIFIC_BEGIN = 0x70;
this.PDU_ST_3_SC_SPECIFIC_END   = 0x7F;

this.GECKO_SMS_DELIVERY_STATUS_NOT_APPLICABLE = "not-applicable";
this.GECKO_SMS_DELIVERY_STATUS_SUCCESS        = "success";
this.GECKO_SMS_DELIVERY_STATUS_PENDING        = "pending";
this.GECKO_SMS_DELIVERY_STATUS_ERROR          = "error";

// User Data max length in septets
this.PDU_MAX_USER_DATA_7BIT = 160;
// User Data max length in octets
this.PDU_MAX_USER_DATA_8BIT = 140;
// User Data max length in chars
this.PDU_MAX_USER_DATA_UCS2 = 70;

// PID - Protocol Indicator
this.PDU_PID_DEFAULT                      = 0x00;
this.PDU_PID_TELEMATIC_INTERWORKING       = 0x20;
this.PDU_PID_SHORT_MESSAGE_TYPE_0         = 0x40;
this.PDU_PID_REPLACE_SHORT_MESSAGE_TYPE_1 = 0x41;
this.PDU_PID_REPLACE_SHORT_MESSAGE_TYPE_2 = 0x42;
this.PDU_PID_REPLACE_SHORT_MESSAGE_TYPE_3 = 0x43;
this.PDU_PID_REPLACE_SHORT_MESSAGE_TYPE_4 = 0x44;
this.PDU_PID_REPLACE_SHORT_MESSAGE_TYPE_5 = 0x45;
this.PDU_PID_REPLACE_SHORT_MESSAGE_TYPE_6 = 0x46;
this.PDU_PID_REPLACE_SHORT_MESSAGE_TYPE_7 = 0x47;
this.PDU_PID_ENHANDED_MESSAGE_SERVICE     = 0x5E;
this.PDU_PID_RETURN_CALL_MESSAGE          = 0x5F
this.PDU_PID_ANSI_136_R_DATA              = 0x7C;
this.PDU_PID_ME_DATA_DOWNLOAD             = 0x7D;
this.PDU_PID_ME_DEPERSONALIZATION         = 0x7E;
this.PDU_PID_USIM_DATA_DOWNLOAD           = 0x7F;

// DCS - Data Coding Scheme
this.PDU_DCS_MSG_CODING_7BITS_ALPHABET  = 0x00;
this.PDU_DCS_MSG_CODING_8BITS_ALPHABET  = 0x04;
this.PDU_DCS_MSG_CODING_16BITS_ALPHABET = 0x08;
this.PDU_DCS_MSG_CLASS_NORMAL           = 0xFF;
this.PDU_DCS_MSG_CLASS_0                = 0x00;
this.PDU_DCS_MSG_CLASS_1                = 0x01;
this.PDU_DCS_MSG_CLASS_2                = 0x02;
this.PDU_DCS_MSG_CLASS_3                = 0x03;
this.PDU_DCS_MSG_CLASS_USER_1           = 0x04;
this.PDU_DCS_MSG_CLASS_USER_2           = 0x05;
this.PDU_DCS_CODING_GROUP_BITS          = 0xF0;
this.PDU_DCS_MSG_CLASS_BITS             = 0x03;
this.PDU_DCS_MWI_ACTIVE_BITS            = 0x08;
this.PDU_DCS_MWI_ACTIVE_VALUE           = 0x08;
this.PDU_DCS_MWI_TYPE_BITS              = 0x03;
this.PDU_DCS_MWI_TYPE_VOICEMAIL         = 0x00;
this.PDU_DCS_MWI_TYPE_FAX               = 0x01;
this.PDU_DCS_MWI_TYPE_EMAIL             = 0x02;
this.PDU_DCS_MWI_TYPE_OTHER             = 0x03;

this.GECKO_SMS_MESSAGE_CLASSES = {};
GECKO_SMS_MESSAGE_CLASSES[PDU_DCS_MSG_CLASS_NORMAL] = "normal";
GECKO_SMS_MESSAGE_CLASSES[PDU_DCS_MSG_CLASS_0]      = "class-0";
GECKO_SMS_MESSAGE_CLASSES[PDU_DCS_MSG_CLASS_1]      = "class-1";
GECKO_SMS_MESSAGE_CLASSES[PDU_DCS_MSG_CLASS_2]      = "class-2";
GECKO_SMS_MESSAGE_CLASSES[PDU_DCS_MSG_CLASS_3]      = "class-3";
GECKO_SMS_MESSAGE_CLASSES[PDU_DCS_MSG_CLASS_USER_1] = "user-1";
GECKO_SMS_MESSAGE_CLASSES[PDU_DCS_MSG_CLASS_USER_2] = "user-2";

// Because service center timestamp omit the century. Yay.
this.PDU_TIMESTAMP_YEAR_OFFSET = 2000;

// See 9.2.3.24 TP‑User Data (TP‑UD)
this.PDU_IEI_CONCATENATED_SHORT_MESSAGES_8BIT         = 0x00;
this.PDU_IEI_SPECIAL_SMS_MESSAGE_INDICATION           = 0x01;
this.PDU_IEI_APPLICATION_PORT_ADDRESSING_SCHEME_8BIT  = 0x04;
this.PDU_IEI_APPLICATION_PORT_ADDRESSING_SCHEME_16BIT = 0x05;
this.PDU_IEI_SMSC_CONTROL_PARAMS                      = 0x06;
this.PDU_IEI_UDH_SOURCE_INDICATOR                     = 0x07;
this.PDU_IEI_CONCATENATED_SHORT_MESSAGES_16BIT        = 0x08;
this.PDU_IEI_WIRELESS_CONTROL_MESSAGE_PROTOCOL        = 0x09;
this.PDU_IEI_TEXT_FORMATING                           = 0x0A;
this.PDU_IEI_PREDEFINED_SOUND                         = 0x0B;
this.PDU_IEI_USER_DATA_SOUND                          = 0x0C;
this.PDU_IEI_PREDEFINED_ANIMATION                     = 0x0D;
this.PDU_IEI_LARGE_ANIMATION                          = 0x0E;
this.PDU_IEI_SMALL_ANIMATION                          = 0x0F;
this.PDU_IEI_LARGE_PICTURE                            = 0x10;
this.PDU_IEI_SMALL_PICTURE                            = 0x11;
this.PDU_IEI_VARIABLE_PICTURE                         = 0x12;
this.PDU_IEI_USER_PROMPT_INDICATOR                    = 0x13;
this.PDU_IEI_EXTENDED_OBJECT                          = 0x14;
this.PDU_IEI_REUSED_EXTENDED_OBJECT                   = 0x15;
this.PDU_IEI_COMPRESS_CONTROL                         = 0x16;
this.PDU_IEI_OBJECT_DISTRIBUTION_INDICATOR            = 0x17;
this.PDU_IEI_STANDARD_WVG_OBJECT                      = 0x18;
this.PDU_IEI_CHARACTER_SIZE_WVG_OBJECT                = 0x19;
this.PDU_IEI_EXTENDED_OBJECT_DATA_REQUEST_COMMAND     = 0x1A;
this.PDU_IEI_RFC822_EMAIL_HEADER                      = 0x20;
this.PDU_IEI_HYPERLINK_FORMAT_ELEMENT                 = 0x21;
this.PDU_IEI_REPLY_ADDRESS_ELEMENT                    = 0x22;
this.PDU_IEI_ENHANCED_VOICE_MAIL_INFORMATION          = 0x23;
this.PDU_IEI_NATIONAL_LANGUAGE_SINGLE_SHIFT           = 0x24;
this.PDU_IEI_NATIONAL_LANGUAGE_LOCKING_SHIFT          = 0x25;

// Application Port Addressing, see 3GPP TS 23.040 9.2.3.24.3
this.PDU_APA_RESERVED_8BIT_PORTS = 240;
this.PDU_APA_VALID_16BIT_PORTS   = 49152;

// 7bit alphabet escape character. The encoded value of this code point is left
// undefined in official spec. Its code value is internally assigned to \uffff,
// <noncharacter-FFFF> in Unicode basic multilingual plane.
this.PDU_NL_EXTENDED_ESCAPE = 0x1B;

// <SP>, <LF>, <CR> are only defined in locking shift tables.
this.PDU_NL_SPACE = 0x20;
this.PDU_NL_LINE_FEED = 0x0A;
this.PDU_NL_CARRIAGE_RETURN = 0x0D;

// 7bit alphabet page break character, only defined in single shift tables.
// The encoded value of this code point is left undefined in official spec, but
// the code point itself maybe be used for example in compressed CBS messages.
// Its code value is internally assigned to \u000c, ASCII form feed, or new page.
this.PDU_NL_PAGE_BREAK = 0x0A;
// 7bit alphabet reserved control character, only defined in single shift
// tables. The encoded value of this code point is left undefined in official
// spec. Its code value is internally assigned to \ufffe, <noncharacter-FFFE>
// in Unicode basic multilingual plane.
this.PDU_NL_RESERVED_CONTROL = 0x0D;

this.PDU_NL_IDENTIFIER_DEFAULT    = 0;
this.PDU_NL_IDENTIFIER_TURKISH    = 1;
this.PDU_NL_IDENTIFIER_SPANISH    = 2;
this.PDU_NL_IDENTIFIER_PORTUGUESE = 3;
this.PDU_NL_IDENTIFIER_BENGALI    = 4;
this.PDU_NL_IDENTIFIER_GUJARATI   = 5;
this.PDU_NL_IDENTIFIER_HINDI      = 6;
this.PDU_NL_IDENTIFIER_KANNADA    = 7;
this.PDU_NL_IDENTIFIER_MALAYALAM  = 8;
this.PDU_NL_IDENTIFIER_ORIYA      = 9;
this.PDU_NL_IDENTIFIER_PUNJABI    = 10;
this.PDU_NL_IDENTIFIER_TAMIL      = 11;
this.PDU_NL_IDENTIFIER_TELUGU     = 12;
this.PDU_NL_IDENTIFIER_URDU       = 13;

// National Language Locking Shift Tables, see 3GPP TS 23.038
this.PDU_NL_LOCKING_SHIFT_TABLES = [
  /**
   * National Language Identifier: 0x00
   * 6.2.1 GSM 7 bit Default Alphabet
   */
  // 01.....23.....4.....5.....6.....7.....8.....9.....A.B.....C.....D.E.....F.....
    "@\u00a3$\u00a5\u00e8\u00e9\u00f9\u00ec\u00f2\u00c7\n\u00d8\u00f8\r\u00c5\u00e5"
  // 0.....12.....3.....4.....5.....6.....7.....8.....9.....A.....B.....C.....D.....E.....F.....
  + "\u0394_\u03a6\u0393\u039b\u03a9\u03a0\u03a8\u03a3\u0398\u039e\uffff\u00c6\u00e6\u00df\u00c9"
  // 012.34.....56789ABCDEF
  + " !\"#\u00a4%&'()*+,-./"
  // 0123456789ABCDEF
  + "0123456789:;<=>?"
  // 0.....123456789ABCDEF
  + "\u00a1ABCDEFGHIJKLMNO"
  // 0123456789AB.....C.....D.....E.....F.....
  + "PQRSTUVWXYZ\u00c4\u00d6\u00d1\u00dc\u00a7"
  // 0.....123456789ABCDEF
  + "\u00bfabcdefghijklmno"
  // 0123456789AB.....C.....D.....E.....F.....
  + "pqrstuvwxyz\u00e4\u00f6\u00f1\u00fc\u00e0",

  /**
   * National Language Identifier: 0x01
   * A.3.1 Turkish National Language Locking Shift Table
   */
  // 01.....23.....4.....5.....6.....7.....8.....9.....A.B.....C.....D.E.....F.....
    "@\u00a3$\u00a5\u20ac\u00e9\u00f9\u0131\u00f2\u00c7\n\u011e\u011f\r\u00c5\u00e5"
  // 0.....12.....3.....4.....5.....6.....7.....8.....9.....A.....B.....C.....D.....E.....F.....
  + "\u0394_\u03a6\u0393\u039b\u03a9\u03a0\u03a8\u03a3\u0398\u039e\uffff\u015e\u015f\u00df\u00c9"
  // 012.34.....56789ABCDEF
  + " !\"#\u00a4%&'()*+,-./"
  // 0123456789ABCDEF
  + "0123456789:;<=>?"
  // 0.....123456789ABCDEF
  + "\u0130ABCDEFGHIJKLMNO"
  // 0123456789AB.....C.....D.....E.....F.....
  + "PQRSTUVWXYZ\u00c4\u00d6\u00d1\u00dc\u00a7"
  // 0.....123456789ABCDEF
  + "\u00e7abcdefghijklmno"
  // 0123456789AB.....C.....D.....E.....F.....
  + "pqrstuvwxyz\u00e4\u00f6\u00f1\u00fc\u00e0",

  /**
   * National Language Identifier: 0x02
   * A.3.2 Void
   */
  // 0123456789A.BCD.EF
    "          \n  \r  "
  // 0123456789AB.....CDEF
  + "           \uffff    "
  // 0123456789ABCDEF
  + "                "
  // 0123456789ABCDEF
  + "                "
  // 0123456789ABCDEF
  + "                "
  // 0123456789ABCDEF
  + "                "
  // 0123456789ABCDEF
  + "                "
  // 0123456789ABCDEF
  + "                ",

  /**
   * National Language Identifier: 0x03
   * A.3.3 Portuguese National Language Locking Shift Table
   */
  // 01.....23.....4.....5.....6.....7.....8.....9.....A.B.....C.....D.E.....F.....
    "@\u00a3$\u00a5\u00ea\u00e9\u00fa\u00ed\u00f3\u00e7\n\u00d4\u00f4\r\u00c1\u00e1"
  // 0.....12.....3.....4.....5.....67.8.....9.....AB.....C.....D.....E.....F.....
  + "\u0394_\u00aa\u00c7\u00c0\u221e^\\\u20ac\u00d3|\uffff\u00c2\u00e2\u00ca\u00c9"
  // 012.34.....56789ABCDEF
  + " !\"#\u00ba%&'()*+,-./"
  // 0123456789ABCDEF
  + "0123456789:;<=>?"
  // 0.....123456789ABCDEF
  + "\u00cdABCDEFGHIJKLMNO"
  // 0123456789AB.....C.....D.....E.....F.....
  + "PQRSTUVWXYZ\u00c3\u00d5\u00da\u00dc\u00a7"
  // 0123456789ABCDEF
  + "~abcdefghijklmno"
  // 0123456789AB.....C.....DE.....F.....
  + "pqrstuvwxyz\u00e3\u00f5`\u00fc\u00e0",

  /**
   * National Language Identifier: 0x04
   * A.3.4 Bengali National Language Locking Shift Table
   */
  // 0.....1.....2.....3.....4.....5.....6.....7.....8.....9.....A.B.....CD.EF.....
    "\u0981\u0982\u0983\u0985\u0986\u0987\u0988\u0989\u098a\u098b\n\u098c \r \u098f"
  // 0.....123.....4.....5.....6.....7.....8.....9.....A.....B.....C.....D.....E.....F.....
  + "\u0990  \u0993\u0994\u0995\u0996\u0997\u0998\u0999\u099a\uffff\u099b\u099c\u099d\u099e"
  // 012.....3.....4.....5.....6.....7.....89A.....B.....CD.....EF.....
  + " !\u099f\u09a0\u09a1\u09a2\u09a3\u09a4)(\u09a5\u09a6,\u09a7.\u09a8"
  // 0123456789ABCD.....E.....F
  + "0123456789:; \u09aa\u09ab?"
  // 0.....1.....2.....3.....4.....56.....789A.....B.....C.....D.....E.....F.....
  + "\u09ac\u09ad\u09ae\u09af\u09b0 \u09b2   \u09b6\u09b7\u09b8\u09b9\u09bc\u09bd"
  // 0.....1.....2.....3.....4.....5.....6.....789.....A.....BCD.....E.....F.....
  + "\u09be\u09bf\u09c0\u09c1\u09c2\u09c3\u09c4  \u09c7\u09c8  \u09cb\u09cc\u09cd"
  // 0.....123456789ABCDEF
  + "\u09ceabcdefghijklmno"
  // 0123456789AB.....C.....D.....E.....F.....
  + "pqrstuvwxyz\u09d7\u09dc\u09dd\u09f0\u09f1",

  /**
   * National Language Identifier: 0x05
   * A.3.5 Gujarati National Language Locking Shift Table
   */
  // 0.....1.....2.....3.....4.....5.....6.....7.....8.....9.....A.B.....C.....D.EF.....
    "\u0a81\u0a82\u0a83\u0a85\u0a86\u0a87\u0a88\u0a89\u0a8a\u0a8b\n\u0a8c\u0a8d\r \u0a8f"
  // 0.....1.....23.....4.....5.....6.....7.....8.....9.....A.....B.....C.....D.....E.....F.....
  + "\u0a90\u0a91 \u0a93\u0a94\u0a95\u0a96\u0a97\u0a98\u0a99\u0a9a\uffff\u0a9b\u0a9c\u0a9d\u0a9e"
  // 012.....3.....4.....5.....6.....7.....89A.....B.....CD.....EF.....
  + " !\u0a9f\u0aa0\u0aa1\u0aa2\u0aa3\u0aa4)(\u0aa5\u0aa6,\u0aa7.\u0aa8"
  // 0123456789ABCD.....E.....F
  + "0123456789:; \u0aaa\u0aab?"
  // 0.....1.....2.....3.....4.....56.....7.....89.....A.....B.....C.....D.....E.....F.....
  + "\u0aac\u0aad\u0aae\u0aaf\u0ab0 \u0ab2\u0ab3 \u0ab5\u0ab6\u0ab7\u0ab8\u0ab9\u0abc\u0abd"
  // 0.....1.....2.....3.....4.....5.....6.....7.....89.....A.....B.....CD.....E.....F.....
  + "\u0abe\u0abf\u0ac0\u0ac1\u0ac2\u0ac3\u0ac4\u0ac5 \u0ac7\u0ac8\u0ac9 \u0acb\u0acc\u0acd"
  // 0.....123456789ABCDEF
  + "\u0ad0abcdefghijklmno"
  // 0123456789AB.....C.....D.....E.....F.....
  + "pqrstuvwxyz\u0ae0\u0ae1\u0ae2\u0ae3\u0af1",

  /**
   * National Language Identifier: 0x06
   * A.3.6 Hindi National Language Locking Shift Table
   */
  // 0.....1.....2.....3.....4.....5.....6.....7.....8.....9.....A.B.....C.....D.E.....F.....
    "\u0901\u0902\u0903\u0905\u0906\u0907\u0908\u0909\u090a\u090b\n\u090c\u090d\r\u090e\u090f"
  // 0.....1.....2.....3.....4.....5.....6.....7.....8.....9.....A.....B.....C.....D.....E.....F.....
  + "\u0910\u0911\u0912\u0913\u0914\u0915\u0916\u0917\u0918\u0919\u091a\uffff\u091b\u091c\u091d\u091e"
  // 012.....3.....4.....5.....6.....7.....89A.....B.....CD.....EF.....
  + " !\u091f\u0920\u0921\u0922\u0923\u0924)(\u0925\u0926,\u0927.\u0928"
  // 0123456789ABC.....D.....E.....F
  + "0123456789:;\u0929\u092a\u092b?"
  // 0.....1.....2.....3.....4.....5.....6.....7.....8.....9.....A.....B.....C.....D.....E.....F.....
  + "\u092c\u092d\u092e\u092f\u0930\u0931\u0932\u0933\u0934\u0935\u0936\u0937\u0938\u0939\u093c\u093d"
  // 0.....1.....2.....3.....4.....5.....6.....7.....8.....9.....A.....B.....C.....D.....E.....F.....
  + "\u093e\u093f\u0940\u0941\u0942\u0943\u0944\u0945\u0946\u0947\u0948\u0949\u094a\u094b\u094c\u094d"
  // 0.....123456789ABCDEF
  + "\u0950abcdefghijklmno"
  // 0123456789AB.....C.....D.....E.....F.....
  + "pqrstuvwxyz\u0972\u097b\u097c\u097e\u097f",

  /**
   * National Language Identifier: 0x07
   * A.3.7 Kannada National Language Locking Shift Table
   */
  // 01.....2.....3.....4.....5.....6.....7.....8.....9.....A.B.....CD.E.....F.....
    " \u0c82\u0c83\u0c85\u0c86\u0c87\u0c88\u0c89\u0c8a\u0c8b\n\u0c8c \r\u0c8e\u0c8f"
  // 0.....12.....3.....4.....5.....6.....7.....8.....9.....A.....B.....C.....D.....E.....F.....
  + "\u0c90 \u0c92\u0c93\u0c94\u0c95\u0c96\u0c97\u0c98\u0c99\u0c9a\uffff\u0c9b\u0c9c\u0c9d\u0c9e"
  // 012.....3.....4.....5.....6.....7.....89A.....B.....CD.....EF.....
  + " !\u0c9f\u0ca0\u0ca1\u0ca2\u0ca3\u0ca4)(\u0ca5\u0ca6,\u0ca7.\u0ca8"
  // 0123456789ABCD.....E.....F
  + "0123456789:; \u0caa\u0cab?"
  // 0.....1.....2.....3.....4.....5.....6.....7.....89.....A.....B.....C.....D.....E.....F.....
  + "\u0cac\u0cad\u0cae\u0caf\u0cb0\u0cb1\u0cb2\u0cb3 \u0cb5\u0cb6\u0cb7\u0cb8\u0cb9\u0cbc\u0cbd"
  // 0.....1.....2.....3.....4.....5.....6.....78.....9.....A.....BC.....D.....E.....F.....
  + "\u0cbe\u0cbf\u0cc0\u0cc1\u0cc2\u0cc3\u0cc4 \u0cc6\u0cc7\u0cc8 \u0cca\u0ccb\u0ccc\u0ccd"
  // 0.....123456789ABCDEF
  + "\u0cd5abcdefghijklmno"
  // 0123456789AB.....C.....D.....E.....F.....
  + "pqrstuvwxyz\u0cd6\u0ce0\u0ce1\u0ce2\u0ce3",

  /**
   * National Language Identifier: 0x08
   * A.3.8 Malayalam National Language Locking Shift Table
   */
  // 01.....2.....3.....4.....5.....6.....7.....8.....9.....A.B.....CD.E.....F.....
    " \u0d02\u0d03\u0d05\u0d06\u0d07\u0d08\u0d09\u0d0a\u0d0b\n\u0d0c \r\u0d0e\u0d0f"
  // 0.....12.....3.....4.....5.....6.....7.....8.....9.....A.....B.....C.....D.....E.....F.....
  + "\u0d10 \u0d12\u0d13\u0d14\u0d15\u0d16\u0d17\u0d18\u0d19\u0d1a\uffff\u0d1b\u0d1c\u0d1d\u0d1e"
  // 012.....3.....4.....5.....6.....7.....89A.....B.....CD.....EF.....
  + " !\u0d1f\u0d20\u0d21\u0d22\u0d23\u0d24)(\u0d25\u0d26,\u0d27.\u0d28"
  // 0123456789ABCD.....E.....F
  + "0123456789:; \u0d2a\u0d2b?"
  // 0.....1.....2.....3.....4.....5.....6.....7.....8.....9.....A.....B.....C.....D.....EF.....
  + "\u0d2c\u0d2d\u0d2e\u0d2f\u0d30\u0d31\u0d32\u0d33\u0d34\u0d35\u0d36\u0d37\u0d38\u0d39 \u0d3d"
  // 0.....1.....2.....3.....4.....5.....6.....78.....9.....A.....BC.....D.....E.....F.....
  + "\u0d3e\u0d3f\u0d40\u0d41\u0d42\u0d43\u0d44 \u0d46\u0d47\u0d48 \u0d4a\u0d4b\u0d4c\u0d4d"
  // 0.....123456789ABCDEF
  + "\u0d57abcdefghijklmno"
  // 0123456789AB.....C.....D.....E.....F.....
  + "pqrstuvwxyz\u0d60\u0d61\u0d62\u0d63\u0d79",

  /**
   * National Language Identifier: 0x09
   * A.3.9 Oriya National Language Locking Shift Table
   */
  // 0.....1.....2.....3.....4.....5.....6.....7.....8.....9.....A.B.....CD.EF.....
    "\u0b01\u0b02\u0b03\u0b05\u0b06\u0b07\u0b08\u0b09\u0b0a\u0b0b\n\u0b0c \r \u0b0f"
  // 0.....123.....4.....5.....6.....7.....8.....9.....A.....B.....C.....D.....E.....F.....
  + "\u0b10  \u0b13\u0b14\u0b15\u0b16\u0b17\u0b18\u0b19\u0b1a\uffff\u0b1b\u0b1c\u0b1d\u0b1e"
  // 012.....3.....4.....5.....6.....7.....89A.....B.....CD.....EF.....
  + " !\u0b1f\u0b20\u0b21\u0b22\u0b23\u0b24)(\u0b25\u0b26,\u0b27.\u0b28"
  // 0123456789ABCD.....E.....F
  + "0123456789:; \u0b2a\u0b2b?"
  // 0.....1.....2.....3.....4.....56.....7.....89.....A.....B.....C.....D.....E.....F.....
  + "\u0b2c\u0b2d\u0b2e\u0b2f\u0b30 \u0b32\u0b33 \u0b35\u0b36\u0b37\u0b38\u0b39\u0b3c\u0b3d"
  // 0.....1.....2.....3.....4.....5.....6.....789.....A.....BCD.....E.....F.....
  + "\u0b3e\u0b3f\u0b40\u0b41\u0b42\u0b43\u0b44  \u0b47\u0b48  \u0b4b\u0b4c\u0b4d"
  // 0.....123456789ABCDEF
  + "\u0b56abcdefghijklmno"
  // 0123456789AB.....C.....D.....E.....F.....
  + "pqrstuvwxyz\u0b57\u0b60\u0b61\u0b62\u0b63",

  /**
   * National Language Identifier: 0x0A
   * A.3.10 Punjabi National Language Locking Shift Table
   */
  // 0.....1.....2.....3.....4.....5.....6.....7.....8.....9A.BCD.EF.....
    "\u0a01\u0a02\u0a03\u0a05\u0a06\u0a07\u0a08\u0a09\u0a0a \n  \r \u0a0f"
  // 0.....123.....4.....5.....6.....7.....8.....9.....A.....B.....C.....D.....E.....F.....
  + "\u0a10  \u0a13\u0a14\u0a15\u0a16\u0a17\u0a18\u0a19\u0a1a\uffff\u0a1b\u0a1c\u0a1d\u0a1e"
  // 012.....3.....4.....5.....6.....7.....89A.....B.....CD.....EF.....
  + " !\u0a1f\u0a20\u0a21\u0a22\u0a23\u0a24)(\u0a25\u0a26,\u0a27.\u0a28"
  // 0123456789ABCD.....E.....F
  + "0123456789:; \u0a2a\u0a2b?"
  // 0.....1.....2.....3.....4.....56.....7.....89.....A.....BC.....D.....E.....F
  + "\u0a2c\u0a2d\u0a2e\u0a2f\u0a30 \u0a32\u0a33 \u0a35\u0a36 \u0a38\u0a39\u0a3c "
  // 0.....1.....2.....3.....4.....56789.....A.....BCD.....E.....F.....
  + "\u0a3e\u0a3f\u0a40\u0a41\u0a42    \u0a47\u0a48  \u0a4b\u0a4c\u0a4d"
  // 0.....123456789ABCDEF
  + "\u0a51abcdefghijklmno"
  // 0123456789AB.....C.....D.....E.....F.....
  + "pqrstuvwxyz\u0a70\u0a71\u0a72\u0a73\u0a74",

  /**
   * National Language Identifier: 0x0B
   * A.3.11 Tamil National Language Locking Shift Table
   */
  // 01.....2.....3.....4.....5.....6.....7.....8.....9A.BCD.E.....F.....
    " \u0b82\u0b83\u0b85\u0b86\u0b87\u0b88\u0b89\u0b8a \n  \r\u0b8e\u0b8f"
  // 0.....12.....3.....4.....5.....6789.....A.....B.....CD.....EF.....
  + "\u0b90 \u0b92\u0b93\u0b94\u0b95   \u0b99\u0b9a\uffff \u0b9c \u0b9e"
  // 012.....3456.....7.....89ABCDEF.....
  + " !\u0b9f   \u0ba3\u0ba4)(  , .\u0ba8"
  // 0123456789ABC.....D.....EF
  + "0123456789:;\u0ba9\u0baa ?"
  // 012.....3.....4.....5.....6.....7.....8.....9.....A.....B.....C.....D.....EF
  + "  \u0bae\u0baf\u0bb0\u0bb1\u0bb2\u0bb3\u0bb4\u0bb5\u0bb6\u0bb7\u0bb8\u0bb9  "
  // 0.....1.....2.....3.....4.....5678.....9.....A.....BC.....D.....E.....F.....
  + "\u0bbe\u0bbf\u0bc0\u0bc1\u0bc2   \u0bc6\u0bc7\u0bc8 \u0bca\u0bcb\u0bcc\u0bcd"
  // 0.....123456789ABCDEF
  + "\u0bd0abcdefghijklmno"
  // 0123456789AB.....C.....D.....E.....F.....
  + "pqrstuvwxyz\u0bd7\u0bf0\u0bf1\u0bf2\u0bf9",

  /**
   * National Language Identifier: 0x0C
   * A.3.12 Telugu National Language Locking Shift Table
   */
  // 0.....1.....2.....3.....4.....5.....6.....7.....8.....9.....A.B.....CD.E.....F.....
    "\u0c01\u0c02\u0c03\u0c05\u0c06\u0c07\u0c08\u0c09\u0c0a\u0c0b\n\u0c0c \r\u0c0e\u0c0f"
  // 0.....12.....3.....4.....5.....6.....7.....8.....9.....A.....B.....C.....D.....E.....F.....
  + "\u0c10 \u0c12\u0c13\u0c14\u0c15\u0c16\u0c17\u0c18\u0c19\u0c1a\uffff\u0c1b\u0c1c\u0c1d\u0c1e"
  // 012.....3.....4.....5.....6.....7.....89A.....B.....CD.....EF.....
  + " !\u0c1f\u0c20\u0c21\u0c22\u0c23\u0c24)(\u0c25\u0c26,\u0c27.\u0c28"
  // 0123456789ABCD.....E.....F
  + "0123456789:; \u0c2a\u0c2b?"
  // 0.....1.....2.....3.....4.....5.....6.....7.....89.....A.....B.....C.....D.....EF.....
  + "\u0c2c\u0c2d\u0c2e\u0c2f\u0c30\u0c31\u0c32\u0c33 \u0c35\u0c36\u0c37\u0c38\u0c39 \u0c3d"
  // 0.....1.....2.....3.....4.....5.....6.....78.....9.....A.....BC.....D.....E.....F.....
  + "\u0c3e\u0c3f\u0c40\u0c41\u0c42\u0c43\u0c44 \u0c46\u0c47\u0c48 \u0c4a\u0c4b\u0c4c\u0c4d"
  // 0.....123456789ABCDEF
  + "\u0c55abcdefghijklmno"
  // 0123456789AB.....C.....D.....E.....F.....
  + "pqrstuvwxyz\u0c56\u0c60\u0c61\u0c62\u0c63",

  /**
   * National Language Identifier: 0x0D
   * A.3.13 Urdu National Language Locking Shift Table
   */
  // 0.....1.....2.....3.....4.....5.....6.....7.....8.....9.....A.B.....C.....D.E.....F.....
    "\u0627\u0622\u0628\u067b\u0680\u067e\u06a6\u062a\u06c2\u067f\n\u0679\u067d\r\u067a\u067c"
  // 0.....1.....2.....3.....4.....5.....6.....7.....8.....9.....A.....B.....C.....D.....E.....F.....
  + "\u062b\u062c\u0681\u0684\u0683\u0685\u0686\u0687\u062d\u062e\u062f\uffff\u068c\u0688\u0689\u068a"
  // 012.....3.....4.....5.....6.....7.....89A.....B.....CD.....EF.....
  + " !\u068f\u068d\u0630\u0631\u0691\u0693)(\u0699\u0632,\u0696.\u0698"
  // 0123456789ABC.....D.....E.....F
  + "0123456789:;\u069a\u0633\u0634?"
  // 0.....1.....2.....3.....4.....5.....6.....7.....8.....9.....A.....B.....C.....D.....E.....F.....
  + "\u0635\u0636\u0637\u0638\u0639\u0641\u0642\u06a9\u06aa\u06ab\u06af\u06b3\u06b1\u0644\u0645\u0646"
  // 0.....1.....2.....3.....4.....5.....6.....7.....8.....9.....A.....B.....C.....D.....E.....F.....
  + "\u06ba\u06bb\u06bc\u0648\u06c4\u06d5\u06c1\u06be\u0621\u06cc\u06d0\u06d2\u064d\u0650\u064f\u0657"
  // 0.....123456789ABCDEF
  + "\u0654abcdefghijklmno"
  // 0123456789AB.....C.....D.....E.....F.....
  + "pqrstuvwxyz\u0655\u0651\u0653\u0656\u0670"
];

// National Language Single Shift Tables, see 3GPP TS 23.038
this.PDU_NL_SINGLE_SHIFT_TABLES = [
  /**
   * National Language Identifier: 0x00
   * 6.2.1.1 GSM 7 bit default alphabet extension table
   */
  // 0123456789A.....BCD.....EF
    "          \u000c  \ufffe  "
  // 0123456789AB.....CDEF
  + "    ^      \uffff    "
  // 0123456789ABCDEF.
  + "        {}     \\"
  // 0123456789ABCDEF
  + "            [~] "
  // 0123456789ABCDEF
  + "|               "
  // 0123456789ABCDEF
  + "                "
  // 012345.....6789ABCDEF
  + "     \u20ac          "
  // 0123456789ABCDEF
  + "                ",

  /**
   * National Language Identifier: 0x01
   * A.2.1 Turkish National Language Single Shift Table
   */
  // 0123456789A.....BCD.....EF
    "          \u000c  \ufffe  "
  // 0123456789AB.....CDEF
  + "    ^      \uffff    "
  // 0123456789ABCDEF.
  + "        {}     \\"
  // 0123456789ABCDEF
  + "            [~] "
  // 01234567.....89.....ABCDEF
  + "|      \u011e \u0130      "
  // 0123.....456789ABCDEF
  + "   \u015e            "
  // 0123.....45.....67.....89.....ABCDEF
  + "   \u00e7 \u20ac \u011f \u0131      "
  // 0123.....456789ABCDEF
  + "   \u015f            ",

  /**
   * National Language Identifier: 0x02
   * A.2.2 Spanish National Language Single Shift Table
   */
  // 0123456789.....A.....BCD.....EF
    "         \u00e7\u000c  \ufffe  "
  // 0123456789AB.....CDEF
  + "    ^      \uffff    "
  // 0123456789ABCDEF.
  + "        {}     \\"
  // 0123456789ABCDEF
  + "            [~] "
  // 01.....23456789.....ABCDEF.....
  + "|\u00c1       \u00cd     \u00d3"
  // 012345.....6789ABCDEF
  + "     \u00da          "
  // 01.....2345.....6789.....ABCDEF.....
  + " \u00e1   \u20ac   \u00ed     \u00f3"
  // 012345.....6789ABCDEF
  + "     \u00fa          ",

  /**
   * National Language Identifier: 0x03
   * A.2.3 Portuguese National Language Single Shift Table
   */
  // 012345.....6789.....A.....B.....C.....D.....E.....F.....
    "     \u00ea   \u00e7\u000c\u00d4\u00f4\ufffe\u00c1\u00e1"
  // 012.....3.....45.....6.....7.....8.....9.....AB.....CDEF.....
  + "  \u03a6\u0393^\u03a9\u03a0\u03a8\u03a3\u0398 \uffff   \u00ca"
  // 0123456789ABCDEF.
  + "        {}     \\"
  // 0123456789ABCDEF
  + "            [~] "
  // 01.....23456789.....ABCDEF.....
  + "|\u00c0       \u00cd     \u00d3"
  // 012345.....6789AB.....C.....DEF
  + "     \u00da     \u00c3\u00d5   "
  // 01.....2345.....6789.....ABCDEF.....
  + " \u00c2   \u20ac   \u00ed     \u00f3"
  // 012345.....6789AB.....C.....DEF.....
  + "     \u00fa     \u00e3\u00f5  \u00e2",

  /**
   * National Language Identifier: 0x04
   * A.2.4 Bengali National Language Single Shift Table
   */
  // 01.....23.....4.....5.6.....789A.....BCD.....EF
    "@\u00a3$\u00a5\u00bf\"\u00a4%&'\u000c*+\ufffe-/"
  // 0123.....45.....6789.....A.....B.....C.....D.....E.....F.....
  + "<=>\u00a1^\u00a1_#*\u09e6\u09e7\uffff\u09e8\u09e9\u09ea\u09eb"
  // 0.....1.....2.....3.....4.....5.....6.....7.....89A.....B.....C.....D.....E.....F.
  + "\u09ec\u09ed\u09ee\u09ef\u09df\u09e0\u09e1\u09e2{}\u09e3\u09f2\u09f3\u09f4\u09f5\\"
  // 0.....1.....2.....3.....4.....56789ABCDEF
  + "\u09f6\u09f7\u09f8\u09f9\u09fa       [~] "
  // 0123456789ABCDEF
  + "|ABCDEFGHIJKLMNO"
  // 0123456789ABCDEF
  + "PQRSTUVWXYZ     "
  // 012345.....6789ABCDEF
  + "     \u20ac          "
  // 0123456789ABCDEF
  + "                ",

  /**
   * National Language Identifier: 0x05
   * A.2.5 Gujarati National Language Single Shift Table
   */
  // 01.....23.....4.....5.6.....789A.....BCD.....EF
    "@\u00a3$\u00a5\u00bf\"\u00a4%&'\u000c*+\ufffe-/"
  // 0123.....45.....6789.....A.....B.....C.....D.....E.....F.....
  + "<=>\u00a1^\u00a1_#*\u0964\u0965\uffff\u0ae6\u0ae7\u0ae8\u0ae9"
  // 0.....1.....2.....3.....4.....5.....6789ABCDEF.
  + "\u0aea\u0aeb\u0aec\u0aed\u0aee\u0aef  {}     \\"
  // 0123456789ABCDEF
  + "            [~] "
  // 0123456789ABCDEF
  + "|ABCDEFGHIJKLMNO"
  // 0123456789ABCDEF
  + "PQRSTUVWXYZ     "
  // 012345.....6789ABCDEF
  + "     \u20ac          "
  // 0123456789ABCDEF
  + "                ",

  /**
   * National Language Identifier: 0x06
   * A.2.6 Hindi National Language Single Shift Table
   */
  // 01.....23.....4.....5.6.....789A.....BCD.....EF
    "@\u00a3$\u00a5\u00bf\"\u00a4%&'\u000c*+\ufffe-/"
  // 0123.....45.....6789.....A.....B.....C.....D.....E.....F.....
  + "<=>\u00a1^\u00a1_#*\u0964\u0965\uffff\u0966\u0967\u0968\u0969"
  // 0.....1.....2.....3.....4.....5.....6.....7.....89A.....B.....C.....D.....E.....F.
  + "\u096a\u096b\u096c\u096d\u096e\u096f\u0951\u0952{}\u0953\u0954\u0958\u0959\u095a\\"
  // 0.....1.....2.....3.....4.....5.....6.....7.....8.....9.....A.....BCDEF
  + "\u095b\u095c\u095d\u095e\u095f\u0960\u0961\u0962\u0963\u0970\u0971 [~] "
  // 0123456789ABCDEF
  + "|ABCDEFGHIJKLMNO"
  // 0123456789ABCDEF
  + "PQRSTUVWXYZ     "
  // 012345.....6789ABCDEF
  + "     \u20ac          "
  // 0123456789ABCDEF
  + "                ",

  /**
   * National Language Identifier: 0x07
   * A.2.7 Kannada National Language Single Shift Table
   */
  // 01.....23.....4.....5.6.....789A.....BCD.....EF
    "@\u00a3$\u00a5\u00bf\"\u00a4%&'\u000c*+\ufffe-/"
  // 0123.....45.....6789.....A.....B.....C.....D.....E.....F.....
  + "<=>\u00a1^\u00a1_#*\u0964\u0965\uffff\u0ce6\u0ce7\u0ce8\u0ce9"
  // 0.....1.....2.....3.....4.....5.....6.....7.....89A.....BCDEF.
  + "\u0cea\u0ceb\u0cec\u0ced\u0cee\u0cef\u0cde\u0cf1{}\u0cf2    \\"
  // 0123456789ABCDEF
  + "            [~] "
  // 0123456789ABCDEF
  + "|ABCDEFGHIJKLMNO"
  // 0123456789ABCDEF
  + "PQRSTUVWXYZ     "
  // 012345.....6789ABCDEF
  + "     \u20ac          "
  // 0123456789ABCDEF
  + "                ",

  /**
   * National Language Identifier: 0x08
   * A.2.8 Malayalam National Language Single Shift Table
   */
  // 01.....23.....4.....5.6.....789A.....BCD.....EF
    "@\u00a3$\u00a5\u00bf\"\u00a4%&'\u000c*+\ufffe-/"
  // 0123.....45.....6789.....A.....B.....C.....D.....E.....F.....
  + "<=>\u00a1^\u00a1_#*\u0964\u0965\uffff\u0d66\u0d67\u0d68\u0d69"
  // 0.....1.....2.....3.....4.....5.....6.....7.....89A.....B.....C.....D.....E.....F.
  + "\u0d6a\u0d6b\u0d6c\u0d6d\u0d6e\u0d6f\u0d70\u0d71{}\u0d72\u0d73\u0d74\u0d75\u0d7a\\"
  // 0.....1.....2.....3.....4.....56789ABCDEF
  + "\u0d7b\u0d7c\u0d7d\u0d7e\u0d7f       [~] "
  // 0123456789ABCDEF
  + "|ABCDEFGHIJKLMNO"
  // 0123456789ABCDEF
  + "PQRSTUVWXYZ     "
  // 012345.....6789ABCDEF
  + "     \u20ac          "
  // 0123456789ABCDEF
  + "                ",

  /**
   * National Language Identifier: 0x09
   * A.2.9 Oriya National Language Single Shift Table
   */
  // 01.....23.....4.....5.6.....789A.....BCD.....EF
    "@\u00a3$\u00a5\u00bf\"\u00a4%&'\u000c*+\ufffe-/"
  // 0123.....45.....6789.....A.....B.....C.....D.....E.....F.....
  + "<=>\u00a1^\u00a1_#*\u0964\u0965\uffff\u0b66\u0b67\u0b68\u0b69"
  // 0.....1.....2.....3.....4.....5.....6.....7.....89A.....B.....C.....DEF.
  + "\u0b6a\u0b6b\u0b6c\u0b6d\u0b6e\u0b6f\u0b5c\u0b5d{}\u0b5f\u0b70\u0b71  \\"
  // 0123456789ABCDEF
  + "            [~] "
  // 0123456789ABCDEF
  + "|ABCDEFGHIJKLMNO"
  // 0123456789ABCDEF
  + "PQRSTUVWXYZ     "
  // 012345.....6789ABCDEF
  + "     \u20ac          "
  // 0123456789ABCDEF
  + "                ",

  /**
   * National Language Identifier: 0x0A
   * A.2.10 Punjabi National Language Single Shift Table
   */
  // 01.....23.....4.....5.6.....789A.....BCD.....EF
    "@\u00a3$\u00a5\u00bf\"\u00a4%&'\u000c*+\ufffe-/"
  // 0123.....45.....6789.....A.....B.....C.....D.....E.....F.....
  + "<=>\u00a1^\u00a1_#*\u0964\u0965\uffff\u0a66\u0a67\u0a68\u0a69"
  // 0.....1.....2.....3.....4.....5.....6.....7.....89A.....B.....C.....D.....EF.
  + "\u0a6a\u0a6b\u0a6c\u0a6d\u0a6e\u0a6f\u0a59\u0a5a{}\u0a5b\u0a5c\u0a5e\u0a75 \\"
  // 0123456789ABCDEF
  + "            [~] "
  // 0123456789ABCDEF
  + "|ABCDEFGHIJKLMNO"
  // 0123456789ABCDEF
  + "PQRSTUVWXYZ     "
  // 012345.....6789ABCDEF
  + "     \u20ac          "
  // 0123456789ABCDEF
  + "                ",

  /**
   * National Language Identifier: 0x0B
   * A.2.11 Tamil National Language Single Shift Table
   */
  // 01.....23.....4.....5.6.....789A.....BCD.....EF
    "@\u00a3$\u00a5\u00bf\"\u00a4%&'\u000c*+\ufffe-/"
  // 0123.....45.....6789.....A.....B.....C.....D.....E.....F.....
  + "<=>\u00a1^\u00a1_#*\u0964\u0965\uffff\u0be6\u0be7\u0be8\u0be9"
  // 0.....1.....2.....3.....4.....5.....6.....7.....89A.....B.....C.....D.....E.....F.
  + "\u0bea\u0beb\u0bec\u0bed\u0bee\u0bef\u0bf3\u0bf4{}\u0bf5\u0bf6\u0bf7\u0bf8\u0bfa\\"
  // 0123456789ABCDEF
  + "            [~] "
  // 0123456789ABCDEF
  + "|ABCDEFGHIJKLMNO"
  // 0123456789ABCDEF
  + "PQRSTUVWXYZ     "
  // 012345.....6789ABCDEF
  + "     \u20ac          "
  // 0123456789ABCDEF
  + "                ",

  /**
   * National Language Identifier: 0x0C
   * A.2.12 Telugu National Language Single Shift Table
   */
  // 01.....23.....4.....5.6.....789A.....BCD.....EF
    "@\u00a3$\u00a5\u00bf\"\u00a4%&'\u000c*+\ufffe-/"
  // 0123.....45.....6789AB.....C.....D.....E.....F.....
  + "<=>\u00a1^\u00a1_#*  \uffff\u0c66\u0c67\u0c68\u0c69"
  // 0.....1.....2.....3.....4.....5.....6.....7.....89A.....B.....C.....D.....E.....F.
  + "\u0c6a\u0c6b\u0c6c\u0c6d\u0c6e\u0c6f\u0c58\u0c59{}\u0c78\u0c79\u0c7a\u0c7b\u0c7c\\"
  // 0.....1.....2.....3456789ABCDEF
  + "\u0c7d\u0c7e\u0c7f         [~] "
  // 0123456789ABCDEF
  + "|ABCDEFGHIJKLMNO"
  // 0123456789ABCDEF
  + "PQRSTUVWXYZ     "
  // 012345.....6789ABCDEF
  + "     \u20ac          "
  // 0123456789ABCDEF
  + "                ",

  /**
   * National Language Identifier: 0x0D
   * A.2.13 Urdu National Language Single Shift Table
   */
  // 01.....23.....4.....5.6.....789A.....BCD.....EF
    "@\u00a3$\u00a5\u00bf\"\u00a4%&'\u000c*+\ufffe-/"
  // 0123.....45.....6789.....A.....B.....C.....D.....E.....F.....
  + "<=>\u00a1^\u00a1_#*\u0600\u0601\uffff\u06f0\u06f1\u06f2\u06f3"
  // 0.....1.....2.....3.....4.....5.....6.....7.....89A.....B.....C.....D.....E.....F.
  + "\u06f4\u06f5\u06f6\u06f7\u06f8\u06f9\u060c\u060d{}\u060e\u060f\u0610\u0611\u0612\\"
  // 0.....1.....2.....3.....4.....5.....6.....7.....8.....9.....A.....B.....CDEF.....
  + "\u0613\u0614\u061b\u061f\u0640\u0652\u0658\u066b\u066c\u0672\u0673\u06cd[~]\u06d4"
  // 0123456789ABCDEF
  + "|ABCDEFGHIJKLMNO"
  // 0123456789ABCDEF
  + "PQRSTUVWXYZ     "
  // 012345.....6789ABCDEF
  + "     \u20ac          "
  // 0123456789ABCDEF
  + "                "
];

// Special SMS Message Indication constants
this.PDU_MWI_STORE_TYPE_BIT     = 0x80;
this.PDU_MWI_STORE_TYPE_DISCARD = 0x00;
this.PDU_MWI_STORE_TYPE_STORE   = 0x80;

this.GSM_SMS_STRICT_7BIT_CHARMAP = {
//"\u0024": "\u0024", // "$" => "$", already in default alphabet
//"\u00a5": "\u00a5", // "¥" => "¥", already in default alphabet
  "\u00c0": "\u0041", // "À" => "A"
  "\u00c1": "\u0041", // "Á" => "A"
  "\u00c2": "\u0041", // "Â" => "A"
//"\u00c4": "\u00c4", // "Ä" => "Ä", already in default alphabet
//"\u00c5": "\u00c5", // "Å" => "Å", already in default alphabet
//"\u00c6": "\u00c6", // "Æ" => "Æ", already in default alphabet
//"\u00c7": "\u00c7", // "Ç" => "Ç", already in default alphabet
  "\u00c8": "\u0045", // "È" => "E"
//"\u00c9": "\u00c9", // "É" => "É", already in default alphabet
  "\u00ca": "\u0045", // "Ê" => "E"
  "\u00cb": "\u0045", // "Ë" => "E"
  "\u00cc": "\u0049", // "Ì" => "I"
  "\u00cd": "\u0049", // "Í" => "I"
  "\u00ce": "\u0049", // "Î" => "I"
  "\u00cf": "\u0049", // "Ï" => "I"
//"\u00d1": "\u00d1", // "Ñ" => "Ñ", already in default alphabet
  "\u00d2": "\u004f", // "Ò" => "O"
  "\u00d3": "\u004f", // "Ó" => "O"
  "\u00d4": "\u004f", // "Ô" => "O"
//"\u00d6": "\u00d6", // "Ö" => "Ö", already in default alphabet
  "\u00d9": "\u0055", // "Ù" => "U"
  "\u00da": "\u0055", // "Ú" => "U"
  "\u00db": "\u0055", // "Û" => "U"
//"\u00dc": "\u00dc", // "Ü" => "Ü", already in default alphabet
//"\u00df": "\u00df", // "ß" => "ß", already in default alphabet
//"\u00e0": "\u00e0", // "à" => "à", already in default alphabet
  "\u00e1": "\u0061", // "á" => "a"
  "\u00e2": "\u0061", // "â" => "a"
//"\u00e4": "\u00e4", // "ä" => "ä", already in default alphabet
//"\u00e5": "\u00e5", // "å" => "å", already in default alphabet
//"\u00e6": "\u00e6", // "æ" => "æ", already in default alphabet
  "\u00e7": "\u00c7", // "ç" => "Ç"
//"\u00e8": "\u00e8", // "è" => "è", already in default alphabet
//"\u00e9": "\u00e9", // "é" => "é", already in default alphabet
  "\u00ea": "\u0065", // "ê" => "e"
  "\u00eb": "\u0065", // "ë" => "e"
//"\u00ec": "\u00ec", // "ì" => "ì", already in default alphabet
  "\u00ed": "\u0069", // "í" => "i"
  "\u00ee": "\u0069", // "î" => "i"
  "\u00ef": "\u0069", // "ï" => "i"
//"\u00f1": "\u00f1", // "ñ" => "ñ", already in default alphabet
//"\u00f2": "\u00f2", // "ò" => "ò", already in default alphabet
  "\u00f3": "\u006f", // "ó" => "o"
  "\u00f4": "\u006f", // "ô" => "o"
//"\u00f6": "\u00f6", // "ö" => "ö", already in default alphabet
//"\u00f8": "\u00f8", // "ø" => "ø", already in default alphabet
//"\u00f9": "\u00f9", // "ù" => "ù", already in default alphabet
  "\u00fa": "\u0075", // "ú" => "u"
  "\u00fb": "\u0075", // "û" => "u"
//"\u00fc": "\u00fc", // "ü" => "ü", already in default alphabet
  "\u00fe": "\u0074", // "þ" => "t"
  "\u0100": "\u0041", // "Ā" => "A"
  "\u0101": "\u0061", // "ā" => "a"
  "\u0106": "\u0043", // "Ć" => "C"
  "\u0107": "\u0063", // "ć" => "c"
  "\u010c": "\u0043", // "Č" => "C"
  "\u010d": "\u0063", // "č" => "c"
  "\u010f": "\u0064", // "ď" => "d"
  "\u0110": "\u0044", // "Đ" => "D"
  "\u0111": "\u0064", // "đ" => "d"
  "\u0112": "\u0045", // "Ē" => "E"
  "\u0113": "\u0065", // "ē" => "e"
  "\u0118": "\u0045", // "Ę" => "E"
  "\u0119": "\u0065", // "ę" => "e"
  "\u012a": "\u0049", // "Ī" => "I"
  "\u012b": "\u0069", // "ī" => "i"
  "\u012e": "\u0049", // "Į" => "I"
  "\u012f": "\u0069", // "į" => "i"
  "\u0141": "\u004c", // "Ł" => "L"
  "\u0142": "\u006c", // "ł" => "l"
  "\u0143": "\u004e", // "Ń" => "N"
  "\u0144": "\u006e", // "ń" => "n"
  "\u0147": "\u004e", // "Ň" => "N"
  "\u0148": "\u006e", // "ň" => "n"
  "\u014c": "\u004f", // "Ō" => "O"
  "\u014d": "\u006f", // "ō" => "o"
  "\u0152": "\u004f", // "Œ" => "O"
  "\u0153": "\u006f", // "œ" => "o"
  "\u0158": "\u0052", // "Ř" => "R"
  "\u0159": "\u0072", // "ř" => "r"
  "\u0160": "\u0053", // "Š" => "S"
  "\u0161": "\u0073", // "š" => "s"
  "\u0165": "\u0074", // "ť" => "t"
  "\u016a": "\u0055", // "Ū" => "U"
  "\u016b": "\u0075", // "ū" => "u"
  "\u0178": "\u0059", // "Ÿ" => "Y"
  "\u0179": "\u005a", // "Ź" => "Z"
  "\u017a": "\u007a", // "ź" => "z"
  "\u017b": "\u005a", // "Ż" => "Z"
  "\u017c": "\u007a", // "ż" => "z"
  "\u017d": "\u005a", // "Ž" => "Z"
  "\u017e": "\u007a", // "ž" => "z"
  "\u025b": "\u0045", // "ɛ" => "E"
//"\u0398": "\u0398", // "Θ" => "Θ", already in default alphabet
  "\u20a4": "\u00a3", // "₤" => "£"
//"\u20ac": "\u20ac", // "€" => "€", already in default alphabet
};

this.RADIOTECH_FAMILY_3GPP = 1;  // GSM, WCDMA, LTE
this.RADIOTECH_FAMILY_3GPP2 = 2; // CDMA, EVDO

this.DATACALL_RADIOTECHNOLOGY_CDMA = 0;
this.DATACALL_RADIOTECHNOLOGY_GSM = 1;

this.DATACALL_AUTH_NONE = 0;
this.DATACALL_AUTH_PAP = 1;
this.DATACALL_AUTH_CHAP = 2;
this.DATACALL_AUTH_PAP_OR_CHAP = 3;

this.DATACALL_PROFILE_DEFAULT = 0;
this.DATACALL_PROFILE_TETHERED = 1;
this.DATACALL_PROFILE_OEM_BASE = 1000;

this.DATACALL_DEACTIVATE_NO_REASON = 0;
this.DATACALL_DEACTIVATE_RADIO_SHUTDOWN = 1;

this.DATACALL_ACTIVE_UNKNOWN = -1;
this.DATACALL_INACTIVE = 0;
this.DATACALL_ACTIVE_DOWN = 1;
this.DATACALL_ACTIVE_UP = 2;

this.DATACALL_FAIL_NONE = 0;
this.DATACALL_FAIL_OPERATOR_BARRED = 0x08;
this.DATACALL_FAIL_INSUFFICIENT_RESOURCES = 0x1A;
this.DATACALL_FAIL_MISSING_UKNOWN_APN = 0x1B;
this.DATACALL_FAIL_UNKNOWN_PDP_ADDRESS_TYPE = 0x1C;
this.DATACALL_FAIL_USER_AUTHENTICATION = 0x1D;
this.DATACALL_FAIL_ACTIVATION_REJECT_GGSN = 0x1E;
this.DATACALL_FAIL_ACTIVATION_REJECT_UNSPECIFIED = 0x1F;
this.DATACALL_FAIL_SERVICE_OPTION_NOT_SUPPORTED = 0x20;
this.DATACALL_FAIL_SERVICE_OPTION_NOT_SUBSCRIBED = 0x21;
this.DATACALL_FAIL_SERVICE_OPTION_OUT_OF_ORDER = 0x22;
this.DATACALL_FAIL_NSAPI_IN_USE = 0x23;
this.DATACALL_FAIL_ONLY_IPV4_ALLOWED = 0x32;
this.DATACALL_FAIL_ONLY_IPV6_ALLOWED = 0x33;
this.DATACALL_FAIL_ONLY_SINGLE_BEARER_ALLOWED = 0x34;
this.DATACALL_FAIL_PROTOCOL_ERRORS = 0x6F;
this.DATACALL_FAIL_VOICE_REGISTRATION_FAIL = -1;
this.DATACALL_FAIL_DATA_REGISTRATION_FAIL = -2;
this.DATACALL_FAIL_SIGNAL_LOST = -3;
this.DATACALL_FAIL_PREF_RADIO_TECH_CHANGED = -4;
this.DATACALL_FAIL_RADIO_POWER_OFF = -5;
this.DATACALL_FAIL_TETHERED_CALL_ACTIVE = -6;
this.DATACALL_FAIL_ERROR_UNSPECIFIED = 0xffff;

// Keep consistent with nsINetworkManager.NETWORK_STATE_*.
this.GECKO_NETWORK_STATE_UNKNOWN = -1;
this.GECKO_NETWORK_STATE_CONNECTING = 0;
this.GECKO_NETWORK_STATE_CONNECTED = 1;
this.GECKO_NETWORK_STATE_DISCONNECTING = 2;
this.GECKO_NETWORK_STATE_DISCONNECTED = 3;

// Used for QUERY_AVAILABLE_NETWORKS status of "unknown"
this.GECKO_QAN_STATE_UNKNOWN = null;

this.CALL_FAIL_UNOBTAINABLE_NUMBER = 1;
this.CALL_FAIL_NORMAL = 16;
this.CALL_FAIL_BUSY = 17;
this.CALL_FAIL_NO_USER_RESPONDING = 18;
this.CALL_FAIL_USER_ALERTING = 19;
this.CALL_FAIL_CALL_REJECTED = 21;
this.CALL_FAIL_NUMBER_CHANGED = 22;
this.CALL_FAIL_CALL_PRE_EMPTION = 25;
this.CALL_FAIL_DEST_OUT_OF_ORDER = 27;
this.CALL_FAIL_INVALID_FORMAT = 28;
this.CALL_FAIL_FACILITY_REJECTED = 29;
this.CALL_FAIL_CONGESTION = 34;
this.CALL_FAIL_NETWORK_OUT_OF_ORDER = 38;
this.CALL_FAIL_NETWORK_TEMP_FAILURE = 41;
this.CALL_FAIL_ACM_LIMIT_EXCEEDED = 68;
this.CALL_FAIL_CALL_BARRED = 240;
this.CALL_FAIL_FDN_BLOCKED = 241;
this.CALL_FAIL_IMSI_UNKNOWN_IN_VLR = 242;
this.CALL_FAIL_IMEI_NOT_ACCEPTED = 243;
this.CALL_FAIL_ERROR_UNSPECIFIED = 0xffff;

// Other Gecko-specific constants
this.GECKO_RADIOSTATE_UNAVAILABLE   = null;
this.GECKO_RADIOSTATE_OFF           = "off";
this.GECKO_RADIOSTATE_READY         = "ready";

this.GECKO_CARDSTATE_UNAVAILABLE    = null;
this.GECKO_CARDSTATE_ABSENT         = "absent";
this.GECKO_CARDSTATE_PIN_REQUIRED   = "pinRequired";
this.GECKO_CARDSTATE_PUK_REQUIRED   = "pukRequired";
this.GECKO_CARDSTATE_NETWORK_LOCKED = "networkLocked";
this.GECKO_CARDSTATE_NOT_READY      = null;
this.GECKO_CARDSTATE_READY          = "ready";

this.GECKO_NETWORK_SELECTION_UNKNOWN   = null;
this.GECKO_NETWORK_SELECTION_AUTOMATIC = "automatic";
this.GECKO_NETWORK_SELECTION_MANUAL    = "manual";

this.GECKO_MOBILE_CONNECTION_STATE_UNKNOWN = null;
this.GECKO_MOBILE_CONNECTION_STATE_NOTSEARCHING = "notSearching";
this.GECKO_MOBILE_CONNECTION_STATE_SEARCHING = "searching";
this.GECKO_MOBILE_CONNECTION_STATE_REGISTERED = "registered";
this.GECKO_MOBILE_CONNECTION_STATE_DENIED = "denied";

this.NETWORK_CREG_TO_GECKO_MOBILE_CONNECTION_STATE = {};
NETWORK_CREG_TO_GECKO_MOBILE_CONNECTION_STATE[NETWORK_CREG_STATE_NOT_SEARCHING] = GECKO_MOBILE_CONNECTION_STATE_NOTSEARCHING;
NETWORK_CREG_TO_GECKO_MOBILE_CONNECTION_STATE[NETWORK_CREG_STATE_REGISTERED_HOME] = GECKO_MOBILE_CONNECTION_STATE_REGISTERED;
NETWORK_CREG_TO_GECKO_MOBILE_CONNECTION_STATE[NETWORK_CREG_STATE_SEARCHING] = GECKO_MOBILE_CONNECTION_STATE_REGISTERED;
NETWORK_CREG_TO_GECKO_MOBILE_CONNECTION_STATE[NETWORK_CREG_STATE_DENIED] = GECKO_MOBILE_CONNECTION_STATE_DENIED;
NETWORK_CREG_TO_GECKO_MOBILE_CONNECTION_STATE[NETWORK_CREG_STATE_UNKNOWN] = GECKO_MOBILE_CONNECTION_STATE_UNKNOWN;
NETWORK_CREG_TO_GECKO_MOBILE_CONNECTION_STATE[NETWORK_CREG_STATE_REGISTERED_ROAMING] = GECKO_MOBILE_CONNECTION_STATE_REGISTERED;
NETWORK_CREG_TO_GECKO_MOBILE_CONNECTION_STATE[NETWORK_CREG_STATE_NOT_SEARCHING_EMERGENCY_CALLS] = GECKO_MOBILE_CONNECTION_STATE_NOTSEARCHING;
NETWORK_CREG_TO_GECKO_MOBILE_CONNECTION_STATE[NETWORK_CREG_STATE_SEARCHING_EMERGENCY_CALLS] = GECKO_MOBILE_CONNECTION_STATE_SEARCHING;
NETWORK_CREG_TO_GECKO_MOBILE_CONNECTION_STATE[NETWORK_CREG_STATE_DENIED_EMERGENCY_CALLS] = GECKO_MOBILE_CONNECTION_STATE_DENIED;
NETWORK_CREG_TO_GECKO_MOBILE_CONNECTION_STATE[NETWORK_CREG_STATE_UNKNOWN_EMERGENCY_CALLS] = GECKO_MOBILE_CONNECTION_STATE_UNKNOWN;


this.GECKO_CALL_ERROR_BAD_NUMBER             = "BadNumberError";
this.GECKO_CALL_ERROR_NORMAL_CALL_CLEARING   = "NormalCallClearingError";
this.GECKO_CALL_ERROR_BUSY                   = "BusyError";
this.GECKO_CALL_ERROR_NO_USER_RESPONDING     = "NoUserRespondingError";
this.GECKO_CALL_ERROR_USER_ALERTING          = "UserAlertingNoAnswerError";
this.GECKO_CALL_ERROR_REJECTED               = "CallRejectedError";
this.GECKO_CALL_ERROR_NUMBER_CHANGED         = "NumberChangedError";
this.GECKO_CALL_ERROR_PRE_EMPTION            = "PreEmptionError";
this.GECKO_CALL_ERROR_DEST_OUT_OF_ORDER      = "DestinationOutOfOrderError";
this.GECKO_CALL_ERROR_INVALID_NUMBER_FORMAT  = "InvalidNumberFormatError";
this.GECKO_CALL_ERROR_FACILITY_REJECTED      = "FacilityRejectedError";
this.GECKO_CALL_ERROR_CONGESTION             = "CongestionError";
this.GECKO_CALL_ERROR_NETWORK_OUT_OF_ORDER   = "NetworkOutOfOrderError";
this.GECKO_CALL_ERROR_NETWORK_TEMP_FAILURE   = "NetworkTempFailureError";
this.GECKO_CALL_ERROR_INCOMING_CALL_EXCEEDED = "IncomingCallExceededError";
this.GECKO_CALL_ERROR_BARRED                 = "BarredError";
this.GECKO_CALL_ERROR_FDN_BLOCKED            = "FDNBlockedError";
this.GECKO_CALL_ERROR_SUBSCRIBER_UNKNOWN     = "SubscriberUnknownError";
this.GECKO_CALL_ERROR_DEVICE_NOT_ACCEPTED    = "DeviceNotAcceptedError";
this.GECKO_CALL_ERROR_UNSPECIFIED            = "UnspecifiedError";

this.RIL_CALL_FAILCAUSE_TO_GECKO_CALL_ERROR = {};
RIL_CALL_FAILCAUSE_TO_GECKO_CALL_ERROR[CALL_FAIL_UNOBTAINABLE_NUMBER] = GECKO_CALL_ERROR_BAD_NUMBER;
RIL_CALL_FAILCAUSE_TO_GECKO_CALL_ERROR[CALL_FAIL_NORMAL]              = GECKO_CALL_ERROR_NORMAL_CALL_CLEARING;
RIL_CALL_FAILCAUSE_TO_GECKO_CALL_ERROR[CALL_FAIL_BUSY]                = GECKO_CALL_ERROR_BUSY;
RIL_CALL_FAILCAUSE_TO_GECKO_CALL_ERROR[CALL_FAIL_NO_USER_RESPONDING]  = GECKO_CALL_ERROR_NO_USER_RESPONDING;
RIL_CALL_FAILCAUSE_TO_GECKO_CALL_ERROR[CALL_FAIL_USER_ALERTING]       = GECKO_CALL_ERROR_USER_ALERTING;
RIL_CALL_FAILCAUSE_TO_GECKO_CALL_ERROR[CALL_FAIL_CALL_REJECTED]       = GECKO_CALL_ERROR_REJECTED;
RIL_CALL_FAILCAUSE_TO_GECKO_CALL_ERROR[CALL_FAIL_NUMBER_CHANGED]      = GECKO_CALL_ERROR_NUMBER_CHANGED;
RIL_CALL_FAILCAUSE_TO_GECKO_CALL_ERROR[CALL_FAIL_CALL_PRE_EMPTION]    = GECKO_CALL_ERROR_PRE_EMPTION;
RIL_CALL_FAILCAUSE_TO_GECKO_CALL_ERROR[CALL_FAIL_DEST_OUT_OF_ORDER]   = GECKO_CALL_ERROR_DEST_OUT_OF_ORDER;
RIL_CALL_FAILCAUSE_TO_GECKO_CALL_ERROR[CALL_FAIL_INVALID_FORMAT]      = GECKO_CALL_ERROR_INVALID_NUMBER_FORMAT;
RIL_CALL_FAILCAUSE_TO_GECKO_CALL_ERROR[CALL_FAIL_FACILITY_REJECTED]   = GECKO_CALL_ERROR_FACILITY_REJECTED;
RIL_CALL_FAILCAUSE_TO_GECKO_CALL_ERROR[CALL_FAIL_CONGESTION]          = GECKO_CALL_ERROR_CONGESTION;
RIL_CALL_FAILCAUSE_TO_GECKO_CALL_ERROR[CALL_FAIL_NETWORK_OUT_OF_ORDER]= GECKO_CALL_ERROR_NETWORK_OUT_OF_ORDER;
RIL_CALL_FAILCAUSE_TO_GECKO_CALL_ERROR[CALL_FAIL_NETWORK_TEMP_FAILURE]= GECKO_CALL_ERROR_NETWORK_TEMP_FAILURE;
RIL_CALL_FAILCAUSE_TO_GECKO_CALL_ERROR[CALL_FAIL_ACM_LIMIT_EXCEEDED]  = GECKO_CALL_ERROR_INCOMING_CALL_EXCEEDED;
RIL_CALL_FAILCAUSE_TO_GECKO_CALL_ERROR[CALL_FAIL_CALL_BARRED]         = GECKO_CALL_ERROR_BARRED;
RIL_CALL_FAILCAUSE_TO_GECKO_CALL_ERROR[CALL_FAIL_FDN_BLOCKED]         = GECKO_CALL_ERROR_FDN_BLOCKED;
RIL_CALL_FAILCAUSE_TO_GECKO_CALL_ERROR[CALL_FAIL_IMSI_UNKNOWN_IN_VLR] = GECKO_CALL_ERROR_SUBSCRIBER_UNKNOWN;
RIL_CALL_FAILCAUSE_TO_GECKO_CALL_ERROR[CALL_FAIL_IMEI_NOT_ACCEPTED]   = GECKO_CALL_ERROR_DEVICE_NOT_ACCEPTED;
RIL_CALL_FAILCAUSE_TO_GECKO_CALL_ERROR[CALL_FAIL_ERROR_UNSPECIFIED]   = GECKO_CALL_ERROR_UNSPECIFIED;

this.GECKO_DATACALL_ERROR_OPERATOR_BARRED               = "OperatorBarredError";
this.GECKO_DATACALL_ERROR_INSUFFICIENT_RESOURCES        = "InsufficientResourcesError";
this.GECKO_DATACALL_ERROR_MISSING_UKNOWN_APN            = "MissingUnknownAPNError";
this.GECKO_DATACALL_ERROR_UNKNOWN_PDP_ADDRESS_TYPE      = "UnknownPDPAddressTypeError";
this.GECKO_DATACALL_ERROR_USER_AUTHENTICATION           = "UserAuthenticationError";
this.GECKO_DATACALL_ERROR_ACTIVATION_REJECT_GGSN        = "ActivationRejectGGSNError";
this.GECKO_DATACALL_ERROR_ACTIVATION_REJECT_UNSPECIFIED = "ActivationRejectUnspecifiedError";
this.GECKO_DATACALL_ERROR_SERVICE_OPTION_NOT_SUPPORTED  = "ServiceOptionNotSupportedError";
this.GECKO_DATACALL_ERROR_SERVICE_OPTION_NOT_SUBSCRIBED = "ServiceOptionNotSubscribedError";
this.GECKO_DATACALL_ERROR_SERVICE_OPTION_OUT_OF_ORDER   = "ServiceOptionOutOfOrderError";
this.GECKO_DATACALL_ERROR_NSAPI_IN_USE                  = "NSAPIInUseError";
this.GECKO_DATACALL_ERROR_ONLY_IPV4_ALLOWED             = "OnlyIPv4Error";
this.GECKO_DATACALL_ERROR_ONLY_IPV6_ALLOWED             = "OnlyIPv6Error";
this.GECKO_DATACALL_ERROR_ONLY_SINGLE_BEARER_ALLOWED    = "OnlySingleBearerAllowedError";
this.GECKO_DATACALL_ERROR_PROTOCOL_ERRORS               = "ProtocolErrorsError";
this.GECKO_DATACALL_ERROR_VOICE_REGISTRATION_FAIL       = "VoiceRegistrationFailError";
this.GECKO_DATACALL_ERROR_DATA_REGISTRATION_FAIL        = "DataRegistrationFailError";
this.GECKO_DATACALL_ERROR_SIGNAL_LOST                   = "SignalLostError";
this.GECKO_DATACALL_ERROR_PREF_RADIO_TECH_CHANGED       = "PrefRadioTechChangedError";
this.GECKO_DATACALL_ERROR_RADIO_POWER_OFF               = "RadioPowerOffError";
this.GECKO_DATACALL_ERROR_TETHERED_CALL_ACTIVE          = "TetheredCallActiveError";
this.GECKO_DATACALL_ERROR_UNSPECIFIED                   = "UnspecifiedError";

this.RIL_DATACALL_FAILCAUSE_TO_GECKO_DATACALL_ERROR = {};
RIL_DATACALL_FAILCAUSE_TO_GECKO_DATACALL_ERROR[DATACALL_FAIL_OPERATOR_BARRED]               = GECKO_DATACALL_ERROR_OPERATOR_BARRED;
RIL_DATACALL_FAILCAUSE_TO_GECKO_DATACALL_ERROR[DATACALL_FAIL_INSUFFICIENT_RESOURCES]        = GECKO_DATACALL_ERROR_INSUFFICIENT_RESOURCES;
RIL_DATACALL_FAILCAUSE_TO_GECKO_DATACALL_ERROR[DATACALL_FAIL_MISSING_UKNOWN_APN]            = GECKO_DATACALL_ERROR_MISSING_UKNOWN_APN;
RIL_DATACALL_FAILCAUSE_TO_GECKO_DATACALL_ERROR[DATACALL_FAIL_UNKNOWN_PDP_ADDRESS_TYPE]      = GECKO_DATACALL_ERROR_UNKNOWN_PDP_ADDRESS_TYPE;
RIL_DATACALL_FAILCAUSE_TO_GECKO_DATACALL_ERROR[DATACALL_FAIL_USER_AUTHENTICATION]           = GECKO_DATACALL_ERROR_USER_AUTHENTICATION;
RIL_DATACALL_FAILCAUSE_TO_GECKO_DATACALL_ERROR[DATACALL_FAIL_ACTIVATION_REJECT_GGSN]        = GECKO_DATACALL_ERROR_ACTIVATION_REJECT_GGSN;
RIL_DATACALL_FAILCAUSE_TO_GECKO_DATACALL_ERROR[DATACALL_FAIL_ACTIVATION_REJECT_UNSPECIFIED] = GECKO_DATACALL_ERROR_ACTIVATION_REJECT_UNSPECIFIED;
RIL_DATACALL_FAILCAUSE_TO_GECKO_DATACALL_ERROR[DATACALL_FAIL_SERVICE_OPTION_NOT_SUPPORTED]  = GECKO_DATACALL_ERROR_SERVICE_OPTION_NOT_SUPPORTED;
RIL_DATACALL_FAILCAUSE_TO_GECKO_DATACALL_ERROR[DATACALL_FAIL_SERVICE_OPTION_NOT_SUBSCRIBED] = GECKO_DATACALL_ERROR_SERVICE_OPTION_NOT_SUBSCRIBED;
RIL_DATACALL_FAILCAUSE_TO_GECKO_DATACALL_ERROR[DATACALL_FAIL_SERVICE_OPTION_OUT_OF_ORDER]   = GECKO_DATACALL_ERROR_SERVICE_OPTION_OUT_OF_ORDER;
RIL_DATACALL_FAILCAUSE_TO_GECKO_DATACALL_ERROR[DATACALL_FAIL_NSAPI_IN_USE]                  = GECKO_DATACALL_ERROR_NSAPI_IN_USE;
RIL_DATACALL_FAILCAUSE_TO_GECKO_DATACALL_ERROR[DATACALL_FAIL_ONLY_IPV4_ALLOWED]             = GECKO_DATACALL_ERROR_ONLY_IPV4_ALLOWED;
RIL_DATACALL_FAILCAUSE_TO_GECKO_DATACALL_ERROR[DATACALL_FAIL_ONLY_IPV6_ALLOWED]             = GECKO_DATACALL_ERROR_ONLY_IPV6_ALLOWED;
RIL_DATACALL_FAILCAUSE_TO_GECKO_DATACALL_ERROR[DATACALL_FAIL_ONLY_SINGLE_BEARER_ALLOWED]    = GECKO_DATACALL_ERROR_ONLY_SINGLE_BEARER_ALLOWED;
RIL_DATACALL_FAILCAUSE_TO_GECKO_DATACALL_ERROR[DATACALL_FAIL_PROTOCOL_ERRORS]               = GECKO_DATACALL_ERROR_PROTOCOL_ERRORS;
RIL_DATACALL_FAILCAUSE_TO_GECKO_DATACALL_ERROR[DATACALL_FAIL_VOICE_REGISTRATION_FAIL]       = GECKO_DATACALL_ERROR_VOICE_REGISTRATION_FAIL;
RIL_DATACALL_FAILCAUSE_TO_GECKO_DATACALL_ERROR[DATACALL_FAIL_DATA_REGISTRATION_FAIL]        = GECKO_DATACALL_ERROR_DATA_REGISTRATION_FAIL;
RIL_DATACALL_FAILCAUSE_TO_GECKO_DATACALL_ERROR[DATACALL_FAIL_SIGNAL_LOST]                   = GECKO_DATACALL_ERROR_SIGNAL_LOST;
RIL_DATACALL_FAILCAUSE_TO_GECKO_DATACALL_ERROR[DATACALL_FAIL_PREF_RADIO_TECH_CHANGED]       = GECKO_DATACALL_ERROR_PREF_RADIO_TECH_CHANGED;
RIL_DATACALL_FAILCAUSE_TO_GECKO_DATACALL_ERROR[DATACALL_FAIL_RADIO_POWER_OFF]               = GECKO_DATACALL_ERROR_RADIO_POWER_OFF;
RIL_DATACALL_FAILCAUSE_TO_GECKO_DATACALL_ERROR[DATACALL_FAIL_TETHERED_CALL_ACTIVE]          = GECKO_DATACALL_ERROR_TETHERED_CALL_ACTIVE;
RIL_DATACALL_FAILCAUSE_TO_GECKO_DATACALL_ERROR[DATACALL_FAIL_ERROR_UNSPECIFIED]             = GECKO_DATACALL_ERROR_UNSPECIFIED;

this.GECKO_RADIO_TECH = [
  null,
  "gprs",
  "edge",
  "umts",
  "is95a",
  "is95b",
  "1xrtt",
  "evdo0",
  "evdoa",
  "hsdpa",
  "hsupa",
  "hspa",
  "evdob",
  "ehrpd",
  "lte",
  "hspa+",
];

this.GECKO_VOICEMAIL_MESSAGE_COUNT_UNKNOWN = -1;

// Call forwarding action. Must be in sync with nsIDOMMozMobileCFInfo interface
this.CALL_FORWARD_ACTION_DISABLE = 0;
this.CALL_FORWARD_ACTION_ENABLE = 1;
this.CALL_FORWARD_ACTION_QUERY_STATUS = 2;
this.CALL_FORWARD_ACTION_REGISTRATION = 3;
this.CALL_FORWARD_ACTION_ERASURE = 4;

// Call forwarding reason. Must be in sync with nsIDOMMozMobileCFInfo interface
this.CALL_FORWARD_REASON_UNCONDITIONAL = 0;
this.CALL_FORWARD_REASON_MOBILE_BUSY = 1;
this.CALL_FORWARD_REASON_NO_REPLY = 2;
this.CALL_FORWARD_REASON_NOT_REACHABLE = 3;
this.CALL_FORWARD_REASON_ALL_CALL_FORWARDING = 4;
this.CALL_FORWARD_REASON_ALL_CONDITIONAL_CALL_FORWARDING = 5;

// MMI procedure as defined in TS.22.030 6.5.2
this.MMI_PROCEDURE_ACTIVATION = "*";
this.MMI_PROCEDURE_DEACTIVATION = "#";
this.MMI_PROCEDURE_INTERROGATION = "*#";
this.MMI_PROCEDURE_REGISTRATION = "**";
this.MMI_PROCEDURE_ERASURE = "##";

this.MMI_PROC_TO_CF_ACTION = {};
MMI_PROC_TO_CF_ACTION[MMI_PROCEDURE_ACTIVATION] = CALL_FORWARD_ACTION_ENABLE;
MMI_PROC_TO_CF_ACTION[MMI_PROCEDURE_DEACTIVATION] = CALL_FORWARD_ACTION_DISABLE;
MMI_PROC_TO_CF_ACTION[MMI_PROCEDURE_INTERROGATION] = CALL_FORWARD_ACTION_QUERY_STATUS;
MMI_PROC_TO_CF_ACTION[MMI_PROCEDURE_REGISTRATION] = CALL_FORWARD_ACTION_REGISTRATION;
MMI_PROC_TO_CF_ACTION[MMI_PROCEDURE_ERASURE] = CALL_FORWARD_ACTION_ERASURE;

// MMI call forwarding service codes as defined in TS.22.030 Annex B
this.MMI_SC_CFU = "21";
this.MMI_SC_CF_BUSY = "67";
this.MMI_SC_CF_NO_REPLY = "61";
this.MMI_SC_CF_NOT_REACHABLE = "62";
this.MMI_SC_CF_ALL = "002";
this.MMI_SC_CF_ALL_CONDITIONAL = "004";

this.MMI_SC_TO_CF_REASON = {};
MMI_SC_TO_CF_REASON[MMI_SC_CFU] = CALL_FORWARD_REASON_UNCONDITIONAL;
MMI_SC_TO_CF_REASON[MMI_SC_CF_BUSY] = CALL_FORWARD_REASON_MOBILE_BUSY;
MMI_SC_TO_CF_REASON[MMI_SC_CF_NO_REPLY] = CALL_FORWARD_REASON_NO_REPLY;
MMI_SC_TO_CF_REASON[MMI_SC_CF_NOT_REACHABLE] = CALL_FORWARD_REASON_NOT_REACHABLE;
MMI_SC_TO_CF_REASON[MMI_SC_CF_ALL] = CALL_FORWARD_REASON_ALL_CALL_FORWARDING;
MMI_SC_TO_CF_REASON[MMI_SC_CF_ALL_CONDITIONAL] = CALL_FORWARD_REASON_ALL_CONDITIONAL_CALL_FORWARDING;

// MMI service codes for PIN/PIN2/PUK/PUK2 management as defined in TS.22.030
// sec 6.6
this.MMI_SC_PIN = "04";
this.MMI_SC_PIN2 = "042";
this.MMI_SC_PUK = "05";
this.MMI_SC_PUK2 = "052";

// MMI service code for IMEI presentation as defined in TS.22.030 sec 6.7
this.MMI_SC_IMEI = "06";

// MMI called line presentation service codes
this.MMI_SC_CLIP = "30";
this.MMI_SC_CLIR = "31";

// MMI call waiting service code
this.MMI_SC_CALL_WAITING = "43";

// MMI call barring service codes
this.MMI_SC_BAOC = "33";
this.MMI_SC_BAOIC = "331";
this.MMI_SC_BAOICxH = "332";
this.MMI_SC_BAIC = "35";
this.MMI_SC_BAICr = "351";
this.MMI_SC_BA_ALL = "330";
this.MMI_SC_BA_MO = "333";
this.MMI_SC_BA_MT = "353";

// Allow this file to be imported via Components.utils.import().
this.EXPORTED_SYMBOLS = Object.keys(this);
