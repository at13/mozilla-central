/* -*- Mode: javascript; tab-width: 20; indent-tabs-mode: nil; c-basic-offset: 4 -*- */
/* ***** BEGIN LICENSE BLOCK *****
 * Version: MPL 1.1/GPL 2.0/LGPL 2.1
 *
 * The contents of this file are subject to the Mozilla Public License Version
 * 1.1 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 * http://www.mozilla.org/MPL/
 *
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 * for the specific language governing rights and limitations under the
 * License.
 *
 * The Original Code is Oracle Corporation code.
 *
 * The Initial Developer of the Original Code is Oracle Corporation
 * Portions created by the Initial Developer are Copyright (C) 2005
 * the Initial Developer. All Rights Reserved.
 *
 * Contributor(s):
 *   Stuart Parmenter <stuart.parmenter@oracle.com>
 *
 * Alternatively, the contents of this file may be used under the terms of
 * either the GNU General Public License Version 2 or later (the "GPL"), or
 * the GNU Lesser General Public License Version 2.1 or later (the "LGPL"),
 * in which case the provisions of the GPL or the LGPL are applicable instead
 * of those above. If you wish to allow use of your version of this file only
 * under the terms of either the GPL or the LGPL, and not to allow others to
 * use your version of this file under the terms of the MPL, indicate your
 * decision by deleting the provisions above and replace them with the notice
 * and other provisions required by the GPL or the LGPL. If you do not delete
 * the provisions above, a recipient may use your version of this file under
 * the terms of any one of the MPL, the GPL or the LGPL.
 *
 * ***** END LICENSE BLOCK ***** */


const kStorageServiceContractID = "@mozilla.org/storage/service;1";
const kStorageServiceIID = Components.interfaces.mozIStorageService;

const kMozStorageStatementWrapperContractID = "@mozilla.org/storage/statement-wrapper;1";
const kMozStorageStatementWrapperIID = Components.interfaces.mozIStorageStatementWrapper;
const MozStorageStatementWrapper = new Components.Constructor(kMozStorageStatementWrapperContractID, kMozStorageStatementWrapperIID);

function createStatement (dbconn, sql) {
    var stmt = dbconn.createStatement(sql);
    var wrapper = MozStorageStatementWrapper();
    wrapper.initialize(stmt);
    return wrapper;
}

function calCalendarManager() {
    this.wrappedJSObject = this;
    this.initDB();
    this.mCache = {};
}

function makeURI(uriString)
{
    var ioservice = Components.classes["@mozilla.org/network/io-service;1"].getService(Components.interfaces.nsIIOService);
    return ioservice.newURI(uriString, null, null);
}

calCalendarManager.prototype = {
    QueryInterface: function (aIID) {
        if (!aIID.equals(Components.interfaces.nsISupports) &&
            !aIID.equals(Components.interfaces.calICalendarManager))
        {
            throw Components.results.NS_ERROR_NO_INTERFACE;
        }

        return this;
    },

    findDB: function() {
        var pathString = "c:\\builds\\mozilla\\objdir-sunbird\\dist\\bin\\calendar.db";
        var dbFile = Components.classes["@mozilla.org/file/local;1"].createInstance(Components.interfaces.nsILocalFile);
        dbFile.initWithPath(pathString);
        var ioservice = Components.classes["@mozilla.org/network/io-service;1"].getService(Components.interfaces.nsIIOService);
        uri = ioservice.newFileURI(dbFile);
        return uri.QueryInterface(Components.interfaces.nsIFileURL);
    },

    initDB: function() {
        var calendarTable = "id INTEGER PRIMARY KEY, name STRING, type STRING, uri STRING";
        var dbService = Components.classes[kStorageServiceContractID].getService(kStorageServiceIID);

        this.mDB = dbService.getProfileStorage("profile");
//        this.mDB = dbService.openDatabase(this.findDB().file);
        try {
            this.mDB.createTable("cal_calendars", calendarTable);
        } catch (e) {
            dump("error creating table cal_calendars -- probably already exists\n");
        }

        this.mSelectCalendars = createStatement (
            this.mDB,
            "SELECT oid,* FROM cal_calendars");

        this.mFindCalendar = createStatement (
            this.mDB,
            "SELECT id FROM cal_calendars WHERE name = :name AND type = :type AND uri = :uri");

        this.mRegisterCalendar = createStatement (
            this.mDB,
            "INSERT INTO cal_calendars (name, type, uri) " +
            "VALUES (:name, :type, :uri)"
            );

        this.mUnregisterCalendar = createStatement (
            this.mDB,
            "DELETE FROM cal_calendars WHERE id = :id"
            );


    },

    findCalendarID: function(calendar) {
        var stmt = this.mFindCalendar;
        stmt.reset();
        var pp = stmt.params;
        pp.name = calendar.name;
        pp.type = calendar.type;
        pp.uri = calendar.uri.spec;

        var id = -1;
        if (stmt.step()) {
            id = stmt.row.id;
        }
        stmt.reset();
        return id;
    },


    /**
     * calICalendarManager interface
     */
    createCalendar: function(name, type, uri) {
        var calendar = Components.classes["@mozilla.org/calendar/calendar;1?type=" + type].createInstance(Components.interfaces.calICalendar);
        calendar.uri = uri;
        return calendar;
    },

    registerCalendar: function(calendar) {
        // bail if this calendar (or one that looks identical to it) is already registered
        if (this.findCalendarID(calendar) > 0)
            throw Components.results.NS_ERROR_FAILURE;

        var pp = this.mRegisterCalendar.params;
        pp.name = calendar.name;
        pp.type = calendar.type;
        pp.uri = calendar.uri.spec;

        this.mRegisterCalendar.step();
        this.mRegisterCalendar.reset();
        //dump("adding [" + this.mDB.lastInsertRowID + "]\n");
        //this.mCache[this.mDB.lastInsertRowID] = calendar;
        this.mCache[this.findCalendarID(calendar)] = calendar;
    },

    unregisterCalendar: function(calendar) {
        var pp = this.mUnregisterCalendar.params;
        pp.id = this.findCalendarID(calendar);
        this.mUnregisterCalendar.step();
        this.mUnregisterCalendar.reset();
    },

    deleteCalendar: function(calendar) {
        /* check to see if calendar is unregistered first... */
        /* delete the calendar for good */

    },

    getCalendars: function(count) {
        var calendars = [];

        var stmt = this.mSelectCalendars;
        stmt.reset();

        while (stmt.step()) {
            var id = stmt.row.id;
            if (!this.mCache[id]) {
                this.mCache[id] = this.createCalendar(stmt.row.name, stmt.row.type, makeURI(stmt.row.uri));
            }
            calendars.push(this.mCache[id]);
        }

        stmt.reset();

        count.value = calendars.length;
        return calendars;
    },

};
