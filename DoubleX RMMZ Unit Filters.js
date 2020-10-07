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
 *    # Prerequisites
 *      Abilities:
 *      1. Nothing special for most ordinary cases
 *      2. Little RMMZ plugin development proficiency to fully utilize this
 *         (Elementary Javascript exposures being able to write beginner codes
 *         up to 300LoC scale)
 *----------------------------------------------------------------------------
 *    # Author Notes
 *      1. This plugin's meant to be a convenience tool to facilitate the use
 *         of some unit filters that aren't already available from the default
 *         RMMZ codebase, so you're still supposed to write some Javascript
 *         codes with the aid of the new script calls provided by this plugin.
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
 *      1. https://www.youtube.com/watch?v=_6L8IJDiTcI
 *      This Plugin:
 *      1. https://github.com/Double-X/DoubleX-RMMZ/blob/master/DoubleX%20RMMZ%20Unit%20Filters.js
 *      Posts:
 *      1. https://forums.rpgmakerweb.com/index.php?threads/doublex-rmmz-unit-filters.125807/
 *      2. https://www.rpgmakercentral.com/topic/42539-doublex-rmmz-unit-filters/
 *      3. https://rpgmaker.net/engines/rmmz/utilities/242/
 *      4. https://www.save-point.org/thread-8144.html
 *      5. https://gdu.one/forums/topic/13614-doublex-rmmz-unit-filters/
 *      6. http://www.hbgames.org/forums/viewtopic.php?f=332&t=80282
 *      7. https://forum.chaos-project.com/index.php/topic,16063.msg197361.html
 *      8. https://doublexrpgmaker.wordpress.com/2020/08/23/doublex-rmmz-unit-filters/
 *      9. https://www.patreon.com/posts/40758313
 *      10. https://www.makerdevs.com/plugin/doublex-rmmz-unit-filters
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
 *      { codebase: "1.0.2", plugin: "v1.02a" }(2020 Oct 6 GMT 1600):
 *      1. Added the plugin query and command counterparts for the script
 *         calls of this plugin
 *      { codebase: "1.0.0", plugin: "v1.01a" }(2020 Aug 28 GMT 0000):
 *      1. Added the following battler manipulation script calls  -
 *         - hasAnyUsableSkill(skillIds)
 *         - hasAllUsableSkills(skillIds)
 *      2. Added the following unit manipulation script calls  -
 *         - memWithAnyUsableSkill(skillIds, mems)
 *         - memWithAllUsableSkills(skillIds, mems)
 *         - memWithoutAnyUsableSkill(skillIds, mems)
 *         - memWithoutAllUsableSkills(skillIds, mems)
 *      { codebase: "1.0.0", plugin: "v1.00a" }(2020 Aug 23 GMT 0400):
 *      1. 1st version of this plugin finished
 *============================================================================*/
