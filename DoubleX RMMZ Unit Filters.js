/*============================================================================
 *    ## Plugin Info
 *----------------------------------------------------------------------------
 *    # Plugin Name
 *      DoubleX RMMZ Unit Filters
 *----------------------------------------------------------------------------
 *    # Introduction
 *      1. Without any plugin, getting a member with specific conditions
 *         relative to the belonging unit, like finding the party member with
 *         the highest amount of hp, demands relatively heavy event setups,
 *         even with the aid of common events, which boost event reusability.
 *      2. With this plugin, the same can be done using several easy, simple
 *         and small script calls instead of writing several common events
 *         from scratch, thus further improving effectiveness and efficiency.
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
 *    # Prerequisites
 *      Abilities:
 *      1. Nothing special for most ordinary cases
 *      2. Little RMMZ plugin development proficiency to fully utilize this
 *         (Elementary Javascript exposures being able to write beginner codes
 *         up to 300LoC scale )
 *----------------------------------------------------------------------------
 *    # Author Notes
 *      1. This plugin's meant to be a convenience tool to facilitate the use
 *         of some unit filters that aren't already available from the default
 *         RMMZ codebase, so you're still supposed to write some Javascript
 *         codes with the aid of the new script calls provided by this plugin.
 *----------------------------------------------------------------------------
 *    # Links
 *      This Plugin:
 *      1. https://github.com/Double-X/DoubleX-RMMZ/blob/master/DoubleX%20RMMZ%20Unit%20Filters.js
 *      Posts:
 *      1. https://forums.rpgmakerweb.com/index.php?threads/doublex-rmmz-unit-filters.125807/
 *      2. https://www.rpgmakercentral.com/topic/42539-doublex-rmmz-unit-filters/
 *      3. https://www.save-point.org/thread-8144.html
 *      4. https://gdu.one/forums/topic/13614-doublex-rmmz-unit-filters/
 *      5. http://www.hbgames.org/forums/viewtopic.php?f=332&t=80282
 *      6. https://www.makerdevs.com/plugin/doublex-rmmz-unit-filters
 *      7. https://doublexrpgmaker.wordpress.com/2020/08/23/doublex-rmmz-unit-filters/
 *      8. https://www.patreon.com/posts/40758313
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
 *      { codebase: "1.0.0", plugin: "v1.00a" }(2020 Aug 23 GMT 0400):
 *      1. 1st version of this plugin finished
 *============================================================================*/
