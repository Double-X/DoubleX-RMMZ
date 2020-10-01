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
 *      3. Plugin commands can replace script calls in conditional branch and
 *         control variables event commands
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
 *      1. 
 *      Posts:
 *      1. 
 *      2. 
 *      3. 
 *      4. 
 *      5. 
 *      6. 
 *      7. 
 *      8. 
 *      9. 
 *      10. 
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
 *      { codebase: "1.0.2", plugin: "v1.00a" }(2020 Oct 1 GMT 0600):
 *      1. 1st version of this plugin finished
 *============================================================================*/

/*:
 * @url https://www.patreon.com/doublex
 * @target MZ
 * @plugindesc Versions: { codebase: "1.0.2", plugin: "v1.00a" }
 * Lets you use plugin queries in conditional branch and control variables
 * @orderAfter DoubleX RMMZ Enhanced Codebase
 * @base DoubleX RMMZ Enhanced Codebase
 * @author DoubleX
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
 *       PluginManager.pluginQueries.set(name, func);
 *       - Registers a plugin query with the name being name and function
 *         returning the result being func
 *       E.g.:
 *       - PluginManager.pluginQueries.set("isActorAnyStateAffected", (actorId, paramIds) => {
 *             return $gameActors.actor(+actorId).isAnyStateAffected(paramIds.split("_").map(Number));
 *         });
 *         Will define the plugin query
 *         isActorAnyStateAffected actorId paramIds
 *         as
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
    VERSIONS: { codebase: "1.0.2", plugin: "v1.03a" }
}; // DoubleX_RMMZ.Plugin_Query
//
Utils.checkRMVersion(DoubleX_RMMZ.Plugin_Query.VERSIONS.codebase);

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

($ => {

    "use strict";

    /*------------------------------------------------------------------------
     *    New public variable
     *------------------------------------------------------------------------*/
    // {Map(string, (**) -> *)} pluginQueries: Plugin query name-function map

    $.pluginQueries = new Map();

})(PluginManager);

/*----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------
 *    ## Objects
 *----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------
 *    # Edit class: Game_Interpreter
 *      - Intercepts plugin commands as script calls to use the RMMZ ones
 *----------------------------------------------------------------------------*/

(($, MZ_EC, PQ) => {

    "use strict";

    const klassName = "Game_Interpreter", EC_GI = MZ_EC[klassName].new, {
        NEW,
        ORIG
    } = MZ_EC.setKlassContainer(klassName, $, PQ), GI = PQ[klassName];

    MZ_EC.extendFunc(EC_GI, GI, "evalScriptLine_", function(scriptLine) {
        // Added to return the plugin query result if it's a plugin query
        const query = NEW._PLUGIN_QUERY(scriptLine);
        if (NEW._IS_PLUGIN_QUERY(query)) return NEW._PLUGIN_QUERY_RESULT(query);
        //
        return ORIG.evalScriptLine_.apply(this, arguments);
    }); // v1.00a - v1.00a

    // The plugin query should be as forgiving to syntax error as possible
    NEW._PLUGIN_QUERY = scriptLine => scriptLine.split(/\s+/);
    //

    NEW._IS_PLUGIN_QUERY = query => PluginManager.pluginQueries.has(query[0]);

    NEW._PLUGIN_QUERY_RESULT = query => {
        return PluginManager.pluginQueries.get(query.shift())(query);
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
