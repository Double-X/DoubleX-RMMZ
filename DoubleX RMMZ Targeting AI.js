/*============================================================================
 *    ## Plugin Info
 *----------------------------------------------------------------------------
 *    # Plugin Name
 *      DoubleX RMMZ Targeting AI
 *----------------------------------------------------------------------------
 *    # Introduction
 *    1. The default RMMZ only lets you control the targeting AI by tgr, which
 *       is probabilistic rather than deterministic
 *    2. This plugin lets you use some notetags on actors, classes, learnt
 *       skills/skills in action list, usable skills, posessed items, usable
 *       items, weapons, armors, enemies and states, to control the targeting
 *       AI by specifying some deterministic target filters
 *    3. Targets passing the filters will still be affected by the
 *       probabilitic tgr when there are more than 1 such targets
 *    4. This plugin only works for skills/items having 1 target, and it
 *       doesn't work well 1 random target either
 *    5. If a filter causes no target to pass, that filter will be discarded
 *       upon such use cases
 *----------------------------------------------------------------------------
 *    # Prerequisites
 *      Plugins:
 *      1. DoubleX RMMZ Enhanced Codebase
 *         https://github.com/Double-X/DoubleX-RMMZ/blob/master/DoubleX%20RMMZ%20Enhanced%20Codebase.js
 *      2. DoubleX RMMZ Unit Filters
 *         https://github.com/Double-X/DoubleX-RMMZ/blob/master/DoubleX%20RMMZ%20Unit%20Filters.js
 *      Abilities:
 *      1. Nothing special for most ordinary cases
 *      2. Little RMMZ plugin development proficiency to fully utilize this
 *         (Elementary Javascript exposures being able to write beginner codes
 *         up to 300LoC scale)
 *----------------------------------------------------------------------------
 *    # Author Notes
 *      1. All notetags of this plugins are just applying script calls in
 *         DoubleX RMMZ Unit Filters unit manipulation script calls, so you're
 *         highly encouraged and recommended to have a basic knowledge on what
 *         they do in general, even though it's not strictly needed to use
 *         this plugin
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
 *      1. https://www.youtube.com/watch?v=qqcwK4NwnLM
 *      This Plugin:
 *      1. https://github.com/Double-X/DoubleX-RMMZ/blob/master/DoubleX%20RMMZ%20Targeting%20AI.js
 *      Posts:
 *      1. https://forums.rpgmakerweb.com/index.php?threads/doublex-rmmz-targeting-ai.126019/
 *      2. https://www.rpgmakercentral.com/topic/42547-doublex-rmmz-targeting-ai/
 *      3. https://rpgmaker.net/engines/rmmz/utilities/246/
 *      4. https://www.save-point.org/thread-8149.html
 *      5. https://gdu.one/forums/topic/13616-doublex-rmmz-targeting-ai/
 *      6. http://www.hbgames.org/forums/viewtopic.php?p=945046#p945046
 *      7. https://forum.chaos-project.com/index.php/topic,16065.msg197365.html
 *      8. https://doublexrpgmaker.wordpress.com/2020/08/25/doublex-rmmz-targeting-ai/
 *      9. https://www.patreon.com/posts/40832897
 *      10. https://www.makerdevs.com/plugin/doublex-rmmz-targeting-ai
 *----------------------------------------------------------------------------
 *    # Instructions
 *      1. The default plugin parameters file name is
 *         DoubleX RMMZ Targeting AI
 *         If you want to change that, you must edit the value of
 *         DoubleX_RMMZ.Targeting_AI.PLUGIN_NAME, which must be done via
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
 *      { codebase: "1.0.0", plugin: "v1.01a" }(2020 Aug 28 GMT 0100):
 *      1. Added the following notetags -
 *         - memWithAnyUsableSkill
 *         - memWithAllUsableSkills
 *         - memWithoutAnyUsableSkill
 *         - memWithoutAllUsableSkills
 *      { codebase: "1.0.0", plugin: "v1.00a" }(2020 Aug 25 GMT 0400):
 *      1. 1st version of this plugin finished
 *============================================================================*/
