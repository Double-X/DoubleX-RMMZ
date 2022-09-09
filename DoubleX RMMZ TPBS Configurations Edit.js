/*============================================================================
 *    ## Plugin Info
 *----------------------------------------------------------------------------
 *    # Plugin Name
 *      DoubleX RMMZ TPBS Configurations Edit
 *----------------------------------------------------------------------------
 *    # Introduction
 *    1. By default, many TPBS configurations are effectively hardcoded, but
 *       many users will want to change many of them to suit their needs
 *    2. This plugin lets you do so, although you might want to write some
 *       JavaScript codes directly, as there are just too many possibilities
 *       to be handled
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
 *      1. https://www.youtube.com/watch?v=Pq0evMuFvpQ
 *      2.(v1.01a+)https://www.youtube.com/watch?v=6aWvpmzNjbA
 *      This Plugin:
 *      1. https://github.com/Double-X/DoubleX-RMMZ/blob/master/DoubleX%20RMMZ%20TPBS%20Configurations%20Edit.js
 *      Posts:
 *      1. https://forums.rpgmakerweb.com/index.php?threads/doublex-rmmz-tpbs-configurations-edit.126793/
 *      2. https://www.rpgmakercentral.com/topic/42578-doublex-rmmz-tpbs-configurations-edit/
 *      3. https://rpgmaker.net/engines/rmmz/utilities/284/
 *      4. https://www.save-point.org/thread-8160-post-52643.html
 *      5. https://gdu.one/forums/topic/13631-doublex-rmmz-tpbs-configurations-edit/
 *      6. http://www.hbgames.org/forums/viewtopic.php?p=945117
 *      7.
 *      8. https://doublexrpgmaker.wordpress.com/2020/09/05/doublex-rmmz-tpbs-configurations-edit/
 *      9. https://www.patreon.com/posts/41270147
 *      10. https://www.makerdevs.com/plugin/doublex-rmmz-tpbs-configurations-edit
 *      Mentioned Patreon Supporters:
 *      https://www.patreon.com/posts/71738797
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
 *      { codebase: "1.1.1", plugin: "v1.01a" }(2020 Dec 25 GMT 1100):
 *      1. Added tpbChargeGaugeColor1 and tpbChargeGaugeColor2 to let you
 *         configure the TPB charging bar colors inside battles
 *      2. Added tpbIdleGaugeColor1 and tpbIdleGaugeColor2 to let you show the
 *         TPB idling bar inside battles with configurable colors
 *      3. Added tpbCastGaugeColor1 and tpbCastGaugeColor2 to let you show the
 *         TPB casting bar inside battles with configurable colors
 *      4. Added tpbReadyGaugeColor1 and tpbCastGaugeColor2 to let you show
 *         the TPB cast ready bar inside battles with configurable colors
 *      5. Added isTpbTimeActive to let you set the TPBS wait conditions more
 *         precisely
 *      { codebase: "1.1.0", plugin: "v1.00b" }(2020 Dec 2 GMT 0400):
 *      1. You no longer have to edit the value of
 *         DoubleX_RMMZ.TPBS_Configurations_Edit.PLUGIN_NAME when changing
 *         this plugin file name
 *      { codebase: "1.0.0", plugin: "v1.00a" }(2020 Sep 5 GMT 1200):
 *      1. 1st version of this plugin finished
 *----------------------------------------------------------------------------
 *    # Todo
 *      1. Shows the TPB required cast time for all skills/items of all actors
 *      2. Lets you update the TPB time frames while executing actions as well
 *============================================================================*/
