/*============================================================================
 *    ## Plugin Info
 *----------------------------------------------------------------------------
 *    # Plugin Name
 *      DoubleX RMMZ State Triggers
 *----------------------------------------------------------------------------
 *    # Introduction
 *    1. This plugin lets you use notetags to set what happens when a state's
 *       added/removed/expired/turn's updated/turn's reset on the battler
 *       involved
 *    2. You're expected to write JavaScript codes directly, as there are so
 *       much possibilities that most of them are just impossible to be
 *       covered by this plugin itself, so this plugin just lets you write
 *       JavaScript codes that are executed on some important timings
 *----------------------------------------------------------------------------
 *    # Prerequisites
 *      Plugins:
 *      1. DoubleX RMMZ Enhanced Codebase
 *         https://github.com/Double-X/DoubleX-RMMZ/blob/master/DoubleX%20RMMZ%20Enhanced%20Codebase.js
 *      Abilities:
 *      1. Some RMMV plugin development proficiency
 *         (Basic knowledge on what RMMV plugin development does in general
 *         with several easy, simple and small plugins written without
 *         nontrivial bugs up to 1000 LoC scale but still being inexperienced)
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
 *      1. https://www.youtube.com/watch?v=oClYZtOJn8I
 *      This Plugin:
 *      1. https://github.com/Double-X/DoubleX-RMMZ/blob/master/DoubleX%20RMMZ%20State%20Triggers.js
 *      Posts:
 *      1. https://forums.rpgmakerweb.com/index.php?threads/doublex-rmmz-state-triggers.126380/
 *      2. https://www.rpgmakercentral.com/topic/42562-doublex-rmmz-state-triggers/
 *      3. https://rpgmaker.net/engines/rmmz/utilities/257/
 *      4. https://www.save-point.org/thread-8154-post-52605.html
 *      5. https://gdu.one/forums/topic/13620-doublex-rmmz-state-triggers/
 *      6. http://www.hbgames.org/forums/viewtopic.php?f=332&t=80300
 *      7. https://forum.chaos-project.com/index.php/topic,16069.new.html
 *      8. https://doublexrpgmaker.wordpress.com/2020/08/29/doublex-rmmz-state-triggers/
 *      9. https://www.patreon.com/posts/doublex-rmmz-40988080
 *      10. https://www.makerdevs.com/plugin/doublex-rmmz-state-triggers
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
 *      { codebase: "1.1.0", plugin: "v1.00b" }(2020 Dec 2 GMT 0400):
 *      1. You no longer have to edit the value of
 *         DoubleX_RMMZ.State_Triggers.PLUGIN_NAME when changing this plugin
 *         file name
 *      { codebase: "1.0.0", plugin: "v1.00a" }(2020 Aug 29 GMT 1300):
 *      1. 1st version of this plugin finished
 *============================================================================*/
