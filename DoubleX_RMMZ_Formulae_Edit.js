/*============================================================================
 *    ## Plugin Info
 *----------------------------------------------------------------------------
 *    # Plugin Name
 *      DoubleX_RMMZ_Formulae_Edit
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
 *      1.
 *      This Plugin:
 *      1. https://github.com/Double-X/DoubleX-RMMZ/blob/master/DoubleX_RMMZ_Formulae_Edit.js
 *      Posts:
 *      1. https://forums.rpgmakerweb.com/index.php?threads/doublex_rmmz_formulae_edit.152291/
 *      2. https://www.rpgmakercentral.com/topic/43235-doublex_rmmz_formulae_edit/
 *      3. https://rpgmaker.net/engines/rmmz/utilities/347/
 *      4. https://www.save-point.org/thread-8586-post-55567.html
 *      5. https://gdu.one/forums/topic/14958-doublex_rmmz_formulae_edit/
 *      6. https://www.arpgmaker.com/threads/doublex_rmmz_formulae_edit.80847/
 *      7. https://www.reddit.com/r/RPGMaker/comments/yfm474/doublex_rmmz_formulae_edit/
 *      8. https://www.patreon.com/posts/73888965?pr=true
 *      9. https://doublexrpgmaker.wordpress.com/2022/10/28/doublex_rmmz_formulae_edit/
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
 *      { codebase: "1.5.0", plugin: "v1.00a" }(2022 Oct 27 GMT 1000):
 *      1. 1st version of this plugin finished
 *============================================================================*/

/*:
 * @url https://www.patreon.com/doublex
 * @target MZ
 * @plugindesc Versions: { codebase: "1.5.0", plugin: "v1.00a" }
 * Lets you directly edit various built-in global formulae
 * @orderAfter DoubleX_RMMZ_Enhanced_Codebase
 * @orderAfter DoubleX RMMZ Enhanced Codebase
 * @base DoubleX RMMZ Enhanced Codebase
 * @author DoubleX
 *
 * @param BattleManager
 *
 * @param startEscRatio
 * @parent BattleManager
 * @type note
 * @desc Sets the starting game party escape ratio in battles
 * It must return a Number
 * @default "return 0.5 * $gameParty.agility() / $gameTroop.agility();"
 *
 * @param failEscRatio
 * @parent BattleManager
 * @type note
 * @desc Sets the game party escape ratio right after a failed
 * escape attempt in battles
 * @default "return this._escapeRatio + 0.1;"
 *
 * @param Game_Party
 *
 * @param preemptRate
 * @parent Game_Party
 * @type note
 * @desc Sets the game party preemptive ratio upon battle start
 * troopAgi is the average agility of all enemies
 * @default "return (this.agility() >= troopAgi ? 0.05 : 0.03) * (this.hasRaisePreemptive() ? 4 : 1);"
 *
 * @param surpriseRate
 * @parent Game_Party
 * @type note
 * @desc Sets the game party surprise ratio upon battle start
 * troopAgi is the average agility of all enemies
 * @default "return this.hasCancelSurprise() ? 0 : this.agility() >= troopAgi ? 0.03 : 0.05;"
 *
 * @param Game_Troop
 *
 * @param goldRate
 * @parent Game_Troop
 * @type note
 * @desc Sets the enemy gold rate upon battle victory
 * The gold rate is multiplied with the original gold amount
 * @default "return $gameParty.hasGoldDouble() ? 2 : 1;"
 *
 * @param Game_CharacterBase
 *
 * @param distPerFrame
 * @parent Game_CharacterBase
 * @type note
 * @desc Sets the character movement speed in terms of the number
 * of tiles per frame
 * @default "return Math.pow(2, this.realMoveSpeed()) / 256;"
 *
 * @param Game_Player
 *
 * @param encounterCount
 * @parent Game_Player
 * @type note
 * @desc Sets the number of steps needed to trigger the next battle
 * This number is set upon starting the current battle
 * @default "const n = $gameMap.encounterStep();\nreturn Math.randomInt(n) + Math.randomInt(n) + 1;"
 *
 * @param updatedEncounterCount
 * @parent Game_Player
 * @type note
 * @desc Sets the latest number of steps to trigger the next battle
 * This number is updated upon making a step in the map
 * @default "return this._encounterCount - (this.canEncounter() ? this.encounterProgressValue() : 0);"
 *
 * @command setFormulaeEditParam
 * @desc Applies script call $gameSystem.setFormulaeEditParam(param, val)
 * @arg param
 * @type select
 * @option startEscRatio
 * @value startEscRatio
 * @option failEscRatio
 * @value failEscRatio
 * @option preemptRate
 * @value preemptRate
 * @option surpriseRate
 * @value surpriseRate
 * @option goldRate
 * @value goldRate
 * @option distPerFrame
 * @value distPerFrame
 * @option encounterCount
 * @value encounterCount
 * @option updatedEncounterCount
 * @value updatedEncounterCount
 * @desc The name of a valid parameter of this plugin
 * @arg val
 * @type note
 * @desc A valid new fully parsed value of the parameter param
 *
 * @help
 *============================================================================
 *    ## Script Call Info
 *----------------------------------------------------------------------------
 *    # Parameter manipulations
 *      1. $gameSystem.setFormulaeEditParam(param, val)
 *         - Sets the fully parsed value of the parameter param as val
 *         - param must be the name of a valid parameter of this plugin
 *         - val must be a valid new fully parsed value of the parameter param
 *         - Such parameter value changes will be saved
 *         - E.g.:
 *           $gameSystem.setFormulaeEditParam(
 *                   "encounterCount", "return $gameMap.encounterStep();")
 *           sets the fully parsed value of the parameter encounterCount as
 *           "return $gameMap.encounterStep();"
 *      2. $gameSystem.formulaeEditParam(param)
 *         - Returns the fully parsed value of the parameter param
 *         - param must be the name of a valid parameter of this plugin
 *         - E.g.:
 *           $gameSystem.formulaeEditParam("failEscRatio") returns the fully
 *           parsed value of the parameter failEscRatio, which should be
 *           "return this._escapeRatio + 0.1;" if it uses its default
 *           parameter value
 *============================================================================
 *    ## Plugin Command Info
 *----------------------------------------------------------------------------
 *      1. setFormulaeEditParam param val
 *         - Applies the script call
 *           $gameSystem.setFormulaeEditParam(param, val)
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
    DoubleX_RMMZ.Formulae_Edit = {
        PLUGIN_NAME: name,
        VERSIONS: { codebase: "1.5.0", plugin: "v1.00a" }
    }; // DoubleX_RMMZ.Formulae_Edit
    //

})();

(FE => {

    "use strict";

    const pluginCodebaseVer = FE.VERSIONS.codebase;
    if (Utils.checkRMVersion(pluginCodebaseVer)) return;
    console.warn(`Your codebase version is ${Utils.RPGMAKER_VERSION} but must be
                 at least ${pluginCodebaseVer} to use ${FE.PLUGIN_NAME}`);

})(DoubleX_RMMZ.Formulae_Edit);

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

((MZ_EC, FE) => {

    "use strict";

    MZ_EC.setupFuncParams(FE, {
        startEscRatio: [],
        failEscRatio: [],
        preemptRate: ["troopAgi"],
        surpriseRate: ["troopAgi"],
        goldRate: [],
        distPerFrame: [],
        encounterCount: [],
        updatedEncounterCount: []
    });

})(DoubleX_RMMZ.Enhanced_Codebase, DoubleX_RMMZ.Formulae_Edit);

/*----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------
 *    ## Managers
 *----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------
 *    # Edited class: BattleManager
 *      - Implements startEscRatio and failEscRatio
 *----------------------------------------------------------------------------*/

