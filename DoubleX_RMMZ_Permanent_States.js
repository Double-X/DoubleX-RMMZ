/*============================================================================
 *    ## Plugin Info
 *----------------------------------------------------------------------------
 *    # Plugin Name
 *      DoubleX_RMMZ_Permanent_States
 *----------------------------------------------------------------------------
 *    # Introduction
 *      1. The default RMMZ states are all gone when the battler's dead
 *      2. This plugin lets you set some states to persist after the battler's
 *         dead and revived afterwards
 *----------------------------------------------------------------------------
 *    # Prerequisites
 *      Plugins:
 *      1. DoubleX RMMZ Enhanced Codebase
 *         https://github.com/Double-X/DoubleX-RMMZ/blob/master/DoubleX%20RMMZ%20Enhanced%20Codebase.js
 *      Abilities:
 *      1. Nothing special for most ordinary cases
 *      2. Little RMMZ plugin development proficiency to fully utilize this
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
 *      1.
 *      This Plugin:
 *      1. https://github.com/Double-X/DoubleX-RMMZ/blob/master/DoubleX_RMMZ_Permanent_States.js
 *      Posts:
 *      1. https://forums.rpgmakerweb.com/index.php?threads/doublex_rmmz_permanent_states.128016/
 *      2. https://www.rpgmakercentral.com/topic/42625-doublex_rmmz_permanent_states/
 *      3. https://rpgmaker.net/engines/rmmz/utilities/296/
 *      4. https://www.save-point.org/thread-8175.html
 *      5. https://gdu.one/forums/topic/13655-doublex_rmmz_permanent_states/
 *      6. http://www.hbgames.org/forums/viewtopic.php?f=332&t=80350
 *      7. https://forum.chaos-project.com/index.php/topic,16083.0.html
 *      8. https://doublexrpgmaker.wordpress.com/2020/09/28/doublex_rmmz_permanent_states/
 *      9. https://www.patreon.com/posts/42113127
 *      10. https://www.makerdevs.com/plugin/doublex-rmmz-permanent-states
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
 *      { codebase: "1.0.2", plugin: "v1.00a" }(2020 Sep 28 GMT 0500):
 *      1. 1st version of this plugin finished
 *============================================================================*/

/*:
 * @url https://www.patreon.com/doublex
 * @target MZ
 * @plugindesc Versions: { codebase: "1.0.2", plugin: "v1.00a" }
 * Lets you set some states to persist after the battler's dead and revived
 *
 * @help
 *============================================================================
 *    ## Notetag Info
 *       1. Among all the same notetag types in the same data, all can be
 *          effective
 *       2. Each line can only have at most 1 notetag
 *       3. The following is the structure of all notetags in this plugin:
 *          - <doublex rmmz permanent states>
 *          - <permanent states>
 *          Where contents are in the form of type suffixes: entries
 *          Either of the above can be used, but the 1st one reduce the chance
 *          of causing other plugins to treat the notetags of this plugin as
 *          theirs, while the 2nd one is more user-friendly
 *          - type is one of the following:
 *            1. battle
 *            2. map
 *            (Search tag: NOTE_TYPE)
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
 *            (Game_BattlerBase.prototype)
 *          - entries is the list of entries in the form of:
 *            entry1, entry2, entry3, ..., entryn
 *            Where entryi must conform with the suffixi specifications
 *----------------------------------------------------------------------------
 *    # State Notetags
 *      1. battle condSuffix typeSuffix: condEntry, typeEntry
 *         - Sets the permanent state type as specified by typeEntry inside
 *           battles if condEntry returns a truthy result
 *         - condSuffix can be val, switch or script
 *         - The result of condEntry can be anything as only whether it's
 *           truthy matters
 *         - typeEntry can be val, var or script
 *         - typeEntry must be either of the following:
 *           persist - The state will be kept upon death
 *           recover - The state will be kept upon recover all
 *           revive - The state will be added back upon revival
 *         - E.g.:
 *           <permanent states battle switch val: 1, persist> will make the
 *           state to be kept upon death inside battles if the game switch
 *           with id 1 is on
 *      2. map condSuffix typeSuffix: condEntry, typeEntry
 *         - Sets the permanent state type as specified by typeEntry outside
 *           battles if condEntry returns a truthy result
 *         - condSuffix can be val, switch or script
 *         - The result of condEntry can be anything as only whether it's
 *           truthy matters
 *         - typeEntry can be val, var or script
 *         - typeEntry must be either of the following:
 *           persist - The state will be kept upon death
 *           recover - The state will be kept upon recover all
 *           revive - The state will be added back upon revival
 *         - E.g.:
 *           <permanent states battle val var: true, 1> will make the
 *           state to be kept upon recover all outside battles if the value of
 *           the game variable with id 1 is "recover"
 *============================================================================
 */

