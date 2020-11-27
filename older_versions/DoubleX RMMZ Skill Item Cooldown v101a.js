/*============================================================================
 *    ## Plugin Info
 *----------------------------------------------------------------------------
 *    # Plugin Name
 *      DoubleX RMMZ Skill Item Cooldown
 *----------------------------------------------------------------------------
 *    # Introduction
 *    1. This plugins lets you set 2 kinds of skill/item cooldowns:
 *       - Skill/Item cooldown - The number of turns(battle turn in turn based
 *                               individual turn in TPBS) needed for the
 *                               skill/item to cooldown before it becomes
 *                               usable again
 *       - Battler cooldown - The number of turns(battle turn in turn based
 *                            individual turn in TPBS) needed for the battler
 *                            just executed the skill/item to cooldown before
 *                            that battler can input actions again
 *    2. If the skill/item cooldown is 1 turn, it means battlers with multiple
 *       action slots can only input that skill/item once instead of as many
 *       as the action slots allow
 *       If the battler cooldown is negative, it means the TPB bar charging
 *       value will be positive instead of 0 right after executing the
 *       skill/item(So a -1 battler cooldown means the battler will become
 *       able to input actions again right after executing such skills/items)
 *    3. When updating the battler individual turn count in TPBS, the decimal
 *       parts of the battler will be discarded, but those parts will still be
 *       used when actually increasing the time needed for that battler to
 *       become able to input actions again
 *       In the turn based battle system, the decimal parts of the battler
 *       cooldown counts as 1 turn
 *       The decimal parts of the final skill/item cooldown value will be
 *       discarded
 *    4. Skill/item cooldown can be set to apply outside battles as well
 *       Skill/item cooldown won't be updated when the battler has fully
 *       charged the TPBS bar
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
 *      1. https://www.youtube.com/watch?v=jS--0ODtLAY
 *      This Plugin:
 *      1. https://github.com/Double-X/DoubleX-RMMZ/blob/master/DoubleX%20RMMZ%20Skill%20Item%20Cooldown.js
 *      Posts:
 *      1. https://forums.rpgmakerweb.com/index.php?threads/doublex-rmmz-skill-item-cooldown.126221/
 *      2. https://www.rpgmakercentral.com/topic/42558-doublex-rmmz-skill-item-cooldown/
 *      3. https://rpgmaker.net/engines/rmmz/utilities/253/
 *      4. https://www.save-point.org/thread-8152-post-52587.html
 *      5. https://gdu.one/forums/topic/13618-doublex-rmmz-skill-item-cooldown/
 *      6. http://www.hbgames.org/forums/viewtopic.php?p=945067
 *      7. https://forum.chaos-project.com/index.php/topic,16067.msg197372.html
 *      8. https://doublexrpgmaker.wordpress.com/2020/08/27/doublex-rmmz-skill-item-cooldown/
 *      9. https://www.patreon.com/posts/40913611
 *      10. https://www.makerdevs.com/plugin/doublex-rmmz-skill-item-cooldown
 *----------------------------------------------------------------------------
 *    # Instructions
 *      1. The default plugin parameters file name is
 *         DoubleX RMMZ Skill Item Cooldown
 *         If you want to change that, you must edit the value of
 *         DoubleX_RMMZ.Skill_Item_Cooldown.PLUGIN_NAME, which must be done
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
 *      { codebase: "1.0.2", plugin: "v1.01a" }(2020 Oct 11 GMT 0900):
 *      1. Added the plugin query and command counterparts for the following
 *         script calls of this plugin:
 *         - battlerCooldown()
 *         - isBattlerCooldown()
 *         - skillItemCooldown(item)
 *         - isSkillItemCooldown(item)
 *      { codebase: "1.0.0", plugin: "v1.00a" }(2020 Aug 27 GMT 0300):
 *      1. 1st version of this plugin finished
 *----------------------------------------------------------------------------
 *    # Todo
 *      1. Shows the TPB cooldown bar inside battles(with configurable colors)
 *      2. Shows the skill/item and battler cooldown values for each
 *         skill/item both inside and outside battles
 *      3. Lets you bind some hotkeys to cancel some actor cooldowns under
 *         conditions set by you and the events set by you to be triggered
 *         upon successful cancels
 *============================================================================*/
