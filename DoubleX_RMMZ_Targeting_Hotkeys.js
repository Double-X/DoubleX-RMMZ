/*============================================================================
 *    ## Plugin Info
 *----------------------------------------------------------------------------
 *    # Plugin Name
 *      DoubleX_RMMZ_Targeting_Hotkeys
 *----------------------------------------------------------------------------
 *    # Prerequisites
 *      Plugins:
 *      1. DoubleX RMMZ Enhanced Codebase
 *         https://github.com/Double-X/DoubleX-RMMZ/blob/master/DoubleX%20RMMZ%20Enhanced%20Codebase.js
 *      Abilities:
 *      1. Nothing special
 *----------------------------------------------------------------------------
 *    # Author Notes
 *      1. A custom key map plugin, like DoubleX_RMMZ_Custom_Key_Maps:
 *         https://github.com/Double-X/DoubleX-RMMZ/blob/master/DoubleX_RMMZ_Custom_Key_Maps.js
 *         Can be useful when setting hotkeys to select targets in this plugin
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
 *      1. https://www.youtube.com/watch?v=UA4BjaNii0k
 *      This Plugin:
 *      1. https://github.com/Double-X/DoubleX-RMMZ/blob/master/DoubleX_RMMZ_Targeting_Hotkeys.js
 *      Posts:
 *      1. https://forums.rpgmakerweb.com/index.php?threads/doublex_rmmz_targeting_hotkeys.128058/
 *      2. https://www.rpgmakercentral.com/topic/42629-doublex_rmmz_targeting_hotkeys/
 *      3. https://rpgmaker.net/engines/rmmz/utilities/298/
 *      4. https://www.save-point.org/thread-8177.html
 *      5. https://gdu.one/forums/topic/13658-doublex_rmmz_targeting_hotkeys/
 *      6. http://www.hbgames.org/forums/viewtopic.php?f=332&t=80352
 *      7. https://forum.chaos-project.com/index.php/topic,16086.new.html
 *      8. https://doublexrpgmaker.wordpress.com/2020/09/30/doublex_rmmz_targeting_hotkeys/
 *      9. https://www.patreon.com/posts/42155629
 *      10. https://www.makerdevs.com/plugin/doublex-rmmz-targeting-hotkeys
 *----------------------------------------------------------------------------
 *    # Instructions
 *      1. The default plugin parameters file name is
 *         DoubleX_RMMZ_Targeting_Hotkeys
 *         If you want to change that, you must edit the value of
 *         DoubleX_RMMZ.Targeting_Hotkeys.PLUGIN_NAME, which must be done
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
 *      { codebase: "1.0.2", plugin: "v1.00a" }(2020 Sep 29 GMT 0400):
 *      1. 1st version of this plugin finished
 *============================================================================*/

/*~struct~Hotkey:
 *
 * @param targetIndex
 * @type number
 * @desc The index of the target selected by hotkey targetHotkey
 * @default
 *
 * @param targetHotkey
 * @type string
 * @desc The keymap of the hotkey selecting the target with index targetIndex
 * @default
 */

/*:
 * @url https://www.patreon.com/doublex
 * @target MZ
 * @plugindesc Versions: { codebase: "1.0.2", plugin: "v1.00a" }
 * Lets you set some custom hotkeys to select some skill/item targets
 * @orderAfter DoubleX RMMZ Enhanced Codebase
 * @base DoubleX RMMZ Enhanced Codebase
 * @author DoubleX
 *
 * @param hotkeys
 * @type struct<Hotkey>[]
 * @desc Sets the list of hotkeys selecting skill/item targets
 * @default []
 *
 * @command setTargetingHotkey
 * @desc Sets the mapping from the target index to the hotkey
 * selecting the corresponding target
 * @arg targetIndex
 * @type number
 * @desc The index of the target selected by hotkey targetHotkey
 * @arg targetHotkey
 * @type string
 * @desc The keymap of the hotkey selecting the target with index targetIndex
 *
 * @help
 *============================================================================
 *    ## Plugin Command Info
 *----------------------------------------------------------------------------
 *      1. setTargetingHotkey targetIndex targetHotkey
 *         - Sets the target with index targetIndex to be selected by the
 *           hotkey targetHotkey
 *============================================================================
 */

// jshint esversion: 6

var DoubleX_RMMZ = DoubleX_RMMZ || {}; // var must be used or game will crash
// Separates the version numbers with the rest to make the former more clear
DoubleX_RMMZ.Targeting_Hotkeys = {
    PLUGIN_NAME: "DoubleX_RMMZ_Targeting_Hotkeys",
    VERSIONS: { codebase: "1.0.2", plugin: "v1.00a" }
}; // DoubleX_RMMZ.Targeting_Hotkeys
//
Utils.checkRMVersion(DoubleX_RMMZ.Targeting_Hotkeys.VERSIONS.codebase);

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
 *    ## Objects
 *----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------
 *    # Edited class: Game_System
 *      - Lets you access the parameters of this plugin and store them in save
 *----------------------------------------------------------------------------*/

