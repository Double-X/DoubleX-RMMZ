/*============================================================================
 *    ## Plugin Info
 *----------------------------------------------------------------------------
 *    # Plugin Name
 *      DoubleX_RMMZ_Confusion_Edit
 *----------------------------------------------------------------------------
 *    # Introduction
 *      1. The default RMMZ confusion causes the battler to only use attack
 *         and nothing else
 *      2. This plugin lets you set some confusion states to cause the
 *         battlers to behave like autobattle ones, with the definitions of
 *         friends and opponents being reversed
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
 *      1. https://www.youtube.com/watch?v=yP4yKRl3r_Q
 *      This Plugin:
 *      1. https://github.com/Double-X/DoubleX-RMMZ/blob/master/DoubleX_RMMZ_Confusion_Edit.js
 *      Posts:
 *      1. https://forums.rpgmakerweb.com/index.php?threads/doublex_rmmz_confusion_edit.127953/
 *      2. https://www.rpgmakercentral.com/topic/42624-doublex_rmmz_confusion_edit/
 *      3. https://rpgmaker.net/engines/rmmz/utilities/295/
 *      4. https://www.save-point.org/thread-8173.html
 *      5. https://gdu.one/forums/topic/13653-doublex_rmmz_confusion_edit/
 *      6. http://www.hbgames.org/forums/viewtopic.php?f=332&t=80346
 *      7. https://forum.chaos-project.com/index.php/topic,16082.new.html
 *      8. https://doublexrpgmaker.wordpress.com/2020/09/28/doublex_rmmz_confusion_edit/
 *      9. https://www.patreon.com/posts/42077864
 *      10. https://www.makerdevs.com/plugin/doublex-rmmz-confusion-edit
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
 *      { codebase: "1.0.2", plugin: "v1.00a" }(2020 Sep 27 GMT 1600):
 *      1. 1st version of this plugin finished
 *----------------------------------------------------------------------------
 *    # Todo
 *      1. Makes the reverse notetag works with substitute as well
 *============================================================================*/

/*:
 * @url https://www.patreon.com/doublex
 * @target MZ
 * @plugindesc Versions: { codebase: "1.0.2", plugin: "v1.00a" }
 * Lets you set some confusion states to not be restricted to attacks only
 * @orderAfter DoubleX RMMZ Enhanced Codebase
 * @base DoubleX RMMZ Enhanced Codebase
 * @author DoubleX
 *
 * @help
 *============================================================================
 *    ## Notetag Info
 *       1. Among all the same notetag types in the same data, only the 1st
 *          one can be effective
 *       2. Each line can only have at most 1 notetag
 *       3. The following is the structure of all notetags in this plugin:
 *          - <doublex rmmz confusion edit>
 *          - <confusion edit>
 *          Where contents are in the form of type suffixes: entries
 *          Either of the above can be used, but the 1st one reduce the chance
 *          of causing other plugins to treat the notetags of this plugin as
 *          theirs, while the 2nd one is more user-friendly
 *          - type is one of the following:
 *            1. reverse
 *            2. excludeSelf
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
 *      1. reverse condSuffix: condEntry
 *         - Reverses the definitions of friends and opponents instead of
 *           using the default confusion behaviors when condEntry returns a
 *           truthy result
 *         - condSuffix can be val, switch or script
 *         - The result of condEntry can be anything as only whether it's
 *           truthy matters
 *         - Reversal will never take place for state Restriction as Attack an
 *           Enemy nor skill/item scope as The User
 *         - Reversal will have 50% chance to take place for state Restriction
 *           as Attack Anyone
 *         - Reversal will always take place for state Restriction as Attack
 *           an Ally
 *         - E.g.:
 *           <confusion edit reverse switch: 1> will reverse the definitions
 *           of friends and opponents if the game switch with id 1 is on
 *      2. excludeSelf condSuffix: condEntry
 *         - Ensures the battler won't target self when condEntry returns a
 *           truthy result and the actions aren't forced
 *         - This only applies to skills/items with Number as One in Scope
 *         - This won't apply if self is the only possible target
 *         - condSuffix can be val, switch or script
 *         - The result of condEntry can be anything as only whether it's
 *           truthy matters
 *         - E.g.:
 *           <confusion edit excludeSelf val: true> will always ensure the
 *           battler won't target self when the actions aren't forced
 *============================================================================
 */