/*:
 * @url https://www.patreon.com/doublex
 * @target MZ
 * @plugindesc Versions: { codebase: "1.0.0", plugin: "v1.01a" }
 * Lets you set some skills/items to have battler and skill/item cooldowns
 * @orderAfter DoubleX_RMMZ_Enhanced_Codebase
 * @orderAfter DoubleX RMMZ Enhanced Codebase
 * @orderAfter DoubleX_RMMZ_Plugin_Query
 * @base DoubleX RMMZ Enhanced Codebase
 * @author DoubleX
 *
 * @param clearBattlerSkillItemCooldownOnBattleStart
 * @type note
 * @desc Let you clear battler/skill/item cooldowns on battle start
 * actor is the actor to have all those cooldowns cleared
 * @default "actor.clearBattlerSkillItemCooldowns();"
 *
 * @param clearBattlerSkillItemCooldownOnBattleEnd
 * @type note
 * @desc Lets you clear battler/skill/item cooldowns on battle end
 * actor is the actor to have all those cooldowns cleared
 * @default "actor.clearBattlerSkillItemCooldowns();"
 *
 * @param battlerNotetagDataTypePriorities
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
 * @desc Sets data type priorities of the battler notetags
 * You can use script calls/plugin commands to change this
 * @default ["latestSkillItem","states","enemy","armors","weapons","class","actor"]
 *
 * @param skillItemNotetagDataTypePriorities
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
 * @desc Sets data type priorities of the skillItem notetags
 * You can use script calls/plugin commands to change this
 * @default ["latestSkillItem","states","enemy","armors","weapons","class","actor"]
 *
 * @command setSkillItemCooldownParam
 * @desc Applies script call $gameSystem.setSkillItemCooldownParam(param, val)
 * @arg param
 * @desc The name of a valid parameter of this plugin
 * @arg val
 * @desc A valid new fully parsed value of the parameter param
 *
 * @command clearBattlerSkillItemCooldowns
 * @desc Applies script call battler.clearBattlerSkillItemCooldowns()
 * @arg side
 * @type select
 * @option Actor
 * @value actor
 * @option Enemy
 * @value enemy
 * @desc The side of the battler setting the battler cooldown
 * @arg label
 * @type number
 * @desc The actor id/enemy index of the battler setting the battler cooldown
 *
 * @command setBattlerCooldown
 * @desc Applies script call battler.setBattlerCooldown(turnCount)
 * @arg side
 * @type select
 * @option Actor
 * @value actor
 * @option Enemy
 * @value enemy
 * @desc The side of the battler setting the battler cooldown
 * @arg label
 * @type number
 * @desc The actor id/enemy index of the battler setting the battler cooldown
 * @arg turnCount
 * @type number
 * @min -999999
 * @desc The new battler cooldown turn count of the battler involved
 *
 * @command setSkillItemCooldown
 * @desc Applies script call battler.setSkillItemCooldown(item, turnCount)
 * @arg side
 * @type select
 * @option Actor
 * @value actor
 * @option Enemy
 * @value enemy
 * @desc The side of the battler setting the skill/item cooldown
 * with the skill/item involved
 * @arg label
 * @type number
 * @desc The actor id/enemy index of the battler setting the
 * skill/item cooldown with the skill/item involved
 * @arg type
 * @type select
 * @option Skill
 * @value skill
 * @option Item
 * @value item
 * @desc The skill/item to have its skill/item cooldown set for the
 * battler involved
 * @arg id
 * @type number
 * @desc The id of the skill/item to have its skill/item cooldown
 * set for the battler involved
 * @arg turnCount
 * @type number
 * @min -999999
 * @desc The new skill/item cooldown turn count of the skill/item involved
 *
 * @command battlerCooldown
 * @desc Stores the battler.battlerCooldown() script call results
 * into the game variable with id varId
 * @arg side
 * @type select
 * @option Actor
 * @value actor
 * @option Enemy
 * @value enemy
 * @desc The side of the battler setting the battler cooldown
 * @arg label
 * @type number
 * @desc The actor id/enemy index of the battler setting the battler cooldown
 * @arg varId
 * @type number
 * @desc The id of the game variable storing the script call result
 *
 * @command isBattlerCooldown
 * @desc Stores the battler.isBattlerCooldown() script call results
 * into the game switch with id switchId
 * @arg side
 * @type select
 * @option Actor
 * @value actor
 * @option Enemy
 * @value enemy
 * @desc The side of the battler setting the battler cooldown
 * @arg label
 * @type number
 * @desc The actor id/enemy index of the battler setting the battler cooldown
 * @arg switchId
 * @type number
 * @desc The id of the game switch storing the script call result
 *
 * @command skillItemCooldown
 * @desc Stores the battler.skillItemCooldown(item) script call
 * results into the game variable with id varId
 * @arg side
 * @type select
 * @option Actor
 * @value actor
 * @option Enemy
 * @value enemy
 * @desc The side of the battler setting the skill/item cooldown
 * with the skill/item involved
 * @arg label
 * @type number
 * @desc The actor id/enemy index of the battler setting the
 * skill/item cooldown with the skill/item involved
 * @arg type
 * @type select
 * @option Skill
 * @value skill
 * @option Item
 * @value item
 * @desc The skill/item to have its skill/item cooldown set for the
 * battler involved
 * @arg id
 * @type number
 * @desc The id of the skill/item to have its skill/item cooldown
 * set for the battler involved
 * @arg varId
 * @type number
 * @desc The id of the game variable storing the script call result
 *
 * @command isSkillItemCooldown
 * @desc Stores the battler.isSkillItemCooldown(item) script call
 * results into the game switch with id switchId
 * @arg side
 * @type select
 * @option Actor
 * @value actor
 * @option Enemy
 * @value enemy
 * @desc The side of the battler setting the skill/item cooldown
 * with the skill/item involved
 * @arg label
 * @type number
 * @desc The actor id/enemy index of the battler setting the
 * skill/item cooldown with the skill/item involved
 * @arg type
 * @type select
 * @option Skill
 * @value skill
 * @option Item
 * @value item
 * @desc The skill/item to have its skill/item cooldown set for the
 * battler involved
 * @arg id
 * @type number
 * @desc The id of the skill/item to have its skill/item cooldown
 * set for the battler involved
 * @arg switchId
 * @type number
 * @desc The id of the game switch storing the script call result
 *
 * @help
 *============================================================================
 *    ## Notetag Info
 *       1. Among all the same notetag types in the same data, all can be
 *          effective
 *       2. Each line can only have at most 1 notetag
 *       3. The following is the structure of all notetags in this plugin:
 *          - <doublex rmmz cooldown>
 *          - <cooldown>
 *          Where contents are in the form of type suffixes: entries
 *          Either of the above can be used, but the 1st one reduce the chance
 *          of causing other plugins to treat the notetags of this plugin as
 *          theirs, while the 2nd one is more user-friendly
 *          - type is one of the following:
 *            1. battler
 *            2. skillItem
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
 *            (Game_Battler.prototype)
 *          - entries is the list of entries in the form of:
 *            entry1, entry2, entry3, ..., entryn
 *            Where entryi must conform with the suffixi specifications
 *----------------------------------------------------------------------------
 *    # Actor/Class/Learnt Skills/Usable Skills/Posessed Items/Usable Items/
 *      Inputted Skill Or Item/Weapon/Armor/Enemy/States Notetags
 *      1. battler condSuffix opSuffix valSuffix: condEntry, opEntry, valEntry
 *         - Applies the following formula on the current battler cooldown:
 *           current = current operator value
 *           if condEntry returns a turthy result
 *           Where current is the current battler cooldown, operator is the
 *           operator specified by opEntry, and value is the value specified
 *           by valEntry
 *         - If there are no notetags, current will be 0, as it's the default
 *           battler cooldown value
 *         - condSuffix can be val, switch or script
 *         - Both opSuffix and valSuffix can be val, var or script
 *         - The result of condEntry can be anything as only whether it's
 *           truthy matters
 *         - The result of opSuffix must be either of the following:
 *           +
 *           -
 *           *
 *           /
 *           %
 *           =
 *         - The result of valEntry can be any number
 *         - E.g.:
 *           <cooldown battler script val val: 1, +, 1> will cause the
 *           battler to wait for 1 turn before the TPB bar starts to charge
 *           again, and the individual turn count will be added by 1 after
 *           this wait, in the case of TPBS, and the battler won't be able to
 *           input actions in the next turn for turn based battles, but the
 *           battler cooldown won't be triggered by using skills/items outside
 *           battles, because the value of variable with id 1 is
 *           return $gameParty.inBattle(); meaning that this notetag will only
 *           be effective inside battles
 *           Cooldowns triggered inside battles can still carry over outside
 *           battles if the battle ends but the cooldown's still not expired
 *           if it's not cleared in clearBattlerSkillItemCooldownOnBattleEnd,
 *           and vice verse if it's not cleared in
 *           clearBattlerSkillItemCooldownOnBattleStart
 *      2. skillItem condSuffix opSuffix valSuffix: condEntry, opEntry, valEntry
 *         - Applies the following formula on the current skill/item cooldown:
 *           current = current operator value
 *           if condEntry returns a turthy result
 *           Where current is the current skill/item cooldown, operator is the
 *           operator specified by opEntry, and value is the value specified
 *           by valEntry
 *         - If there are no notetags, current will be 0, as it's the default
 *           skill/item cooldown value
 *         - condSuffix can be val, switch or script
 *         - Both opSuffix and valSuffix can be val, var or script
 *         - The result of condEntry can be anything as only whether it's
 *           truthy matters
 *         - The result of opSuffix must be either of the following:
 *           +
 *           -
 *           *
 *           /
 *           %
 *           =
 *         - The result of valEntry can be any number
 *         - THIS NOTETAG DOESN'T WORK WITH ATTACK, GUARD NOR FORCED ACTIONS
 *         - E.g.:
 *           <cooldown skillItem switch val val: 1, +, 2> will cause the
 *           battler to be unable to input the skill/item in the next turn if
 *           the game switch with id 1 is on(regrdless of whether it's inside
 *           or outside battles)
 *           Cooldowns triggered outside battles can still carry over inside
 *           battles if the battle ends but the cooldown's still not expired
 *           if it's not cleared in
 *           clearBattlerSkillItemCooldownOnBattleStart, and vice verse if
 *           it's not cleared in clearBattlerSkillItemCooldownOnBattleEnd
 *============================================================================
 *    ## Script Call Info
 *----------------------------------------------------------------------------
 *    # Parameter manipulations
 *      1. $gameSystem.setSkillItemCooldownParam(param, val)
 *         - Sets the fully parsed value of the parameter param as val
 *         - param must be the name of a valid parameter of this plugin
 *         - val must be a valid new fully parsed value of the parameter param
 *         - Such parameter value changes will be saved
 *         - E.g.:
 *           $gameSystem.setSkillItemCooldownParam("battlerNotetagDataTypePriorities", [
 *               "latestSkillItem",
 *               "states",
 *               "armors",
 *               "weapons",
 *               "class",
 *               "actor",
 *               "enemy"
 *           ]) sets the fully parsed value of the parameter
 *           battlerNotetagDataTypePriorities as
 *           ["latestSkillItem","states", "armors", "weapons", "class", "actor", "enemy"]
 *      2. $gameSystem.skillItemCooldownParam(param)
 *         - Returns the fully parsed value of the parameter param
 *         - param must be the name of a valid parameter of this plugin
 *         - E.g.:
 *           $gameSystem.skillItemCooldownParam("skillItemNotetagDataTypePriorities")
 *           returns the fully parsed value of the parameter
 *           skillItemNotetagDataTypePriorities, which should be
 *           ["latestSkillItem","states", "armors", "weapons", "class", "actor", "enemy"]
 *           if it uses its default parameter value
 *    # Battler manipulations
 *      1. clearBattlerSkillItemCooldowns()
 *         - Clears all battler and skill/item cooldowns for the battler
 *           involved
 *         - E.g.:
 *           $gameActors.actor(1).clearBattlerSkillItemCooldowns(1) will clear
 *           all battler and skill/item cooldowns for the game actor with id 1
 *      2. setBattlerCooldown(turnCount)
 *         - Sets the battler cooldown turn count as turnCount for the battler
 *           involved
 *         - turnCount must be a number
 *         - E.g.:
 *           $gameActors.actor(1).setBattlerCooldown(1) will set the battler
 *           cooldown turn count of the actor with id 1 as 1, meaning that the
 *           battler will take 1 idle individual turn right after executing
 *           all actions but before charging the TPB bar again(in the case of
 *           TPBS) and in the case of the turn based battle system, that
 *           battler won't be able to input actions in the next turn
 *      3. battlerCooldown()
 *         - Returns the battler cooldown turn count of the battler involed
 *         - E.g.:
 *           $gameParty.battleMembers(0).battlerCooldown() will return the
 *           battler cooldown turn count of the 1st game party member in the
 *           battle
 *      4. isBattlerCooldown()
 *         - Returns if the battler involved is having battler cooldown
 *         - E.g.:
 *           $gameParty.aliveMembers(1).isBattlerCooldown() will return if the
 *           2nd alive game party member is having battler cooldown
 *      5. setSkillItemCooldown(item, turnCount)
 *         - Sets the skill/item cooldown turn count of item as turnCount for
 *           the battler involved
 *         - item must be the data of the skill/item to have its cooldown set
 *         - turnCount must be a number
 *         - E.g.:
 *           $gameParty.movableMembers(2).setSkillItemCooldown($dataSkills[3], 2)
 *           will set the skill/item cooldown turn count of the skill with id
 *           3 for the 3rd movable game party member as 2, meaning that that
 *           battler can't input that skill for the next 2 turns
 *      6. skillItemCooldown(item)
 *         - Returns the skill/item cooldown with item of the battler involved
 *         - E.g.:
 *           $gameTroop.members(0).skillItemCooldown($dataItems[1]) will
 *           return the skill/item cooldown with item with id 1 of the 1st
 *           game troop member
 *      7. isSkillItemCooldown(item)
 *         - Returns if the battler involved is having skill/item cooldown
 *           with item
 *         - E.g.:
 *           $gameParty.deadMembers(1).isSkillItemCooldown($dataItems[2]) will
 *           return if the 2nd dead game troop member is having skill/item
 *           cooldown with item with id 2
 *============================================================================
 *    ## Plugin Command Info
 *----------------------------------------------------------------------------
 *      1. setSkillItemCooldownParam param val
 *         - Applies the script call
 *           $gameSystem.setSkillItemCooldownParam(param, val)
 *      2. clearBattlerSkillItemCooldowns side label
 *         - Applies the script call battler.clearBattlerSkillItemCooldowns()
 *         - battler is the battler identified by side and label
 *      3. setBattlerCooldown side label turnCount
 *         - Applies the script call battler.setBattlerCooldown(turnCount)
 *         - battler is the battler identified by side and label
 *      4. setSkillItemCooldown side label item turnCount
 *         - Applies the script call
 *           battler.setSkillItemCooldown(item, turnCount)
 *         - battler is the battler identified by side and label
 *      5.(v1.01a+) battlerCooldown side label varId
 *         - Stores the returned result of the script call
 *           battler.battlerCooldown() in the game variable with id varId
 *         - battler is the battler identified by side and label
 *         - side is either actor or enemy
 *         - label is the actor id for side actor and troop member index for
 *           side enemy
 *      6.(v1.01a+) isBattlerCooldown side label switchId
 *         - Stores the returned result of the script call
 *           battler.isBattlerCooldown() in the game switch with id switchId
 *         - battler is the battler identified by side and label
 *         - side is either actor or enemy
 *         - label is the actor id for side actor and troop member index for
 *           side enemy
 *      7.(v1.01a+) skillItemCooldown side label type id varId
 *         - Stores the returned result of the script call
 *           battler.skillItemCooldown(item) in the game variable with id
 *           varId
 *         - battler is the battler identified by side and label
 *         - side is either actor or enemy
 *         - label is the actor id for side actor and troop member index for
 *           side enemy
 *         - item is the skill/item identified by type and id
 *         - type is either skill or item
 *         - id is the id of the skill/item
 *      8.(v1.01a+) isSkillItemCooldown side label type id switchId
 *         - Stores the returned result of the script call
 *           battler.isSkillItemCooldown(item) in the game switch with id
 *           switchId
 *         - Applies the script call battler.isSkillItemCooldown(item)
 *         - battler is the battler identified by side and label
 *         - side is either actor or enemy
 *         - label is the actor id for side actor and troop member index for
 *           side enemy
 *         - item is the skill/item identified by type and id
 *         - type is either skill or item
 *         - id is the id of the skill/item
 *============================================================================
 *    ## (v1.01a+)Plugin Query Info
 *       1. You need to use DoubleX_RMMZ_Plugin_Query as well in order to use
 *          the plugin queries of this plugin:
 *          https://github.com/Double-X/DoubleX-RMMZ/blob/master/DoubleX_RMMZ_Plugin_Query.js
 *----------------------------------------------------------------------------
 *      1. battlerCooldown side label
 *         - Applies the script call battler.battlerCooldown()
 *         - battler is the battler identified by side and label
 *         - side is either actor or enemy
 *         - label is the actor id for side actor and troop member index for
 *           side enemy
 *      2. isBattlerCooldown side label
 *         - Applies the script call battler.isBattlerCooldown()
 *         - battler is the battler identified by side and label
 *         - side is either actor or enemy
 *         - label is the actor id for side actor and troop member index for
 *           side enemy
 *      3. skillItemCooldown side label type id
 *         - Applies the script call battler.skillItemCooldown(item)
 *         - battler is the battler identified by side and label
 *         - side is either actor or enemy
 *         - label is the actor id for side actor and troop member index for
 *           side enemy
 *         - item is the skill/item identified by type and id
 *         - type is either skill or item
 *         - id is the id of the skill/item
 *      4. isSkillItemCooldown side label type id
 *         - Applies the script call battler.isSkillItemCooldown(item)
 *         - battler is the battler identified by side and label
 *         - side is either actor or enemy
 *         - label is the actor id for side actor and troop member index for
 *           side enemy
 *         - item is the skill/item identified by type and id
 *         - type is either skill or item
 *         - id is the id of the skill/item
 *============================================================================
 */