/*:
 * @url https://www.patreon.com/doublex
 * @target MZ
 * @plugindesc Versions: { codebase: "1.0.0", plugin: "v1.01a" }
 * Lets you control some skills/items target selection AI behaviors by notetags
 * @orderAfter DoubleX RMMZ Enhanced Codebase
 * @orderAfter DoubleX RMMZ Unit Filters
 * @base DoubleX RMMZ Enhanced Codebase
 * @base DoubleX RMMZ Unit Filters
 * @author DoubleX
 *
 * @param notetagDataTypePriorities
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
 * @desc Sets data type priorities of all notetags in this plugin
 * You can use script calls/plugin commands to change this
 * @default ["latestSkillItem","states","enemy","armors","weapons","class","actor"]
 *
 * @command setTargetingAIParam
 * @desc Applies script call $gameSystem.setTargetingAIParam(param, val)
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
 *          - <doublex rmmz targeting ai>
 *          - <targeting ai>
 *          Where contents are in the form of type suffixes: entries
 *          Either of the above can be used, but the 1st one reduce the chance
 *          of causing other plugins to treat the notetags of this plugin as
 *          theirs, while the 2nd one is more user-friendly
 *          - type is one of the following:
 *            1. memWithAnyState
 *            2. memWithAllStates
 *            3. memWithoutAnyState
 *            4. memWithoutAllStates
 *            5. memWithAnyBuff
 *            6. memWithAllBuffs
 *            7. memWithoutAnyBuff
 *            8. memWithoutAllBuffs
 *            9. memWithAnyDebuff
 *            10. memWithAllDebuffs
 *            11. memWithoutAnyDebuff
 *            12. memWithoutAllDebuffs
 *            13. memWithAnySkill
 *            14. memWithAllSkills
 *            15. memWithoutAnySkill
 *            16. memWithoutAllSkills
 *            17. anyHighestStatMem
 *            18. allHighestStatsMem
 *            19. notAnyHighestStatMem
 *            20. notAllHighestStatsMem
 *            21. anyLowestStatMem
 *            22. allLowestStatsMem
 *            23. notAnyLowestStatMem
 *            24. notAllLowestStatsMem
 *            25. anyAboveStatMem
 *            26. allAboveStatMem
 *            27. anyBelowStatMem
 *            28. allBelowStatMem
 *            (Advanced)29. or
 *            (v1.01a+)30. memWithAnyUsableSkill
 *            (v1.01a+)31. memWithAllUsableSkills
 *            (v1.01a+)32. memWithoutAnyUsableSkill
 *            (v1.01a+)33. memWithoutAllUsableSkills
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
 *          - The this pointer of the script suffix is the action involved
 *            (Game_Action.prototype)
 *          - entries is the list of entries in the form of:
 *            entry1, entry2, entry3, ..., entryn
 *            Where entryi must conform with the suffixi specifications
 *----------------------------------------------------------------------------
 *    # Actor/Class/Learnt Skills/Usable Skills/Posessed Items/Usable Items/
 *      Inputted Skill Or Item/Weapon/Armor/Enemy/States Notetags
 *      Notetags only apply to skills/items with Number as One in Scope
 *      Notetags causing the target list to be empty will be discard upon such
 *      use cases
 *      (Search tag: ALWAYS_HAS_TARGETS)
 *      1. memWithAnyState condSuffix stateIdsSuffix: condEntry, stateIdsEntry
 *         - Applies the following DoubleX RMMZ Unit Filters script call:
 *           memWithAnyState(stateIds, mems)
 *           Where stateIds is the stateIdsEntry results and mems is the list
 *           of possible targets of the skill/item having this notetag
 *         - condSuffix can be val, switch or script
 *         - stateIdsSuffix can be val, var or script
 *         - The result of condEntry can be anything as only whether it's
 *           truthy matters
 *         - If the result of condEntry is falsy, this notetag will be
 *           discarded upon such use cases
 *         - The result of stateIdsEntry can be an Array of any natural number
 *         - If stateIdsSuffix is val, then stateIdsEntry should be written as
 *           stateId1|stateId2|stateId3|stateIdI|stateIdN
 *         - E.g.:
 *           <targeting ai memWithAnyState switch val: 1, 2|3> will restrict
 *           the list of targets to be those with state with id 2 or 3 if the
 *           game switch with id 1 is on
 *      2. memWithAllStates condSuffix stateIdsSuffix: condEntry, stateIdsEntry
 *         - Applies the following DoubleX RMMZ Unit Filters script call:
 *           memWithAllStates(stateIds, mems)
 *           Where stateIds is the stateIdsEntry results and mems is the list
 *           of possible targets of the skill/item having this notetag
 *         - condSuffix can be val, switch or script
 *         - stateIdsSuffix can be val, var or script
 *         - The result of condEntry can be anything as only whether it's
 *           truthy matters
 *         - If the result of condEntry is falsy, this notetag will be
 *           discarded upon such use cases
 *         - The result of stateIdsEntry can be an Array of any natural number
 *         - If stateIdsSuffix is val, then stateIdsEntry should be written as
 *           stateId1|stateId2|stateId3|stateIdI|stateIdN
 *         - E.g.:
 *           <targeting ai memWithAllStates switch val: 1, 2|3> will restrict
 *           the list of targets to be those with state with id 2 and 3 if the
 *           game switch with id 1 is on
 *      3. memWithoutAnyState condSuffix stateIdsSuffix: condEntry, stateIdsEntry
 *         - Applies the following DoubleX RMMZ Unit Filters script call:
 *           memWithoutAnyState(stateIds, mems)
 *           Where stateIds is the stateIdsEntry results and mems is the list
 *           of possible targets of the skill/item having this notetag
 *         - condSuffix can be val, switch or script
 *         - stateIdsSuffix can be val, var or script
 *         - The result of condEntry can be anything as only whether it's
 *           truthy matters
 *         - If the result of condEntry is falsy, this notetag will be
 *           discarded upon such use cases
 *         - The result of stateIdsEntry can be an Array of any natural number
 *         - If stateIdsSuffix is val, then stateIdsEntry should be written as
 *           stateId1|stateId2|stateId3|stateIdI|stateIdN
 *         - E.g.:
 *           <targeting ai memWithoutAnyState switch val: 1, 2|3> will
 *           restrict the list of targets to be those with state without id 2
 *           or 3 if the game switch with id 1 is on
 *      4. memWithoutAllStates condSuffix stateIdsSuffix: condEntry, stateIdsEntry
 *         - Applies the following DoubleX RMMZ Unit Filters script call:
 *           memWithoutAllStates(stateIds, mems)
 *           Where stateIds is the stateIdsEntry results and mems is the list
 *           of possible targets of the skill/item having this notetag
 *         - condSuffix can be val, switch or script
 *         - stateIdsSuffix can be val, var or script
 *         - The result of condEntry can be anything as only whether it's
 *           truthy matters
 *         - If the result of condEntry is falsy, this notetag will be
 *           discarded upon such use cases
 *         - The result of stateIdsEntry can be an Array of any natural number
 *         - If stateIdsSuffix is val, then stateIdsEntry should be written as
 *           stateId1|stateId2|stateId3|stateIdI|stateIdN
 *         - E.g.:
 *           <targeting ai memWithoutAllStates switch val: 1, 2|3> will
 *           restrict the list of targets to be those with state without id 2
 *           and 3 if the game switch with id 1 is on
 *      5. memWithAnyBuff condSuffix paramIdsSuffix: condEntry, paramIdsEntry
 *         - Applies the following DoubleX RMMZ Unit Filters script call:
 *           memWithAnyBuff(paramIds, mems)
 *           Where paramIds is the paramIdsEntry results and mems is the list
 *           of possible targets of the skill/item having this notetag
 *         - condSuffix can be val, switch or script
 *         - paramIdsSuffix can be val, var or script
 *         - The result of condEntry can be anything as only whether it's
 *           truthy matters
 *         - If the result of condEntry is falsy, this notetag will be
 *           discarded upon such use cases
 *         - The result of paramIdsEntry can be an Array of any natural number
 *         - If paramIdsSuffix is val, then paramIdsEntry should be written as
 *           paramId1|paramId2|paramId3|paramIdI|paramIdN
 *         - E.g.:
 *           <targeting ai memWithAnyBuff switch val: 1, 2|3> will restrict
 *           the list of targets to be those with atk or def buff if the game
 *           switch with id 1 is on
 *      6. memWithAllBuffs condSuffix paramIdsSuffix: condEntry, paramIdsEntry
 *         - Applies the following DoubleX RMMZ Unit Filters script call:
 *           memWithAllBuffs(paramIds, mems)
 *           Where paramIds is the paramIdsEntry results and mems is the list
 *           of possible targets of the skill/item having this notetag
 *         - condSuffix can be val, switch or script
 *         - paramIdsSuffix can be val, var or script
 *         - The result of condEntry can be anything as only whether it's
 *           truthy matters
 *         - If the result of condEntry is falsy, this notetag will be
 *           discarded upon such use cases
 *         - The result of paramIdsEntry can be an Array of any natural number
 *         - If paramIdsSuffix is val, then paramIdsEntry should be written as
 *           paramId1|paramId2|paramId3|paramIdI|paramIdN
 *         - E.g.:
 *           <targeting ai memWithAllBuffs switch val: 1, 2|3> will restrict
 *           the list of targets to be those with atk and def buff if the game
 *           switch with id 1 is on
 *      7. memWithoutAnyBuff condSuffix paramIdsSuffix: condEntry, paramIdsEntry
 *         - Applies the following DoubleX RMMZ Unit Filters script call:
 *           memWithoutAnyBuff(paramIds, mems)
 *           Where paramIds is the paramIdsEntry results and mems is the list
 *           of possible targets of the skill/item having this notetag
 *         - condSuffix can be val, switch or script
 *         - paramIdsSuffix can be val, var or script
 *         - The result of condEntry can be anything as only whether it's
 *           truthy matters
 *         - If the result of condEntry is falsy, this notetag will be
 *           discarded upon such use cases
 *         - The result of paramIdsEntry can be an Array of any natural number
 *         - If paramIdsSuffix is val, then paramIdsEntry should be written as
 *           paramId1|paramId2|paramId3|paramIdI|paramIdN
 *         - E.g.:
 *           <targeting ai memWithoutAnyBuff switch val: 1, 2|3> will
 *           the list of targets to be those without atk or def buff if the
 *           game switch with id 1 is on
 *      8. memWithoutAllBuffs condSuffix paramIdsSuffix: condEntry, paramIdsEntry
 *         - Applies the following DoubleX RMMZ Unit Filters script call:
 *           memWithoutAllBuffs(paramIds, mems)
 *           Where paramIds is the paramIdsEntry results and mems is the list
 *           of possible targets of the skill/item having this notetag
 *         - condSuffix can be val, switch or script
 *         - paramIdsSuffix can be val, var or script
 *         - The result of condEntry can be anything as only whether it's
 *           truthy matters
 *         - If the result of condEntry is falsy, this notetag will be
 *           discarded upon such use cases
 *         - The result of paramIdsEntry can be an Array of any natural number
 *         - If paramIdsSuffix is val, then paramIdsEntry should be written as
 *           paramId1|paramId2|paramId3|paramIdI|paramIdN
 *         - E.g.:
 *           <targeting ai memWithoutAllBuffs switch val: 1, 2|3> will
 *           the list of targets to be those without atk and def buff if the
 *           game switch with id 1 is on
 *      9. memWithAnyDebuff condSuffix paramIdsSuffix: condEntry, paramIdsEntry
 *         - Applies the following DoubleX RMMZ Unit Filters script call:
 *           memWithAnyDebuff(paramIds, mems)
 *           Where paramIds is the paramIdsEntry results and mems is the list
 *           of possible targets of the skill/item having this notetag
 *         - condSuffix can be val, switch or script
 *         - paramIdsSuffix can be val, var or script
 *         - The result of condEntry can be anything as only whether it's
 *           truthy matters
 *         - If the result of condEntry is falsy, this notetag will be
 *           discarded upon such use cases
 *         - The result of paramIdsEntry can be an Array of any natural number
 *         - If paramIdsSuffix is val, then paramIdsEntry should be written as
 *           paramId1|paramId2|paramId3|paramIdI|paramIdN
 *         - E.g.:
 *           <targeting ai memWithAnyDebuff switch val: 1, 2|3> will restrict
 *           the list of targets to be those with atk or def debuff if the
 *           game switch with id 1 is on
 *      10. memWithAllDebuffs condSuffix paramIdsSuffix: condEntry, paramIdsEntry
 *          - Applies the following DoubleX RMMZ Unit Filters script call:
 *            memWithAllDebuffs(paramIds, mems)
 *            Where paramIds is the paramIdsEntry results and mems is the list
 *            of possible targets of the skill/item having this notetag
 *          - condSuffix can be val, switch or script
 *          - paramIdsSuffix can be val, var or script
 *          - The result of condEntry can be anything as only whether it's
 *            truthy matters
 *          - If the result of condEntry is falsy, this notetag will be
 *            discarded upon such use cases
 *          - The result of paramIdsEntry can be an Array of any natural
 *            number
 *          - If paramIdsSuffix is val, then paramIdsEntry should be written
 *            as paramId1|paramId2|paramId3|paramIdI|paramIdN
 *          - E.g.:
 *            <targeting ai memWithAllDebuffs switch val: 1, 2|3> will
 *            restrict the list of targets to be those with atk and def debuff
 *            if the game switch with id 1 is on
 *      11. memWithoutAnyDebuff condSuffix paramIdsSuffix: condEntry, paramIdsEntry
 *          - Applies the following DoubleX RMMZ Unit Filters script call:
 *            memWithoutAnyDebuff(paramIds, mems)
 *            Where paramIds is the paramIdsEntry results and mems is the list
 *            of possible targets of the skill/item having this notetag
 *          - condSuffix can be val, switch or script
 *          - paramIdsSuffix can be val, var or script
 *          - The result of condEntry can be anything as only whether it's
 *            truthy matters
 *          - If the result of condEntry is falsy, this notetag will be
 *            discarded upon such use cases
 *          - The result of paramIdsEntry can be an Array of any natural
 *            number
 *          - If paramIdsSuffix is val, then paramIdsEntry should be written
 *            as paramId1|paramId2|paramId3|paramIdI|paramIdN
 *          - E.g.:
 *            <targeting ai memWithoutAnyDebuff switch val: 1, 2|3> will
 *            restrict the list of targets to be those without atk or def
 *            debuff if the game switch with id 1 is on
 *      12. memWithoutAllDebuffs condSuffix paramIdsSuffix: condEntry, paramIdsEntry
 *          - Applies the following DoubleX RMMZ Unit Filters script call:
 *            memWithoutAllDebuffs(paramIds, mems)
 *            Where paramIds is the paramIdsEntry results and mems is the list
 *            of possible targets of the skill/item having this notetag
 *          - condSuffix can be val, switch or script
 *          - paramIdsSuffix can be val, var or script
 *          - The result of condEntry can be anything as only whether it's
 *            truthy matters
 *          - If the result of condEntry is falsy, this notetag will be
 *            discarded upon such use cases
 *          - The result of paramIdsEntry can be an Array of any natural
 *            number
 *          - If paramIdsSuffix is val, then paramIdsEntry should be written
 *            as paramId1|paramId2|paramId3|paramIdI|paramIdN
 *          - E.g.:
 *            <targeting ai memWithoutAllDebuffs switch val: 1, 2|3> will
 *            restrict the list of targets to be those without atk and def
 *            debuff if the game switch with id 1 is on
 *      13. memWithAnySkill condSuffix skillIdsSuffix: condEntry, skillIdsEntry
 *          - Applies the following DoubleX RMMZ Unit Filters script call:
 *            memWithAnySkill(skillIds, mems)
 *            Where skillIds is the skillIdsEntry results and mems is the list
 *            of possible targets of the skill/item having this notetag
 *          - condSuffix can be val, switch or script
 *          - skillIdsSuffix can be val, var or script
 *          - The result of condEntry can be anything as only whether it's
 *            truthy matters
 *          - If the result of condEntry is falsy, this notetag will be
 *            discarded upon such use cases
 *          - The result of skillIdsEntry can be an Array of any natural
 *            number
 *          - If skillIdsSuffix is val, then skillIdsEntry should be written
 *            as skillId1|skillId2|skillId3|skillIdI|skillIdN
 *          - E.g.:
 *            <targeting ai memWithAnySkill switch val: 1, 2|3> will restrict
 *            the list of targets to be those with skill with id 2 or 3 if the
 *            game switch with id 1 is on
 *      14. memWithAllSkills condSuffix skillIdsSuffix: condEntry, skillIdsEntry
 *          - Applies the following DoubleX RMMZ Unit Filters script call:
 *            memWithAllSkills(skillIds, mems)
 *            Where skillIds is the skillIdsEntry results and mems is the list
 *            of possible targets of the skill/item having this notetag
 *          - condSuffix can be val, switch or script
 *          - skillIdsSuffix can be val, var or script
 *          - The result of condEntry can be anything as only whether it's
 *            truthy matters
 *          - If the result of condEntry is falsy, this notetag will be
 *            discarded upon such use cases
 *          - The result of skillIdsEntry can be an Array of any natural
 *            number
 *          - If skillIdsSuffix is val, then skillIdsEntry should be written
 *            as skillId1|skillId2|skillId3|skillIdI|skillIdN
 *          - E.g.:
 *            <targeting ai memWithAllSkills switch val: 1, 2|3> will
 *            restrict the list of targets to be those with skill with id 2
 *            and 3 if the game switch with id 1 is on
 *      15. memWithoutAnySkill condSuffix skillIdsSuffix: condEntry, skillIdsEntry
 *          - Applies the following DoubleX RMMZ Unit Filters script call:
 *            memWithoutAnySkill(skillIds, mems)
 *            Where skillIds is the skillIdsEntry results and mems is the list
 *            of possible targets of the skill/item having this notetag
 *          - condSuffix can be val, switch or script
 *          - skillIdsSuffix can be val, var or script
 *          - The result of condEntry can be anything as only whether it's
 *            truthy matters
 *          - If the result of condEntry is falsy, this notetag will be
 *            discarded upon such use cases
 *          - The result of skillIdsEntry can be an Array of any natural
 *            number
 *          - If skillIdsSuffix is val, then skillIdsEntry should be written
 *            as skillId1|skillId2|skillId3|skillIdI|skillIdN
 *          - E.g.:
 *            <targeting ai memWithoutAnySkill switch val: 1, 2|3> will
 *            restrict the list of targets to be those with skill without id 2
 *            or 3 if the game switch with id 1 is on
 *      16. memWithoutAllSkills condSuffix skillIdsSuffix: condEntry, skillIdsEntry
 *          - Applies the following DoubleX RMMZ Unit Filters script call:
 *            memWithoutAllSkills(skillIds, mems)
 *            Where skillIds is the skillIdsEntry results and mems is the list
 *            of possible targets of the skill/item having this notetag
 *          - condSuffix can be val, switch or script
 *          - skillIdsSuffix can be val, var or script
 *          - The result of condEntry can be anything as only whether it's
 *            truthy matters
 *          - If the result of condEntry is falsy, this notetag will be
 *            discarded upon such use cases
 *          - The result of skillIdsEntry can be an Array of any natural
 *            number
 *          - If skillIdsSuffix is val, then skillIdsEntry should be written
 *            as skillId1|skillId2|skillId3|skillIdI|skillIdN
 *          - E.g.:
 *            <targeting ai memWithoutAllSkills switch val: 1, 2|3> will
 *            restrict the list of targets to be those with skill without id 2
 *            and 3 if the game switch with id 1 is on
 *      17. anyHighestStatMem condSuffix statsSuffix: condEntry, statsEntry
 *          - Applies the following DoubleX RMMZ Unit Filters script call:
 *            anyHighestStatMem(stats, mems)
 *            Where stats is the statsEntry results and mems is the list of
 *            possible targets of the skill/item having this notetag
 *          - condSuffix can be val, switch or script
 *          - statsSuffix can be val, var or script
 *          - The result of condEntry can be anything as only whether it's
 *            truthy matters
 *          - If the result of condEntry is falsy, this notetag will be
 *            discarded upon such use cases
 *          - The result of statsEntry can be an Array of any natural number
 *          - If statsSuffix is val, then statsEntry should be written as
 *            stat1|stat2|stat3|statI|statN
 *          - E.g.:
 *            <targeting ai anyHighestStatMem switch val: 1, hp|mp> will
 *            restrict the list of targets to be those with highest hp or mp
 *            if the game switch with id 1 is on
 *      18. allHighestStatsMem condSuffix statsSuffix: condEntry, statsEntry
 *          - Applies the following DoubleX RMMZ Unit Filters script call:
 *            allHighestStatsMem(stats, mems)
 *            Where stats is the statsEntry results and mems is the list of
 *            possible targets of the skill/item having this notetag
 *          - condSuffix can be val, switch or script
 *          - statsSuffix can be val, var or script
 *          - The result of condEntry can be anything as only whether it's
 *            truthy matters
 *          - If the result of condEntry is falsy, this notetag will be
 *            discarded upon such use cases
 *          - The result of statsEntry can be an Array of any natural number
 *          - If statsSuffix is val, then statsEntry should be written as
 *            stat1|stat2|stat3|statI|statN
 *          - E.g.:
 *            <targeting ai allHighestStatsMem switch val: 1, hp|mp> will
 *            restrict the list of targets to be those with highest hp and mp
 *            if the game switch with id 1 is on
 *      19. notAnyHighestStatMem condSuffix statsSuffix: condEntry, statsEntry
 *          - Applies the following DoubleX RMMZ Unit Filters script call:
 *            notAnyHighestStatMem(stats, mems)
 *            Where stats is the statsEntry results and mems is the list of
 *            possible targets of the skill/item having this notetag
 *          - condSuffix can be val, switch or script
 *          - statsSuffix can be val, var or script
 *          - The result of condEntry can be anything as only whether it's
 *            truthy matters
 *          - If the result of condEntry is falsy, this notetag will be
 *            discarded upon such use cases
 *          - The result of statsEntry can be an Array of any natural number
 *          - If statsSuffix is val, then statsEntry should be written as
 *            stat1|stat2|stat3|statI|statN
 *          - E.g.:
 *            <targeting ai notAnyHighestStatMem switch val: 1, hp|mp> will
 *            restrict the list of targets to be those without highest hp or
 *            mp if the game switch with id 1 is on
 *      20. notAllHighestStatsMem condSuffix statsSuffix: condEntry, statsEntry
 *          - Applies the following DoubleX RMMZ Unit Filters script call:
 *            notAllHighestStatsMem(stats, mems)
 *            Where stats is the statsEntry results and mems is the list of
 *            possible targets of the skill/item having this notetag
 *          - condSuffix can be val, switch or script
 *          - statsSuffix can be val, var or script
 *          - The result of condEntry can be anything as only whether it's
 *            truthy matters
 *          - If the result of condEntry is falsy, this notetag will be
 *            discarded upon such use cases
 *          - The result of statsEntry can be an Array of any natural
 *            number
 *          - If statsSuffix is val, then statsEntry should be written as
 *            stat1|stat2|stat3|statI|statN
 *          - E.g.:
 *            <targeting ai notAllHighestStatsMem switch val: 1, hp|mp> will
 *            restrict the list of targets to be those without highest hp and
 *            mp if the game switch with id 1 is on
 *      21. anyLowestStatMem condSuffix statsSuffix: condEntry, statsEntry
 *          - Applies the following DoubleX RMMZ Unit Filters script call:
 *            anyLowestStatMem(stats, mems)
 *            Where stats is the statsEntry results and mems is the list of
 *            possible targets of the skill/item having this notetag
 *          - condSuffix can be val, switch or script
 *          - statsSuffix can be val, var or script
 *          - The result of condEntry can be anything as only whether it's
 *            truthy matters
 *          - If the result of condEntry is falsy, this notetag will be
 *            discarded upon such use cases
 *          - The result of statsEntry can be an Array of any natural number
 *          - If statsSuffix is val, then statsEntry should be written as
 *            stat1|stat2|stat3|statI|statN
 *          - E.g.:
 *            <targeting ai anyLowestStatMem switch val: 1, hp|mp> will
 *            restrict the list of targets to be those with highest hp or mp
 *            if the game switch with id 1 is on
 *      22. allLowestStatsMem condSuffix statsSuffix: condEntry, statsEntry
 *          - Applies the following DoubleX RMMZ Unit Filters script call:
 *            allLowestStatsMem(stats, mems)
 *            Where stats is the statsEntry results and mems is the list of
 *            possible targets of the skill/item having this notetag
 *          - condSuffix can be val, switch or script
 *          - statsSuffix can be val, var or script
 *          - The result of condEntry can be anything as only whether it's
 *            truthy matters
 *          - If the result of condEntry is falsy, this notetag will be
 *            discarded upon such use cases
 *          - The result of statsEntry can be an Array of any natural number
 *          - If statsSuffix is val, then statsEntry should be written as
 *            stat1|stat2|stat3|statI|statN
 *          - E.g.:
 *            <targeting ai allLowestStatsMem switch val: 1, hp|mp> will
 *            restrict the list of targets to be those with highest hp and mp
 *            if the game switch with id 1 is on
 *      23. notAnyLowestStatMem condSuffix statsSuffix: condEntry, statsEntry
 *          - Applies the following DoubleX RMMZ Unit Filters script call:
 *            notAnyLowestStatMem(stats, mems)
 *            Where stats is the statsEntry results and mems is the list of
 *            possible targets of the skill/item having this notetag
 *          - condSuffix can be val, switch or script
 *          - statsSuffix can be val, var or script
 *          - The result of condEntry can be anything as only whether it's
 *            truthy matters
 *          - If the result of condEntry is falsy, this notetag will be
 *            discarded upon such use cases
 *          - The result of statsEntry can be an Array of any natural number
 *          - If statsSuffix is val, then statsEntry should be written as
 *            stat1|stat2|stat3|statI|statN
 *          - E.g.:
 *            <targeting ai notAnyLowestStatMem switch val: 1, hp|mp> will
 *            restrict the list of targets to be those without highest hp or
 *            mp if the game switch with id 1 is on
 *      24. notAllLowestStatsMem condSuffix statsSuffix: condEntry, statsEntry
 *          - Applies the following DoubleX RMMZ Unit Filters script call:
 *            notAllLowestStatsMem(stats, mems)
 *            Where stats is the statsEntry results and mems is the list of
 *            possible targets of the skill/item having this notetag
 *          - condSuffix can be val, switch or script
 *          - statsSuffix can be val, var or script
 *          - The result of condEntry can be anything as only whether it's
 *            truthy matters
 *          - If the result of condEntry is falsy, this notetag will be
 *            discarded upon such use cases
 *          - The result of statsEntry can be an Array of any natural
 *            number
 *          - If statsSuffix is val, then statsEntry should be written as
 *            stat1|stat2|stat3|statI|statN
 *          - E.g.:
 *            <targeting ai notAllLowestStatsMem switch val: 1, hp|mp> will
 *            restrict the list of targets to be those without highest hp and
 *            mp if the game switch with id 1 is on
 *      25. anyAboveStatMem condSuffix statsSuffix valSuffix: condEntry, statsEntry, valEntry
 *          - Applies the following DoubleX RMMZ Unit Filters script call:
 *            anyLowestStatMem(stats, val, mems)
 *            Where stats is the statsEntry results, val is the valEntry
 *            results, and mems is the list of possible targets of the
 *            skill/item having this notetag
 *          - condSuffix can be val, switch or script
 *          - statsSuffix can be val, var or script
 *          - valSuffix can be val, var or script
 *          - The result of condEntry can be anything as only whether it's
 *            truthy matters
 *          - If the result of condEntry is falsy, this notetag will be
 *            discarded upon such use cases
 *          - The result of statsEntry can be an Array of any natural number
 *          - If statsSuffix is val, then statsEntry should be written as
 *            stat1|stat2|stat3|statI|statN
 *          - The result of valEntry can be any number
 *          - E.g.:
 *            <targeting ai anyAboveStatMem switch val var: 1, hp|mp, 2> will
 *            restrict the list of targets to be those with hp or mp above the
 *            value of the game variable with id 2 if the game switch with id
 *            1 is on
 *      26. allAboveStatMem condSuffix statsSuffix valSuffix: condEntry, statsEntry, valEntry
 *          - Applies the following DoubleX RMMZ Unit Filters script call:
 *            allAboveStatMem(stats, val, mems)
 *            Where stats is the statsEntry results, val is the valEntry
 *            results, and mems is the list of possible targets of the
 *            skill/item having this notetag
 *          - condSuffix can be val, switch or script
 *          - statsSuffix can be val, var or script
 *          - valSuffix can be val, var or script
 *          - The result of condEntry can be anything as only whether it's
 *            truthy matters
 *          - If the result of condEntry is falsy, this notetag will be
 *            discarded upon such use cases
 *          - The result of statsEntry can be an Array of any natural number
 *          - If statsSuffix is val, then statsEntry should be written as
 *            stat1|stat2|stat3|statI|statN
 *          - The result of valEntry can be any number
 *          - E.g.:
 *            <targeting ai allAboveStatMem switch val var: 1, hp|mp, 2> will
 *            restrict the list of targets to be those with hp and mp above
 *            the value of the game variable with id 2 if the game switch with
 *            id 1 is on
 *      27. anyBelowStatMem condSuffix statsSuffix valSuffix: condEntry, statsEntry, valEntry
 *          - Applies the following DoubleX RMMZ Unit Filters script call:
 *            anyLowestStatMem(stats, val, mems)
 *            Where stats is the statsEntry results, val is the valEntry
 *            results, and mems is the list of possible targets of the
 *            skill/item having this notetag
 *          - condSuffix can be val, switch or script
 *          - statsSuffix can be val, var or script
 *          - valSuffix can be val, var or script
 *          - The result of condEntry can be anything as only whether it's
 *            truthy matters
 *          - If the result of condEntry is falsy, this notetag will be
 *            discarded upon such use cases
 *          - The result of statsEntry can be an Array of any natural number
 *          - If statsSuffix is val, then statsEntry should be written as
 *            stat1|stat2|stat3|statI|statN
 *          - The result of valEntry can be any number
 *          - E.g.:
 *            <targeting ai anyBelowStatMem switch val var: 1, hp|mp, 2> will
 *            restrict the list of targets to be those with hp or mp below the
 *            value of the game variable with id 2 if the game switch with id
 *            1 is on
 *      28. allBelowStatMem condSuffix statsSuffix valSuffix: condEntry, statsEntry, valEntry
 *          - Applies the following DoubleX RMMZ Unit Filters script call:
 *            allBelowStatMem(stats, val, mems)
 *            Where stats is the statsEntry results, val is the valEntry
 *            results, and mems is the list of possible targets of the
 *            skill/item having this notetag
 *          - condSuffix can be val, switch or script
 *          - statsSuffix can be val, var or script
 *          - valSuffix can be val, var or script
 *          - The result of condEntry can be anything as only whether it's
 *            truthy matters
 *          - If the result of condEntry is falsy, this notetag will be
 *            discarded upon such use cases
 *          - The result of statsEntry can be an Array of any natural number
 *          - If statsSuffix is val, then statsEntry should be written as
 *            stat1|stat2|stat3|statI|statN
 *          - The result of valEntry can be any number
 *          - E.g.:
 *            <targeting ai allBelowStatMem switch val var: 1, hp|mp, 2> will
 *            restrict the list of targets to be those with hp and mp below
 *            the value of the game variable with id 2 if the game switch with
 *            id 1 is on
 *      (Advanced)29. or condSuffix: condEntry
 *          - Acts as the or operator among the list of effective notetags in
 *            this plugin upon making action targets
 *          - condSuffix can be val, switch or script
 *          - The result of condEntry can be anything as only whether it's
 *            truthy matters
 *          - If the result of condEntry is falsy, this notetag will be
 *            discarded upon such use cases
 *          - All filtered target groups separated by the or notetags will be
 *            joined by the set union operations
 *          - E.g.:
 *            If the battler has an effective state with the following
 *            effective notetags in this plugin:
 *            <targeting ai anyBelowStatMem switch val var: 1, hp|mp, 2>
 *            <targeting ai allBelowStatMem switch val var: 3, mhp|mmp, 4>
 *            <targeting ai or val: true>
 *            <targeting ai anyAboveStatMem switch val var: 5, atk|def, 6>
 *            <targeting ai allAboveStatMem switch val var: 7, mat|mdf, 8>
 *            <targeting ai or val: false>
 *            <targeting ai notAnyLowestStatsMem switch val: 9, agi|luk>
 *            <targeting ai notAllLowestStatsMem switch val: 10, hit|eva>
 *            And if that battler has the following effective notetags in this
 *            plugin:
 *            <targeting ai notAnyHighestStatsMem switch val: 11, cri|cev>
 *            <targeting ai notAllHighestStatsMem switch val: 12, mev|mrf>
 *            And if the inputted skill/item has the following effective
 *            notetags in this plugin:
 *            <targeting ai or val: true>
 *            <targeting ai anyHighestStatMem switch val: 13, cnt|hrg>
 *            <targeting ai allHighestStatMem switch val: 14, mrg|trg>
 *            Then if the notetag data type priorities are states, battler,
 *            latest skill/item, the inputted actions will select targets
 *            among those filtered by:
 *            <targeting ai anyBelowStatMem switch val var: 1, hp|mp, 2>
 *            <targeting ai allBelowStatMem switch val var: 3, mhp|mmp, 4>
 *            Or:
 *            <targeting ai anyAboveStatMem switch val var: 5, atk|def, 6>
 *            <targeting ai allAboveStatMem switch val var: 7, mat|mdf, 8>
 *            <targeting ai notAnyLowestStatsMem switch val: 9, agi|luk>
 *            <targeting ai notAllLowestStatsMem switch val: 10, hit|eva>
 *            <targeting ai notAnyHighestStatsMem switch val: 11, cri|cev>
 *            <targeting ai notAllHighestStatsMem switch val: 12, mev|mrf>
 *            Or:
 *            <targeting ai anyHighestStatMem switch val: 13, cnt|hrg>
 *            <targeting ai allHighestStatMem switch val: 14, mrg|trg>
 *      (v1.01a+)30. memWithAnyUsableSkill condSuffix skillIdsSuffix: condEntry, skillIdsEntry
 *          - Applies the following DoubleX RMMZ Unit Filters script call:
 *            memWithAnyUsableSkill(skillIds, mems)
 *            Where skillIds is the skillIdsEntry results and mems is the list
 *            of possible targets of the skill/item having this notetag
 *          - condSuffix can be val, switch or script
 *          - skillIdsSuffix can be val, var or script
 *          - The result of condEntry can be anything as only whether it's
 *            truthy matters
 *          - If the result of condEntry is falsy, this notetag will be
 *            discarded upon such use cases
 *          - The result of skillIdsEntry can be an Array of any natural
 *            number
 *          - If skillIdsSuffix is val, then skillIdsEntry should be written
 *            as skillId1|skillId2|skillId3|skillIdI|skillIdN
 *          - E.g.:
 *            <targeting ai memWithAnyUsableSkill switch val: 1, 2|3> will
 *            restrict the list of targets to be those with usable skill with
 *            id 2 or 3 if the game switch with id 1 is on
 *      (v1.01a+)31. memWithAllUsableSkills condSuffix skillIdsSuffix: condEntry, skillIdsEntry
 *          - Applies the following DoubleX RMMZ Unit Filters script call:
 *            memWithAllUsableSkills(skillIds, mems)
 *            Where skillIds is the skillIdsEntry results and mems is the list
 *            of possible targets of the skill/item having this notetag
 *          - condSuffix can be val, switch or script
 *          - skillIdsSuffix can be val, var or script
 *          - The result of condEntry can be anything as only whether it's
 *            truthy matters
 *          - If the result of condEntry is falsy, this notetag will be
 *            discarded upon such use cases
 *          - The result of skillIdsEntry can be an Array of any natural
 *            number
 *          - If skillIdsSuffix is val, then skillIdsEntry should be written
 *            as skillId1|skillId2|skillId3|skillIdI|skillIdN
 *          - E.g.:
 *            <targeting ai memWithAllUsableSkills switch val: 1, 2|3> will
 *            restrict the list of targets to be those with usable skill with
 *            id 2 and 3 if the game switch with id 1 is on
 *      (v1.01a+)32. memWithoutAnyUsableSkill condSuffix skillIdsSuffix: condEntry, skillIdsEntry
 *          - Applies the following DoubleX RMMZ Unit Filters script call:
 *            memWithoutAnyUsableSkill(skillIds, mems)
 *            Where skillIds is the skillIdsEntry results and mems is the list
 *            of possible targets of the skill/item having this notetag
 *          - condSuffix can be val, switch or script
 *          - skillIdsSuffix can be val, var or script
 *          - The result of condEntry can be anything as only whether it's
 *            truthy matters
 *          - If the result of condEntry is falsy, this notetag will be
 *            discarded upon such use cases
 *          - The result of skillIdsEntry can be an Array of any natural
 *            number
 *          - If skillIdsSuffix is val, then skillIdsEntry should be written
 *            as skillId1|skillId2|skillId3|skillIdI|skillIdN
 *          - E.g.:
 *            <targeting ai memWithoutAnyUsableSkill switch val: 1, 2|3> will
 *            restrict the list of targets to be those with usable skill
 *            without id 2 or 3 if the game switch with id 1 is on
 *      (v1.01a+)33. memWithoutAllUsableSkills condSuffix skillIdsSuffix: condEntry, skillIdsEntry
 *          - Applies the following DoubleX RMMZ Unit Filters script call:
 *            memWithoutAllUsableSkills(skillIds, mems)
 *            Where skillIds is the skillIdsEntry results and mems is the list
 *            of possible targets of the skill/item having this notetag
 *          - condSuffix can be val, switch or script
 *          - skillIdsSuffix can be val, var or script
 *          - The result of condEntry can be anything as only whether it's
 *            truthy matters
 *          - If the result of condEntry is falsy, this notetag will be
 *            discarded upon such use cases
 *          - The result of skillIdsEntry can be an Array of any natural
 *            number
 *          - If skillIdsSuffix is val, then skillIdsEntry should be written
 *            as skillId1|skillId2|skillId3|skillIdI|skillIdN
 *          - E.g.:
 *            <targeting ai memWithoutAllUsableSkills switch val: 1, 2|3> will
 *            restrict the list of targets to be those with usable skill
 *            without id 2 and 3 if the game switch with id 1 is on
 *============================================================================
 *    ## Script Call Info
 *----------------------------------------------------------------------------
 *    # Parameter manipulations
 *      1. $gameSystem.setTargetingAIParam(param, val)
 *         - Sets the fully parsed value of the parameter param as val
 *         - param must be the name of a valid parameter of this plugin
 *         - val must be a valid new fully parsed value of the parameter param
 *         - Such parameter value changes will be saved
 *         - E.g.:
 *           $gameSystem.setTargetingAIParam("notetagDataTypePriorities", [
 *               "latestSkillItem",
 *               "states",
 *               "armors",
 *               "weapons",
 *               "class",
 *               "actor",
 *               "enemy"
 *           ]) sets the fully parsed value of the parameter
 *           notetagDataTypePriorities as
 *           ["latestSkillItem","states", "armors", "weapons", "class", "actor", "enemy"]
 *      2. $gameSystem.targetingAIParam(param)
 *         - Returns the fully parsed value of the parameter param
 *         - param must be the name of a valid parameter of this plugin
 *         - E.g.:
 *           $gameSystem.targetingAIParam("notetagDataTypePriorities") returns
 *           the fully parsed value of the parameter
 *           notetagDataTypePriorities, which should be
 *           ["latestSkillItem","states", "armors", "weapons", "class", "actor", "enemy"]
 *           if it uses its default parameter value
 *============================================================================
 *    ## Plugin Command Info
 *----------------------------------------------------------------------------
 *      1. setTargetingAIParam param val
 *         - Applies the script call
 *           $gameSystem.setTargetingAIParam(param, val)
 *============================================================================
 */