/*:
 * @url https://www.patreon.com/doublex
 * @target MZ
 * @plugindesc Versions: { codebase: "1.1.0", plugin: "v1.00b" }
 * Lets you run some codes set by your notetags on some important state timings
 * @orderAfter DoubleX_RMMZ_Enhanced_Codebase
 * @orderAfter DoubleX RMMZ Enhanced Codebase
 * @base DoubleX RMMZ Enhanced Codebase
 * @author DoubleX
 *
 * @param addNotetagDataTypePriorities
 * @type select[]
 * @option Data of the actor
 * @value actor
 * @option Data of the current class
 * @value class
 * @option Data of learnt skills/action list(Shouldn't be used with Data of usable skills)
 * @value skills
 * @option Data of usable skills(Shouldn't be used with Data of learnt skills)
 * @value usableSkills
 * @option Data of possessed items(Shouldn't be used with Data of usable items)
 * @value items
 * @option Data of usable items(Shouldn't be used with Data of possessed items)
 * @value usableItems
 * @option Data of the latest skill/item being used(Can double-count with skills/items/usableSkills/usableItems)
 * @value latestSkillItem
 * @option Data of equipped weapons
 * @value weapons
 * @option Data of equipped armors
 * @value armors
 * @option Data of the enemy
 * @value enemy
 * @option Data of effective states
 * @value states
 * @option Data of the state to have triggers run
 * @value thisState
 * @desc Sets data type priorities of the add notetags
 * You can use script calls/plugin commands to change this
 * @default ["thisState"]
 *
 * @param removeNotetagDataTypePriorities
 * @type select[]
 * @option Data of the actor
 * @value actor
 * @option Data of the current class
 * @value class
 * @option Data of learnt skills/action list(Shouldn't be used with Data of usable skills)
 * @value skills
 * @option Data of usable skills(Shouldn't be used with Data of learnt skills)
 * @value usableSkills
 * @option Data of possessed items(Shouldn't be used with Data of usable items)
 * @value items
 * @option Data of usable items(Shouldn't be used with Data of possessed items)
 * @value usableItems
 * @option Data of the latest skill/item being used(Can double-count with skills/items/usableSkills/usableItems)
 * @value latestSkillItem
 * @option Data of equipped weapons
 * @value weapons
 * @option Data of equipped armors
 * @value armors
 * @option Data of the enemy
 * @value enemy
 * @option Data of effective states
 * @value states
 * @option Data of the state to have triggers run
 * @value thisState
 * @desc Sets data type priorities of the remove notetags
 * You can use script calls/plugin commands to change this
 * @default ["thisState"]
 *
 * @param resetNotetagDataTypePriorities
 * @type select[]
 * @option Data of the actor
 * @value actor
 * @option Data of the current class
 * @value class
 * @option Data of learnt skills/action list(Shouldn't be used with Data of usable skills)
 * @value skills
 * @option Data of usable skills(Shouldn't be used with Data of learnt skills)
 * @value usableSkills
 * @option Data of possessed items(Shouldn't be used with Data of usable items)
 * @value items
 * @option Data of usable items(Shouldn't be used with Data of possessed items)
 * @value usableItems
 * @option Data of the latest skill/item being used(Can double-count with skills/items/usableSkills/usableItems)
 * @value latestSkillItem
 * @option Data of equipped weapons
 * @value weapons
 * @option Data of equipped armors
 * @value armors
 * @option Data of the enemy
 * @value enemy
 * @option Data of effective states
 * @value states
 * @option Data of the state to have triggers run
 * @value thisState
 * @desc Sets data type priorities of the reset notetags
 * You can use script calls/plugin commands to change this
 * @default ["thisState"]
 *
 * @param expireNotetagDataTypePriorities
 * @type select[]
 * @option Data of the actor
 * @value actor
 * @option Data of the current class
 * @value class
 * @option Data of learnt skills/action list(Shouldn't be used with Data of usable skills)
 * @value skills
 * @option Data of usable skills(Shouldn't be used with Data of learnt skills)
 * @value usableSkills
 * @option Data of possessed items(Shouldn't be used with Data of usable items)
 * @value items
 * @option Data of usable items(Shouldn't be used with Data of possessed items)
 * @value usableItems
 * @option Data of the latest skill/item being used(Can double-count with skills/items/usableSkills/usableItems)
 * @value latestSkillItem
 * @option Data of equipped weapons
 * @value weapons
 * @option Data of equipped armors
 * @value armors
 * @option Data of the enemy
 * @value enemy
 * @option Data of effective states
 * @value states
 * @option Data of the state to have triggers run
 * @value thisState
 * @desc Sets data type priorities of the expire notetags
 * You can use script calls/plugin commands to change this
 * @default ["thisState"]
 *
 * @param turnNotetagDataTypePriorities
 * @type select[]
 * @option Data of the actor
 * @value actor
 * @option Data of the current class
 * @value class
 * @option Data of learnt skills/action list(Shouldn't be used with Data of usable skills)
 * @value skills
 * @option Data of usable skills(Shouldn't be used with Data of learnt skills)
 * @value usableSkills
 * @option Data of possessed items(Shouldn't be used with Data of usable items)
 * @value items
 * @option Data of usable items(Shouldn't be used with Data of possessed items)
 * @value usableItems
 * @option Data of the latest skill/item being used(Can double-count with skills/items/usableSkills/usableItems)
 * @value latestSkillItem
 * @option Data of equipped weapons
 * @value weapons
 * @option Data of equipped armors
 * @value armors
 * @option Data of the enemy
 * @value enemy
 * @option Data of effective states
 * @value states
 * @option Data of the state to have triggers run
 * @value thisState
 * @desc Sets data type priorities of the turn notetags
 * You can use script calls/plugin commands to change this
 * @default ["thisState"]
 *
 * @command setStateTriggersParam
 * @desc Applies script call $gameSystem.setStateTriggersParam(param, val)
 * @arg param
 * @desc The name of a valid parameter of this plugin
 * @arg val
 * @desc A valid new fully parsed value of the parameter param
 *
 * @help
 *============================================================================
 *    ## Notetag Info
 *       1. Among all the same notetag types in the same data, all can be
 *          effective
 *       2. Each line can only have at most 1 notetag
 *       3. The following is the structure of all notetags in this plugin:
 *          - <doublex rmmz state triggers>
 *          - <state triggers>
 *          Where contents are in the form of type suffixes: entries
 *          Either of the above can be used, but the 1st one reduce the chance
 *          of causing other plugins to treat the notetags of this plugin as
 *          theirs, while the 2nd one is more user-friendly
 *          - type is one of the following:
 *            1. add
 *            2. remove
 *            3. reset
 *            4. expire
 *            5. turn
 *          - suffixes is the list of suffixes in the form of:
 *            suffix1 suffix2 suffix3 ... suffixn
 *            Where each suffix is either of the following:
 *            val(The notetag value will be used as-is)
 *            switch(The value of the game switch with id as the notetag value
 *                   will be used)
 *            event(The common event with id as the notetag value will be
 *                  reserved)
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
 *    # Actor/Class/Learnt Skills/Usable Skills/Posessed Items/Usable Items/
 *      Inputted Skill Or Item/Weapon/Armor/Enemy/States/This State Notetags
 *      1. add condSuffix eventSuffix: condEntry, eventEntry
 *         - Triggers what specified in eventEntry when the state's just added
 *           to the battler involved(not when the state already exists before)
 *           if condEntry returns a truthy result
 *         - condSuffix can be val, switch or script
 *         - eventEntry can be event or script
 *         - The result of condEntry can be anything as only whether it's
 *           truthy matters
 *         - If the result of condEntry is falsy, this notetag will be
 *           discarded upon such use cases
 *         - The result of eventEntry can be anything as it's supposed to run
 *           commands instead of returning results
 *         - E.g.:
 *           <state triggers add switch event: 1, 2> will reserve the common
 *           event with id 2 when the state's just added to the battler
 *           involved(not when it already exists before) if the game switch
 *           with id 1 is on
 *      2. remove condSuffix eventSuffix: condEntry, eventEntry
 *         - Triggers what specified in eventEntry when the state's just
 *           removed from the battler involved(not when the state turn just
 *           expired causing the removal) if condEntry returns a truthy result
 *         - condSuffix can be val, switch or script
 *         - eventEntry can be event or script
 *         - The result of condEntry can be anything as only whether it's
 *           truthy matters
 *         - If the result of condEntry is falsy, this notetag will be
 *           discarded upon such use cases
 *         - The result of eventEntry can be anything as it's supposed to run
 *           commands instead of returning results
 *         - E.g.:
 *           <state triggers remove val script: true, 3> will always run the
 *           JavaScript codes stored as a string in variable with id 3 when
 *           the state's just removed from the battler involved(not when the
 *           state turn just expired causing the removal)
 *      3. reset condSuffix eventSuffix: condEntry, eventEntry
 *         - Triggers what specified in eventEntry when the state's turn's
 *           just reset due to trying to add that state to the battler
 *           involved if condEntry returns a truthy result
 *         - condSuffix can be val, switch or script
 *         - eventEntry can be event or script
 *         - The result of condEntry can be anything as only whether it's
 *           truthy matters
 *         - If the result of condEntry is falsy, this notetag will be
 *           discarded upon such use cases
 *         - The result of eventEntry can be anything as it's supposed to run
 *           commands instead of returning results
 *         - E.g.:
 *           <state triggers reset switch event: 1, 2> will reserve the common
 *           event with id 2 when the state's turn's just reset due to trying
 *           to add that state to the battler involved if the game switch with
 *           id 1 is on
 *      4. expire condSuffix eventSuffix: condEntry, eventEntry
 *         - Triggers what specified in eventEntry when the state's turn's
 *           just expired causing the state to be removed from the battler
 *           involved if condEntry returns a truthy result
 *         - condSuffix can be val, switch or script
 *         - eventEntry can be event or script
 *         - The result of condEntry can be anything as only whether it's
 *           truthy matters
 *         - If the result of condEntry is falsy, this notetag will be
 *           discarded upon such use cases
 *         - The result of eventEntry can be anything as it's supposed to run
 *           commands instead of returning results
 *         - E.g.:
 *           <state triggers expire val script: true, 3> will always run the
 *           JavaScript codes stored as a string in variable with id 3 when
 *           the state's turn's just expired causing the state to be removed
 *           from the battler involved
 *      5. turn condSuffix eventSuffix: condEntry, eventEntry
 *         - Triggers what specified in eventEntry when the state's turn's
 *           just updated without being expired for the battler involved if
 *           condEntry returns a truthy result
 *         - condSuffix can be val, switch or script
 *         - eventEntry can be event or script
 *         - The result of condEntry can be anything as only whether it's
 *           truthy matters
 *         - If the result of condEntry is falsy, this notetag will be
 *           discarded upon such use cases
 *         - The result of eventEntry can be anything as it's supposed to run
 *           commands instead of returning results
 *         - E.g.:
 *           <state triggers turn val event: true, 2> will always reserve the
 *           common event with id 2 when the state's turn's just updated
 *           without being expired for the battler involved
 *============================================================================
 *    ## Script Call Info
 *----------------------------------------------------------------------------
 *    # Parameter manipulations
 *      1. $gameSystem.setStateTriggersParam(param, val)
 *         - Sets the fully parsed value of the parameter param as val
 *         - param must be the name of a valid parameter of this plugin
 *         - val must be a valid new fully parsed value of the parameter param
 *         - Such parameter value changes will be saved
 *         - E.g.:
 *           $gameSystem.setStateTriggersParam("addNotetagDataTypePriorities", [
 *               "thisState"
 *           ]) sets the fully parsed value of the parameter
 *           addNotetagDataTypePriorities as ["thisState"]
 *      2. $gameSystem.stateTriggersParam(param)
 *         - Returns the fully parsed value of the parameter param
 *         - param must be the name of a valid parameter of this plugin
 *         - E.g.:
 *           $gameSystem.setStateTriggersParam("removeNotetagDataTypePriorities")
 *           returns the fully parsed value of the parameter
 *           removeNotetagDataTypePriorities, which should be ["thisState"] if
 *           it uses its default parameter value
 *============================================================================
 *    ## Plugin Command Info
 *----------------------------------------------------------------------------
 *      1. setStateTriggersParam param val
 *         - Applies the script call
 *           $gameSystem.setStateTriggersParam(param, val)
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
    DoubleX_RMMZ.State_Triggers = {
        PLUGIN_NAME: name,
        VERSIONS: { codebase: "1.1.0", plugin: "v1.00b" }
    }; // DoubleX_RMMZ.State_Triggers
    //
    //

})();

(ST => {

    "use strict";

    const pluginCodebaseVer = ST.VERSIONS.codebase;
    if (Utils.checkRMVersion(pluginCodebaseVer)) return;
    console.warn(`Your codebase version is ${Utils.RPGMAKER_VERSION} but must be
                 at least ${pluginCodebaseVer} to use ${ST.PLUGIN_NAME}`);

})(DoubleX_RMMZ.State_Triggers);

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
 *      - Loads all notetags of this plugin
 *----------------------------------------------------------------------------*/

