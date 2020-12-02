/*============================================================================
 *    ## Plugin Info
 *----------------------------------------------------------------------------
 *    # Plugin Name
 *      DoubleX_RMMZ_TPBS_CTB
 *----------------------------------------------------------------------------
 *    # Introduction
 *      1. This plugin lets you skip TPBS frames having no important moments,
 *         like inputting actions, executing actions, to mimic the CTB
 *         functionality in TPBS
 *----------------------------------------------------------------------------
 *    # Prerequisites
 *      Plugins:
 *      1. DoubleX RMMZ Enhanced Codebase
 *         https://github.com/Double-X/DoubleX-RMMZ/blob/master/DoubleX%20RMMZ%20Enhanced%20Codebase.js
 *      Abilities:
 *      1. Nothing special
 *----------------------------------------------------------------------------
 *    # Author Notes
 *      1. DON'T USE THE CTB FUNCTIONALITY IN ACTIVE TPBS UNLESS YOU REALLY
 *         KNOW WHAT YOU'RE TRULY DOING
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
 *      1. https://www.youtube.com/watch?v=ZI-hur2rmn8
 *      This Plugin:
 *      1. https://github.com/Double-X/DoubleX-RMMZ/blob/master/DoubleX_RMMZ_TPBS_CTB.js
 *      Posts:
 *      1. https://forums.rpgmakerweb.com/index.php?threads/doublex_rmmz_tpbs_ctb.127940/
 *      2. https://www.rpgmakercentral.com/topic/42622-doublex_rmmz_tpbs_ctb/
 *      3. https://rpgmaker.net/engines/rmmz/utilities/293/
 *      4. https://www.save-point.org/thread-8172.html
 *      5. https://gdu.one/forums/topic/13652-doublex_rmmz_tpbs_ctb/
 *      6. http://www.hbgames.org/forums/viewtopic.php?p=945235
 *      7. https://forum.chaos-project.com/index.php/topic,16081.msg197414.html
 *      8. https://doublexrpgmaker.wordpress.com/2020/09/27/doublex_rmmz_tpbs_ctb/
 *      9. https://www.patreon.com/posts/42067877
 *      10. https://www.makerdevs.com/plugin/doublex-rmmz-tpbs-ctb
 *----------------------------------------------------------------------------
 *    # Instructions
 *      1. The default plugin parameters file name is DoubleX_RMMZ_TPBS_CTB
 *         If you want to change that, you must edit the value of
 *         DoubleX_RMMZ.TPBS_CTB.PLUGIN_NAME, which must be done via opening
 *         this plugin js file directly
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
 *      { codebase: "1.1.0", plugin: "v1.00b" }(2020 Dec 2 GMT 1000):
 *      1. You no longer have to edit the value of
 *         DoubleX_RMMZ.TPBS_CTB.PLUGIN_NAME when changing this plugin file
 *         name
 *      { codebase: "1.0.2", plugin: "v1.00a" }(2020 Sep 27 GMT 0400):
 *      1. 1st version of this plugin finished
 *============================================================================*/

/*:
 * @url https://www.patreon.com/doublex
 * @target MZ
 * @plugindesc Versions: { codebase: "1.1.0", plugin: "v1.00b" }
 * Lets you mimic the CTB functionality in the TPBS on the fly
 * @orderAfter DoubleX_RMMZ_Enhanced_Codebase
 * @orderAfter DoubleX RMMZ Enhanced Codebase
 * @base DoubleX RMMZ Enhanced Codebase
 * @author DoubleX
 *
 * @param isCTB
 * @type boolean
 * @desc Sets whether the CTB mode will be enabled in TPBS
 * This can be changed inside as well as outside battles
 * @default true
 *
 * @command setIsTPBSCTB
 * @desc Sets whether the CTB mode will be enabled in TPBS
 * This can be changed inside as well as outside battles
 * @arg isCTB
 * @type boolean
 * @desc Whether the CTB mode will be enabled in TPBS
 *
 * @help
 *============================================================================
 *    ## Plugin Command Info
 *----------------------------------------------------------------------------
 *      1. setIsTPBSCTB isCTB
 *         - Sets whether the CTB mode will be enabled in TPBS as isCTB
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
    DoubleX_RMMZ.TPBS_CTB = {
        PLUGIN_NAME: name,
        VERSIONS: { codebase: "1.1.0", plugin: "v1.00b" }
    }; // DoubleX_RMMZ.TPBS_CTB
    //

})();

(TPBSCTB => {

    "use strict";

    const pluginCodebaseVer = TPBSCTB.VERSIONS.codebase;
    if (Utils.checkRMVersion(pluginCodebaseVer)) return;
    console.warn(`Your codebase version is ${Utils.RPGMAKER_VERSION} but must be
                 at least ${pluginCodebaseVer} to use ${TPBSCTB.PLUGIN_NAME}`);

})(DoubleX_RMMZ.TPBS_CTB);

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
 *    # Edited class: BattleManager
 *      - Mimics the CTB functionality by skipping TPBS frame updates
 *----------------------------------------------------------------------------*/