/*:
 * @url https://www.patreon.com/doublex
 * @target MZ
 * @plugindesc Versions: { codebase: "1.0.0", plugin: "v1.00a" }
 * Lets you use script calls to filter unit members with less codes and eventing
 *
 * @help
 *============================================================================
 *    ## Script Call Info
 *       Members refer to all members outside battles and battle members
 *       inside battles respectively
 *----------------------------------------------------------------------------
 *    # Battler manipulations
 *      1. isAnyStateAffected(stateIds)
 *         - Returns whether the battler involved has any state included by
 *           stateIds, which is a list of id of states
 *         - stateIds must be an Array of natural numbers
 *         - E.g.:
 *           $gameParty.members()[0].isAnyStateAffected([1, 2]) returns
 *           whether the 1st party member has any state with id 1 or 2
 *      2. isAllStatesAffected(stateIds)
 *         - Returns whether the battler involved has all states included by
 *           stateIds, which is a list of id of states
 *         - stateIds must be an Array of natural numbers
 *         - E.g.:
 *           $gameActors.actor(1).isAllStatesAffected([1, 2]) returns whether
 *           the actor with id 1 has all states with id 1 or 2
 *      3. isAnyBuffAffected(paramIds)
 *         - Returns whether the battler involved has any buff included by
 *           paramIds, which is a list of id of corresponding parameters
 *         - paramIds must be an Array of non negative numbers
 *         - E.g.:
 *           $gameParty.members()[0].isAnyBuffAffected([0, 1]) returns
 *           whether the 1st party member has any mhp or mmp buff
 *      4. isAllBuffsAffected(paramIds)
 *         - Returns whether the battler involved has all buffs included by
 *           paramIds, which is a list of id of corresponding parameters
 *         - paramIds must be an Array of non negative numbers
 *         - E.g.:
 *           $gameActors.actor(1).isAllBuffsAffected([0, 1]) returns whether
 *           the actor with id 1 has all mhp and mmp buffs
 *      5. isAnyDebuffAffected(paramIds)
 *         - Returns whether the battler involved has any debuff included by
 *           paramIds, which is a list of id of corresponding parameters
 *         - paramIds must be an Array of non negative numbers
 *         - E.g.:
 *           $gameParty.members()[0].isAnyDebuffAffected([0, 1]) returns
 *           whether the 1st party member has any mhp or mmp debuff
 *      6. isAllDebuffsAffected(paramIds)
 *         - Returns whether the battler involved has all debuffs included by
 *           paramIds, which is a list of id of corresponding parameters
 *         - paramIds must be an Array of non negative numbers
 *         - E.g.:
 *           $gameActors.actor(1).isAllDebuffsAffected([0, 1]) returns whether
 *           the actor with id 1 has all mhp and mmp debuffs
 *      7. hasAnySkill(skillIds)
 *         - Returns whether the battler involved has any skill included by
 *           skillIds, which is a list of id of corresponding skills
 *         - paramIds must be an Array of natural numbers
 *         - E.g.:
 *           $gameParty.members()[0].hasAnySkill([1, 2]) returns whether the
 *           1st party member has skill with id 1 or 2
 *      8. hasAllSkills(skillIds)
 *         - Returns whether the battler involved has all skills included by
 *           skillIds, which is a list of id of corresponding skills
 *         - paramIds must be an Array of natural numbers
 *         - E.g.:
 *           $gameActors.actor(1).hasAllSkills([1, 2]) returns whether the
 *           actor with id 1 has all skills with id 1 and 2
 *    # Unit manipulations
 *      1. memWithAnyState(stateIds)
 *         - Returns the list of members with any state included by stateIds,
 *           which is a list of id of states
 *         - The return value should be an Array of Game_Battler
 *         - stateIds must be an Array of natural numbers
 *         - E.g.:
 *           $gameParty.memWithAnyState([1, 2]) returns the list of party
 *           members with any state with id 1 or 2
 *      2. memWithAllStates(stateIds)
 *         - Returns the list of members with all states included by
 *           stateIds, which is a list of id of states
 *         - The return value should be an Array of Game_Battler
 *         - stateIds must be an Array of natural numbers
 *         - E.g.:
 *           $gameTroop.memWithAllStates([1, 2]) returns the list of troop
 *           members with all states with id 1 or 2
 *      3. memWithoutAnyState(stateIds)
 *         - Returns the list of members without any state included by
 *           stateIds, which is a list of id of states
 *         - The return value should be an Array of Game_Battler
 *         - stateIds must be an Array of natural numbers
 *         - E.g.:
 *           $gameParty.memWithoutAnyState([1, 2]) returns the list of party
 *           members without any state with id 1 or 2
 *      4. memWithoutAllStates(stateIds)
 *         - Returns the list of members without all states included by
 *           stateIds, which is a list of id of states
 *         - The return value should be an Array of Game_Battler
 *         - stateIds must be an Array of natural numbers
 *         - E.g.:
 *           $gameTroop.memWithoutAllStates([1, 2]) returns the list of troop
 *           members without all states with id 1 or 2
 *      5. memWithAnyBuff(paramIds)
 *         - Returns the list of members with any buff included by paramIds,
 *           which is a list of id of corresponding parameters
 *         - The return value should be an Array of Game_Battler
 *         - paramIds must be an Array of non negative numbers
 *         - E.g.:
 *           $gameParty.memWithAnyBuff([0, 1]) returns the list of party
 *           members with any hp or mp buff
 *      6. memWithAllBuffs(paramIds)
 *         - Returns the list of members with all buffs included by paramIds,
 *           which is a list of id of corresponding parameters
 *         - The return value should be an Array of Game_Battler
 *         - paramIds must be an Array of non negative numbers
 *         - E.g.:
 *           $gameTroop.memWithAllBuffs([0, 1]) returns the list of troop
 *           members with all hp and mp buffs
 *      7. memWithoutAnyBuff(paramIds)
 *         - Returns the list of members without any buff included by
 *           paramIds, which is a list of id of corresponding parameters
 *         - The return value should be an Array of Game_Battler
 *         - paramIds must be an Array of non negative numbers
 *         - E.g.:
 *           $gameParty.memWithoutAnyBuff([0, 1]) returns the list of party
 *           members without any hp or mp buff
 *      8. memWithoutAllBuffs(paramIds)
 *         - Returns the list of members without all buffs included by
 *           paramIds, which is a list of id of corresponding parameters
 *         - The return value should be an Array of Game_Battler
 *         - paramIds must be an Array of non negative numbers
 *         - E.g.:
 *           $gameTroop.memWithoutAllBuffs([0, 1]) returns the list of troop
 *           members without all hp and mp buffs
 *      9. memWithAnyDebuff(paramIds)
 *         - Returns the list of members with any debuff included by paramIds,
 *           which is a list of id of corresponding parameters
 *         - The return value should be an Array of Game_Battler
 *         - paramIds must be an Array of non negative numbers
 *         - E.g.:
 *           $gameParty.memWithAnyDebuff([0, 1]) returns the list of party
 *           members with any hp or mp debuff
 *      10. memWithAllDebuffs(paramIds)
 *         - Returns the list of members with all debuffs included by
 *           paramIds, which is a list of id of corresponding parameters
 *         - The return value should be an Array of Game_Battler
 *         - paramIds must be an Array of non negative numbers
 *         - E.g.:
 *           $gameTroop.memWithAllDebuffs([0, 1]) returns the list of troop
 *           members with all hp and mp debuffs
 *      11. memWithoutAnyDebuff(paramIds)
 *         - Returns the list of members without any debuff included by
 *           paramIds, which is a list of id of corresponding parameters
 *         - The return value should be an Array of Game_Battler
 *         - paramIds must be an Array of non negative numbers
 *         - E.g.:
 *           $gameParty.memWithoutAnyDebuff([0, 1]) returns the list of party
 *           members without any hp or mp debuff
 *      12. memWithoutAllDebuffs(paramIds)
 *         - Returns the list of members without all debuffs included by
 *           paramIds, which is a list of id of corresponding parameters
 *         - The return value should be an Array of Game_Battler
 *         - paramIds must be an Array of non negative numbers
 *         - E.g.:
 *           $gameTroop.memWithoutAllDebuffs([0, 1]) returns the list of troop
 *           members without all hp and mp debuffs
 *      13. memWithAnySkill(skillIds)
 *         - Returns the list of members with any skill included by skillIds,
 *           which is a list of id of corresponding skills
 *         - The return value should be an Array of Game_Battler
 *         - skillIds must be an Array of natural numbers
 *         - E.g.:
 *           $gameParty.memWithAnySkill([1, 2]) returns the list of party
 *           members with skill having id 1 or 2
 *      14. memWithAllSkills(skillIds)
 *         - Returns the list of members with all skills included by skillIds,
 *           which is a list of id of corresponding skills
 *         - The return value should be an Array of Game_Battler
 *         - skillIds must be an Array of natural numbers
 *         - E.g.:
 *           $gameTroop.memWithAllSkills([1, 2]) returns the list of troop
 *           members with skills having id 1 and 2
 *      15. memWithoutAnySkill(skillIds)
 *         - Returns the list of members without any skill included by
 *           skillIds, which is a list of id of corresponding skills
 *         - The return value should be an Array of Game_Battler
 *         - skillIds must be an Array of natural numbers
 *         - E.g.:
 *           $gameParty.memWithoutAnySkill([1, 2]) returns the list of party
 *           members without skills having id 1 nor 2
 *      16. memWithoutAllSkills(skillIds)
 *         - Returns the list of members without all skills included by
 *           skillIds, which is a list of id of corresponding skills
 *         - The return value should be an Array of Game_Battler
 *         - skillIds must be an Array of natural numbers
 *         - E.g.:
 *           $gameTroop.memWithoutAllSkills([1, 2]) returns the list of troop
 *           members without skills having id 1 and 2
 *      17. anyHighestStatMem(stats)
 *         - Returns the list of members whose values of
 *           parameters/ex-parameters/sp-parameters included by stats, which
 *           is a list of names of corresponding
 *           parameters/ex-parameters/sp-parameters, include those being the
 *           highest among the caller
 *         - The return value should be an Array of Game_Battler
 *         - stats must be an Array of strings as names of Game_Battler
 *           properties with the get function
 *         - E.g.:
 *           $gameParty.anyHighestStatMem(["hp", "mp"]) returns the list of
 *           party members with the highest amount of hp or mp among the party
 *      18. allHighestStatsMem(stats)
 *         - Returns the list of members whose values of
 *           parameters/ex-parameters/sp-parameters included by stats, which
 *           is a list of names of corresponding
 *           parameters/ex-parameters/sp-parameters, are all the highest among
 *           the caller
 *         - The return value should be an Array of Game_Battler
 *         - stats must be an Array of strings as names of Game_Battler
 *           properties with the get function
 *         - E.g.:
 *           $gameTroop.allHighestStatsMem(["hp", "mp"]) returns the list of
 *           troop members with the highest amount of hp and mp among the
 *           troop
 *      19. notAnyHighestStatMem(stats)
 *         - Returns the list of members whose values of
 *           parameters/ex-parameters/sp-parameters included by stats, which
 *           is a list of names of corresponding
 *           parameters/ex-parameters/sp-parameters, don't include those being
 *           the highest among the caller
 *         - The return value should be an Array of Game_Battler
 *         - stats must be an Array of strings as names of Game_Battler
 *           properties with the get function
 *         - E.g.:
 *           $gameParty.notAnyHighestStatMem(["hp", "mp"]) returns the list of
 *           party members with neither the highest amount of hp nor mp among
 *           the party
 *      20. notAllHighestStatsMem(stats)
 *         - Returns the list of members whose values of
 *           parameters/ex-parameters/sp-parameters included by stats, which
 *           is a list of names of corresponding
 *           parameters/ex-parameters/sp-parameters, aren't all the highest
 *           among the caller
 *         - The return value should be an Array of Game_Battler
 *         - stats must be an Array of strings as names of Game_Battler
 *           properties with the get function
 *         - E.g.:
 *           $gameTroop.notAllHighestStatsMem(["hp", "mp"]) returns the list
 *           of troop members without the highest amount of both hp and mp
 *           among the troop
 *      21. anyLowestStatMem(stats)
 *         - Returns the list of members whose values of
 *           parameters/ex-parameters/sp-parameters included by stats, which
 *           is a list of names of corresponding
 *           parameters/ex-parameters/sp-parameters, include those being the
 *           lowest among the caller
 *         - The return value should be an Array of Game_Battler
 *         - stats must be an Array of strings as names of Game_Battler
 *           properties with the get function
 *         - E.g.:
 *           $gameParty.anyLowestStatMem(["hp", "mp"]) returns the list of
 *           party members with the lowest amount of hp or mp among the party
 *      22. allLowestStatsMem(stats)
 *         - Returns the list of members whose values of
 *           parameters/ex-parameters/sp-parameters included by stats, which
 *           is a list of names of corresponding
 *           parameters/ex-parameters/sp-parameters, are all the lowest among
 *           the caller
 *         - The return value should be an Array of Game_Battler
 *         - stats must be an Array of strings as names of Game_Battler
 *           properties with the get function
 *         - E.g.:
 *           $gameTroop.allLowestStatsMem(["hp", "mp"]) returns the list of
 *           troop members with the lowest amount of hp and mp among the party
 *      23. notAnyLowestStatMem(stats)
 *         - Returns the list of members whose values of
 *           parameters/ex-parameters/sp-parameters included by stats, which
 *           is a list of names of corresponding
 *           parameters/ex-parameters/sp-parameters, don't include those being
 *           the lowest among the caller
 *         - The return value should be an Array of Game_Battler
 *         - stats must be an Array of strings as names of Game_Battler
 *           properties with the get function
 *         - E.g.:
 *           $gameParty.notAnyLowestStatMem(["hp", "mp"]) returns the list of
 *           party members with neither the lowest amount of hp nor mp among
 *           the party
 *      24. notAllLowestStatsMem(stats)
 *         - Returns the list of members whose values of
 *           parameters/ex-parameters/sp-parameters included by stats, which
 *           is a list of names of corresponding
 *           parameters/ex-parameters/sp-parameters, aren't all the lowest
 *           among the caller
 *         - The return value should be an Array of Game_Battler
 *         - stats must be an Array of strings as names of Game_Battler
 *           properties with the get function
 *         - E.g.:
 *           $gameTroop.notAllLowestStatsMem(["hp", "mp"]) returns the list of
 *           troop members without the lowest amount of both hp and mp among
 *           the troop
 *      25. anyAboveStatMem(stats, val)
 *         - Returns the list of members whose values of
 *           parameters/ex-parameters/sp-parameters included by stats, which
 *           is a list of names of corresponding
 *           parameters/ex-parameters/sp-parameters, include those above val
 *         - The return value should be an Array of Game_Battler
 *         - stats must be an Array of strings as names of Game_Battler
 *           properties with the get function
 *         - val must be a number
 *         - E.g.:
 *           $gameParty.anyAboveStatMem(["hp", "mp"], 100) returns the list of
 *           party members with the value of hp or mp above 100
 *      26. allAboveStatMem(stats, val)
 *         - Returns the list of members whose values of
 *           parameters/ex-parameters/sp-parameters included by stats, which
 *           is a list of names of corresponding
 *           parameters/ex-parameters/sp-parameters, are all above val
 *         - The return value should be an Array of Game_Battler
 *         - stats must be an Array of strings as names of Game_Battler
 *           properties with the get function
 *         - val must be a number
 *         - E.g.:
 *           $gameTroop.allAboveStatMem(["hp", "mp"], 100) returns the list of
 *           troop members with the value of hp and mp above 100
 *      27. anyBelowStatMem(stats, val)
 *         - Returns the list of members whose values of
 *           parameters/ex-parameters/sp-parameters included by stats, which
 *           is a list of names of corresponding
 *           parameters/ex-parameters/sp-parameters, include those below val
 *         - The return value should be an Array of Game_Battler
 *         - stats must be an Array of strings as names of Game_Battler
 *           properties with the get function
 *         - val must be a number
 *         - E.g.:
 *           $gameParty.anyBelowStatMem(["hp", "mp"], 100) returns the list of
 *           party members with the value of hp or mp below 100
 *      28. allBelowStatMem(stats, val)
 *         - Returns the list of members whose values of
 *           parameters/ex-parameters/sp-parameters included by stats, which
 *           is a list of names of corresponding
 *           parameters/ex-parameters/sp-parameters, are all below val
 *         - The return value should be an Array of Game_Battler
 *         - stats must be an Array of strings as names of Game_Battler
 *           properties with the get function
 *         - val must be a number
 *         - E.g.:
 *           $gameTroop.allBelowStatMem(["hp", "mp"], 100) returns the list of
 *           troop members with the value of hp and mp below 100
 *============================================================================
 */

