/*============================================================================
 *    ## Plugin Info
 *----------------------------------------------------------------------------
 *    # Plugin Name
 *      DoubleX_RMMZ_Auto_Battle_Command
 *----------------------------------------------------------------------------
 *    # Prerequisites
 *      Plugins:
 *      1. DoubleX RMMZ Enhanced Codebase
 *         https://github.com/Double-X/DoubleX-RMMZ/blob/master/DoubleX%20RMMZ%20Enhanced%20Codebase.js
 *      Abilities:
 *      1. Nothing special
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
 *      1. https://www.youtube.com/watch?v=Cii91D22kA0
 *      This Plugin:
 *      1. https://github.com/Double-X/DoubleX-RMMZ/blob/master/DoubleX_RMMZ_Auto_Battle_Command.js
 *      Posts:
 *      1. https://forums.rpgmakerweb.com/index.php?threads/doublex_rmmz_auto_battle_command.127332/
 *      2. https://www.rpgmakercentral.com/topic/42591-doublex_rmmz_auto_battle_command/
 *      3. https://rpgmaker.net/engines/rmmz/utilities/286/
 *      4. https://www.save-point.org/thread-8165.html
 *      5. https://gdu.one/forums/topic/13640-doublex_rmmz_auto_battle_command/
 *      6. http://www.hbgames.org/forums/viewtopic.php?f=332&t=80332
 *      7. https://forum.chaos-project.com/index.php/topic,16078.msg197396.html
 *      8. https://doublexrpgmaker.wordpress.com/2020/09/14/doublex_rmmz_auto_battle_command/
 *      9. https://www.patreon.com/posts/41587930
 *      10. https://www.makerdevs.com/plugin/doublex-rmmz-auto-battle-command
 *----------------------------------------------------------------------------
 *    # Instructions
 *      1. The default plugin parameters file name is
 *         DoubleX_RMMZ_Auto_Battle_Command
 *         If you want to change that, you must edit the value of
 *         DoubleX_RMMZ.Auto_Battle_Command.PLUGIN_NAME, which must be done
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
 *      { codebase: "1.0.2", plugin: "v1.00a" }(2020 Sep 14 GMT 0900):
 *      1. 1st version of this plugin finished
 *============================================================================*/

/*:
 * @url https://www.patreon.com/doublex
 * @target MZ
 * @plugindesc Versions: { codebase: "1.0.2", plugin: "v1.00a" }
 * Adds a party command to add an autobattle state to the party in battles
 * @orderAfter DoubleX RMMZ Enhanced Codebase
 * @base DoubleX RMMZ Enhanced Codebase
 * @author DoubleX
 *
 * @param stateId
 * @type number
 * @min 1
 * @desc Sets the id of the state added by the auto battle command
 * All alive members in the party will have this state added
 * @default 7
 *
 * @param text
 * @desc Sets the auto battle command name
 * The command will appear in the party command window
 * @default Auto Battle
 *
 * @param canUse
 * @type boolean
 * @desc Sets whether the auto battle command can be used
 * It'll be checked whenever the party command window's shown
 * @default true
 *
 * @command setAutoBattleCmdState
 * @desc Sets the new value of the parameter stateId
 * @arg stateId
 * @type number
 * @min 1
 * @desc The id of the state added by the auto battle command
 *
 * @command setAutoBattleCmdText
 * @desc Sets the new value of the parameter text
 * @arg text
 * @desc The auto battle command name
 *
 * @command setCanUseAutoBattleCmd
 * @desc Sets the new value of the parameter canUse
 * @arg canUse
 * @type boolean
 * @desc Whether the auto battle command can be used
 *
 * @help
 *============================================================================
 *    ## Plugin Command Info
 *----------------------------------------------------------------------------
 *      1. setAutoBattleCmdState stateId
 *         - Sets the id of the state added by the auto battle command as
 *           stateId
 *      2. setAutoBattleCmdText text
 *         - Sets auto battle command name as text
 *      3. setCanUseAutoBattleCmd canUse
 *         - Sets whether the auto battle command can be used as canUse
 *         - canUse must be either true or false
 *============================================================================
 */

// jshint esversion: 6

var DoubleX_RMMZ = DoubleX_RMMZ || {}; // var must be used or game will crash
// Separates the version numbers with the rest to make the former more clear
DoubleX_RMMZ.Auto_Battle_Command = {
    PLUGIN_NAME: "DoubleX_RMMZ_Auto_Battle_Command",
    VERSIONS: { codebase: "1.0.2", plugin: "v1.00a" }
}; // DoubleX_RMMZ.Auto_Battle_Command
//

(ABC => {

    "use strict";

    const pluginCodebaseVer = ABC.VERSIONS.codebase;
    if (Utils.checkRMVersion(pluginCodebaseVer)) return;
    console.warn(`Your codebase version is ${Utils.RPGMAKER_VERSION} but must be
                 at least ${pluginCodebaseVer} to use ${ABC.PLUGIN_NAME}`);

})(DoubleX_RMMZ.Auto_Battle_Command);

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
 *    ## Objects
 *----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------
 *    # Edited class: Game_System
 *      - Lets you access the parameters of this plugin and store them in save
 *----------------------------------------------------------------------------*/

