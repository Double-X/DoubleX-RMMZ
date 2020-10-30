/*============================================================================
 *    ## Plugin Info
 *----------------------------------------------------------------------------
 *    # Plugin Name
 *      DoubleX_RMMZ_TPBS_Actor_Hotkeys
 *----------------------------------------------------------------------------
 *    # Introduction
 *      1. By default, the TPBS only lets you select the next inputable actors
 *         by pressing the cancel key
 *      2. This plugin lets you set some hotkeys to select the previous
 *         counterparts as well as those with specified party member indices
 *----------------------------------------------------------------------------
 *    # Prerequisites
 *      Plugins:
 *      1. DoubleX RMMZ Enhanced Codebase
 *         https://github.com/Double-X/DoubleX-RMMZ/blob/master/DoubleX%20RMMZ%20Enhanced%20Codebase.js
 *      Abilities:
 *      1. Nothing special
 *----------------------------------------------------------------------------
 *    # Author Notes
 *      1. A custom key map plugin, like DoubleX_RMMZ_Custom_Key_Maps:
 *         https://github.com/Double-X/DoubleX-RMMZ/blob/master/DoubleX_RMMZ_Custom_Key_Maps.js
 *         Can be useful when setting hotkeys to select targets in this plugin
 *      2. The TPBS inputable actor selection hotkeys shouldn't be changed
 *         inside battles
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
 *      1. https://www.youtube.com/watch?v=oJkwC0fmI2o
 *      This Plugin:
 *      1. https://github.com/Double-X/DoubleX-RMMZ/blob/master/DoubleX_RMMZ_TPBS_Actor_Hotkeys.js
 *      Posts:
 *      1. https://forums.rpgmakerweb.com/index.php?threads/doublex_rmmz_tpbs_actor_hotkeys.129346/
 *      2. https://www.rpgmakercentral.com/topic/42673-doublex_rmmz_tpbs_actor_hotkeys/
 *      3. https://rpgmaker.net/engines/rmmz/utilities/307/
 *      4. https://www.save-point.org/thread-8192.html
 *      5. https://gdu.one/forums/topic/13677-doublex_rmmz_tpbs_actor_hotkeys/
 *      6. http://www.hbgames.org/forums/viewtopic.php?f=332&t=80396
 *      7. https://forum.chaos-project.com/index.php/topic,16093.0.html
 *      8. https://doublexrpgmaker.wordpress.com/2020/10/30/doublex_rmmz_tpbs_actor_hotkeys/
 *      9. https://www.patreon.com/posts/43321038
 *      10. https://www.makerdevs.com/plugin/doublex-rmmz-tpbs-actor-hotkeys
 *----------------------------------------------------------------------------
 *    # Instructions
 *      1. The default plugin parameters file name is
 *         DoubleX_RMMZ_TPBS_Actor_Hotkeys
 *         If you want to change that, you must edit the value of
 *         DoubleX_RMMZ.TPBS_Actor_Hotkeys.PLUGIN_NAME, which must be done
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
 *      { codebase: "1.1.0", plugin: "v1.00a" }(2020 Sep 30 GMT 0900):
 *      1. 1st version of this plugin finished
 *============================================================================*/

/*~struct~IndexHotkey:
 *
 * @param actorIndex
 * @type number
 * @desc The index of the target selected by hotkey actorHotkey
 * @default
 *
 * @param actorHotkey
 * @desc The keymap of the hotkey selecting the target with index actorIndex
 * @default
 */