// jshint esversion: 6

var DoubleX_RMMZ = DoubleX_RMMZ || {}; // var must be used or game will crash
// Separates the version numbers with the rest to make the former more clear
DoubleX_RMMZ.Skill_Item_Cooldown = {
    PLUGIN_NAME: "DoubleX RMMZ Skill Item Cooldown",
    VERSIONS: { codebase: "1.0.2", plugin: "v1.01a" }
}; // DoubleX_RMMZ.Skill_Item_Cooldown
//

(SIC => {

    "use strict";

    const pluginCodebaseVer = SIC.VERSIONS.codebase;
    if (Utils.checkRMVersion(pluginCodebaseVer)) return;
    console.warn(`Your codebase version is ${Utils.RPGMAKER_VERSION} but must be
                 at least ${pluginCodebaseVer} to use ${SIC.PLUGIN_NAME}`);

})(DoubleX_RMMZ.Skill_Item_Cooldown);

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

(SIC => {

    "use strict";

    const FP = SIC.FUNC_PARAMS = {};

    FP.PARAM_FUNCS = new Map();

    FP._PARAM_FUNC_ARGS = new Map(Object.entries({
        clearBattlerSkillItemCooldownOnBattleStart: ["actor"],
        clearBattlerSkillItemCooldownOnBattleEnd: ["actor"]
    }));

    FP.storeFuncParam = (param, val) => {
        if (!FP._PARAM_FUNC_ARGS.has(param)) return;
        const args = FP._PARAM_FUNC_ARGS.get(param);
        // Using fastMerge would mutate the parameter function argument lists
        FP.PARAM_FUNCS.set(param, new Function(...args.concat(val)));
        //
    }; // FP.storeFuncParam

})(DoubleX_RMMZ.Skill_Item_Cooldown);

