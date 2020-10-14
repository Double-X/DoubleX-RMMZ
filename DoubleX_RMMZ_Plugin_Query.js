/*============================================================================
 *    ## Plugin Info
 *----------------------------------------------------------------------------
 *    # Plugin Name
 *      DoubleX_RMMZ_Plugin_Query
 *----------------------------------------------------------------------------
 *    # Introduction
 *      1. The RMMZ plugin commands are supposed to make side effects but not
 *         return end results
 *      2. With this plugin, other plugins can declare plugin queries that
 *         behave like RMMV plugin commands but return end results instead of
 *         making side effects
 *      3. Plugin queries can replace skill/item damage formulae
 *      4. Plugin queries can also replace script calls in conditional branch
 *         and control variables event commands
 *----------------------------------------------------------------------------
 *    # Prerequisites
 *      Plugins:
 *      1. DoubleX RMMZ Enhanced Codebase
 *         https://github.com/Double-X/DoubleX-RMMZ/blob/master/DoubleX%20RMMZ%20Enhanced%20Codebase.js
 *      Abilities(Plugin Users):
 *      1. Nothing special
 *      Abilities(Plugin Developers):
 *      1. Little RMMZ plugin development proficiency to fully utilize this
 *         (Elementary Javascript exposures being able to write beginner codes
 *         up to 300LoC scale)
 *      Knowledge:
 *      1. Basic knowledge on what RMMV plugin command does in general on the
 *         user level
 *----------------------------------------------------------------------------
 *    # Author Notes
 *      1. The plugin command name collision issues in RMMV applies to
 *         plugin queries registed to this RMMZ plugin as well, and in this
 *         case, the last registered plugin query having the same name will be
 *         used
 *      2. DON'T MAKE SIDE EFFECTS IN THE SKILL/ITEM DAMAGE FORMULA PLUGIN
 *         QUERIES UNLESS YOU REALLY KNOW WHAT YOU'RE TRULY DOING
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
 *      1. https://github.com/Double-X/DoubleX-RMMZ/blob/master/DoubleX_RMMZ_Plugin_Query.js
 *      Posts:
 *      1. https://forums.rpgmakerweb.com/index.php?threads/doublex_rmmz_plugin_query.128382/
 *      2. https://www.rpgmakercentral.com/topic/42647-doublex_rmmz_plugin_query/
 *      3. https://rpgmaker.net/engines/rmmz/utilities/300/
 *      4. https://www.save-point.org/thread-8181.html
 *      5. https://gdu.one/forums/topic/13664-doublex_rmmz_plugin_query/
 *      6. http://www.hbgames.org/forums/viewtopic.php?f=332&t=80358
 *      7. https://forum.chaos-project.com/index.php/topic,16089.new.html
 *      8. https://doublexrpgmaker.wordpress.com/2020/10/07/doublex_rmmz_plugin_query/
 *      9. https://www.patreon.com/posts/42482628
 *      10. https://www.makerdevs.com/plugin/doublex-rmmz-plugin-query
 *----------------------------------------------------------------------------
 *    # Instructions
 *      1. The default plugin parameters file name is
 *         DoubleX_RMMZ_Plugin_Query
 *         If you want to change that, you must edit the value of
 *         DoubleX_RMMZ.Plugin_Query.PLUGIN_NAME, which must be done
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
 *      { codebase: "1.0.2", plugin: "v1.00a" }(2020 Oct 6 GMT 1600):
 *      1. 1st version of this plugin finished
 *============================================================================*/

/*~struct~NewPluginQuery:
 *
 * @param name
 * @desc The name of the new plugin query
 * @default
 *
 * @param args
 * @type string[]
 * @desc The list of argument names of the new plugin query
 * @default []
 *
 * @param funcContents
 * @type note
 * @desc The contents of the function of the new plugin query
 * @default
 */

