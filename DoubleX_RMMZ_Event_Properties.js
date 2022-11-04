/*============================================================================
 *    ## Plugin Info
 *----------------------------------------------------------------------------
 *    # Plugin Name
 *      DoubleX_RMMZ_Event_Properties
 *----------------------------------------------------------------------------
 *    # Introduction
 *      1. Before RMMZ, plugins altering individual event behaviors usually
 *         asks their users to add event notetags in event comments
 *      2. With this plugin, other plugins can utilize the RMMZ plugin
 *         commands to replace the use of those event comments as notetags
 *----------------------------------------------------------------------------
 *    # Prerequisites
 *      Plugins:
 *      1. DoubleX RMMZ Enhanced Codebase
 *         https://github.com/Double-X/DoubleX-RMMZ/blob/master/DoubleX%20RMMZ%20Enhanced%20Codebase.js
 *      Abilities(Plugin Users):
 *      1. Nothing special
 *      Abilities(Plugin Developers):
 *      1. Basic knowledge on what the default RMMZ event implementation does
 *         in general
 *      2. Some RMMZ plugin development proficiency to fully utilize this
 *         plugin in intended ways
 *         (Basic knowledge on what RMMZ plugin development does in general
 *         with several easy, simple and small plugins written without
 *         nontrivial bugs up to 1000 LoC scale but still being inexperienced)
 *----------------------------------------------------------------------------
 *    # Author Notes
 *      1. All other plugins using this plugin should be placed under this
 *         plugin
 *      2. (Plugin Developers)PLUGIN COMMANDS AS EVENT PROPERTIES IN AN MAP
 *         EVENT WILL ONLY BE APPLIED TO THAT EVENT INSTANCE
 *      3. (Plugin Developers)PLUGIN COMMANDS AS EVENT PROPERTIES IN COMMON
 *         EVENTS WILL BE APPLIED TO ALL EVENT INSTANCES CALLING THOSE COMMON
 *         EVENTS
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
 *      1.
 *      This Plugin:
 *      1.
 *      Posts:
 *      1.
 *      2.
 *      3.
 *      4.
 *      5.
 *      6.
 *      7.
 *      8.
 *      9.
 *      10.
 *      Mentioned Patreon Supporters:
 *      https://www.patreon.com/posts/71738797
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
 *      { codebase: "1.1.0", plugin: "v1.00a" }(2020 Oct 20 GMT 1400):
 *      1. 1st version of this plugin finished
 *============================================================================*/

/*:
 * @url https://www.patreon.com/doublex
 * @target MZ
 * @plugindesc Versions: { codebase: "1.1.0", plugin: "v1.00a" }
 * Lets other plugins use RMMZ plugin commands as individual event notetags
 * @orderAfter DoubleX_RMMZ_Enhanced_Codebase
 * @orderAfter DoubleX RMMZ Enhanced Codebase
 * @base DoubleX RMMZ Enhanced Codebase
 * @author DoubleX
 *
 * @help
 *============================================================================
 *    ## (Plugin Developers)Script Call Info
 *       These script calls should be used right after initializing
 *       $gameSystem
 *----------------------------------------------------------------------------
 *    # Parameter manipulations
 *      1. $gameSystem.setFuncEventProperties(pluginName, pluginCmdName)
 *         - Sets the plugin command with name pluginCmdName from plugin with
 *           name pluginName as a set of event properties setting the function
 *           contents of the event instance having this plugin command
 *         - The name of the functions of the event instances to be set are
 *           the same as those of arguments of the plugin commands as event
 *           properties
 *         - E.g.:
 *           If plugin with name "TestPlugin" has a plugin command with name
 *           "TestPluginCmd" whose argument names are isCollidedWithEvents,
 *           then
 *           $gameSystem.setFuncEventProperties("TestPlugin", "TestPluginCmd")
 *           will set that plugin command as a set of event properties setting
 *           the isCollidedWithEvents function of the event instance having
 *           that plugin command as the evaluated value of the corresponding
 *           arguments, like return false; causing isCollidedWithEvents to
 *           always return the boolean value false
 *      2. $gameSystem.setVarEventProperties(pluginName, pluginCmdName)
 *         - Sets the plugin command with name pluginCmdName from plugin with
 *           name pluginName as a set of event properties setting the
 *           variables of the event instance having this plugin command
 *         - The name of the variables of the event instances to be set are
 *           the same as those of arguments of the plugin commands as event
 *           properties
 *         - E.g.:
 *           If plugin with name "TestPlugin" has a plugin command with name
 *           "TestPluginCmd" whose argument names are _moveType and _trigger,
 *           then
 *           $gameSystem.setVarEventProperties("TestPlugin", "TestPluginCmd")
 *           will set that plugin command as a set of event properties setting
 *           the _moveType and _trigger variables of the event instance having
 *           that plugin command as the evaluated value of the corresponding
 *           arguments, like 0 being a Numeric value 0 and
 *           $gameVariables.value(1) being the value of the game variable with
 *           id 1 upon event instance initialization
 *============================================================================
 */