var DoubleX_RMMZ = DoubleX_RMMZ || {};
// Separates the version numbers with the rest to make the former more clear
DoubleX_RMMZ.Unit_Filters = {
    VERSIONS: { codebase: "1.0.0", plugin: "v1.00a" }
}; // DoubleX_RMMZ.Enhanced_Codebase
//
Utils.checkRMVersion(DoubleX_RMMZ.Unit_Filters.VERSIONS.codebase);

/*============================================================================
 *    ## Plugin Implementations
 *       You need not edit this part as it's about how this plugin works
 *----------------------------------------------------------------------------
 *    # Plugin Support Info:
 *      1. Prerequisites
 *         - Little RMMZ plugin development proficiency to fully comprehend
 *           this plugin
 *           (Elementary Javascript exposures being able to write beginner
 *           codes up to 300LoC scale )
 *      2. Parameter/Return value of type * means it might be of any type
 *      3. Function signature with (**) means it might take any number of
 *         parameters of any type
 *      4. Supposedly nullable variables are marked with the _ suffix in their
 *         names(but they can be sure to be non null in some cases)
 *      5. Functions supposedly returning nullable values are marked with the
 *         _ suffix in their names(but their return values can be sure to be
 *         non null in some cases)
 *----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------
 *    # Edit class: Game_BattlerBase
 *      - Implements all the battler manipulation script calls
 *----------------------------------------------------------------------------*/