// jshint esversion: 6

var DoubleX_RMMZ = DoubleX_RMMZ || {}; // var must be used or game will crash
// Separates the version numbers with the rest to make the former more clear
DoubleX_RMMZ.Confusion_Edit = {
    PLUGIN_NAME: "DoubleX_RMMZ_Confusion_Edit",
    VERSIONS: { codebase: "1.0.2", plugin: "v1.00a" }
}; // DoubleX_RMMZ.Confusion_Edit
//
Utils.checkRMVersion(DoubleX_RMMZ.Confusion_Edit.VERSIONS.codebase);

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

(($, MZ_EC, CE) => {

    "use strict";

    const klassName = "DataManager", {
        NEW,
        ORIG
    } = MZ_EC.setKlassContainer(klassName, $, CE);
    const EC_DM = MZ_EC[klassName].new, DM = CE[klassName];

    // Search tag: NOTE_TYPE
    NEW.NOTETAG_PAIRS = new Map(Object.entries({
        reverse: new Map(Object.entries({
            suffix1: MZ_EC.BOOL_SUFFIXES, // condSuffix
            entry1: MZ_EC.BOOL_ENTRY // condEntry
        })), // reverse
        excludeSelf: new Map(Object.entries({
            suffix1: MZ_EC.BOOL_SUFFIXES, // condSuffix
            entry1: MZ_EC.BOOL_ENTRY // condEntry
        })) // excludeSelf
    })); // NEW.NOTETAG_PAIRS
    //

    NEW.NOTETAG_DATA_CONTAINER_NAMES = new Map(Object.entries({
        $dataStates: "state"
    })); // NEW.NOTETAG_DATA_CONTAINER_NAMES
    NEW._REG_EXP_NOTE = "confusion edit";
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
                this, obj, datumType, regex, notePairs, "confusionEdit");
    }; // NEW._loadDataNotetags

})(DataManager, DoubleX_RMMZ.Enhanced_Codebase, DoubleX_RMMZ.Confusion_Edit);

/*----------------------------------------------------------------------------
 *    ## Objects
 *----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------
 *    # Edited class: Game_Action
 *      - Filters the possible action skill/item by notetags of this plugin
 *----------------------------------------------------------------------------*/