/*:
 * @url https://www.patreon.com/doublex
 * @target MZ
 * @plugindesc Versions: { codebase: "1.0.0", plugin: "v1.01a" }
 * Lets you use script calls to filter unit members with less codes and eventing
 * @orderAfter DoubleX_RMMZ_Plugin_Query
 * @author DoubleX
 *
 * @command isAnyStateAffected
 * @desc Stores the battler.isAnyStateAffected(stateIds) result in
 * switch with id switchId
 * @arg side
 * @type select
 * @option Actor
 * @value actor
 * @option Enemy
 * @value enemy
 * @desc The side of the battler using the script call
 * @arg label
 * @type number
 * @desc The actor id/enemy index of the battler using the script call
 * @arg stateIds
 * @type number[]
 * @desc The list of ids of the states to be checked against
 * @arg switchId
 * @type number
 * @desc The id of the game switch to store the script call result
 *
 * @command isAllStatesAffected
 * @desc Stores the battler.isAllStatesAffected(stateIds) result in
 * switch with id switchId
 * @arg side
 * @type select
 * @option Actor
 * @value actor
 * @option Enemy
 * @value enemy
 * @desc The side of the battler using the script call
 * @arg label
 * @type number
 * @desc The actor id/enemy index of the battler using the script call
 * @arg stateIds
 * @type number[]
 * @desc The list of ids of the states to be checked against
 * @arg switchId
 * @type number
 * @desc The id of the game switch to store the script call result
 *
 * @command isAnyBuffAffected
 * @desc Stores the battler.isAnyBuffAffected(paramIds) result in
 * switch with id switchId
 * @arg side
 * @type select
 * @option Actor
 * @value actor
 * @option Enemy
 * @value enemy
 * @desc The side of the battler using the script call
 * @arg label
 * @type number
 * @desc The actor id/enemy index of the battler using the script call
 * @arg paramIds
 * @type number[]
 * @desc The list of ids of the parameters to be checked against
 * @arg switchId
 * @type number
 * @desc The id of the game switch to store the script call result
 *
 * @command isAllBuffsAffected
 * @desc Stores the battler.isAllBuffsAffected(paramIds) result in
 * switch with id switchId
 * @arg side
 * @type select
 * @option Actor
 * @value actor
 * @option Enemy
 * @value enemy
 * @desc The side of the battler using the script call
 * @arg label
 * @type number
 * @desc The actor id/enemy index of the battler using the script call
 * @arg paramIds
 * @type number[]
 * @desc The list of ids of the parameters to be checked against
 * @arg switchId
 * @type number
 * @desc The id of the game switch to store the script call result
 *
 * @command isAnyDebuffAffected
 * @desc Stores the battler.isAnyDebuffAffected(paramIds) result in
 * switch with id switchId
 * @arg side
 * @type select
 * @option Actor
 * @value actor
 * @option Enemy
 * @value enemy
 * @desc The side of the battler using the script call
 * @arg label
 * @type number
 * @desc The actor id/enemy index of the battler using the script call
 * @arg paramIds
 * @type number[]
 * @desc The list of ids of the parameters to be checked against
 * @arg switchId
 * @type number
 * @desc The id of the game switch to store the script call result
 *
 * @command isAllDebuffsAffected
 * @desc Stores the battler.isAllDebuffsAffected(paramIds) result
 * in switch with id switchId
 * @arg side
 * @type select
 * @option Actor
 * @value actor
 * @option Enemy
 * @value enemy
 * @desc The side of the battler using the script call
 * @arg label
 * @type number
 * @desc The actor id/enemy index of the battler using the script call
 * @arg paramIds
 * @type number[]
 * @desc The list of ids of the parameters to be checked against
 * @arg switchId
 * @type number
 * @desc The id of the game switch to store the script call result
 *
 * @command hasAnySkill
 * @desc Stores the battler.hasAnySkill(skillIds) result in switch
 * with id switchId
 * @arg side
 * @type select
 * @option Actor
 * @value actor
 * @option Enemy
 * @value enemy
 * @desc The side of the battler using the script call
 * @arg label
 * @type number
 * @desc The actor id/enemy index of the battler using the script call
 * @arg skillIds
 * @type skill[]
 * @desc The list of ids of the skills to be checked against
 * @arg switchId
 * @type number
 * @desc The id of the game switch to store the script call result
 *
 * @command hasAllSkills
 * @desc Stores the battler.hasAllSkills(skillIds) result in switch
 * with id switchId
 * @arg side
 * @type select
 * @option Actor
 * @value actor
 * @option Enemy
 * @value enemy
 * @desc The side of the battler using the script call
 * @arg label
 * @type number
 * @desc The actor id/enemy index of the battler using the script call
 * @arg skillIds
 * @type skill[]
 * @desc The list of ids of the skills to be checked against
 * @arg switchId
 * @type number
 * @desc The id of the game switch to store the script call result
 *
 * @command hasAnyUsableSkill
 * @desc Stores the battler.hasAnyUsableSkill(skillIds) result in
 * switch with id switchId
 * @arg side
 * @type select
 * @option Actor
 * @value actor
 * @option Enemy
 * @value enemy
 * @desc The side of the battler using the script call
 * @arg label
 * @type number
 * @desc The actor id/enemy index of the battler using the script call
 * @arg skillIds
 * @type skill[]
 * @desc The list of ids of the skills to be checked against
 * @arg switchId
 * @type number
 * @desc The id of the game switch to store the script call result
 *
 * @command hasAllUsableSkills
 * @desc Stores the battler.hasAllUsableSkills(skillIds) result in
 * switch with id switchId
 * @arg side
 * @type select
 * @option Actor
 * @value actor
 * @option Enemy
 * @value enemy
 * @desc The side of the battler using the script call
 * @arg label
 * @type number
 * @desc The actor id/enemy index of the battler using the script call
 * @arg skillIds
 * @type skill[]
 * @desc The list of ids of the skills to be checked against
 * @arg switchId
 * @type number
 * @desc The id of the game switch to store the script call result
 *
 * @command memWithAnyState
 * @desc Stores the unit.memWithAnyState(stateIds, mems) result in
 * variable with id varId
 * @arg side
 * @type select
 * @option Game Party
 * @value party
 * @option Game Troop
 * @value troop
 * @desc The side of the unit using the script call
 * @arg stateIds
 * @type number[]
 * @desc The list of ids of the states to be checked against
 * @arg varId
 * @type number
 * @desc The id of the game variable to store the script call result
 * @arg memFunc_
 * @type select
 * @option All members
 * @value members
 * @option All alive members
 * @value aliveMembers
 * @option All dead members
 * @value deadMembers
 * @option All movable members
 * @value movableMembers
 * @option Don't specify
 * @value
 * @desc The list of members in the unit to be filtered against
 *
 * @command memWithAllStates
 * @desc Stores the unit.memWithAllStates(stateIds, mems) result in
 * variable with id varId
 * @arg side
 * @type select
 * @option Game Party
 * @value party
 * @option Game Troop
 * @value troop
 * @desc The side of the unit using the script call
 * @arg stateIds
 * @type number[]
 * @desc The list of ids of the states to be checked against
 * @arg varId
 * @type number
 * @desc The id of the game variable to store the script call result
 * @arg memFunc_
 * @type select
 * @option All members
 * @value members
 * @option All alive members
 * @value aliveMembers
 * @option All dead members
 * @value deadMembers
 * @option All movable members
 * @value movableMembers
 * @option Don't specify
 * @value
 * @desc The list of members in the unit to be filtered against
 *
 * @command memWithoutAnyState
 * @desc Stores the unit.memWithoutAnyState(stateIds, mems) result
 * in variable with id varId
 * @arg side
 * @type select
 * @option Game Party
 * @value party
 * @option Game Troop
 * @value troop
 * @desc The side of the unit using the script call
 * @arg stateIds
 * @type number[]
 * @desc The list of ids of the states to be checked against
 * @arg varId
 * @type number
 * @desc The id of the game variable to store the script call result
 * @arg memFunc_
 * @type select
 * @option All members
 * @value members
 * @option All alive members
 * @value aliveMembers
 * @option All dead members
 * @value deadMembers
 * @option All movable members
 * @value movableMembers
 * @option Don't specify
 * @value
 * @desc The list of members in the unit to be filtered against
 *
 * @command memWithoutAllStates
 * @desc Stores the unit.memWithoutAllStates(stateIds, mems) result
 * in variable with id varId
 * @arg side
 * @type select
 * @option Game Party
 * @value party
 * @option Game Troop
 * @value troop
 * @desc The side of the unit using the script call
 * @arg stateIds
 * @type number[]
 * @desc The list of ids of the states to be checked against
 * @arg varId
 * @type number
 * @desc The id of the game variable to store the script call result
 * @arg memFunc_
 * @type select
 * @option All members
 * @value members
 * @option All alive members
 * @value aliveMembers
 * @option All dead members
 * @value deadMembers
 * @option All movable members
 * @value movableMembers
 * @option Don't specify
 * @value
 * @desc The list of members in the unit to be filtered against
 *
 * @command memWithAnyBuff
 * @desc Stores the unit.memWithAnyBuff(paramIds, mems) result in
 * variable with id varId
 * @arg side
 * @type select
 * @option Game Party
 * @value party
 * @option Game Troop
 * @value troop
 * @desc The side of the unit using the script call
 * @arg paramIds
 * @type number[]
 * @desc The list of ids of the parameters to be checked against
 * @arg varId
 * @type number
 * @desc The id of the game variable to store the script call result
 * @arg memFunc_
 * @type select
 * @option All members
 * @value members
 * @option All alive members
 * @value aliveMembers
 * @option All dead members
 * @value deadMembers
 * @option All movable members
 * @value movableMembers
 * @option Don't specify
 * @value
 * @desc The list of members in the unit to be filtered against
 *
 * @command memWithAllBuffs
 * @desc Stores the unit.memWithAllBuffs(paramIds, mems) result in
 * variable with id varId
 * @arg side
 * @type select
 * @option Game Party
 * @value party
 * @option Game Troop
 * @value troop
 * @desc The side of the unit using the script call
 * @arg paramIds
 * @type number[]
 * @desc The list of ids of the parameters to be checked against
 * @arg varId
 * @type number
 * @desc The id of the game variable to store the script call result
 * @arg memFunc_
 * @type select
 * @option All members
 * @value members
 * @option All alive members
 * @value aliveMembers
 * @option All dead members
 * @value deadMembers
 * @option All movable members
 * @value movableMembers
 * @option Don't specify
 * @value
 * @desc The list of members in the unit to be filtered against
 *
 * @command memWithoutAnyBuff
 * @desc Stores the unit.memWithoutAnyBuff(paramIds, mems) result
 * in variable with id varId
 * @arg side
 * @type select
 * @option Game Party
 * @value party
 * @option Game Troop
 * @value troop
 * @desc The side of the unit using the script call
 * @arg paramIds
 * @type number[]
 * @desc The list of ids of the parameters to be checked against
 * @arg varId
 * @type number
 * @desc The id of the game variable to store the script call result
 * @arg memFunc_
 * @type select
 * @option All members
 * @value members
 * @option All alive members
 * @value aliveMembers
 * @option All dead members
 * @value deadMembers
 * @option All movable members
 * @value movableMembers
 * @option Don't specify
 * @value
 * @desc The list of members in the unit to be filtered against
 *
 * @command memWithoutAllBuffs
 * @desc Stores the unit.memWithoutAllBuffs(paramIds, mems) result
 * in variable with id varId
 * @arg side
 * @type select
 * @option Game Party
 * @value party
 * @option Game Troop
 * @value troop
 * @desc The side of the unit using the script call
 * @arg paramIds
 * @type number[]
 * @desc The list of ids of the parameters to be checked against
 * @arg varId
 * @type number
 * @desc The id of the game variable to store the script call result
 * @arg memFunc_
 * @type select
 * @option All members
 * @value members
 * @option All alive members
 * @value aliveMembers
 * @option All dead members
 * @value deadMembers
 * @option All movable members
 * @value movableMembers
 * @option Don't specify
 * @value
 * @desc The list of members in the unit to be filtered against
 *
 * @command memWithAnyDebuff
 * @desc Stores the unit.memWithAnyDebuff(paramIds, mems) result
 * in variable with id varId
 * @arg side
 * @type select
 * @option Game Party
 * @value party
 * @option Game Troop
 * @value troop
 * @desc The side of the unit using the script call
 * @arg paramIds
 * @type number[]
 * @desc The list of ids of the parameters to be checked against
 * @arg varId
 * @type number
 * @desc The id of the game variable to store the script call result
 * @arg memFunc_
 * @type select
 * @option All members
 * @value members
 * @option All alive members
 * @value aliveMembers
 * @option All dead members
 * @value deadMembers
 * @option All movable members
 * @value movableMembers
 * @option Don't specify
 * @value
 * @desc The list of members in the unit to be filtered against
 *
 * @command memWithAllDebuffs
 * @desc Stores the unit.memWithAllDebuffs(paramIds, mems) result
 * in variable with id varId
 * @arg side
 * @type select
 * @option Game Party
 * @value party
 * @option Game Troop
 * @value troop
 * @desc The side of the unit using the script call
 * @arg paramIds
 * @type number[]
 * @desc The list of ids of the parameters to be checked against
 * @arg varId
 * @type number
 * @desc The id of the game variable to store the script call result
 * @arg memFunc_
 * @type select
 * @option All members
 * @value members
 * @option All alive members
 * @value aliveMembers
 * @option All dead members
 * @value deadMembers
 * @option All movable members
 * @value movableMembers
 * @option Don't specify
 * @value
 * @desc The list of members in the unit to be filtered against
 *
 * @command memWithoutAnyDebuff
 * @desc Stores the unit.memWithoutAnyDebuff(paramIds, mems) result
 * in variable with id varId
 * @arg side
 * @type select
 * @option Game Party
 * @value party
 * @option Game Troop
 * @value troop
 * @desc The side of the unit using the script call
 * @arg paramIds
 * @type number[]
 * @desc The list of ids of the parameters to be checked against
 * @arg varId
 * @type number
 * @desc The id of the game variable to store the script call result
 * @arg memFunc_
 * @type select
 * @option All members
 * @value members
 * @option All alive members
 * @value aliveMembers
 * @option All dead members
 * @value deadMembers
 * @option All movable members
 * @value movableMembers
 * @option Don't specify
 * @value
 * @desc The list of members in the unit to be filtered against
 *
 * @command memWithoutAllDebuffs
 * @desc Stores the unit.memWithoutAllDebuffs(paramIds, mems)
 * result in variable with id varId
 * @arg side
 * @type select
 * @option Game Party
 * @value party
 * @option Game Troop
 * @value troop
 * @desc The side of the unit using the script call
 * @arg paramIds
 * @type number[]
 * @desc The list of ids of the parameters to be checked against
 * @arg varId
 * @type number
 * @desc The id of the game variable to store the script call result
 * @arg memFunc_
 * @type select
 * @option All members
 * @value members
 * @option All alive members
 * @value aliveMembers
 * @option All dead members
 * @value deadMembers
 * @option All movable members
 * @value movableMembers
 * @option Don't specify
 * @value
 * @desc The list of members in the unit to be filtered against
 *
 * @command memWithAnySkill
 * @desc Stores the unit.memWithAnySkill(skillIds, mems) result in
 * variable with id varId
 * @arg side
 * @type select
 * @option Game Party
 * @value party
 * @option Game Troop
 * @value troop
 * @desc The side of the unit using the script call
 * @arg skillIds
 * @type skill[]
 * @desc The list of ids of the skills to be checked against
 * @arg varId
 * @type number
 * @desc The id of the game variable to store the script call result
 * @arg memFunc_
 * @type select
 * @option All members
 * @value members
 * @option All alive members
 * @value aliveMembers
 * @option All dead members
 * @value deadMembers
 * @option All movable members
 * @value movableMembers
 * @option Don't specify
 * @value
 * @desc The list of members in the unit to be filtered against
 *
 * @command memWithAllSkills
 * @desc Stores the unit.memWithAllSkills(skillIds, mems) result in
 * variable with id varId
 * @arg side
 * @type select
 * @option Game Party
 * @value party
 * @option Game Troop
 * @value troop
 * @desc The side of the unit using the script call
 * @arg skillIds
 * @type skill[]
 * @desc The list of ids of the skills to be checked against
 * @arg varId
 * @type number
 * @desc The id of the game variable to store the script call result
 * @arg memFunc_
 * @type select
 * @option All members
 * @value members
 * @option All alive members
 * @value aliveMembers
 * @option All dead members
 * @value deadMembers
 * @option All movable members
 * @value movableMembers
 * @option Don't specify
 * @value
 * @desc The list of members in the unit to be filtered against
 *
 * @command memWithoutAnySkill
 * @desc Stores the unit.memWithoutAnySkill(skillIds, mems) result
 * in variable with id varId
 * @arg side
 * @type select
 * @option Game Party
 * @value party
 * @option Game Troop
 * @value troop
 * @desc The side of the unit using the script call
 * @arg skillIds
 * @type skill[]
 * @desc The list of ids of the skills to be checked against
 * @arg varId
 * @type number
 * @desc The id of the game variable to store the script call result
 * @arg memFunc_
 * @type select
 * @option All members
 * @value members
 * @option All alive members
 * @value aliveMembers
 * @option All dead members
 * @value deadMembers
 * @option All movable members
 * @value movableMembers
 * @option Don't specify
 * @value
 * @desc The list of members in the unit to be filtered against
 *
 * @command memWithoutAllSkills
 * @desc Stores the unit.memWithoutAllSkills(skillIds, mems) result
 * in variable with id varId
 * @arg side
 * @type select
 * @option Game Party
 * @value party
 * @option Game Troop
 * @value troop
 * @desc The side of the unit using the script call
 * @arg skillIds
 * @type skill[]
 * @desc The list of ids of the skills to be checked against
 * @arg varId
 * @type number
 * @desc The id of the game variable to store the script call result
 * @arg memFunc_
 * @type select
 * @option All members
 * @value members
 * @option All alive members
 * @value aliveMembers
 * @option All dead members
 * @value deadMembers
 * @option All movable members
 * @value movableMembers
 * @option Don't specify
 * @value
 * @desc The list of members in the unit to be filtered against
 *
 * @command anyHighestStatMem
 * @desc Stores the unit.anyHighestStatMem(stats, mems) result in
 * variable with id varId
 * @arg side
 * @type select
 * @option Game Party
 * @value party
 * @option Game Troop
 * @value troop
 * @desc The side of the unit using the script call
 * @arg stats
 * @type string[]
 * @desc The list of the names of the getters of the battlers in the unit
 * @arg varId
 * @type number
 * @desc The id of the game variable to store the script call result
 * @arg memFunc_
 * @type select
 * @option All members
 * @value members
 * @option All alive members
 * @value aliveMembers
 * @option All dead members
 * @value deadMembers
 * @option All movable members
 * @value movableMembers
 * @option Don't specify
 * @value
 * @desc The list of members in the unit to be filtered against
 *
 * @command allHighestStatsMem
 * @desc Stores the unit.allHighestStatsMem(stats, mems) result in
 * variable with id varId
 * @arg side
 * @type select
 * @option Game Party
 * @value party
 * @option Game Troop
 * @value troop
 * @desc The side of the unit using the script call
 * @arg stats
 * @type string[]
 * @desc The list of the names of the getters of the battlers in the unit
 * @arg varId
 * @type number
 * @desc The id of the game variable to store the script call result
 * @arg memFunc_
 * @type select
 * @option All members
 * @value members
 * @option All alive members
 * @value aliveMembers
 * @option All dead members
 * @value deadMembers
 * @option All movable members
 * @value movableMembers
 * @option Don't specify
 * @value
 * @desc The list of members in the unit to be filtered against
 *
 * @command notAnyHighestStatMem
 * @desc Stores the unit.notAnyHighestStatMem(stats, mems) result
 * in variable with id varId
 * @arg side
 * @type select
 * @option Game Party
 * @value party
 * @option Game Troop
 * @value troop
 * @desc The side of the unit using the script call
 * @arg stats
 * @type string[]
 * @desc The list of the names of the getters of the battlers in the unit
 * @arg varId
 * @type number
 * @desc The id of the game variable to store the script call result
 * @arg memFunc_
 * @type select
 * @option All members
 * @value members
 * @option All alive members
 * @value aliveMembers
 * @option All dead members
 * @value deadMembers
 * @option All movable members
 * @value movableMembers
 * @option Don't specify
 * @value
 * @desc The list of members in the unit to be filtered against
 *
 * @command notAllHighestStatsMem
 * @desc Stores the unit.notAllHighestStatsMem(stats, mems) result
 * in variable with id varId
 * @arg side
 * @type select
 * @option Game Party
 * @value party
 * @option Game Troop
 * @value troop
 * @desc The side of the unit using the script call
 * @arg stats
 * @type string[]
 * @desc The list of the names of the getters of the battlers in the unit
 * @arg varId
 * @type number
 * @desc The id of the game variable to store the script call result
 * @arg memFunc_
 * @type select
 * @option All members
 * @value members
 * @option All alive members
 * @value aliveMembers
 * @option All dead members
 * @value deadMembers
 * @option All movable members
 * @value movableMembers
 * @option Don't specify
 * @value
 * @desc The list of members in the unit to be filtered against
 *
 * @command anyLowestStatMem
 * @desc Stores the unit.anyLowestStatMem(stats, mems) result in
 * variable with id varId
 * @arg side
 * @type select
 * @option Game Party
 * @value party
 * @option Game Troop
 * @value troop
 * @desc The side of the unit using the script call
 * @arg stats
 * @type string[]
 * @desc The list of the names of the getters of the battlers in the unit
 * @arg varId
 * @type number
 * @desc The id of the game variable to store the script call result
 * @arg memFunc_
 * @type select
 * @option All members
 * @value members
 * @option All alive members
 * @value aliveMembers
 * @option All dead members
 * @value deadMembers
 * @option All movable members
 * @value movableMembers
 * @option Don't specify
 * @value
 * @desc The list of members in the unit to be filtered against
 *
 * @command allLowestStatsMem
 * @desc Stores the unit.allLowestStatsMem(stats, mems) result in
 * variable with id varId
 * @arg side
 * @type select
 * @option Game Party
 * @value party
 * @option Game Troop
 * @value troop
 * @desc The side of the unit using the script call
 * @arg stats
 * @type string[]
 * @desc The list of the names of the getters of the battlers in the unit
 * @arg varId
 * @type number
 * @desc The id of the game variable to store the script call result
 * @arg memFunc_
 * @type select
 * @option All members
 * @value members
 * @option All alive members
 * @value aliveMembers
 * @option All dead members
 * @value deadMembers
 * @option All movable members
 * @value movableMembers
 * @option Don't specify
 * @value
 * @desc The list of members in the unit to be filtered against
 *
 * @command notAnyLowestStatMem
 * @desc Stores the unit.notAnyLowestStatMem(stats, mems) result in
 * variable with id varId
 * @arg side
 * @type select
 * @option Game Party
 * @value party
 * @option Game Troop
 * @value troop
 * @desc The side of the unit using the script call
 * @arg stats
 * @type string[]
 * @desc The list of the names of the getters of the battlers in the unit
 * @arg varId
 * @type number
 * @desc The id of the game variable to store the script call result
 * @arg memFunc_
 * @type select
 * @option All members
 * @value members
 * @option All alive members
 * @value aliveMembers
 * @option All dead members
 * @value deadMembers
 * @option All movable members
 * @value movableMembers
 * @option Don't specify
 * @value
 * @desc The list of members in the unit to be filtered against
 *
 * @command notAllLowestStatsMem
 * @desc Stores the unit.notAllLowestStatsMem(stats, mems) result
 * in variable with id varId
 * @arg side
 * @type select
 * @option Game Party
 * @value party
 * @option Game Troop
 * @value troop
 * @desc The side of the unit using the script call
 * @arg stats
 * @type string[]
 * @desc The list of the names of the getters of the battlers in the unit
 * @arg varId
 * @type number
 * @desc The id of the game variable to store the script call result
 * @arg memFunc_
 * @type select
 * @option All members
 * @value members
 * @option All alive members
 * @value aliveMembers
 * @option All dead members
 * @value deadMembers
 * @option All movable members
 * @value movableMembers
 * @option Don't specify
 * @value
 * @desc The list of members in the unit to be filtered against
 *
 * @command anyAboveStatMem
 * @desc Stores the unit.anyAboveStatMem(stats, val, mems) result
 * in variable with id varId
 * @arg side
 * @type select
 * @option Game Party
 * @value party
 * @option Game Troop
 * @value troop
 * @desc The side of the unit using the script call
 * @arg stats
 * @type string[]
 * @desc The list of the names of the getters of the battlers in the unit
 * @arg val
 * @type number
 * @decimals 9
 * @desc The value to be checked against the list of stats
 * @arg varId
 * @type number
 * @desc The id of the game variable to store the script call result
 * @arg memFunc_
 * @type select
 * @option All members
 * @value members
 * @option All alive members
 * @value aliveMembers
 * @option All dead members
 * @value deadMembers
 * @option All movable members
 * @value movableMembers
 * @option Don't specify
 * @value
 * @desc The list of members in the unit to be filtered against
 *
 * @command allAboveStatMem
 * @desc Stores the unit.allAboveStatMem(stats, val, mems) result
 * in variable with id varId
 * @arg side
 * @type select
 * @option Game Party
 * @value party
 * @option Game Troop
 * @value troop
 * @desc The side of the unit using the script call
 * @arg stats
 * @type string[]
 * @desc The list of the names of the getters of the battlers in the unit
 * @arg val
 * @type number
 * @decimals 9
 * @desc The value to be checked against the list of stats
 * @arg varId
 * @type number
 * @desc The id of the game variable to store the script call result
 * @arg memFunc_
 * @type select
 * @option All members
 * @value members
 * @option All alive members
 * @value aliveMembers
 * @option All dead members
 * @value deadMembers
 * @option All movable members
 * @value movableMembers
 * @option Don't specify
 * @value
 * @desc The list of members in the unit to be filtered against
 *
 * @command anyBelowStatMem
 * @desc Stores the unit.anyBelowStatMem(stats, val, mems) result
 * in variable with id varId
 * @arg side
 * @type select
 * @option Game Party
 * @value party
 * @option Game Troop
 * @value troop
 * @desc The side of the unit using the script call
 * @arg stats
 * @type string[]
 * @desc The list of the names of the getters of the battlers in the unit
 * @arg val
 * @type number
 * @decimals 9
 * @desc The value to be checked against the list of stats
 * @arg varId
 * @type number
 * @desc The id of the game variable to store the script call result
 * @arg memFunc_
 * @type select
 * @option All members
 * @value members
 * @option All alive members
 * @value aliveMembers
 * @option All dead members
 * @value deadMembers
 * @option All movable members
 * @value movableMembers
 * @option Don't specify
 * @value
 * @desc The list of members in the unit to be filtered against
 *
 * @command allBelowStatMem
 * @desc Stores the unit.allBelowStatMem(stats, val, mems) result
 * in variable with id varId
 * @arg side
 * @type select
 * @option Game Party
 * @value party
 * @option Game Troop
 * @value troop
 * @desc The side of the unit using the script call
 * @arg stats
 * @type string[]
 * @desc The list of the names of the getters of the battlers in the unit
 * @arg val
 * @type number
 * @decimals 9
 * @desc The value to be checked against the list of stats
 * @arg varId
 * @type number
 * @desc The id of the game variable to store the script call result
 * @arg memFunc_
 * @type select
 * @option All members
 * @value members
 * @option All alive members
 * @value aliveMembers
 * @option All dead members
 * @value deadMembers
 * @option All movable members
 * @value movableMembers
 * @option Don't specify
 * @value
 * @desc The list of members in the unit to be filtered against
 *
 * @command memWithAnyUsableSkill
 * @desc Stores the unit.memWithAnyUsableSkill(skillIds, mems)
 * result in variable with id varId
 * @arg side
 * @type select
 * @option Game Party
 * @value party
 * @option Game Troop
 * @value troop
 * @desc The side of the unit using the script call
 * @arg skillIds
 * @type skill[]
 * @desc The list of ids of the usable skills to be checked againt
 * @arg varId
 * @type number
 * @desc The id of the game variable to store the script call result
 * @arg memFunc_
 * @type select
 * @option All members
 * @value members
 * @option All alive members
 * @value aliveMembers
 * @option All dead members
 * @value deadMembers
 * @option All movable members
 * @value movableMembers
 * @option Don't specify
 * @value
 * @desc The list of members in the unit to be filtered against
 *
 * @command memWithAllUsableSkills
 * @desc Stores the unit.memWithAllUsableSkills(skillIds, mems)
 * result in variable with id varId
 * @arg side
 * @type select
 * @option Game Party
 * @value party
 * @option Game Troop
 * @value troop
 * @desc The side of the unit using the script call
 * @arg skillIds
 * @type skill[]
 * @desc The list of ids of the usable skills to be checked againt
 * @arg varId
 * @type number
 * @desc The id of the game variable to store the script call result
 * @arg memFunc_
 * @type select
 * @option All members
 * @value members
 * @option All alive members
 * @value aliveMembers
 * @option All dead members
 * @value deadMembers
 * @option All movable members
 * @value movableMembers
 * @option Don't specify
 * @value
 * @desc The list of members in the unit to be filtered against
 *
 * @command memWithoutAnyUsableSkill
 * @desc Stores the unit.memWithoutAnyUsableSkill(skillIds, mems)
 * result in variable with id varId
 * @arg side
 * @type select
 * @option Game Party
 * @value party
 * @option Game Troop
 * @value troop
 * @desc The side of the unit using the script call
 * @arg skillIds
 * @type skill[]
 * @desc The list of ids of the usable skills to be checked againt
 * @arg varId
 * @type number
 * @desc The id of the game variable to store the script call result
 * @arg memFunc_
 * @type select
 * @option All members
 * @value members
 * @option All alive members
 * @value aliveMembers
 * @option All dead members
 * @value deadMembers
 * @option All movable members
 * @value movableMembers
 * @option Don't specify
 * @value
 * @desc The list of members in the unit to be filtered against
 *
 * @command memWithoutAllUsableSkills
 * @desc Stores the unit.memWithoutAllUsableSkills(skillIds, mems)
 * result in variable with id varId
 * @arg side
 * @type select
 * @option Game Party
 * @value party
 * @option Game Troop
 * @value troop
 * @desc The side of the unit using the script call
 * @arg skillIds
 * @type skill[]
 * @desc The list of ids of the usable skills to be checked againt
 * @arg varId
 * @type number
 * @desc The id of the game variable to store the script call result
 * @arg memFunc_
 * @type select
 * @option All members
 * @value members
 * @option All alive members
 * @value aliveMembers
 * @option All dead members
 * @value deadMembers
 * @option All movable members
 * @value movableMembers
 * @option Don't specify
 * @value
 * @desc The list of members in the unit to be filtered against
 *
 * @help
 *============================================================================
 *    ## Script Call Info
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
 *      (v1.01a+)9. hasAnyUsableSkill(skillIds)
 *         - Returns whether the battler involved has any usable skill
 *           included by skillIds, which is a list of id of corresponding
 *           skills
 *         - paramIds must be an Array of natural numbers
 *         - E.g.:
 *           $gameParty.members()[0].hasAnyUsableSkill([1, 2]) returns whether
 *           the 1st party member has usable skill with id 1 or 2
 *      (v1.01a+)10. hasAllUsableSkills(skillIds)
 *          - Returns whether the battler involved has all usable skills
 *            included by skillIds, which is a list of id of corresponding
 *            skills
 *          - paramIds must be an Array of natural numbers
 *          - E.g.:
 *            $gameActors.actor(1).hasAllUsableSkills([1, 2]) returns whether
 *            the actor with id 1 has all usable skills with id 1 and 2
 *    # Unit manipulations
 *      1. memWithAnyState(stateIds, mems)
 *         - Returns the list of members with any state included by stateIds,
 *           which is a list of id of states, among all battlers included by
 *           mems, which is a list of battlers
 *         - The return value should be an Array of Game_Battler
 *         - stateIds must be an Array of natural numbers
 *         - mems must be an Array of Game_Battler
 *         - If mems isn't specified, it'll be default to all unit members
 *           outside battles and battle members inside battles respectively
 *         - E.g.:
 *           $gameParty.memWithAnyState([1, 2]) returns the list of party
 *           members with any state with id 1 or 2
 *      2. memWithAllStates(stateIds, mems)
 *         - Returns the list of members with all states included by
 *           stateIds, which is a list of id of states, among all battlers
 *           included by mems, which is a list of battlers
 *         - The return value should be an Array of Game_Battler
 *         - stateIds must be an Array of natural numbers
 *         - mems must be an Array of Game_Battler
 *         - If mems isn't specified, it'll be default to all unit members
 *           outside battles and battle members inside battles respectively
 *         - E.g.:
 *           $gameTroop.memWithAllStates([1, 2], $gameTroop.memWithAnyState([3, 4]))
 *           returns the list of troop members with all states with id 1 or 2
 *           among those with any state with id 3 or 4
 *      3. memWithoutAnyState(stateIds, mems)
 *         - Returns the list of members without any state included by
 *           stateIds, which is a list of id of states, among all battlers
 *           included by mems, which is a list of battlers
 *         - The return value should be an Array of Game_Battler
 *         - stateIds must be an Array of natural numbers
 *         - mems must be an Array of Game_Battler
 *         - If mems isn't specified, it'll be default to all unit members
 *           outside battles and battle members inside battles respectively
 *         - E.g.:
 *           $gameParty.memWithoutAnyState([1, 2]) returns the list of party
 *           members without any state with id 1 or 2
 *      4. memWithoutAllStates(stateIds, mems)
 *         - Returns the list of members without all states included by
 *           stateIds, which is a list of id of states, among all battlers
 *           included by mems, which is a list of battlers
 *         - The return value should be an Array of Game_Battler
 *         - stateIds must be an Array of natural numbers
 *         - mems must be an Array of Game_Battler
 *         - If mems isn't specified, it'll be default to all unit members
 *           outside battles and battle members inside battles respectively
 *         - E.g.:
 *           $gameTroop.memWithoutAllStates([1, 2], $gameTroop.memWithoutAnyState([3, 4]))
 *           returns the list of troop members without all states with id 1 or
 *           2 among those without any state with id 1 or 2
 *      5. memWithAnyBuff(paramIds, mems)
 *         - Returns the list of members with any buff included by paramIds,
 *           which is a list of id of corresponding parameters, among all
 *           battlers included by mems, which is a list of battlers
 *         - The return value should be an Array of Game_Battler
 *         - paramIds must be an Array of non negative numbers
 *         - mems must be an Array of Game_Battler
 *         - If mems isn't specified, it'll be default to all unit members
 *           outside battles and battle members inside battles respectively
 *         - E.g.:
 *           $gameParty.memWithAnyBuff([0, 1]) returns the list of party
 *           members with any mhp or mmp buff
 *      6. memWithAllBuffs(paramIds, mems)
 *         - Returns the list of members with all buffs included by paramIds,
 *           which is a list of id of corresponding parameters, among all
 *           battlers included by mems, which is a list of battlers
 *         - The return value should be an Array of Game_Battler
 *         - paramIds must be an Array of non negative numbers
 *         - mems must be an Array of Game_Battler
 *         - If mems isn't specified, it'll be default to all unit members
 *           outside battles and battle members inside battles respectively
 *         - E.g.:
 *           $gameTroop.memWithAllBuffs([0, 1], $gameTroop.memWithAnyBuff([2, 3]))
 *           returns the list of troop members with all mhp and mmp buffs
 *           among those with any atk or def buff
 *      7. memWithoutAnyBuff(paramIds, mems)
 *         - Returns the list of members without any buff included by
 *           paramIds, which is a list of id of corresponding parameters,
 *           among all battlers included by mems, which is a list of battlers
 *         - The return value should be an Array of Game_Battler
 *         - paramIds must be an Array of non negative numbers
 *         - mems must be an Array of Game_Battler
 *         - If mems isn't specified, it'll be default to all unit members
 *           outside battles and battle members inside battles respectively
 *         - E.g.:
 *           $gameParty.memWithoutAnyBuff([0, 1]) returns the list of party
 *           members without any mhp or mmp buff
 *      8. memWithoutAllBuffs(paramIds, mems)
 *         - Returns the list of members without all buffs included by
 *           paramIds, which is a list of id of corresponding parameters,
 *           among all battlers included by mems, which is a list of battlers
 *         - The return value should be an Array of Game_Battler
 *         - paramIds must be an Array of non negative numbers
 *         - mems must be an Array of Game_Battler
 *         - If mems isn't specified, it'll be default to all unit members
 *           outside battles and battle members inside battles respectively
 *         - E.g.:
 *           $gameTroop.memWithoutAllBuffs([0, 1], $gameTroop.memWithoutAnyBuff([2, 3]))
 *           returns the list of troop members without all mhp and mmp buffs
 *           among those without any atk or def buff
 *      9. memWithAnyDebuff(paramIds, mems)
 *         - Returns the list of members with any debuff included by paramIds,
 *           which is a list of id of corresponding parameters, among all
 *           battlers included by mems, which is a list of battlers
 *         - The return value should be an Array of Game_Battler
 *         - paramIds must be an Array of non negative numbers
 *         - mems must be an Array of Game_Battler
 *         - If mems isn't specified, it'll be default to all unit members
 *           outside battles and battle members inside battles respectively
 *         - E.g.:
 *           $gameParty.memWithAnyDebuff([0, 1]) returns the list of party
 *           members with any mhp or mmp debuff
 *      10. memWithAllDebuffs(paramIds, mems)
 *          - Returns the list of members with all debuffs included by
 *            paramIds, which is a list of id of corresponding parameters,
 *            among all battlers included by mems, which is a list of battlers
 *          - The return value should be an Array of Game_Battler
 *          - paramIds must be an Array of non negative numbers
 *          - mems must be an Array of Game_Battler
 *          - If mems isn't specified, it'll be default to all unit members
 *            outside battles and battle members inside battles respectively
 *          - E.g.:
 *            $gameTroop.memWithAllDebuffs([0, 1], $gameTroop.memWithAnyDebuff([2, 3]))
 *            returns the list of troop members with all mhp and mmp debuffs
 *            among those with any atk or def debuff
 *      11. memWithoutAnyDebuff(paramIds, mems)
 *          - Returns the list of members without any debuff included by
 *            paramIds, which is a list of id of corresponding parameters,
 *            among all battlers included by mems, which is a list of battlers
 *          - The return value should be an Array of Game_Battler
 *          - paramIds must be an Array of non negative numbers
 *          - mems must be an Array of Game_Battler
 *          - If mems isn't specified, it'll be default to all unit members
 *            outside battles and battle members inside battles respectively
 *          - E.g.:
 *            $gameParty.memWithoutAnyDebuff([0, 1]) returns the list of party
 *            members without any mhp or mmp debuff
 *      12. memWithoutAllDebuffs(paramIds, mems)
 *          - Returns the list of members without all debuffs included by
 *            paramIds, which is a list of id of corresponding parameters,
 *            among all battlers included by mems, which is a list of battlers
 *          - The return value should be an Array of Game_Battler
 *          - paramIds must be an Array of non negative numbers
 *          - mems must be an Array of Game_Battler
 *          - If mems isn't specified, it'll be default to all unit members
 *            outside battles and battle members inside battles respectively
 *          - E.g.:
 *            $gameTroop.memWithoutAllDebuffs([0, 1], $gameTroop.memWithoutAnyDebuff([2, 3]))
 *            returns the list of troop members without all mhp and mmp
 *            debuffs among those without any atk or def debuff
 *      13. memWithAnySkill(skillIds, mems)
 *          - Returns the list of members with any skill included by skillIds,
 *            which is a list of id of corresponding skills, among all
 *            battlers included by mems, which is a list of battlers
 *          - The return value should be an Array of Game_Battler
 *          - skillIds must be an Array of natural numbers
 *          - mems must be an Array of Game_Battler
 *          - If mems isn't specified, it'll be default to all unit members
 *            outside battles and battle members inside battles respectively
 *          - E.g.:
 *            $gameParty.memWithAnySkill([1, 2]) returns the list of party
 *            members with skill having id 1 or 2
 *      14. memWithAllSkills(skillIds, mems)
 *          - Returns the list of members with all skills included by
 *            skillIds, which is a list of id of corresponding skills, among
 *            all battlers included by mems, which is a list of battlers
 *          - The return value should be an Array of Game_Battler
 *          - skillIds must be an Array of natural numbers
 *          - mems must be an Array of Game_Battler
 *          - If mems isn't specified, it'll be default to all unit members
 *            outside battles and battle members inside battles respectively
 *          - E.g.:
 *            $gameTroop.memWithAllSkills([1, 2], $gameParty.memWithAnySkill([3, 4]))
 *            returns the list of troop members with skills having id 1 and 2
 *            among those with skill having id 3 or 4
 *      15. memWithoutAnySkill(skillIds, mems)
 *          - Returns the list of members without any skill included by
 *            skillIds, which is a list of id of corresponding skills, among
 *            all battlers included by mems, which is a list of battlers
 *          - The return value should be an Array of Game_Battler
 *          - skillIds must be an Array of natural numbers
 *          - mems must be an Array of Game_Battler
 *          - If mems isn't specified, it'll be default to all unit members
 *            outside battles and battle members inside battles respectively
 *          - E.g.:
 *            $gameParty.memWithoutAnySkill([1, 2]) returns the list of party
 *            members without skills having id 1 nor 2
 *      16. memWithoutAllSkills(skillIds, mems)
 *          - Returns the list of members without all skills included by
 *            skillIds, which is a list of id of corresponding skills, among
 *            all battlers included by mems, which is a list of battlers
 *          - The return value should be an Array of Game_Battler
 *          - skillIds must be an Array of natural numbers
 *          - mems must be an Array of Game_Battler
 *          - If mems isn't specified, it'll be default to all unit members
 *            outside battles and battle members inside battles respectively
 *          - E.g.:
 *            $gameTroop.memWithoutAllSkills([1, 2], $gameParty.memWithoutAnySkill([3, 4]))
 *            returns the list of troop members without skills having id 1 and
 *            2 among those without skill having id 3 or 4
 *      17. anyHighestStatMem(stats, mems)
 *          - Returns the list of members whose values of
 *            parameters/ex-parameters/sp-parameters included by stats, which
 *            is a list of names of corresponding
 *            parameters/ex-parameters/sp-parameters, include those being the
 *            highest among the caller, among all battlers included by mems,
 *            which is a list of battlers
 *          - The return value should be an Array of Game_Battler
 *          - stats must be an Array of strings as names of Game_Battler
 *            properties with the get function
 *          - mems must be an Array of Game_Battler
 *          - If mems isn't specified, it'll be default to all unit members
 *            outside battles and battle members inside battles respectively
 *          - E.g.:
 *            $gameParty.anyHighestStatMem(["hp", "mp"]) returns the list of
 *            party members with the highest amount of hp or mp among the party
 *      18. allHighestStatsMem(stats, mems)
 *          - Returns the list of members whose values of
 *            parameters/ex-parameters/sp-parameters included by stats, which
 *            is a list of names of corresponding
 *            parameters/ex-parameters/sp-parameters, are all the highest
 *            among the caller, among all battlers included by mems, which is
 *            a list of battlers
 *          - The return value should be an Array of Game_Battler
 *          - stats must be an Array of strings as names of Game_Battler
 *            properties with the get function
 *          - mems must be an Array of Game_Battler
 *          - If mems isn't specified, it'll be default to all unit members
 *            outside battles and battle members inside battles respectively
 *          - E.g.:
 *            $gameTroop.allHighestStatsMem(["hp", "mp"], $gameTroop.anyHighestStatMem(["mhp", "mmp"]))
 *            returns the list of troop members with the highest amount of hp
 *            and mp among those with the highest amount of mhp or mmp among
 *            the troop
 *      19. notAnyHighestStatMem(stats, mems)
 *          - Returns the list of members whose values of
 *            parameters/ex-parameters/sp-parameters included by stats, which
 *            is a list of names of corresponding
 *            parameters/ex-parameters/sp-parameters, don't include those
 *            being the highest among the caller, among all battlers included
 *            by mems, which is a list of battlers
 *          - The return value should be an Array of Game_Battler
 *          - stats must be an Array of strings as names of Game_Battler
 *            properties with the get function
 *          - mems must be an Array of Game_Battler
 *          - If mems isn't specified, it'll be default to all unit members
 *            outside battles and battle members inside battles respectively
 *          - E.g.:
 *            $gameParty.notAnyHighestStatMem(["hp", "mp"]) returns the list of
 *            party members with neither the highest amount of hp nor mp among
 *            the party
 *      20. notAllHighestStatsMem(stats, mems)
 *          - Returns the list of members whose values of
 *            parameters/ex-parameters/sp-parameters included by stats, which
 *            is a list of names of corresponding
 *            parameters/ex-parameters/sp-parameters, aren't all the highest
 *            among the caller, among all battlers included by mems, which is
 *            a list of battlers
 *          - The return value should be an Array of Game_Battler
 *          - stats must be an Array of strings as names of Game_Battler
 *            properties with the get function
 *          - mems must be an Array of Game_Battler
 *          - If mems isn't specified, it'll be default to all unit members
 *            outside battles and battle members inside battles respectively
 *          - E.g.:
 *            $gameTroop.notAllHighestStatsMem(["hp", "mp"], $gameTroop.notAnyHighestStatMem(["mhp", "mmp"]))
 *            returns the list of troop members without the highest amount of
 *            both hp and mp among those with neither the highest amount of
 *            mhp nor mmp among the troop
 *      21. anyLowestStatMem(stats, mems)
 *          - Returns the list of members whose values of
 *            parameters/ex-parameters/sp-parameters included by stats, which
 *            is a list of names of corresponding
 *            parameters/ex-parameters/sp-parameters, include those being the
 *            lowest among the caller, among all battlers included by mems,
 *            which is a list of battlers
 *          - The return value should be an Array of Game_Battler
 *          - stats must be an Array of strings as names of Game_Battler
 *            properties with the get function
 *          - mems must be an Array of Game_Battler
 *          - If mems isn't specified, it'll be default to all unit members
 *            outside battles and battle members inside battles respectively
 *          - E.g.:
 *            $gameParty.anyLowestStatMem(["hp", "mp"]) returns the list of
 *            party members with the lowest amount of hp or mp among the party
 *      22. allLowestStatsMem(stats, mems)
 *          - Returns the list of members whose values of
 *            parameters/ex-parameters/sp-parameters included by stats, which
 *            is a list of names of corresponding
 *            parameters/ex-parameters/sp-parameters, are all the lowest among
 *            the caller, among all battlers included by mems, which is a list
 *            of battlers
 *          - The return value should be an Array of Game_Battler
 *          - stats must be an Array of strings as names of Game_Battler
 *            properties with the get function
 *          - mems must be an Array of Game_Battler
 *          - If mems isn't specified, it'll be default to all unit members
 *            outside battles and battle members inside battles respectively
 *          - E.g.:
 *            $gameTroop.allLowestStatsMem(["hp", "mp"], $gameTroop.anyLowestStatMem(["mhp", "mmp"]))
 *            returns the list of troop members with the lowest amount of hp
 *            and mp among those with the lowest amount of mhp or mmp among
 *            the troop
 *      23. notAnyLowestStatMem(stats, mems)
 *          - Returns the list of members whose values of
 *            parameters/ex-parameters/sp-parameters included by stats, which
 *            is a list of names of corresponding
 *            parameters/ex-parameters/sp-parameters, don't include those
 *            being the lowest among the caller, among all battlers included
 *            by mems, which is a list of battlers
 *          - The return value should be an Array of Game_Battler
 *          - stats must be an Array of strings as names of Game_Battler
 *            properties with the get function
 *          - mems must be an Array of Game_Battler
 *          - If mems isn't specified, it'll be default to all unit members
 *            outside battles and battle members inside battles respectively
 *          - E.g.:
 *            $gameParty.notAnyLowestStatMem(["hp", "mp"]) returns the list of
 *            party members with neither the lowest amount of hp nor mp among
 *            the party
 *      24. notAllLowestStatsMem(stats, mems)
 *          - Returns the list of members whose values of
 *            parameters/ex-parameters/sp-parameters included by stats, which
 *            is a list of names of corresponding
 *            parameters/ex-parameters/sp-parameters, aren't all the lowest
 *            among the caller, among all battlers included by mems, which is
 *            a list of battlers
 *          - The return value should be an Array of Game_Battler
 *          - stats must be an Array of strings as names of Game_Battler
 *            properties with the get function
 *          - mems must be an Array of Game_Battler
 *          - If mems isn't specified, it'll be default to all unit members
 *            outside battles and battle members inside battles respectively
 *          - E.g.:
 *            $gameTroop.notAllLowestStatsMem(["hp", "mp"], $gameParty.notAnyLowestStatMem(["mhp", "mmp"]))
 *            returns the list of troop members without the lowest amount of
 *            both hp and mp among those with neither the lowest amount of mhp
 *            nor mmp among the troop
 *      25. anyAboveStatMem(stats, val, mems)
 *          - Returns the list of members whose values of
 *            parameters/ex-parameters/sp-parameters included by stats, which
 *            is a list of names of corresponding
 *            parameters/ex-parameters/sp-parameters, include those above val,
 *            among all battlers included by mems, which is a list of battlers
 *          - The return value should be an Array of Game_Battler
 *          - stats must be an Array of strings as names of Game_Battler
 *            properties with the get function
 *          - val must be a number
 *          - mems must be an Array of Game_Battler
 *          - If mems isn't specified, it'll be default to all unit members
 *            outside battles and battle members inside battles respectively
 *          - E.g.:
 *            $gameParty.anyAboveStatMem(["hp", "mp"], 100) returns the list
 *            of party members with the value of hp or mp above 100
 *      26. allAboveStatMem(stats, val, mems)
 *          - Returns the list of members whose values of
 *            parameters/ex-parameters/sp-parameters included by stats, which
 *            is a list of names of corresponding
 *            parameters/ex-parameters/sp-parameters, are all above val, among
 *            all battlers included by mems, which is a list of battlers
 *          - The return value should be an Array of Game_Battler
 *          - stats must be an Array of strings as names of Game_Battler
 *            properties with the get function
 *          - val must be a number
 *          - mems must be an Array of Game_Battler
 *          - If mems isn't specified, it'll be default to all unit members
 *            outside battles and battle members inside battles respectively
 *          - E.g.:
 *            $gameTroop.allAboveStatMem(["hp", "mp"], 100, $gameTroop.anyAboveStatMem(["mhp", "mmp"], 1000))
 *            returns the list of troop members with the value of hp and mp
 *            above 100 among those with the value of mhp or mmp above 1000
 *      27. anyBelowStatMem(stats, val, mems)
 *          - Returns the list of members whose values of
 *            parameters/ex-parameters/sp-parameters included by stats, which
 *            is a list of names of corresponding
 *            parameters/ex-parameters/sp-parameters, include those below val,
 *            among all battlers included by mems, which is a list of battlers
 *          - The return value should be an Array of Game_Battler
 *          - stats must be an Array of strings as names of Game_Battler
 *            properties with the get function
 *          - val must be a number
 *          - mems must be an Array of Game_Battler
 *          - If mems isn't specified, it'll be default to all unit members
 *            outside battles and battle members inside battles respectively
 *          - E.g.:
 *            $gameParty.anyBelowStatMem(["hp", "mp"], 100) returns the list
 *            of party members with the value of hp or mp below 100
 *      28. allBelowStatMem(stats, val, mems)
 *          - Returns the list of members whose values of
 *            parameters/ex-parameters/sp-parameters included by stats, which
 *            is a list of names of corresponding
 *            parameters/ex-parameters/sp-parameters, are all below val, among
 *            all battlers included by mems, which is a list of battlers
 *          - The return value should be an Array of Game_Battler
 *          - stats must be an Array of strings as names of Game_Battler
 *            properties with the get function
 *          - val must be a number
 *          - mems must be an Array of Game_Battler
 *          - If mems isn't specified, it'll be default to all unit members
 *            outside battles and battle members inside battles respectively
 *          - E.g.:
 *            $gameTroop.allBelowStatMem(["hp", "mp"], 100, $gameTroop.anyBelowStatMem(["mhp", "mmp"], 1000))
 *            returns the list of troop members with the value of hp and mp
 *            below 100 among those with the value of mhp or mmp below 1000
 *      (v1.01a+)29. memWithAnyUsableSkill(skillIds, mems)
 *          - Returns the list of members with any usable skill included by
 *            skillIds, which is a list of id of corresponding skills, among
 *            all battlers included by mems, which is a list of battlers
 *          - The return value should be an Array of Game_Battler
 *          - skillIds must be an Array of natural numbers
 *          - mems must be an Array of Game_Battler
 *          - If mems isn't specified, it'll be default to all unit members
 *            outside battles and battle members inside battles respectively
 *          - E.g.:
 *            $gameParty.memWithAnyUsableSkill([1, 2]) returns the list of
 *            party members with usable skill having id 1 or 2
 *      (v1.01a+)30. memWithAllUsableSkills(skillIds, mems)
 *          - Returns the list of members with all usable skills included by
 *            skillIds, which is a list of id of corresponding skills, among
 *            all battlers included by mems, which is a list of battlers
 *          - The return value should be an Array of Game_Battler
 *          - skillIds must be an Array of natural numbers
 *          - mems must be an Array of Game_Battler
 *          - If mems isn't specified, it'll be default to all unit members
 *            outside battles and battle members inside battles respectively
 *          - E.g.:
 *            $gameTroop.memWithAllUsableSkills([1, 2], $gameParty.memWithAnyUsableSkill([3, 4]))
 *            returns the list of troop members with usable skills having id 1
 *            and 2 among those with usable skill having id 3 or 4
 *      (v1.01a+)31. memWithoutAnyUsableSkill(skillIds, mems)
 *          - Returns the list of members without any usable skill included by
 *            skillIds, which is a list of id of corresponding skills, among
 *            all battlers included by mems, which is a list of battlers
 *          - The return value should be an Array of Game_Battler
 *          - skillIds must be an Array of natural numbers
 *          - mems must be an Array of Game_Battler
 *          - If mems isn't specified, it'll be default to all unit members
 *            outside battles and battle members inside battles respectively
 *          - E.g.:
 *            $gameParty.memWithoutAnyUsableSkill([1, 2]) returns the list of
 *            party members without usable skills having id 1 nor 2
 *      (v1.01a+)32. memWithoutAllUsableSkills(skillIds, mems)
 *          - Returns the list of members without all usable skills included
 *            by skillIds, which is a list of id of corresponding skills,
 *            among all battlers included by mems, which is a list of battlers
 *          - The return value should be an Array of Game_Battler
 *          - skillIds must be an Array of natural numbers
 *          - mems must be an Array of Game_Battler
 *          - If mems isn't specified, it'll be default to all unit members
 *            outside battles and battle members inside battles respectively
 *          - E.g.:
 *            $gameTroop.memWithoutAllUsableSkills([1, 2], $gameParty.memWithoutAnyUsableSkill([3, 4]))
 *            returns the list of troop members without usable skills having
 *            id 1 and 2 among those without usable skill having id 3 or 4
 *----------------------------------------------------------------------------
 *    ## (v1.02a+)Plugin Command Info
 *----------------------------------------------------------------------------
 *      1. isAnyStateAffected side label stateIds switchId
 *         - Stores the returned boolean result of the script call
 *           battler.isAnyStateAffected(stateIds) in the game switch with id
 *           switchId
 *         - battler is the battler identified by side and label
 *         - side is either actor or enemy
 *         - label is the actor id for side actor and troop member index for
 *           side enemy
 *         - stateIds is in the form of
 *           stateId1_stateId2_stateId3_stateIdI_stateIdN
 *      2. isAllStatesAffected side label stateIds switchId
 *         - Stores the returned boolean result of the script call
 *           battler.isAllStatesAffected(stateIds) in the game switch with id
 *           switchId
 *         - battler is the battler identified by side and label
 *         - side is either actor or enemy
 *         - label is the actor id for side actor and troop member index for
 *           side enemy
 *         - stateIds is in the form of
 *           stateId1_stateId2_stateId3_stateIdI_stateIdN
 *      3. isAnyBuffAffected side label paramIds switchId
 *         - Stores the returned boolean result of the script call
 *           battler.isAnyBuffAffected(paramIds) in the game switch with id
 *           switchId
 *         - battler is the battler identified by side and label
 *         - side is either actor or enemy
 *         - label is the actor id for side actor and troop member index for
 *           side enemy
 *         - paramIds is in the form of
 *           paramId1_paramId2_paramId3_paramIdI_paramIdN
 *      4. isAllBuffsAffected side label paramIds switchId
 *         - Stores the returned boolean result of the script call
 *           battler.isAllBuffsAffected(paramIds) in the game switch with id
 *           switchId
 *         - battler is the battler identified by side and label
 *         - side is either actor or enemy
 *         - label is the actor id for side actor and troop member index for
 *           side enemy
 *         - paramIds is in the form of
 *           paramId1_paramId2_paramId3_paramIdI_paramIdN
 *      5. isAnyDebuffAffected side label paramIds switchId
 *         - Stores the returned boolean result of the script call
 *           battler.isAnyDebuffAffected(paramIds) in the game switch with id
 *           switchId
 *         - battler is the battler identified by side and label
 *         - side is either actor or enemy
 *         - label is the actor id for side actor and troop member index for
 *           side enemy
 *         - paramIds is in the form of
 *           paramId1_paramId2_paramId3_paramIdI_paramIdN
 *      6. isAllDebuffsAffected side label paramIds switchId
 *         - Stores the returned boolean result of the script call
 *           battler.isAllDebuffsAffected(paramIds) in the game switch with id
 *           switchId
 *         - battler is the battler identified by side and label
 *         - side is either actor or enemy
 *         - label is the actor id for side actor and troop member index for
 *           side enemy
 *         - paramIds is in the form of
 *           paramId1_paramId2_paramId3_paramIdI_paramIdN
 *      7. hasAnySkill side label skillIds switchId
 *         - Stores the returned boolean result of the script call
 *           battler.hasAnySkill(skillIds) in the game switch with id switchId
 *         - battler is the battler identified by side and label
 *         - side is either actor or enemy
 *         - label is the actor id for side actor and troop member index for
 *           side enemy
 *         - skillIds is in the form of
 *           skillId1_skillId2_skillId3_skillIdI_skillIdN
 *      8. hasAllSkills side label skillIds switchId
 *         - Stores the returned boolean result of the script call
 *           battler.hasAllSkills(skillIds) in the game switch with id
 *           switchId
 *         - battler is the battler identified by side and label
 *         - side is either actor or enemy
 *         - label is the actor id for side actor and troop member index for
 *           side enemy
 *         - skillIds is in the form of
 *           skillId1_skillId2_skillId3_skillIdI_skillIdN
 *      9. hasAnyUsableSkill side label skillIds switchId
 *         - Stores the returned boolean result of the script call
 *           battler.hasAnyUsableSkill(skillIds) in the game switch with id
 *           switchId
 *         - battler is the battler identified by side and label
 *         - side is either actor or enemy
 *         - label is the actor id for side actor and troop member index for
 *           side enemy
 *         - skillIds is in the form of
 *           skillId1_skillId2_skillId3_skillIdI_skillIdN
 *      10. hasAllUsableSkills side label skillIds switchId
 *          - Stores the returned boolean result of the script call
 *            battler.hasAllUsableSkills(skillIds) in the game switch with id
 *            switchId
 *          - battler is the battler identified by side and label
 *          - side is either actor or enemy
 *          - label is the actor id for side actor and troop member index for
 *            side enemy
 *          - skillIds is in the form of
 *            skillId1_skillId2_skillId3_skillIdI_skillIdN
 *      11. memWithAnyState side stateIds varId memFunc_
 *          - Stores the returned list of battlers from the script call
 *            unit.memWithAnyState(stateIds, mems) in the game variable with
 *            id varId
 *          - unit is the unit identified by side
 *          - side is either party or troop
 *          - stateIds is in the form of
 *            stateId1_stateId2_stateId3_stateIdI_stateIdN
 *          - mems is the list of unit members returned by the method with
 *            name memFunc_, which is either of the following:
 *            i. members - All members of the unit
 *            ii. aliveMembers - All alive mnembers of the unit
 *            iii. deadMembers - All dead members of the unit
 *            iv. movableMembers - All movable members of the unit
 *            Not specifying memFunc_ is the same as not specifying mems
 *      12. memWithAllStates side stateIds varId memFunc_
 *          - Stores the returned list of battlers from the script call
 *            unit.memWithAllStates(stateIds, mems) in the game variable with
 *            id varId
 *          - unit is the unit identified by side
 *          - side is either party or troop
 *          - stateIds is in the form of
 *            stateId1_stateId2_stateId3_stateIdI_stateIdN
 *          - mems is the list of unit members returned by the method with
 *            name memFunc_, which is either of the following:
 *            i. members - All members of the unit
 *            ii. aliveMembers - All alive mnembers of the unit
 *            iii. deadMembers - All dead members of the unit
 *            iv. movableMembers - All movable members of the unit
 *            Not specifying memFunc_ is the same as not specifying mems
 *      13. memWithoutAnyState side stateIds varId memFunc_
 *          - Stores the returned list of battlers from the script call
 *            unit.memWithoutAnyState(stateIds, mems) in the game variable
 *            with id varId
 *          - unit is the unit identified by side
 *          - side is either party or troop
 *          - stateIds is in the form of
 *            stateId1_stateId2_stateId3_stateIdI_stateIdN
 *          - mems is the list of unit members returned by the method with
 *            name memFunc_, which is either of the following:
 *            i. members - All members of the unit
 *            ii. aliveMembers - All alive mnembers of the unit
 *            iii. deadMembers - All dead members of the unit
 *            iv. movableMembers - All movable members of the unit
 *            Not specifying memFunc_ is the same as not specifying mems
 *      14. memWithoutAllStates side stateIds varId memFunc_
 *          - Stores the returned list of battlers from the script call
 *            unit.memWithoutAllStates(stateIds, mems) in the game variable
 *            with id varId
 *          - unit is the unit identified by side
 *          - side is either party or troop
 *          - stateIds is in the form of
 *            stateId1_stateId2_stateId3_stateIdI_stateIdN
 *          - mems is the list of unit members returned by the method with
 *            name memFunc_, which is either of the following:
 *            i. members - All members of the unit
 *            ii. aliveMembers - All alive mnembers of the unit
 *            iii. deadMembers - All dead members of the unit
 *            iv. movableMembers - All movable members of the unit
 *            Not specifying memFunc_ is the same as not specifying mems
 *      15. memWithAnyBuff side paramIds varId memFunc_
 *          - Stores the returned list of battlers from the script call
 *            unit.memWithAnyBuff(paramIds, mems) in the game variable with id
 *            varId
 *          - unit is the unit identified by side
 *          - side is either party or troop
 *          - paramIds is in the form of
 *            paramId1_paramId2_paramId3_paramIdI_paramIdN
 *          - mems is the list of unit members returned by the method with
 *            name memFunc_, which is either of the following:
 *            i. members - All members of the unit
 *            ii. aliveMembers - All alive mnembers of the unit
 *            iii. deadMembers - All dead members of the unit
 *            iv. movableMembers - All movable members of the unit
 *            Not specifying memFunc_ is the same as not specifying mems
 *      16. memWithAllBuffs side paramIds varId memFunc_
 *          - Stores the returned list of battlers from the script call
 *            unit.memWithAllBuffs(paramIds, mems) in the game variable with
 *            id varId
 *          - unit is the unit identified by side
 *          - side is either party or troop
 *          - paramIds is in the form of
 *            paramId1_paramId2_paramId3_paramIdI_paramIdN
 *          - mems is the list of unit members returned by the method with
 *            name memFunc_, which is either of the following:
 *            i. members - All members of the unit
 *            ii. aliveMembers - All alive mnembers of the unit
 *            iii. deadMembers - All dead members of the unit
 *            iv. movableMembers - All movable members of the unit
 *            Not specifying memFunc_ is the same as not specifying mems
 *      17. memWithoutAnyBuff side paramIds varId memFunc_
 *          - Stores the returned list of battlers from the script call
 *            unit.memWithoutAnyBuff(paramIds, mems) in the game variable with
 *            id varId
 *          - unit is the unit identified by side
 *          - side is either party or troop
 *          - paramIds is in the form of
 *            paramId1_paramId2_paramId3_paramIdI_paramIdN
 *          - mems is the list of unit members returned by the method with
 *            name memFunc_, which is either of the following:
 *            i. members - All members of the unit
 *            ii. aliveMembers - All alive mnembers of the unit
 *            iii. deadMembers - All dead members of the unit
 *            iv. movableMembers - All movable members of the unit
 *            Not specifying memFunc_ is the same as not specifying mems
 *      18. memWithoutAllBuffs side paramIds varId memFunc_
 *          - Stores the returned list of battlers from the script call
 *            unit.memWithoutAllBuffs(paramIds, mems) in the game variable
 *            with id varId
 *          - unit is the unit identified by side
 *          - side is either party or troop
 *          - paramIds is in the form of
 *            paramId1_paramId2_paramId3_paramIdI_paramIdN
 *          - mems is the list of unit members returned by the method with
 *            name memFunc_, which is either of the following:
 *            i. members - All members of the unit
 *            ii. aliveMembers - All alive mnembers of the unit
 *            iii. deadMembers - All dead members of the unit
 *            iv. movableMembers - All movable members of the unit
 *            Not specifying memFunc_ is the same as not specifying mems
 *      19. memWithAnyDebuff side paramIds varId memFunc_
 *          - Stores the returned list of battlers from the script call
 *            unit.memWithAnyDebuff(paramIds, mems) in the game variable with
 *            id varId
 *          - unit is the unit identified by side
 *          - side is either party or troop
 *          - paramIds is in the form of
 *            paramId1_paramId2_paramId3_paramIdI_paramIdN
 *          - mems is the list of unit members returned by the method with
 *            name memFunc_, which is either of the following:
 *            i. members - All members of the unit
 *            ii. aliveMembers - All alive mnembers of the unit
 *            iii. deadMembers - All dead members of the unit
 *            iv. movableMembers - All movable members of the unit
 *            Not specifying memFunc_ is the same as not specifying mems
 *      20. memWithAllDebuffs side paramIds varId memFunc_
 *          - Stores the returned list of battlers from the script call
 *            unit.memWithAllDebuffs(paramIds, mems) in the game variable with
 *            id varId
 *          - unit is the unit identified by side
 *          - side is either party or troop
 *          - paramIds is in the form of
 *            paramId1_paramId2_paramId3_paramIdI_paramIdN
 *          - mems is the list of unit members returned by the method with
 *            name memFunc_, which is either of the following:
 *            i. members - All members of the unit
 *            ii. aliveMembers - All alive mnembers of the unit
 *            iii. deadMembers - All dead members of the unit
 *            iv. movableMembers - All movable members of the unit
 *            Not specifying memFunc_ is the same as not specifying mems
 *      21. memWithoutAnyDebuff side paramIds varId memFunc_
 *          - Stores the returned list of battlers from the script call
 *            unit.memWithoutAnyDebuff(paramIds, mems) in the game variable
 *            with id varId
 *          - unit is the unit identified by side
 *          - side is either party or troop
 *          - paramIds is in the form of
 *            paramId1_paramId2_paramId3_paramIdI_paramIdN
 *          - mems is the list of unit members returned by the method with
 *            name memFunc_, which is either of the following:
 *            i. members - All members of the unit
 *            ii. aliveMembers - All alive mnembers of the unit
 *            iii. deadMembers - All dead members of the unit
 *            iv. movableMembers - All movable members of the unit
 *            Not specifying memFunc_ is the same as not specifying mems
 *      22. memWithoutAllDebuffs side paramIds varId memFunc_
 *          - Stores the returned list of battlers from the script call
 *            unit.memWithoutAllDebuffs(paramIds, mems) in the game variable
 *            with id varId
 *          - unit is the unit identified by side
 *          - side is either party or troop
 *          - paramIds is in the form of
 *            paramId1_paramId2_paramId3_paramIdI_paramIdN
 *          - mems is the list of unit members returned by the method with
 *            name memFunc_, which is either of the following:
 *            i. members - All members of the unit
 *            ii. aliveMembers - All alive mnembers of the unit
 *            iii. deadMembers - All dead members of the unit
 *            iv. movableMembers - All movable members of the unit
 *            Not specifying memFunc_ is the same as not specifying mems
 *      23. memWithAnySkill side skillIds varId memFunc_
 *          - Stores the returned list of battlers from the script call
 *            unit.memWithAnySkill(skillIds, mems) in the game variable with
 *            id varId
 *          - unit is the unit identified by side
 *          - side is either party or troop
 *          - skillIds is in the form of
 *            skillId1_skillId2_skillId3_skillIdI_skillIdN
 *          - mems is the list of unit members returned by the method with
 *            name memFunc_, which is either of the following:
 *            i. members - All members of the unit
 *            ii. aliveMembers - All alive mnembers of the unit
 *            iii. deadMembers - All dead members of the unit
 *            iv. movableMembers - All movable members of the unit
 *            Not specifying memFunc_ is the same as not specifying mems
 *      24. memWithAllSkills side skillIds varId memFunc_
 *          - Stores the returned list of battlers from the script call
 *            unit.memWithAllSkills(skillIds, mems) in the game variable with
 *            id varId
 *          - unit is the unit identified by side
 *          - side is either party or troop
 *          - skillIds is in the form of
 *            skillId1_skillId2_skillId3_skillIdI_skillIdN
 *          - mems is the list of unit members returned by the method with
 *            name memFunc_, which is either of the following:
 *            i. members - All members of the unit
 *            ii. aliveMembers - All alive mnembers of the unit
 *            iii. deadMembers - All dead members of the unit
 *            iv. movableMembers - All movable members of the unit
 *            Not specifying memFunc_ is the same as not specifying mems
 *      25. memWithoutAnySkill side skillIds varId memFunc_
 *          - Stores the returned list of battlers from the script call
 *            unit.memWithoutAnySkill(skillIds, mems) in the game variable
 *            with id varId
 *          - unit is the unit identified by side
 *          - side is either party or troop
 *          - skillIds is in the form of
 *            skillId1_skillId2_skillId3_skillIdI_skillIdN
 *          - mems is the list of unit members returned by the method with
 *            name memFunc_, which is either of the following:
 *            i. members - All members of the unit
 *            ii. aliveMembers - All alive mnembers of the unit
 *            iii. deadMembers - All dead members of the unit
 *            iv. movableMembers - All movable members of the unit
 *            Not specifying memFunc_ is the same as not specifying mems
 *      26. memWithoutAllSkills side skillIds varId memFunc_
 *          - Stores the returned list of battlers from the script call
 *            unit.memWithoutAllSkills(skillIds, mems) in the game variable
 *            with id varId
 *          - unit is the unit identified by side
 *          - side is either party or troop
 *          - skillIds is in the form of
 *            skillId1_skillId2_skillId3_skillIdI_skillIdN
 *          - mems is the list of unit members returned by the method with
 *            name memFunc_, which is either of the following:
 *            i. members - All members of the unit
 *            ii. aliveMembers - All alive mnembers of the unit
 *            iii. deadMembers - All dead members of the unit
 *            iv. movableMembers - All movable members of the unit
 *            Not specifying memFunc_ is the same as not specifying mems
 *      27. anyHighestStatMem side stats varId memFunc_
 *          - Stores the returned list of battlers from the script call
 *            unit.anyHighestStatMem(stats, mems) in the game variable with id
 *            varId
 *          - unit is the unit identified by side
 *          - side is either party or troop
 *          - stats is in the form of stat1_stat2_stat3_statI_statN
 *          - mems is the list of unit members returned by the method with
 *            name memFunc_, which is either of the following:
 *            i. members - All members of the unit
 *            ii. aliveMembers - All alive mnembers of the unit
 *            iii. deadMembers - All dead members of the unit
 *            iv. movableMembers - All movable members of the unit
 *            Not specifying memFunc_ is the same as not specifying mems
 *      28. allHighestStatsMem side stats varId memFunc_
 *          - Stores the returned list of battlers from the script call
 *            unit.allHighestStatsMem(stats, mems) in the game variable with
 *            id varId
 *          - unit is the unit identified by side
 *          - side is either party or troop
 *          - stats is in the form of stat1_stat2_stat3_statI_statN
 *          - mems is the list of unit members returned by the method with
 *            name memFunc_, which is either of the following:
 *            i. members - All members of the unit
 *            ii. aliveMembers - All alive mnembers of the unit
 *            iii. deadMembers - All dead members of the unit
 *            iv. movableMembers - All movable members of the unit
 *            Not specifying memFunc_ is the same as not specifying mems
 *      29. notAnyHighestStatMem side stats varId memFunc_
 *          - Stores the returned list of battlers from the script call
 *            unit.notAnyHighestStatMem(stats, mems) in the game variable with
 *            id varId
 *          - unit is the unit identified by side
 *          - side is either party or troop
 *          - stats is in the form of stat1_stat2_stat3_statI_statN
 *          - mems is the list of unit members returned by the method with
 *            name memFunc_, which is either of the following:
 *            i. members - All members of the unit
 *            ii. aliveMembers - All alive mnembers of the unit
 *            iii. deadMembers - All dead members of the unit
 *            iv. movableMembers - All movable members of the unit
 *            Not specifying memFunc_ is the same as not specifying mems
 *      30. notAllHighestStatsMem side stats varId memFunc_
 *          - Stores the returned list of battlers from the script call
 *            unit.notAllHighestStatsMem(stats, mems) in the game variable
 *            with id varId
 *          - unit is the unit identified by side
 *          - side is either party or troop
 *          - stats is in the form of stat1_stat2_stat3_statI_statN
 *          - mems is the list of unit members returned by the method with
 *            name memFunc_, which is either of the following:
 *            i. members - All members of the unit
 *            ii. aliveMembers - All alive mnembers of the unit
 *            iii. deadMembers - All dead members of the unit
 *            iv. movableMembers - All movable members of the unit
 *            Not specifying memFunc_ is the same as not specifying mems
 *      31. anyLowestStatMem side stats varId memFunc_
 *          - Stores the returned list of battlers from the script call
 *            unit.anyLowestStatMem(stats, mems) in the game variable with id
 *            varId
 *          - unit is the unit identified by side
 *          - side is either party or troop
 *          - stats is in the form of stat1_stat2_stat3_statI_statN
 *          - mems is the list of unit members returned by the method with
 *            name memFunc_, which is either of the following:
 *            i. members - All members of the unit
 *            ii. aliveMembers - All alive mnembers of the unit
 *            iii. deadMembers - All dead members of the unit
 *            iv. movableMembers - All movable members of the unit
 *            Not specifying memFunc_ is the same as not specifying mems
 *      32. allLowestStatsMem side stats varId memFunc_
 *          - Stores the returned list of battlers from the script call
 *            unit.allLowestStatsMem(stats, mems) in the game variable with id
 *            varId
 *          - unit is the unit identified by side
 *          - side is either party or troop
 *          - stats is in the form of stat1_stat2_stat3_statI_statN
 *          - mems is the list of unit members returned by the method with
 *            name memFunc_, which is either of the following:
 *            i. members - All members of the unit
 *            ii. aliveMembers - All alive mnembers of the unit
 *            iii. deadMembers - All dead members of the unit
 *            iv. movableMembers - All movable members of the unit
 *            Not specifying memFunc_ is the same as not specifying mems
 *      33. notAnyLowestStatMem side stats varId memFunc_
 *          - Stores the returned list of battlers from the script call
 *            unit.notAnyLowestStatMem(stats, mems) in the game variable with
 *            id varId
 *          - unit is the unit identified by side
 *          - side is either party or troop
 *          - stats is in the form of stat1_stat2_stat3_statI_statN
 *          - mems is the list of unit members returned by the method with
 *            name memFunc_, which is either of the following:
 *            i. members - All members of the unit
 *            ii. aliveMembers - All alive mnembers of the unit
 *            iii. deadMembers - All dead members of the unit
 *            iv. movableMembers - All movable members of the unit
 *            Not specifying memFunc_ is the same as not specifying mems
 *      34. notAllLowestStatsMem side stats varId memFunc_
 *          - Stores the returned list of battlers from the script call
 *            unit.notAllLowestStatsMem(stats, mems) in the game variable with
 *            id varId
 *          - unit is the unit identified by side
 *          - side is either party or troop
 *          - stats is in the form of stat1_stat2_stat3_statI_statN
 *          - mems is the list of unit members returned by the method with
 *            name memFunc_, which is either of the following:
 *            i. members - All members of the unit
 *            ii. aliveMembers - All alive mnembers of the unit
 *            iii. deadMembers - All dead members of the unit
 *            iv. movableMembers - All movable members of the unit
 *            Not specifying memFunc_ is the same as not specifying mems
 *      35. anyAboveStatMem side stats val varId memFunc_
 *          - Stores the returned list of battlers from the script call
 *            unit.anyAboveStatMem(stats, val, mems) in the game variable with
 *            id varId
 *          - unit is the unit identified by side
 *          - side is either party or troop
 *          - stats is in the form of stat1_stat2_stat3_statI_statN
 *          - mems is the list of unit members returned by the method with
 *            name memFunc_, which is either of the following:
 *            i. members - All members of the unit
 *            ii. aliveMembers - All alive mnembers of the unit
 *            iii. deadMembers - All dead members of the unit
 *            iv. movableMembers - All movable members of the unit
 *            Not specifying memFunc_ is the same as not specifying mems
 *      36. allAboveStatMem side stats val varId memFunc_
 *          - Stores the returned list of battlers from the script call
 *            unit.allAboveStatMem(stats, val, mems) in the game variable with
 *            id varId
 *          - unit is the unit identified by side
 *          - side is either party or troop
 *          - stats is in the form of stat1_stat2_stat3_statI_statN
 *          - mems is the list of unit members returned by the method with
 *            name memFunc_, which is either of the following:
 *            i. members - All members of the unit
 *            ii. aliveMembers - All alive mnembers of the unit
 *            iii. deadMembers - All dead members of the unit
 *            iv. movableMembers - All movable members of the unit
 *            Not specifying memFunc_ is the same as not specifying mems
 *      37. anyBelowStatMem side stats val varId memFunc_
 *          - Stores the returned list of battlers from the script call
 *            unit.anyBelowStatMem(stats, val, mems) in the game variable with
 *            id varId
 *          - unit is the unit identified by side
 *          - side is either party or troop
 *          - stats is in the form of stat1_stat2_stat3_statI_statN
 *          - mems is the list of unit members returned by the method with
 *            name memFunc_, which is either of the following:
 *            i. members - All members of the unit
 *            ii. aliveMembers - All alive mnembers of the unit
 *            iii. deadMembers - All dead members of the unit
 *            iv. movableMembers - All movable members of the unit
 *            Not specifying memFunc_ is the same as not specifying mems
 *      38. allBelowStatMem side stats val varId memFunc_
 *          - Stores the returned list of battlers from the script call
 *            unit.allBelowStatMem(stats, val, mems) in the game variable with
 *            id varId
 *          - unit is the unit identified by side
 *          - side is either party or troop
 *          - stats is in the form of stat1_stat2_stat3_statI_statN
 *          - mems is the list of unit members returned by the method with
 *            name memFunc_, which is either of the following:
 *            i. members - All members of the unit
 *            ii. aliveMembers - All alive mnembers of the unit
 *            iii. deadMembers - All dead members of the unit
 *            iv. movableMembers - All movable members of the unit
 *            Not specifying memFunc_ is the same as not specifying mems
 *      39. memWithAnyUsableSkill side skillIds varId memFunc_
 *          - Stores the returned list of battlers from the script call
 *            unit.memWithAnyUsableSkill(skillIds, mems) in the game variable
 *            with id varId
 *          - unit is the unit identified by side
 *          - side is either party or troop
 *          - skillIds is in the form of
 *            skillId1_skillId2_skillId3_skillIdI_skillIdN
 *          - mems is the list of unit members returned by the method with
 *            name memFunc_, which is either of the following:
 *            i. members - All members of the unit
 *            ii. aliveMembers - All alive mnembers of the unit
 *            iii. deadMembers - All dead members of the unit
 *            iv. movableMembers - All movable members of the unit
 *            Not specifying memFunc_ is the same as not specifying mems
 *      40. memWithAllUsableSkills side skillIds varId memFunc_
 *          - Stores the returned list of battlers from the script call
 *            unit.memWithAllUsableSkills(skillIds, mems) in the game variable
 *            with id varId
 *          - unit is the unit identified by side
 *          - side is either party or troop
 *          - skillIds is in the form of
 *            skillId1_skillId2_skillId3_skillIdI_skillIdN
 *          - mems is the list of unit members returned by the method with
 *            name memFunc_, which is either of the following:
 *            i. members - All members of the unit
 *            ii. aliveMembers - All alive mnembers of the unit
 *            iii. deadMembers - All dead members of the unit
 *            iv. movableMembers - All movable members of the unit
 *            Not specifying memFunc_ is the same as not specifying mems
 *      41. memWithoutAnyUsableSkill side skillIds varId memFunc_
 *          - Stores the returned list of battlers from the script call
 *            unit.memWithoutAnyUsableSkill(skillIds, mems) in the game
 *            variable with id varId
 *          - unit is the unit identified by side
 *          - side is either party or troop
 *          - skillIds is in the form of
 *            skillId1_skillId2_skillId3_skillIdI_skillIdN
 *          - mems is the list of unit members returned by the method with
 *            name memFunc_, which is either of the following:
 *            i. members - All members of the unit
 *            ii. aliveMembers - All alive mnembers of the unit
 *            iii. deadMembers - All dead members of the unit
 *            iv. movableMembers - All movable members of the unit
 *            Not specifying memFunc_ is the same as not specifying mems
 *      42. memWithoutAllUsableSkills side skillIds varId memFunc_
 *          - Stores the returned list of battlers from the script call
 *            unit.memWithoutAllUsableSkills(skillIds, mems) in the game
 *            variable with id varId
 *          - unit is the unit identified by side
 *          - side is either party or troop
 *          - skillIds is in the form of
 *            skillId1_skillId2_skillId3_skillIdI_skillIdN
 *          - mems is the list of unit members returned by the method with
 *            name memFunc_, which is either of the following:
 *            i. members - All members of the unit
 *            ii. aliveMembers - All alive mnembers of the unit
 *            iii. deadMembers - All dead members of the unit
 *            iv. movableMembers - All movable members of the unit
 *            Not specifying memFunc_ is the same as not specifying mems
 *----------------------------------------------------------------------------
 *    ## (v1.02a+)Plugin Query Info
 *       1. You need to use DoubleX_RMMZ_Plugin_Query as well in order to use
 *          the plugin queries of this plugin:
 *          https://github.com/Double-X/DoubleX-RMMZ/blob/master/DoubleX_RMMZ_Plugin_Query.js
 *----------------------------------------------------------------------------
 *      1. isAnyStateAffected side label stateIds
 *         - Applies the script call battler.isAnyStateAffected(stateIds)
 *         - battler is the battler identified by side and label
 *         - side is either actor or enemy
 *         - label is the actor id for side actor and troop member index for
 *           side enemy
 *         - stateIds is in the form of
 *           stateId1_stateId2_stateId3_stateIdI_stateIdN
 *      2. isAllStatesAffected side label stateIds
 *         - Applies the script call battler.isAllStatesAffected(stateIds)
 *         - battler is the battler identified by side and label
 *         - side is either actor or enemy
 *         - label is the actor id for side actor and troop member index for
 *           side enemy
 *         - stateIds is in the form of
 *           stateId1_stateId2_stateId3_stateIdI_stateIdN
 *      3. isAnyBuffAffected side label paramIds
 *         - Applies the script call battler.isAnyBuffAffected(paramIds)
 *         - battler is the battler identified by side and label
 *         - side is either actor or enemy
 *         - label is the actor id for side actor and troop member index for
 *           side enemy
 *         - paramIds is in the form of
 *           paramId1_paramId2_paramId3_paramIdI_paramIdN
 *      4. isAllBuffsAffected side label paramIds
 *         - Applies the script call battler.isAllBuffsAffected(paramIds)
 *         - battler is the battler identified by side and label
 *         - side is either actor or enemy
 *         - label is the actor id for side actor and troop member index for
 *           side enemy
 *         - paramIds is in the form of
 *           paramId1_paramId2_paramId3_paramIdI_paramIdN
 *      5. isAnyDebuffAffected side label paramIds
 *         - Applies the script call battler.isAnyDebuffAffected(paramIds)
 *         - battler is the battler identified by side and label
 *         - side is either actor or enemy
 *         - label is the actor id for side actor and troop member index for
 *           side enemy
 *         - paramIds is in the form of
 *           paramId1_paramId2_paramId3_paramIdI_paramIdN
 *      6. isAllDebuffsAffected side label paramIds
 *         - Applies the script call battler.isAllDebuffsAffected(paramIds)
 *         - battler is the battler identified by side and label
 *         - side is either actor or enemy
 *         - label is the actor id for side actor and troop member index for
 *           side enemy
 *         - paramIds is in the form of
 *           paramId1_paramId2_paramId3_paramIdI_paramIdN
 *      7. hasAnySkill side label skillIds
 *         - Applies the script call battler.hasAnySkill(skillIds)
 *         - battler is the battler identified by side and label
 *         - side is either actor or enemy
 *         - label is the actor id for side actor and troop member index for
 *           side enemy
 *         - skillIds is in the form of
 *           skillId1_skillId2_skillId3_skillIdI_skillIdN
 *      8. hasAllSkills side label skillIds
 *         - Applies the script call battler.hasAllSkills(skillIds)
 *         - battler is the battler identified by side and label
 *         - side is either actor or enemy
 *         - label is the actor id for side actor and troop member index for
 *           side enemy
 *         - skillIds is in the form of
 *           skillId1_skillId2_skillId3_skillIdI_skillIdN
 *      9. hasAnyUsableSkill side label skillIds
 *         - Applies the script call battler.hasAnyUsableSkill(skillIds)
 *         - battler is the battler identified by side and label
 *         - side is either actor or enemy
 *         - label is the actor id for side actor and troop member index for
 *           side enemy
 *         - skillIds is in the form of
 *           skillId1_skillId2_skillId3_skillIdI_skillIdN
 *      10. hasAllUsableSkills side label skillIds
 *          - Applies the script call battler.hasAllUsableSkills(skillIds)
 *          - battler is the battler identified by side and label
 *          - side is either actor or enemy
 *          - label is the actor id for side actor and troop member index for
 *            side enemy
 *          - skillIds is in the form of
 *            skillId1_skillId2_skillId3_skillIdI_skillIdN
 *      11. memWithAnyState side stateIds memFunc_
 *          - Applies the script call unit.memWithAnyState(stateIds, mems)
 *          - unit is the unit identified by side
 *          - side is either party or troop
 *          - stateIds is in the form of
 *            stateId1_stateId2_stateId3_stateIdI_stateIdN
 *          - mems is the list of unit members returned by the method with
 *            name memFunc_, which is either of the following:
 *            i. members - All members of the unit
 *            ii. aliveMembers - All alive mnembers of the unit
 *            iii. deadMembers - All dead members of the unit
 *            iv. movableMembers - All movable members of the unit
 *            Not specifying memFunc_ is the same as not specifying mems
 *      12. memWithAllStates side stateIds memFunc_
 *          - Applies the script call unit.memWithAllStates(stateIds, mems)
 *          - unit is the unit identified by side
 *          - side is either party or troop
 *          - stateIds is in the form of
 *            stateId1_stateId2_stateId3_stateIdI_stateIdN
 *          - mems is the list of unit members returned by the method with
 *            name memFunc_, which is either of the following:
 *            i. members - All members of the unit
 *            ii. aliveMembers - All alive mnembers of the unit
 *            iii. deadMembers - All dead members of the unit
 *            iv. movableMembers - All movable members of the unit
 *            Not specifying memFunc_ is the same as not specifying mems
 *      13. memWithoutAnyState side stateIds memFunc_
 *          - Applies the script call unit.memWithoutAnyState(stateIds, mems)
 *          - unit is the unit identified by side
 *          - side is either party or troop
 *          - stateIds is in the form of
 *            stateId1_stateId2_stateId3_stateIdI_stateIdN
 *          - mems is the list of unit members returned by the method with
 *            name memFunc_, which is either of the following:
 *            i. members - All members of the unit
 *            ii. aliveMembers - All alive mnembers of the unit
 *            iii. deadMembers - All dead members of the unit
 *            iv. movableMembers - All movable members of the unit
 *            Not specifying memFunc_ is the same as not specifying mems
 *      14. memWithoutAllStates side stateIds memFunc_
 *          - Applies the script call unit.memWithoutAllStates(stateIds, mems)
 *          - unit is the unit identified by side
 *          - side is either party or troop
 *          - stateIds is in the form of
 *            stateId1_stateId2_stateId3_stateIdI_stateIdN
 *          - mems is the list of unit members returned by the method with
 *            name memFunc_, which is either of the following:
 *            i. members - All members of the unit
 *            ii. aliveMembers - All alive mnembers of the unit
 *            iii. deadMembers - All dead members of the unit
 *            iv. movableMembers - All movable members of the unit
 *            Not specifying memFunc_ is the same as not specifying mems
 *      15. memWithAnyBuff side paramIds memFunc_
 *          - Applies the script call unit.memWithAnyBuff(paramIds, mems)
 *          - unit is the unit identified by side
 *          - side is either party or troop
 *          - paramIds is in the form of
 *            paramId1_paramId2_paramId3_paramIdI_paramIdN
 *          - mems is the list of unit members returned by the method with
 *            name memFunc_, which is either of the following:
 *            i. members - All members of the unit
 *            ii. aliveMembers - All alive mnembers of the unit
 *            iii. deadMembers - All dead members of the unit
 *            iv. movableMembers - All movable members of the unit
 *            Not specifying memFunc_ is the same as not specifying mems
 *      16. memWithAllBuffs side paramIds memFunc_
 *          - Applies the script call unit.memWithAllBuffs(paramIds, mems)
 *          - unit is the unit identified by side
 *          - side is either party or troop
 *          - paramIds is in the form of
 *            paramId1_paramId2_paramId3_paramIdI_paramIdN
 *          - mems is the list of unit members returned by the method with
 *            name memFunc_, which is either of the following:
 *            i. members - All members of the unit
 *            ii. aliveMembers - All alive mnembers of the unit
 *            iii. deadMembers - All dead members of the unit
 *            iv. movableMembers - All movable members of the unit
 *            Not specifying memFunc_ is the same as not specifying mems
 *      17. memWithoutAnyBuff side paramIds memFunc_
 *          - Applies the script call unit.memWithoutAnyBuff(paramIds, mems)
 *          - unit is the unit identified by side
 *          - side is either party or troop
 *          - paramIds is in the form of
 *            paramId1_paramId2_paramId3_paramIdI_paramIdN
 *          - mems is the list of unit members returned by the method with
 *            name memFunc_, which is either of the following:
 *            i. members - All members of the unit
 *            ii. aliveMembers - All alive mnembers of the unit
 *            iii. deadMembers - All dead members of the unit
 *            iv. movableMembers - All movable members of the unit
 *            Not specifying memFunc_ is the same as not specifying mems
 *      18. memWithoutAllBuffs side paramIds memFunc_
 *          - Applies the script call unit.memWithoutAllBuffs(paramIds, mems)
 *          - unit is the unit identified by side
 *          - side is either party or troop
 *          - paramIds is in the form of
 *            paramId1_paramId2_paramId3_paramIdI_paramIdN
 *          - mems is the list of unit members returned by the method with
 *            name memFunc_, which is either of the following:
 *            i. members - All members of the unit
 *            ii. aliveMembers - All alive mnembers of the unit
 *            iii. deadMembers - All dead members of the unit
 *            iv. movableMembers - All movable members of the unit
 *            Not specifying memFunc_ is the same as not specifying mems
 *      19. memWithAnyDebuff side paramIds memFunc_
 *          - Applies the script call unit.memWithAnyDebuff(paramIds, mems)
 *          - unit is the unit identified by side
 *          - side is either party or troop
 *          - paramIds is in the form of
 *            paramId1_paramId2_paramId3_paramIdI_paramIdN
 *          - mems is the list of unit members returned by the method with
 *            name memFunc_, which is either of the following:
 *            i. members - All members of the unit
 *            ii. aliveMembers - All alive mnembers of the unit
 *            iii. deadMembers - All dead members of the unit
 *            iv. movableMembers - All movable members of the unit
 *            Not specifying memFunc_ is the same as not specifying mems
 *      20. memWithAllDebuffs side paramIds memFunc_
 *          - Applies the script call unit.memWithAllDebuffs(paramIds, mems)
 *          - unit is the unit identified by side
 *          - side is either party or troop
 *          - paramIds is in the form of
 *            paramId1_paramId2_paramId3_paramIdI_paramIdN
 *          - mems is the list of unit members returned by the method with
 *            name memFunc_, which is either of the following:
 *            i. members - All members of the unit
 *            ii. aliveMembers - All alive mnembers of the unit
 *            iii. deadMembers - All dead members of the unit
 *            iv. movableMembers - All movable members of the unit
 *            Not specifying memFunc_ is the same as not specifying mems
 *      21. memWithoutAnyDebuff side paramIds memFunc_
 *          - Applies the script call unit.memWithoutAnyDebuff(paramIds, mems)
 *          - unit is the unit identified by side
 *          - side is either party or troop
 *          - paramIds is in the form of
 *            paramId1_paramId2_paramId3_paramIdI_paramIdN
 *          - mems is the list of unit members returned by the method with
 *            name memFunc_, which is either of the following:
 *            i. members - All members of the unit
 *            ii. aliveMembers - All alive mnembers of the unit
 *            iii. deadMembers - All dead members of the unit
 *            iv. movableMembers - All movable members of the unit
 *            Not specifying memFunc_ is the same as not specifying mems
 *      22. memWithoutAllDebuffs side paramIds memFunc_
 *          - Applies the script call
 *            unit.memWithoutAllDebuffs(paramIds, mems)
 *          - unit is the unit identified by side
 *          - side is either party or troop
 *          - paramIds is in the form of
 *            paramId1_paramId2_paramId3_paramIdI_paramIdN
 *          - mems is the list of unit members returned by the method with
 *            name memFunc_, which is either of the following:
 *            i. members - All members of the unit
 *            ii. aliveMembers - All alive mnembers of the unit
 *            iii. deadMembers - All dead members of the unit
 *            iv. movableMembers - All movable members of the unit
 *            Not specifying memFunc_ is the same as not specifying mems
 *      23. memWithAnySkill side skillIds memFunc_
 *          - Applies the script call unit.memWithAnySkill(skillIds, mems)
 *          - unit is the unit identified by side
 *          - side is either party or troop
 *          - skillIds is in the form of
 *            skillId1_skillId2_skillId3_skillIdI_skillIdN
 *          - mems is the list of unit members returned by the method with
 *            name memFunc_, which is either of the following:
 *            i. members - All members of the unit
 *            ii. aliveMembers - All alive mnembers of the unit
 *            iii. deadMembers - All dead members of the unit
 *            iv. movableMembers - All movable members of the unit
 *            Not specifying memFunc_ is the same as not specifying mems
 *      24. memWithAllSkills side skillIds memFunc_
 *          - Applies the script call unit.memWithAllSkills(skillIds, mems)
 *          - unit is the unit identified by side
 *          - side is either party or troop
 *          - skillIds is in the form of
 *            skillId1_skillId2_skillId3_skillIdI_skillIdN
 *          - mems is the list of unit members returned by the method with
 *            name memFunc_, which is either of the following:
 *            i. members - All members of the unit
 *            ii. aliveMembers - All alive mnembers of the unit
 *            iii. deadMembers - All dead members of the unit
 *            iv. movableMembers - All movable members of the unit
 *            Not specifying memFunc_ is the same as not specifying mems
 *      25. memWithoutAnySkill side skillIds memFunc_
 *          - Applies the script call unit.memWithoutAnySkill(skillIds, mems)
 *          - unit is the unit identified by side
 *          - side is either party or troop
 *          - skillIds is in the form of
 *            skillId1_skillId2_skillId3_skillIdI_skillIdN
 *          - mems is the list of unit members returned by the method with
 *            name memFunc_, which is either of the following:
 *            i. members - All members of the unit
 *            ii. aliveMembers - All alive mnembers of the unit
 *            iii. deadMembers - All dead members of the unit
 *            iv. movableMembers - All movable members of the unit
 *            Not specifying memFunc_ is the same as not specifying mems
 *      26. memWithoutAllSkills side skillIds memFunc_
 *          - Applies the script call unit.memWithoutAllSkills(skillIds, mems)
 *          - unit is the unit identified by side
 *          - side is either party or troop
 *          - skillIds is in the form of
 *            skillId1_skillId2_skillId3_skillIdI_skillIdN
 *          - mems is the list of unit members returned by the method with
 *            name memFunc_, which is either of the following:
 *            i. members - All members of the unit
 *            ii. aliveMembers - All alive mnembers of the unit
 *            iii. deadMembers - All dead members of the unit
 *            iv. movableMembers - All movable members of the unit
 *            Not specifying memFunc_ is the same as not specifying mems
 *      27. anyHighestStatMem side stats memFunc_
 *          - Applies the script call unit.anyHighestStatMem(stats, mems)
 *          - unit is the unit identified by side
 *          - side is either party or troop
 *          - stats is in the form of stat1_stat2_stat3_statI_statN
 *          - mems is the list of unit members returned by the method with
 *            name memFunc_, which is either of the following:
 *            i. members - All members of the unit
 *            ii. aliveMembers - All alive mnembers of the unit
 *            iii. deadMembers - All dead members of the unit
 *            iv. movableMembers - All movable members of the unit
 *            Not specifying memFunc_ is the same as not specifying mems
 *      28. allHighestStatsMem side stats memFunc_
 *          - Applies the script call unit.allHighestStatsMem(stats, mems)
 *          - unit is the unit identified by side
 *          - side is either party or troop
 *          - stats is in the form of stat1_stat2_stat3_statI_statN
 *          - mems is the list of unit members returned by the method with
 *            name memFunc_, which is either of the following:
 *            i. members - All members of the unit
 *            ii. aliveMembers - All alive mnembers of the unit
 *            iii. deadMembers - All dead members of the unit
 *            iv. movableMembers - All movable members of the unit
 *            Not specifying memFunc_ is the same as not specifying mems
 *      29. notAnyHighestStatMem side stats memFunc_
 *          - Applies the script call unit.notAnyHighestStatMem(stats, mems)
 *          - unit is the unit identified by side
 *          - side is either party or troop
 *          - stats is in the form of stat1_stat2_stat3_statI_statN
 *          - mems is the list of unit members returned by the method with
 *            name memFunc_, which is either of the following:
 *            i. members - All members of the unit
 *            ii. aliveMembers - All alive mnembers of the unit
 *            iii. deadMembers - All dead members of the unit
 *            iv. movableMembers - All movable members of the unit
 *            Not specifying memFunc_ is the same as not specifying mems
 *      30. notAllHighestStatsMem side stats memFunc_
 *          - Applies the script call unit.notAllHighestStatsMem(stats, mems)
 *          - unit is the unit identified by side
 *          - side is either party or troop
 *          - stats is in the form of stat1_stat2_stat3_statI_statN
 *          - mems is the list of unit members returned by the method with
 *            name memFunc_, which is either of the following:
 *            i. members - All members of the unit
 *            ii. aliveMembers - All alive mnembers of the unit
 *            iii. deadMembers - All dead members of the unit
 *            iv. movableMembers - All movable members of the unit
 *            Not specifying memFunc_ is the same as not specifying mems
 *      31. anyLowestStatMem side stats memFunc_
 *          - Applies the script call unit.anyLowestStatMem(stats, mems)
 *          - unit is the unit identified by side
 *          - side is either party or troop
 *          - stats is in the form of stat1_stat2_stat3_statI_statN
 *          - mems is the list of unit members returned by the method with
 *            name memFunc_, which is either of the following:
 *            i. members - All members of the unit
 *            ii. aliveMembers - All alive mnembers of the unit
 *            iii. deadMembers - All dead members of the unit
 *            iv. movableMembers - All movable members of the unit
 *            Not specifying memFunc_ is the same as not specifying mems
 *      32. allLowestStatsMem side stats memFunc_
 *          - Applies the script call unit.allLowestStatsMem(stats, mems)
 *          - unit is the unit identified by side
 *          - side is either party or troop
 *          - stats is in the form of stat1_stat2_stat3_statI_statN
 *          - mems is the list of unit members returned by the method with
 *            name memFunc_, which is either of the following:
 *            i. members - All members of the unit
 *            ii. aliveMembers - All alive mnembers of the unit
 *            iii. deadMembers - All dead members of the unit
 *            iv. movableMembers - All movable members of the unit
 *            Not specifying memFunc_ is the same as not specifying mems
 *      33. notAnyLowestStatMem side stats memFunc_
 *          - Applies the script call unit.notAnyLowestStatMem(stats, mems)
 *          - unit is the unit identified by side
 *          - side is either party or troop
 *          - stats is in the form of stat1_stat2_stat3_statI_statN
 *          - mems is the list of unit members returned by the method with
 *            name memFunc_, which is either of the following:
 *            i. members - All members of the unit
 *            ii. aliveMembers - All alive mnembers of the unit
 *            iii. deadMembers - All dead members of the unit
 *            iv. movableMembers - All movable members of the unit
 *            Not specifying memFunc_ is the same as not specifying mems
 *      34. notAllLowestStatsMem side stats memFunc_
 *          - Applies the script call unit.notAllLowestStatsMem(stats, mems)
 *          - unit is the unit identified by side
 *          - side is either party or troop
 *          - stats is in the form of stat1_stat2_stat3_statI_statN
 *          - mems is the list of unit members returned by the method with
 *            name memFunc_, which is either of the following:
 *            i. members - All members of the unit
 *            ii. aliveMembers - All alive mnembers of the unit
 *            iii. deadMembers - All dead members of the unit
 *            iv. movableMembers - All movable members of the unit
 *            Not specifying memFunc_ is the same as not specifying mems
 *      35. anyAboveStatMem side stats val memFunc_
 *          - Applies the script call unit.anyAboveStatMem(stats, val, mems)
 *          - unit is the unit identified by side
 *          - side is either party or troop
 *          - stats is in the form of stat1_stat2_stat3_statI_statN
 *          - mems is the list of unit members returned by the method with
 *            name memFunc_, which is either of the following:
 *            i. members - All members of the unit
 *            ii. aliveMembers - All alive mnembers of the unit
 *            iii. deadMembers - All dead members of the unit
 *            iv. movableMembers - All movable members of the unit
 *            Not specifying memFunc_ is the same as not specifying mems
 *      36. allAboveStatMem side stats val memFunc_
 *          - Applies the script call unit.allAboveStatMem(stats, val, mems)
 *          - unit is the unit identified by side
 *          - side is either party or troop
 *          - stats is in the form of stat1_stat2_stat3_statI_statN
 *          - mems is the list of unit members returned by the method with
 *            name memFunc_, which is either of the following:
 *            i. members - All members of the unit
 *            ii. aliveMembers - All alive mnembers of the unit
 *            iii. deadMembers - All dead members of the unit
 *            iv. movableMembers - All movable members of the unit
 *            Not specifying memFunc_ is the same as not specifying mems
 *      37. anyBelowStatMem side stats val memFunc_
 *          - Applies the script call unit.anyBelowStatMem(stats, val, mems)
 *          - unit is the unit identified by side
 *          - side is either party or troop
 *          - stats is in the form of stat1_stat2_stat3_statI_statN
 *          - mems is the list of unit members returned by the method with
 *            name memFunc_, which is either of the following:
 *            i. members - All members of the unit
 *            ii. aliveMembers - All alive mnembers of the unit
 *            iii. deadMembers - All dead members of the unit
 *            iv. movableMembers - All movable members of the unit
 *            Not specifying memFunc_ is the same as not specifying mems
 *      38. allBelowStatMem side stats val memFunc_
 *          - Applies the script call unit.allBelowStatMem(stats, val, mems)
 *          - unit is the unit identified by side
 *          - side is either party or troop
 *          - stats is in the form of stat1_stat2_stat3_statI_statN
 *          - mems is the list of unit members returned by the method with
 *            name memFunc_, which is either of the following:
 *            i. members - All members of the unit
 *            ii. aliveMembers - All alive mnembers of the unit
 *            iii. deadMembers - All dead members of the unit
 *            iv. movableMembers - All movable members of the unit
 *            Not specifying memFunc_ is the same as not specifying mems
 *      39. memWithAnyUsableSkill side skillIds memFunc_
 *          - Applies the script call unit.memWithAnyUsableSkill(skillIds, mems)
 *          - unit is the unit identified by side
 *          - side is either party or troop
 *          - skillIds is in the form of
 *            skillId1_skillId2_skillId3_skillIdI_skillIdN
 *          - mems is the list of unit members returned by the method with
 *            name memFunc_, which is either of the following:
 *            i. members - All members of the unit
 *            ii. aliveMembers - All alive mnembers of the unit
 *            iii. deadMembers - All dead members of the unit
 *            iv. movableMembers - All movable members of the unit
 *            Not specifying memFunc_ is the same as not specifying mems
 *      40. memWithAllUsableSkills side skillIds memFunc_
 *          - Applies the script call unit.memWithAnyUsableSkill(skillIds, mems)
 *          - unit is the unit identified by side
 *          - side is either party or troop
 *          - skillIds is in the form of
 *            skillId1_skillId2_skillId3_skillIdI_skillIdN
 *          - mems is the list of unit members returned by the method with
 *            name memFunc_, which is either of the following:
 *            i. members - All members of the unit
 *            ii. aliveMembers - All alive mnembers of the unit
 *            iii. deadMembers - All dead members of the unit
 *            iv. movableMembers - All movable members of the unit
 *            Not specifying memFunc_ is the same as not specifying mems
 *      41. memWithoutAnyUsableSkill side skillIds memFunc_
 *          - Applies the script call unit.memWithAnyUsableSkill(skillIds, mems)
 *          - unit is the unit identified by side
 *          - side is either party or troop
 *          - skillIds is in the form of
 *            skillId1_skillId2_skillId3_skillIdI_skillIdN
 *          - mems is the list of unit members returned by the method with
 *            name memFunc_, which is either of the following:
 *            i. members - All members of the unit
 *            ii. aliveMembers - All alive mnembers of the unit
 *            iii. deadMembers - All dead members of the unit
 *            iv. movableMembers - All movable members of the unit
 *            Not specifying memFunc_ is the same as not specifying mems
 *      42. memWithoutAllUsableSkills side skillIds memFunc_
 *          - Applies the script call unit.memWithAnyUsableSkill(skillIds, mems)
 *          - unit is the unit identified by side
 *          - side is either party or troop
 *          - skillIds is in the form of
 *            skillId1_skillId2_skillId3_skillIdI_skillIdN
 *          - mems is the list of unit members returned by the method with
 *            name memFunc_, which is either of the following:
 *            i. members - All members of the unit
 *            ii. aliveMembers - All alive mnembers of the unit
 *            iii. deadMembers - All dead members of the unit
 *            iv. movableMembers - All movable members of the unit
 *            Not specifying memFunc_ is the same as not specifying mems
 *============================================================================
 */

