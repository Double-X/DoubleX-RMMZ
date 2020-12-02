/*============================================================================
 *    ## Plugin Info
 *----------------------------------------------------------------------------
 *    # Plugin Name
 *      DoubleX_RMMZ_Custom_Script_Calls
 *----------------------------------------------------------------------------
 *    # Introduction
 *      1. Sometimes, some script calls always have the same argument values
 *         used again and again, and defining new script calls as calling old
 *         ones with some argument values already defined can be favorable
 *      2. With this plugin, you can effectively apply partial applications to
 *         script calls without the restrictions of always predefining the
 *         first arguments only
 *----------------------------------------------------------------------------
 *    # Prerequisites
 *      Plugins:
 *      1. DoubleX RMMZ Enhanced Codebase
 *         https://github.com/Double-X/DoubleX-RMMZ/blob/master/DoubleX%20RMMZ%20Enhanced%20Codebase.js
 *      Abilities:
 *      1. Little RMMZ plugin development proficiency to fully utilize this
 *         (Elementary Javascript exposures being able to write beginner codes
 *         up to 300LoC scale)
 *----------------------------------------------------------------------------
 *    # Author Notes
 *      1. If multiple new script calls have the same name, the one having the
 *         lowest ordering in newScriptCalls will be used
 *         (Search tag: Last_In_Duplicate_Script_Calls)
 *      2. (Advanced)DON'T REDEFINE EXISTING SCRIPT CALLS UNLESS YOU REALLY
 *         KNOW WHAT YOU'RE TRULY DOING
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
 *      1. https://www.youtube.com/watch?v=S8BK_ApNnQw
 *      This Plugin:
 *      1. https://github.com/Double-X/DoubleX-RMMZ/blob/master/DoubleX_RMMZ_Custom_Script_Calls.js
 *      Posts:
 *      1. https://forums.rpgmakerweb.com/index.php?threads/doublex_rmmz_custom_script_calls.127678/
 *      2. https://www.rpgmakercentral.com/topic/42615-doublex_rmmz_custom_script_calls/
 *      3. https://rpgmaker.net/engines/rmmz/utilities/291/
 *      4. https://www.save-point.org/thread-8171-post-52719.html
 *      5. https://gdu.one/forums/topic/13646-doublex_rmmz_custom_script_calls/
 *      6. http://www.hbgames.org/forums/viewtopic.php?p=945208
 *      7. https://forum.chaos-project.com/index.php/topic,16080.new.html
 *      8. https://doublexrpgmaker.wordpress.com/2020/09/21/doublex_rmmz_custom_script_calls/
 *      9. https://www.patreon.com/posts/41857800
 *      10. https://www.makerdevs.com/plugin/doublex-rmmz-custom-script-calls
 *----------------------------------------------------------------------------
 *    # Instructions
 *      1. The default plugin parameters file name is
 *         DoubleX_RMMZ_Custom_Script_Calls
 *         If you want to change that, you must edit the value of
 *         DoubleX_RMMZ.Custom_Script_Calls.PLUGIN_NAME, which must be done
 *         via opening this plugin js file directly
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
 *      { codebase: "1.0.2", plugin: "v1.00a" }(2020 Sep 20 GMT 1400):
 *      1. 1st version of this plugin finished
 *============================================================================*/

/*~struct~NewScriptCall:
 *
 * @param newScriptCallFullName
 * @desc The full name of the new script call function/method
 * @default
 *
 * @param origScriptCallFullName
 * @desc The full name of the original script call function/method
 * @default
 *
 * @param origScriptCallContext
 * @desc The context of the original script call function/method
 * @default
 *
 * @param scriptCallArgVals
 * @type struct<NewScriptCallArg>[]
 * @desc List of arguments with their values already set by new one
 * @default []
 */

/*~struct~NewScriptCallArg:
 *
 * @param argI
 * @type number
 * @desc The index of the argument to have its value already set
 * @default
 *
 * @param argVal
 * @desc The already set value of the argument with specified index
 * @default
 */

