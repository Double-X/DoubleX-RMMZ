/*============================================================================
 *    ## Plugin Info
 *----------------------------------------------------------------------------
 *    # Plugin Name
 *      DoubleX_RMMZ_TPBS_Countdown_States
 *----------------------------------------------------------------------------
 *    # Introduction
 *    1. This plugin lets you set some states to have its turn count updated
 *       after a set amount of seconds in TPBS
 *----------------------------------------------------------------------------
 *    # Prerequisites
 *      Plugins:
 *      1. DoubleX RMMZ Enhanced Codebase
 *         https://github.com/Double-X/DoubleX-RMMZ/blob/master/DoubleX%20RMMZ%20Enhanced%20Codebase.js
 *      Abilities:
 *      1. Nothing special
 *----------------------------------------------------------------------------
 *    # Author Notes
 *      1. DoubleX RMMZ State Triggers:
 *         https://github.com/Double-X/DoubleX-RMMZ/blob/master/DoubleX%20RMMZ%20State%20Triggers.js
 *         Can be useful when setting some events to happen upon updating the
 *         countdown state turn counters
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
 *      1. https://www.youtube.com/watch?v=5fJcE6ZINMs
 *      This Plugin:
 *      1. https://github.com/Double-X/DoubleX-RMMZ/blob/master/DoubleX_RMMZ_TPBS_Countdown_States.js
 *      Posts:
 *      1. https://forums.rpgmakerweb.com/index.php?threads/doublex_rmmz_tpbs_countdown_states.129352/
 *      2. https://www.rpgmakercentral.com/topic/42674-doublex_rmmz_tpbs_countdown_states/
 *      3. https://rpgmaker.net/engines/rmmz/utilities/308/
 *      4. https://www.save-point.org/thread-8193.html
 *      5. https://gdu.one/forums/topic/13678-doublex_rmmz_tpbs_countdown_states/
 *      6. http://www.hbgames.org/forums/viewtopic.php?f=332&t=80397
 *      7. https://forum.chaos-project.com/index.php/topic,16094.new.html
 *      8. https://doublexrpgmaker.wordpress.com/2020/10/30/doublex_rmmz_tpbs_countdown_states/
 *      9. https://www.patreon.com/posts/43327703
 *      10. https://www.makerdevs.com/plugin/doublex-rmmz-tpbs-countdown-states
 *----------------------------------------------------------------------------
 *    # Instructions
 *      1. The default plugin parameters file name is
 *         DoubleX_RMMZ_TPBS_Countdown_States
 *         If you want to change that, you must edit the value of
 *         DoubleX_RMMZ.TPBS_Countdown_States.PLUGIN_NAME, which must be done
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
 *      { codebase: "1.1.0", plugin: "v1.00a" }(2020 Oct 30 GMT 1300):
 *      1. 1st version of this plugin finished
 *============================================================================*/