/*:
 * @url https://www.patreon.com/doublex
 * @target MZ
 * @plugindesc Versions: { codebase: "1.1.1", plugin: "v1.01a" }
 * Lets you change some effectively hardcoded TPBS configurations on the fly
 * @orderAfter DoubleX_RMMZ_Enhanced_Codebase
 * @orderAfter DoubleX RMMZ Enhanced Codebase
 * @base DoubleX RMMZ Enhanced Codebase
 * @author DoubleX
 *
 * @param Battler
 *
 * @param tpbAcceleration
 * @parent Battler
 * @type note
 * @desc Returns default tpb gain rate of the battler
 * The battler involved can be referred by the this keyword
 * @default "const speed = this.tpbRelativeSpeed();\nconst referenceTime = $gameParty.tpbReferenceTime();\nreturn speed / referenceTime;"

 * @param tpbRelativeSpeed
 * @parent Battler
 * @type note
 * @desc Returns the default tpb relative speed of the battler
 * The battler involved can be referred by the this keyword
 * @default "return this.tpbSpeed() / $gameParty.tpbBaseSpeed();"
 *
 * @param tpbSpeed
 * @parent Battler
 * @type note
 * @desc Returns the default tpb speed of the battler involved
 * The battler involved can be referred by the this keyword
 * @default "return Math.sqrt(this.agi) + 1;"
 *
 * @param tpbBaseSpeed
 * @parent Battler
 * @type note
 * @desc Returns the default tpb base speed of the battler involved
 * The battler involved can be referred by the this keyword
 * @default "return Math.sqrt(this.paramBasePlus(6)) + 1;"
 *
 * @param tpbRequiredCastTime
 * @parent Battler
 * @type note
 * @desc Returns tpb required cast time for inputted skills/items
 * The battler involved can be referred by the this keyword
 * @default "const MZ_EC = DoubleX_RMMZ.Enhanced_Codebase;\nconst _tpbCastDelay = MZ_EC.Game_Battler.new._tpbCastDelay;\nreturn Math.sqrt(_tpbCastDelay.call(this)) / this.tpbSpeed();"
 *
 * @param tpbChargeTimeWithPenalty
 * @parent Battler
 * @type note
 * @desc Return tpb charge time with escape failure penalty applied
 * The battler involved can be referred by the this keyword
 * @default "return this._tpbChargeTime - 1;"

 * @param updatedTpbChargeTime
 * @parent Battler
 * @type note
 * @desc Returns the new tpb charge time upon a TPB charging update
 * The battler involved can be referred by the this keyword
 * @default "return this._tpbChargeTime + this.tpbAcceleration();"
 *
 * @param updatedTpbCastTime
 * @parent Battler
 * @type note
 * @desc Returns the new tpb cast time upon a TPB casting update
 * The battler involved can be referred by the this keyword
 * @default "return this._tpbCastTime + this.tpbAcceleration();"
 *
 * @param updatedTpbIdleTime
 * @parent Battler
 * @type note
 * @desc Returns the new tpb idle time upon a TPB casting update
 * The battler involved can be referred by the this keyword
 * @default "return this._tpbIdleTime + this.tpbAcceleration();"
 *
 * @param tpbCastDelay
 * @parent Battler
 * @type note
 * @desc Returns total TPB casting delay of all inputted skill/item
 * The battler involved can be referred by the this keyword
 * @default "return this._actions.filterMap(act => {\n    return act.isValid();\n}, act => act.item()).reduce((delay, { speed }) => {\n    return delay + Math.max(0, -speed);\n}, 0);"
 *
 * @param advantageousStartTpbChargeTime
 * @parent Battler
 * @type note
 * @desc Returns the tpb charge time upon advantageous battle start
 * The battler involved can be referred by the this keyword
 * @default "return 1;"
 *
 * @param disadvantageousStartTpbChargeTime
 * @parent Battler
 * @type note
 * @desc Returns tpb charge time upon disadvantageous battle start
 * The battler involved can be referred by the this keyword
 * @default "return 0;"
 *
 * @param normStartTpbChargeTime
 * @parent Battler
 * @type note
 * @desc Returns the tpb charge time upon normal battle starts
 * The battler involved can be referred by the this keyword
 * @default "return this.tpbRelativeSpeed() * Math.random() * 0.5;"
 *
 * @param NotetagDataTypePriorities
 *
 * @param tpbAccelerationNotetagDataTypePriorities
 * @parent NotetagDataTypePriorities
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
 * @desc Sets the data type priorities of tpbAcceleration notetags
 * You can use script calls/plugin commands to change this
 * @default ["latestSkillItem","states","enemy","armors","weapons","class","actor"]
 *
 * @param tpbRelativeSpeedNotetagDataTypePriorities
 * @parent NotetagDataTypePriorities
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
 * @desc Sets the data type priorities of tpbRelativeSpeed notetags
 * You can use script calls/plugin commands to change this
 * @default ["latestSkillItem","states","enemy","armors","weapons","class","actor"]
 *
 * @param tpbSpeedNotetagDataTypePriorities
 * @parent NotetagDataTypePriorities
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
 * @desc Sets the data type priorities of the tpbSpeed notetags
 * You can use script calls/plugin commands to change this
 * @default ["latestSkillItem","states","enemy","armors","weapons","class","actor"]
 *
 * @param tpbBaseSpeedNotetagDataTypePriorities
 * @parent NotetagDataTypePriorities
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
 * @desc Sets the data type priorities of the tpbBaseSpeed notetags
 * You can use script calls/plugin commands to change this
 * @default ["latestSkillItem","states","enemy","armors","weapons","class","actor"]
 *
 * @param tpbRequiredCastTimeNotetagDataTypePriorities
 * @parent NotetagDataTypePriorities
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
 * @desc Sets data type priorities of tpbRequiredCastTime notetags
 * You can use script calls/plugin commands to change this
 * @default ["latestSkillItem","states","enemy","armors","weapons","class","actor"]
 *
 * @param tpbChargeTimeWithPenaltyNotetagDataTypePriorities
 * @parent NotetagDataTypePriorities
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
 * @desc Sets tpbChargeTimeWithPenalty notetag data type priorities
 * You can use script calls/plugin commands to change this
 * @default ["latestSkillItem","states","enemy","armors","weapons","class","actor"]
 *
 * @param updatedTpbChargeTimeNotetagDataTypePriorities
 * @parent NotetagDataTypePriorities
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
 * @desc Sets data type priorities of updatedTpbChargeTime notetags
 * You can use script calls/plugin commands to change this
 * @default ["latestSkillItem","states","enemy","armors","weapons","class","actor"]
 *
 * @param updatedTpbCastTimeNotetagDataTypePriorities
 * @parent NotetagDataTypePriorities
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
 * @desc Sets data type priorities of updatedTpbCastTime notetags
 * You can use script calls/plugin commands to change this
 * @default ["latestSkillItem","states","enemy","armors","weapons","class","actor"]
 *
 * @param updatedTpbIdleTimeNotetagDataTypePriorities
 * @parent NotetagDataTypePriorities
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
 * @desc Sets data type priorities of updatedTpbIdleTime notetags
 * You can use script calls/plugin commands to change this
 * @default ["latestSkillItem","states","enemy","armors","weapons","class","actor"]
 *
 * @param tpbCastDelayNotetagDataTypePriorities
 * @parent NotetagDataTypePriorities
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
 * @desc Sets the data type priorities of the tpbCastDelay notetags
 * You can use script calls/plugin commands to change this
 * @default ["latestSkillItem","states","enemy","armors","weapons","class","actor"]
 *
 * @param advantageousStartTpbChargeTimeNotetagDataTypePriorities
 * @parent NotetagDataTypePriorities
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
 * @desc Set advantageousStartTpbChargeTime note data type priority
 * You can use script calls/plugin commands to change this
 * @default ["latestSkillItem","states","enemy","armors","weapons","class","actor"]
 *
 * @param disadvantageousStartTpbChargeTimeNotetagDataTypePriorities
 * @parent NotetagDataTypePriorities
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
 * @desc Sets disadvantageousStartTpbChargeTime note data priority
 * You can use script calls/plugin commands to change this
 * @default ["latestSkillItem","states","enemy","armors","weapons","class","actor"]
 *
 * @param normStartTpbChargeTimeNotetagDataTypePriorities
 * @parent NotetagDataTypePriorities
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
 * @desc Sets normStartTpbChargeTime notetag data type priorities
 * You can use script calls/plugin commands to change this
 * @default ["latestSkillItem","states","enemy","armors","weapons","class","actor"]
 *
 * @param Unit
 *
 * @param unitTPBBaseSpeed
 * @parent Unit
 * @type note
 * @desc Returns the tpb base speed for the whole party/troop
 * The game unit involved can be referred by the this keyword
 * @default "return Math.max(...this.members().fastMap(mem => {\n    return mem.tpbBaseSpeed();\n}));"
 *
 * @param unitTPBReferenceTime
 * @parent Unit
 * @type note
 * @desc Returns the tpb refernece time for the whole party/troop
 * The game unit involved can be referred by the this keyword
 * @default "const fps = Graphics.gameFps;\nreturn BattleManager.isActiveTpb() ? 4 * fps : fps;"
 *
 * @param Party
 *
 * @param tpbChargeGaugeColor1
 * @parent Party
 * @type note
 * @desc Returns the 1st actor TPB charge gague sprite color
 * The gauge sprite involved can be referred by the this keyword
 * @default "return ColorManager.ctGaugeColor1();"
 *
 * @param tpbChargeGaugeColor2
 * @parent Party
 * @type note
 * @desc Returns the 2nd actor TPB charge gague sprite color
 * The gauge sprite involved can be referred by the this keyword
 * @default "return ColorManager.ctGaugeColor2();"
 *
 * @param tpbIdleGaugeColor1
 * @parent Party
 * @type note
 * @desc Returns the 1st actor TPB idle gague sprite color
 * The gauge sprite involved can be referred by the this keyword
 * @default "return ColorManager.textColor(30);"
 *
 * @param tpbIdleGaugeColor2
 * @parent Party
 * @type note
 * @desc Returns the 2nd actor TPB idle gague sprite color
 * The gauge sprite involved can be referred by the this keyword
 * @default "return ColorManager.textColor(31);"
 *
 * @param tpbCastGaugeColor1
 * @parent Party
 * @type note
 * @desc Returns the 1st actor TPB cast gague sprite color
 * The gauge sprite involved can be referred by the this keyword
 * @default "return ColorManager.textColor(18);"
 *
 * @param tpbCastGaugeColor2
 * @parent Party
 * @type note
 * @desc Returns the 2nd actor TPB cast gague sprite color
 * The gauge sprite involved can be referred by the this keyword
 * @default "return ColorManager.textColor(10);"
 *
 * @param tpbReadyGaugeColor1
 * @parent Party
 * @type note
 * @desc Returns the 1st actor TPB cast ready gague sprite color
 * The gauge sprite involved can be referred by the this keyword
 * @default "return ColorManager.textColor(18);"
 *
 * @param tpbReadyGaugeColor2
 * @parent Party
 * @type note
 * @desc Returns the 2nd actor TPB cast ready gague sprite color
 * The gauge sprite involved can be referred by the this keyword
 * @default "return ColorManager.textColor(10);"
 *
 * @param Troop
 *
 * @param isTroopTpbTurnEnd
 * @parent Troop
 * @type note
 * @desc Returns whether the battle turn has ended
 * The game troop involved can be referred by the this keyword
 * @default "return Math.max(...this.members().fastMap(mem => {\n    return mem.turnCount();\n})) > this._turnCount;"
 *
 * @param Battle
 *
 * @param isTpbTimeActive
 * @parent Battle
 * @type note
 * @desc Returns whether the TPB time frame update will be active
 * The battle scene involved can be referred by the this keyword
 * @default "if (BattleManager.isActiveTpb()) return true;\nreturn !this.isAnyInputWindowActive();"
 *
 * @command setTPBSCfgEditParam
 * @desc Applies script call $gameSystem.setTPBSCfgEditParam(param, val)
 * @arg param
 * @desc The name of a valid parameter of this plugin
 * @arg val
 * @desc A valid new fully parsed value of the parameter param
 *
 * @command setTpbChargeTime
 * @desc Applies script call battler.setTpbChargeTime(tpbChargeTime)
 * @arg side
 * @type select
 * @option Actor
 * @value actor
 * @option Enemy
 * @value enemy
 * @desc The side of the battler setting the TPBS charge time
 * @arg label
 * @type number
 * @desc The actor id/enemy index of the battler setting the TPBS charge time
 * @arg tpbChargeTime
 * @type number
 * @min -999999
 * @desc The new TPBS charge time of the battler involved
 *
 * @command setTpbCastTime
 * @desc Applies script call battler.setTpbCastTime(tpbCastTime)
 * @arg side
 * @type select
 * @option Actor
 * @value actor
 * @option Enemy
 * @value enemy
 * @desc The side of the battler setting the TPBS cast time
 * @arg label
 * @type number
 * @desc The actor id/enemy index of the battler setting the TPBS cast time
 * @arg tpbCastTime
 * @type number
 * @min -999999
 * @desc The new TPBS cast time of the battler involved
 *
 * @command setTpbIdleTime
 * @desc Applies script call battler.setTpbIdleTime(tpbIdleTime)
 * @arg side
 * @type select
 * @option Actor
 * @value actor
 * @option Enemy
 * @value enemy
 * @desc The side of the battler setting the TPBS idle time
 * @arg label
 * @type number
 * @desc The actor id/enemy index of the battler setting the TPBS idle time
 * @arg tpbIdleTime
 * @type number
 * @min -999999
 * @desc The new TPBS idle time of the battler involved
 *
 * @help
 *============================================================================
 *    ## Notetag Info
 *       1. Among all the same notetag types in the same data, all can be
 *          effective
 *       2. Each line can only have at most 1 notetag
 *       3. The following is the structure of all notetags in this plugin:
 *          - <doublex rmmz tpbs cfgs edit contents>
 *          - <tpbs cfgs edit contents>
 *          Where contents are in the form of type suffixes: entries
 *          Either of the above can be used, but the 1st one reduce the chance
 *          of causing other plugins to treat the notetags of this plugin as
 *          theirs, while the 2nd one is more user-friendly
 *          - type is one of the following:
 *            1. tpbAcceleration
 *            2. tpbRelativeSpeed
 *            3. tpbSpeed
 *            4. tpbBaseSpeed
 *            5. tpbRequiredCastTime
 *            6. tpbChargeTimeWithPenalty
 *            7. updatedTpbChargeTime
 *            8. updatedTpbCastTime
 *            9. updatedTpbIdleTime
 *            10. tpbCastDelay
 *            11. advantageousStartTpbChargeTime
 *            12. disadvantageousStartTpbChargeTime
 *            13. normStartTpbChargeTime
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
 *      1. tpbAcceleration condSuffix opSuffix valSuffix: condEntry, opEntry, valEntry
 *         - Applies the following formula on the current tpb gain rate:
 *           current = current operator value
 *           if condEntry returns a turthy result
 *           Where current is the current tpb gain rate, operator is the
 *           operator specified by opEntry, and value is the value specified
 *           by valEntry
 *         - If there are no notetags, current will be the result returned by
 *           the function specified in the parameter tpbAcceleration
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
 *           <tpbs cfgs edit tpbAcceleration switch val val: 1, +, 0.01> will
 *           cause the tpb gain rate of the battler involved to be increased
 *           by 1% of the full TPBS bar(per frame) if the game switch with id
 *           1 is on
 *      2. tpbRelativeSpeed condSuffix opSuffix valSuffix: condEntry, opEntry, valEntry
 *         - Applies the following formula on the current tpb relative speed:
 *           current = current operator value
 *           if condEntry returns a turthy result
 *           Where current is the current tpb relative speed, operator is the
 *           operator specified by opEntry, and value is the value specified
 *           by valEntry
 *         - If there are no notetags, current will be the result returned by
 *           the function specified in the parameter tpbRelativeSpeed
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
 *           <tpbs cfgs edit tpbRelativeSpeed switch val val: 1, +, 0.1> will
 *           cause the tpb relative speed of the battler involved to be
 *           increased by 10% if the game switch with id 1 is on
 *      3. tpbSpeed condSuffix opSuffix valSuffix: condEntry, opEntry, valEntry
 *         - Applies the following formula on the current tpb speed:
 *           current = current operator value
 *           if condEntry returns a turthy result
 *           Where current is the current tpb speed, operator is the operator
 *           specified by opEntry, and value is the value specified by
 *           valEntry
 *         - If there are no notetags, current will be the result returned by
 *           the function specified in the parameter tpbSpeed
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
 *           <tpbs cfgs edit tpbSpeed switch val val: 1, +, 10> will cause the
 *           tpb speed of the battler involved to be increased by 10(roughly
 *           the same as adding 100 agi if tpbSpeed uses the default formula)
 *           if the game switch with id 1 is on
 *      4. tpbBaseSpeed condSuffix opSuffix valSuffix: condEntry, opEntry, valEntry
 *         - Applies the following formula on the current tpb base speed:
 *           current = current operator value
 *           if condEntry returns a turthy result
 *           Where current is the current tpb base speed, operator is the
 *           operator specified by opEntry, and value is the value specified
 *           by valEntry
 *         - If there are no notetags, current will be the result returned by
 *           the function specified in the parameter tpbBaseSpeed
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
 *           <tpbs cfgs edit tpbBaseSpeed switch val val: 1, +, 10> will cause
 *           the tpb base speed of the battler involved to be increased by 10
 *           (roughly the same as adding 100 agi if tpbSpeed uses the default
 *           formula) if the game switch with id 1 is on
 *      5. tpbRequiredCastTime condSuffix opSuffix valSuffix: condEntry, opEntry, valEntry
 *         - Applies the following formula on the current tpb required cast
 *           time: current = current operator value
 *           if condEntry returns a turthy result
 *           Where current is the current tpb required cast time, operator is
 *           the operator specified by opEntry, and value is the value
 *           specified by valEntry
 *         - If there are no notetags, current will be the result returned by
 *           the function specified in the parameter tpbRequiredCastTime
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
 *           <tpbs cfgs edit tpbRequiredCastTime switch val val: 1, +, 1> will
 *           cause the tpb required cast time involved to be increased by 100%
 *           of the full TPBS bar if the game switch with id 1 is on
 *      6. tpbChargeTimeWithPenalty condSuffix opSuffix valSuffix: condEntry, opEntry, valEntry
 *         - Applies the following formula on the current tpb charge time with
 *           the failed party escape attempt penalty applied:
 *           current = current operator value
 *           if condEntry returns a turthy result
 *           Where current is the current tpb charge time with the failed
 *           party escape attempt penalty applied, operator is the operator
 *           specified by opEntry, and value is the value specified by
 *           valEntry
 *         - If there are no notetags, current will be the result returned by
 *           the function specified in the parameter tpbChargeTimeWithPenalty
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
 *           <tpbs cfgs edit tpbChargeTimeWithPenalty switch val val: 1, -, 1>
 *           will cause the tpb charge time with the failed party escape
 *           attempt penalty applied of the battler involved to be decreased
 *           by 100% of the full TPBS bar if the game switch with id 1 is on
 *      7. updatedTpbChargeTime condSuffix opSuffix valSuffix: condEntry, opEntry, valEntry
 *         - Applies the following formula on the current updated tpb charge
 *           time(updated per frame): current = current operator value
 *           if condEntry returns a turthy result
 *           Where current is the current updated tpb charge time, operator is
 *           the operator specified by opEntry, and value is the value
 *           specified by valEntry
 *         - If there are no notetags, current will be the result returned by
 *           the function specified in the parameter updatedTpbChargeTime
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
 *           <tpbs cfgs edit updatedTpbChargeTime switch val val: 1, +, 0.01>
 *           will cause the tpb charge time gain rate of the battler involved
 *           to be increased by 1% of the full TPBS bar(per frame) if the game
 *           switch with id 1 is on
 *      8. updatedTpbCastTime condSuffix opSuffix valSuffix: condEntry, opEntry, valEntry
 *         - Applies the following formula on the current updated tpb cast
 *           time(updated per frame): current = current operator value
 *           if condEntry returns a turthy result
 *           Where current is the current updated tpb cast time, operator is
 *           the operator specified by opEntry, and value is the value
 *           specified by valEntry
 *         - If there are no notetags, current will be the result returned by
 *           the function specified in the parameter updatedTpbCastTime
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
 *           <tpbs cfgs edit updatedTpbCastTime switch val val: 1, +, 0.01>
 *           will cause the tpb cast time gain rate of the battler involved to
 *           be increased by 1% of the full TPBS bar(per frame) if the game
 *           switch with id 1 is on
 *      9. updatedTpbIdleTime condSuffix opSuffix valSuffix: condEntry, opEntry, valEntry
 *         - Applies the following formula on the current updated tpb idle
 *           time(updated per frame): current = current operator value
 *           if condEntry returns a turthy result
 *           Where current is the current updated tpb idle time, operator is
 *           the operator specified by opEntry, and value is the value
 *           specified by valEntry
 *         - If there are no notetags, current will be the result returned by
 *           the function specified in the parameter updatedTpbIdleTime
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
 *           <tpbs cfgs edit updatedTpbIdleTime switch val val: 1, +, 0.01>
 *           will cause the tpb idle time gain rate of the battler involved to
 *           be increased by 1% of the full TPBS bar(per frame) if the game
 *           switch with id 1 is on
 *      10. tpbCastDelay condSuffix opSuffix valSuffix: condEntry, opEntry, valEntry
 *          - Applies the following formula on the current tpb cast delay:
 *            current = current operator value
 *            if condEntry returns a turthy result
 *            Where current is the current cast delay, operator is the
 *            operator specified by opEntry, and value is the value specified
 *            by valEntry
 *          - If there are no notetags, current will be the result returned by
 *            the function specified in the parameter tpbCastDelay
 *          - condSuffix can be val, switch or script
 *          - Both opSuffix and valSuffix can be val, var or script
 *          - The result of condEntry can be anything as only whether it's
 *            truthy matters
 *          - The result of opSuffix must be either of the following:
 *            +
 *            -
 *            *
 *            /
 *            %
 *            =
 *          - The result of valEntry can be any number
 *          - E.g.:
 *            <tpbs cfgs edit tpbCastDelay switch val val: 1, +, 2000> will
 *            cause the tpb cast delay of the battler involved to be increased
 *            by 2000(as if the total speed of all inputted skills/items is
 *            decreased by 2000) if the game switch with id 1 is on
 *      11. advantageousStartTpbChargeTime condSuffix opSuffix valSuffix: condEntry, opEntry, valEntry
 *          - Applies the following formula on the current tpb charge time
 *            upon advantageous battle start(preemptive for actors and
 *            surprise for enemies): current = current operator value
 *            if condEntry returns a turthy result
 *            Where current is the current tpb charge time upon advantageous
 *            battle start, operator is the operator specified by opEntry, and
 *            value is the value specified by valEntry
 *          - If there are no notetags, current will be the result returned by
 *            the function specified in the parameter
 *            advantageousStartTpbChargeTime
 *          - condSuffix can be val, switch or script
 *          - Both opSuffix and valSuffix can be val, var or script
 *          - The result of condEntry can be anything as only whether it's
 *            truthy matters
 *          - The result of opSuffix must be either of the following:
 *            +
 *            -
 *            *
 *            /
 *            %
 *            =
 *          - The result of valEntry can be any number
 *          - E.g.:
 *            <tpbs cfgs edit advantageousStartTpbChargeTime val val val: true, -, 0.5>
 *            will always cause the tpb charge time upon advantageous
 *            battle start of the battler involved to be decreased by 50% of
 *            the full TPBS bar
 *      12. disadvantageousStartTpbChargeTime condSuffix opSuffix valSuffix: condEntry, opEntry, valEntry
 *          - Applies the following formula on the current tpb charge time
 *            upon disadvantageous battle start(surprise for actors and
 *            preemptive for enemies): current = current operator
 *            value if condEntry returns a turthy result
 *            Where current is the current tpb charge time upon
 *            disadvantageous battle start, operator is the operator specified
 *            by opEntry, and value is the value specified by valEntry
 *          - If there are no notetags, current will be the result returned by
 *            the function specified in the parameter
 *            disadvantageousStartTpbChargeTime
 *          - condSuffix can be val, switch or script
 *          - Both opSuffix and valSuffix can be val, var or script
 *          - The result of condEntry can be anything as only whether it's
 *            truthy matters
 *          - The result of opSuffix must be either of the following:
 *            +
 *            -
 *            *
 *            /
 *            %
 *            =
 *          - The result of valEntry can be any number
 *          - E.g.:
 *            <tpbs cfgs edit disadvantageousStartTpbChargeTime val val val: true, -, 0.5>
 *            will always cause the tpb charge time upon disadvantageous
 *            battle start of the battler involved to be decreased by 50% of
 *            the full TPBS bar
 *      13. normStartTpbChargeTime condSuffix opSuffix valSuffix: condEntry, opEntry, valEntry
 *          - Applies the following formula on the current tpb charge time
 *            upon normal battle start: current = current operator
 *            value if condEntry returns a turthy result
 *            Where current is the current tpb charge time upon normal battle
 *            start, operator is the operator specified by opEntry, and value
 *            is the value specified by valEntry
 *          - If there are no notetags, current will be the result returned by
 *            the function specified in the parameter normStartTpbChargeTime
 *          - condSuffix can be val, switch or script
 *          - Both opSuffix and valSuffix can be val, var or script
 *          - The result of condEntry can be anything as only whether it's
 *            truthy matters
 *          - The result of opSuffix must be either of the following:
 *            +
 *            -
 *            *
 *            /
 *            %
 *            =
 *          - The result of valEntry can be any number
 *          - E.g.:
 *            <tpbs cfgs edit normStartTpbChargeTime val val val: true, =, 0.5>
 *            will always cause the tpb charge time upon normal battle start
 *            of the battler involved to be set as 50% of the full TPBS bar
 *============================================================================
 *    ## Script Call Info
 *----------------------------------------------------------------------------
 *    # Parameter manipulations
 *      1. $gameSystem.setTPBSCfgEditParam(param, val)
 *         - Sets the fully parsed value of the parameter param as val
 *         - param must be the name of a valid parameter of this plugin
 *         - val must be a valid new fully parsed value of the parameter param
 *         - Such parameter value changes will be saved
 *         - E.g.:
 *           $gameSystem.setTPBSCfgEditParam("battlerNotetagDataTypePriorities", [
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
 *      2. $gameSystem.tpbsCfgEditParam(param)
 *         - Returns the fully parsed value of the parameter param
 *         - param must be the name of a valid parameter of this plugin
 *         - E.g.:
 *           $gameSystem.tpbsCfgEditParam("skillItemNotetagDataTypePriorities")
 *           returns the fully parsed value of the parameter
 *           skillItemNotetagDataTypePriorities, which should be
 *           ["latestSkillItem","states", "armors", "weapons", "class", "actor", "enemy"]
 *           if it uses its default parameter value
 *    # Battler manipulations
 *      1. setTpbChargeTime(tpbChargeTime)
 *         - Sets the tpb charge time of the battler involved to be
 *           tpbChargeTime
 *         - If the tpb charge time of the battler becomes full, that battler
 *           will become charged and can input actions
 *         - If the battler was casting actions but the tpb charge time
 *           becomes not full, all those actions will be cleared and that
 *           battler will become charging the TPB bar again
 *         - E.g.:
 *           $gameActors.actor(1).setTpbChargeTime(0) will clear the TPBS
 *           charging bar of the actor with id 1 and all casting actions of
 *           that actor if any
 *      2. setTpbCastTime(tpbCastTime)
 *         - Sets the tpb cast time of the battler involved to be tpbCastTime
 *         - This script call only works if the battler's already casting
 *           actions
 *         - If the tpb cast time of the battler becomes full, that battler
 *           will become ready to execute those casted actions
 *         - E.g.:
 *           $gameParty.aliveMembers(0).setTpbCastTime(1) will finish the
 *           casting of all inputted actions of the 1st alive party member and
 *           cause that member to be ready to execute those casted actions,
 *           assuming that that actor's indeed already casting actions
 *      3. setTpbIdleTime(tpbIdleTime)
 *         - Sets the tpb idle time of the battler involved to be tpbIdleTime
 *         - This script call only works if the battler's already idling
 *         - Setting the tpb idle time to be above 1(the maximum tpb idle
 *           time) will behave as setting it as 1
 *         - E.g.:
 *           $gameTroop.members(0).setTpbCastTime(2) will cause the 1st troop
 *           member to reach the TPB timeout and have the individual turn
 *           count increased by 1, as long as that enemy's already idling
 *============================================================================
 *    ## Plugin Command Info
 *----------------------------------------------------------------------------
 *      1. setTPBSCfgEditParam param val
 *         - Applies the script call
 *           $gameSystem.setTPBSCfgEditParam(param, val)
 *      2. setTpbChargeTime side label tpbChargeTime
 *         - Applies the script call battler.setTpbChargeTime(tpbChargeTime)
 *         - battler is the battler identified by side and label
 *      3. setTpbCastTime side label tpbCastTime
 *         - Applies the script call battler.setTpbCastTime(tpbCastTime)
 *         - battler is the battler identified by side and label
 *      4. setTpbIdleTime side label tpbIdleTime
 *         - Applies the script call battler.setTpbIdleTime(tpbIdleTime)
 *         - battler is the battler identified by side and label
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
    DoubleX_RMMZ.TPBS_Configurations_Edit = {
        PLUGIN_NAME: name,
        VERSIONS: { codebase: "1.1.1", plugin: "v1.01a" }
    }; // DoubleX_RMMZ.TPBS_Configurations_Edit
    //

})();

(TPBSCE => {

    "use strict";

    const pluginCodebaseVer = TPBSCE.VERSIONS.codebase;
    if (Utils.checkRMVersion(pluginCodebaseVer)) return;
    console.warn(`Your codebase version is ${Utils.RPGMAKER_VERSION} but must be
                 at least ${pluginCodebaseVer} to use ${TPBSCE.PLUGIN_NAME}`);

})(DoubleX_RMMZ.TPBS_Configurations_Edit);

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

((MZ_EC, TPBSCE) => {

    "use strict";

    MZ_EC.setupFuncParams(TPBSCE, {
        tpbAcceleration: [],
        tpbRelativeSpeed: [],
        tpbSpeed: [],
        tpbBaseSpeed: [],
        tpbRequiredCastTime: [],
        tpbChargeTimeWithPenalty: [],
        updatedTpbChargeTime: [],
        updatedTpbCastTime: [],
        updatedTpbIdleTime: [],
        tpbCastDelay: [],
        advantageousStartTpbChargeTime: [],
        disadvantageousStartTpbChargeTime: [],
        normStartTpbChargeTime: [],
        unitTPBBaseSpeed: [],
        unitTPBReferenceTime: [],
        // v1.01a+
        tpbChargeGaugeColor1: [],
        tpbChargeGaugeColor2: [],
        tpbIdleGaugeColor1: [],
        tpbIdleGaugeColor2: [],
        tpbCastGaugeColor1: [],
        tpbCastGaugeColor2: [],
        tpbReadyGaugeColor1: [],
        tpbReadyGaugeColor2: [],
        //
        isTroopTpbTurnEnd: [],
        isTpbTimeActive: [] // v1.01a+
    });

})(DoubleX_RMMZ.Enhanced_Codebase, DoubleX_RMMZ.TPBS_Configurations_Edit);

/*----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------
 *    ## Managers
 *----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------
 *    # Edited class: DataManager
 *      - Loads all notetags of this plugin
 *----------------------------------------------------------------------------*/