/*:
 * @url https://www.patreon.com/doublex
 * @target MZ
 * @plugindesc Versions: { codebase: "1.1.0", plugin: "v1.00a" }
 * Lets you set some custom hotkeys to select some inputable actors in TPBS
 * @orderAfter DoubleX_RMMZ_Enhanced_Codebase
 * @orderAfter DoubleX RMMZ Enhanced Codebase
 * @base DoubleX RMMZ Enhanced Codebase
 * @author DoubleX
 *
 * @param prevHotkey
 * @desc Sets the keymap of the hotkey selecting the previous
 * inputable actor
 * @default left
 *
 * @param nextHotkey
 * @desc Sets the keymap of the hotkey selecting the next inputable
 * actor
 * @default right
 *
 * @param indexHotkeys
 * @type struct<IndexHotkey>[]
 * @desc Sets the list of hotkeys selecting inputable actors in
 * TPBS
 * @default []
 *
 * @command setTPBSActorPrevHotkey
 * @desc Sets the keymap of the hotkey selecting the previous
 * inputable actor
 * @arg hotkey
 * @desc The keymap of the hotkey selecting the previous inputable actor
 *
 * @command setTPBSActorNextHotkey
 * @desc Sets the keymap of the hotkey selecting the next inputable
 * actor
 * @arg hotkey
 * @desc The keymap of the hotkey selecting the next inputable actor
 *
 * @command setTPBSActorIndexHotkey
 * @desc Sets the mapping from the actor index to the hotkey
 * selecting the corresponding actor
 * @arg actorIndex
 * @type number
 * @desc The index of the actor selected by hotkey actorHotkey
 * @arg actorHotkey
 * @desc The keymap of the hotkey selecting the actor with index actorIndex
 *
 * @help
 *============================================================================
 *    ## Plugin Command Info
 *----------------------------------------------------------------------------
 *      1. setTPBSActorPrevHotkey actorIndex actorHotkey
 *         - Sets the keymap of the hotkey selecting the previous inputable
 *           actor
 *      2. setTPBSActorNextHotkey actorIndex actorHotkey
 *         - Sets the keymap of the hotkey selecting the next inputable actor
 *      3. setTPBSActorIndexHotkey actorIndex actorHotkey
 *         - Sets the target with index actorIndex to be selected by the
 *           hotkey actorHotkey
 *============================================================================
 */

// jshint esversion: 6

var DoubleX_RMMZ = DoubleX_RMMZ || {}; // var must be used or game will crash
// Separates the version numbers with the rest to make the former more clear
DoubleX_RMMZ.TPBS_Actor_Hotkeys = {
    PLUGIN_NAME: "DoubleX_RMMZ_TPBS_Actor_Hotkeys",
    VERSIONS: { codebase: "1.1.0", plugin: "v1.00a" }
}; // DoubleX_RMMZ.TPBS_Actor_Hotkeys
//

(TPBSAH => {

    "use strict";

    const pluginCodebaseVer = TPBSAH.VERSIONS.codebase;
    if (Utils.checkRMVersion(pluginCodebaseVer)) return;
    console.warn(`Your codebase version is ${Utils.RPGMAKER_VERSION} but must be
                 at least ${pluginCodebaseVer} to use ${TPBSAH.PLUGIN_NAME}`);

})(DoubleX_RMMZ.TPBS_Actor_Hotkeys);

/*============================================================================
 *    ## Plugin Implementations
 *       You need not edit this part as it's about how this plugin works
 *----------------------------------------------------------------------------
 *    # Plugin Support Info:
 *      1. Prerequisites
 *         - Basic knowledge on what the TPBS inputable actor selection
 *           implementations do
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
 *    ## Objects
 *----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------
 *    # Edited class: Game_System
 *      - Lets you access the parameters of this plugin and store them in save
 *----------------------------------------------------------------------------*/