($ => {

    "use strict";

    /**
     * Script call/Nullipotent
     * @abstract @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {[id]} skillIds - The list of id of skills involved
     * @returns {boolean} Whether this battler has any of the specified skills
     */
    $.hasAnySkill = function(skillIds) { return false; };

    /**
     * Script call/Nullipotent
     * @abstract @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {[id]} skillIds - The list of id of skills involved
     * @returns {boolean} Whether this battler has all of the specified skills
     */
    $.hasAllSkills = function(skillIds) { return false; };

    /**
     * Script call/Nullipotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {[id]} stateIds - The list of id of states involved
     * @returns {boolean} Whether this battler has any of the specified states
     */
    $.isAnyStateAffected = function(stateIds) {
        return stateIds.some(this.isStateAffected, this);
    }; // $.isAnyStateAffected

    /**
     * Script call/Nullipotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {[id]} stateIds - The list of id of states involved
     * @returns {boolean} Whether this battler has all of the specified states
     */
    $.isAllStatesAffected = function(stateIds) {
        return stateIds.every(this.isStateAffected, this);
    }; // $.isAllStatesAffected

    /**
     * Script call/Nullipotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {[index]} paramIds - The list of id of parameters involved
     * @returns {boolean} Whether this battler has any of the specified buffs
     */
    $.isAnyBuffAffected = function(paramIds) {
        return paramIds.some(this.isBuffAffected, this);
    }; // $.isAnyBuffAffected

    /**
     * Script call/Nullipotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {[index]} paramIds - The list of id of parameters involved
     * @returns {boolean} Whether this battler has all of the specified buffs
     */
    $.isAllBuffsAffected = function(paramIds) {
        return paramIds.every(this.isBuffAffected, this);
    }; // $.isAllBuffsAffected

    /**
     * Script call/Nullipotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {[index]} paramIds - The list of id of parameters involved
     * @returns {boolean} Whether this battler has any of the specified debuffs
     */
    $.isAnyDebuffAffected = function(paramIds) {
        return paramIds.some(this.isDebuffAffected, this);
    }; // $.isAnyDebuffAffected

    /**
     * Script call/Nullipotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {[index]} paramIds - The list of id of parameters involved
     * @returns {boolean} Whether this battler has all of the specified debuffs
     */
    $.isAllDebuffsAffected = function(paramIds) {
        return paramIds.every(this.isDebuffAffected, this);
    }; // $.isAllDebuffsAffected

})(Game_BattlerBase.prototype);