// jshint esversion: 6

var DoubleX_RMMZ = DoubleX_RMMZ || {}; // var must be used or game will crash
// Separates the version numbers with the rest to make the former more clear
DoubleX_RMMZ.Targeting_AI = {
    PLUGIN_NAME: "DoubleX RMMZ Targeting AI",
    VERSIONS: { codebase: "1.0.0", plugin: "v1.01a" }
}; // DoubleX_RMMZ.Targeting_AI
//

(TA => {

    "use strict";

    const pluginCodebaseVer = TA.VERSIONS.codebase;
    if (Utils.checkRMVersion(pluginCodebaseVer)) return;
    console.warn(`Your codebase version is ${Utils.RPGMAKER_VERSION} but must be
                 at least ${pluginCodebaseVer} to use ${TA.PLUGIN_NAME}`);

})(DoubleX_RMMZ.Targeting_AI);

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

if (DoubleX_RMMZ.Enhanced_Codebase && DoubleX_RMMZ.Unit_Filters) {

/*============================================================================*/

/*----------------------------------------------------------------------------
 *    ## Managers
 *----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------
 *    # Edited class: DataManager
 *      - Loads all notetags of this plugin
 *----------------------------------------------------------------------------*/

(($, MZ_EC, TA) => {

    "use strict";

    const klassName = "DataManager", {
        NEW,
        ORIG
    } = MZ_EC.setKlassContainer(klassName, $, TA);
    const EC_DM = MZ_EC[klassName].new, DM = TA[klassName];

    // Search tag: NOTE_TYPE
    NEW.NOTETAG_PAIRS = new Map(Object.entries({
        memWithAnyState: new Map(Object.entries({
            suffix1: MZ_EC.BOOL_SUFFIXES, // condSuffix
            suffix2: MZ_EC.VAL_SUFFIXES, // stateIdsSuffix
            entry1: MZ_EC.BOOL_ENTRY, // condEntry
            entry2: MZ_EC.NUM_ARRAY_ENTRY // stateIdsEntry
        })), // memWithAnyState
        memWithAllStates: new Map(Object.entries({
            suffix1: MZ_EC.BOOL_SUFFIXES, // condSuffix
            suffix2: MZ_EC.VAL_SUFFIXES, // stateIdsSuffix
            entry1: MZ_EC.BOOL_ENTRY, // condEntry
            entry2: MZ_EC.NUM_ARRAY_ENTRY // stateIdsEntry
        })), // memWithAllStates
        memWithoutAnyState: new Map(Object.entries({
            suffix1: MZ_EC.BOOL_SUFFIXES, // condSuffix
            suffix2: MZ_EC.VAL_SUFFIXES, // stateIdsSuffix
            entry1: MZ_EC.BOOL_ENTRY, // condEntry
            entry2: MZ_EC.NUM_ARRAY_ENTRY // stateIdsEntry
        })), // memWithoutAnyState
        memWithoutAllStates: new Map(Object.entries({
            suffix1: MZ_EC.BOOL_SUFFIXES, // condSuffix
            suffix2: MZ_EC.VAL_SUFFIXES, // stateIdsSuffix
            entry1: MZ_EC.BOOL_ENTRY, // condEntry
            entry2: MZ_EC.NUM_ARRAY_ENTRY // stateIdsEntry
        })), // memWithoutAllStates
        memWithAnyBuff: new Map(Object.entries({
            suffix1: MZ_EC.BOOL_SUFFIXES, // condSuffix
            suffix2: MZ_EC.VAL_SUFFIXES, // paramIdsSuffix
            entry1: MZ_EC.BOOL_ENTRY, // condEntry
            entry2: MZ_EC.NUM_ARRAY_ENTRY // paramIdsEntry
        })), // memWithAnyBuff
        memWithAllBuffs: new Map(Object.entries({
            suffix1: MZ_EC.BOOL_SUFFIXES, // condSuffix
            suffix2: MZ_EC.VAL_SUFFIXES, // paramIdsSuffix
            entry1: MZ_EC.BOOL_ENTRY, // condEntry
            entry2: MZ_EC.NUM_ARRAY_ENTRY // paramIdsEntry
        })), // memWithAllBuffs
        memWithoutAnyBuff: new Map(Object.entries({
            suffix1: MZ_EC.BOOL_SUFFIXES, // condSuffix
            suffix2: MZ_EC.VAL_SUFFIXES, // paramIdsSuffix
            entry1: MZ_EC.BOOL_ENTRY, // condEntry
            entry2: MZ_EC.NUM_ARRAY_ENTRY // paramIdsEntry
        })), // memWithoutAnyBuff
        memWithoutAllBuffs: new Map(Object.entries({
            suffix1: MZ_EC.BOOL_SUFFIXES, // condSuffix
            suffix2: MZ_EC.VAL_SUFFIXES, // paramIdsSuffix
            entry1: MZ_EC.BOOL_ENTRY, // condEntry
            entry2: MZ_EC.NUM_ARRAY_ENTRY // paramIdsEntry
        })), // memWithoutAllBuffs
        memWithAnyDebuff: new Map(Object.entries({
            suffix1: MZ_EC.BOOL_SUFFIXES, // condSuffix
            suffix2: MZ_EC.VAL_SUFFIXES, // paramIdsSuffix
            entry1: MZ_EC.BOOL_ENTRY, // condEntry
            entry2: MZ_EC.NUM_ARRAY_ENTRY // paramIdsEntry
        })), // memWithAnyDebuff
        memWithAllDebuffs: new Map(Object.entries({
            suffix1: MZ_EC.BOOL_SUFFIXES, // condSuffix
            suffix2: MZ_EC.VAL_SUFFIXES, // paramIdsSuffix
            entry1: MZ_EC.BOOL_ENTRY, // condEntry
            entry2: MZ_EC.NUM_ARRAY_ENTRY // paramIdsEntry
        })), // memWithAllDebuffs
        memWithoutAnyDebuff: new Map(Object.entries({
            suffix1: MZ_EC.BOOL_SUFFIXES, // condSuffix
            suffix2: MZ_EC.VAL_SUFFIXES, // paramIdsSuffix
            entry1: MZ_EC.BOOL_ENTRY, // condEntry
            entry2: MZ_EC.NUM_ARRAY_ENTRY // paramIdsEntry
        })), // memWithoutAnyDebuff
        memWithoutAllDebuffs: new Map(Object.entries({
            suffix1: MZ_EC.BOOL_SUFFIXES, // condSuffix
            suffix2: MZ_EC.VAL_SUFFIXES, // paramIdsSuffix
            entry1: MZ_EC.BOOL_ENTRY, // condEntry
            entry2: MZ_EC.NUM_ARRAY_ENTRY // paramIdsEntry
        })), // memWithoutAllDebuffs
        memWithAnySkill: new Map(Object.entries({
            suffix1: MZ_EC.BOOL_SUFFIXES, // condSuffix
            suffix2: MZ_EC.VAL_SUFFIXES, // skillIdsSuffix
            entry1: MZ_EC.BOOL_ENTRY, // condEntry
            entry2: MZ_EC.NUM_ARRAY_ENTRY // skillIdsEntry
        })), // memWithAnySkill
        memWithAllSkills: new Map(Object.entries({
            suffix1: MZ_EC.BOOL_SUFFIXES, // condSuffix
            suffix2: MZ_EC.VAL_SUFFIXES, // skillIdsSuffix
            entry1: MZ_EC.BOOL_ENTRY, // condEntry
            entry2: MZ_EC.NUM_ARRAY_ENTRY // skillIdsEntry
        })), // memWithAllSkills
        memWithoutAnySkill: new Map(Object.entries({
            suffix1: MZ_EC.BOOL_SUFFIXES, // condSuffix
            suffix2: MZ_EC.VAL_SUFFIXES, // skillIdsSuffix
            entry1: MZ_EC.BOOL_ENTRY, // condEntry
            entry2: MZ_EC.NUM_ARRAY_ENTRY // skillIdsEntry
        })), // memWithoutAnySkill
        memWithoutAllSkills: new Map(Object.entries({
            suffix1: MZ_EC.BOOL_SUFFIXES, // condSuffix
            suffix2: MZ_EC.VAL_SUFFIXES, // skillIdsSuffix
            entry1: MZ_EC.BOOL_ENTRY, // condEntry
            entry2: MZ_EC.NUM_ARRAY_ENTRY // skillIdsEntry
        })), // memWithoutAllSkills
        anyHighestStatMem: new Map(Object.entries({
            suffix1: MZ_EC.BOOL_SUFFIXES, // condSuffix
            suffix2: MZ_EC.VAL_SUFFIXES, // statsSuffix
            entry1: MZ_EC.BOOL_ENTRY, // condEntry
            entry2: MZ_EC.STRING_ARRAY_ENTRY // statsEntry
        })), // anyHighestStatMem
        allHighestStatsMem: new Map(Object.entries({
            suffix1: MZ_EC.BOOL_SUFFIXES, // condSuffix
            suffix2: MZ_EC.VAL_SUFFIXES, // statsSuffix
            entry1: MZ_EC.BOOL_ENTRY, // condEntry
            entry2: MZ_EC.STRING_ARRAY_ENTRY // statsEntry
        })), // allHighestStatsMem
        notAnyHighestStatMem: new Map(Object.entries({
            suffix1: MZ_EC.BOOL_SUFFIXES, // condSuffix
            suffix2: MZ_EC.VAL_SUFFIXES, // statsSuffix
            entry1: MZ_EC.BOOL_ENTRY, // condEntry
            entry2: MZ_EC.STRING_ARRAY_ENTRY // statsEntry
        })), // notAnyHighestStatMem
        notAllHighestStatsMem: new Map(Object.entries({
            suffix1: MZ_EC.BOOL_SUFFIXES, // condSuffix
            suffix2: MZ_EC.VAL_SUFFIXES, // statsSuffix
            entry1: MZ_EC.BOOL_ENTRY, // condEntry
            entry2: MZ_EC.STRING_ARRAY_ENTRY // statsEntry
        })), // notAllHighestStatsMem
        anyLowestStatMem: new Map(Object.entries({
            suffix1: MZ_EC.BOOL_SUFFIXES, // condSuffix
            suffix2: MZ_EC.VAL_SUFFIXES, // statsSuffix
            entry1: MZ_EC.BOOL_ENTRY, // condEntry
            entry2: MZ_EC.STRING_ARRAY_ENTRY // statsEntry
        })), // anyLowestStatMem
        allLowestStatsMem: new Map(Object.entries({
            suffix1: MZ_EC.BOOL_SUFFIXES, // condSuffix
            suffix2: MZ_EC.VAL_SUFFIXES, // statsSuffix
            entry1: MZ_EC.BOOL_ENTRY, // condEntry
            entry2: MZ_EC.STRING_ARRAY_ENTRY // statsEntry
        })), // allLowestStatsMem
        notAnyLowestStatsMem: new Map(Object.entries({
            suffix1: MZ_EC.BOOL_SUFFIXES, // condSuffix
            suffix2: MZ_EC.VAL_SUFFIXES, // statsSuffix
            entry1: MZ_EC.BOOL_ENTRY, // condEntry
            entry2: MZ_EC.STRING_ARRAY_ENTRY // statsEntry
        })), // notAnyLowestStatsMem
        notAllLowestStatsMem: new Map(Object.entries({
            suffix1: MZ_EC.BOOL_SUFFIXES, // condSuffix
            suffix2: MZ_EC.VAL_SUFFIXES, // statsSuffix
            entry1: MZ_EC.BOOL_ENTRY, // condEntry
            entry2: MZ_EC.STRING_ARRAY_ENTRY // statsEntry
        })), // notAllLowestStatsMem
        anyAboveStatMem: new Map(Object.entries({
            suffix1: MZ_EC.BOOL_SUFFIXES, // condSuffix
            suffix2: MZ_EC.VAL_SUFFIXES, // statsSuffix
            suffix3: MZ_EC.VAL_SUFFIXES, // valSuffix
            entry1: MZ_EC.BOOL_ENTRY, // condEntry
            entry2: MZ_EC.STRING_ARRAY_ENTRY, // statsEntry
            entry3: MZ_EC.NUM_ENTRY // valEntry
        })), // anyAboveStatMem
        allAboveStatMem: new Map(Object.entries({
            suffix1: MZ_EC.BOOL_SUFFIXES, // condSuffix
            suffix2: MZ_EC.VAL_SUFFIXES, // statsSuffix
            suffix3: MZ_EC.VAL_SUFFIXES, // valSuffix
            entry1: MZ_EC.BOOL_ENTRY, // condEntry
            entry2: MZ_EC.STRING_ARRAY_ENTRY, // statsEntry
            entry3: MZ_EC.NUM_ENTRY // valEntry
        })), // allAboveStatMem
        anyBelowStatMem: new Map(Object.entries({
            suffix1: MZ_EC.BOOL_SUFFIXES, // condSuffix
            suffix2: MZ_EC.VAL_SUFFIXES, // statsSuffix
            suffix3: MZ_EC.VAL_SUFFIXES, // valSuffix
            entry1: MZ_EC.BOOL_ENTRY, // condEntry
            entry2: MZ_EC.STRING_ARRAY_ENTRY, // statsEntry
            entry3: MZ_EC.NUM_ENTRY // valEntry
        })), // anyBelowStatMem
        allBelowStatMem: new Map(Object.entries({
            suffix1: MZ_EC.BOOL_SUFFIXES, // condSuffix
            suffix2: MZ_EC.VAL_SUFFIXES, // statsSuffix
            suffix3: MZ_EC.VAL_SUFFIXES, // valSuffix
            entry1: MZ_EC.BOOL_ENTRY, // condEntry
            entry2: MZ_EC.STRING_ARRAY_ENTRY, // statsEntry
            entry3: MZ_EC.NUM_ENTRY // valEntry
        })), // allBelowStatMem
        or: new Map(Object.entries({
            suffix1: MZ_EC.BOOL_SUFFIXES, // condSuffix
            entry1: MZ_EC.BOOL_ENTRY // condEntry
        })), // or
        // v1.01a+
        memWithAnyUsableSkill: new Map(Object.entries({
            suffix1: MZ_EC.BOOL_SUFFIXES, // condSuffix
            suffix2: MZ_EC.VAL_SUFFIXES, // skillIdsSuffix
            entry1: MZ_EC.BOOL_ENTRY, // condEntry
            entry2: MZ_EC.NUM_ARRAY_ENTRY // skillIdsEntry
        })), // memWithAnyUsableSkill
        memWithAllUsableSkills: new Map(Object.entries({
            suffix1: MZ_EC.BOOL_SUFFIXES, // condSuffix
            suffix2: MZ_EC.VAL_SUFFIXES, // skillIdsSuffix
            entry1: MZ_EC.BOOL_ENTRY, // condEntry
            entry2: MZ_EC.NUM_ARRAY_ENTRY // skillIdsEntry
        })), // memWithAllUsableSkills
        memWithoutAnyUsableSkill: new Map(Object.entries({
            suffix1: MZ_EC.BOOL_SUFFIXES, // condSuffix
            suffix2: MZ_EC.VAL_SUFFIXES, // skillIdsSuffix
            entry1: MZ_EC.BOOL_ENTRY, // condEntry
            entry2: MZ_EC.NUM_ARRAY_ENTRY // skillIdsEntry
        })), // memWithoutAnyUsableSkill
        memWithoutAllUsableSkills: new Map(Object.entries({
            suffix1: MZ_EC.BOOL_SUFFIXES, // condSuffix
            suffix2: MZ_EC.VAL_SUFFIXES, // skillIdsSuffix
            entry1: MZ_EC.BOOL_ENTRY, // condEntry
            entry2: MZ_EC.NUM_ARRAY_ENTRY // skillIdsEntry
        })) // memWithoutAllUsableSkills
        //
    })); // NEW.NOTETAG_PAIRS
    //

    NEW.NOTETAG_DATA_CONTAINER_NAMES = new Map(Object.entries({
        $dataActors: "actor",
        $dataClasses: "class",
        $dataSkills: "skill",
        $dataItems: "item",
        $dataWeapons: "weapon",
        $dataArmors: "armor",
        $dataEnemies: "enemy",
        $dataStates: "state"
    })); // NEW.NOTETAG_DATA_CONTAINER_NAMES
    NEW._REG_EXP_NOTE = "targeting ai";
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
                this, obj, datumType, regex, notePairs, "targetingAI");
    }; // NEW._loadDataNotetags

})(DataManager, DoubleX_RMMZ.Enhanced_Codebase, DoubleX_RMMZ.Targeting_AI);