((MZ_EC, TPBSCE) => {

    "use strict";

    // Search tag: NOTE_TYPE
    MZ_EC.loadDataManagerNotetags(TPBSCE, {
        tpbAcceleration: {
            suffix1: MZ_EC.BOOL_SUFFIXES, // condSuffix
            suffix2: MZ_EC.VAL_SUFFIXES, // opSuffix
            suffix3: MZ_EC.VAL_SUFFIXES, // valSuffix
            entry1: MZ_EC.BOOL_ENTRY, // condEntry
            entry2: MZ_EC.STRING_ENTRY, // opEntry
            entry3: MZ_EC.NUM_ENTRY // valEntry
        }, // tpbAcceleration
        tpbRelativeSpeed: {
            suffix1: MZ_EC.BOOL_SUFFIXES, // condSuffix
            suffix2: MZ_EC.VAL_SUFFIXES, // opSuffix
            suffix3: MZ_EC.VAL_SUFFIXES, // valSuffix
            entry1: MZ_EC.BOOL_ENTRY, // condEntry
            entry2: MZ_EC.STRING_ENTRY, // opEntry
            entry3: MZ_EC.NUM_ENTRY // valEntry
        }, // tpbRelativeSpeed
        tpbSpeed: {
            suffix1: MZ_EC.BOOL_SUFFIXES, // condSuffix
            suffix2: MZ_EC.VAL_SUFFIXES, // opSuffix
            suffix3: MZ_EC.VAL_SUFFIXES, // valSuffix
            entry1: MZ_EC.BOOL_ENTRY, // condEntry
            entry2: MZ_EC.STRING_ENTRY, // opEntry
            entry3: MZ_EC.NUM_ENTRY // valEntry
        }, // tpbSpeed
        tpbBaseSpeed: {
            suffix1: MZ_EC.BOOL_SUFFIXES, // condSuffix
            suffix2: MZ_EC.VAL_SUFFIXES, // opSuffix
            suffix3: MZ_EC.VAL_SUFFIXES, // valSuffix
            entry1: MZ_EC.BOOL_ENTRY, // condEntry
            entry2: MZ_EC.STRING_ENTRY, // opEntry
            entry3: MZ_EC.NUM_ENTRY // valEntry
        }, // tpbBaseSpeed
        tpbRequiredCastTime: {
            suffix1: MZ_EC.BOOL_SUFFIXES, // condSuffix
            suffix2: MZ_EC.VAL_SUFFIXES, // opSuffix
            suffix3: MZ_EC.VAL_SUFFIXES, // valSuffix
            entry1: MZ_EC.BOOL_ENTRY, // condEntry
            entry2: MZ_EC.STRING_ENTRY, // opEntry
            entry3: MZ_EC.NUM_ENTRY // valEntry
        }, // tpbRequiredCastTime
        tpbChargeTimeWithPenalty: {
            suffix1: MZ_EC.BOOL_SUFFIXES, // condSuffix
            suffix2: MZ_EC.VAL_SUFFIXES, // opSuffix
            suffix3: MZ_EC.VAL_SUFFIXES, // valSuffix
            entry1: MZ_EC.BOOL_ENTRY, // condEntry
            entry2: MZ_EC.STRING_ENTRY, // opEntry
            entry3: MZ_EC.NUM_ENTRY // valEntry
        }, // tpbChargeTimeWithPenalty
        updatedTpbChargeTime: {
            suffix1: MZ_EC.BOOL_SUFFIXES, // condSuffix
            suffix2: MZ_EC.VAL_SUFFIXES, // opSuffix
            suffix3: MZ_EC.VAL_SUFFIXES, // valSuffix
            entry1: MZ_EC.BOOL_ENTRY, // condEntry
            entry2: MZ_EC.STRING_ENTRY, // opEntry
            entry3: MZ_EC.NUM_ENTRY // valEntry
        }, // updatedTpbChargeTime
        updatedTpbCastTime: {
            suffix1: MZ_EC.BOOL_SUFFIXES, // condSuffix
            suffix2: MZ_EC.VAL_SUFFIXES, // opSuffix
            suffix3: MZ_EC.VAL_SUFFIXES, // valSuffix
            entry1: MZ_EC.BOOL_ENTRY, // condEntry
            entry2: MZ_EC.STRING_ENTRY, // opEntry
            entry3: MZ_EC.NUM_ENTRY // valEntry
        }, // updatedTpbCastTime
        updatedTpbIdleTime: {
            suffix1: MZ_EC.BOOL_SUFFIXES, // condSuffix
            suffix2: MZ_EC.VAL_SUFFIXES, // opSuffix
            suffix3: MZ_EC.VAL_SUFFIXES, // valSuffix
            entry1: MZ_EC.BOOL_ENTRY, // condEntry
            entry2: MZ_EC.STRING_ENTRY, // opEntry
            entry3: MZ_EC.NUM_ENTRY // valEntry
        }, // updatedTpbIdleTime
        tpbCastDelay: {
            suffix1: MZ_EC.BOOL_SUFFIXES, // condSuffix
            suffix2: MZ_EC.VAL_SUFFIXES, // opSuffix
            suffix3: MZ_EC.VAL_SUFFIXES, // valSuffix
            entry1: MZ_EC.BOOL_ENTRY, // condEntry
            entry2: MZ_EC.STRING_ENTRY, // opEntry
            entry3: MZ_EC.NUM_ENTRY // valEntry
        }, // tpbCastDelay
        advantageousStartTpbChargeTime: {
            suffix1: MZ_EC.BOOL_SUFFIXES, // condSuffix
            suffix2: MZ_EC.VAL_SUFFIXES, // opSuffix
            suffix3: MZ_EC.VAL_SUFFIXES, // valSuffix
            entry1: MZ_EC.BOOL_ENTRY, // condEntry
            entry2: MZ_EC.STRING_ENTRY, // opEntry
            entry3: MZ_EC.NUM_ENTRY // valEntry
        }, // advantageousStartTpbChargeTime
        disadvantageousStartTpbChargeTime: {
            suffix1: MZ_EC.BOOL_SUFFIXES, // condSuffix
            suffix2: MZ_EC.VAL_SUFFIXES, // opSuffix
            suffix3: MZ_EC.VAL_SUFFIXES, // valSuffix
            entry1: MZ_EC.BOOL_ENTRY, // condEntry
            entry2: MZ_EC.STRING_ENTRY, // opEntry
            entry3: MZ_EC.NUM_ENTRY // valEntry
        }, // disadvantageousStartTpbChargeTime
        normStartTpbChargeTime: {
            suffix1: MZ_EC.BOOL_SUFFIXES, // condSuffix
            suffix2: MZ_EC.VAL_SUFFIXES, // opSuffix
            suffix3: MZ_EC.VAL_SUFFIXES, // valSuffix
            entry1: MZ_EC.BOOL_ENTRY, // condEntry
            entry2: MZ_EC.STRING_ENTRY, // opEntry
            entry3: MZ_EC.NUM_ENTRY // valEntry
        } // normStartTpbChargeTime
    }, {
        $dataActors: "actor",
        $dataClasses: "class",
        $dataSkills: "skill",
        $dataItems: "item",
        $dataWeapons: "weapon",
        $dataArmors: "armor",
        $dataEnemies: "enemy",
        $dataStates: "state"
    }, "tpbs cfgs edit", "tpbsCfgEdit");
    //

})(DoubleX_RMMZ.Enhanced_Codebase, DoubleX_RMMZ.TPBS_Configurations_Edit);