/*----------------------------------------------------------------------------
 *    # Edit class: Game_Actor
 *      - Implements all the actor-specific battler manipulation script calls
 *----------------------------------------------------------------------------*/

($ => {

    "use strict";

    /**
     * Script call/Nullipotent
     * @author DoubleX @interface @override @since v1.00a @version v1.00a
     * @param {[number]} skillIds - The list of id of skills involved
     * @returns {boolean} Whether this actor has any of the specified skills
     */
    $.hasAnySkill = function(skillIds) {
        return skillIds.some(this.hasSkill, this);
    }; // $.hasAnySkill

    /**
     * Script call/Nullipotent     
     * @author DoubleX @interface @override @since v1.00a @version v1.00a
     * @param {[number]} skillIds - The list of id of skills involved
     * @returns {boolean} Whether this actor has all of the specified skills
     */
    $.hasAllSkills = function(skillIds) {
        return skillIds.every(this.hasSkill, this);
    }; // $.hasAllSkills

})(Game_Actor.prototype);

/*----------------------------------------------------------------------------
 *    # Edit class: Game_Enemy
 *      - Implements all the enemy-specific battler manipulation script calls
 *----------------------------------------------------------------------------*/

(($, UF) => {

    "use strict";

    const { new: NEW } = UF.Game_Enemy = { orig: {}, new: {} };

    /**
     * Script call/Nullipotent
     * @author DoubleX @interface @override @since v1.00a @version v1.00a
     * @param {[number]} skillIds - The list of id of skills involved
     * @returns {boolean} Whether this enemy has any of the specified skills
     */
    $.hasAnySkill = function(skillIds) {
        return NEW._hasFilteredSkills.call(this, skillIds, "some");
    }; // $.hasAnySkill

    /**
     * Script call/Nullipotent
     * @author DoubleX @interface @override @since v1.00a @version v1.00a
     * @param {[number]} skillIds - The list of id of skills involved
     * @returns {boolean} Whether this enemy has all of the specified skills
     */
    $.hasAllSkills = function(skillIds) {
        return NEW._hasFilteredSkills.call(this, skillIds, "every");
    }; // $.hasAllSkills

    /**
     * Nullipotent
     * @author DoubleX @since v1.00a @version v1.00a
     * @param {[number]} skillIds - The list of id of skills involved
     * @enum @param {string} quantifier - some for any skill/every for all skill
     * @returns {boolean} Whether this enemy passes specified skill filtering
     */
    NEW._hasFilteredSkills = function(skillIds, quantifier) {
        // Optimized to use an O(n) rather than an O(n ^ 2) algorithm
        const actSkillIds = NEW._actSkillIds.call(this);
        return skillIds[quantifier](skillId => actSkillIds.has(skillId));
        //
    }; // NEW._hasFilteredSkills

    NEW._ACCUM_ACT_SKILL_IDS = (accumActSkillIds, { skillId }) => {
        accumActSkillIds.set(skillId, true);
        return accumActSkillIds;
    }; // NEW._ACCUM_ACT_SKILL_IDS
    /**
     * Nullipotent
     * @author DoubleX @since v1.00a @version v1.00a
     * @returns {Map[id, boolean]} The mapping of all enemy action skill ids
     */
    NEW._actSkillIds = function() {
        return this.enemy().actions.reduce(NEW._ACCUM_ACT_SKILL_IDS, new Map());
    }; // NEW._actSkillIds

})(Game_Enemy.prototype, DoubleX_RMMZ.Unit_Filters);

/*----------------------------------------------------------------------------
 *    # Edit class: Game_Unit
 *      - Implements all the unit manipulation script calls
 *----------------------------------------------------------------------------*/

