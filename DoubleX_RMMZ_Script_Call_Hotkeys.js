/*============================================================================
 *    ## Plugin Info
 *----------------------------------------------------------------------------
 *    # Plugin Name
 *      DoubleX_RMMZ_Script_Call_Hotkeys
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
 *      1. A custom key map plugin, like DoubleX_RMMZ_Custom_Key_Maps:
 *         https://github.com/Double-X/DoubleX-RMMZ/blob/master/DoubleX_RMMZ_Custom_Key_Maps.js
 *         Can be useful when setting hotkeys to trigger script calls
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
 *----------------------------------------------------------------------------
 *    # Instructions
 *      1. The default plugin parameters file name is
 *         DoubleX_RMMZ_Script_Call_Hotkeys
 *         If you want to change that, you must edit the value of
 *         DoubleX_RMMZ.Script_Call_Hotkeys.PLUGIN_NAME, which must be done
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
 *      { codebase: "1.0.2", plugin: "v1.00a" }(2020 Oct 14 GMT 1300):
 *      1. 1st version of this plugin finished
 *============================================================================*/

/*~struct~SceneHotkeys:
 *
 * @param scene
 * @type select
 * @option The game title scene
 * @value Scene_Title
 * @option The game map scene(without the party menu shown)
 * @value Scene_Map
 * @option The game party menu scene(without the item nor skill list shown)
 * @value Scene_Menu
 * @option The game party item scene(outside battles)
 * @value Scene_Item
 * @option The game actor skill scene(outside battles)
 * @value Scene_Skill
 * @option The game actor equip scene
 * @value Scene_Equip
 * @option The game actor status scene(outside battles)
 * @value Scene_Status
 * @option The game options scene
 * @value Scene_Options
 * @option The game saving scene
 * @value Scene_Save
 * @option The game loading scene
 * @value Scene_Load
 * @option The game end scene
 * @value Scene_GameEnd
 * @option The shop scene
 * @value Scene_Shop
 * @option The game actor name input scene
 * @value Scene_Name
 * @option The game debug scene
 * @value Scene_Debug
 * @option The game battle scene
 * @value Scene_Battle
 * @option The game over scene
 * @value Scene_Gameover
 * @desc The scene having its list of hotkeys triggering script calls
 * @default
 *
 * @param hotkeys
 * @type struct<ScriptCallHotkey>[]
 * @desc The list of hotkeys with their script calls on the specified scene
 * @default []
 */

/*~struct~ScriptCallHotkey:
 *
 * @param hotkey
 * @desc The name of the key map corresponding to the hotkey
 * Checks the custom keymap plugin you're using for details
 * @default
 *
 * @param scriptCalls
 * @type note
 * @desc The script calls to be run upon pressing the specified hotkey
 * @default
 */

/*:
 * @url https://www.patreon.com/doublex
 * @target MZ
 * @plugindesc Versions: { codebase: "1.0.2", plugin: "v1.00a" }
 * Lets you set new script calls as old ones with some arguments bound
 * @orderAfter DoubleX RMMZ Enhanced Codebase
 * @base DoubleX RMMZ Enhanced Codebase
 * @author DoubleX
 *
 * @param scriptCallHotkeys
 * @type struct<SceneHotkeys>[]
 * @desc Sets the list of hotkeys triggering script calls per scene
 * @default []
 *
 * @help
 *============================================================================
 */

// jshint esversion: 6

var DoubleX_RMMZ = DoubleX_RMMZ || {}; // var must be used or game will crash
// Separates the version numbers with the rest to make the former more clear
DoubleX_RMMZ.Script_Call_Hotkeys = {
    PLUGIN_NAME: "DoubleX_RMMZ_Script_Call_Hotkeys",
    VERSIONS: { codebase: "1.0.2", plugin: "v1.00a" }
}; // DoubleX_RMMZ.Script_Call_Hotkeys
//

(SCH => {

    "use strict";

    const pluginCodebaseVer = SCH.VERSIONS.codebase;
    if (Utils.checkRMVersion(pluginCodebaseVer)) return;
    console.warn(`Your codebase version is ${Utils.RPGMAKER_VERSION} but must be
                 at least ${pluginCodebaseVer} to use ${SCH.PLUGIN_NAME}`);

})(DoubleX_RMMZ.Script_Call_Hotkeys);

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
 *    ## Scenes
 *----------------------------------------------------------------------------*/

((MZ_EC, SCH) => {

    "use strict";

    const { scriptCallHotkeys } = PluginManager.parameters(SCH.PLUGIN_NAME);
    const _SCRIPT_CALLS = rawHotkey => {
        const hotkey = JSON.parse(rawHotkey);
        hotkey.scriptCalls = new Function(JSON.parse(hotkey.scriptCalls));
        return hotkey;
    };
    const _TRIGGER_SCRIPT_CALL = ({ hotkey, scriptCalls }) => {
        if (Input.isTriggered(hotkey)) scriptCalls.call(this);
    };
    JSON.parse(scriptCallHotkeys).map(JSON.parse).forEach(sceneHotkeys => {
        const { scene } = sceneHotkeys, $ = window[scene].prototype;
        const hotkeys = JSON.parse(sceneHotkeys.hotkeys).map(_SCRIPT_CALLS);
        const { ORIG, extendFunc } = MZ_EC.setKlassContainer(scene, $, SCH);
        extendFunc("update", function() {
            ORIG.update.apply(this, arguments);
            // Added to trigger script calls when the hotkey's pressed
            hotkeys.forEach(_TRIGGER_SCRIPT_CALL, this);
            //
        }); // v1.00a - v1.00a

    });

})(DoubleX_RMMZ.Enhanced_Codebase, DoubleX_RMMZ.Script_Call_Hotkeys);

/*============================================================================*/

    const curMZECVer = DoubleX_RMMZ.Enhanced_Codebase.VERSIONS.plugin;
    const minMZECVer = "v0.00a";
    if (curMZECVer < minMZECVer) {
        console.warn(`The version of DoubleX RMMZ Enhanced Codebase is
                     ${curMZECVer} but should be at least ${minMZECVer}`);
    }

} else {

    console.warn(`DoubleX RMMZ Enhanced Codebase should be placed above
                 ${DoubleX_RMMZ.Script_Call_Hotkeys.PLUGIN_NAME}`);

} // if (DoubleX_RMMZ.Enhanced_Codebase)
