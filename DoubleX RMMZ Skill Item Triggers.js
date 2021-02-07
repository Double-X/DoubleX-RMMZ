/*============================================================================
 *    ## Plugin Info
 *----------------------------------------------------------------------------
 *    # Plugin Name
 *      DoubleX RMMZ Skill Item Triggers
 *----------------------------------------------------------------------------
 *    # Introduction
 *    1. This plugin lets you use notetags to set what happens when an
 *       action's just executed, and different cases like miss, evade, counter
 *       attack, magic reflection, critical hit, normal execution, substitute,
 *       right before starting to execute actions, and right after finished
 *       executing the actions, can have different notetags
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
 *      1. https://www.youtube.com/watch?v=nisV-fdFLGA
 *      2.(v1.01a+) https://www.youtube.com/watch?v=OErYnHkNuQ4
 *      This Plugin:
 *      1. https://github.com/Double-X/DoubleX-RMMZ/blob/master/DoubleX%20RMMZ%20Skill%20Item%20Triggers.js
 *      Posts:
 *      1. https://forums.rpgmakerweb.com/index.php?threads/doublex-rmmz-skill-item-triggers.126431/
 *      2. https://www.rpgmakercentral.com/topic/42565-doublex-rmmz-skill-item-triggers/
 *      3. https://rpgmaker.net/engines/rmmz/utilities/261/
 *      4. https://www.save-point.org/thread-8155.html
 *      5. https://gdu.one/forums/topic/13621-doublex-rmmz-skill-item-triggers/
 *      6. http://www.hbgames.org/forums/viewtopic.php?p=945080
 *      7. https://forum.chaos-project.com/index.php/topic,16070.new.html
 *      8. https://doublexrpgmaker.wordpress.com/2020/08/30/doublex-rmmz-skill-item-triggers/
 *      9. https://www.patreon.com/posts/41016175
 *      10. https://www.makerdevs.com/plugin/doublex-rmmz-skill-item-triggers
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
 *      { codebase: "1.1.1", plugin: "v1.01a" }(2020 Dec 26 GMT 1300):
 *      1. Added the following notetag types:
 *         subjectMiss
 *         subjectEva
 *         subjectCnt
 *         subjectMrf
 *         subjectCri
 *         subjectNorm
 *         subjectSubstitute
 *      2. Added the following parameters:
 *         subjectMissNotetagDataTypePriorities
 *         subjectEvaNotetagDataTypePriorities
 *         subjectCntNotetagDataTypePriorities
 *         subjectMrfNotetagDataTypePriorities
 *         subjectCriNotetagDataTypePriorities
 *         subjectNormNotetagDataTypePriorities
 *         subjectSubstituteNotetagDataTypePriorities
 *      3. Fixed the eventEntry of all notetags not correctly accepting all
 *         intended suffixes and rejecting the unintended ones
 *      { codebase: "1.1.0", plugin: "v1.00b" }(2020 Dec 2 GMT 0300):
 *      1. You no longer have to edit the value of
 *         DoubleX_RMMZ.Skill_Item_Triggers.PLUGIN_NAME when changing this
 *         plugin file name
 *      { codebase: "1.0.0", plugin: "v1.00a" }(2020 Aug 30 GMT 0900):
 *      1. 1st version of this plugin finished
 *============================================================================*/