(($, MZ_EC, TH) => {

    "use strict";

    const klassName = "Game_System";
    const { ORIG } = MZ_EC.setKlassContainer(klassName, $, TH);
    const EC_GS = MZ_EC[klassName].new, GS = TH[klassName];

    MZ_EC.extendFunc(EC_GS, GS, "storeParams", function() {
        ORIG.storeParams.apply(this, arguments);
        // Added to store all parameters of this plugin
        EC_GS.onStoreParams.call(this, TH.PLUGIN_NAME, "targetingHotkeys");
        //
    }); // v1.00a - v1.00a

    /**
     * The this pointer is Game_System.prototype
     * Idempotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {number} targetIndex - The index of the target to be selected
     * @param {string} hotkey - The keymap of the hotkey selecting the target
     */
    $.setTargetingHotkey = function(targetIndex, hotkey) {
        const hotkeys = this.targetingHotkeysParam("hotkeys");
        const hotkey_ = hotkeys.find(({ targetingIndex }) => {
            return targetingIndex === targetIndex;
        });
        hotkey_ ? hotkey_.targetingHotkey = hotkey : hotkeys.push({
            targetingIndex: targetIndex,
            targetingHotkey: hotkey
        });
    }; // $.setTargetingHotkey

    /**
     * The this pointer is Game_System.prototype
     * Idempotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @enum @param {string} param - The name of parameter to be stored in saves
     * @param {*} val - The value of the parameter to be stored in game saves
     */
    $.setTargetingHotkeysParam = function(param, val) {
        EC_GS.storeParamVal.call(this, "targetingHotkeys", param, val);
    }; // $.setTargetingHotkeysParam

    /**
     * The this pointer is Game_System.prototype
     * Nullipotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @enum @param {string} param - The name of parameter to be stored in saves
     * @returns {*} The value of the parameter to be stored in game saves
     */
    $.targetingHotkeysParam = function(param) {
        return EC_GS.storedParamVal.call(this, "targetingHotkeys", param);
    }; // $.targetingHotkeysParam

    PluginManager.registerCommand(TH.PLUGIN_NAME, "setTargetingHotkey", ({ targetIndex, targetHotkey }) => {
        $gameSystem.setTargetingHotkey(+targetIndex, targetHotkey);
    });

})(Game_System.prototype, DoubleX_RMMZ.Enhanced_Codebase,
        DoubleX_RMMZ.Targeting_Hotkeys);

/*----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------
 *    ## Windows
 *----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------
 *    # Edited class: Window_PartyCommand
 *      - Adds the party command that adds an auto battle state to the party
 *----------------------------------------------------------------------------*/

((MZ_EC, TH) => {

    "use strict";

    const $$ = Window_Selectable.prototype;

    [
        ["Window_BattleActor", Window_BattleActor.prototype],
        ["Window_BattleEnemy", Window_BattleEnemy.prototype]
    ].forEach(([klassName, proto]) => {

        const {
            ORIG,
            NEW,
            extendFunc
        } = MZ_EC.setKlassContainer(klassName, proto, TH);

        if (proto.processHandling) {
            extendFunc("processHandling", function() {
                ORIG.processHandling.apply(this, arguments);
                // Added to process the targeting hotkeys of this plugin as well
                NEW._procHotkeys.call(this);
                //
            }); // v1.00a - v1.00a
        } else {
            /**
             * Hotspot/Idempotent
             * @author DoubleX @interface @since v1.00a @version v1.00a
             */
            proto.processHandling = function() {
                $$.processHandling.call(this);
                NEW._procHotkeys.call(this);
            }; // proto.processHandling
        }

        /**
         * The this pointer is klassName.prototype
         * Hotspot/Idempotent
         * @author DoubleX @since v1.00a @version v1.00a
         */
        NEW._procHotkeys = function() {
            if (!this.isOpenAndActive()) return;
            const hotkeys = $gameSystem.targetingHotkeysParam("hotkeys");
            hotkeys.forEach(({ targetIndex, targetHotkey }) => {
                if (Input.isTriggered(targetHotkey)) this.select(targetIndex);
            });
        }; // NEW._procHotkeys

    });

})(DoubleX_RMMZ.Enhanced_Codebase, DoubleX_RMMZ.Targeting_Hotkeys);

/*============================================================================*/

    const curMZECVer = DoubleX_RMMZ.Enhanced_Codebase.VERSIONS.plugin;
    const minMZECVer = "v0.00a";
    if (curMZECVer < minMZECVer) {
        console.warn(`The version of DoubleX RMMZ Enhanced Codebase is
                     ${curMZECVer} but should be at least ${minMZECVer}`);
    }

} else {

    console.warn(`DoubleX RMMZ Enhanced Codebase should be placed above
                 ${DoubleX_RMMZ.Targeting_Hotkeys.PLUGIN_NAME}`);

} // if (DoubleX_RMMZ.Enhanced_Codebase)
