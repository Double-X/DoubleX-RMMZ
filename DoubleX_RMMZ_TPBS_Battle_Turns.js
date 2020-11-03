/*============================================================================
 *    ## Plugin Info
 *----------------------------------------------------------------------------
 *    # Plugin Name
 *      DoubleX_RMMZ_TPBS_Battle_Turns
 *----------------------------------------------------------------------------
 *    # Introduction
 *      1. By default, the TPBS battle turns are defined as that of the
 *         largest individual turns among all enemies
 *      2. This plugin lets you redefine it as a set number of seconds or
 *         actions executed
 *----------------------------------------------------------------------------
 *    # Prerequisites
 *      Plugins:
 *      1. DoubleX RMMZ Enhanced Codebase
 *         https://github.com/Double-X/DoubleX-RMMZ/blob/master/DoubleX%20RMMZ%20Enhanced%20Codebase.js
 *      Abilities:
 *      1. Nothing special
 *----------------------------------------------------------------------------
 *    # Author Notes
 *      1. DON'T CHANGE THE BATTLE TURN DEFINTIION INSIDE BATTLES UNLESS YOU
 *         REALLY KNOW WHAT YOU'RE TRULY DOING
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
 *      1. https://www.youtube.com/watch?v=cegl2cC0XDM
 *      This Plugin:
 *      1. https://github.com/Double-X/DoubleX-RMMZ/blob/master/DoubleX_RMMZ_TPBS_Battle_Turns.js
 *      Posts:
 *      1. https://forums.rpgmakerweb.com/index.php?threads/doublex_rmmz_tpbs_battle_turns.129340/
 *      2. https://www.rpgmakercentral.com/topic/42672-doublex_rmmz_tpbs_battle_turns/
 *      3. https://rpgmaker.net/engines/rmmz/utilities/306/
 *      4. https://www.save-point.org/thread-8191.html
 *      5. https://gdu.one/forums/topic/13676-doublex_rmmz_tpbs_battle_turns/
 *      6. http://www.hbgames.org/forums/viewtopic.php?f=332&t=80395
 *      7. https://forum.chaos-project.com/index.php/topic,16092.new.html
 *      8. https://doublexrpgmaker.wordpress.com/2020/10/30/doublex_rmmz_tpbs_battle_turns/
 *      9. https://www.patreon.com/posts/43317432
 *      10. https://www.makerdevs.com/plugin/doublex-rmmz-tpbs-battle-turns
 *----------------------------------------------------------------------------
 *    # Instructions
 *      1. The default plugin parameters file name is
 *         DoubleX_RMMZ_TPBS_Battle_Turns
 *         If you want to change that, you must edit the value of
 *         DoubleX_RMMZ.TPBS_Battle_Turns.PLUGIN_NAME, which must be done via
 *         opening this plugin js file directly
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
 *      { codebase: "1.1.0", plugin: "v1.00a" }(2020 Oct 30 GMT 0600):
 *      1. 1st version of this plugin finished
 *============================================================================*/