/*----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------
 *    ## Objects
 *----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------
 *    # Edited class: Game_System
 *      - Lets you access the parameters of this plugin and store them in save
 *----------------------------------------------------------------------------*/

(($, MZ_EC, TA) => {

    "use strict";

    const klassName = "Game_System";
    const { ORIG } = MZ_EC.setKlassContainer(klassName, $, TA);
    const EC_GS = MZ_EC[klassName].new, GS = TA[klassName];

    MZ_EC.extendFunc(EC_GS, GS, "storeParams", function() {
        ORIG.storeParams.apply(this, arguments);
        // Added to store all parameters of this plugin
        EC_GS.onStoreParams.call(this, TA.PLUGIN_NAME, "targetingAI");
        //
    }); // v1.00a - v1.00a

    /**
     * Script Call/Idempotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @enum @param {string} param - The name of parameter to be stored in saves
     * @param {*} val - The value of the parameter to be stored in game saves
     */
    $.setTargetingAIParam = function(param, val) {
        EC_GS.storeParamVal.call(this, "targetingAI", param, val);
    }; // $.setTargetingAIParam

    /**
     * Script Call/Nullipotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @enum @param {string} param - The name of parameter to be stored in saves
     * @returns {*} The value of the parameter to be stored in game saves
     */
    $.targetingAIParam = function(param) {
        return EC_GS.storedParamVal.call(this, "targetingAI", param);
    }; // $.targetingAIParam

    const pluginName = TA.PLUGIN_NAME;
    const commandName = "setTargetingAIParam";
    PluginManager.registerCommand(pluginName, commandName, ({ param, val }) => {
        $gameSystem.setTargetingAIParam(param, JSON.parse(val));
    });

})(Game_System.prototype, DoubleX_RMMZ.Enhanced_Codebase,
        DoubleX_RMMZ.Targeting_AI);