(($, MZ_EC, ABC) => {

    "use strict";

    const klassName = "Game_System";
    const { ORIG } = MZ_EC.setKlassContainer(klassName, $, ABC);
    const EC_GS = MZ_EC[klassName].new, GS = ABC[klassName];

    MZ_EC.extendFunc(EC_GS, GS, "storeParams", function() {
        ORIG.storeParams.apply(this, arguments);
        // Added to store all parameters of this plugin
        EC_GS.onStoreParams.call(this, ABC.PLUGIN_NAME, "autoBattleCmd");
        //
    }); // v1.00a - v1.00a

    /**
     * Idempotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @enum @param {string} param - The name of parameter to be stored in saves
     * @param {*} val - The value of the parameter to be stored in game saves
     */
    $.setAutoBattleCmdParam = function(param, val) {
        EC_GS.storeParamVal.call(this, "autoBattleCmd", param, val);
    }; // $.setAutoBattleCmdParam

    /**
     * Nullipotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @enum @param {string} param - The name of parameter to be stored in saves
     * @returns {*} The value of the parameter to be stored in game saves
     */
    $.autoBattleCmdParam = function(param) {
        return EC_GS.storedParamVal.call(this, "autoBattleCmd", param);
    }; // $.autoBattleCmdParam

    const pluginName = ABC.PLUGIN_NAME;
    PluginManager.registerCommand(pluginName, "setAutoBattleCmdState", ({ stateId }) => {
        $gameSystem.setAutoBattleCmdParam("stateId", +stateId);
    });
    PluginManager.registerCommand(pluginName, "setAutoBattleCmdText", ({ text }) => {
        $gameSystem.setAutoBattleCmdParam("text", text);
    });
    PluginManager.registerCommand(pluginName, "setCanUseAutoBattleCmd", ({ canUse }) => {
        $gameSystem.setAutoBattleCmdParam("canUse", JSON.parse(canUse));
    });

})(Game_System.prototype, DoubleX_RMMZ.Enhanced_Codebase,
        DoubleX_RMMZ.Auto_Battle_Command);

/*----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------
 *    ## Windows
 *----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------
 *    # Edited class: Window_PartyCommand
 *      - Adds the party command that adds an auto battle state to the party
 *----------------------------------------------------------------------------*/

(($, MZ_EC, ABC) => {

    "use strict";

    const {
        ORIG,
        NEW,
        extendFunc
    } = MZ_EC.setKlassContainer("Window_PartyCommand", $, ABC);

    extendFunc("makeCommandList", function() {
        ORIG.makeCommandList.apply(this, arguments);
        // Added to add party command that adds an auto battle state to party
        NEW._addAutoBattleCmd.call(this);
        //
    }); // v1.00a - v1.00a

    /**
     * The this pointer is Window_PartyCommand.prototype
     * Idempotent
     * @author DoubleX @since v1.00a @version v1.00a
     */
    NEW._addAutoBattleCmd = function() {
        const text = $gameSystem.autoBattleCmdParam("text");
        const canUse = $gameSystem.autoBattleCmdParam("canUse");
        this.addCommand(text, "autoBattle", canUse);
    }; // NEW._addAutoBattleCmd

})(Window_PartyCommand.prototype, DoubleX_RMMZ.Enhanced_Codebase,
        DoubleX_RMMZ.Auto_Battle_Command);

/*----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------
 *    ## Scenes
 *----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------
 *    # Edited class: Scene_Battle
 *      - Adds the party command that adds an auto battle state to the party
 *----------------------------------------------------------------------------*/

(($, MZ_EC, ABC) => {

    "use strict";

    const {
        ORIG,
        NEW,
        extendFunc
    } = MZ_EC.setKlassContainer("Scene_Battle", $, ABC);

    extendFunc("createPartyCommandWindow", function() {
        ORIG.createPartyCommandWindow.apply(this, arguments);
        // Added to add party command that adds an auto battle state to party
        NEW._addAutoBattleCmd.call(this);
        //
    }); // v1.00a - v1.00a

    /**
     * The this pointer is Scene_Battle.prototype
     * Idempotent
     * @author DoubleX @since v1.00a @version v1.00a
     */
    NEW._addAutoBattleCmd = function() {
        const callback = NEW._cmdAutoBattle.bind(this);
        this._partyCommandWindow.setHandler("autoBattle", callback);
    }; // NEW._addAutoBattleCmd

    /**
     * The this pointer is Scene_Battle.prototype
     * Idempotent
     * @author DoubleX @since v1.00a @version v1.00a
     */
    NEW._cmdAutoBattle = function() {
        const autoBattleStateId = $gameSystem.autoBattleCmdParam("stateId");
        $gameParty.members().forEach(mem => mem.addState(autoBattleStateId));
        this.endCommandSelection();
        // It's possible that some users might not use autobattle states
        if ($gameParty.canInput() || BattleManager.isTpb()) return;
        $gameParty.makeActions();
        BattleManager.startTurn();
        //
    }; // NEW._cmdAutoBattle

})(Scene_Battle.prototype, DoubleX_RMMZ.Enhanced_Codebase,
        DoubleX_RMMZ.Auto_Battle_Command);

/*============================================================================*/

    const curMZECVer = DoubleX_RMMZ.Enhanced_Codebase.VERSIONS.plugin;
    const minMZECVer = "v0.00a";
    if (curMZECVer < minMZECVer) {
        console.warn(`The version of DoubleX RMMZ Enhanced Codebase is
                     ${curMZECVer} but should be at least ${minMZECVer}`);
    }

} else {

    console.warn(`DoubleX RMMZ Enhanced Codebase should be placed above
                 ${DoubleX_RMMZ.Auto_Battle_Command.PLUGIN_NAME}`);

} // if (DoubleX_RMMZ.Enhanced_Codebase)