((MZ_EC, ST) => {

    "use strict";

    // Search tag: NOTE_TYPE
    MZ_EC.loadDataManagerNotetags(ST, new Map(Object.entries({
        add: new Map(Object.entries({
            suffix1: MZ_EC.BOOL_SUFFIXES, // condSuffix
            suffix2: MZ_EC.VAL_SUFFIXES, // eventSuffix
            entry1: MZ_EC.BOOL_ENTRY, // condEntry
            entry2: MZ_EC.NUM_ENTRY // eventEntry
        })), // add
        remove: new Map(Object.entries({
            suffix1: MZ_EC.BOOL_SUFFIXES, // condSuffix
            suffix2: MZ_EC.VAL_SUFFIXES, // eventSuffix
            entry1: MZ_EC.BOOL_ENTRY, // condEntry
            entry2: MZ_EC.NUM_ENTRY // eventEntry
        })), // remove
        reset: new Map(Object.entries({
            suffix1: MZ_EC.BOOL_SUFFIXES, // condSuffix
            suffix2: MZ_EC.VAL_SUFFIXES, // eventSuffix
            entry1: MZ_EC.BOOL_ENTRY, // condEntry
            entry2: MZ_EC.NUM_ENTRY // eventEntry
        })), // reset
        expire: new Map(Object.entries({
            suffix1: MZ_EC.BOOL_SUFFIXES, // condSuffix
            suffix2: MZ_EC.VAL_SUFFIXES, // eventSuffix
            entry1: MZ_EC.BOOL_ENTRY, // condEntry
            entry2: MZ_EC.NUM_ENTRY // eventEntry
        })), // expire
        turn: new Map(Object.entries({
            suffix1: MZ_EC.BOOL_SUFFIXES, // condSuffix
            suffix2: MZ_EC.VAL_SUFFIXES, // eventSuffix
            entry1: MZ_EC.BOOL_ENTRY, // condEntry
            entry2: MZ_EC.NUM_ENTRY // eventEntry
        })) // turn
    })), new Map(Object.entries({
        $dataActors: "actor",
        $dataClasses: "class",
        $dataSkills: "skill",
        $dataItems: "item",
        $dataWeapons: "weapon",
        $dataArmors: "armor",
        $dataEnemies: "enemy",
        $dataStates: "state"
    })), "state triggers", "stateTriggers");
    //

})(DoubleX_RMMZ.Enhanced_Codebase, DoubleX_RMMZ.State_Triggers);