// jshint esversion: 6

var DoubleX_RMMZ = DoubleX_RMMZ || {}; // var must be used or game will crash
// Separates the version numbers with the rest to make the former more clear
DoubleX_RMMZ.Permanent_States = {
    PLUGIN_NAME: "DoubleX_RMMZ_Permanent_States",
    VERSIONS: { codebase: "1.0.2", plugin: "v1.00a" }
}; // DoubleX_RMMZ.Permanent_States
//
Utils.checkRMVersion(DoubleX_RMMZ.Permanent_States.VERSIONS.codebase);

/*============================================================================
 *    ## Plugin Implementations
 *       You need not edit this part as it's about how this plugin works
 *----------------------------------------------------------------------------
 *    # Plugin Support Info:
 *      1. Prerequisites
 *         - Basic knowledge on what the default RMMZ codebase does in general
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

/*----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------
 *    # Edited class: DataManager
 *      - Loads all notetags of this plugin
 *----------------------------------------------------------------------------*/

(($, MZ_EC, PS) => {

    "use strict";

    const klassName = "DataManager", {
        NEW,
        ORIG
    } = MZ_EC.setKlassContainer(klassName, $, PS);
    const EC_DM = MZ_EC[klassName].new, DM = PS[klassName];

    // Search tag: NOTE_TYPE
    NEW.NOTETAG_PAIRS = new Map(Object.entries({
        battle: new Map(Object.entries({
            suffix1: MZ_EC.BOOL_SUFFIXES, // condSuffix
            suffix2: MZ_EC.VAL_SUFFIXES, // typeSuffix
            entry1: MZ_EC.BOOL_ENTRY, // condEntry
            entry2: MZ_EC.STRING_ENTRY // typeEntry
        })), // battle
        map: new Map(Object.entries({
            suffix1: MZ_EC.BOOL_SUFFIXES, // condSuffix
            suffix2: MZ_EC.VAL_SUFFIXES, // typeSuffix
            entry1: MZ_EC.BOOL_ENTRY, // condEntry
            entry2: MZ_EC.STRING_ENTRY // typeEntry
        })) // map
    })); // NEW.NOTETAG_PAIRS
    //

    NEW.NOTETAG_DATA_CONTAINER_NAMES = new Map(Object.entries({
        $dataStates: "state"
    })); // NEW.NOTETAG_DATA_CONTAINER_NAMES
    NEW._REG_EXP_NOTE = "permanent states";
    MZ_EC.extendFunc(EC_DM, DM, "loadDataNotetags", function(obj, objName) {
        ORIG.loadDataNotetags.apply(this, arguments);
        // Added to load all notetags of this plugin
        NEW._loadDataNotetags.call(this, obj, objName);
        //
    }); // v1.00a - v1.00a

    /**
     * The this pointer is DataManager
     * Idempotent
     * @author DoubleX @since v1.00a @version v1.00a
     * @param {[Datum]} obj - The data container having notetags to be loaded
     * @param {string} objName - The name of the data container having notetags
     */
    NEW._loadDataNotetags = function(obj, objName) {
        if (!NEW.NOTETAG_DATA_CONTAINER_NAMES.has(objName)) return;
        const datumType = NEW.NOTETAG_DATA_CONTAINER_NAMES.get(objName);
        const [regex, notePairs] = [NEW._REG_EXP_NOTE, NEW.NOTETAG_PAIRS];
        MZ_EC.onLoadDataNotetags.call(
                this, obj, datumType, regex, notePairs, "permanentStates");
    }; // NEW._loadDataNotetags

})(DataManager, DoubleX_RMMZ.Enhanced_Codebase, DoubleX_RMMZ.Permanent_States);

/*----------------------------------------------------------------------------
 *    ## Objects
 *----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------
 *    # Edited class: Game_BattlerBase
 *      - Stores and restores the permanent states specified by the notetags
 *----------------------------------------------------------------------------*/