/*:
 * @url https://www.patreon.com/doublex
 * @target MZ
 * @plugindesc Versions: { codebase: "1.1.1", plugin: "v1.01a" }
 * Lets you run some codes set by your notetags on some action execution cases
 * @orderAfter DoubleX_RMMZ_Enhanced_Codebase
 * @orderAfter DoubleX RMMZ Enhanced Codebase
 * @base DoubleX RMMZ Enhanced Codebase
 * @author DoubleX
 *
 * @param missNotetagDataTypePriorities
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
 * @desc Sets data type priorities of the miss notetags
 * You can use script calls/plugin commands to change this
 * @default ["actor", "class", "latestSkillItem", "weapons", "armors", "enemy", "states"]
 *
 * @param evaNotetagDataTypePriorities
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
 * @desc Sets data type priorities of the eva notetags
 * You can use script calls/plugin commands to change this
 * @default ["actor", "class", "latestSkillItem", "weapons", "armors", "enemy", "states"]
 *
 * @param cntNotetagDataTypePriorities
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
 * @desc Sets data type priorities of the cnt notetags
 * You can use script calls/plugin commands to change this
 * @default ["actor", "class", "latestSkillItem", "weapons", "armors", "enemy", "states"]
 *
 * @param mrfNotetagDataTypePriorities
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
 * @desc Sets data type priorities of the mrf notetags
 * You can use script calls/plugin commands to change this
 * @default ["actor", "class", "latestSkillItem", "weapons", "armors", "enemy", "states"]
 *
 * @param criNotetagDataTypePriorities
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
 * @desc Sets data type priorities of the cri notetags
 * You can use script calls/plugin commands to change this
 * @default ["actor", "class", "latestSkillItem", "weapons", "armors", "enemy", "states"]
 *
 * @param normNotetagDataTypePriorities
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
 * @desc Sets data type priorities of the norm notetags
 * You can use script calls/plugin commands to change this
 * @default ["actor", "class", "latestSkillItem", "weapons", "armors", "enemy", "states"]
 *
 * @param substituteNotetagDataTypePriorities
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
 * @desc Sets data type priorities of the substitute notetags
 * You can use script calls/plugin commands to change this
 * @default ["actor", "class", "latestSkillItem", "weapons", "armors", "enemy", "states"]
 *
 * @param preNotetagDataTypePriorities
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
 * @desc Sets data type priorities of the pre notetags
 * You can use script calls/plugin commands to change this
 * @default ["actor", "class", "latestSkillItem", "weapons", "armors", "enemy", "states"]
 *
 * @param postNotetagDataTypePriorities
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
 * @desc Sets data type priorities of the post notetags
 * You can use script calls/plugin commands to change this
 * @default ["actor", "class", "latestSkillItem", "weapons", "armors", "enemy", "states"]
 *
 * @param subjectMissNotetagDataTypePriorities
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
 * @desc Sets data type priorities of the subjectMiss notetags
 * You can use script calls/plugin commands to change this
 * @default ["actor", "class", "latestSkillItem", "weapons", "armors", "enemy", "states"]
 *
 * @param subjectEvaNotetagDataTypePriorities
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
 * @desc Sets data type priorities of the subjectEva notetags
 * You can use script calls/plugin commands to change this
 * @default ["actor", "class", "latestSkillItem", "weapons", "armors", "enemy", "states"]
 *
 * @param subjectCntNotetagDataTypePriorities
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
 * @desc Sets data type priorities of the subjectCnt notetags
 * You can use script calls/plugin commands to change this
 * @default ["actor", "class", "latestSkillItem", "weapons", "armors", "enemy", "states"]
 *
 * @param subjectMrfNotetagDataTypePriorities
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
 * @desc Sets data type priorities of the subjectMrf notetags
 * You can use script calls/plugin commands to change this
 * @default ["actor", "class", "latestSkillItem", "weapons", "armors", "enemy", "states"]
 *
 * @param subjectCriNotetagDataTypePriorities
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
 * @desc Sets data type priorities of the subjectCri notetags
 * You can use script calls/plugin commands to change this
 * @default ["actor", "class", "latestSkillItem", "weapons", "armors", "enemy", "states"]
 *
 * @param subjectNormNotetagDataTypePriorities
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
 * @desc Sets data type priorities of the subjectNorm notetags
 * You can use script calls/plugin commands to change this
 * @default ["actor", "class", "latestSkillItem", "weapons", "armors", "enemy", "states"]
 *
 * @param subjectSubstituteNotetagDataTypePriorities
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
 * @desc Sets data type priorities of subjectSubstitute notetags
 * You can use script calls/plugin commands to change this
 * @default ["actor", "class", "latestSkillItem", "weapons", "armors", "enemy", "states"]
 *
 * @command setSkillItemTriggersParam
 * @desc Applies script call $gameSystem.setSkillItemTriggersParam(param, val)
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
 *          - <doublex rmmz skill item triggers contents>
 *          - <skill item triggers contents>
 *          Where contents are in the form of type suffixes: entries
 *          Either of the above can be used, but the 1st one reduce the chance
 *          of causing other plugins to treat the notetags of this plugin as
 *          theirs, while the 2nd one is more user-friendly
 *          - type is one of the following:
 *            1. miss
 *            2. eva
 *            3. cnt
 *            4. mrf
 *            5. cri
 *            6. norm
 *            7. substitute
 *            8. pre
 *            9. post
 *            (v1.01a+)10. subjectMiss
 *            (v1.01a+)11. subjectEva
 *            (v1.01a+)12. subjectCnt
 *            (v1.01a+)13. subjectMrf
 *            (v1.01a+)14. subjectCri
 *            (v1.01a+)15. subjectNorm
 *            (v1.01a+)16. subjectSubstitute
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
 *          - The this pointer of the script suffix is different for different
 *            notetag types
 *          - entries is the list of entries in the form of:
 *            entry1, entry2, entry3, ..., entryn
 *            Where entryi must conform with the suffixi specifications
 *----------------------------------------------------------------------------
 *    # Actor/Class/Learnt Skills/Usable Skills/Posessed Items/Usable Items/
 *      Inputted Skill Or Item/Weapon/Armor/Enemy/States/This State Notetags
 *      1. miss condSuffix eventSuffix: condEntry, eventEntry
 *         - Triggers what specified in eventEntry on the target involved when
 *           the action involved just missed the target involved if condEntry
 *           returns a truthy result
 *         - condSuffix can be val, switch or script
 *         - eventEntry can be event or script
 *         - The result of condEntry can be anything as only whether it's
 *           truthy matters
 *         - If the result of condEntry is falsy, this notetag will be
 *           discarded upon such use cases
 *         - The result of eventEntry can be anything as it's supposed to run
 *           commands instead of returning results
 *         - The miss skill/item trigger also applies to counter attack, but
 *           with the target involved being that being hit by the counter
 *           attack
 *         - The miss skill/item trigger also applies to magic reflection, but
 *           with the target involved being the original action execution
 *           subject instead
 *         - (Advanced)The this pointer of the script suffix is the target
 *           involved
 *         - E.g.:
 *           <skill item triggers miss switch event: 1, 2> will reserve the
 *           common event with id 2 when the action involved just missed the
 *           target involved if the game switch with id 1 is on
 *      2. eva condSuffix eventSuffix: condEntry, eventEntry
 *         - Triggers what specified in eventEntry on the target involved when
 *           the action involved is just evaded by the target involved if
 *           condEntry returns a truthy result
 *         - condSuffix can be val, switch or script
 *         - eventEntry can be event or script
 *         - The result of condEntry can be anything as only whether it's
 *           truthy matters
 *         - If the result of condEntry is falsy, this notetag will be
 *           discarded upon such use cases
 *         - The result of eventEntry can be anything as it's supposed to run
 *           commands instead of returning results
 *         - The eva skill/item trigger also applies to counter attack, but
 *           with the target involved being that being hit by the counter
 *           attack
 *         - The eva skill/item trigger also applies to magic reflection, but
 *           with the target involved being the original action execution
 *           subject
 *         - (Advanced)The this pointer of the script suffix is the target
 *           involved
 *         - E.g.:
 *           <skill item triggers eva val script: true, 3> will always run the
 *           JavaScript codes stored as a string in variable with id 3 when
 *           the action involved is just evaded by the target involved
 *      3. cnt condSuffix eventSuffix: condEntry, eventEntry
 *         - Triggers what specified in eventEntry on the target involved when
 *           the action involved is just countered by the attack of the target
 *           involved if condEntry returns a truthy result
 *         - condSuffix can be val, switch or script
 *         - eventEntry can be event or script
 *         - The result of condEntry can be anything as only whether it's
 *           truthy matters
 *         - If the result of condEntry is falsy, this notetag will be
 *           discarded upon such use cases
 *         - The result of eventEntry can be anything as it's supposed to run
 *           commands instead of returning results
 *         - (Advanced)The this pointer of the script suffix is the target
 *           involved
 *         - E.g.:
 *           <skill item triggers cnt switch event: 1, 2> will reserve the
 *           common event with id 2 when the action involved is just countered
 *           by the attack of the target involved if the game switch with id 1
 *           is on
 *      4. mrf condSuffix eventSuffix: condEntry, eventEntry
 *         - Triggers what specified in eventEntry on the target involved when
 *           the action involved is just reflected by the target involved if
 *           condEntry returns a truthy result
 *         - condSuffix can be val, switch or script
 *         - eventEntry can be event or script
 *         - The result of condEntry can be anything as only whether it's
 *           truthy matters
 *         - If the result of condEntry is falsy, this notetag will be
 *           discarded upon such use cases
 *         - The result of eventEntry can be anything as it's supposed to run
 *           commands instead of returning results
 *         - (Advanced)The this pointer of the script suffix is the target
 *           involved
 *         - E.g.:
 *           <skill item triggers mrf val script: true, 3> will always run the
 *           JavaScript codes stored as a string in variable with id 3 when
 *           the action involved is just reflected by the target involved
 *      5. cri condSuffix eventSuffix: condEntry, eventEntry
 *         - Triggers what specified in eventEntry on the target involved when
 *           the action involved just critically hit the target involved if
 *           condEntry returns a truthy result
 *         - condSuffix can be val, switch or script
 *         - eventEntry can be event or script
 *         - The result of condEntry can be anything as only whether it's
 *           truthy matters
 *         - If the result of condEntry is falsy, this notetag will be
 *           discarded upon such use cases
 *         - The result of eventEntry can be anything as it's supposed to run
 *           commands instead of returning results
 *         - The cri skill/item trigger also applies to counter attack, but
 *           with the target involved being that being hit by the counter
 *           attack
 *         - The cri skill/item trigger also applies to magic reflection, but
 *           with the target involved being the original action execution
 *           subject
 *         - (Advanced)The this pointer of the script suffix is the target
 *           involved
 *         - E.g.:
 *           <skill item triggers cri switch event: 1, 2> will reserve the
 *           common event with id 2 when the action involved just critically
 *           hit the target involved if the game switch with id 1 is on
 *      6. norm condSuffix eventSuffix: condEntry, eventEntry
 *         - Triggers what specified in eventEntry on the target involved when
 *           the action involved is just executed normally on the target
 *           involved if condEntry returns a truthy result
 *         - condSuffix can be val, switch or script
 *         - eventEntry can be event or script
 *         - The result of condEntry can be anything as only whether it's
 *           truthy matters
 *         - If the result of condEntry is falsy, this notetag will be
 *           discarded upon such use cases
 *         - The result of eventEntry can be anything as it's supposed to run
 *           commands instead of returning results
 *         - The norm skill/item trigger also applies to counter attack, but
 *           with the target involved being that being hit by the counter
 *           attack
 *         - The norm skill/item trigger also applies to magic reflection, but
 *           with the target involved being the original action execution
 *           subject
 *         - (Advanced)The this pointer of the script suffix is the target
 *           involved
 *         - E.g.:
 *           <skill item triggers norm val script: true, 3> will always run
 *           the JavaScript codes stored as a string in variable with id 3
 *           when the action involved is just executed normally on the target
 *           involved
 *      7. substitute condSuffix eventSuffix: condEntry, eventEntry
 *         - Triggers what specified in eventEntry on the substitute target
 *           involved when the action involved just hit the substitute
 *           instead of the original target involved if condEntry returns a
 *           truthy result
 *         - condSuffix can be val, switch or script
 *         - eventEntry can be event or script
 *         - The result of condEntry can be anything as only whether it's
 *           truthy matters
 *         - If the result of condEntry is falsy, this notetag will be
 *           discarded upon such use cases
 *         - The result of eventEntry can be anything as it's supposed to run
 *           commands instead of returning results
 *         - (Advanced)The this pointer of the script suffix is the substitute
 *           target involved but not the original target involved
 *         - E.g.:
 *           <skill item triggers substitute switch event: 1, 2> will reserve
 *           the common event with id 2 when the action involved just hit the
 *           substitute instead of the original target involved if the game
 *           switch with id 1 is on
 *      8. pre condSuffix eventSuffix: condEntry, eventEntry
 *         - Triggers what specified in eventEntry on the action execution
 *           subject involved right before starting to execute the action
 *           involved by the action execution subject involved if condEntry
 *           returns a truthy result
 *         - condSuffix can be val, switch or script
 *         - eventEntry can be event or script
 *         - The result of condEntry can be anything as only whether it's
 *           truthy matters
 *         - If the result of condEntry is falsy, this notetag will be
 *           discarded upon such use cases
 *         - The result of eventEntry can be anything as it's supposed to run
 *           commands instead of returning results
 *         - (Advanced)The this pointer of the script suffix is the action
 *           execution subject involved by the action execution subject
 *           involved
 *         - E.g.:
 *           <skill item triggers pre switch event: 1, 2> will reserve the
 *           common event with id 2 before starting to execute the action
 *           involved by the action execution subject involved if the game
 *           switch with id 1 is on
 *      9. post condSuffix eventSuffix: condEntry, eventEntry
 *         - Triggers what specified in eventEntry on the action execution
 *           subject involved right after finished executing the action
 *           involved by the action execution subject involved if condEntry
 *           returns a truthy result
 *         - condSuffix can be val, switch or script
 *         - eventEntry can be event or script
 *         - The result of condEntry can be anything as only whether it's
 *           truthy matters
 *         - If the result of condEntry is falsy, this notetag will be
 *           discarded upon such use cases
 *         - The result of eventEntry can be anything as it's supposed to run
 *           commands instead of returning results
 *         - (Advanced)The this pointer of the script suffix is the action
 *           execution subject involved
 *         - E.g.:
 *           <skill item triggers post val script: true, 3> will always run
 *           the JavaScript codes stored as a string in variable with id 3
 *           right after finished executing the action involved by the action
 *           execution subject involved
 *      (v1.01a+)10. subjectMiss condSuffix eventSuffix: condEntry, eventEntry
 *         - Triggers what specified in eventEntry on the action execution
 *           subject involved when the action involved just missed a target if
 *           condEntry returns a truthy result
 *         - condSuffix can be val, switch or script
 *         - eventEntry can be event or script
 *         - The result of condEntry can be anything as only whether it's
 *           truthy matters
 *         - If the result of condEntry is falsy, this notetag will be
 *           discarded upon such use cases
 *         - The result of eventEntry can be anything as it's supposed to run
 *           commands instead of returning results
 *         - The subjectMiss skill/item trigger also applies to counter
 *           attack, but with the action execution subject involved being that
 *           countering the attack
 *         - The subjectMiss skill/item trigger also applies to magic
 *           reflection, but with the action execution subject involved being
 *           that reflecting the magic
 *         - (Advanced)The this pointer of the script suffix is the action
 *           execution subject involved
 *         - E.g.:
 *           <skill item triggers subjectMiss switch event: 1, 2> will reserve
 *           the common event with id 2 when the action involved executed by
 *           the action execution subject involved just missed a target if the
 *           game switch with id 1 is on
 *      (v1.01a+)11. subjectEva condSuffix eventSuffix: condEntry, eventEntry
 *         - Triggers what specified in eventEntry on the action execution
 *           subject involved when the action involved is just evaded by a
 *           target involved if condEntry returns a truthy result
 *         - condSuffix can be val, switch or script
 *         - eventEntry can be event or script
 *         - The result of condEntry can be anything as only whether it's
 *           truthy matters
 *         - If the result of condEntry is falsy, this notetag will be
 *           discarded upon such use cases
 *         - The result of eventEntry can be anything as it's supposed to run
 *           commands instead of returning results
 *         - The subjectEva skill/item trigger also applies to counter
 *           attack, but with the action execution subject involved being that
 *           countering the attack
 *         - The subjectEva skill/item trigger also applies to magic
 *           reflection, but with the action execution subject involved being
 *           that reflecting the magic
 *         - (Advanced)The this pointer of the script suffix is the action
 *           execution subject involved
 *         - E.g.:
 *           <skill item triggers subjectEva val script: true, 3> will always
 *           run the JavaScript codes stored as a string in variable with id 3
 *           when the action involved executed by the action execution subject
 *           involved is just evaded by a target
 *      (v1.01a+)12. subjectCnt condSuffix eventSuffix: condEntry, eventEntry
 *         - Triggers what specified in eventEntry on the action execution
 *           subject involved when the action involved is just countered by
 *           the attack of a target if condEntry returns a truthy result
 *         - condSuffix can be val, switch or script
 *         - eventEntry can be event or script
 *         - The result of condEntry can be anything as only whether it's
 *           truthy matters
 *         - If the result of condEntry is falsy, this notetag will be
 *           discarded upon such use cases
 *         - The result of eventEntry can be anything as it's supposed to run
 *           commands instead of returning results
 *         - (Advanced)The this pointer of the script suffix is the action
 *           execution subject involved
 *         - E.g.:
 *           <skill item triggers subjectCnt switch event: 1, 2> will reserve
 *           the common event with id 2 when the action involved executed by
 *           the action execution subject involved is just countered by the
 *           attack of a target if the game switch with id 1 is on
 *      (v1.01a+)13. subjectMrf condSuffix eventSuffix: condEntry, eventEntry
 *         - Triggers what specified in eventEntry on the action execution
 *           subject involved when the action involved is just reflected by a
 *           target if condEntry returns a truthy result
 *         - condSuffix can be val, switch or script
 *         - eventEntry can be event or script
 *         - The result of condEntry can be anything as only whether it's
 *           truthy matters
 *         - If the result of condEntry is falsy, this notetag will be
 *           discarded upon such use cases
 *         - The result of eventEntry can be anything as it's supposed to run
 *           commands instead of returning results
 *         - (Advanced)The this pointer of the script suffix is the action
 *           execution subject involved
 *         - E.g.:
 *           <skill item triggers subjectMrf val script: true, 3> will always
 *           run the JavaScript codes stored as a string in variable with id 3
 *           when the action involved executed by the action execution subject
 *           involved is just reflected by a target
 *      (v1.01a+)14. subjectCri condSuffix eventSuffix: condEntry, eventEntry
 *         - Triggers what specified in eventEntry on the action execution
 *           subject involved when the action involved just critically hit a
 *           target if condEntry returns a truthy result
 *         - condSuffix can be val, switch or script
 *         - eventEntry can be event or script
 *         - The result of condEntry can be anything as only whether it's
 *           truthy matters
 *         - If the result of condEntry is falsy, this notetag will be
 *           discarded upon such use cases
 *         - The result of eventEntry can be anything as it's supposed to run
 *           commands instead of returning results
 *         - The subjectCri skill/item trigger also applies to counter
 *           attack, but with the action execution subject involved being that
 *           countering the attack
 *         - The subjectCri skill/item trigger also applies to magic
 *           reflection, but with the action execution subject involved being
 *           that reflecting the magic
 *         - (Advanced)The this pointer of the script suffix is the action
 *           execution subject involved
 *         - E.g.:
 *           <skill item triggers subjectCri switch event: 1, 2> will reserve
 *           the common event with id 2 when the action involved executed by
 *           the action execution subject involved just critically hit a
 *           target if the game switch with id 1 is on
 *      (v1.01a+)15. subjectNorm condSuffix eventSuffix: condEntry, eventEntry
 *         - Triggers what specified in eventEntry on the action execution
 *           subject involved when the action involved is just executed
 *           normally on a target if condEntry returns a truthy result
 *         - condSuffix can be val, switch or script
 *         - eventEntry can be event or script
 *         - The result of condEntry can be anything as only whether it's
 *           truthy matters
 *         - If the result of condEntry is falsy, this notetag will be
 *           discarded upon such use cases
 *         - The result of eventEntry can be anything as it's supposed to run
 *           commands instead of returning results
 *         - The subjectNorm skill/item trigger also applies to counter
 *           attack, but with the action execution subject involved being that
 *           countering the attack
 *         - The subjectNorm skill/item trigger also applies to magic
 *           reflection, but with the action execution subject involved being
 *           that reflecting the magic
 *         - (Advanced)The this pointer of the script suffix is the action
 *           execution subject involved
 *         - E.g.:
 *           <skill item triggers subjectNorm val script: true, 3> will always
 *           run the JavaScript codes stored as a string in variable with id 3
 *           when the action involved executed by the action execution subject
 *           involved is just executed normally on a target
 *      (v1.01a+)16. subjectSubstitute condSuffix eventSuffix: condEntry, eventEntry
 *         - Triggers what specified in eventEntry on the action execution
 *           subject involved when the action involved just hit a substitute
 *           if condEntry returns a truthy result
 *         - condSuffix can be val, switch or script
 *         - eventEntry can be event or script
 *         - The result of condEntry can be anything as only whether it's
 *           truthy matters
 *         - If the result of condEntry is falsy, this notetag will be
 *           discarded upon such use cases
 *         - The result of eventEntry can be anything as it's supposed to run
 *           commands instead of returning results
 *         - (Advanced)The this pointer of the script suffix is the action
 *           execution subject involved
 *         - E.g.:
 *           <skill item triggers subjectSubstitute switch event: 1, 2> will
 *           reserve the common event with id 2 when the action involved
 *           executed by the action execution subject just hit a substitute if
 *           the game switch with id 1 is on
 *============================================================================
 *    ## Script Call Info
 *----------------------------------------------------------------------------
 *    # Parameter manipulations
 *      1. $gameSystem.setSkillItemTriggersParam(param, val)
 *         - Sets the fully parsed value of the parameter param as val
 *         - param must be the name of a valid parameter of this plugin
 *         - val must be a valid new fully parsed value of the parameter param
 *         - Such parameter value changes will be saved
 *         - E.g.:
 *           $gameSystem.setSkillItemTriggersParam("missNotetagDataTypePriorities", [
 *               "latestSkillItem"
 *           ]) sets the fully parsed value of the parameter
 *           missNotetagDataTypePriorities as ["latestSkillItem"]
 *      2. $gameSystem.skillItemTriggersParam(param)
 *         - Returns the fully parsed value of the parameter param
 *         - param must be the name of a valid parameter of this plugin
 *         - E.g.:
 *           $gameSystem.skillItemTriggersParam("evaNotetagDataTypePriorities")
 *           returns the fully parsed value of the parameter
 *           evaNotetagDataTypePriorities, which should be ["latestSkillItem"]
 *           if it uses its default parameter value
 *============================================================================
 *    ## Plugin Command Info
 *----------------------------------------------------------------------------
 *      1. setSkillItemTriggersParam param val
 *         - Applies the script call
 *           $gameSystem.setSkillItemTriggersParam(param, val)
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
    DoubleX_RMMZ.Skill_Item_Triggers = {
        PLUGIN_NAME: name,
        VERSIONS: { codebase: "1.1.1", plugin: "v1.01a" }
    }; // DoubleX_RMMZ.Skill_Item_Triggers
    //

})();

(SIT => {

    "use strict";

    const pluginCodebaseVer = SIT.VERSIONS.codebase;
    if (Utils.checkRMVersion(pluginCodebaseVer)) return;
    console.warn(`Your codebase version is ${Utils.RPGMAKER_VERSION} but must be
                 at least ${pluginCodebaseVer} to use ${SIT.PLUGIN_NAME}`);

})(DoubleX_RMMZ.Skill_Item_Triggers);

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

((MZ_EC, SIT) => {

    "use strict";

    // Search tag: NOTE_TYPE
    MZ_EC.loadDataManagerNotetags(SIT, {
        miss: {
            suffix1: MZ_EC.BOOL_SUFFIXES, // condSuffix
            suffix2: MZ_EC.EVENT_SUFFIXES, // eventSuffix
            entry1: MZ_EC.BOOL_ENTRY, // condEntry
            entry2: MZ_EC.NUM_ENTRY // eventEntry
        }, // miss
        eva: {
            suffix1: MZ_EC.BOOL_SUFFIXES, // condSuffix
            suffix2: MZ_EC.EVENT_SUFFIXES, // eventSuffix
            entry1: MZ_EC.BOOL_ENTRY, // condEntry
            entry2: MZ_EC.NUM_ENTRY // eventEntry
        }, // eva
        cnt: {
            suffix1: MZ_EC.BOOL_SUFFIXES, // condSuffix
            suffix2: MZ_EC.EVENT_SUFFIXES, // eventSuffix
            entry1: MZ_EC.BOOL_ENTRY, // condEntry
            entry2: MZ_EC.NUM_ENTRY // eventEntry
        }, // cnt
        mrf: {
            suffix1: MZ_EC.BOOL_SUFFIXES, // condSuffix
            suffix2: MZ_EC.EVENT_SUFFIXES, // eventSuffix
            entry1: MZ_EC.BOOL_ENTRY, // condEntry
            entry2: MZ_EC.NUM_ENTRY // eventEntry
        }, // mrf
        cri: {
            suffix1: MZ_EC.BOOL_SUFFIXES, // condSuffix
            suffix2: MZ_EC.EVENT_SUFFIXES, // eventSuffix
            entry1: MZ_EC.BOOL_ENTRY, // condEntry
            entry2: MZ_EC.NUM_ENTRY // eventEntry
        }, // cri
        norm: {
            suffix1: MZ_EC.BOOL_SUFFIXES, // condSuffix
            suffix2: MZ_EC.EVENT_SUFFIXES, // eventSuffix
            entry1: MZ_EC.BOOL_ENTRY, // condEntry
            entry2: MZ_EC.NUM_ENTRY // eventEntry
        }, // norm
        substitute: {
            suffix1: MZ_EC.BOOL_SUFFIXES, // condSuffix
            suffix2: MZ_EC.EVENT_SUFFIXES, // eventSuffix
            entry1: MZ_EC.BOOL_ENTRY, // condEntry
            entry2: MZ_EC.NUM_ENTRY // eventEntry
        }, // substitute
        pre: {
            suffix1: MZ_EC.BOOL_SUFFIXES, // condSuffix
            suffix2: MZ_EC.EVENT_SUFFIXES, // eventSuffix
            entry1: MZ_EC.BOOL_ENTRY, // condEntry
            entry2: MZ_EC.NUM_ENTRY // eventEntry
        }, // pre
        post: {
            suffix1: MZ_EC.BOOL_SUFFIXES, // condSuffix
            suffix2: MZ_EC.EVENT_SUFFIXES, // eventSuffix
            entry1: MZ_EC.BOOL_ENTRY, // condEntry
            entry2: MZ_EC.NUM_ENTRY // eventEntry
        }, // post
        subjectMiss: {
            suffix1: MZ_EC.BOOL_SUFFIXES, // condSuffix
            suffix2: MZ_EC.EVENT_SUFFIXES, // eventSuffix
            entry1: MZ_EC.BOOL_ENTRY, // condEntry
            entry2: MZ_EC.NUM_ENTRY // eventEntry
        }, // subjectMiss
        subjectEva: {
            suffix1: MZ_EC.BOOL_SUFFIXES, // condSuffix
            suffix2: MZ_EC.EVENT_SUFFIXES, // eventSuffix
            entry1: MZ_EC.BOOL_ENTRY, // condEntry
            entry2: MZ_EC.NUM_ENTRY // eventEntry
        }, // subjectEva
        subjectCnt: {
            suffix1: MZ_EC.BOOL_SUFFIXES, // condSuffix
            suffix2: MZ_EC.EVENT_SUFFIXES, // eventSuffix
            entry1: MZ_EC.BOOL_ENTRY, // condEntry
            entry2: MZ_EC.NUM_ENTRY // eventEntry
        }, // subjectCnt
        subjectMrf: {
            suffix1: MZ_EC.BOOL_SUFFIXES, // condSuffix
            suffix2: MZ_EC.EVENT_SUFFIXES, // eventSuffix
            entry1: MZ_EC.BOOL_ENTRY, // condEntry
            entry2: MZ_EC.NUM_ENTRY // eventEntry
        }, // subjectMrf
        subjectCri: {
            suffix1: MZ_EC.BOOL_SUFFIXES, // condSuffix
            suffix2: MZ_EC.EVENT_SUFFIXES, // eventSuffix
            entry1: MZ_EC.BOOL_ENTRY, // condEntry
            entry2: MZ_EC.NUM_ENTRY // eventEntry
        }, // subjectCri
        subjectNorm: {
            suffix1: MZ_EC.BOOL_SUFFIXES, // condSuffix
            suffix2: MZ_EC.EVENT_SUFFIXES, // eventSuffix
            entry1: MZ_EC.BOOL_ENTRY, // condEntry
            entry2: MZ_EC.NUM_ENTRY // eventEntry
        }, // subjectNorm
        subjectSubstitute: {
            suffix1: MZ_EC.BOOL_SUFFIXES, // condSuffix
            suffix2: MZ_EC.EVENT_SUFFIXES, // eventSuffix
            entry1: MZ_EC.BOOL_ENTRY, // condEntry
            entry2: MZ_EC.NUM_ENTRY // eventEntry
        } // subjectSubstitute
    }, {
        $dataActors: "actor",
        $dataClasses: "class",
        $dataSkills: "skill",
        $dataItems: "item",
        $dataWeapons: "weapon",
        $dataArmors: "armor",
        $dataEnemies: "enemy",
        $dataStates: "state"
    }, "skill item triggers", "skillItemTriggers");
    //

})(DoubleX_RMMZ.Enhanced_Codebase, DoubleX_RMMZ.Skill_Item_Triggers);

/*----------------------------------------------------------------------------
 *    # Edited class: BattleManager
 *      - Runs the cnt, mrf, substitute, pre and post skill item triggers
 *----------------------------------------------------------------------------*/