(($, UF) => {

    "use strict";

    const { new: NEW } = UF.Game_Unit = { orig: {}, new: {} };

    NEW._MEM_WITH_COND = (cond, ids, mem) => mem[cond](ids);
    NEW._MEM_WTHOUT_COND = (cond, ids, mem) => !mem[cond](ids);
    NEW._ASCENDING_SORT = (a, b) => a - b;
    NEW._DESCENDING_SORT = (a, b) => b - a;
    [NEW._EQUALS, NEW._NOT_EQUALS] = [(a, b) => a === b, (a, b) => a !== b];
    NEW._IS_GREATER_THAN = (a, b) => a > b, NEW._IS_LESS_THAN = (a, b) => a < b;

    NEW._MEM_WITH_ANY_STATE = 
            NEW._MEM_WITH_COND.bind(undefined, "isAnyStateAffected");
    /**
     * Script call/Nullipotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {[id]} stateIds - The list of id of states involved
     * @returns {[Game_Batler]} The list of requested unit members
     */
    $.memWithAnyState = function(stateIds) {
        return NEW._filteredMems.call(this, mem => {
            return NEW._MEM_WITH_ANY_STATE(stateIds, mem);
        });
    }; // $.memWithAnyState

    NEW._MEM_WITH_ALL_STATES = 
            NEW._MEM_WITH_COND.bind(undefined, "isAllStatesAffected");
    /**
     * Script call/Nullipotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {[id]} stateIds - The list of id of states involved
     * @returns {[Game_Batler]} The list of requested unit members
     */
    $.memWithAllStates = function(stateIds) {
        return NEW._filteredMems.call(this, mem => {
            return NEW._MEM_WITH_ALL_STATES(stateIds, mem);
        });
    }; // $.memWithAllStates

    NEW._MEM_WITHOUT_ANY_STATE = 
            NEW._MEM_WTHOUT_COND.bind(undefined, "isAnyStateAffected");
    /**
     * Script call/Nullipotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {[id]} stateIds - The list of id of states involved
     * @returns {[Game_Batler]} The list of requested unit members
     */
    $.memWithoutAnyState = function(stateIds) {
        return NEW._filteredMems.call(this, mem => {
            return NEW._MEM_WITHOUT_ANY_STATE(stateIds, mem);
        });
    }; // $.memWithoutAnyState

    NEW._MEM_WITHOUT_ALL_STATES = 
            NEW._MEM_WTHOUT_COND.bind(undefined, "isAllStatesAffected");
    /**
     * Script call/Nullipotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {[id]} stateIds - The list of id of states involved
     * @returns {[Game_Batler]} The list of requested unit members
     */
    $.memWithoutAllStates = function(stateIds) {
        return NEW._filteredMems.call(this, mem => {
            return NEW._MEM_WITHOUT_ALL_STATES(stateIds, mem);
        });
    }; // $.memWithoutAllStates

    NEW._MEM_WITH_ANY_BUFF = 
            NEW._MEM_WITH_COND.bind(undefined, "isAnyBuffAffected");
    /**
     * Script call/Nullipotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {[index]} paramIds - The list of id of parameters involved
     * @returns {[Game_Batler]} The list of requested unit members
     */
    $.memWithAnyBuff = function(paramIds) {
        return NEW._filteredMems.call(this, mem => {
            return NEW._MEM_WITH_ANY_BUFF(paramIds, mem);
        });
    }; // $.memWithAnyBuff

    NEW._MEM_WITH_ALL_BUFFS = 
            NEW._MEM_WITH_COND.bind(undefined, "isAllBuffsAffected");
    /**
     * Script call/Nullipotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {[index]} paramIds - The list of id of parameters involved
     * @returns {[Game_Batler]} The list of requested unit members
     */
    $.memWithAllBuffs = function(paramIds) {
        return NEW._filteredMems.call(this, mem => {
            return NEW._MEM_WITH_ALL_BUFFS(paramIds, mem);
        });
    }; // $.memWithAllBuffs

    NEW._MEM_WITHOUT_ANY_BUFF = 
            NEW._MEM_WTHOUT_COND.bind(undefined, "isAnyBuffAffected");
    /**
     * Script call/Nullipotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {[index]} paramIds - The list of id of parameters involved
     * @returns {[Game_Batler]} The list of requested unit members
     */
    $.memWithoutAnyBuff = function(paramIds) {
        return NEW._filteredMems.call(this, mem => {
            return NEW._MEM_WITHOUT_ANY_BUFF(paramIds, mem);
        });
    }; // $.memWithoutAnyBuff

    NEW._MEM_WITHOUT_ALL_BUFFS = 
            NEW._MEM_WTHOUT_COND.bind(undefined, "isAllBuffsAffected");
    /**
     * Script call/Nullipotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {[index]} paramIds - The list of id of parameters involved
     * @returns {[Game_Batler]} The list of requested unit members
     */
    $.memWithoutAllBuffs = function(paramIds) {
        return NEW._filteredMems.call(this, mem => {
            return NEW._MEM_WITHOUT_ALL_BUFFS(paramIds, mem);
        });
    }; // $.memWithoutAllBuffs

    NEW._MEM_WITH_ANY_DEBUFF = 
            NEW._MEM_WITH_COND.bind(undefined, "isAnyDebuffAffected");
    /**
     * Script call/Nullipotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {[index]} paramIds - The list of id of parameters involved
     * @returns {[Game_Batler]} The list of requested unit members
     */
    $.memWithAnyDebuff = function(paramIds) {
        return NEW._filteredMems.call(this, mem => {
            return NEW._MEM_WITH_ANY_DEBUFF(paramIds, mem);
        });
    }; // $.memWithAnyDebuff

    NEW._MEM_WITH_ALL_DEBUFFS = 
            NEW._MEM_WITH_COND.bind(undefined, "isAllDebuffsAffected");
    /**
     * Script call/Nullipotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {[index]} paramIds - The list of id of parameters involved
     * @returns {[Game_Batler]} The list of requested unit members
     */
    $.memWithAllDebuffs = function(paramIds) {
        return NEW._filteredMems.call(this, mem => {
            return NEW._MEM_WITH_ALL_DEBUFFS(paramIds, mem);
        });
    }; // $.memWithAllDebuffs

    NEW._MEM_WITHOUT_ANY_DEBUFF = 
            NEW._MEM_WTHOUT_COND.bind(undefined, "isAnyDebuffAffected");
    /**
     * Script call/Nullipotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {[index]} paramIds - The list of id of parameters involved
     * @returns {[Game_Batler]} The list of requested unit members
     */
    $.memWithoutAnyDebuff = function(paramIds) {
        return NEW._filteredMems.call(this, mem => {
            return NEW._MEM_WITHOUT_ANY_DEBUFF(paramIds, mem);
        });
    }; // $.memWithoutAnyDebuff

    NEW._MEM_WITHOUT_ALL_DEBUFFS = 
            NEW._MEM_WTHOUT_COND.bind(undefined, "isAllDebuffsAffected");
    /**
     * Script call/Nullipotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {[index]} paramIds - The list of id of parameters involved
     * @returns {[Game_Batler]} The list of requested unit members
     */
    $.memWithoutAllDebuffs = function(paramIds) {
        return NEW._filteredMems.call(this, mem => {
            return NEW._MEM_WITHOUT_ALL_DEBUFFS(paramIds, mem);
        });
    }; // $.memWithoutAllDebuffs

    NEW._MEM_WITH_ANY_SKILL = 
            NEW._MEM_WITH_COND.bind(undefined, "hasAnySkill");
    /**
     * Script call/Nullipotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {[id]} skillIds - The list of id of skills involved
     * @returns {[Game_Batler]} The list of requested unit members
     */
    $.memWithAnySkill = function(skillIds) {
        return NEW._filteredMems.call(this, mem => {
            return NEW._MEM_WITH_ANY_SKILL(skillIds, mem);
        });
    }; // $.memWithAnySkill

    NEW._MEM_WITH_ALL_SKILLS = 
            NEW._MEM_WITH_COND.bind(undefined, "hasAllSkills");
    /**
     * Script call/Nullipotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {[id]} skillIds - The list of id of skills involved
     * @returns {[Game_Batler]} The list of requested unit members
     */
    $.memWithAllSkills = function(skillIds) {
        return NEW._filteredMems.call(this, mem => {
            return NEW._MEM_WITH_ALL_SKILLS(skillIds, mem);
        });
    }; // $.memWithAllSkills

    NEW._MEM_WITHOUT_ANY_SKILL = 
            NEW._MEM_WTHOUT_COND.bind(undefined, "hasAnySkill");
    /**
     * Script call/Nullipotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {[id]} skillIds - The list of id of skills involved
     * @returns {[Game_Batler]} The list of requested unit members
     */
    $.memWithoutAnySkill = function(skillIds) {
        return NEW._filteredMems.call(this, mem => {
            return NEW._MEM_WITHOUT_ANY_SKILL(skillIds, mem);
        });
    }; // $.memWithoutAnySkill

    NEW._MEM_WITHOUT_ALL_SKILLS = 
            NEW._MEM_WTHOUT_COND.bind(undefined, "hasAllSkills");
    /**
     * Script call/Nullipotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {[id]} skillIds - The list of id of skills involved
     * @returns {[Game_Batler]} The list of requested unit members
     */
    $.memWithoutAllSkills = function(skillIds) {
        return NEW._filteredMems.call(this, mem => {
            return NEW._MEM_WITHOUT_ALL_SKILLS(skillIds, mem);
        });
    }; // $.memWithoutAllSkills

    /**
     * Script call/Nullipotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {[string]} stats - The list of names of stats involved
     * @returns {[Game_Batler]} The list of requested unit members
     */
    $.anyHighestStatMem = function(stats) {
        return NEW._statFilteredMem.call(
                this, NEW._DESCENDING_SORT, NEW._EQUALS, "some", stats);
    }; // $.anyHighestStatMem

    /**
     * Script call/Nullipotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {[string]} stats - The list of names of stats involved
     * @returns {[Game_Batler]} The list of requested unit members
     */
    $.allHighestStatsMem = function(stats) {
        return NEW._statFilteredMem.call(
                this, NEW._DESCENDING_SORT, NEW._EQUALS, "every", stats);
    }; // $.allHighestStatsMem

    /**
     * Script call/Nullipotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {[string]} stats - The list of names of stats involved
     * @returns {[Game_Batler]} The list of requested unit members
     */
    $.notAnyHighestStatMem = function(stats) {
        return NEW._statFilteredMem.call(
                this, NEW._DESCENDING_SORT, NEW._NOT_EQUALS, "every", stats);
    }; // $.notAnyHighestStatMem

    /**
     * Script call/Nullipotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {[string]} stats - The list of names of stats involved
     * @returns {[Game_Batler]} The list of requested unit members
     */
    $.notAllHighestStatsMem = function(stats) {
        return NEW._statFilteredMem.call(
                this, NEW._DESCENDING_SORT, NEW._NOT_EQUALS, "some", stats);
    }; // $.notAllHighestStatsMem

    /**
     * Script call/Nullipotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {[string]} stats - The list of names of stats involved
     * @returns {[Game_Batler]} The list of requested unit members
     */
    $.anyLowestStatMem = function(stats) {
        return NEW._statFilteredMem.call(
                this, NEW._ASCENDING_SORT, NEW._EQUALS, "some", stats);
    }; // $.anyLowestStatMem

    /**
     * Script call/Nullipotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {[string]} stats - The list of names of stats involved
     * @returns {[Game_Batler]} The list of requested unit members
     */
    $.allLowestStatsMem = function(stats) {
        return NEW._statFilteredMem.call(
                this, NEW._ASCENDING_SORT, NEW._EQUALS, "every", stats);
    }; // $.allLowestStatsMem

    /**
     * Script call/Nullipotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {[string]} stats - The list of names of stats involved
     * @returns {[Game_Batler]} The list of requested unit members
     */
    $.notAnyLowestStatMem = function(stats) {
        return NEW._statFilteredMem.call(
                this, NEW._ASCENDING_SORT, NEW._NOT_EQUALS, "every", stats);
    }; // $.notAnyLowestStatMem

    /**
     * Script call/Nullipotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {[string]} stats - The list of names of stats involved
     * @returns {[Game_Batler]} The list of requested unit members
     */
    $.notAllLowestStatsMem = function(stats) {
        return NEW._statFilteredMem.call(
                this, NEW._ASCENDING_SORT, NEW._NOT_EQUALS, "some", stats);
    }; // $.notAllLowestStatsMem

    /**
     * Script call/Nullipotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {[string]} stats - The list of names of stats involved
     * @param {number} val - The value to be checked against
     * @returns {[Game_Batler]} The list of requested unit members
     */
    $.anyAboveStatMem = function(stats, val) {
        const func = NEW._IS_GREATER_THAN;
        return NEW._statValFilteredMem.call(this, func, "some", stats, val);
    }; // $.anyAboveStatMem

    /**
     * Script call/Nullipotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {[string]} stats - The list of names of stats involved
     * @param {number} val - The value to be checked against
     * @returns {[Game_Batler]} The list of requested unit members
     */
    $.allAboveStatMem = function(stats, val) {
        const func = NEW._IS_GREATER_THAN;
        return NEW._statValFilteredMem.call(this, func, "every", stats, val);
    }; // $.allAboveStatMem

    /**
     * Script call/Nullipotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {[string]} stats - The list of names of stats involved
     * @param {number} val - The value to be checked against
     * @returns {[Game_Batler]} The list of requested unit members
     */
    $.anyBelowStatMem = function(stats, val) {
        const func = NEW._IS_LESS_THAN;
        return NEW._statValFilteredMem.call(this, func, "some", stats, val);
    }; // $.anyBelowStatMem

    /**
     * Script call/Nullipotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {[string]} stats - The list of names of stats involved
     * @param {number} val - The value to be checked against
     * @returns {[Game_Batler]} The list of requested unit members
     */
    $.allBelowStatMem = function(stats, val) {
        const func = NEW._IS_LESS_THAN;
        return NEW._statValFilteredMem.call(this, func, "every", stats, val);
    }; // $.allBelowStatMem

    NEW._SORTED_STATS = (stats, mems, compareFunc) => {
        return stats.map(stat => mems.map(mem => mem[stat]).sort(compareFunc));
    }; // NEW._SORTED_STATS
    /**
     * Nullipotent
     * @author DoubleX @since v1.00a @version v1.00a
     * @param {(number, number) -> number} compareFunc - The compare function
     * @param {(number, number) -> boolean} filterFunc - The filter function
     * @enum @param {string} quantifier - some for any skill/every for all stat
     * @param {[string]} stats - The list of names of stats involved
     * @returns {[Game_Batler]} The list of requested unit members
     */
    NEW._statFilteredMem = function(compareFunc, filterFunc, quantifier, stats) {
        var mems = this.members();
        const sortedStats = NEW._SORTED_STATS(stats, mems, compareFunc);
        return mems.filter(mem => {
            return stats[quantifier]((stat, i) => {
                return filterFunc(mem[stat], sortedStats[i][0]);
            });
        });
    }; // NEW._statFilteredMem

    /**
     * Nullipotent
     * @author DoubleX @since v1.00a @version v1.00a
     * @param {(number, number) -> boolean} filterFunc - The filter function
     * @enum @param {string} quantifier - some for any skill/every for all stat
     * @param {[string]} stats - The list of names of stats involved
     * @param {number} val - The value to be checked against
     * @returns {[Game_Batler]} The list of requested unit members
     */
    NEW._statValFilteredMem = function(filterFunc, quantifier, stats, val) {
        return NEW._filteredMems.call(this, mem => {
            return stats[quantifier](stat => filterFunc(mem[stat], val));
        });
    }; // NEW._statValFilteredMem

    /**
     * Nullipotent
     * @author DoubleX @since v1.00a @version v1.00a
     * @param {(Game_Battler) -> boolean} filterFunc - Member filter function
     * @returns {[Game_Batler]} The list of requested unit members
     */
    NEW._filteredMems = function(filterFunc) {
        return this.members().filter(filterFunc);
    }; // NEW._filteredMems

})(Game_Unit.prototype, DoubleX_RMMZ.Unit_Filters);

/*============================================================================*/