/*----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------
 *    ## Objects
 *----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------
 *    # Edited class: Game_System
 *      - Lets you access the parameters of this plugin and store them in save
 *----------------------------------------------------------------------------*/

((MZ_EC, ST) => {

    "use strict";

    MZ_EC.setupGameSystemParamsIOs(ST, "stateTriggers");

})(DoubleX_RMMZ.Enhanced_Codebase, DoubleX_RMMZ.State_Triggers);

/*----------------------------------------------------------------------------
 *    # Edited class: Game_Variables
 *      - Reloads all notetags upon variable change to keep scripts updated
 *----------------------------------------------------------------------------*/

((MZ_EC, ST) => {

    "use strict";

    MZ_EC.updateGameVarsDataNotetags(ST, "stateTriggers");

})(DoubleX_RMMZ.Enhanced_Codebase, DoubleX_RMMZ.State_Triggers);

/*----------------------------------------------------------------------------
 *    # Edited class: Game_BattlerBase
 *      - Runs all effective reset, add and turn state trigger notetags
 *----------------------------------------------------------------------------*/

(($, MZ_EC, ST) => {

    "use strict";

    const klassName = "Game_BattlerBase", {
        NEW,
        ORIG,
        extendFunc
    } = MZ_EC.setKlassContainer(klassName, $, ST);
    const EC_GBB = MZ_EC[klassName].new, GBB = ST[klassName];

    extendFunc("resetStateCounts", function(stateId) {
        ORIG.resetStateCounts.apply(this, arguments);
        // Added to run reset notetags only if it's reset instead of add
        if (this._stateTriggers.isAdd) return this._stateTriggers.isAdd = false;
        NEW.runTriggers.call(this, "reset", $dataStates[stateId]);
        //
    }); // v1.00a - v1.00a

    extendFunc("addNewState", function(stateId) {
        // Added to mark that it's add instead of reset
        this._stateTriggers.isAdd = true;
        //
        ORIG.addNewState.apply(this, arguments);
        // Added to trigger all events specified by all effective add notetags
        NEW.runTriggers.call(this, "add", $dataStates[stateId]);
        //
    }); // v1.00a - v1.00a

    MZ_EC.extendFunc(EC_GBB, GBB, "_updateStateTurn", function(stateId) {
        ORIG._updateStateTurn.apply(this, arguments);
        // Added to run turn notetags only if the state isn't already expired
        if (this._stateTurns[stateId] <= 0) return;
        NEW.runTriggers.call(this, "turn", $dataStates[stateId]);
        //
    }); // v1.00a - v1.00a

    /**
     * The this pointer is Game_BattlerBase.prototype
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @enum @param {string} notetagName - add/reset/reset/expire/turn
     * @param {DataState} state - The state having effective notetags triggered
     */
    NEW.runTriggers = function(notetagName, state) {
        const suffix = "NotetagDataTypePriorities";
        const types = $gameSystem.stateTriggersParam(`${notetagName}${suffix}`);
        MZ_EC.clearBattlerNotetagCache(this, "stateTriggers");
        const thisState = this.thisState;
        this.thisState = state;
        MZ_EC.runCondEventNotetags(this, types, "stateTriggers", [notetagName]);
        this.thisState = thisState;
        MZ_EC.clearBattlerNotetagCache(this, "stateTriggers");
    }; // NEW.runTriggers

})(Game_BattlerBase.prototype, DoubleX_RMMZ.Enhanced_Codebase,
        DoubleX_RMMZ.State_Triggers);