(($, MZ_EC, SIT) => {

    "use strict";

    const NOTES = Array.from(SIT.DataManager.new.NOTETAG_PAIRS.keys()), {
        NEW,
        ORIG,
        extendFunc
    } = MZ_EC.setKlassContainer("BattleManager", $, SIT);

    extendFunc("startAction", function() {
        ORIG.startAction.apply(this, arguments);
        // Added to run all pre skill item triggers before starting the action
        NEW.runTriggers(this._subject, "pre", this._action);
        // It must be placed here or this._action would be null or invalid
    }); // v1.00a - v1.00a

    extendFunc("endAction", function() {
        // Added to run all post skill item triggers after finishing the action
        NEW.runTriggers(this._subject, "post", this._action);
        // It must be placed here or this._subject would be null
        ORIG.endAction.apply(this, arguments);
    }); // v1.00a - v1.00a

    extendFunc("invokeCounterAttack", function(subject, target) {
        // Added to run all cnt skill item triggers upon counter attack
        NEW.runTriggers(target, "cnt", this._action);
        // It should be placed here as trigger should be run before counter
        ORIG.invokeCounterAttack.apply(this, arguments);
    }); // v1.00a - v1.00a

    extendFunc("invokeMagicReflection", function(subject, target) {
        // Added to run all mrf skill item triggers upon magic reflection
        NEW.runTriggers(target, "mrf", this._action);
        // It should be placed here as trigger should be run before reflect
        ORIG.invokeMagicReflection.apply(this, arguments);
    }); // v1.00a - v1.00a

    extendFunc("applySubstitute", function(target) {
        const realTarget = ORIG.applySubstitute.apply(this, arguments);
        // Added to run all substitute skill item triggers upon substitute
        if (realTarget !== target) {
            NEW.runTriggers(realTarget, "substitute", this._action);
        }
        //
        return realTarget;
    }); // v1.00a - v1.00a

    NEW._SUBJECT_NOTETAG_NAME = notetagName => {
        return `subject${notetagName[0].toUpperCase()}${notetagName.slice(1)}`;
    }; // NEW._SUBJECT_NOTETAG_NAME
    /**
     * @author DoubleX @interface @since v1.00a @version v1.01a
     * @param {Game_Battler} battler - The battler as the context of the scripts
     * @enum @param {string} notetagName - Check DataManager NEW.NOTETAG_PAIRS
     * @param {Game_Action} act - The currently executing action
     */
    NEW.runTriggers = function(battler, notetagName, act) {
        const [item, subject] = [act.item(), act.subject()];
        NEW._runBattlerTriggers.call(this, battler, notetagName, item);
        // Notetags without subject counterparts
        if (battler === subject) return;
        //
        const subjectNotetagName = NEW._SUBJECT_NOTETAG_NAME(notetagName);
        /** @todo Figures out why pre and post notetags can even reach here */
        if (!NOTES.includes(subjectNotetagName)) return; // Just to play safe
        //
        NEW._runBattlerTriggers.call(this, subject, subjectNotetagName, item);
    }; // NEW.runTriggers

    /**
     * @author DoubleX @since v1.01a @version v1.01a
     * @param {Game_Battler} battler - The battler as the context of the scripts
     * @enum @param {string} notetagName - Check DataManager NEW.NOTETAG_PAIRS
     * @param {DataSkill/DataItem} item - The currently executing skill/item
     */
    NEW._runBattlerTriggers = function(battler, notetagName, item) {
        const containerName = "skillItemTriggers";
        MZ_EC.clearBattlerNotetagCache(battler, containerName);
        const latestSkillItem = battler.latestSkillItems;
        battler.latestSkillItems = [item];
        const suffix = "NotetagDataTypePriorities";
        const t = $gameSystem.skillItemTriggersParam(`${notetagName}${suffix}`);
        MZ_EC.runCondEventNotetags(battler, t, containerName, [notetagName]);
        battler.latestSkillItems = latestSkillItem;
        MZ_EC.clearBattlerNotetagCache(battler, containerName);
    }; // NEW._runBattlerTriggers

})(BattleManager, DoubleX_RMMZ.Enhanced_Codebase,
        DoubleX_RMMZ.Skill_Item_Triggers);