(($, MZ_EC, PS) => {

    "use strict";

    /*------------------------------------------------------------------------
     *    New private variables
     *------------------------------------------------------------------------*/
    // {{*}} _permanentStates: The container of all other new variables
    //       {{number}} turns: The mapping from scenes to state id turn mapping

    const DM = PS.DataManager.new, {
        extendFunc,
        NEW,
        ORIG
    } = MZ_EC.setKlassContainer("Game_BattlerBase", $, PS);

    extendFunc("initMembers", function() {
        ORIG.initMembers.apply(this, arguments);
        // Added to setup all new variables of this plugin
        NEW._init.call(this);
        //
    }); // v1.00a - v1.00a

    extendFunc("clearStates", function() {
        // Added to store all permanent states right before clearing states
        NEW._storePermanentStates.call(this);
        //
        ORIG.clearStates.apply(this, arguments);
    }); // v1.00a - v1.00a

    extendFunc("die", function() {
        ORIG.die.apply(this, arguments);
        // Added to restore all persist permanent states upon death
        NEW._restorePermanentStates.call(this, "persist");
        //
    }); // v1.00a - v1.00a

    extendFunc("revive", function() {
        ORIG.revive.apply(this, arguments);
        // Added to restore all revive permanent states upon revival
        NEW._restorePermanentStates.call(this, "revive");
        //
    }); // v1.00a - v1.00a

    extendFunc("recoverAll", function() {
        ORIG.recoverAll.apply(this, arguments);
        // Added to restore all recover permanent states upon recover all
        NEW._restorePermanentStates.call(this, "recover");
        //
    }); // v1.00a - v1.00a

    NEW._PERMANENT_STATE_TYPES = ["persist", "revive", "recover"];

    NEW._SCENE = () => $gameParty.inBattle() ? "battle" : "map";

    /**
     * The this pointer is Game_BattlerBase.prototype
     * Idempotent
     * @author DoubleX @since v1.00a @version v1.00a
     */
    NEW._init = function() {
        this._permanentStates = { turns: {} };
        DM.NOTETAG_PAIRS.forEach((val, key) => {
            NEW._initScenePermanentStates.call(this, key);
        });
    }; // NEW._init

    /**
     * The this pointer is Game_BattlerBase.prototype
     * Idempotent
     * @author DoubleX @since v1.00a @version v1.00a
     * @enum @param {string} scene - battle/map
     */
    NEW._initScenePermanentStates = function(scene) {
        const { turns } = this._permanentStates, sceneTypes = turns[scene] = {};
        NEW._PERMANENT_STATE_TYPES.forEach(type => sceneTypes[type] = {});
    }; // NEW._init

    /**
     * The this pointer is Game_BattlerBase.prototype
     * Idempotent
     * @author DoubleX @since v1.00a @version v1.00a
     */
    NEW._storePermanentStates = function() {
        if (!this._states || !this._stateTurns) return;
        const scene = NEW._SCENE();
        const sceneTypes = this._permanentStates.turns[scene];
        this.states().forEach(state => {
            const { id, meta: { enhancedCodebase } } = state;
            const { permanentStates: { notetags } } = enhancedCodebase;
            notetags.filter(({ notetagType, pairs }) => {
                return notetagType === scene && pairs.get("func1").call(this);
            }).forEach(({ pairs }) => {
                const type = pairs.get("func2").call(this);
                sceneTypes[type][id] = this._stateTurns[id];
            });
        });
    }; // NEW._storePermanentStates

    /**
     * The this pointer is Game_BattlerBase.prototype
     * Idempotent
     * @author DoubleX @since v1.00a @version v1.00a
     * @enum @param {string} type - persist/revive/recover
     */
    NEW._restorePermanentStates = function(type) {
        if (!this._states || !this._stateTurns) return;
        const scene = NEW._SCENE();
        const sceneTypes = this._permanentStates.turns[scene];
        const turns = sceneTypes[type];
        this._states = this._states.concat(Object.keys(turns));
        Object.entries(turns).forEach(NEW._restorePermanentState, this);
        sceneTypes[type] = {};
    }; // NEW._restorePermanentStates

    /**
     * The this pointer is Game_BattlerBase.prototype
     * Idempotent
     * @author DoubleX @since v1.00a @version v1.00a
     * @param {id} id - The id of the permanent state to be restored
     * @param {number} turn - The turns of the permanent state to be restored
     */
    NEW._restorePermanentState = function([id, turn]) {
        this._stateTurns[id] = turn;
    }; // NEW._restorePermanentState

})(Game_BattlerBase.prototype, DoubleX_RMMZ.Enhanced_Codebase,
        DoubleX_RMMZ.Permanent_States);

/*============================================================================*/

    const curMZECVer = DoubleX_RMMZ.Enhanced_Codebase.VERSIONS.plugin;
    const minMZECVer = "v0.00a";
    if (curMZECVer < minMZECVer) {
        console.warn(`The version of DoubleX RMMZ Enhanced Codebase is
                     ${curMZECVer} but should be at least ${minMZECVer}`);
    }

} else {

    console.warn(`DoubleX RMMZ Enhanced Codebase should be placed above
                 ${DoubleX_RMMZ.Permanent_States.PLUGIN_NAME}`);

} // if (DoubleX_RMMZ.Enhanced_Codebase)