// jshint esversion: 6

var DoubleX_RMMZ = DoubleX_RMMZ || {}; // var must be used or game will crash

(() => {

    "use strict";

    const src = document.currentScript.src;
    const name = src.split("/").slice(-1)[0].split(".")[0].replace(/%20/g, " ");
    console.info(src, name);

    // Separates the version numbers with the rest to make the former more clear
    DoubleX_RMMZ.Event_Properties = {
        PLUGIN_NAME: name,
        VERSIONS: { codebase: "1.1.0", plugin: "v1.00a" }
    }; // DoubleX_RMMZ.Event_Properties
    //

})();

(EP => {

    "use strict";

    const pluginCodebaseVer = EP.VERSIONS.codebase;
    if (Utils.checkRMVersion(pluginCodebaseVer)) return;
    console.warn(`Your codebase version is ${Utils.RPGMAKER_VERSION} but must be
                 at least ${pluginCodebaseVer} to use ${EP.PLUGIN_NAME}`);

})(DoubleX_RMMZ.Event_Properties);

/*============================================================================
 *    ## Plugin Implementations
 *       You need not edit this part as it's about how this plugin works
 *----------------------------------------------------------------------------
 *    # Plugin Support Info:
 *      1. Prerequisites
 *         - Some RMMZ plugin development proficiency to fully comprehend this
 *           plugin
 *           (Basic knowledge on what RMMZ plugin development does in general
 *           with several easy, simple and small plugins written without
 *           nontrivial bugs up to 1000 LoC scale but still being
 *           inexperienced)
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
 *      - Loads event properties from plugin commands in map and common events
 *----------------------------------------------------------------------------*/

(($, MZ_EC, EP) => {

    "use strict";

    const klassName = "DataManager";
    const { NEW, ORIG } = MZ_EC.setKlassContainer(klassName, $, EP);
    const EC_DM = MZ_EC[klassName].new, DM = EP[klassName];

    MZ_EC.extendFunc(EC_DM, DM, "loadMapObj", function(obj) {
        ORIG.loadMapObj.apply(this, arguments);
        // Added to load map event properties from registered plugin commands
        NEW._LOAD_MAP_EVENT_PROPERTIES();
        //
    }); // v1.00a - v1.00a

    MZ_EC.extendFunc(EC_DM, DM, "loadOtherObj", function(obj, objName) {
        ORIG.loadOtherObj.apply(this, arguments);
        // Added to load common event properties from registered plugin commands
        NEW._LOAD_ALL_COMMON_EVENT_PROPERTIES(objName);
        //
    }); // v1.00a - v1.00a

    NEW._LOAD_MAP_EVENT_PROPERTIES = () => {
        if ($dataMap) $dataMap.events.filter(Boolean).forEach(NEW._LOAD_EVENT);
    }; // NEW._LOAD_MAP_EVENT_PROPERTIES
    NEW._LOAD_EVENT = event => {
        const funcEventProperties = event.funcEventProperties = {};
        const varEventProperties = event.varEventProperties = {};
        event.pages.forEach(({ list }) => {
            list.forEach((code, params) => {
                if (!NEW._IS_PLUGIN_CMD(code)) return;
                NEW._LOAD_FUNC_EVENT_PROPERTIES(funcEventProperties, params);
                NEW._LOAD_VAR_EVENT_PROPERTIES(varEventProperties, params);
            });
        });
    }; // NEW._LOAD_EVENT

    NEW._LOAD_ALL_COMMON_EVENT_PROPERTIES = objName => {
        if (!NEW._IS_COMMON_EVENT(objName) || !$dataCommonEvents) return;
        $dataCommonEvents.filter(
                Boolean).forEach(NEW._LOAD_COMMON_EVENT_PROPERTIES);
    }; // NEW._LOAD_ALL_COMMON_EVENT_PROPERTIES
    NEW._IS_COMMON_EVENT = objName => objName === "$dataCommonEvents";
    NEW._LOAD_COMMON_EVENT_PROPERTIES = event => {
        const funcEventProperties = event.funcEventProperties = {};
        const varEventProperties = event.varEventProperties = {};
        event.list.forEach((code, params) => {
            if (!NEW._IS_PLUGIN_CMD(code)) return;
            NEW._LOAD_FUNC_EVENT_PROPERTIES(funcEventProperties, params);
            NEW._LOAD_VAR_EVENT_PROPERTIES(varEventProperties, params);
        });
    }; // NEW._LOAD_COMMON_EVENT_PROPERTIES

    NEW._IS_PLUGIN_CMD = code => code === 357;
    NEW._LOAD_FUNC_EVENT_PROPERTIES = (funcEventProperties, params) => {
        const [pluginName, pluginCmdName, pluginCmdName1, argVals] = params;
        const pluginCmdNames_ = $gameSystem.funcEventProperties_(pluginName);
        if (pluginCmdNames_ && pluginCmdNames_.includes(pluginCmdName)) {
            Object.entries(argVals).forEach(([funcName, funcContents]) => {
                funcEventProperties[funcName] = new Function(funcContents);
            });
        }
    }; // NEW._LOAD_FUNC_EVENT_PROPERTIES
    NEW._LOAD_VAR_EVENT_PROPERTIES = (varEventProperties, params) => {
        const [pluginName, pluginCmdName, pluginCmdName1, argVals] = params;
        const pluginCmdNames_ = $gameSystem.funcEventProperties_(pluginName);
        if (pluginCmdNames_ && pluginCmdNames_.includes(pluginCmdName)) {
            Object.assign(varEventProperties, argVals);
        }
    }; // NEW._LOAD_VAR_EVENT_PROPERTIES

})(DataManager, DoubleX_RMMZ.Enhanced_Codebase, DoubleX_RMMZ.Event_Properties);