/*----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------
 *    ## Objects
 *----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------
 *    # Edited class: Game_System
 *      - Lets you access the parameters of this plugin and store them in save
 *----------------------------------------------------------------------------*/

((MZ_EC, SIT) => {

    "use strict";

    MZ_EC.setupGameSystemParamsIOs(SIT, "skillItemTriggers");

})(DoubleX_RMMZ.Enhanced_Codebase, DoubleX_RMMZ.Skill_Item_Triggers);

/*----------------------------------------------------------------------------
 *    # Edited class: Game_Variables
 *      - Reloads all notetags upon variable change to keep scripts updated
 *----------------------------------------------------------------------------*/

((MZ_EC, SIT) => {

    "use strict";

    MZ_EC.updateGameVarsDataNotetags(SIT, "skillItemTriggers");

})(DoubleX_RMMZ.Enhanced_Codebase, DoubleX_RMMZ.Skill_Item_Triggers);

/*----------------------------------------------------------------------------
 *    # Edited class: Game_Action
 *      - Runs the miss, eva, cri and norm skill item triggers
 *----------------------------------------------------------------------------*/

(($, MZ_EC, SIT) => {

    "use strict";

    const BM = SIT.BattleManager.new, {
        ORIG,
        NEW,
        extendFunc
    } = MZ_EC.setKlassContainer("Game_Action", $, SIT);

    extendFunc("apply", function(target) {
        ORIG.apply.apply(this, arguments);
        // Added to run the miss, eva, cri or norm skill item triggers
        NEW._apply.call(this, target);
        // It must be placed here or the result wouldn't have set properly
    }); // v1.00a - v1.00a

    /**
     * The this pointer is Game_Action.prototype
     * Idempotent
     * @author DoubleX @since v1.00a @version v1.00a
     * @param {Game_Battler} target - The target of the executing action
     */
    NEW._apply = function(target) {
        const result = target.result();
        if (result.missed) return BM.runTriggers(target, "miss", this);
        if (result.evaded) return BM.runTriggers(target, "eva", this);
        if (result.critical) return BM.runTriggers(target, "cri", this);
        BM.runTriggers(target, "norm", this);
    }; // NEW._apply

})(Game_Action.prototype, DoubleX_RMMZ.Enhanced_Codebase,
        DoubleX_RMMZ.Skill_Item_Triggers);

/*============================================================================*/

    const curMZECVer = DoubleX_RMMZ.Enhanced_Codebase.VERSIONS.plugin;
    const minMZECVer = "v0.00a";
    if (curMZECVer < minMZECVer) {
        console.warn(`The version of DoubleX RMMZ Enhanced Codebase is
                     ${curMZECVer} but should be at least ${minMZECVer}`);
    }

} else {

    console.warn(`DoubleX RMMZ Enhanced Codebase should be placed above
                 ${DoubleX_RMMZ.Skill_Item_Triggers.PLUGIN_NAME}`);


} // if (DoubleX_RMMZ.Enhanced_Codebase)
