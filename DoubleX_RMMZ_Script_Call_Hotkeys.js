/*============================================================================
 *    ## Plugin Info
 *----------------------------------------------------------------------------
 *    # Plugin Name
 *      DoubleX_RMMZ_Script_Call_Hotkeys
 *----------------------------------------------------------------------------
 *    # Prerequisites
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
 *      1. https://www.youtube.com/watch?v=-dwH4mOQ6nQ
 *      This Plugin:
 *      1. https://github.com/Double-X/DoubleX-RMMZ/blob/master/DoubleX_RMMZ_Script_Call_Hotkeys.js
 *      Posts:
 *      1. https://forums.rpgmakerweb.com/index.php?threads/doublex_rmmz_script_call_hotkeys.128675/
 *      2. https://www.rpgmakercentral.com/topic/42654-doublex_rmmz_script_call_hotkeys/
 *      3. https://rpgmaker.net/engines/rmmz/utilities/302/
 *      4. https://www.save-point.org/thread-8184.html
 *      5. https://gdu.one/forums/topic/13665-doublex_rmmz_script_call_hotkeys/
 *      6. http://www.hbgames.org/forums/viewtopic.php?f=332&t=80367
 *      7. https://forum.chaos-project.com/index.php/topic,16090.new.html
 *      8. https://doublexrpgmaker.wordpress.com/2020/10/14/doublex_rmmz_script_call_hotkeys/
 *      9. https://www.patreon.com/posts/42734896
 *      10. https://www.makerdevs.com/plugin/doublex-rmmz-script-call-hotkeys
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
 *      { codebase: "1.1.0", plugin: "v1.00b" }(2020 Dec 2 GMT 0800):
 *      1. You no longer have to edit the value of
 *         DoubleX_RMMZ.Script_Call_Hotkeys.PLUGIN_NAME when changing this
 *         plugin file name
 *      { codebase: "1.0.2", plugin: "v1.00a" }(2020 Oct 14 GMT 0700):
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
 * @plugindesc Versions: { codebase: "1.1.0", plugin: "v1.00b" }
 * Lets you set some hotkeys per scene to trigger some script calls
 * @orderAfter DoubleX_RMMZ_Enhanced_Codebase
 * @orderAfter DoubleX RMMZ Enhanced Codebase
 * @author DoubleX
 *
 * @param scriptCallHotkeys
 * @type struct<SceneHotkeys>[]
 * @desc Sets the list of hotkeys triggering script calls per scene
 * @default []
 *
 * @help
 *============================================================================
 *    (Advanced) The this pointer of the script calls triggered by a hotkey is
 *               the scene having that hotkey
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
    DoubleX_RMMZ.Script_Call_Hotkeys = {
        PLUGIN_NAME: name,
        VERSIONS: { codebase: "1.1.0", plugin: "v1.00b" }
    }; // DoubleX_RMMZ.Script_Call_Hotkeys
    //

})();

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

/*============================================================================*/

/*----------------------------------------------------------------------------
 *    ## Scenes
 *----------------------------------------------------------------------------*/

(SCH => {

    "use strict";

    const { scriptCallHotkeys } = PluginManager.parameters(SCH.PLUGIN_NAME);
    const _SCRIPT_CALLS = rawHotkey => {
        const hotkey = JSON.parse(rawHotkey);
        hotkey.scriptCalls = new Function(JSON.parse(hotkey.scriptCalls));
        return hotkey;
    }, _TRIGGER_SCRIPT_CALL = ({ hotkey, scriptCalls }) => {
        if (Input.isTriggered(hotkey)) scriptCalls.call(this);
    };
    JSON.parse(scriptCallHotkeys).map(JSON.parse).forEach(sceneHotkeys => {

        const { scene } = sceneHotkeys, $ = window[scene].prototype;
        const hotkeys = JSON.parse(sceneHotkeys.hotkeys).map(_SCRIPT_CALLS);
        const klass = SCH[scene] = { orig: {}, new: {} };
        const [ORIG, NEW] = [klass.orig, klass.new];

        ORIG.update = $.update;
        NEW.update = $.update = function() { // v1.00a - v1.00a; Extended
            ORIG.update.apply(this, arguments);
            // Added to trigger script calls when the hotkey's pressed
            hotkeys.forEach(_TRIGGER_SCRIPT_CALL, this);
            //
        }; // $.update

    });

})(DoubleX_RMMZ.Script_Call_Hotkeys);

/*============================================================================*/