/*----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------
 *    ## Objects
 *----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------
 *    # Edited class: Game_System
 *      - Lets you access the parameters of this plugin and store them in save
 *----------------------------------------------------------------------------*/

(($, MZ_EC, EP) => {

    "use strict";

    const klassName = "Game_System";
    const { NEW, ORIG } = MZ_EC.setKlassContainer(klassName, $, EP);
    const EC_GS = MZ_EC[klassName].new, GS = EP[klassName];

    MZ_EC.extendFunc(EC_GS, GS, "storeParams", function() {
        ORIG.storeParams.apply(this, arguments);
        // Added to store all event properties registered in this plugin
        NEW._storeParams.call(this);
        //
    }); // v1.00a - v1.00a

    /**
     * Script Call/Idempotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {string} pluginName - The name of the plugin having the command
     * @param {string} pluginCmdName - The name of the plugin command
     */
    $.setFuncEventProperties = function(pluginName, pluginCmdName) {
        NEW._setEventProperties.call(this, pluginName, pluginCmdName, "funcs");
    }; // $.setFuncEventProperties

    /**
     * Script Call/Idempotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {string} pluginName - The name of the plugin having the command
     * @param {string} pluginCmdName - The name of the plugin command
     */
    $.setVarEventProperties = function(pluginName, pluginCmdName) {
        NEW._setEventProperties.call(this, pluginName, pluginCmdName, "vars");
    }; // $.setVarEventProperties

    /**
     * Nullipotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {string} pluginName - The name of the plugin having the command
     * @param {string} pluginCmdName - The name of the plugin command
     */
    $.funcEventProperties_ = function(pluginName) {
        return NEW._eventProperties_.call(this, pluginName, "funcs");
    }; // $.funcEventProperties_

    /**
     * Nullipotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {string} pluginName - The name of the plugin having the command
     * @param {string} pluginCmdName - The name of the plugin command
     */
    $.varEventProperties_ = function(pluginName) {
        return NEW._eventProperties_.call(this, pluginName, "vars");
    }; // $.varEventProperties_

    /**
     * The this pointer is Game_System.prototype
     * Idempotent
     * @author DoubleX @since v1.00a @version v1.00a
     */
    NEW._storeParams = function() {
        this._enhancedCodebase.eventProperties = { funcs: {}, vars: {} };
    }; // NEW._storeParams

    /**
     * The this pointer is Game_System.prototype
     * Script Call/Idempotent
     * @author DoubleX @since v1.00a @version v1.00a
     * @param {string} pluginName - The name of the plugin having the command
     * @param {string} pluginCmdName - The name of the plugin command
     * @enum @param {string} cmdType - funcs/vars
     */
    NEW._setEventProperties = function(pluginName, pluginCmdName, cmdType) {
        const container =
                EC_GS.storedParamVal.call(this, "eventProperties", cmdType);
        container[pluginName] = container[pluginName] || [];
        const pluginNames = container[pluginName];
        if (pluginNames.includes(pluginCmdName)) return;
        pluginNames.push(pluginCmdName);
    }; // NEW._setEventProperties

    /**
     * The this pointer is Game_System.prototype
      * Nullipotent
     * @author DoubleX @since v1.00a @version v1.00a
     * @param {string} pluginName - The name of the plugin having the command
     * @enum @param {string} cmdType - funcs/vars
     * @returns {[string]?} The list of names of plugin commands of the plugin
     */
    NEW._eventProperties_ = function(pluginName, cmdType) {
        return EC_GS.storedParamVal.call(
                this, "eventProperties", cmdType)[pluginName];
    }; // NEW._eventProperties_

})(Game_System.prototype, DoubleX_RMMZ.Enhanced_Codebase,
        DoubleX_RMMZ.Event_Properties);