/*:
 * @url https://www.patreon.com/doublex
 * @target MZ
 * @plugindesc Versions: { codebase: "1.0.2", plugin: "v1.00a" }
 * Lets you use plugin queries in conditional branch and control variables
 * @orderAfter DoubleX RMMZ Enhanced Codebase
 * @base DoubleX RMMZ Enhanced Codebase
 * @author DoubleX
 *
 * @param newDamageFormulaPluginQueries
 * @type struct<NewPluginQuery>[]
 * @desc Sets the list of new damage formula plugin queries
 * This list shouldn't include those already added by other plugins
 * @default []
 *
 * @param newEventCmdPluginQueries
 * @type struct<NewPluginQuery>[]
 * @desc Sets the list of new event command plugin queries
 * This list shouldn't include those already added by other plugins
 * @default []
 *
 * @help
 *============================================================================
 *    ## Plugin Query Info
 *----------------------------------------------------------------------------
 *    1. General form
 *       queryName argName1 argName2 argName3 argNameI argNameN
 *       E.g.:
 *       - If the plugin query has its query name as abcdefg and arguments
 *         as h, i, j and k, then the plugin query is abcdefg h i j k
 *    2. (Plugin Developers Only)Registration
 *       PluginManager.damageFormulaPluginQueries.set(name, func);
 *       - Registers a plugin query with the name being name and function
 *         returning the result being func
 *       - The first 5 arguments of the function must be the following:
 *         i. item - The skill/item having the damage formula
 *         ii. a - The subject executing the skill/item
 *         iii. b - The target having the damage formula applied to
 *         iv. v - The raw data list of the game variables
 *         v. sign - 1(damage)/-1(recovery)
 *       - The registered plugin query can be used in skill/item damage
 *         formulae
 *       E.g.:
 *       - PluginManager.damageFormulaPluginQueries.set("matDmg", (item, a, b, v, sign, baseDmg) => {
 *             return +baseDmg + a.mat * 2 - b.mdf * 2;
 *         });
 *         Will define the plugin query atkDmg in the skill/item damage
 *         formulae as baseDmg + a.mat * 2 - b.mdf * 2
 *         Where baseDmg must be a Number
 *       PluginManager.eventCmdPluginQueries.set(name, func);
 *       - Registers a plugin query with the name being name and function
 *         returning the result being func
 *       - The registered plugin query can be used in conditional branch and
 *         control variables event commands
 *       E.g.:
 *       - PluginManager.eventCmdPluginQueries.set("isActorAnyStateAffected", (actorId, paramIds) => {
 *             return $gameActors.actor(+actorId).isAnyStateAffected(paramIds.split("_").map(Number));
 *         });
 *         Will define the plugin query
 *         isActorAnyStateAffected actorId paramIds
 *         in the conditional branch/control variables event commands as
 *         $gameActors.actor(actorId).isAnyStateAffected(paramIds);
 *         If paramIds is written in the form of
 *         paramId1_paramId2_paramId3_paramIdI_paramIdN
 *============================================================================
 */

// jshint esversion: 6

var DoubleX_RMMZ = DoubleX_RMMZ || {}; // var must be used or game will crash
// Separates the version numbers with the rest to make the former more clear
DoubleX_RMMZ.Plugin_Query = {
    PLUGIN_NAME: "DoubleX_RMMZ_Plugin_Query",
    VERSIONS: { codebase: "1.0.2", plugin: "v1.00a" }
}; // DoubleX_RMMZ.Plugin_Query
//

(PQ => {

    "use strict";

    const pluginCodebaseVer = PQ.VERSIONS.codebase;
    if (Utils.checkRMVersion(pluginCodebaseVer)) return;
    console.warn(`Your codebase version is ${Utils.RPGMAKER_VERSION} but must be
                 at least ${pluginCodebaseVer} to use ${PQ.PLUGIN_NAME}`);

})(DoubleX_RMMZ.Plugin_Query);

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
 *    # Edit class: PluginManager
 *      - Lets other plugins register their plugin queries to be used by users
 *----------------------------------------------------------------------------*/

(($, PQ) => {

    "use strict";

    /*------------------------------------------------------------------------
     *    New public variable
     *------------------------------------------------------------------------*/
    // {Map(string, (**) -> *)} damageFormulaPluginQueries: Damage formula
    //                                                      plugin queries
    // {Map(string, (**) -> *)} eventCmdPluginQueries: Event cmd plugin queries

    $.damageFormulaPluginQueries = new Map();
    $.eventCmdPluginQueries = new Map();

    const params = $.parameters(PQ.PLUGIN_NAME);
    [
        [
            "newDamageFormulaPluginQueries",
            "damageFormulaPluginQueries",
            ["item", "a", "b", "v", "sign"]
        ],
        ["newEventCmdPluginQueries", "eventCmdPluginQueries", []]
    ].forEach(([param, queryContainer, fixedArgs]) => {
        JSON.parse(params[param]).map(JSON.parse).forEach(pluginQuery => {
            const args = fixedArgs.concat(JSON.parse(pluginQuery.args));
            args.push(JSON.parse(pluginQuery.funcContents));
            $[queryContainer].set(pluginQuery.name, new Function(...args));
        });
    });


})(PluginManager, DoubleX_RMMZ.Plugin_Query);