// jshint esversion: 6

var DoubleX_RMMZ = DoubleX_RMMZ || {}; // var must be used or game will crash
// Separates the version numbers with the rest to make the former more clear
DoubleX_RMMZ.Unit_Filters = {
    PLUGIN_NAME: "DoubleX RMMZ Unit Filters",
    VERSIONS: { codebase: "1.0.0", plugin: "v1.01a" }
}; // DoubleX_RMMZ.Unit_Filters
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

/*----------------------------------------------------------------------------*/

(UF => {

    "use strict";

    const _IS_QUERY = DoubleX_RMMZ.Plugin_Query, _PLUGIN_NAME = UF.PLUGIN_NAME;
    const PQ = UF.Plugin_Cmd_Query = {};

    PQ._BATTLER_ = (side, label) => {
        switch (side) {
            case "actor": return $gameActors.actor(+label);
            case "enemy": return $gameTroop.members()[+label];
            default: return undefined;
        }
    }; // PQ._BATTLER_
    PQ._NUM_ARR = arrStr => PQ._STR_ARR(arrStr).map(Number);
    // A dirty hack to handle both plugin commands and queries
    PQ._STR_ARR = arrStr => Array.isArray(arrStr) ? arrStr : arrStr.split(/_+/);
    //
    PQ._UNIT_ = side => {
        switch (side) {
            case "party": return $gameParty;
            case "troop": return $gameTroop;
            default: return undefined;
        }
    }; // PQ._UNIT_

    const _BATTLER_QUERY_FUNC = (name, side, label, ids) => {
        const battler_ = PQ._BATTLER_(side, label);
        return battler_ && battler_[name](PQ._NUM_ARR(ids));
    }; // _BATTLER_QUERY_FUNC
    [
        ["hasAnySkill", "skillIds"],
        ["hasAllSkills", "skillIds"],
        ["hasAnyUsableSkill", "skillIds"],
        ["hasAllUsableSkills", "skillIds"],
        ["isAnyStateAffected", "stateIds"],
        ["isAllStatesAffected", "stateIds"],
        ["isAnyBuffAffected", "paramIds"],
        ["isAllBuffsAffected", "paramIds"],
        ["isAnyDebuffAffected", "paramIds"],
        ["isAllDebuffsAffected", "paramIds"]
    ].forEach(([name, idNames]) => {
        PluginManager.registerCommand(_PLUGIN_NAME, name, ({ side, label, [idNames]: ids, switchId }) => {
            const val = _BATTLER_QUERY_FUNC(name, side, label, JSON.parse(ids));
            $gameSwitches.setValue(+switchId, val);
        });
        if (!_IS_QUERY) return;
        const queryFunc = _BATTLER_QUERY_FUNC.bind(undefined, name);
        PluginManager.eventCmdPluginQueries.set(name, queryFunc);
    });

    const _UNIT_QUERY_FUNC = arrFunc => (name, side, arrStr, memFunc_) => {
        const unit_ = PQ._UNIT_(side);
        if (!unit_) return;
        const numArr = arrFunc(arrStr);
        if (memFunc_) unit_[name](numArr, unit_[memFunc_]());
        return unit_[name](numArr);
    }, _NUM_UNIT_QUERY_FUNC = _UNIT_QUERY_FUNC(PQ._NUM_ARR);
    const _STR_UNIT_QUERY_FUNC = _UNIT_QUERY_FUNC(PQ._STR_ARR);
    [
        ["memWithAnyState", "stateIds", _NUM_UNIT_QUERY_FUNC],
        ["memWithAllStates", "stateIds", _NUM_UNIT_QUERY_FUNC],
        ["memWithoutAnyState", "stateIds", _NUM_UNIT_QUERY_FUNC],
        ["memWithoutAllStates", "stateIds", _NUM_UNIT_QUERY_FUNC],
        ["memWithAnyBuff", "paramIds", _NUM_UNIT_QUERY_FUNC],
        ["memWithAllBuffs", "paramIds", _NUM_UNIT_QUERY_FUNC],
        ["memWithoutAnyBuff", "paramIds", _NUM_UNIT_QUERY_FUNC],
        ["memWithoutAllBuffs", "paramIds", _NUM_UNIT_QUERY_FUNC],
        ["memWithAnyDebuff", "paramIds", _NUM_UNIT_QUERY_FUNC],
        ["memWithAllDebuffs", "paramIds", _NUM_UNIT_QUERY_FUNC],
        ["memWithoutAnyDebuff", "paramIds", _NUM_UNIT_QUERY_FUNC],
        ["memWithoutAllDebuffs", "paramIds", _NUM_UNIT_QUERY_FUNC],
        ["memWithAnySkill", "skillIds", _NUM_UNIT_QUERY_FUNC],
        ["memWithAllSkills", "skillIds", _NUM_UNIT_QUERY_FUNC],
        ["memWithoutAnySkill", "skillIds", _NUM_UNIT_QUERY_FUNC],
        ["memWithoutAllSkills", "skillIds", _NUM_UNIT_QUERY_FUNC],
        ["memWithAnyUsableSkill", "skillIds", _NUM_UNIT_QUERY_FUNC],
        ["memWithAllUsableSkills", "skillIds", _NUM_UNIT_QUERY_FUNC],
        ["memWithoutAnyUsableSkill", "skillIds", _NUM_UNIT_QUERY_FUNC],
        ["memWithoutAllUsableSkills", "skillIds", _NUM_UNIT_QUERY_FUNC],
        ["anyHighestStatMem", "stats", _STR_UNIT_QUERY_FUNC],
        ["allHighestStatsMem", "stats", _STR_UNIT_QUERY_FUNC],
        ["notAnyHighestStatMem", "stats", _STR_UNIT_QUERY_FUNC],
        ["notAllHighestStatsMem", "stats", _STR_UNIT_QUERY_FUNC],
        ["anyLowestStatMem", "stats", _STR_UNIT_QUERY_FUNC],
        ["allLowestStatsMem", "stats", _STR_UNIT_QUERY_FUNC],
        ["notAnyLowestStatMem", "stats", _STR_UNIT_QUERY_FUNC],
        ["notAllLowestStatsMem", "stats", _STR_UNIT_QUERY_FUNC]
    ].forEach(([name, arrStrName, queryFunc]) => {
        PluginManager.registerCommand(_PLUGIN_NAME, name, ({ side, [arrStrName]: arrStr, varId, memFunc_ }) => {
            const val = queryFunc(name, side, JSON.parse(arrStr), memFunc_);
            $gameVariables.setValue(+varId, val);
        });
        if (!_IS_QUERY) return;
        const boundQueryFunc = queryFunc.bind(undefined, name);
        PluginManager.eventCmdPluginQueries.set(name, boundQueryFunc);
    });

    const _VAL_UNIT_QUERY_FUNC = () => (name, side, arrStr, val, memFunc_) => {
        const unit_ = PQ._UNIT_(side);
        if (!unit_) return;
        const strArr = PQ._STR_ARR(arrStr);
        if (memFunc_) unit_[name](strArr, val, unit_[memFunc_]());
        return unit_[name](strArr, val);
    }; // _VAL_UNIT_QUERY_FUNC

    [
        "anyAboveStatMem",
        "allAboveStatMem",
        "anyBelowStatMem",
        "allBelowStatMem"
    ].forEach(name => {
        PluginManager.registerCommand(_PLUGIN_NAME, name, ({ side, stats, val, varId, memFunc_ }) => {
            const arrStats = JSON.parse(stats);
            const v = _VAL_UNIT_QUERY_FUNC(name, side, arrStats, val, memFunc_);
            $gameVariables.setValue(+varId, v);
        });
        if (!_IS_QUERY) return;
        const queryFunc = _VAL_UNIT_QUERY_FUNC.bind(undefined, name);
        PluginManager.eventCmdPluginQueries.set(name, queryFunc);
    });

})(DoubleX_RMMZ.Unit_Filters);