(($, MZ_EC, TPBSCTB) => {

    "use strict";

    const {
        extendFunc,
        NEW,
        ORIG
    } = MZ_EC.setKlassContainer("BattleManager", $, TPBSCTB);

    extendFunc("updateTurn", function() {
        // Edited to skip all TPBS frame updates that can be skipped
        do {
            ORIG.updateTurn.apply(this, arguments);
        } while (NEW._canUpdateTpb.call(this));
        //
    }); // v1.00a - v1.00a

    /**
     * The this pointer is BattleManager
     * Hotspot/Nullipotent
     * @author DoubleX @since v1.00a @version v1.00a
     * @returns {boolean} Whether the TPBS frame updates can be skipped
     */
    NEW._canUpdateTpb = function() {
        if (this.isInputting() || this.isPartyTpbInputtable()) return false;
        if (this.isAborting() || this.isBattleEnd()) return false;
        if (this._phase === "init" || this._phase === "action") return false;
        if ($gameTemp.isBattleRefreshRequested()) return false;
        if ($gameMessage.isBusy()) return false;
        return this.isTpb() && $gameSystem.tpbsCTBParam("isCTB");
    }; // NEW._canUpdateTpb

})(BattleManager, DoubleX_RMMZ.Enhanced_Codebase, DoubleX_RMMZ.TPBS_CTB);

/*----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------
 *    ## Objects
 *----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------
 *    # Edited class: Game_System
 *      - Lets you access the parameters of this plugin and store them in save
 *----------------------------------------------------------------------------*/

(($, MZ_EC, TPBSCTB) => {

    "use strict";

    const klassName = "Game_System";
    const { ORIG } = MZ_EC.setKlassContainer(klassName, $, TPBSCTB);
    const EC_GS = MZ_EC[klassName].new, GS = TPBSCTB[klassName];

    MZ_EC.extendFunc(EC_GS, GS, "storeParams", function() {
        ORIG.storeParams.apply(this, arguments);
        // Added to store all parameters of this plugin
        EC_GS.onStoreParams.call(this, TPBSCTB.PLUGIN_NAME, "tpbsCTB");
        //
    }); // v1.00a - v1.00a

    /**
     * Idempotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @enum @param {string} param - The name of parameter to be stored in saves
     * @param {*} val - The value of the parameter to be stored in game saves
     */
    $.setTPBSCTBParam = function(param, val) {
        EC_GS.storeParamVal.call(this, "tpbsCTB", param, val);
    }; // $.setTPBSCTBParam

    /**
     * Nullipotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @enum @param {string} param - The name of parameter to be stored in saves
     * @returns {*} The value of the parameter to be stored in game saves
     */
    $.tpbsCTBParam = function(param) {
        return EC_GS.storedParamVal.call(this, "tpbsCTB", param);
    }; // $.tpbsCTBParam

    const pluginName = TPBSCTB.PLUGIN_NAME;
    PluginManager.registerCommand(pluginName, "setIsTPBSCTB", ({ isCTB }) => {
        $gameSystem.setTPBSCTBParam("isCTB", JSON.parse(isCTB));
    });

})(Game_System.prototype, DoubleX_RMMZ.Enhanced_Codebase,
        DoubleX_RMMZ.TPBS_CTB);

/*============================================================================*/

    const curMZECVer = DoubleX_RMMZ.Enhanced_Codebase.VERSIONS.plugin;
    const minMZECVer = "v0.00a";
    if (curMZECVer < minMZECVer) {
        console.warn(`The version of DoubleX RMMZ Enhanced Codebase is
                     ${curMZECVer} but should be at least ${minMZECVer}`);
    }

} else {

    console.warn(`DoubleX RMMZ Enhanced Codebase should be placed above
                 ${DoubleX_RMMZ.TPBS_CTB.PLUGIN_NAME}`);

} // if (DoubleX_RMMZ.Enhanced_Codebase)