/*----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------
 *    ## Objects
 *----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------
 *    # Edited class: Game_System
 *      - Lets you access the parameters of this plugin and store them in save
 *----------------------------------------------------------------------------*/

((MZ_EC, TPBSCE) => {

    "use strict";

    MZ_EC.setupGameSystemTPBSParamsIOs(TPBSCE, "tpbsCfgEdit");

    const FP = TPBSCE.FUNC_PARAMS, klassName = "Game_System";
    const EC_GS = MZ_EC[klassName].new, GS = TPBSCE[klassName];

    MZ_EC.extendFunc(EC_GS, GS, "storeParamVal", function(containerName, param, val) {
        GS.orig.storeParamVal.apply(this, arguments);
        // Added to update the functions of parameters storing function contents
        FP.storeFuncParam(param, val);
        //
    }); // v1.00a - v1.00a

})(DoubleX_RMMZ.Enhanced_Codebase, DoubleX_RMMZ.TPBS_Configurations_Edit);

/*----------------------------------------------------------------------------
 *    # Edited class: Game_Variables
 *      - Reloads all notetags upon variable change to keep scripts updated
 *----------------------------------------------------------------------------*/

((MZ_EC, TPBSCE) => {

    "use strict";

    MZ_EC.updateGameVarsDataNotetags(TPBSCE, "tpbsCfgEdit");

})(DoubleX_RMMZ.Enhanced_Codebase, DoubleX_RMMZ.TPBS_Configurations_Edit);