/*----------------------------------------------------------------------------*/

(SIC => {

    "use strict";

    const PQ = SIC.Plugin_Cmd_Query = {};

    PQ._SET_QUERY = (name, cmdFunc, queryFunc) => {
        PluginManager.registerCommand(SIC.PLUGIN_NAME, name, cmdFunc);
        if (!DoubleX_RMMZ.Plugin_Query) return;
        PluginManager.eventCmdPluginQueries.set(name, queryFunc);
    }; // PQ._SET_QUERY

    PQ._BATTLER_ = (side, label) => {
        switch (side) {
            case "actor": return $gameActors.actor(+label);
            case "enemy": return $gameTroop.members()[+label];
            default: return undefined;
        }
    }; // PQ._BATTLER_

    const _BATTLER_QUERY_FUNC = (name, side, label) => {
        const battler_ = PQ._BATTLER_(side, label);
        return battler_ && battler_[name]();
    }; // _BATTLER_QUERY_FUNC
    (name => {
        PQ._SET_QUERY(name, ({ side, label, varId }) => {
            const val = _BATTLER_QUERY_FUNC(name, side, label);
            $gameVariables.setValue(+varId, val);
        }, _BATTLER_QUERY_FUNC.bind(undefined, name));
    })("battlerCooldown");
    (name => {
        PQ._SET_QUERY(name, ({ side, label, switchId }) => {
            const val = _BATTLER_QUERY_FUNC(name, side, label);
            $gameSwitches.setValue(+switchId, val);
        }, _BATTLER_QUERY_FUNC.bind(undefined, name));
    })("isBattlerCooldown");

    PQ._ITEM_ = (type, id) => {
        switch (type) {
            case "skill": return $dataSkills[+id];
            case "item": return $dataItems[+id];
            default: return undefined;
        }
    }; // PQ._ITEM_

    const _SKILL_ITEM_QUERY_FUNC = (name, side, label, type, id) => {
        const battler_ = PQ._BATTLER_(side, label), item_ = PQ._ITEM_(type, id);
        return battler_ && item_ && battler_[name](item_);
    }; // _SKILL_ITEM_QUERY_FUNC
    (name => {
        PQ._SET_QUERY(name, ({ side, label, type, id, varId }) => {
            const val = _SKILL_ITEM_QUERY_FUNC(name, side, label, type, id);
            $gameVariables.setValue(+varId, val);
        }, _SKILL_ITEM_QUERY_FUNC.bind(undefined, name));
    })("skillItemCooldown");
    (name => {
        PQ._SET_QUERY(name, ({ side, label, type, id, switchId }) => {
            const val = _SKILL_ITEM_QUERY_FUNC(name, side, label, type, id);
            $gameSwitches.setValue(+switchId, val);
        }, _SKILL_ITEM_QUERY_FUNC.bind(undefined, name));
    })("isSkillItemCooldown");

    PluginManager.registerCommand(SIC.PLUGIN_NAME, "clearBattlerSkillItemCooldowns", ({ side, label }) => {
        const battler_ = PQ._BATTLER_(side, label);
        if (battler_) battler_.clearBattlerSkillItemCooldowns();
    });
    PluginManager.registerCommand(SIC.PLUGIN_NAME, "setBattlerCooldown", ({ side, label, turnCount }) => {
        const battler_ = PQ._BATTLER_(side, label);
        if (battler_) battler_.setBattlerCooldown(+turnCount);
    });
    PluginManager.registerCommand(SIC.PLUGIN_NAME, "setSkillItemCooldown", ({ side, label, type, id, turnCount }) => {
        const battler_ = PQ._BATTLER_(side, label), item_ = PQ._ITEM_(type, id);
        if (battler_ && item_) battler_.setSkillItemCooldown(item_, +turnCount);
    });

})(DoubleX_RMMZ.Skill_Item_Cooldown);

/*----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------
 *    ## Managers
 *----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------
 *    # Edited class: DataManager
 *      - Loads all notetags of this plugin
 *----------------------------------------------------------------------------*/

