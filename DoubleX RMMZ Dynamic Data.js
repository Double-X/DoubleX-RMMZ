/*============================================================================
 *    ## Plugin Info
 *----------------------------------------------------------------------------
 *    # Plugin Name
 *      DoubleX RMMZ Dynamic Data
 *----------------------------------------------------------------------------
 *    # Introduction
 *    1. This plugins lets you change some database data on the fly, and those
 *       changes will be saved in save files
 *    2. Changing too many database data in the same save can lead to the save
 *       file being too big, so only make absolutely necessary changes
 *    3. This plugin doesn't work with dynamic map data, and I've no plans to
 *       support this, as it's all too complicated and convoluted to make it
 *       work well without creating even greater troubles, like the game file
 *       being too big and map reload issues
 *    4. CHANGING DATA ON THE FLY SHOULD NEVER BE TAKEN LIGHTLY, SO THIS
 *       PLUGIN'S SPECIFICALLY DESIGNED TO NOT HAVE RMMZ BEGINNERS IN MIND
 *----------------------------------------------------------------------------
 *    # Prerequisites
 *      Plugins:
 *      1. DoubleX RMMZ Enhanced Codebase
 *         https://github.com/Double-X/DoubleX-RMMZ/blob/master/DoubleX%20RMMZ%20Enhanced%20Codebase.js
 *      Abilities:
 *      2. Little RMMZ plugin development proficiency
 *         (Elementary Javascript exposures being able to write beginner codes
 *         up to 300LoC scale)
 *----------------------------------------------------------------------------
 *    # Terms Of Use
 *      1. Commercial use's always allowed and crediting me's always optional.
 *      2. You shall keep this plugin's Plugin Info part's contents intact.
 *      3. You shalln't claim that this plugin's written by anyone other than
 *         DoubleX or my aliases. I always reserve the right to deny you from
 *         using any of my plugins anymore if you've violated this.
 *      4. If you repost this plugin directly(rather than just linking back),
 *         you shall inform me of these direct repostings. I always reserve
 *         the right to request you to edit those direct repostings.
 *      5. CC BY 4.0, except those conflicting with any of the above, applies
 *         to this plugin, unless you've my permissions not needing follow so.
 *      6. I always reserve the right to deny you from using this plugin
 *         anymore if you've violated any of the above.
 *----------------------------------------------------------------------------
 *    # Links
 *      Video:
 *      1. https://www.youtube.com/watch?v=XdBeCGdAchU
 *      This Plugin:
 *      1. https://github.com/Double-X/DoubleX-RMMZ/blob/master/DoubleX%20RMMZ%20Dynamic%20Data.js
 *      Posts:
 *      1. https://forums.rpgmakerweb.com/index.php?threads/doublex-rmmz-dynamic-data.126289/
 *      2. https://www.rpgmakercentral.com/topic/42561-doublex-rmmz-dynamic-data/
 *      3. https://rpgmaker.net/engines/rmmz/utilities/255/
 *      4. https://www.save-point.org/thread-8153-post-52598.html
 *      5. https://gdu.one/forums/topic/13619-doublex-rmmz-dynamic-data/
 *      6. http://www.hbgames.org/forums/viewtopic.php?f=332&t=80296
 *      7. https://forum.chaos-project.com/index.php/topic,16068.new.html
 *      8. https://doublexrpgmaker.wordpress.com/2020/08/28/doublex-rmmz-dynamic-data/
 *      9. https://www.patreon.com/posts/40947317
 *      10. https://www.makerdevs.com/plugin/doublex-rmmz-dynamic-data
 *----------------------------------------------------------------------------
 *    # Contributors
 *      Authors:
 *      1. DoubleX
 *      Plugin Development Collaborators:
 *      - None So Far
 *      Bug Reporters:
 *      - None So Far
 *      Compatibility Issue Raisers:
 *      - None So Far
 *      Feature Requesters:
 *      - None So Far
 *----------------------------------------------------------------------------
 *    # Changelog
 *      { codebase: "1.0.0", plugin: "v1.00a" }(2020 Aug 28 GMT 0700):
 *      1. 1st version of this plugin finished
 *============================================================================*/