/*----------------------------------------------------------------------------
 *    # Edited class: Game_Event
 *      - Applies all loaded event properties to event instance having them
 *----------------------------------------------------------------------------*/

(($, MZ_EC, EP) => {

    "use strict";

    const {
        NEW,
        ORIG,
        extendFunc
    } = MZ_EC.setKlassContainer("Game_Event", $, EP);

    extendFunc("initialize", function() {
        ORIG.initialize.apply(this, arguments);
        // Added to apply all the loaded event properties to this event instance
        NEW._loadAllEventProperties.call(this);
        //
    }); // v1.00a - v1.00a

    /**
     * The this pointer is Game_Event.prototype
     * Idempotent
     * @author DoubleX @since v1.00a @version v1.00a
     */
    NEW._loadAllEventProperties = function() {
        // Map event properties should override the common event counterparts
        NEW._loadCommonEventProperties.call(this);
        NEW._loadMapEventProperties.call(this);
        //
    }; // NEW._loadAllEventProperties

    NEW._IS_COMMON_EVENT = code => code === 117;
    /**
     * The this pointer is Game_Event.prototype
     * Idempotent
     * @author DoubleX @since v1.00a @version v1.00a
     * @todo Extracts the functions inside forEach into well-named ones
     */
    NEW._loadCommonEventProperties = function() {
        this.event().pages.forEach(({ list }) => {
            list.forEach(({ code, parameters }) => {
                if (!NEW._IS_COMMON_EVENT(code)) return;
                // It's reasonable to assume that event id its its databse index
                const event_ = $dataCommonEvents[parameters[0]];
                // Finding the common event id would be too time-inefficient
                if (event_) NEW._loadEventProperties.call(this, event_);
            }, this);
        }, this);
    }; // NEW._loadCommonEventProperties

    /**
     * The this pointer is Game_Event.prototype
     * Idempotent
     * @author DoubleX @since v1.00a @version v1.00a
     */
    NEW._loadMapEventProperties = function() {
        NEW._loadEventProperties.call(this, this.event());
    }; // NEW._loadMapEventProperties

    /**
     * The this pointer is Game_Event.prototype
     * Idempotent
     * @author DoubleX @since v1.00a @version v1.00a
     * @param {DataEvent} event - The raw map/common event properties data
     */
    NEW._loadEventProperties = function(event) {
        const { funcEventProperties, varEventProperties } = event;
        const funcs = Object.entries(funcEventProperties);
        const vars = Object.entries(varEventProperties);
        funcs.fastMerge(vars).forEach(([name, val]) => {
            this[name] = val;
        }, this);
    }; // NEW._loadEventProperties

})(Game_Event.prototype, DoubleX_RMMZ.Enhanced_Codebase,
        DoubleX_RMMZ.Event_Properties);

/*============================================================================*/

    const curMZECVer = DoubleX_RMMZ.Enhanced_Codebase.VERSIONS.plugin;
    const minMZECVer = "v0.02a";
    if (curMZECVer < minMZECVer) {
        console.warn(`The version of DoubleX RMMZ Enhanced Codebase is
                     ${curMZECVer} but should be at least ${minMZECVer}`);
    }

} else {

    console.warn(`DoubleX RMMZ Enhanced Codebase should be placed above
                 ${DoubleX_RMMZ.Event_Properties.PLUGIN_NAME}`);

} // if (DoubleX_RMMZ.Enhanced_Codebase)