((MZ_EC, SIC) => {

    "use strict";

    // Search tag: NOTE_TYPE
    MZ_EC.loadDataManagerNotetags(SIC, new Map(Object.entries({
        battler: new Map(Object.entries({
            suffix1: MZ_EC.BOOL_SUFFIXES, // condSuffix
            suffix2: MZ_EC.VAL_SUFFIXES, // opSuffix
            suffix3: MZ_EC.VAL_SUFFIXES, // valSuffix
            entry1: MZ_EC.BOOL_ENTRY, // condEntry
            entry2: MZ_EC.STRING_ENTRY, // opEntry
            entry3: MZ_EC.NUM_ENTRY // valEntry
        })), // battler
        skillItem: new Map(Object.entries({
            suffix1: MZ_EC.BOOL_SUFFIXES, // condSuffix
            suffix2: MZ_EC.VAL_SUFFIXES, // opSuffix
            suffix3: MZ_EC.VAL_SUFFIXES, // valSuffix
            entry1: MZ_EC.BOOL_ENTRY, // condEntry
            entry2: MZ_EC.STRING_ENTRY, // opEntry
            entry3: MZ_EC.NUM_ENTRY // valEntry
        })) // skillItem
    })), new Map(Object.entries({
        $dataActors: "actor",
        $dataClasses: "class",
        $dataSkills: "skill",
        $dataItems: "item",
        $dataWeapons: "weapon",
        $dataArmors: "armor",
        $dataEnemies: "enemy",
        $dataStates: "state"
    })), "cooldown");
    //

})(DoubleX_RMMZ.Enhanced_Codebase, DoubleX_RMMZ.Skill_Item_Cooldown);

/*----------------------------------------------------------------------------
 *    # Edited class: BattleManager
 *      - Initiates the battler and skill/item cooldown upon all action end
 *----------------------------------------------------------------------------*/

(($, MZ_EC, SIC) => {

    "use strict";

    const PF = SIC.FUNC_PARAMS.PARAM_FUNCS, {
        ORIG,
        NEW,
        extendFunc
    } = MZ_EC.setKlassContainer("BattleManager", $, SIC);

    extendFunc("initMembers", function() {
        ORIG.initMembers.apply(this, arguments);
        // Added to let you clear all battler/skill/item cooldowns for actors
        NEW._clearPartyBattlerSkillItemCooldownsOnBattleStart.call(this);
        //
    }); // v1.00a - v1.00a

    extendFunc("startTurn", function() {
        ORIG.startTurn.apply(this, arguments);
        // Added to clear all inputted skill items for all battlers
        NEW._clearAllInputtedSkillItems.call(this);
        //
    }); // v1.00a - v1.00a

    extendFunc("endBattlerActions", function(battler) {
        ORIG.endBattlerActions.apply(this, arguments);
        // Added to initiates the battler and skill/item cooldown
        battler.startBattlerCooldown();
        // It must be placed here or clearTpbChargeTime would break the cooldown
    }); // v1.00a - v1.00a

    extendFunc("updateBattleEnd", function() {
        ORIG.updateBattleEnd.apply(this, arguments);
        // Added to let you clear all battler/skill/item cooldowns for actors
        NEW._clearPartyBattlerSkillItemCooldownsOnBattleEnd.call(this);
        //
    }); // v1.00a - v1.00a

    /**
     * The this pointer is BattleManager
     * Idempotent
     * @author DoubleX @since v1.00a @version v1.00a
     */
    NEW._clearPartyBattlerSkillItemCooldownsOnBattleStart = function() {
        const clearFunc = PF.get("clearBattlerSkillItemCooldownOnBattleStart");
        $gameParty.allMembers().forEach(clearFunc, this);
    }; // NEW._clearPartyBattlerSkillItemCooldownsOnBattleStart

    NEW._CLEAR_INPUTTED_SKILL_ITEMS = battler => {
        battler.clearInputtedSkillItems();
    }; // NEW._CLEAR_INPUTTED_SKILL_ITEMS
    /**
     * The this pointer is BattleManager
     * Idempotent
     * @author DoubleX @since v1.00a @version v1.00a
     */
    NEW._clearAllInputtedSkillItems = function() {
        this.allBattleMembers().forEach(NEW._CLEAR_INPUTTED_SKILL_ITEMS);
    }; // NEW._clearAllInputtedSkillItems

    /**
     * The this pointer is BattleManager
     * Idempotent
     * @author DoubleX @since v1.00a @version v1.00a
     */
    NEW._clearPartyBattlerSkillItemCooldownsOnBattleEnd = function() {
        const clearFunc = PF.get("clearBattlerSkillItemCooldownOnBattleEnd");
        $gameParty.allMembers().forEach(clearFunc, this);
    }; // NEW._clearPartyBattlerSkillItemCooldownsOnBattleEnd

})(BattleManager, DoubleX_RMMZ.Enhanced_Codebase,
        DoubleX_RMMZ.Skill_Item_Cooldown);

/*----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------
 *    ## Objects
 *----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------
 *    # Edited class: Game_System
 *      - Lets you access the parameters of this plugin and store them in save
 *----------------------------------------------------------------------------*/

(($, MZ_EC, SIC) => {

    "use strict";

    const FP = SIC.FUNC_PARAMS, klassName = "Game_System";
    const { ORIG } = MZ_EC.setKlassContainer(klassName, $, SIC);
    const EC_GS = MZ_EC[klassName].new, GS = SIC[klassName];

    MZ_EC.extendFunc(EC_GS, GS, "storeParams", function() {
        ORIG.storeParams.apply(this, arguments);
        // Added to store all parameters of this plugin
        EC_GS.onStoreParams.call(this, SIC.PLUGIN_NAME, "cooldown");
        //
    }); // v1.00a - v1.00a

    MZ_EC.extendFunc(EC_GS, GS, "storeParamVal", function(containerName, param, val) {
        ORIG.storeParamVal.apply(this, arguments);
        // Added to update the functions of parameters storing function contents
        FP.storeFuncParam(param, val);
        //
    }); // v1.00a - v1.00a

    /**
     * Script Call/Idempotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @enum @param {string} param - The name of parameter to be stored in saves
     * @param {*} val - The value of the parameter to be stored in game saves
     */
    $.setSkillItemCooldownParam = function(param, val) {
        EC_GS.storeParamVal.call(this, "cooldown", param, val);
    }; // $.setSkillItemCooldownParam

    /**
     * Script Call/Nullipotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @enum @param {string} param - The name of parameter to be stored in saves
     * @returns {*} The value of the parameter to be stored in game saves
     */
    $.skillItemCooldownParam = function(param) {
        return EC_GS.storedParamVal.call(this, "cooldown", param);
    }; // $.skillItemCooldownParam

    const pluginName = SIC.PLUGIN_NAME;
    const commandName = "setSkillItemCooldownParam";
    PluginManager.registerCommand(pluginName, commandName, ({ param, val }) => {
        $gameSystem.setSkillItemCooldownParam(param, JSON.parse(val));
    });

})(Game_System.prototype, DoubleX_RMMZ.Enhanced_Codebase,
        DoubleX_RMMZ.Skill_Item_Cooldown);