/*----------------------------------------------------------------------------
 *    # Edited class: Game_Variables
 *      - Reloads all notetags upon variable change to keep scripts updated
 *----------------------------------------------------------------------------*/

(($, MZ_EC, TA) => {

    "use strict";

    const DM = TA.DataManager.new, klassName = "Game_Variables";
    const { NEW, ORIG } = MZ_EC.setKlassContainer(klassName, $, TA);
    const EC_GV = MZ_EC[klassName].new, GV = TA[klassName];

    MZ_EC.extendFunc(EC_GV, GV, "updateDataNotetags", function(varId, val) {
        ORIG.updateDataNotetags.apply(this, arguments);
        // Added to reload all notetags of this plugin to keep script updated
        NEW._updateDataNotetags.call(this, varId, val);
        //
    }); // v1.00a - v1.00a

    /**
     * The this pointer is Game_Variables.prototype
     * Idempotent
     * @author DoubleX @since v1.00a @version v1.00a
     * @param {id} varId - The id of the variable to have its values set
     * @param {*} val - The new value of the variable to have its values set
     */
    NEW._updateDataNotetags = function(varId, val) {
        DM.NOTETAG_DATA_CONTAINER_NAMES.forEach((objType, objName) => {
            const obj = window[objName];
            MZ_EC.updateDataNotetags(obj, "targetingAI", varId, val);
        });
    }; // NEW._updateDataNotetags

})(Game_Variables.prototype, DoubleX_RMMZ.Enhanced_Codebase,
        DoubleX_RMMZ.Targeting_AI);