(($, MZ_EC, CE) => {

    "use strict";

    const klassName = "Game_Action", EC_GA = MZ_EC[klassName].new, {
        extendFunc,
        NEW,
        ORIG
    } = MZ_EC.setKlassContainer(klassName, $, CE);

    extendFunc("friendsUnit", function() {
        // Rewritten to reverse the ally/foe identification with reverse flag
        return NEW._origReversedUnit.call(this, "friends", "opponents");
        //
    }); // v1.00a - v1.00a

    extendFunc("opponentsUnit", function() {
        // Rewritten to reverse the ally/foe identification with reverse flag
        return NEW._origReversedUnit.call(this, "opponents", "friends");
        //
    }); // v1.00a - v1.00a

    extendFunc("setConfusion", function() {
        // Added to let battlers with reverse flag to use all available skills
        if (this.subject().isConfusionEdit("reverse")) return;
        //
        ORIG.setConfusion.apply(this, arguments);
    }); // v1.00a - v1.00a

    extendFunc("isValid", function() {
        // Rewritten to ensure the target list won't be empty due to excludeSelf
        if (!ORIG.isValid.apply(this, arguments)) return false;
        if (!this.isForOpponent() && !this.isForFriend()) return true;
        return !this.makeTargets().isEmpty();
        //
    }); // v1.00a - v1.00a

    extendFunc("makeTargets", function() {
        // Added to make confusion targets with reverse notetags
        if (this.subject().isConfusionEdit("reverse")) {
            return this.repeatTargets(NEW._makeReversedTargets.call(this));
        } else return ORIG.makeTargets.apply(this, arguments);
        //
    }); // v1.00a - v1.00a

    extendFunc("confusionTarget", function() {
        // Rewritten to exclude the subject itself with the excludeSelf flag
        let target = ORIG.confusionTarget.apply(this, arguments);
        if (NEW._isExcludeSelf.call(this)) {
            const subject = this.subject();
            while (subject === target) {
                target = ORIG.confusionTarget.apply(this, arguments);
            }
        }
        return target;
        //
    }); // v1.00a - v1.00a

    extendFunc("targetsForOpponents", function() {
        // Rewritten to dry up codes that would be otherwise duplicated
        return NEW._confusionEditTargets.call(this, "targetsForOpponents");
        //
    }); // v1.00a - v1.00a

    extendFunc("targetsForFriends", function() {
        // Rewritten to dry up codes that would be otherwise duplicated
        return NEW._confusionEditTargets.call(this, "targetsForFriends");
        //
    }); // v1.00a - v1.00a

    /**
     * The this pointer is Game_Action.prototype
     * Nullipotent
     * @author DoubleX @since v1.00a @version v1.00a
     * @enum @param {string} orig - Name of function returning original units
     * @enum @param {string} reversed - Name of function returning reversed unit
     * @returns {Game_Unit} The original or the reversed unit for targets
     */
    NEW._origReversedUnit = function(orig, reversed) {
        // Returns the reversed allies/foes for reverse flag
        const subject = this.subject();
        if (this._forcing || !subject.isConfusionEdit("reverse")) {
            return ORIG[orig + "Unit"].apply(this, arguments);
        }
        switch (subject.confusionLevel()) {
            case 1: return ORIG[orig + "Unit"].apply(this, arguments);
            case 2: {
                const isOpponents = EC_GA._IS_CONFUSION_OPPONENTS_TARGET();
                const side = isOpponents ? orig : reversed;
                return ORIG[side + "Unit"].apply(this, arguments);
            } default: return ORIG[reversed + "Unit"].apply(this, arguments);
        }
        //
    }; // NEW._origReversedUnit

    /**
     * The this pointer is Game_Action.prototype
     * Nullipotent
     * @author DoubleX @since v1.00a @version v1.00a
     * @returns {[Game_Battler]} The list of reversed action targets
     */
    NEW._makeReversedTargets = function() {
        // Uses Autobattle with reversed ally/foe definition to mimic confusion
        if (this.isForOpponent()) return this.targetsForOpponents();
        return this.isForFriend() ? this.targetsForFriends() : [];
        //
    }; // NEW._makeReversedTargets

    /**
     * The this pointer is Game_Action.prototype
     * Nullipotent
     * @author DoubleX @since v1.00a @version v1.00a
     * @enum @param {string} funcName - targetsForOpponents/targetsForFriends
     * @returns {[Game_Battler]} The list of confusion edit targets
     */
    NEW._confusionEditTargets = function(funcName) {
        if (!NEW._isExcludeSelf.call(this)) {
            return ORIG[funcName].apply(this, arguments);
        } else return NEW._targetsForReversedExcludeSelf.call(this, funcName);
    }; // NEW._confusionEditTargets

    /**
     * The this pointer is Game_Action.prototype
     * Nullipotent
     * @author DoubleX @since v1.00a @version v1.00a
     * @returns {boolean} Whether the target should exclude the subject
     */
    NEW._isExcludeSelf = function() {
        if (this.isForUser() || !this.isForOne()) return false;
        const subject = this.subject(), friends = this.friendsUnit().members();
        // Exclude self won't be applied if there's only 1 possible target
        if (friends.length <= 1 && friends.includes(subject)) return false;
        const opponents = this.opponentsUnit().members();
        if (opponents.length <= 1 && opponents.includes(subject)) return false;
        //
        return subject.isConfusionEdit("excludeSelf");
    }; // NEW._isExcludeSelf

    /**
     * The this pointer is Game_Action.prototype
     * Nullipotent
     * @author DoubleX @since v1.00a @version v1.00a
     * @enum @param {string} funcName - targetsForOpponents/targetsForFriends
     * @returns {[Game_Battler]} The list of reversed targets excluding self
     */
    NEW._targetsForReversedExcludeSelf = function(funcName) {
        // Returns the target list with both reverse and excludeSelf flags
        const subject = this.subject(), i = subject.index();
        let targets;
        do {
          	targets = ORIG[funcName].apply(this, arguments).eraseElem(subject);
            // Prevents infinite loop by ensuring the subject won't be selected
            if (this._targetIndex === i) this._targetIndex--;
            //
        } while (targets.isEmpty());
        return targets;
        //
    }; // NEW._targetsForReversedExcludeSelf

})(Game_Action.prototype, DoubleX_RMMZ.Enhanced_Codebase,
        DoubleX_RMMZ.Confusion_Edit);