/*----------------------------------------------------------------------------
 *    # Edited class: Game_Variables
 *      - Reloads all notetags upon variable change to keep scripts updated
 *----------------------------------------------------------------------------*/

((MZ_EC, SIC) => {

    "use strict";

    MZ_EC.updateGameVarsDataNotetags(SIC, "cooldown");

})(DoubleX_RMMZ.Enhanced_Codebase, DoubleX_RMMZ.Skill_Item_Cooldown);

/*----------------------------------------------------------------------------
 *    # Edited class: Game_BattlerBase
 *      - Applies the evaluated battler and skill/item cooldown to the battler
 *----------------------------------------------------------------------------*/

(($, MZ_EC, SIC) => {

    "use strict";

    const {
        ORIG,
        extendFunc
    } = MZ_EC.setKlassContainer("Game_BattlerBase", $, SIC);

    extendFunc("canMove", function() {
        // Added to make battlers not movable with the battler cooldown
        if (this.isBattlerCooldown()) return false;
        //
        return ORIG.canMove.apply(this, arguments);
    }); // v1.00a - v1.00a

    extendFunc("canUse", function(item) {
        // Added to make battlers or skills/items under cooldown unusable
        if (this.isBattlerCooldown()) return false;
        if (this.isSkillItemCooldown(item)) return false;
        //
        return ORIG.canUse.apply(this, arguments);
    }); // v1.00a - v1.00a

})(Game_BattlerBase.prototype, DoubleX_RMMZ.Enhanced_Codebase,
        DoubleX_RMMZ.Skill_Item_Cooldown);

/*----------------------------------------------------------------------------
 *    # Edited class: Game_Battler
 *      - Applies the evaluated battler and skill/item cooldown to the battler
 *----------------------------------------------------------------------------*/