/*:
 * @url https://www.patreon.com/doublex
 * @target MZ
 * @plugindesc Versions: { codebase: "1.1.0", plugin: "v1.00a" }
 * Lets you set a TPBS battle turn as number of seconds or actions executed
 * @orderAfter DoubleX_RMMZ_Enhanced_Codebase
 * @orderAfter DoubleX RMMZ Enhanced Codebase
 * @base DoubleX RMMZ Enhanced Codebase
 * @author DoubleX
 *
 * @param def
 * @type select
 * @option Default Definition
 * @value def
 * @option Number Of Seconds
 * @value sec
 * @option Number Of Actions Executed
 * @value act
 * @desc Sets the TPBS battle turn definition to be used
 * This can be changed outside battles
 * @default def
 *
 * @param secNum
 * @type number
 * @decimals 9
 * @desc Sets the number of seconds in a TPBS battle turn
 * It's only used if the defintion is number of seconds
 * @default 4
 *
 * @param actNum
 * @type number
 * @desc Sets the number of actions executed in a TPBS battle turn
 * It's only used if the defintion is number of actions executed
 * @default 12
 *
 * @command setTPBSBattleTurnsParam
 * @desc Applies script call $gameSystem.setTPBSBattleTurnsParam(param, val)
 * @arg param
 * @desc The name of a valid parameter of this plugin
 * @arg val
 * @desc A valid new fully parsed value of the parameter param
 *
 * @help
 *============================================================================
 *    ## (Advanced)Script Call Info
 *----------------------------------------------------------------------------
 *    # Parameter manipulations
 *      1. $gameSystem.setTPBSBattleTurnsParam(param, val)
 *         - Sets the fully parsed value of the parameter param as val
 *         - param must be the name of a valid parameter of this plugin
 *         - val must be a valid new fully parsed value of the parameter param
 *         - Such parameter value changes will be saved
 *         - E.g.:
 *           $gameSystem.setTPBSBattleTurnsParam("def", "def") sets the fully
 *           parsed value of the parameter def as "def"
 *      2. $gameSystem.tpbsBattleTurnsParam(param)
 *         - Returns the fully parsed value of the parameter param
 *         - param must be the name of a valid parameter of this plugin
 *         - E.g.:
 *           $gameSystem.tpbsBattleTurnsParam("secNum") returns the fully
 *           parsed value of the parameter secNum, which should be 4 if it
 *           uses its default parameter value
 *    # Battle manipulations
 *      1. BattleManager.battleTurnSec()
 *         - Returns the number of seconds elapsed in the current battle turn
 *      1. BattleManager.battleTurnAct()
 *         - Returns the number of actions executed in the current battle turn
 *============================================================================
 *    ## Plugin Command Info
 *----------------------------------------------------------------------------
 *      1. setTPBSBattleTurnsParam param val
 *         - Applies script call
 *           $gameSystem.setTPBSBattleTurnsParam(param, val)
 *============================================================================
 */

// jshint esversion: 6

var DoubleX_RMMZ = DoubleX_RMMZ || {}; // var must be used or game will crash
// Separates the version numbers with the rest to make the former more clear
DoubleX_RMMZ.TPBS_Battle_Turns = {
    PLUGIN_NAME: "DoubleX_RMMZ_TPBS_Battle_Turns",
    VERSIONS: { codebase: "1.1.0", plugin: "v1.00a" }
}; // DoubleX_RMMZ.TPBS_Battle_Turns
//

(TPBSBT => {

    "use strict";

    const pluginCodebaseVer = TPBSBT.VERSIONS.codebase;
    if (Utils.checkRMVersion(pluginCodebaseVer)) return;
    console.warn(`Your codebase version is ${Utils.RPGMAKER_VERSION} but must be
                 at least ${pluginCodebaseVer} to use ${TPBSBT.PLUGIN_NAME}`);

})(DoubleX_RMMZ.TPBS_Battle_Turns);

/*============================================================================
 *    ## Plugin Implementations
 *       You need not edit this part as it's about how this plugin works
 *----------------------------------------------------------------------------
 *    # Plugin Support Info:
 *      1. Prerequisites
 *         - Basic knowledge on what the TPBS battle turn implementations do
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
 *    # Edited class: BattleManager
 *      - Mimics the CTB functionality by skipping TPBS frame updates
 *----------------------------------------------------------------------------*/