/*:
 * @url https://www.patreon.com/doublex
 * @target MZ
 * @plugindesc Versions: { codebase: "1.0.0", plugin: "v1.00a" }
 * Lets you edit some database data on the fly and such edits will be saved
 * @orderAfter DoubleX_RMMZ_Enhanced_Codebase
 * @orderAfter DoubleX RMMZ Enhanced Codebase
 * @base DoubleX RMMZ Enhanced Codebase
 * @author DoubleX
 *
 * @help
 *============================================================================
 *    ## Script Call Info
 *----------------------------------------------------------------------------
 *    # Databse data manipulations
 *      1. $gameSystem.setDynamicData(containerName, data)
 *         - Applies the edit of data stored by container with name
 *           containerName, and the edited data will be saved in save
 *           files so those edits will be preserved
 *         - data must be a valid database data which must be serializable
 *           (It means that this plugin doesn't support foreign plugins adding
 *            undisclosed unserializable properties to database data)
 *         - containerName must be either of the following:
 *           "$dataActors"
 *           "$dataClasses"
 *           "$dataSkills"
 *           "$dataItems"
 *           "$dataWeapons"
 *           "$dataArmors"
 *           "$dataEnemies"
 *           "$dataTroops"
 *           "$dataStates"
 *           "$dataAnimations"
 *           "$dataTilesets"
 *           "$dataCommonEvents"
 *           "$dataSystem"
 *           "$dataMapInfos"
 *         - E.g.:
 *           $gameSystem.setDynamicData("$dataSkills", $dataSkills[3]) applies
 *           the edit of skill with id 3 stored by $dataSkills and that edited
 *           skill will be saved in save files so those edits will be
 *           preserved
 *============================================================================
 */

// jshint esversion: 6

var DoubleX_RMMZ = DoubleX_RMMZ || {}; // var must be used or game will crash
// Separates the version numbers with the rest to make the former more clear
DoubleX_RMMZ.Dynamic_Data = {
    PLUGIN_NAME: "DoubleX RMMZ Dynamic Data",
    VERSIONS: { codebase: "1.0.0", plugin: "v1.00a" }
}; // DoubleX_RMMZ.Dynamic_Data
//

(DC => {

    "use strict";

    const pluginCodebaseVer = DC.VERSIONS.codebase;
    if (Utils.checkRMVersion(pluginCodebaseVer)) return;
    console.warn(`Your codebase version is ${Utils.RPGMAKER_VERSION} but must be
                 at least ${pluginCodebaseVer} to use ${DC.PLUGIN_NAME}`);

})(DoubleX_RMMZ.Dynamic_Data);

/*============================================================================
 *    ## Plugin Implementations
 *       You need not edit this part as it's about how this plugin works
 *----------------------------------------------------------------------------
 *    # Plugin Support Info:
 *      1. Prerequisites
 *         - Little RMMZ plugin development proficiency to fully comprehend
 *           this plugin
 *           (Elementary Javascript exposures being able to write beginner
 *           codes up to 300LoC scale)
 *      2. Parameter/Return value of type * means it might be of any type
 *      3. Function signature with (**) means it might take any number of
 *         parameters of any type
 *      4. Supposedly nullable variables are marked with the _ suffix in their
 *         names(but they can be sure to be non null in some cases)
 *      5. Functions supposedly returning nullable values are marked with the
 *         _ suffix in their names(but their return values can be sure to be
 *         non null in some cases)
 *----------------------------------------------------------------------------*/