(($, MZ_EC, SIC) => {

    "use strict";

    const klassName = "Game_Battler", {
        NEW,
        ORIG,
        extendFunc
    } = MZ_EC.setKlassContainer(klassName, $, SIC);
    const EC_GB = MZ_EC[klassName].new, GB = SIC[klassName];

    /*------------------------------------------------------------------------
     *    New private variables
     *------------------------------------------------------------------------*/
    // {{*}} _skillItemCooldown: The container of all other new variables
    //       {[DataSkill|DataItem]} usedSkillItems: list of used skills/items
    //       {number} battlerTurnCount: The battler cooldown turn counter
    //       {{number}} skillItemTurnCounts: skill/item cooldown of skill/item

    extendFunc("initMembers", function() {
        ORIG.initMembers.apply(this, arguments);
        // Added to initializes all new variables added by this plugin
        NEW._init.call(this);
        //
    }); // v1.00a - v1.00a

    extendFunc("clearActions", function() {
        ORIG.clearActions.apply(this, arguments);
        // Added to prevent inputted but not executed skill/items to cooldown
        this.clearInputtedSkillItems();
        //
    }); // v1.00a - v1.00a

    extendFunc("startTpbCasting", function() {
        ORIG.startTpbCasting.apply(this, arguments);
        // Added to prevent inputted but not executed skill/items to cooldown
        this.clearInputtedSkillItems();
        //
    }); // v1.00a - v1.00a

    extendFunc("canInput", function() {
        // Added to make battlers not inputable with the battler cooldown
        if (this.isBattlerCooldown()) return false;
        //
        return ORIG.canInput.apply(this, arguments);
    }); // v1.00a - v1.00a

    extendFunc("useItem", function(item) {
        ORIG.useItem.apply(this, arguments);
        // Added to stores the battler skills/items to evaluate cooldown values
        NEW._storeBattlerSkillItemCooldown.call(this, item);
        //
    }); // v1.00a - v1.00a

    extendFunc("onTurnEnd", function() {
        ORIG.onTurnEnd.apply(this, arguments);
        // Added to updates the battler and skills/items cooldown values
        NEW._updateCooldowns.call(this);
        //
    }); // v1.00a - v1.00a

    MZ_EC.extendFunc(EC_GB, GB, "_onUpdateTpbIdleTime", function() {
        ORIG._onUpdateTpbIdleTime.apply(this, arguments);
        // Added to update the battler cooldown
        NEW._updateBattlerTpbCooldown.call(this);
        //
    }); // v1.00a - v1.00a

    // This will break with dynmaic data but it's not actively supported anyway
    NEW._SKILL_ITEM_COOLDOWN_KEY = item => JSON.stringify(item);
    //

    /**
     * Script Call/Idempotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     */
    $.clearBattlerSkillItemCooldowns = function() {
        NEW._clearUsedSkillItems.call(this);
        this._skillItemCooldown.battlerTurnCount = 0;
        // Map can't be serialized so ordinary objects must be used
        this._skillItemCooldown.skillItemTurnCounts = {};
        //
    }; // $.clearBattlerSkillItemCooldowns

    /**
     * Script Call/Idempotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {number} turnCount - The new battler cooldown turn count
     */
    $.setBattlerCooldown = function(turnCount) {
        this._skillItemCooldown.battlerTurnCount = turnCount;
        if (turnCount < 0) NEW._updateBattlerTpbCharge.call(this);
    }; // $.setBattlerCooldown

    /**
     * Script Call/Nullipotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @returns {number} The current battler cooldown turn count
     */
    $.battlerCooldown = function() {
        return this._skillItemCooldown.battlerTurnCount || 0;
    }; // $.battlerCooldown

    /**
     * Script Call/Nullipotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @returns {boolean} Whether this battler is under cooldown
     */
    $.isBattlerCooldown = function() { return this.battlerCooldown() > 0; };

    /**
     * Script Call/Nullipotent
     * @author DoubleX @since v1.00a @version v1.00a
     * @param {DataSkill|DataItem} item - The data of the item to be checked
     * @returns {number} turnCount - The new item cooldown turn count
     */
    $.setSkillItemCooldown = function(item, turnCount) {
        const itemKey = NEW._SKILL_ITEM_COOLDOWN_KEY(item);
        NEW._storeSkillItemCooldown.call(this, itemKey, turnCount);
    }; // $.setSkillItemCooldown

    /**
     * Script Call/Nullipotent
     * @author DoubleX @since v1.00a @version v1.00a
     * @param {DataSkill|DataItem} item - The data of the item to be checked
     * @returns {number} The current cooldown turn count of the specified item
     */
    $.skillItemCooldown = function(item) {
        const itemKey = NEW._SKILL_ITEM_COOLDOWN_KEY(item);
        return this._skillItemCooldown.skillItemTurnCounts[itemKey] || 0;
    }; // $.skillItemCooldown

    /**
     * Script Call/Nullipotent
     * @author DoubleX @since v1.00a @version v1.00a
     * @param {DataSkill|DataItem} item - The data of the item to be checked
     * @returns {boolean} Whether the specified skill/item is under cooldown
     */
    $.isSkillItemCooldown = function(item) {
        return this.skillItemCooldown(item) > 0;
    }; // $.isSkillItemCooldown

    /**
     * Idempotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {DataSkill?|DataItem?} item_ - The data of the item being cleared
     */
    $.clearSkillItemCooldown = function(item_) {
        if (!item_) return;
        const itemKey = NEW._SKILL_ITEM_COOLDOWN_KEY(item_);
        delete this._skillItemCooldown.skillItemTurnCounts[itemKey];
        this._skillItemCooldown.usedSkillItems.eraseElem(item_);
    }; // $.clearSkillItemCooldown

    /**
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {DataSkill|DataItem} item - The data of the item being used
     */
    $.storeSkillItemCooldown = function(item) {
        NEW._storeUsedSkillItem.call(this, item);
        NEW._setSkillItemCooldown.call(this, item);
    }; // $.storeSkillItemCooldown

    /**
     * Idempotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     */
    $.clearInputtedSkillItems = function() {
        NEW._clearInputtedSkillItemCooldowns.call(this);
        NEW._clearUsedSkillItems.call(this);
    }; // $.clearInputtedSkillItems

    /**
     * Idempotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     */
    $.startBattlerCooldown = function() {
        NEW._setBattlerCooldown.call(this);
        NEW._clearUsedSkillItems.call(this);
    }; // $.startBattlerCooldown

    /**
     * The this pointer is Game_Battler.prototype
     * Idempotent
     * @author DoubleX @since v1.00a @version v1.00a
     */
    NEW._init = function() {
        // Map can't be serialized so ordinary objects must be used
        this._skillItemCooldown = {
            usedSkillItems: [],
            battlerTurnCount: 0,
            skillItemTurnCounts: {}
        };
        //
    }; // NEW._init

    /**
     * The this pointer is Game_Battler.prototype
     * Idempotent
     * @author DoubleX @since v1.00a @version v1.00a
     */
    NEW._clearInputtedSkillItemCooldowns = function() {
        this._actions.forEach(NEW._clearInputtedSkillItemCooldown, this);
    }; // NEW._clearInputtedSkillItemCooldowns

    /**
     * The this pointer is Game_Battler.prototype
     * Idempotent
     * @author DoubleX @since v1.00a @version v1.00a
     * @param {Game_Action} act - The inputted action to have cooldown cleared
     */
    NEW._clearInputtedSkillItemCooldown = function(act) {
        const item_ = act.item();
        // item will be null if prior command and clear action's at same frame
        if (!item_ || !this.isSkillItemCooldown(item_)) return;
        //
        this.setSkillItemCooldown(item_, 0);
    }; // NEW._clearInputtedSkillItemCooldown

    /**
     * The this pointer is Game_Battler.prototype
     * @author DoubleX @since v1.00a @version v1.00a
     * @param {DataSkill|DataItem} item - Used item to be stored for cooldown
     */
    NEW._storeUsedSkillItem = function(item) {
        this._skillItemCooldown.usedSkillItems.push(item);
    }; // NEW._storeUsedSkillItem

    /**
     * The this pointer is Game_Battler.prototype
     * Idempotent
     * @author DoubleX @since v1.00a @version v1.00a
     * @param {DataSkill|DataItem} item - The item involved in the cooldowns
     */
    NEW._setSkillItemCooldown = function(item) {
        MZ_EC.clearBattlerNotetagCache(this, "cooldown");
        const lastLatestSkillItems = this.latestSkillItems;
        this.latestSkillItems = [item];
        const skillItemTurnCount = NEW._skillItemCooldownTurnCount.call(this);
        this.latestSkillItems = lastLatestSkillItems;
        MZ_EC.clearBattlerNotetagCache(this, "cooldown");
        this.setSkillItemCooldown(item, skillItemTurnCount);
    }; // NEW._setSkillItemCooldown

    /**
     * The this pointer is Game_Battler.prototype
     * Nullipotent
     * @author DoubleX @since v1.00a @version v1.00a
     * @returns {number} The skill/item cooldown turn count of the used item
     */
    NEW._skillItemCooldownTurnCount = function() {
        const priorities = $gameSystem.skillItemCooldownParam(
                "battlerNotetagDataTypePriorities");
        return MZ_EC.condOpValNotetagVal(
                this, priorities, "cooldown", ["skillItem"], 0);
    }; // NEW._skillItemCooldownTurnCount

    /**
     * The this pointer is Game_Battler.prototype
     * Idempotent
     * @author DoubleX @since v1.00a @version v1.00a
     */
    NEW._setBattlerCooldown = function() {
        MZ_EC.clearBattlerNotetagCache(this, "cooldown");
        const lastLatestSkillItems = this.latestSkillItems;
        this.latestSkillItems = this._skillItemCooldown.usedSkillItems;
        const battlerTurnCount = NEW._battlerCooldownTurnCount.call(this);
        this.latestSkillItems = lastLatestSkillItems;
        MZ_EC.clearBattlerNotetagCache(this, "cooldown");
        this.setBattlerCooldown(battlerTurnCount);
    }; // NEW._setBattlerCooldown

    /**
     * The this pointer is Game_Battler.prototype
     * Nullipotent
     * @author DoubleX @since v1.00a @version v1.00a
     * @returns {number} The battler cooldown turn count upon all action end
     */
    NEW._battlerCooldownTurnCount = function() {
        const priorities = $gameSystem.skillItemCooldownParam(
                "battlerNotetagDataTypePriorities");
        const turnCount = MZ_EC.condOpValNotetagVal(
                this, priorities, "cooldown", ["battler"], 0);
        // Otherwise turnCount <= 1 would behave the same as 0 in turn based
        return BattleManager.isTpb() ? turnCount : turnCount + 1;
        //
    }; // NEW._battlerCooldownTurnCount

    /**
     * The this pointer is Game_Battler.prototype
     * Idempotent
     * @author DoubleX @since v1.00a @version v1.00a
     */
    NEW._clearUsedSkillItems = function() {
        this._skillItemCooldown.usedSkillItems = [];
    }; // NEW._clearUsedSkillItems

    /**
     * The this pointer is Game_Battler.prototype
     * @author DoubleX @since v1.00a @version v1.00a
     */
    NEW._storeBattlerSkillItemCooldown = function(item) {
        this.storeSkillItemCooldown(item);
        if (!$gameParty.inBattle()) this.startBattlerCooldown();
    }; // NEW._storeBattlerSkillItemCooldown

    /**
     * The this pointer is Game_Battler.prototype
     * Idempotent
     * @author DoubleX @since v1.00a @version v1.00a
     */
    NEW._updateCooldowns = function() {
        if (!BattleManager.isTpb()) NEW._updateBattlerTurnCooldown.call(this);
        NEW._updateSkillItemCooldowns.call(this);
    }; // NEW._updateCooldowns

    /**
     * The this pointer is Game_Battler.prototype
     * Idempotent
     * @author DoubleX @since v1.00a @version v1.00a
     */
    NEW._updateBattlerTurnCooldown = function() {
        const battlerTurnCount = this.battlerCooldown();
        if (battlerTurnCount <= 0) return;
        this.setBattlerCooldown(battlerTurnCount - 1);
    }; // NEW._updateBattlerTurnCooldown

    /**
     * The this pointer is Game_Battler.prototype
     * Idempotent
     * @author DoubleX @since v1.00a @version v1.00a
     */
    NEW._updateSkillItemCooldowns = function() {
        const turnCounts = this._skillItemCooldown.skillItemTurnCounts;
        Object.entries(turnCounts).forEach(NEW._updateSkillItemCooldown, this);
    }; // NEW._updateSkillItemCooldowns

    /**
     * The this pointer is Game_Battler.prototype
     * Idempotent
     * @author DoubleX @since v1.00a @version v1.00a
     * @param {string} itemKey - The key of the skill/item having cooldown
     * @param {number} turnCount - The skill/item cooldown turn count
     */
    NEW._updateSkillItemCooldown = function([itemKey, turnCount]) {
        NEW._storeSkillItemCooldown.call(this, itemKey, turnCount - 1);
    }; // NEW._updateSkillItemCooldown

    /**
     * The this pointer is Game_Battler.prototype
     * Idempotent
     * @author DoubleX @since v1.00a @version v1.00a
     * @param {string} itemKey - The key of the skill/item having cooldown
     * @param {number} turnCount - The skill/item cooldown turn count
     */
    NEW._storeSkillItemCooldown = function(itemKey, turnCount) {
        const { skillItemTurnCounts } = this._skillItemCooldown;
        if (turnCount <= 0) return delete skillItemTurnCounts[itemKey];
        skillItemTurnCounts[itemKey] = turnCount;
    }; // NEW._storeSkillItemCooldown

    /**
     * The this pointer is Game_Battler.prototype
     * Hotspot/Idempotent
     * @author DoubleX @since v1.00a @version v1.00a
     */
    NEW._updateBattlerTpbCooldown = function() {
        if (this.isTpbCharged()) return;
        const battlerTurnCount = this.battlerCooldown();
        if (battlerTurnCount < 0) return NEW._updateBattlerTpbCharge.call(this);
        this.setBattlerCooldown(NEW._newBattlerTpbCooldown.call(this));
    }; // NEW._updateBattlerTpbCooldown

    /**
     * The this pointer is Game_Battler.prototype
     * Hotspot/Idempotent
     * @author DoubleX @since v1.00a @version v1.00a
     * @returns {number} The new battler cooldown value in the TPBS
     */
    NEW._newBattlerTpbCooldown = function() {
        return this.battlerCooldown() - this.tpbAcceleration();
    }; // NEW._newBattlerTpbCooldown

    /**
     * The this pointer is Game_Battler.prototype
     * Idempotent
     * @author DoubleX @since v1.00a @version v1.00a
     */
    NEW._updateBattlerTpbCharge = function() {
        const battlerTurnCount = this.battlerCooldown();
        this.setBattlerCooldown(0);
        // Don't call updateTpbChargeTime as 1 frame's needed to make actions
        this._tpbChargeTime = -battlerTurnCount;
        // Otherwise the game will crash due to accessing the empty action slot
    }; // NEW._updateBattlerTpbCharge

})(Game_Battler.prototype, DoubleX_RMMZ.Enhanced_Codebase,
        DoubleX_RMMZ.Skill_Item_Cooldown);