/*:
 * @url https://www.patreon.com/doublex
 * @target MZ
 * @plugindesc Versions: { codebase: "1.1.0", plugin: "v1.00a" }
 * Lets you set some states to update its turn after some seconds in TPBS
 * @orderBefore DoubleX_RMMZ_State_Triggers
 * @orderBefore DoubleX RMMZ State Triggers
 * @orderAfter DoubleX_RMMZ_Enhanced_Codebase
 * @orderAfter DoubleX RMMZ Enhanced Codebase
 * @base DoubleX RMMZ Enhanced Codebase
 * @author DoubleX
 *
 * @help
 *============================================================================
 *    ## Notetag Info
 *       1. Among all the same notetag types in the same data, only the 1st
 *          can be effective
 *       2. Each line can only have at most 1 notetag
 *       3. The following is the structure of all notetags in this plugin:
 *          - <doublex rmmz countdown states>
 *          - <countdown states>
 *          Where contents are in the form of type suffixes: entries
 *          Either of the above can be used, but the 1st one reduce the chance
 *          of causing other plugins to treat the notetags of this plugin as
 *          theirs, while the 2nd one is more user-friendly
 *          - type is one of the following:
 *            1. interval
 *          - suffixes is the list of suffixes in the form of:
 *            suffix1 suffix2 suffix3 ... suffixn
 *            Where each suffix is either of the following:
 *            val(The notetag value will be used as-is)
 *            switch(The value of the game switch with id as the notetag value
 *                   will be used)
 *            var(The value of the game variable with id as the notetag value
 *                will be used)
 *            (Advanced)script(The value of the game variable with id as the
 *                            notetag value will be used as the contents of
 *                            the functions to be called upon using the
 *                            notetag)
 *          - The this pointer of the script suffix is the battler involved
 *            (Game_Battler.prototype)
 *          - entries is the list of entries in the form of:
 *            entry1, entry2, entry3, ..., entryn
 *            Where entryi must conform with the suffixi specifications
 *----------------------------------------------------------------------------
 *    # State Notetags
 *      1. interval condSuffix intervalSuffix: condEntry, intervalEntry
 *         - Sets the state to be a countdown state having its turn counter
 *           updated with interval being the returned value of intervalEntry
 *           in TPBS if condEntry returns a truthy result
 *         - condSuffix can be val, switch or script
 *         - intervalEntry can be val, var or script
 *         - The result of condEntry can be anything as only whether it's
 *           truthy matters
 *         - If the result of condEntry is falsy, this notetag will be
 *           discarded upon such use cases
 *         - The result of intervalEntry must be a Number
 *         - intervalEntry being positive means the state turn counter will be
 *           decreased every intervalEntry seconds
 *         - intervalEntry being 0 means the state turn counter will be frozen
 *         - intervalEntry being negative means the state turn counter will be
 *           increased every intervalEntry seconds
 *         - E.g.:
 *           <countdown states interval switch val: 1, 2> will set the state
 *           to be a countdown state having its turn counter decreased every
 *           2 seconds if the game switch with id 1 is on
 *============================================================================
 */

// jshint esversion: 6

var DoubleX_RMMZ = DoubleX_RMMZ || {}; // var must be used or game will crash
// Separates the version numbers with the rest to make the former more clear
DoubleX_RMMZ.TPBS_Countdown_States = {
    PLUGIN_NAME: "DoubleX_RMMZ_TPBS_Countdown_States",
    VERSIONS: { codebase: "1.1.0", plugin: "v1.00a" }
}; // DoubleX_RMMZ.TPBS_Countdown_States
//

(TPBSCS => {

    "use strict";

    const pluginCodebaseVer = TPBSCS.VERSIONS.codebase;
    if (Utils.checkRMVersion(pluginCodebaseVer)) return;
    console.warn(`Your codebase version is ${Utils.RPGMAKER_VERSION} but must be
                 at least ${pluginCodebaseVer} to use ${TPBSCS.PLUGIN_NAME}`);

})(DoubleX_RMMZ.TPBS_Countdown_States);

/*============================================================================
 *    ## Plugin Implementations
 *       You need not edit this part as it's about how this plugin works
 *----------------------------------------------------------------------------
 *    # Plugin Support Info:
 *      1. Prerequisites
 *         - Basic knowledge on what the TPBS individual turn implementations
 *           do
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
 *      - Loads all notetags of this plugin
 *----------------------------------------------------------------------------*/

((MZ_EC, TPBSCS) => {

    "use strict";

    // Search tag: NOTE_TYPE
    MZ_EC.loadDataManagerNotetags(TPBSCS, new Map(Object.entries({
        interval: new Map(Object.entries({
            suffix1: MZ_EC.BOOL_SUFFIXES, // condSuffix
            suffix2: MZ_EC.VAL_SUFFIXES, // intervalSuffix
            entry1: MZ_EC.BOOL_ENTRY, // condEntry
            entry2: MZ_EC.NUM_ENTRY // intervalEntry
        })) // interval
    })), new Map(Object.entries({
        $dataStates: "state"
    })), "countdown states", "tpbsCountdownStates");
    //

})(DoubleX_RMMZ.Enhanced_Codebase, DoubleX_RMMZ.TPBS_Countdown_States);

/*----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------
 *    ## Objects
 *----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------
 *    # Edited class: Game_Variables
 *      - Reloads all notetags upon variable change to keep scripts updated
 *----------------------------------------------------------------------------*/

((MZ_EC, TPBSCS) => {

    "use strict";

    MZ_EC.updateGameVarsDataNotetags(TPBSCS, "tpbsCountdownStates");

})(DoubleX_RMMZ.Enhanced_Codebase, DoubleX_RMMZ.TPBS_Countdown_States);