/*----------------------------------------------------------------------------
 *    # Edited class: Game_Battler
 *      - Runs all effective expire, add and turn state trigger notetags
 *----------------------------------------------------------------------------*/

(($, MZ_EC, ST) => {

    "use strict";

    const klassName = "Game_Battler", GBB = ST.Game_BattlerBase.new;
    const { NEW, ORIG, extendFunc } = MZ_EC.setKlassContainer(klassName, $, ST);
    const EC_GB = MZ_EC[klassName].new, GB = ST[klassName];

    /*------------------------------------------------------------------------
     *    New private variables
     *------------------------------------------------------------------------*/
    // {{*}} _stateTriggers: The container of all other new variables
    //       {boolean} isAdd: Whether the add instead of reset's triggered
    //       {boolean} isExpire: Whether expire instead of remove's triggered

    extendFunc("initMembers", function() {
        ORIG.initMembers.apply(this, arguments);
        // Added to initializes all new variables added by this plugin
        NEW._init.call(this);
        //
    }); // v1.00a - v1.00a

    extendFunc("eraseState", function(stateId) {
        // Added to check whether the battler's affected with state with stateId
        const isStateAffected = this.isStateAffected(stateId);
        // Otherwise some remove state triggers will cause infinite recursions
        ORIG.eraseState.apply(this, arguments);
        // Added to run remove notetags only if it's remove instead of expire
        if (!this._stateTriggers.isExpire) {
            if (!isStateAffected) return;
            GBB.runTriggers.call(this, "remove", $dataStates[stateId]);
        } else this._stateTriggers.isExpire = false;
        // It must be placed here or some triggers will cause infinite recursion
    }); // v1.00a - v1.00a

    MZ_EC.extendFunc(EC_GB, GB, "_removeStateAuto", function(timing, state) {
        // Added to trigger all events specified by all effective expire notetag
        if (EC_GB._isRemoveStateAuto.call(this, timing, state)) {
            this._stateTriggers.isExpire = true;
            GBB.runTriggers.call(this, "expire", state);
        }
        //
        ORIG._removeStateAuto.apply(this, arguments);
    }); // v1.00a - v1.00a

    /**
     * The this pointer is Game_Battler.prototype
     * Idempotent
     * @author DoubleX @since v1.00a @version v1.00a
     */
    NEW._init = function() {
        // Map can't be serialized so ordinary objects must be used
        this._stateTriggers = {};
        //
    }; // NEW._init

})(Game_Battler.prototype, DoubleX_RMMZ.Enhanced_Codebase,
        DoubleX_RMMZ.State_Triggers);

/*============================================================================*/

    const curMZECVer = DoubleX_RMMZ.Enhanced_Codebase.VERSIONS.plugin;
    const minMZECVer = "v0.00a";
    if (curMZECVer < minMZECVer) {
        console.warn(`The version of DoubleX RMMZ Enhanced Codebase is
                     ${curMZECVer} but should be at least ${minMZECVer}`);
    }

} else {

    console.warn(`DoubleX RMMZ Enhanced Codebase should be placed above
                 ${DoubleX_RMMZ.State_Triggers.PLUGIN_NAME}`);


} // if (DoubleX_RMMZ.Enhanced_Codebase)