/*:
 * @url https://www.patreon.com/doublex
 * @target MZ
 * @plugindesc Versions: { codebase: "1.0.2", plugin: "v1.00a" }
 * Lets you set new script calls as old ones with some arguments bound
 * @orderAfter DoubleX_RMMZ_Enhanced_Codebase
 * @orderAfter DoubleX RMMZ Enhanced Codebase
 * @base DoubleX RMMZ Enhanced Codebase
 * @author DoubleX
 *
 * @param newScriptCalls
 * @type struct<NewScriptCall>[]
 * @desc Sets the list of new script calls
 * They're existing ones with some argument values already set
 * @default []
 *
 * @help
 *============================================================================
 *    ## New Script Call Examples
 *----------------------------------------------------------------------------
 *    1.
 *       - newScriptCallFullName = ssicp
 *       - origScriptCallFullName = $gameSystem.setSkillItemCooldownParam
 *       - origScriptCallContext = [{
 *             argI: 0,
 *             argVal: 'battlerNotetagDataTypePriorities'
 *         }]
 *       This defines the new function ssicp as
 *       $gameSystem.setSkillItemCooldownParam('battlerNotetagDataTypePriorities', val);
 *       Where val is the argument provided by the caller of ssicp, meaning
 *       that it can be called something like ssicp(["latestSkillItem"]);
 *    2.
 *       - newScriptCallFullName = asdasd
 *       - origScriptCallFullName = fghfgh
 *       - origScriptCallContext = this
 *       - scriptCallArgVals = []
 *       If the signature of fghfgh is (zxc, vbn), then this defines the new
 *       function asdasd as fghfgh.call(this, zxc, vbn);
 *    3.
 *       - newScriptCallFullName = asdasd
 *       - origScriptCallFullName = fghfgh
 *       - origScriptCallContext =
 *       - scriptCallArgVals = [{ argI: 1, argVal: "$gameSwitches.value(1)" }]
 *       If the signature of fghfgh is (zxc, vbn), then this defines the new
 *       function asdasd as fghfgh(zxc, $gameSwitches.value(1));
 *       Note that the value of $gameSwitches.value(1) is returned upon
 *       calling asdasd
 *----------------------------------------------------------------------------
 *    ## Script Call Info
 *----------------------------------------------------------------------------
 *    # Parameter manipulations
 *      1. $gameSystem.setNewScriptCall(newScriptCallFullName, origScriptCallFullName, context, argVals)
 *         - Sets the new script call with full name newScriptCallFullName as
 *           that with name origScriptCallFullName but with argument values
 *           already set by argVals and context set as context
 *         - argNameVals is an Object with argument indices as keys and values
 *           of those arguments already set in newScriptCallFullName as values
 *         - E.g.:
 *           $gameSystem.setNewPluginCmd("Game_Battler.prototype.clearSkillItemCooldown", "this.setSkillItemCooldown", "", {
 *               1: "0"
 *           }) will define Game_Battler.prototype.clearSkillItemCooldown as
 *           this.setSkillItemCooldown(item, 0);
 *           Where item is the argument provided by the caller of
 *           Game_Battler.prototype.clearSkillItemCooldown
 *           Meaning that it can be called something like
 *           $gameActors.actor(1).clearSkillItemCooldown($dataSkills[172]);
 *============================================================================
 */

// jshint esversion: 6

var DoubleX_RMMZ = DoubleX_RMMZ || {}; // var must be used or game will crash
// Separates the version numbers with the rest to make the former more clear
DoubleX_RMMZ.Custom_Script_Calls = {
    PLUGIN_NAME: "DoubleX_RMMZ_Custom_Script_Calls",
    VERSIONS: { codebase: "1.0.2", plugin: "v1.00a" }
}; // DoubleX_RMMZ.Custom_Script_Calls
//

(CSC => {

    "use strict";

    const pluginCodebaseVer = CSC.VERSIONS.codebase;
    if (Utils.checkRMVersion(pluginCodebaseVer)) return;
    console.warn(`Your codebase version is ${Utils.RPGMAKER_VERSION} but must be
                 at least ${pluginCodebaseVer} to use ${CSC.PLUGIN_NAME}`);

})(DoubleX_RMMZ.Custom_Script_Calls);

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
 *      - Sets all new script calls upon loading saved game files
 *----------------------------------------------------------------------------*/

(($, MZ_EC, CSC) => {

    "use strict";

    const { ORIG, extendFunc } = MZ_EC.setKlassContainer("DataManager", $, CSC);

    extendFunc("extractSaveContents", function(contents) {
        ORIG.extractSaveContents.apply(this, arguments);
        // Added to set all new script calls defined by this plugin parameters
        $gameSystem.setNewScriptCalls();
        //
    }); // v1.00a - v1.00a

})(DataManager, DoubleX_RMMZ.Enhanced_Codebase,
        DoubleX_RMMZ.Custom_Script_Calls);

/*----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------
 *    ## Objects
 *----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------
 *    # Edited class: Game_System
 *      - Lets you access the parameters of this plugin and store them in save
 *----------------------------------------------------------------------------*/