/*----------------------------------------------------------------------------
 *    # Edited class: Game_Actor
 *      - Applies the evaluated battler and skill/item cooldown to the actor
 *----------------------------------------------------------------------------*/

(($, MZ_EC, SIC) => {

    "use strict";

    const klassName = "Game_Actor", {
        ORIG,
        extendFunc
    } = MZ_EC.setKlassContainer(klassName, $, SIC);
    const EC_GA = MZ_EC[klassName].new, GA = SIC[klassName];

    extendFunc("selectNextCommand", function() {
        // Added to store the skill/item cooldown for the inputting action
        this.storeSkillItemCooldown(this.inputtingAction().item());
        //
        return ORIG.selectNextCommand.apply(this, arguments);
    }); // v1.00a - v1.00a

    extendFunc("selectPreviousCommand", function() {
        // Added to clear the skill/item cooldown for current inputting action
        this.clearSkillItemCooldown(this.inputtingAction().item());
        //
        const hasPriorCmd = ORIG.selectPreviousCommand.apply(this, arguments);
        // Added to clear the skill/item cooldown for the last inputting action
        this.clearSkillItemCooldown(this.inputtingAction().item());
        //
        return hasPriorCmd;
    }); // v1.00a - v1.00a

    MZ_EC.rewriteFunc(EC_GA, GA, "_setAutoBattleActs", function() {
        let action, isSameAct = false;
        for (let i = 0, numActions = this.numActions(); i < numActions; i++) {
            if (!isSameAct) {
                action = EC_GA._autoBattleAct.call(this);
                const item = action.item();
                this.storeSkillItemCooldown(item);
                if (!this.isSkillItemCooldown(item)) isSameAct = true;
            }
            this.setAction(i, action);
        }
    }); // v1.00a - v1.00a

})(Game_Actor.prototype, DoubleX_RMMZ.Enhanced_Codebase,
        DoubleX_RMMZ.Skill_Item_Cooldown);

/*----------------------------------------------------------------------------
 *    # Edited class: Game_Enemy
 *      - Applies the evaluated battler and skill/item cooldown to the enemy
 *----------------------------------------------------------------------------*/

(($, MZ_EC, SIC) => {

    "use strict";

    const $$ = Game_Battler.prototype, klassName = "Game_Enemy";
    const { rewriteFunc } = MZ_EC.setKlassContainer(klassName, $, SIC);
    const EC_GE = MZ_EC[klassName].new;

    rewriteFunc("makeActions", function() {
        $$.makeActions.call(this);
        if (this.numActions() > 0) {
            let actionList, ratingZero, isSameActList = false;
            for (let i = 0; i < this.numActions(); i++) {
                if (!isSameActList) {
                    actionList = EC_GE._validActs.call(this);
                    if (actionList.isEmpty()) return;
                    ratingZero = EC_GE._ratingZero.call(this, actionList);
                    actionList = actionList.filter(({ rating }) => {
                        return rating > ratingZero;
                    });
                }
                const selectedAct = this.selectAction(actionList, ratingZero);
                const skill = $dataSkills[selectedAct.skillId];
                this.storeSkillItemCooldown(skill);
                isSameActList = !this.isSkillItemCooldown(skill);
                this.action(i).setEnemyAction(selectedAct);
            }
        }
        this.setActionState("waiting");
    }); // v1.00a - v1.00a

})(Game_Enemy.prototype, DoubleX_RMMZ.Enhanced_Codebase,
        DoubleX_RMMZ.Skill_Item_Cooldown);

/*============================================================================*/

    const curMZECVer = DoubleX_RMMZ.Enhanced_Codebase.VERSIONS.plugin;
    const minMZECVer = "v0.00a";
    if (curMZECVer < minMZECVer) {
        console.warn(`The version of DoubleX RMMZ Enhanced Codebase is
                     ${curMZECVer} but should be at least ${minMZECVer}`);
    }

} else {

    console.warn(`DoubleX RMMZ Enhanced Codebase should be placed above
                 ${DoubleX_RMMZ.Skill_Item_Cooldown.PLUGIN_NAME}`);

} // if (DoubleX_RMMZ.Enhanced_Codebase)