/*----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------
 *    ## Objects
 *----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------
 *    # Edit class: Game_Action
 *      - Runs plugin queries in the skill/item damage formulae
 *----------------------------------------------------------------------------*/

(($, MZ_EC, PQ) => {

    "use strict";

    const klassName = "Game_Action", EC_GI = MZ_EC[klassName].new, {
        NEW,
        ORIG
    } = MZ_EC.setKlassContainer(klassName, $, PQ), GI = PQ[klassName];

    MZ_EC.extendFunc(EC_GI, GI, "_evalDamageFormula_", function(b, sign, damageFormula) {
        // Added to return the plugin query result if it's a plugin query
        const query = NEW.PLUGIN_QUERY(damageFormula);
        if (NEW._IS_PLUGIN_QUERY(query)) {
            return NEW._pluginQueryResult.call(this, b, sign, query);
        }
        //
        return ORIG._evalDamageFormula_.apply(this, arguments);
    }); // v1.00a - v1.00a

    // The plugin query should be as forgiving to syntax error as possible
    NEW.PLUGIN_QUERY = scriptLine => scriptLine.split(/\s+/);
    //

    NEW._IS_PLUGIN_QUERY = query => {
        return PluginManager.damageFormulaPluginQueries.has(query[0]);
    }; // NEW._IS_PLUGIN_QUERY

    /**
     * The this pointer is Game_Action.prototype
     * Idempotent
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {Game_Battler} b - The target to have damage formula applied
     * @enum @param {number} sign - Whether it's damage or recovery(1/-1)
     * @enum @param {string[]} query - The query name and argument value strings
     * @returns {number?} The evaluated applied damage of skill/item to target
     */
    NEW._pluginQueryResult = function(b, sign, query) {
        const item = this.item();
        const [a, v] = [this.subject(), $gameVariables._data];
        return NEW._PLUGIN_QUERY_RESULT(item, a, b, v, sign, query);
    }; // NEW._pluginQueryResult

    NEW._PLUGIN_QUERY_RESULT = (item, a, b, v, sign, query) => {
        const name = query.shift();
        const args = [item, a, b, v, sign].fastMerge(query);
        return PluginManager.damageFormulaPluginQueries.get(name)(...args);
    }; // NEW._PLUGIN_QUERY_RESULT

})(Game_Interpreter.prototype, DoubleX_RMMZ.Enhanced_Codebase,
        DoubleX_RMMZ.Plugin_Query);

/*----------------------------------------------------------------------------
 *    # Edit class: Game_Interpreter
 *      - Runs plugin queries in conditional branch/control variables commands
 *----------------------------------------------------------------------------*/

(($, MZ_EC, PQ) => {

    "use strict";

    const klassName = "Game_Interpreter", EC_GI = MZ_EC[klassName].new, {
        NEW,
        ORIG
    } = MZ_EC.setKlassContainer(klassName, $, PQ);
    const GA = PQ.Game_Action.new, GI = PQ[klassName];

    MZ_EC.extendFunc(EC_GI, GI, "evalScriptLine_", function(scriptLine) {
        // Added to return the plugin query result if it's a plugin query
        const query = GA.PLUGIN_QUERY(scriptLine);
        if (NEW._IS_PLUGIN_QUERY(query)) return NEW._PLUGIN_QUERY_RESULT(query);
        //
        return ORIG.evalScriptLine_.apply(this, arguments);
    }); // v1.00a - v1.00a
    NEW._IS_PLUGIN_QUERY = query => {
        return PluginManager.eventCmdPluginQueries.has(query[0]);
    }; // NEW._IS_PLUGIN_QUERY
    NEW._PLUGIN_QUERY_RESULT = query => {
        return PluginManager.eventCmdPluginQueries.get(query.shift())(...query);
    }; // NEW._PLUGIN_QUERY_RESULT

})(Game_Interpreter.prototype, DoubleX_RMMZ.Enhanced_Codebase,
        DoubleX_RMMZ.Plugin_Query);

/*============================================================================*/

    const curMZECVer = DoubleX_RMMZ.Enhanced_Codebase.VERSIONS.plugin;
    const minMZECVer = "v0.00a";
    if (curMZECVer < minMZECVer) {
        console.warn(`The version of DoubleX RMMZ Enhanced Codebase is
                     ${curMZECVer} but should be at least ${minMZECVer}`);
    }

} else {

    console.warn(`DoubleX RMMZ Enhanced Codebase should be placed above
                 ${DoubleX_RMMZ.Plugin_Query.PLUGIN_NAME}`);

} // if (DoubleX_RMMZ.Enhanced_Codebase)