(($, MZ_EC, TPBSAH) => {

    "use strict";

    const klassName = "Game_System";
    const { ORIG } = MZ_EC.setKlassContainer(klassName, $, TPBSAH);
    const EC_GS = MZ_EC[klassName].new, GS = TPBSAH[klassName];

    MZ_EC.extendFunc(EC_GS, GS, "storeParams", function() {
        ORIG.storeParams.apply(this, arguments);
        // Added to store all parameters of this plugin
        EC_GS.onStoreParams.call(this, TPBSAH.PLUGIN_NAME, "tpbsActorHotkeys");
        //
    }); // v1.00a - v1.00a

    /**
     * Idempotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {number} actorIndex - The index of the target to be selected
     * @param {string} hotkey - The keymap of the hotkey selecting the target
     */
    $.setTPBSActorHotkey = function(actorIndex, hotkey) {
        const indexHotkeys = this.tpbsActorHotkeysParam("indexHotkeys");
        const indexHotkey_ = indexHotkeys.find(({ actorIndex }) => {
            return actorIndex === actorIndex;
        });
        if (indexHotkey_) return indexHotkey_.tpbsActorHotkey = hotkey;
        indexHotkeys.push({ actorIndex, tpbsActorHotkey: hotkey });
    }; // $.setTPBSActorHotkey

    /**
     * Idempotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @enum @param {string} param - The name of parameter to be stored in saves
     * @param {*} val - The value of the parameter to be stored in game saves
     */
    $.setTPBSActorHotkeysParam = function(param, val) {
        EC_GS.storeParamVal.call(this, "tpbsActorHotkeys", param, val);
    }; // $.setTPBSActorHotkeysParam

    /**
     * Nullipotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @enum @param {string} param - The name of parameter to be stored in saves
     * @returns {*} The value of the parameter to be stored in game saves
     */
    $.tpbsActorHotkeysParam = function(param) {
        return EC_GS.storedParamVal.call(this, "tpbsActorHotkeys", param);
    }; // $.tpbsActorHotkeysParam

    const pluginName = TPBSAH.PLUGIN_NAME;
    PluginManager.registerCommand(pluginName, "setTPBSActorHotkey", ({ hotkey }) => {
        $gameSystem.setTPBSActorHotkeysParam("prevHotkey", hotkey);
    });
    PluginManager.registerCommand(pluginName, "setTPBSActorHotkey", ({ hotkey }) => {
        $gameSystem.setTPBSActorHotkeysParam("nextHotkey", hotkey);
    });
    PluginManager.registerCommand(pluginName, "setTPBSActorHotkey", ({ actorIndex, actorHotkey }) => {
        $gameSystem.setTPBSActorHotkey(+actorIndex, actorHotkey);
    });

})(Game_System.prototype, DoubleX_RMMZ.Enhanced_Codebase,
        DoubleX_RMMZ.TPBS_Actor_Hotkeys);

/*----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------
 *    ## Windows
 *----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------
 *    # Edited class: Window_ActorCommand
 *      - Adds the party command that adds an auto battle state to the party
 *----------------------------------------------------------------------------*/

(($, MZ_EC, TPBSAH) => {

    "use strict";

    const $$ = Window_Selectable.prototype, {
        NEW,
        ORIG,
        extendFunc
    } = MZ_EC.setKlassContainer("Window_ActorCommand", $, TPBSAH);

    if ($.processHandling) {
        extendFunc("processHandling", function() {
            ORIG.processHandling.apply(this, arguments);
            // Added to process the actor hotkeys of this plugin as well
            NEW._procHotkeys.call(this);
            //
        }); // v1.00a - v1.00a
    } else {
        /**
         * Hotspot/Idempotent
         * @author DoubleX @interface @since v1.00a @version v1.00a
         */
        $.processHandling = function() {
            $$.processHandling.call(this);
            NEW._procHotkeys.call(this);
        }; // $.processHandling
    }

    /**
     * The this pointer is Window_ActorCommand.prototype
     * Hotspot/Idempotent
     * @author DoubleX @since v1.00a @version v1.00a
     */
    NEW._procHotkeys = function() {
        if (!this.isOpenAndActive()) return;
        NEW._procPrevHotkey.call(this);
        NEW._procNextHotkey.call(this);
        NEW._procIndexHotkeys.call(this);
    }; // NEW._procHotkeys

    /**
     * The this pointer is Window_ActorCommand.prototype
     * Hotspot/Idempotent
     * @author DoubleX @since v1.00a @version v1.00a
     */
    NEW._procPrevHotkey = function() {
        const prevHotkey = $gameSystem.tpbsActorHotkeysParam("prevHotkey");
        NEW._procRepeatableHotkey.call(this, prevHotkey);
    }; // NEW._procPrevHotkey

    /**
     * The this pointer is Window_ActorCommand.prototype
     * Hotspot/Idempotent
     * @author DoubleX @since v1.00a @version v1.00a
     */
    NEW._procNextHotkey = function() {
        const nextHotkey = $gameSystem.tpbsActorHotkeysParam("nextHotkey");
        NEW._procRepeatableHotkey.call(this, nextHotkey);
    }; // NEW._procNextHotkey

    /**
     * The this pointer is Window_ActorCommand.prototype
     * Hotspot/Idempotent
     * @author DoubleX @since v1.00a @version v1.00a
     * @param {string} hotkey - The mapping of the hotkey to be processed
     */
    NEW._procRepeatableHotkey = function(hotkey) {
	      if (!Input.isTriggered(hotkey) && !Input.isRepeated(hotkey)) return;
        this.callHandler(hotkey);
    }; // NEW._procRepeatableHotkey

    /**
     * The this pointer is Window_ActorCommand.prototype
     * Hotspot/Idempotent
     * @author DoubleX @since v1.00a @version v1.00a
     */
    NEW._procIndexHotkeys = function() {
        const indexHotkeys = $gameSystem.tpbsActorHotkeysParam("indexHotkeys");
        indexHotkeys.forEach(({ actorHotkey }) => {
            if (Input.isTriggered(actorHotkey)) this.callHandler(actorHotkey);
        });
    }; // NEW._procIndexHotkeys

})(Window_ActorCommand.prototype, DoubleX_RMMZ.Enhanced_Codebase, 
        DoubleX_RMMZ.TPBS_Actor_Hotkeys);