/*----------------------------------------------------------------------------
 *    # Edited class: Game_BattlerBase
 *      - Clears, erases and resets all countdown states in TPBS
 *----------------------------------------------------------------------------*/

(($, MZ_EC, TPBSCS) => {

    "use strict";

    const klassName = "Game_BattlerBase", {
        NEW,
        ORIG,
        extendFunc
    } = MZ_EC.setKlassContainer(klassName, $, TPBSCS);
    const EC_GBB = MZ_EC[klassName].new, GBB = TPBSCS[klassName];

    /*------------------------------------------------------------------------
     *    New private variables
     *------------------------------------------------------------------------*/
    // {{*}} _tpbsCountdownStates: The container of all countdown states

    extendFunc("clearStates", function() {
        ORIG.clearStates.apply(this, arguments);
        // Added to initialize the container of all countdown states in TPBS
        NEW._init.call(this);
        //
    }); // v1.00a - v1.00a

    extendFunc("eraseState", function(stateId) {
        ORIG.eraseState.apply(this, arguments);
        // Added to erase the countdown of the state with the specified id
        NEW._eraseCountdown.call(this, stateId);
        //
    }); // v1.00a - v1.00a

    extendFunc("resetStateCounts", function(stateId) {
        ORIG.resetStateCounts.apply(this, arguments);
        // Added to reset the countdown of the state with the specified id
        NEW.resetCountdown.call(this, stateId);
        //
    }); // v1.00a - v1.00a

    extendFunc("updateStateTurns", function() {
        ORIG.updateStateTurns.apply(this, arguments);
        // Added to clear all possibly stale countdown state notetag caches
        MZ_EC.clearBattlerNotetagCache(this, "tpbsCountdownStates");
        //
    }); // v1.00a - v1.00a

    MZ_EC.extendFunc(EC_GBB, GBB, "_updateStateTurn", function(stateId) {
        // Added to stop updating the countdown state turns by other factors
        if (this.isTPBSCountdownState(stateId)) return;
        //
        ORIG._updateStateTurn.apply(this, arguments);
    }); // v1.00a - v1.00a

    /**
     * Nullipotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {id} stateId - The id of the state to be checked against
     * @returns {boolean} Whether the specified state is a countdown state
     */
    $.isTPBSCountdownState = function(stateId) {
        if (!BattleManager.isTpb()) return false;
        return !isNaN(this._tpbsCountdownStates[stateId]);
    }; // $.isTPBSCountdownState

    /**
     * The this pointer is Game_BattlerBase.prototype
     * Idempotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {id} stateId - The id of the state to have its counter erased
     */
    NEW.resetCountdown = function(stateId) {
        this._tpbsCountdownStates[stateId] = 0;
        MZ_EC.clearBattlerNotetagCache(this, "tpbsCountdownStates");
    }; // NEW.resetCountdown

    /**
     * The this pointer is Game_BattlerBase.prototype
     * Idempotent
     * @author DoubleX @since v1.00a @version v1.00a
     */
    NEW._init = function() {
        this._tpbsCountdownStates = {};
        MZ_EC.clearBattlerNotetagCache(this, "tpbsCountdownStates");
    }; // NEW._init

    /**
     * The this pointer is Game_BattlerBase.prototype
     * Idempotent
     * @author DoubleX @since v1.00a @version v1.00a
     * @param {id} stateId - The id of the state to have its counter erased
     */
    NEW._eraseCountdown = function(stateId) {
        delete this._tpbsCountdownStates[stateId];
        MZ_EC.clearBattlerNotetagCache(this, "tpbsCountdownStates");
    }; // NEW._eraseCountdown

})(Game_BattlerBase.prototype, DoubleX_RMMZ.Enhanced_Codebase,
        DoubleX_RMMZ.TPBS_Countdown_States);

/*----------------------------------------------------------------------------
 *    # Edited class: Game_Battler
 *      - Updates the turn counters of all countdown states in TPBS
 *----------------------------------------------------------------------------*/