/*----------------------------------------------------------------------------
 *    # Edited class: Game_Action
 *      - Filters the possible action skill/item by notetags of this plugin
 *----------------------------------------------------------------------------*/

(($, MZ_EC, TA) => {

    "use strict";

    const GBB = Game_BattlerBase.prototype, klassName = "Game_Action";
    const { NEW, ORIG } = MZ_EC.setKlassContainer(klassName, $, TA);
    const EC_GA = MZ_EC[klassName].new, GA = TA[klassName];

    MZ_EC.rewriteFunc(EC_GA, GA, "_randomDeadFriendTarget", function() {
        // Edited to apply the notetags of this plugin to use the targeting ai
        return this.friendsUnit().targetingAIRandomDeadTarget(this);
        //
    }); // v1.00a - v1.00a

    MZ_EC.rewriteFunc(EC_GA, GA, "_randomFriendTarget", function() {
        // Edited to apply the notetags of this plugin to use the targeting ai
        return this.friendsUnit().targetingAIRandomTarget(this);
        //
    }); // v1.00a - v1.00a

    MZ_EC.rewriteFunc(EC_GA, GA, "_randomOpponentTarget", function() {
        // Edited to apply the notetags of this plugin to use the targeting ai
        return this.opponentsUnit().targetingAIRandomTarget(this);
        //
    }); // v1.00a - v1.00a

    MZ_EC.rewriteFunc(EC_GA, GA, "_targetForOneDead", function(unit) {
        // Edited to apply the notetags of this plugin to use the targeting ai
        return [unit.targetingAITargetForOneDead(this)];
        //
    }); // v1.00a - v1.00a

    MZ_EC.rewriteFunc(EC_GA, GA, "_targetForOneAlive", function(unit) {
        // Edited to apply the notetags of this plugin to use the targeting ai
        return [unit.targetingAITargetForOneAlive(this)];
        //
    }); // v1.00a - v1.00a

    MZ_EC.rewriteFunc(EC_GA, GA, "_targetForOneDeadAndAlive", function(unit) {
        // Edited to apply the notetags of this plugin to use the targeting ai
        return [unit.targetingAITargetForOneDeadAndAlive(this)];
        //
    }); // v1.00a - v1.00a

    MZ_EC.rewriteFunc(EC_GA, GA, "_evalBaseValForOne", function(targets) {
        const filteredTargets = NEW.filteredTargets.call(this, targets);
        // Added to evaluate among the filtered targets instead of the originals
        return ORIG._evalBaseValForOne.call(this, filteredTargets);
        //
    }); // v1.00a - v1.00a

    NEW._IS_OR = notetagType => notetagType === "or";

    /**
     * The this pointer is Game_Action.prototype
     * Nullipotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {[Game_Battler]} targets - The list of original targets
     * @returns {[Game_Battler]} The list of the filtered targets
     */
    NEW.filteredTargets = function(targets) {
        // Checking subject canInput is safer than checking _targetIndex
        if (GBB.canInput.call(this.subject())) return targets;
        // GBB.canInput must be used or TPBS inputable actor targets would alter
        return NEW._unifiedFilteredTargets.call(this, targets);
    }; // NEW.filteredTargets

    NEW._UNIFIED_TARGETS = (unifiedTargets, filteredTargets) => {
        return unifiedTargets.unionInPlace(filteredTargets);
    }; // NEW._UNIFIED_TARGETS
    /**
     * The this pointer is Game_Action.prototype
     * Nullipotent
     * @author DoubleX @since v1.00a @version v1.00a
     * @param {[Game_Battler]} targets - The list of original targets
     * @returns {[Game_Battler]} The list of the filtered targets
     */
    NEW._unifiedFilteredTargets = function(targets) {
        const types = $gameSystem.targetingAIParam("notetagDataTypePriorities");
        const notetags = MZ_EC.notetags(this.subject(), types, "targetingAI");
        return notetags.splitInPlace(NEW._isTruthyOr, this).mapReduce(group => {
            return group.reduce(NEW._accumFilteredTargets, targets, this);
        }, NEW._UNIFIED_TARGETS, []);
    }; // NEW._unifiedFilteredTargets

    /**
     * The this pointer is Game_Action.prototype
     * Nullipotent
     * @author DoubleX @since v1.00a @version v1.00a
     * @param {Notetag} notetag - The notetag filtering the targets
     * @returns {boolean} Whether the specified notetag's an effective or one
     */
    NEW._isTruthyOr = function(notetag) {
        const { notetagType, pairs } = notetag;
        if (!NEW._IS_OR(notetagType)) return false;
        return NEW._isCondEntryTruthy.call(this, pairs);
    }; // NEW._isTruthyOr

    const unit = Game_Unit.prototype;
    /**
     * The this pointer is Game_Action.prototype
     * Nullipotent
     * @author DoubleX @since v1.00a @version v1.00a
     * @param {[Game_Battler]} filteredTargets - List of filtered targets
     * @param {Notetag} notetag - The notetag filtering the targets
     * @returns {[Game_Battler]} The list of the filtered  targets
     */
    NEW._accumFilteredTargets = function(filteredTargets, notetag) {
        const { notetagType, pairs } = notetag;
        if (!NEW._isFilterTarget.call(this, notetagType, pairs)) {
            return filteredTargets;
        }
        const args = NEW._unitFilterArgs.call(this, filteredTargets, pairs);
        // Unit filter unit manipulation APIs are actually pure functions
        const newFilteredTargets = unit[notetagType](...args);
        // As long as the mems argument's specified
        // Search tag: ALWAYS_HAS_TARGETS
        if (newFilteredTargets.isEmpty()) return filteredTargets;
        //
        return newFilteredTargets;
    }; // NEW._accumFilteredTargets

    /**
     * The this pointer is Game_Action.prototype
     * Nullipotent
     * @author DoubleX @since v1.00a @version v1.00a
     * @enum @param {string} notetagType - Check NEW.NOTETAG_TYPES
     * @param {Map(string, string)} pairs - The list of suffixes and entries
     * @returns {boolean} Whether the notetag involved will filter targets
     */
    NEW._isFilterTarget = function(notetagType, pairs) {
        // Or notetag in filter group should be falsy but it's just to play safe
        if (NEW._IS_OR(notetagType)) return false;
        //
        return NEW._isCondEntryTruthy.call(this, pairs);
    }; // NEW._isFilterTarget

    /**
     * The this pointer is Game_Action.prototype
     * Nullipotent
     * @author DoubleX @since v1.00a @version v1.00a
     * @param {Map(string, string)} pairs - The list of suffixes and entries
     * @returns {boolean} Whether the notetag involved will filter targets
     */
    NEW._isCondEntryTruthy = function(pairs) {
        // The 1st entry's always the conditional checking if the notetag's used
        return pairs.get("func1").call(this);
        //
    }; // NEW._isCondEntryTruthy

    /**
     * The this pointer is Game_Action.prototype
     * Nullipotent
     * @author DoubleX @since v1.00a @version v1.00a
     * @param {[Game_Battler]} filteredTargets - List of filtered targets
     * @enum @param {string} notetagType - Check NEW.NOTETAG_TYPES
     * @param {Map(string, string)} pairs - The list of suffixes and entries
     * @returns {[*]} Unit filter unit manipulation argument list without mems
     */
    NEW._unitFilterArgs = function(filteredTargets, pairs) {
        const baseArgs = NEW._filterNotetagPairs.call(this, pairs);
        baseArgs.push(filteredTargets);
        // filteredTargets need to be preserved in case no battler passes filter
        // baseArgs.push(true); // Changes targets in place to boost performance
        //
        return baseArgs;
    }; // NEW._unitFilterArgs

    /**
     * The this pointer is Game_Action.prototype
     * Nullipotent
     * @author DoubleX @since v1.00a @version v1.00a
     * @enum @param {string} notetagType - Check NEW.NOTETAG_TYPES
     * @param {Map(string, string)} pairs - The list of suffixes and entries
     * @returns {[*]} Unit filter unit manipulation argument list without mems
     */
    NEW._filterNotetagPairs = function(pairs) {
        const args = [];
        // The 1st entry's always the conditional checking if the notetag's used
        let count = 2;
        //
        // Not using reduce is just to ensure the suffixes match the entries
        while (pairs.has(`func${count}`)) {
            args.push(pairs.get(`func${count}`).call(this));
            count++;
        }
        return args;
    }; // NEW._filterNotetagPairs

})(Game_Action.prototype, DoubleX_RMMZ.Enhanced_Codebase,
        DoubleX_RMMZ.Targeting_AI);