/*----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------
 *    ## Scenes
 *----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------
 *    # Edited class: Scene_Battle
 *      - Setups handlers for all inputable actor selection hotkeys
 *----------------------------------------------------------------------------*/

(($, MZ_EC, TPBSAH) => {

    "use strict";

    const {
        NEW,
        ORIG,
        extendFunc
    } = MZ_EC.setKlassContainer("Scene_Battle", $, TPBSAH);

    extendFunc("createActorCommandWindow", function() {
        ORIG.createActorCommandWindow.apply(this, arguments);
        // Added to setup handlers for all inputable actor selection hotkeys
        NEW._setHandlers.call(this);
        //
    }); // v1.00a - v1.00a

    /**
     * The this pointer is Scene_Battle.prototype
     * Hotspot/Idempotent
     * @author DoubleX @since v1.00a @version v1.00a
     */
    NEW._setHandlers = function() {
        if (!BattleManager.isTpb()) return;
        NEW._setPrevHandler.call(this);
        NEW._setNextHandler.call(this);
        NEW._setIndexHandlers.call(this);
    }; // NEW._setHandlers

    /**
     * The this pointer is Scene_Battle.prototype
     * Hotspot/Idempotent
     * @author DoubleX @since v1.00a @version v1.00a
     */
    NEW._setPrevHandler = function() {
        const prevHotkey = $gameSystem.tpbsActorHotkeysParam("prevHotkey");
        this._actorCommandWindow.setHandler(
                prevHotkey, NEW._onTrySelectPrevNext.bind(this, -1));
    }; // NEW._setPrevHandler

    /**
     * The this pointer is Scene_Battle.prototype
     * Hotspot/Idempotent
     * @author DoubleX @since v1.00a @version v1.00a
     */
    NEW._setNextHandler = function() {
        const nextHotkey = $gameSystem.tpbsActorHotkeysParam("nextHotkey");
        this._actorCommandWindow.setHandler(
                nextHotkey, NEW._onTrySelectPrevNext.bind(this, 1));
    }; // NEW._setNextHandler

    const _INPUTABLE_INDICES = () => $gameParty.members().filterMap(mem => {
        return mem.canInput();
    }, mem => mem.index());
    const _CAN_SELECT_PREV_NEXT = inputableIndices => {
        // Checking BattleManager.actor() is just to prevent very rare errors
        return BattleManager.actor() && inputableIndices.length > 1;
        // Can't select a new inputable actor when just 1 actor's inputable
    }; // NEW_INPUTABLE_ACTOR_INDEX
    /**
     * The this pointer is Scene_Battle.prototype
     * Potential Hotspot/Idempotent
     * @author DoubleX @since v1.00a @version v1.00a
     * @enum @param {Integer} sign - The selection iteration direction(1/-1)
     */
    NEW._onTrySelectPrevNext = function(sign) {
        const inputableIndices = _INPUTABLE_INDICES();
        if (!_CAN_SELECT_PREV_NEXT(inputableIndices)) {
            return SoundManager.playBuzzer();
        }
        NEW._onSelectPrevNext.call(this, sign, inputableIndices);
    }; // NEW._onTrySelectPrevNext

    const _NEW_INPUTABLE_ACTOR_INDEX = (sign, inputableIndices) => {
        // It's ok to sort this in place as inputableIndices is a new array
        inputableIndices.sort((a, b) => (a - b) * sign);
        //
        // inputableIndices is supposed to have at least 2 indices
        const selectedIndex = BattleManager.actor().index();
        const l = inputableIndices.length;
        let i = 0;
        while (i < l) { // while is slightly faster than for in general
            const newIndex = inputableIndices[i];
            if (newIndex * sign > selectedIndex * sign) return newIndex;
            i++;
        }
        //
        return inputableIndices[0];
    }; // _NEW_INPUTABLE_ACTOR_INDEX
    /**
     * The this pointer is Scene_Battle.prototype
     * Potential Hotspot/Idempotent
     * @author DoubleX @since v1.00a @version v1.00a
     * @enum @param {number} sign - The selection iteration direction(1/-1)
     * @param {[index]} inputableIndices - The inputable actor indices
     */
    NEW._onSelectPrevNext = function(sign, inputableIndices) {
        SoundManager.playCursor();
        const newInputableIndex =
                _NEW_INPUTABLE_ACTOR_INDEX(sign, inputableIndices);
        NEW._onSelectIndex.call(this, newInputableIndex);
    }; // NEW._onSelectPrevNext

    /**
     * The this pointer is Scene_Battle.prototype
     * Hotspot/Idempotent
     * @author DoubleX @since v1.00a @version v1.00a
     */
    NEW._setIndexHandlers = function() {
        const indiceHotkeys = $gameSystem.tpbsActorHotkeysParam("indexHotkeys");
        indiceHotkeys.forEach(NEW._setIndexHandler, this);
    }; // NEW._setIndexHandlers

    /**
     * The this pointer is Scene_Battle.prototype
     * Idempotent
     * @author DoubleX @since v1.00a @version v1.00a
     * @param {IndexHotkey} indexHotkey - Mapping of the hotkey to be handled
     */
    NEW._setIndexHandler = function(indexHotkey) {
        const { actorHotkey, actorIndex } = indexHotkey;
        this._actorCommandWindow.setHandler(
                actorHotkey, NEW._onTrySelectIndex.bind(this, actorIndex));
    }; // NEW._setIndexHandler

    const _IS_UNSELECTED_INPUTABLE_ACTOR = function(actor_) {
        return actor_ && BattleManager.actor() !== actor_ && actor_.canInput();
    }; // _IS_UNSELECTED_INPUTABLE_ACTOR
    /**
     * The this pointer is Scene_Battle.prototype
     * Potential Hotspot/Idempotent
     * @author DoubleX @since v1.00a @version v1.00a
     * @param {index} i - The index of the actor to be selected to input actions
     */
    NEW._onTrySelectIndex = function(i) {
        if (_IS_UNSELECTED_INPUTABLE_ACTOR($gameParty.members()[i])) {
            return NEW._onSelectIndex.call(this, i);
        }
        SoundManager.playBuzzer();
    }; // NEW._onTrySelectIndex

    /**
     * The this pointer is Scene_Battle.prototype
     * Potential Hotspot/Idempotent
     * @author DoubleX @since v1.00a @version v1.00a
     * @param {index} i - The index of the actor to be selected to input actions
     */
    NEW._onSelectIndex = function(i) {
        SoundManager.playCursor();
        /** @todo Extracts these into a new well-named BattleManager function */
        BattleManager._currentActor = $gameParty.members()[i];
        BattleManager.startActorInput();
        //
        this.startActorCommandSelection();
    }; // NEW._onSelectIndex

})(Scene_Battle.prototype, DoubleX_RMMZ.Enhanced_Codebase, 
        DoubleX_RMMZ.TPBS_Actor_Hotkeys);

/*============================================================================*/

    const curMZECVer = DoubleX_RMMZ.Enhanced_Codebase.VERSIONS.plugin;
    const minMZECVer = "v0.00a";
    if (curMZECVer < minMZECVer) {
        console.warn(`The version of DoubleX RMMZ Enhanced Codebase is
                     ${curMZECVer} but should be at least ${minMZECVer}`);
    }

} else {

    console.warn(`DoubleX RMMZ Enhanced Codebase should be placed above
                 ${DoubleX_RMMZ.TPBS_Actor_Hotkeys.PLUGIN_NAME}`);

} // if (DoubleX_RMMZ.Enhanced_Codebase)