(($, MZ_EC, CSC) => {

    "use strict";

    const klassName = "Game_System";
    const { ORIG, NEW } = MZ_EC.setKlassContainer(klassName, $, CSC);
    const EC_GS = MZ_EC[klassName].new, GS = CSC[klassName];

    MZ_EC.extendFunc(EC_GS, GS, "storeParams", function() {
        ORIG.storeParams.apply(this, arguments);
        // Added to store all parameters of this plugin
        NEW._storeParams.call(this);
        //
    }); // v1.00a - v1.00a

    /**
     * Script Call/Idempotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {string} newScriptCallFullName - The new script call full name
     * @param {string} origScriptCallFullName - Original script call full name
     * @param {string} context - The context of the original script call
     * @param {{string}} argVals - The argument index-preset value pairs
     */
    $.setNewScriptCall = function(newScriptCallFullName, origScriptCallFullName, context, argVals) {
        const newFullNameParts = NEW._FULL_NAME_PARTS(newScriptCallFullName);
        const maxI = newFullNameParts.length - 1;
        let newScriptCall = window;
        newFullNameParts.forEach((part, i) => {
            if (i < maxI) return newScriptCall = newScriptCall[part] || {};
            // Search tag: Last_In_Duplicate_Script_Calls
            newScriptCall[part] = new Function(NEW._FUNC_CONTENTS(
                    origScriptCallFullName, context, argVals));
            //
        });
    }; // $.setNewScriptCall

    /**
     * Idempotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     */
    $.setNewScriptCalls = function() {
        const newScriptCalls = EC_GS.storedParamVal.call(
                this, "customScriptCalls", "newScriptCalls");
        newScriptCalls.forEach(NEW._setNewScriptCall, this);
    }; // $.setNewScriptCalls

    NEW._FULL_NAME_PARTS = fullName => fullName.split(/\s*\.\s*/);

    /**
     * The this pointer is Game_System.prototype
     * Idempotent
     * @author DoubleX @since v1.00a @version v1.00a
     */
    NEW._storeParams = function() {
        EC_GS.onStoreParams.call(this, CSC.PLUGIN_NAME, "customScriptCalls");
        this.setNewScriptCalls();
    }; // NEW._storeParams

    /**
     * The this pointer is Game_System.prototype
     * Idempotent
     * @author DoubleX @since v1.00a @version v1.00a
     * @param {struct<NewScriptCall>} newScriptCall - New script call to be made
     */
    NEW._setNewScriptCall = function(newScriptCall) {
        const {
            newScriptCallFullName,
            origScriptCallFullName,
            origScriptCallContext,
            scriptCallArgVals
        } = newScriptCall;
        this.setNewScriptCall(newScriptCallFullName, origScriptCallFullName,
                origScriptCallContext, scriptCallArgVals);
    }; // NEW._setNewScriptCall

    NEW._ASCENDING_I_ARG_VALS = (a, b) => +a.argI - +b.argI;
    NEW._ARGS_CONTENTS = ({ argI, argVal }) => {
        return `args.splice(${argI}, 0, ${argVal})`;
    }; // NEW._ARGS_CONTENTS
    NEW._ARG_PRE = context => context ? `.call(${context}, ` : "(";
    NEW._FUNC_CONTENTS = (origScriptCallFullName, context, argVals) => {
        const ascIArgVals = argVals.clone().sort(NEW._ASCENDING_I_ARG_VALS);
        return `
            const args = Array.from(arguments);
            ${ascIArgVals.map(NEW._ARGS_CONTENTS).join("\n")}
            return ${origScriptCallFullName}${NEW._ARG_PRE(context)}...args);
        `;
    }; // NEW._FUNC_CONTENTS

})(Game_System.prototype, DoubleX_RMMZ.Enhanced_Codebase,
        DoubleX_RMMZ.Custom_Script_Calls);

/*============================================================================*/

    const curMZECVer = DoubleX_RMMZ.Enhanced_Codebase.VERSIONS.plugin;
    const minMZECVer = "v0.00a";
    if (curMZECVer < minMZECVer) {
        console.warn(`The version of DoubleX RMMZ Enhanced Codebase is
                     ${curMZECVer} but should be at least ${minMZECVer}`);
    }

} else {

    console.warn(`DoubleX RMMZ Enhanced Codebase should be placed above
                 ${DoubleX_RMMZ.Custom_Script_Calls.PLUGIN_NAME}`);

} // if (DoubleX_RMMZ.Enhanced_Codebase)