/*----------------------------------------------------------------------------
 *    # Edited class: Game_Unit
 *      - Filters the possible action skill/item by notetags of this plugin
 *----------------------------------------------------------------------------*/

(($, MZ_EC, TA) => {

    "use strict";

    const GA = TA.Game_Action.new;
    const { NEW } = MZ_EC.setKlassContainer("Game_Unit", $, TA);

    /**
     * Nullipotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {Game_Action} act - The action targeting for one alive
     * @returns {Game_Battler} The battler being the dead target of the action
     */
    $.targetingAIRandomDeadTarget = function(act) {
        // Mimics Game_Unit.prototype.randomDeadTarget implementation details
        const targets = GA.filteredTargets.call(act, this.deadMembers());
        const l = targets.length;
        return l ? targets[Math.randomInt(l)] : null;
        //
    }; // $.targetingAIRandomDeadTarget

    NEW._FILTERED_TARGETS_TGR_RAND = targets => {
        return Math.random() * targets.reduce((sum, { tgr }) => sum + tgr, 0);
    }; // NEW._FILTERED_TARGETS_TGR_RAND
    /**
     * Nullipotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {Game_Action} act - The action targeting for one alive
     * @returns {Game_Battler} The battler being the alive target of the action
     */
    $.targetingAIRandomTarget = function(act) {
        // Mimics Game_Unit.prototype.randomTarget implementation details
        const targets = GA.filteredTargets.call(act, this.aliveMembers());
        if (targets.length <= 1) return targets[0];
        let tgrRand = NEW._FILTERED_TARGETS_TGR_RAND(targets);
        for (const target of targets) {
            tgrRand -= target.tgr;
            // It's impossible to exit this for loop without return so it's ok
            if (tgrRand <= 0) return target;
            //
        }
        //
    }; // $.targetingAIRandomTarget

    /**
     * Nullipotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {Game_Action} act - The action targeting for one dead
     * @returns {Game_Battler} The battler being the dead target of the action
     */
    $.targetingAITargetForOneDead = function(act) {
        // Mimics Game_Unit.prototype.smoothDeadTarget implementation details
        const filteredMems = GA.filteredTargets.call(act, this.members());
        const mem = filteredMems[Math.max(0, act._targetIndex)];
        if (mem && mem.isDead()) return mem;
        return GA.filteredTargets.call(act, this.deadMembers())[0];
        //
    }; // $.targetingAITargetForOneDead

    /**
     * Nullipotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {Game_Action} act - The action targeting for one alive
     * @returns {Game_Battler} The battler being the alive target of the action
     */
    $.targetingAITargetForOneAlive = function(act) {
        const { _targetIndex } = act;
        if (_targetIndex < 0) return this.targetingAIRandomTarget(act);
        // Mimics Game_Unit.prototype.smoothTarget implementation details
        const filteredMems = GA.filteredTargets.call(act, this.members());
        const mem = filteredMems[Math.max(0, _targetIndex)];
        if (mem && mem.isAlive()) return mem;
        return GA.filteredTargets.call(act, this.aliveMembers())[0];
        //
    }; // $.targetingAITargetForOneAlive

    /**
     * Nullipotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {Game_Action} act - The action targeting for one alive
     * @returns {Game_Battler} The battler being dead/alive target of the action
     */
    $.targetingAITargetForOneDeadAndAlive = function(act) {
        const filteredTargets = GA.filteredTargets.call(act, this.members());
        return filteredTargets[act._targetIndex] || filteredTargets[0];
    }; // $.targetingAITargetForOneDeadAndAlive

})(Game_Unit.prototype, DoubleX_RMMZ.Enhanced_Codebase,
        DoubleX_RMMZ.Targeting_AI);