/*----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------
 *    ## Objects
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
     * @abstract @author DoubleX @interface @since v1.01a @version v1.01a
     * @param {[id]} skillIds - The list of id of skills involved
     * @returns {boolean} Whether the battler has any of specified usable skills
     */
    $.hasAnyUsableSkill = function(skillIds) { return false; };

    /**
     * Script call/Nullipotent
     * @abstract @author DoubleX @interface @since v1.01a @version v1.01a
     * @param {[id]} skillIds - The list of id of skills involved
     * @returns {boolean} Whether the battler has all of specified usable skills
     */
    $.hasAllUsableSkills = function(skillIds) { return false; };

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

(($, UF) => {

    "use strict";

    const { new: NEW } = UF.Game_Actor = { orig: {}, new: {} };

    /**
     * Script call/Nullipotent
     * @author DoubleX @interface @override @since v1.00a @version v1.00a
     * @param {[number]} skillIds - The list of id of skills involved
     * @returns {boolean} Whether this actor has any of the specified skills
     */
    $.hasAnySkill = function(skillIds) {
        return NEW._hasFilteredSkills.call(this, skillIds, "some");
    }; // $.hasAnySkill

    /**
     * Script call/Nullipotent
     * @author DoubleX @interface @override @since v1.00a @version v1.00a
     * @param {[number]} skillIds - The list of id of skills involved
     * @returns {boolean} Whether this actor has all of the specified skills
     */
    $.hasAllSkills = function(skillIds) {
        return NEW._hasFilteredSkills.call(this, skillIds, "every");
    }; // $.hasAllSkills

    /**
     * Script call/Nullipotent
     * @author DoubleX @interface @override @since v1.01a @version v1.01a
     * @param {[number]} skillIds - The list of id of skills involved
     * @returns {boolean} Whether this actor has any of specified usable skills
     */
    $.hasAnyUsableSkill = function(skillIds) {
        return NEW._hasFilteredUsableSkills.call(this, skillIds, "some");
    }; // $.hasAnyUsableSkill

    /**
     * Script call/Nullipotent
     * @author DoubleX @interface @override @since v1.01a @version v1.01a
     * @param {[number]} skillIds - The list of id of skills involved
     * @returns {boolean} Whether this actor has all of specified usable skills
     */
    $.hasAllUsableSkills = function(skillIds) {
        return NEW._hasFilteredUsableSkills.call(this, skillIds, "every");
    }; // $.hasAllUsableSkills

    /**
     * The this pointer is Game_Actor.prototype
     * Nullipotent
     * @author DoubleX @since v1.01a @version v1.01a
     * @param {[number]} skillIds - The list of id of skills involved
     * @enum @param {string} quantifier - some for any skill/every for all skill
     * @returns {boolean} Whether this actor passes specified skill filtering
     */
    NEW._hasFilteredSkills = function(skillIds, quantifier) {
        return skillIds[quantifier](this.hasSkill, this);
    }; // NEW._hasFilteredSkills

    /**
     * The this pointer is Game_Actor.prototype
     * Nullipotent
     * @author DoubleX @since v1.01a @version v1.01a
     * @param {[number]} skillIds - The list of id of skills involved
     * @enum @param {string} quantifier - some for any skill/every for all skill
     * @returns {boolean} Whether actor passes specified usable skill filtering
     */
    NEW._hasFilteredUsableSkills = function(skillIds, quantifier) {
        const usableSkills = this.usableSkills();
        return skillIds[quantifier](skillId => {
            return usableSkills.includes($dataSkills[skillId]);
        });
    }; // NEW._hasFilteredUsableSkills

})(Game_Actor.prototype, DoubleX_RMMZ.Unit_Filters);

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
     * Script call/Nullipotent
     * @author DoubleX @interface @override @since v1.01a @version v1.01a
     * @param {[number]} skillIds - The list of id of skills involved
     * @returns {boolean} Whether this enemy has any of specified usable skills
     */
    $.hasAnyUsableSkill = function(skillIds) {
        return NEW._hasFilteredUsableSkills.call(this, skillIds, "some");
    }; // $.hasAnyUsableSkill

    /**
     * Script call/Nullipotent
     * @author DoubleX @interface @override @since v1.01a @version v1.01a
     * @param {[number]} skillIds - The list of id of skills involved
     * @returns {boolean} Whether this enemy has all of specified usable skills
     */
    $.hasAllUsableSkills = function(skillIds) {
        return NEW._hasFilteredUsableSkills.call(this, skillIds, "every");
    }; // $.hasAllUsableSkills

    NEW._ACCUM_ACT_SKILL_IDS = (accumActSkillIds, { skillId }) => {
        accumActSkillIds.set(skillId, true);
        return accumActSkillIds;
    }; // NEW._ACCUM_ACT_SKILL_IDS

    /**
     * The this pointer is Game_Enemy.prototype
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

    /**
     * The this pointer is Game_Enemy.prototype
     * Nullipotent
     * @author DoubleX @since v1.00a @version v1.00a
     * @returns {Map[id, boolean]} The mapping of all enemy action skill ids
     */
    NEW._actSkillIds = function() {
        return this.enemy().actions.reduce(NEW._ACCUM_ACT_SKILL_IDS, new Map());
    }; // NEW._actSkillIds

    /**
     * The this pointer is Game_Enemy.prototype
     * Nullipotent
     * @author DoubleX @since v1.01a @version v1.01a
     * @param {[number]} skillIds - The list of id of skills involved
     * @enum @param {string} quantifier - some for any skill/every for all skill
     * @returns {boolean} Whether actor passes specified usable skill filtering
     */
    NEW._hasFilteredUsableSkills = function(skillIds, quantifier) {
        // Optimized to use an O(n) rather than an O(n ^ 2) algorithm
        const usableActSkillIds = NEW._usableActSkillIds.call(this);
        return skillIds[quantifier](skillId => usableActSkillIds.has(skillId));
        //
    }; // NEW._hasFilteredUsableSkills

    /**
     * The this pointer is Game_Enemy.prototype
     * Nullipotent
     * @author DoubleX @since v1.01a @version v1.01a
     * @returns {Map[id, boolean]} The mapping of all enemy action skill ids
     */
    NEW._usableActSkillIds = function() {
        const actSkills = this.enemy().actions.filter(this.isActionValid, this);
        return actSkills.reduce(NEW._ACCUM_ACT_SKILL_IDS, new Map());
    }; // NEW._usableActSkillIds

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
    NEW._FILTERED_MEMS = (mems, isEditMems, filterFunc) => {
        if (!isEditMems) return mems.filter(filterFunc);
        for (let i = 0; ; i++) {
            while (mems[i] && !filterFunc[mems[i]]) mems.remove(mems[i]);
            if (!mems[i]) return mems;
        }
    }; // NEW._FILTERED_MEMS

    NEW._MEM_WITH_ANY_STATE =
            NEW._MEM_WITH_COND.bind(undefined, "isAnyStateAffected");
    /**
     * Script call/Nullipotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {[id]} stateIds - The list of id of states involved
     * @param {[Game_Battler]} mems - The list of battlers to be filtered
     * @param {boolean} isEditMems - Whether the mems argument will be mutated
     * @returns {[Game_Batler]} The list of requested unit members
     */
    $.memWithAnyState = function(stateIds, mems = this.members(), isEditMems = false) {
        const filterFunc = mem => NEW._MEM_WITH_ANY_STATE(stateIds, mem);
        return NEW._FILTERED_MEMS(mems, isEditMems, filterFunc);
    }; // $.memWithAnyState

    NEW._MEM_WITH_ALL_STATES =
            NEW._MEM_WITH_COND.bind(undefined, "isAllStatesAffected");
    /**
     * Script call/Nullipotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {[id]} stateIds - The list of id of states involved
     * @param {[Game_Battler]} mems - The list of battlers to be filtered
     * @param {boolean} isEditMems - Whether the mems argument will be mutated
     * @returns {[Game_Batler]} The list of requested unit members
     */
    $.memWithAllStates = function(stateIds, mems = this.members(), isEditMems = false) {
        const filterFunc = mem => NEW._MEM_WITH_ALL_STATES(stateIds, mem);
        return NEW._FILTERED_MEMS(mems, isEditMems, filterFunc);
    }; // $.memWithAllStates

    NEW._MEM_WITHOUT_ANY_STATE =
            NEW._MEM_WTHOUT_COND.bind(undefined, "isAnyStateAffected");
    /**
     * Script call/Nullipotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {[id]} stateIds - The list of id of states involved
     * @param {[Game_Battler]} mems - The list of battlers to be filtered
     * @param {boolean} isEditMems - Whether the mems argument will be mutated
     * @returns {[Game_Batler]} The list of requested unit members
     */
    $.memWithoutAnyState = function(stateIds, mems = this.members(), isEditMems = false) {
        const filterFunc = mem => NEW._MEM_WITHOUT_ANY_STATE(stateIds, mem);
        return NEW._FILTERED_MEMS(mems, isEditMems, filterFunc);
    }; // $.memWithoutAnyState

    NEW._MEM_WITHOUT_ALL_STATES =
            NEW._MEM_WTHOUT_COND.bind(undefined, "isAllStatesAffected");
    /**
     * Script call/Nullipotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {[id]} stateIds - The list of id of states involved
     * @param {[Game_Battler]} mems - The list of battlers to be filtered
     * @param {boolean} isEditMems - Whether the mems argument will be mutated
     * @returns {[Game_Batler]} The list of requested unit members
     */
    $.memWithoutAllStates = function(stateIds, mems = this.members(), isEditMems = false) {
        const filterFunc = mem => NEW._MEM_WITHOUT_ALL_STATES(stateIds, mem);
        return NEW._FILTERED_MEMS(mems, isEditMems, filterFunc);
    }; // $.memWithoutAllStates

    NEW._MEM_WITH_ANY_BUFF =
            NEW._MEM_WITH_COND.bind(undefined, "isAnyBuffAffected");
    /**
     * Script call/Nullipotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {[index]} paramIds - The list of id of parameters involved
     * @param {[Game_Battler]} mems - The list of battlers to be filtered
     * @param {boolean} isEditMems - Whether the mems argument will be mutated
     * @returns {[Game_Batler]} The list of requested unit members
     */
    $.memWithAnyBuff = function(paramIds, mems = this.members(), isEditMems = false) {
        const filterFunc = mem => NEW._MEM_WITH_ANY_BUFF(paramIds, mem);
        return NEW._FILTERED_MEMS(mems, isEditMems, filterFunc);
    }; // $.memWithAnyBuff

    NEW._MEM_WITH_ALL_BUFFS =
            NEW._MEM_WITH_COND.bind(undefined, "isAllBuffsAffected");
    /**
     * Script call/Nullipotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {[index]} paramIds - The list of id of parameters involved
     * @param {[Game_Battler]} mems - The list of battlers to be filtered
     * @param {boolean} isEditMems - Whether the mems argument will be mutated
     * @returns {[Game_Batler]} The list of requested unit members
     */
    $.memWithAllBuffs = function(paramIds, mems = this.members(), isEditMems = false) {
        const filterFunc = mem => NEW._MEM_WITH_ALL_BUFFS(paramIds, mem);
        return NEW._FILTERED_MEMS(mems, isEditMems, filterFunc);
    }; // $.memWithAllBuffs

    NEW._MEM_WITHOUT_ANY_BUFF =
            NEW._MEM_WTHOUT_COND.bind(undefined, "isAnyBuffAffected");
    /**
     * Script call/Nullipotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {[index]} paramIds - The list of id of parameters involved
     * @param {[Game_Battler]} mems - The list of battlers to be filtered
     * @param {boolean} isEditMems - Whether the mems argument will be mutated
     * @returns {[Game_Batler]} The list of requested unit members
     */
    $.memWithoutAnyBuff = function(paramIds, mems = this.members(), isEditMems = false) {
        const filterFunc = mem => NEW._MEM_WITHOUT_ANY_BUFF(paramIds, mem);
        return NEW._FILTERED_MEMS(mems, isEditMems, filterFunc);
    }; // $.memWithoutAnyBuff

    NEW._MEM_WITHOUT_ALL_BUFFS =
            NEW._MEM_WTHOUT_COND.bind(undefined, "isAllBuffsAffected");
    /**
     * Script call/Nullipotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {[index]} paramIds - The list of id of parameters involved
     * @param {[Game_Battler]} mems - The list of battlers to be filtered
     * @param {boolean} isEditMems - Whether the mems argument will be mutated
     * @returns {[Game_Batler]} The list of requested unit members
     */
    $.memWithoutAllBuffs = function(paramIds, mems = this.members(), isEditMems = false) {
        const filterFunc = mem => NEW._MEM_WITHOUT_ALL_BUFFS(paramIds, mem);
        return NEW._FILTERED_MEMS(mems, isEditMems, filterFunc);
    }; // $.memWithoutAllBuffs

    NEW._MEM_WITH_ANY_DEBUFF =
            NEW._MEM_WITH_COND.bind(undefined, "isAnyDebuffAffected");
    /**
     * Script call/Nullipotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {[index]} paramIds - The list of id of parameters involved
     * @param {[Game_Battler]} mems - The list of battlers to be filtered
     * @param {boolean} isEditMems - Whether the mems argument will be mutated
     * @returns {[Game_Batler]} The list of requested unit members
     */
    $.memWithAnyDebuff = function(paramIds, mems = this.members(), isEditMems = false) {
        const filterFunc = mem => NEW._MEM_WITH_ANY_DEBUFF(paramIds, mem);
        return NEW._FILTERED_MEMS(mems, isEditMems, filterFunc);
    }; // $.memWithAnyDebuff

    NEW._MEM_WITH_ALL_DEBUFFS =
            NEW._MEM_WITH_COND.bind(undefined, "isAllDebuffsAffected");
    /**
     * Script call/Nullipotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {[index]} paramIds - The list of id of parameters involved
     * @param {[Game_Battler]} mems - The list of battlers to be filtered
     * @param {boolean} isEditMems - Whether the mems argument will be mutated
     * @returns {[Game_Batler]} The list of requested unit members
     */
    $.memWithAllDebuffs = function(paramIds, mems = this.members(), isEditMems = false) {
        const filterFunc = mem => NEW._MEM_WITH_ALL_DEBUFFS(paramIds, mem);
        return NEW._FILTERED_MEMS(mems, isEditMems, filterFunc);
    }; // $.memWithAllDebuffs

    NEW._MEM_WITHOUT_ANY_DEBUFF =
            NEW._MEM_WTHOUT_COND.bind(undefined, "isAnyDebuffAffected");
    /**
     * Script call/Nullipotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {[index]} paramIds - The list of id of parameters involved
     * @param {[Game_Battler]} mems - The list of battlers to be filtered
     * @param {boolean} isEditMems - Whether the mems argument will be mutated
     * @returns {[Game_Batler]} The list of requested unit members
     */
    $.memWithoutAnyDebuff = function(paramIds, mems = this.members(), isEditMems = false) {
        const filterFunc = mem => NEW._MEM_WITHOUT_ANY_DEBUFF(paramIds, mem);
        return NEW._FILTERED_MEMS(mems, isEditMems, filterFunc);
    }; // $.memWithoutAnyDebuff

    NEW._MEM_WITHOUT_ALL_DEBUFFS =
            NEW._MEM_WTHOUT_COND.bind(undefined, "isAllDebuffsAffected");
    /**
     * Script call/Nullipotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {[index]} paramIds - The list of id of parameters involved
     * @param {[Game_Battler]} mems - The list of battlers to be filtered
     * @param {boolean} isEditMems - Whether the mems argument will be mutated
     * @returns {[Game_Batler]} The list of requested unit members
     */
    $.memWithoutAllDebuffs = function(paramIds, mems = this.members(), isEditMems = false) {
        const filterFunc = mem => NEW._MEM_WITHOUT_ALL_DEBUFFS(paramIds, mem);
        return NEW._FILTERED_MEMS(mems, isEditMems, filterFunc);
    }; // $.memWithoutAllDebuffs

    NEW._MEM_WITH_ANY_SKILL =
            NEW._MEM_WITH_COND.bind(undefined, "hasAnySkill");
    /**
     * Script call/Nullipotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {[id]} skillIds - The list of id of skills involved
     * @param {[Game_Battler]} mems - The list of battlers to be filtered
     * @param {boolean} isEditMems - Whether the mems argument will be mutated
     * @returns {[Game_Batler]} The list of requested unit members
     */
    $.memWithAnySkill = function(skillIds, mems = this.members(), isEditMems = false) {
        const filterFunc = mem => NEW._MEM_WITH_ANY_SKILL(skillIds, mem);
        return NEW._FILTERED_MEMS(mems, isEditMems, filterFunc);
    }; // $.memWithAnySkill

    NEW._MEM_WITH_ALL_SKILLS =
            NEW._MEM_WITH_COND.bind(undefined, "hasAllSkills");
    /**
     * Script call/Nullipotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {[id]} skillIds - The list of id of skills involved
     * @param {[Game_Battler]} mems - The list of battlers to be filtered
     * @param {boolean} isEditMems - Whether the mems argument will be mutated
     * @returns {[Game_Batler]} The list of requested unit members
     */
    $.memWithAllSkills = function(skillIds, mems = this.members(), isEditMems = false) {
        const filterFunc = mem => NEW._MEM_WITH_ALL_SKILLS(skillIds, mem);
        return NEW._FILTERED_MEMS(mems, isEditMems, filterFunc);
    }; // $.memWithAllSkills

    NEW._MEM_WITHOUT_ANY_SKILL =
            NEW._MEM_WTHOUT_COND.bind(undefined, "hasAnySkill");
    /**
     * Script call/Nullipotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {[id]} skillIds - The list of id of skills involved
     * @param {[Game_Battler]} mems - The list of battlers to be filtered
     * @param {boolean} isEditMems - Whether the mems argument will be mutated
     * @returns {[Game_Batler]} The list of requested unit members
     */
    $.memWithoutAnySkill = function(skillIds, mems = this.members(), isEditMems = false) {
        const filterFunc = mem => NEW._MEM_WITHOUT_ANY_SKILL(skillIds, mem);
        return NEW._FILTERED_MEMS(mems, isEditMems, filterFunc);
    }; // $.memWithoutAnySkill

    NEW._MEM_WITHOUT_ALL_SKILLS =
            NEW._MEM_WTHOUT_COND.bind(undefined, "hasAllSkills");
    /**
     * Script call/Nullipotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {[id]} skillIds - The list of id of skills involved
     * @param {[Game_Battler]} mems - The list of battlers to be filtered
     * @param {boolean} isEditMems - Whether the mems argument will be mutated
     * @returns {[Game_Batler]} The list of requested unit members
     */
    $.memWithoutAllSkills = function(skillIds, mems = this.members(), isEditMems = false) {
        const filterFunc = mem => NEW._MEM_WITHOUT_ALL_SKILLS(skillIds, mem);
        return NEW._FILTERED_MEMS(mems, isEditMems, filterFunc);
    }; // $.memWithoutAllSkills

    /**
     * Script call/Nullipotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {[string]} stats - The list of names of stats involved
     * @param {[Game_Battler]} mems - The list of battlers to be filtered
     * @param {boolean} isEditMems - Whether the mems argument will be mutated
     * @returns {[Game_Batler]} The list of requested unit members
     */
    $.anyHighestStatMem = function(stats, mems = this.members(), isEditMems = false) {
        return NEW._statFilteredMem.call(
                this, NEW._DESCENDING_SORT, NEW._EQUALS, "some", stats, mems, isEditMems);
    }; // $.anyHighestStatMem

    /**
     * Script call/Nullipotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {[string]} stats - The list of names of stats involved
     * @param {[Game_Battler]} mems - The list of battlers to be filtered
     * @param {boolean} isEditMems - Whether the mems argument will be mutated
     * @returns {[Game_Batler]} The list of requested unit members
     */
    $.allHighestStatsMem = function(stats, mems = this.members(), isEditMems = false) {
        return NEW._statFilteredMem.call(
                this, NEW._DESCENDING_SORT, NEW._EQUALS, "every", stats, mems, isEditMems);
    }; // $.allHighestStatsMem

    /**
     * Script call/Nullipotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {[string]} stats - The list of names of stats involved
     * @param {[Game_Battler]} mems - The list of battlers to be filtered
     * @param {boolean} isEditMems - Whether the mems argument will be mutated
     * @returns {[Game_Batler]} The list of requested unit members
     */
    $.notAnyHighestStatMem = function(stats, mems = this.members(), isEditMems = false) {
        return NEW._statFilteredMem.call(
                this, NEW._DESCENDING_SORT, NEW._NOT_EQUALS, "every", stats, mems, isEditMems);
    }; // $.notAnyHighestStatMem

    /**
     * Script call/Nullipotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {[string]} stats - The list of names of stats involved
     * @param {[Game_Battler]} mems - The list of battlers to be filtered
     * @param {boolean} isEditMems - Whether the mems argument will be mutated
     * @returns {[Game_Batler]} The list of requested unit members
     */
    $.notAllHighestStatsMem = function(stats, mems = this.members(), isEditMems = false) {
        return NEW._statFilteredMem.call(
                this, NEW._DESCENDING_SORT, NEW._NOT_EQUALS, "some", stats, mems, isEditMems);
    }; // $.notAllHighestStatsMem

    /**
     * Script call/Nullipotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {[string]} stats - The list of names of stats involved
     * @param {[Game_Battler]} mems - The list of battlers to be filtered
     * @param {boolean} isEditMems - Whether the mems argument will be mutated
     * @returns {[Game_Batler]} The list of requested unit members
     */
    $.anyLowestStatMem = function(stats, mems = this.members(), isEditMems = false) {
        return NEW._statFilteredMem.call(
                this, NEW._ASCENDING_SORT, NEW._EQUALS, "some", stats, mems, isEditMems);
    }; // $.anyLowestStatMem

    /**
     * Script call/Nullipotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {[string]} stats - The list of names of stats involved
     * @param {[Game_Battler]} mems - The list of battlers to be filtered
     * @param {boolean} isEditMems - Whether the mems argument will be mutated
     * @returns {[Game_Batler]} The list of requested unit members
     */
    $.allLowestStatsMem = function(stats, mems = this.members(), isEditMems = false) {
        return NEW._statFilteredMem.call(
                this, NEW._ASCENDING_SORT, NEW._EQUALS, "every", stats, mems, isEditMems);
    }; // $.allLowestStatsMem

    /**
     * Script call/Nullipotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {[string]} stats - The list of names of stats involved
     * @param {[Game_Battler]} mems - The list of battlers to be filtered
     * @param {boolean} isEditMems - Whether the mems argument will be mutated
     * @returns {[Game_Batler]} The list of requested unit members
     */
    $.notAnyLowestStatMem = function(stats, mems = this.members(), isEditMems = false) {
        return NEW._statFilteredMem.call(
                this, NEW._ASCENDING_SORT, NEW._NOT_EQUALS, "every", stats, mems, isEditMems);
    }; // $.notAnyLowestStatMem

    /**
     * Script call/Nullipotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {[string]} stats - The list of names of stats involved
     * @param {[Game_Battler]} mems - The list of battlers to be filtered
     * @param {boolean} isEditMems - Whether the mems argument will be mutated
     * @returns {[Game_Batler]} The list of requested unit members
     */
    $.notAllLowestStatsMem = function(stats, mems = this.members(), isEditMems = false) {
        return NEW._statFilteredMem.call(
                this, NEW._ASCENDING_SORT, NEW._NOT_EQUALS, "some", stats, mems, isEditMems);
    }; // $.notAllLowestStatsMem

    /**
     * Script call/Nullipotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {[string]} stats - The list of names of stats involved
     * @param {number} val - The value to be checked against
     * @param {[Game_Battler]} mems - The list of battlers to be filtered
     * @param {boolean} isEditMems - Whether the mems argument will be mutated
     * @returns {[Game_Batler]} The list of requested unit members
     */
    $.anyAboveStatMem = function(stats, val, mems = this.members(), isEditMems = false) {
        const func = NEW._IS_GREATER_THAN;
        return NEW._statValFilteredMem.call(this, func, "some", stats, val, mems, isEditMems);
    }; // $.anyAboveStatMem

    /**
     * Script call/Nullipotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {[string]} stats - The list of names of stats involved
     * @param {number} val - The value to be checked against
     * @param {[Game_Battler]} mems - The list of battlers to be filtered
     * @param {boolean} isEditMems - Whether the mems argument will be mutated
     * @returns {[Game_Batler]} The list of requested unit members
     */
    $.allAboveStatMem = function(stats, val, mems = this.members(), isEditMems = false) {
        const func = NEW._IS_GREATER_THAN;
        return NEW._statValFilteredMem.call(this, func, "every", stats, val, mems, isEditMems);
    }; // $.allAboveStatMem

    /**
     * Script call/Nullipotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {[string]} stats - The list of names of stats involved
     * @param {number} val - The value to be checked against
     * @param {[Game_Battler]} mems - The list of battlers to be filtered
     * @param {boolean} isEditMems - Whether the mems argument will be mutated
     * @returns {[Game_Batler]} The list of requested unit members
     */
    $.anyBelowStatMem = function(stats, val, mems = this.members(), isEditMems = false) {
        const func = NEW._IS_LESS_THAN;
        return NEW._statValFilteredMem.call(this, func, "some", stats, val, mems, isEditMems);
    }; // $.anyBelowStatMem

    /**
     * Script call/Nullipotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {[string]} stats - The list of names of stats involved
     * @param {number} val - The value to be checked against
     * @param {[Game_Battler]} mems - The list of battlers to be filtered
     * @param {boolean} isEditMems - Whether the mems argument will be mutated
     * @returns {[Game_Batler]} The list of requested unit members
     */
    $.allBelowStatMem = function(stats, val, mems = this.members(), isEditMems = false) {
        const func = NEW._IS_LESS_THAN;
        return NEW._statValFilteredMem.call(this, func, "every", stats, val, mems, isEditMems);
    }; // $.allBelowStatMem

    NEW._MEM_WITH_ANY_USABLE_SKILL =
            NEW._MEM_WITH_COND.bind(undefined, "hasAnyUsableSkill");
    /**
     * Script call/Nullipotent
     * @author DoubleX @interface @since v1.01a @version v1.01a
     * @param {[id]} skillIds - The list of id of skills involved
     * @param {[Game_Battler]} mems - The list of battlers to be filtered
     * @param {boolean} isEditMems - Whether the mems argument will be mutated
     * @returns {[Game_Batler]} The list of requested unit members
     */
    $.memWithAnyUsableSkill = function(skillIds, mems = this.members(), isEditMems = false) {
        const filterFunc = mem => NEW._MEM_WITH_ANY_USABLE_SKILL(skillIds, mem);
        return NEW._FILTERED_MEMS(mems, isEditMems, filterFunc);
    }; // $.memWithAnyUsableSkill

    NEW._MEM_WITH_ALL_USABLE_SKILLS =
            NEW._MEM_WITH_COND.bind(undefined, "hasAllUsableSkills");
    /**
     * Script call/Nullipotent
     * @author DoubleX @interface @since v1.01a @version v1.01a
     * @param {[id]} skillIds - The list of id of skills involved
     * @param {[Game_Battler]} mems - The list of battlers to be filtered
     * @param {boolean} isEditMems - Whether the mems argument will be mutated
     * @returns {[Game_Batler]} The list of requested unit members
     */
    $.memWithAllUsableSkills = function(skillIds, mems = this.members(), isEditMems = false) {
        const func = mem => NEW._MEM_WITH_ALL_USABLE_SKILLS(skillIds, mem);
        return NEW._FILTERED_MEMS(mems, isEditMems, func);
    }; // $.memWithAllUsableSkills

    NEW._MEM_WITHOUT_ANY_USABLE_SKILL =
            NEW._MEM_WTHOUT_COND.bind(undefined, "hasAnyUsableSkill");
    /**
     * Script call/Nullipotent
     * @author DoubleX @interface @since v1.01a @version v1.01a
     * @param {[id]} skillIds - The list of id of skills involved
     * @param {[Game_Battler]} mems - The list of battlers to be filtered
     * @param {boolean} isEditMems - Whether the mems argument will be mutated
     * @returns {[Game_Batler]} The list of requested unit members
     */
    $.memWithoutAnyUsableSkill = function(skillIds, mems = this.members(), isEditMems = false) {
        const func = mem => NEW._MEM_WITHOUT_ANY_USABLE_SKILL(skillIds, mem);
        return NEW._FILTERED_MEMS(mems, isEditMems, func);
    }; // $.memWithoutAnyUsableSkill

    NEW._MEM_WITHOUT_ALL_USABLE_SKILLS =
            NEW._MEM_WTHOUT_COND.bind(undefined, "hasAllUsableSkills");
    /**
     * Script call/Nullipotent
     * @author DoubleX @interface @since v1.01a @version v1.01a
     * @param {[id]} skillIds - The list of id of skills involved
     * @param {[Game_Battler]} mems - The list of battlers to be filtered
     * @param {boolean} isEditMems - Whether the mems argument will be mutated
     * @returns {[Game_Batler]} The list of requested unit members
     */
    $.memWithoutAllUsableSkills = function(skillIds, mems = this.members(), isEditMems = false) {
        const func = mem => NEW._MEM_WITHOUT_ALL_USABLE_SKILLS(skillIds, mem);
        return NEW._FILTERED_MEMS(mems, isEditMems, func);
    }; // $.memWithoutAllUsableSkills

    NEW._SORTED_STATS = (stats, mems, compareFunc) => {
        return stats.map(stat => mems.map(mem => mem[stat]).sort(compareFunc));
    }; // NEW._SORTED_STATS
    /**
     * The this pointer is Game_Unit.prototype
     * Nullipotent
     * @author DoubleX @since v1.00a @version v1.00a
     * @param {(number, number) -> number} compareFunc - The compare function
     * @param {(number, number) -> boolean} filterFunc - The filter function
     * @enum @param {string} quantifier - some for any skill/every for all stat
     * @param {[string]} stats - The list of names of stats involved
     * @param {[Game_Battler]} mems - The list of battlers to be filtered
     * @param {boolean} isEditMems - Whether the mems argument will be mutated
     * @returns {[Game_Batler]} The list of requested unit members
     */
    NEW._statFilteredMem = function(compareFunc, filterFunc, quantifier, stats, mems = this.members(), isEditMems = false) {
        const sortedStats = NEW._SORTED_STATS(stats, mems, compareFunc);
        return NEW._FILTERED_MEMS(mems, isEditMems, mem => {
            return stats[quantifier]((stat, i) => {
                return filterFunc(mem[stat], sortedStats[i][0]);
            });
        });
    }; // NEW._statFilteredMem

    /**
     * The this pointer is Game_Unit.prototype
     * Nullipotent
     * @author DoubleX @since v1.00a @version v1.00a
     * @param {(number, number) -> boolean} filterFunc - The filter function
     * @enum @param {string} quantifier - some for any skill/every for all stat
     * @param {[string]} stats - The list of names of stats involved
     * @param {number} val - The value to be checked against
     * @param {[Game_Battler]} mems - The list of battlers to be filtered
     * @param {boolean} isEditMems - Whether the mems argument will be mutated
     * @returns {[Game_Batler]} The list of requested unit members
     */
    NEW._statValFilteredMem = function(filterFunc, quantifier, stats, val, mems = this.members(), isEditMems = false) {
        return NEW._FILTERED_MEMS(mems, isEditMems, mem => {
            return stats[quantifier](stat => filterFunc(mem[stat], val));
        });
    }; // NEW._statValFilteredMem

})(Game_Unit.prototype, DoubleX_RMMZ.Unit_Filters);

/*============================================================================*/