/*----------------------------------------------------------------------------
 *    # Edited class: Game_Battler
 *      - Uses the edited configurations from this plugin instead of default
 *----------------------------------------------------------------------------*/

(($, MZ_EC, TPBSCE) => {

    "use strict";

    const PF = TPBSCE.FUNC_PARAMS.PARAM_FUNCS, klassName = "Game_Battler", {
        NEW,
        rewriteFunc
    } = MZ_EC.setKlassContainer(klassName, $, TPBSCE);
    const EC_GB = MZ_EC[klassName].new, GB = TPBSCE[klassName];

    rewriteFunc("tpbAcceleration", function() {
        // Edited to use the customized tpb acceleration instead
        return NEW._notetagVal.call(this, "tpbAcceleration");
        //
    }); // v1.00a - v1.00a

    rewriteFunc("tpbRelativeSpeed", function() {
        // Edited to use the customized tpb relative speed instead
        return NEW._notetagVal.call(this, "tpbRelativeSpeed");
        //
    }); // v1.00a - v1.00a

    rewriteFunc("tpbSpeed", function() {
        // Edited to use the customized tpb speed instead
        return NEW._notetagVal.call(this, "tpbSpeed");
        //
    }); // v1.00a - v1.00a

    rewriteFunc("tpbBaseSpeed", function() {
        // Edited to use the customized tpb base speed instead
        return NEW._notetagVal.call(this, "tpbBaseSpeed");
        //
    }); // v1.00a - v1.00a

    rewriteFunc("tpbRequiredCastTime", function() {
        // Edited to use the customized required tpb cast time instead
        return NEW._notetagVal.call(this, "tpbRequiredCastTime");
        //
    }); // v1.00a - v1.00a

    MZ_EC.rewriteFunc(EC_GB, GB, "_tpbChargeTimeWithPenalty", function() {
        // Edited to use customized tpb charge time penalty functions instead
        return NEW._notetagVal.call(this, "tpbChargeTimeWithPenalty");
        //
    }); // v1.00a - v1.00a

    MZ_EC.rewriteFunc(EC_GB, GB, "_initializedTpbChargeTime", function(advantageous, disadvantageous) {
        if (this.isRestricted()) return 0;
        // Edited to use the customized initialized tpb charge time instead
        if (advantageous) {
            return NEW._initializedAdvantagouesTpbChargeTime.call(this);
        } else if (disadvantageous) {
            return NEW._initializedDisadvantagouesTpbChargeTime.call(this);
        } else return NEW._initializedNormTpbChargeTime.call(this);
        //
    }); // v1.00a - v1.00a

    MZ_EC.rewriteFunc(EC_GB, GB, "_updatedTpbChargeTime", function() {
        // Edited to use the customized tpb charge time update functions instead
        return NEW._notetagVal.call(this, "updatedTpbChargeTime");
        //
    }); // v1.00a - v1.00a

    MZ_EC.rewriteFunc(EC_GB, GB, "_updatedTpbCastTime", function() {
        // Edited to use the customized tpb cast time update functions instead
        return NEW._notetagVal.call(this, "updatedTpbCastTime");
        //
    }); // v1.00a - v1.00a

    MZ_EC.rewriteFunc(EC_GB, GB, "_updatedTpbIdleTime", function() {
        // Edited to use the customized tpb idle time update functions instead
        return NEW._notetagVal.call(this, "updatedTpbIdleTime");
        //
    }); // v1.00a - v1.00a

    MZ_EC.rewriteFunc(EC_GB, GB, "_tpbCastDelay", function() {
        // Edited to use the customized tpb cast delay functions instead
        return NEW._notetagVal.call(this, "tpbCastDelay");
        //
    }); // v1.00a - v1.00a

    /**
     * Idempotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {number} tpbChargeTime - The new tpb charge time of this battler
     */
    $.setTpbChargeTime = function(tpbChargeTime) {
        const wasEndTpbCharging = this.isEndTpbCharging();
        this._tpbChargeTime = tpbChargeTime;
        if (this.isEndTpbCharging()) {
            if (wasEndTpbCharging) return;
            this._tpbChargeTime = 1;
            this.onTpbCharged();
        } else if (!this.isTpbCasting()) return;
        this._tpbState = "charging";
        this.clearActions();
    }; // $.setTpbChargeTime

    /**
     * Idempotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {number} tpbCastTime - The new tpb cast time of this battler
     */
    $.setTpbCastTime = function(tpbCastTime) {
        if (!this.isTpbCasting()) return;
        this._tpbCastTime = tpbCastTime;
        if (!this.isEndTpbCasting()) return;
        this._tpbCastTime = this.tpbRequiredCastTime();
        this.onTpbReady();
    }; // $.setTpbCastTime

    /**
     * Idempotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {number} tpbIdleTime - The new tpb idle time of this battler
     */
    $.setTpbIdleTime = function(tpbIdleTime) {
        if (this.isTpbIdle()) this._tpbIdleTime = tpbIdleTime;
    }; // $.setTpbIdleTime

    NEW._PLUGIN_CMD_BATTLER_ = (side, label) => {
        switch (side) {
            case "actor": return $gameActors.actor(+label);
            case "enemy": return $gameTroop.members()[+label];
            default: return undefined;
        }
    }; // NEW._PLUGIN_CMD_BATTLER_

    PluginManager.registerCommand(TPBSCE.PLUGIN_NAME, "setTpbChargeTime", ({ side, label, tpbChargeTime }) => {
        const battler_ = NEW._PLUGIN_CMD_BATTLER_(side, label);
        if (battler_) battler_.setTpbChargeTime(+tpbChargeTime);
    });

    PluginManager.registerCommand(TPBSCE.PLUGIN_NAME, "setTpbCastTime", ({ side, label, tpbCastTime }) => {
        const battler_ = NEW._PLUGIN_CMD_BATTLER_(side, label);
        if (battler_) battler_.setTpbCastTime(+tpbCastTime);
    });

    PluginManager.registerCommand(TPBSCE.PLUGIN_NAME, "setTpbIdleTime", ({ side, label, tpbIdleTime }) => {
        const battler_ = NEW._PLUGIN_CMD_BATTLER_(side, label);
        if (battler_) battler_.setTpbIdleTime(+tpbIdleTime);
    });

    /**
     * The this pointer is Game_Battler.prototype
     * Idempotent
     * @author DoubleX @since v1.00a @version v1.00a
     * @returns {number} The initialized tpb charge time upon battle start
     */
    NEW._initializedAdvantagouesTpbChargeTime = function() {
        return NEW._notetagVal.call(this, "advantageousStartTpbChargeTime");
    }; // NEW._initializedAdvantagouesTpbChargeTime

    /**
     * The this pointer is Game_Battler.prototype
     * Idempotent
     * @author DoubleX @since v1.00a @version v1.00a
     * @returns {number} The initialized tpb charge time upon battle start
     */
    NEW._initializedAdvantagouesTpbChargeTime = function() {
        return NEW._notetagVal.call(this, "disadvantageousStartTpbChargeTime");
    }; // NEW._initializedAdvantagouesTpbChargeTime

    /**
     * The this pointer is Game_Battler.prototype
     * Idempotent
     * @author DoubleX @since v1.00a @version v1.00a
     * @returns {number} The initialized tpb charge time upon battle start
     */
    NEW._initializedNormTpbChargeTime = function() {
        return NEW._notetagVal.call(this, "normStartTpbChargeTime");
    }; // NEW._initializedNormTpbChargeTime

    /**
     * The this pointer is Game_Battler.prototype
     * Idempotent
     * @author DoubleX @since v1.00a @version v1.00a
     * @enum @param {string} notetag - Refer to NEW.NOTETAG_PAIRS in DataManager
     * @returns {number} The final result of all effective notetags of battler
     */
    NEW._notetagVal = function(notetag) {
        const priorities = $gameSystem.tpbsCfgEditParam(
                `${notetag}NotetagDataTypePriorities`);
        const initVal = PF.get(notetag).call(this);
        return MZ_EC.condOpValNotetagVal(
                this, priorities, "tpbsCfgEdit", [notetag], initVal);
    }; // NEW._notetagVal

})(Game_Battler.prototype, DoubleX_RMMZ.Enhanced_Codebase,
        DoubleX_RMMZ.TPBS_Configurations_Edit);