if (DoubleX_RMMZ.Enhanced_Codebase) {

/*============================================================================*/

/*----------------------------------------------------------------------------
 *    ## Managers
 *----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------
 *    # Edited class: DataManager
 *      - Saves and loads all dynamic data and void them all in new games
 *----------------------------------------------------------------------------*/

(($, MZ_EC, DD) => {

    "use strict";

    const klassName = "DataManager", {
        ORIG,
        NEW,
        extendFunc
    } = MZ_EC.setKlassContainer(klassName, $, DD);
    const EC_DM = MZ_EC[klassName].new, DM = DD[klassName];

    extendFunc("setupNewGame", function() {
        // Added to remove all known unserializable database data properties
        this.restoreDynamicData();
        // It must be placed here as it must be done before creating game object
        ORIG.setupNewGame.apply(this, arguments);
    }); // v1.00a - v1.00a

    extendFunc("saveGame", function(savefileId) {
        // Added to remove all known unserializable database data properties
        $gameSystem.voidUnserializableDynamicData();
        //
        return ORIG.saveGame.apply(this, arguments);
    }); // v1.00a - v1.00a

    extendFunc("extractSaveContents", function(contents) {
        ORIG.extractSaveContents.apply(this, arguments);
        // Added to change the loaded database data to use the dynamic versions
        $gameSystem.loadDynamicData();
        //
    }); // v1.00a - v1.00a

    MZ_EC.extendFunc(EC_DM, DM, "_onXhrLoadSuc", function(xhr, name) {
        // Added to preserve the original database data before reading notetags
        NEW._preserveOrigData.call(this, xhr, name);
        //
        ORIG._onXhrLoadSuc.apply(this, arguments);
    }); // v1.00a - v1.00a
    
    NEW.VOID_UNSERIALIZABLE_DATUM = datum_ => {
        if (!datum_) return;
        const { meta } = datum_;
        if (meta) meta.enhancedCodebase = {};
    }; // NEW.VOID_UNSERIALIZABLE_DATUM

    NEW._origDatabase = new Map();

    NEW._CONTAINER_NAMES = [
        "$dataActors",
        "$dataClasses",
        "$dataSkills",
        "$dataItems",
        "$dataWeapons",
        "$dataArmors",
        "$dataEnemies",
        "$dataTroops",
        "$dataStates",
        "$dataAnimations",
        "$dataTilesets",
        "$dataCommonEvents",
        "$dataSystem",
        "$dataMapInfos"
    ]; // NEW._CONTAINER_NAMES
    /**
     * Idempotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @enum @param {[string]} restoredContainerNames - Check script call doc
     */
    $.restoreDynamicData = function(restoredContainerNames = []) {
        const names = NEW._CONTAINER_NAMES.difference(restoredContainerNames);
        names.forEach(NEW._onloadContainer, this);
    }; // $.restoreDynamicData

    /**
     * The this pointer is DataManager
     * Idempotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @enum @param {string} containerName - Check NEW._CONTAINER_NAMES
     */
    NEW._onloadContainer = function(containerName) {
        const origData = NEW._origDatabase.get(containerName);
        if (Array.isArray(origData)) {
            origData.forEach(NEW.VOID_UNSERIALIZABLE_DATUM);
        } else NEW.VOID_UNSERIALIZABLE_DATUM(origData);
        window[containerName] = JsonEx.makeDeepCopy(origData);
        this.onLoad(window[containerName], containerName);
    }; // NEW._onloadContainer

    /**
     * The this pointer is DataManager
     * Idempotent
     * @author DoubleX @since v1.00a @version v1.00a
     * @param {XMLHttpRequest} xhr - The xhr successfully loading the data
     * @param {string} name - The name of the successfully loaded data container
     */
    NEW._preserveOrigData = function(xhr, name) {
        const origData = JSON.parse(xhr.responseText);
        NEW._origDatabase.set(name, origData);
        this.onLoad(origData, name);
    }; // NEW._preserveOrigData

})(DataManager, DoubleX_RMMZ.Enhanced_Codebase,
        DoubleX_RMMZ.Dynamic_Data);

/*----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------
 *    ## Objects
 *----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------
 *    # Edited class: Game_System
 *      - Lets you store all dynamic data to be saved in save games
 *----------------------------------------------------------------------------*/

(($, MZ_EC, DD) => {

    "use strict";

    const EC_DM = MZ_EC.DataManager.new, DM = DD.DataManager.new, {
        ORIG,
        NEW,
        extendFunc
    } = MZ_EC.setKlassContainer("Game_System", $, DD);

    extendFunc("initialize", function() {
        ORIG.initialize.call(this);
        // Added to initialize the container storing all data edited to the fly
        NEW._initDynamicDataContainer.call(this);
        //
    }); // v1.00a - v1.00a

    /**
     * Script Call/Idempotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @enum @param {string} containerName - Check the script call documentation
     * @param {Data} data - The dynamic data edited on the fly to be saved
     */
    $.setDynamicData = function(containerName, data) {
        const { dynamicData } = this._enhancedCodebase;
        dynamicData[containerName] = dynamicData[containerName] || {};
        // Not all database data containers are arrays but it must be consistent
        dynamicData[containerName][data.id || containerName] = data;
        //
        /** @todo Just reloads the notetags of the edited data */
        EC_DM.loadDataNotetags(window[containerName], containerName);
        //
    }; // $.setDynamicData

    NEW._VOID_DYNAMIC_DATA_TYPE = function(container) {
        Object.values(container).forEach(DM.VOID_UNSERIALIZABLE_DATUM);
    }; // NEW._VOID_DYNAMIC_DATA_TYPE
    /**
     * Idempotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     */
    $.voidUnserializableDynamicData = function() {
        const { dynamicData } = this._enhancedCodebase;
        Object.values(dynamicData).forEach(NEW._VOID_DYNAMIC_DATA_TYPE, this);
    }; // $.voidUnserializableDynamicData

    NEW._LOAD_DYNAMIC_DATA_TYPE = function([containerName, container]) {
        const globalContainer = window[containerName];
        Object.entries(container).forEach(([id, data]) => {
            // Not all database data containers are arrays
            if (Array.isArray(globalContainer)) {
                return globalContainer[+id] = data;
            } else window[containerName] = data;
            //
        });
        EC_DM.loadDataNotetags(window[containerName], containerName);
    }; // NEW._LOAD_DYNAMIC_DATA_TYPE
    /**
     * Idempotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     */
    $.loadDynamicData = function() {
        const { dynamicData } = this._enhancedCodebase;
        // The original database must be restored before loading dynamic data
        DataManager.restoreDynamicData(Object.keys(dynamicData));
        //
        Object.entries(dynamicData).forEach(NEW._LOAD_DYNAMIC_DATA_TYPE);
    }; // $.loadDynamicData

    /**
     * The this pointer is Game_System.prototype
     * Idempotent
     * @author DoubleX @since v1.00a @version v1.00a
     */
    NEW._initDynamicDataContainer = function() {
        this._enhancedCodebase.dynamicData = {};
    }; // NEW._initDynamicDataContainer

})(Game_System.prototype, DoubleX_RMMZ.Enhanced_Codebase,
        DoubleX_RMMZ.Dynamic_Data);

/*============================================================================*/

    const curMZECVer = DoubleX_RMMZ.Enhanced_Codebase.VERSIONS.plugin;
    const minMZECVer = "v0.00a";
    if (curMZECVer < minMZECVer) {
        console.warn(`The version of DoubleX RMMZ Enhanced Codebase is
                     ${curMZECVer} but should be at least ${minMZECVer}`);
    }

} else {

    console.warn(`DoubleX RMMZ Enhanced Codebase should be placed above
                 ${DoubleX_RMMZ.Dynamic_Data.PLUGIN_NAME}`);

} // if (DoubleX_RMMZ.Enhanced_Codebase)