/*============================================================================*/

    const curMZECVer = DoubleX_RMMZ.Enhanced_Codebase.VERSIONS.plugin;
    const minMZECVer = "v0.00a";
    if (curMZECVer < minMZECVer) {
        console.warn(`The version of DoubleX RMMZ Enhanced Codebase is
                     ${curMZECVer} but should be at least ${minMZECVer}`);
    }
    const curUFVer = DoubleX_RMMZ.Unit_Filters.VERSIONS.plugin;
    const minUFVer = "v1.01a";
    if (curUFVer < minUFVer) {
        console.warn(`The version of DoubleX RMMZ Unit Filters is ${curUFVer}
                     but should be at least ${minUFVer}`);
    }

} else {

    if (!DoubleX_RMMZ.Enhanced_Codebase) {
        console.warn(`DoubleX RMMZ Enhanced Codebase should be placed above
                     ${DoubleX_RMMZ.Targeting_AI.PLUGIN_NAME}`);
    }
    if (!DoubleX_RMMZ.Unit_Filters) {
        console.warn(`DoubleX RMMZ Unit Filters should be placed above
                     ${DoubleX_RMMZ.Targeting_AI.PLUGIN_NAME}`);
    }

} // if (DoubleX_RMMZ.Enhanced_Codebase && DoubleX_RMMZ.Unit_Filters)