/*----------------------------------------------------------------------------
 *    # Edited class: Game_Unit
 *      - Uses the edited configurations from this plugin instead of default
 *----------------------------------------------------------------------------*/

(($, MZ_EC, TPBSCE) => {

    "use strict";

    const PF = TPBSCE.FUNC_PARAMS.PARAM_FUNCS;
    const { rewriteFunc } = MZ_EC.setKlassContainer("Game_Unit", $, TPBSCE);

    rewriteFunc("tpbBaseSpeed", function() {
        // Edited to use the customized tpb base speed instead
        return PF.get("unitTPBBaseSpeed").call(this);
        //
    }); // v1.00a - v1.00a

    rewriteFunc("tpbReferenceTime", function() {
        // Edited to use the customized tpb reference time instead
        return PF.get("unitTPBReferenceTime").call(this);
        //
    }); // v1.00a - v1.00a

})(Game_Unit.prototype, DoubleX_RMMZ.Enhanced_Codebase,
        DoubleX_RMMZ.TPBS_Configurations_Edit);

/*----------------------------------------------------------------------------
 *    # Edited class: Game_Troop
 *      - Uses the edited configurations from this plugin instead of default
 *----------------------------------------------------------------------------*/

(($, MZ_EC, TPBSCE) => {

    "use strict";

    const PF = TPBSCE.FUNC_PARAMS.PARAM_FUNCS;
    const { rewriteFunc } = MZ_EC.setKlassContainer("Game_Troop", $, TPBSCE);

    rewriteFunc("isTpbTurnEnd", function() {
        // Edited to use the customized tpb turn end check instead
        return PF.get("isTroopTpbTurnEnd").call(this);
        //
    }); // v1.00a - v1.00a

})(Game_Troop.prototype, DoubleX_RMMZ.Enhanced_Codebase,
        DoubleX_RMMZ.TPBS_Configurations_Edit);