(($, MZ_EC, TPBSCS) => {

    "use strict";

    const klassName = "Game_BattlerBase", {
        NEW,
        ORIG,
        extendFunc
    } = MZ_EC.setKlassContainer("Game_Battler", $, TPBSCS);
    const EC_GBB = MZ_EC[klassName].new, GBB = TPBSCS[klassName].new;

    extendFunc("updateTpb", function() {
        ORIG.updateTpb.apply(this, arguments);
        // Added to update the turn counters of all countdown states in TPBS
        NEW._updateCountdowns.call(this);
        //
    }); // v1.00a - v1.00a

    /**
     * The this pointer is Game_Battler.prototype
     * Hotspot/Idempotent
     * @author DoubleX @since v1.00a @version v1.00a
     */
    NEW._updateCountdowns = function() {
        Object.keys(this._tpbsCountdownStates).forEach(
                NEW._updateCountdown, this);
    }; // NEW._updateCountdowns

    /**
     * The this pointer is Game_Battler.prototype
     * Hotspot/Idempotent
     * @author DoubleX @since v1.00a @version v1.00a
     * @param {id} stateId - The id of the state to have its counter updated
     */
    NEW._updateCountdown = function(stateId) {
        const notetag_ = NEW._countdownNotetag_.call(this, stateId);
        if (!notetag_) return;
        const { pairs } = notetag_;
        if (!pairs.get("func1").call(this)) return;
        const interval = pairs.get("func2").call(this);
        if (interval === 0) return;
        NEW._onUpdateCountdown.call(this, stateId, interval);
    }; // NEW._updateCountdown

    /**
     * The this pointer is Game_Battler.prototype
     * Hotspot/Nullipotent
     * @author DoubleX @since v1.00a @version v1.00a
     * @param {id} stateId - The id of the state to have its counter updated
     */
    NEW._countdownNotetag_ = function(stateId) {
        const thisState = this.thisState;
        this.thisState = $dataStates[stateId];
        const notetag_ = MZ_EC.notetags(
                this, ["thisState"], "tpbsCountdownStates", ["interval"])[0];
        this.thisState = thisState;
        return notetag_;
    }; // NEW._countdownNotetag_

    /**
     * The this pointer is Game_Battler.prototype
     * Hotspot/Idempotent
     * @author DoubleX @since v1.00a @version v1.00a
     * @param {id} stateId - The id of the state to have its counter updated
     * @param {number} interval - The number of seconds to update the turn count
     */
    NEW._onUpdateCountdown = function(stateId, interval) {
        const increment = 1.0 / Graphics.gameFps, sign = interval > 0 ? 1 : -1;
        this._tpbsCountdownStates[stateId] += increment * sign;
        if (this._tpbsCountdownStates[stateId] * sign < interval * sign) return;
        // Expired states should've been no longer counter states
        NEW._onUpdateStateTurn.call(this, stateId, sign);
        if (this._stateTurns[stateId] <= 0) return this.removeState(stateId);
        //
    }; // NEW._onUpdateCountdown

    /**
     * The this pointer is Game_Battler.prototype
     * Hotspot/Idempotent
     * @author DoubleX @since v1.00a @version v1.00a
     * @param {id} stateId - The id of the state to have turn updated
     * @enum @param {number} sign - The decrement(1)/increment(-1) indicator
     */
    NEW._onUpdateStateTurn = function(stateId, sign) {
        this._stateTurns[stateId] -= sign;
        GBB.resetCountdown.call(this, stateId);
        EC_GBB._updateStateTurn.call(this, stateId);
    }; // NEW._onUpdateStateTurn

})(Game_Battler.prototype, DoubleX_RMMZ.Enhanced_Codebase,
        DoubleX_RMMZ.TPBS_Countdown_States);

/*============================================================================*/

    const curMZECVer = DoubleX_RMMZ.Enhanced_Codebase.VERSIONS.plugin;
    const minMZECVer = "v0.00a";
    if (curMZECVer < minMZECVer) {
        console.warn(`The version of DoubleX RMMZ Enhanced Codebase is
                     ${curMZECVer} but should be at least ${minMZECVer}`);
    }

} else {

    console.warn(`DoubleX RMMZ Enhanced Codebase should be placed above
                 ${DoubleX_RMMZ.TPBS_Countdown_States.PLUGIN_NAME}`);


} // if (DoubleX_RMMZ.Enhanced_Codebase)