(($, MZ_EC, FE) => {

    "use strict";

    const klassName = "BattleManager", PF = FE.FUNC_PARAMS.PARAM_FUNCS;
    MZ_EC.setKlassContainer(klassName, $, FE);
    const EC_BM = MZ_EC[klassName].new, BM = FE[klassName];

    MZ_EC.rewriteFunc(EC_BM, BM, "_newEscRatio", function() {
        // Rewritten to use the startEscRatio instead of the default formulae
        return PF.get("startEscRatio").call(this);
        //
    }); // v1.00a - v1.00a

    MZ_EC.rewriteFunc(EC_BM, BM, "_updatedEscRatio", function() {
        // Rewritten to use the failEscRatio instead of the default formulae
        return PF.get("failEscRatio").call(this);
        //
    }); // v1.00a - v1.00a

})(BattleManager, DoubleX_RMMZ.Enhanced_Codebase, DoubleX_RMMZ.Formulae_Edit);

/*----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------
 *    ## Objects
 *----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------
 *    # Edited class: Game_System
 *      - Lets you access the parameters of this plugin and store them in save
 *----------------------------------------------------------------------------*/

(($, MZ_EC, FE) => {

    "use strict";

    const FP = FE.FUNC_PARAMS, klassName = "Game_System";
    const { ORIG } = MZ_EC.setKlassContainer(klassName, $, FE);
    const EC_GS = MZ_EC[klassName].new, GS = FE[klassName];

    MZ_EC.extendFunc(EC_GS, GS, "storeParams", function() {
        ORIG.storeParams.apply(this, arguments);
        // Added to store all parameters of this plugin
        EC_GS.onStoreParams.call(this, FE.PLUGIN_NAME, "formulaeEdit");
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
    $.setFormulaeEditParam = function(param, val) {
        EC_GS.storeParamVal.call(this, "formulaeEdit", param, val);
    }; // $.setFormulaeEditParam

    /**
     * Script Call/Nullipotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @enum @param {string} param - The name of parameter to be stored in saves
     * @returns {*} The value of the parameter to be stored in game saves
     */
    $.formulaeEditParam = function(param) {
        return EC_GS.storedParamVal.call(this, "formulaeEdit", param);
    }; // $.formulaeEditParam

    const pluginName = FE.PLUGIN_NAME;
    PluginManager.registerCommand(pluginName, "setFormulaeEditParam", ({ param, val }) => {
        $gameSystem.setFormulaeEditParam(param, JSON.parse(val));
    });

})(Game_System.prototype, DoubleX_RMMZ.Enhanced_Codebase,
        DoubleX_RMMZ.Formulae_Edit);

/*----------------------------------------------------------------------------
 *    # Edited class: Game_Party
 *      - Implements preemptRate and surpriseRate
 *----------------------------------------------------------------------------*/

(($, MZ_EC, FE) => {

    "use strict";

    const PF = FE.FUNC_PARAMS.PARAM_FUNCS;
    const { rewriteFunc } = MZ_EC.setKlassContainer("Game_Party", $, FE);

    rewriteFunc("ratePreemptive", function(troopAgi) {
        // Rewritten to use the preemptRate instead of the default formulae
        return PF.get("preemptRate").call(this, troopAgi);
        //
    }); // v1.00a - v1.00a

    rewriteFunc("rateSurprise", function(troopAgi) {
        // Rewritten to use the surpriseRate instead of the default formulae
        return PF.get("surpriseRate").call(this, troopAgi);
        //
    }); // v1.00a - v1.00a

})(Game_Party.prototype, DoubleX_RMMZ.Enhanced_Codebase,
        DoubleX_RMMZ.Formulae_Edit);

/*----------------------------------------------------------------------------
 *    # Edited class: Game_Troop
 *      - Implements goldRate
 *----------------------------------------------------------------------------*/

(($, MZ_EC, FE) => {

    "use strict";

    const PF = FE.FUNC_PARAMS.PARAM_FUNCS;
    const { rewriteFunc } = MZ_EC.setKlassContainer("Game_Troop", $, FE);

    rewriteFunc("goldRate", function() {
        // Rewritten to use the goldRate instead of the default formulae
        return PF.get("goldRate").call(this);
        //
    }); // v1.00a - v1.00a

})(Game_Troop.prototype, DoubleX_RMMZ.Enhanced_Codebase,
        DoubleX_RMMZ.Formulae_Edit);

/*----------------------------------------------------------------------------
 *    # Edited class: Game_CharacterBase
 *      - Implements distPerFrame
 *----------------------------------------------------------------------------*/

(($, MZ_EC, FE) => {

    "use strict";

    const PF = FE.FUNC_PARAMS.PARAM_FUNCS, {
        rewriteFunc
    } = MZ_EC.setKlassContainer("Game_CharacterBase", $, FE);

    rewriteFunc("distancePerFrame", function(troopAgi) {
        // Rewritten to use the distPerFrame instead of the default formulae
        return PF.get("distPerFrame").call(this, troopAgi);
        //
    }); // v1.00a - v1.00a

})(Game_CharacterBase.prototype, DoubleX_RMMZ.Enhanced_Codebase,
        DoubleX_RMMZ.Formulae_Edit);

/*----------------------------------------------------------------------------
 *    # Edited class: Game_Player
 *      - Implements encounterCount and updatedEncounterCount
 *----------------------------------------------------------------------------*/

(($, MZ_EC, FE) => {

    "use strict";

    const klassName = "Game_Player", PF = FE.FUNC_PARAMS.PARAM_FUNCS;
    MZ_EC.setKlassContainer(klassName, $, FE);
    const EC_BM = MZ_EC[klassName].new, BM = FE[klassName];

    MZ_EC.rewriteFunc(EC_BM, BM, "_encounterCount", function() {
        // Rewritten to use the encounterCount instead of the default formulae
        return PF.get("encounterCount").call(this);
        //
    }); // v1.00a - v1.00a

    MZ_EC.rewriteFunc(EC_BM, BM, "_updatedEncounterCount", function() {
        // Rewritten to use the failEscRatio instead of the default formulae
        return PF.get("updatedEncounterCount").call(this);
        //
    }); // v1.00a - v1.00a

})(Game_Player.prototype, DoubleX_RMMZ.Enhanced_Codebase,
        DoubleX_RMMZ.Formulae_Edit);

/*----------------------------------------------------------------------------*/

/*============================================================================*/

    const curMZECVer = DoubleX_RMMZ.Enhanced_Codebase.VERSIONS.plugin;
    const minMZECVer = "v0.00a";
    if (curMZECVer < minMZECVer) {
        console.warn(`The version of DoubleX RMMZ Enhanced Codebase is
                     ${curMZECVer} but should be at least ${minMZECVer}`);
    }

} else {

    console.warn(`DoubleX RMMZ Enhanced Codebase should be placed above
                 ${DoubleX_RMMZ.Formulae_Edit.PLUGIN_NAME}`);

} // if (DoubleX_RMMZ.Enhanced_Codebase)