/*----------------------------------------------------------------------------
 *    # (v1.01a+)Edited class: Scene_Battle
 *      - Uses the edited configurations from this plugin instead of default
 *----------------------------------------------------------------------------*/

(($, MZ_EC, TPBSCE) => {

    "use strict";

    const PF = TPBSCE.FUNC_PARAMS.PARAM_FUNCS;
    const { rewriteFunc } = MZ_EC.setKlassContainer("Scene_Battle", $, TPBSCE);

    rewriteFunc("isTimeActive", function() {
        // Edited to use the customized tpb time frame update conditions instead
        return PF.get("isTpbTimeActive").call(this);
        //
    }); // v1.01a - v1.01a

})(Scene_Battle.prototype, DoubleX_RMMZ.Enhanced_Codebase,
        DoubleX_RMMZ.TPBS_Configurations_Edit);

/*----------------------------------------------------------------------------
 *    # (v1.01a+)Edited class: Sprite_Gauge
 *      - Uses the edited configurations from this plugin instead of default
 *----------------------------------------------------------------------------*/

(($, MZ_EC, TPBSCE) => {

    "use strict";

    const PF = TPBSCE.FUNC_PARAMS.PARAM_FUNCS, klassName = "Sprite_Gauge";
    const { ORIG } = MZ_EC.setKlassContainer(klassName, $, TPBSCE);
    const EC_SG = MZ_EC[klassName].new, SG = TPBSCE[klassName];

    MZ_EC.extendFunc(EC_SG, SG, "validCurTimeVal", function() {
        // Added to show the tpb casting progress as well
        if (this._battler.isTpbCasting()) return this._battler.tpbCastTime();
        //
        return ORIG.validCurTimeVal.apply(this, arguments);
    }); // v1.01a - v1.01a

    MZ_EC.extendFunc(EC_SG, SG, "validCurMaxTimeVal", function() {
        // Edited to show the tpb casting progress as well
        if (this._battler.isTpbCasting()) {
            return this._battler.tpbRequiredCastTime();
        } else return ORIG.validCurMaxTimeVal.apply(this, arguments);
        //
    }); // v1.01a - v1.01a

    ["1", "2"].forEach(num => {
        MZ_EC.extendFunc(EC_SG, SG, `timeGaugeColor${num}`, function() {
            // Edited to use the customized tpb gauge sprite color instead
            if (this._battler.isTpbCharging()) {
                return PF.get(`tpbChargeGaugeColor${num}`).call(this);
            } else if (this._battler.isTpbIdling()) {
                return PF.get(`tpbIdleGaugeColor${num}`).call(this);
            } else if (this._battler.isTpbCasting()) {
                return PF.get(`tpbCastGaugeColor${num}`).call(this);
            } else if (this._battler.isActing()) {
                // The state will be from casting to ready then instantly acting
                return PF.get(`tpbReadyGaugeColor${num}`).call(this);
                //
            } else return ORIG[`timeGaugeColor${num}`].apply(this, arguments);
            //
        }); // v1.01a - v1.01a
    });

})(Sprite_Gauge.prototype, DoubleX_RMMZ.Enhanced_Codebase,
        DoubleX_RMMZ.TPBS_Configurations_Edit);

/*============================================================================*/

    const curMZECVer = DoubleX_RMMZ.Enhanced_Codebase.VERSIONS.plugin;
    const minMZECVer = "v0.00a";
    if (curMZECVer < minMZECVer) {
        console.warn(`The version of DoubleX RMMZ Enhanced Codebase is
                     ${curMZECVer} but should be at least ${minMZECVer}`);
    }

} else {

    console.warn(`DoubleX RMMZ Enhanced Codebase should be placed above
                 ${DoubleX_RMMZ.TPBS_Configurations_Edit.PLUGIN_NAME}`);

} // if (DoubleX_RMMZ.Enhanced_Codebase)