(($, MZ_EC, TPBSBT) => {

    "use strict";

    const {
        extendFunc,
        NEW,
        ORIG
    } = MZ_EC.setKlassContainer("BattleManager", $, TPBSBT);

    /*------------------------------------------------------------------------
     *    New private variables
     *------------------------------------------------------------------------*/
    // {{*}} _battleTurns: The container of all other new variables
    //       {number} sec: The number of seconds elapsed in the current turn
    //       {number} act: The number of actions executed in the current turn

    extendFunc("initMembers", function() {
        ORIG.initMembers.apply(this, arguments);
        // Added to initialize the battle turn sec/act counters
        NEW._init.call(this);
        //
    }); // v1.00a - v1.00a

    extendFunc("updateTurn", function() {
        ORIG.updateTurn.apply(this, arguments);
        // Added to update the battle turn sec counter as well
        NEW._updateSec.call(this);
        //
    }); // v1.00a - v1.00a

    extendFunc("endAction", function() {
        ORIG.endAction.apply(this, arguments);
        // Added to update the battle turn act counter as well
        NEW._updateAct.call(this);
        //
    }); // v1.00a - v1.00a

    extendFunc("endTurn", function() {
        ORIG.endTurn.apply(this, arguments);
        // Added to initialize the battle turn sec/act counters
        NEW._init.call(this);
        //
    }); // v1.00a - v1.00a

    /**
     * Hotspot/Nullipotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @returns {number} The number of seconds elapsed in current battle turn
     */
    $.battleTurnSec = function() { return this._battleTurns.sec; };

    /**
     * Hotspot/Nullipotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @returns {number} The number of actions executed in current battle turn
     */
    $.battleTurnAct = function() { return this._battleTurns.act; };

    /**
     * The this pointer is BattleManager
     * Hotspot/Idempotent
     * @author DoubleX @since v1.00a @version v1.00a
     */
    NEW._init = function() { this._battleTurns = { sec: 0, act: 0 }; };

    /**
     * The this pointer is BattleManager
     * Hotspot/Idempotent
     * @author DoubleX @since v1.00a @version v1.00a
     */
    NEW._updateSec = function() {
        this._battleTurns.sec += 1.0 / Graphics.gameFps;
    }; // NEW._updateSec

    /**
     * The this pointer is BattleManager
     * Hotspot/Idempotent
     * @author DoubleX @since v1.00a @version v1.00a
     */
    NEW._updateAct = function() { this._battleTurns.act ++; };

})(BattleManager, DoubleX_RMMZ.Enhanced_Codebase,
        DoubleX_RMMZ.TPBS_Battle_Turns);

/*----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------
 *    ## Objects
 *----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------
 *    # Edited class: Game_System
 *      - Lets you access the parameters of this plugin and store them in save
 *----------------------------------------------------------------------------*/

((MZ_EC, TPBSBT) => {

    "use strict";

    MZ_EC.setupGameSystemTPBSParamsIOs(TPBSBT, "tpbsBattleTurns");

})(DoubleX_RMMZ.Enhanced_Codebase, DoubleX_RMMZ.TPBS_Battle_Turns);

/*----------------------------------------------------------------------------
 *    # Edited class: Game_Troop
 *      - Uses the specified battle turn definitions in the plugin parameters
 *----------------------------------------------------------------------------*/

(($, MZ_EC, TPBSBT) => {

    "use strict";

    const {
        NEW,
        ORIG,
        extendFunc
    } = MZ_EC.setKlassContainer("Game_Troop", $, TPBSBT);

    extendFunc("isTpbTurnEnd", function() {
        // Edited to check according to the current battle turn definitions
        switch ($gameSystem.tpbsBattleTurnsParam("def")) {
            case "sec": return NEW._isSecFull.call(this);
            case "act": return NEW._isActFull.call(this);
            default: return ORIG.isTpbTurnEnd.apply(this, arguments);
        }
        //
    }); // v1.00a - v1.00a

    /**
     * The this pointer is Game_Troop.prototype
     * Hotspot/Nullipotent
     * @author DoubleX @since v1.00a @version v1.00a
     * @returns {boolean} Whether the number of seconds has reached its max
     */
    NEW._isSecFull = function() {
        const max = $gameSystem.tpbsBattleTurnsParam("secNum");
        return BattleManager.battleTurnSec() >= max;
    }; // NEW._isSecFull

    /**
     * The this pointer is Game_Troop.prototype
     * Hotspot/Nullipotent
     * @author DoubleX @since v1.00a @version v1.00a
     * @returns {boolean} Whether the number of actions executed has reached max
     */
    NEW._isActFull = function() {
        const max = $gameSystem.tpbsBattleTurnsParam("actNum");
        return BattleManager.battleTurnAct() >= max;
    }; // NEW._isActFull

})(Game_Troop.prototype, DoubleX_RMMZ.Enhanced_Codebase,
        DoubleX_RMMZ.TPBS_Battle_Turns);

/*============================================================================*/

    const curMZECVer = DoubleX_RMMZ.Enhanced_Codebase.VERSIONS.plugin;
    const minMZECVer = "v0.00a";
    if (curMZECVer < minMZECVer) {
        console.warn(`The version of DoubleX RMMZ Enhanced Codebase is
                     ${curMZECVer} but should be at least ${minMZECVer}`);
    }

} else {

    console.warn(`DoubleX RMMZ Enhanced Codebase should be placed above
                 ${DoubleX_RMMZ.TPBS_Battle_Turns.PLUGIN_NAME}`);

} // if (DoubleX_RMMZ.Enhanced_Codebase)