/*----------------------------------------------------------------------------
 *    # Edited class: Game_BattlerBase
 *      - Queries the confusion edit states by evaluating effective notetags
 *----------------------------------------------------------------------------*/

(($, MZ_EC) => {

    "use strict";

    /**
     * The this pointer is Game_BattlerBase.prototype
     * Nullipotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @enum @param {string} notetagName - reverse/excludeSelf
     * @returns {boolean} The queried notetag value of the 1st effective notetag
     */
    $.isConfusionEdit = function(notetagName) {
        if (!this.isConfused() || !this._states) return false;
        const notetags = MZ_EC.notetags(this, ["states"], "confusionEdit");
        // Only the 1st notetag can be effective
        const notetag_ = notetags.find(({ notetagType }) => {
            return notetagType === notetagName;
        });
        //
        return notetag_ && notetag_.pairs.get("func1").call(this);
    }; // $.isConfusionEdit

})(Game_BattlerBase.prototype, DoubleX_RMMZ.Enhanced_Codebase);

/*----------------------------------------------------------------------------
 *    # Edited class: Game_Actor
 *      - Makes autobattle instead of confusion actions for confusion edit
 *----------------------------------------------------------------------------*/

(($, MZ_EC, CE) => {

    "use strict";

    const $$ = Game_Battler.prototype;
    const { extendFunc, ORIG } = MZ_EC.setKlassContainer("Game_Actor", $, CE);

    extendFunc("makeActions", function() {
        // Added to let actors with the reverse flag to use all available skills
        if (this.isConfusionEdit("reverse")) {
            $$.makeActions.call(this);
            return this.makeAutoBattleActions();
        }
        //
        ORIG.makeActions.apply(this, arguments);
    }); // v1.00a - v1.00a

})(Game_Actor.prototype, DoubleX_RMMZ.Enhanced_Codebase,
        DoubleX_RMMZ.Confusion_Edit);

/*============================================================================*/

    const curMZECVer = DoubleX_RMMZ.Enhanced_Codebase.VERSIONS.plugin;
    const minMZECVer = "v0.00a";
    if (curMZECVer < minMZECVer) {
        console.warn(`The version of DoubleX RMMZ Enhanced Codebase is
                     ${curMZECVer} but should be at least ${minMZECVer}`);
    }

} else {

    console.warn(`DoubleX RMMZ Enhanced Codebase should be placed above
                 ${DoubleX_RMMZ.Confusion_Edit.PLUGIN_NAME}`);

} // if (DoubleX_RMMZ.Enhanced_Codebase)
