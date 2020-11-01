/*============================================================================
 *    ## Plugin Info
 *----------------------------------------------------------------------------
 *    # Plugin Name
 *      DoubleX RMMZ Enhanced Codebase
 *----------------------------------------------------------------------------
 *    # Introduction
 *    1. This plugin's supposed to be fully compatible with those not written
 *       with this plugin in mind, so plugin developers don't have to write
 *       compatibility fixes involving this plugin
 *    2. This plugin added some new APIs and refactored some codes to further
 *       facilitate more effective and efficient plugin development by making
 *       the default RMMZ codebase quality improvements even more drastic
 *       Note that such refactoring will only be done incrementally, meaning
 *       that these codebase quality improvements won't be all present in the
 *       1st version of this plugin, but only when they cause real issues in
 *       plugin development, in which those improvements will be added to be
 *       newer versions of this plugin
 *    3. This plugin also fixed some bugs and further improved performance in
 *       the default RMMZ codebase
 *    4. THIS PLUGIN'S INTENDED TO GIVES AN EXTRA OPTION TO PLUGIN DEVELOPERS
 *       RATHER THAN REPLACING THE DEFAULT RMMZ CODEBASE
 *----------------------------------------------------------------------------
 *    # Prerequisites
 *      Abilities(Plugin Users):
 *      1. Nothing special
 *      Abilities(Plugin Developers):
 *      1. Basic knowledge on what the default RMMZ codebase does in general
 *      2. Some RMMZ plugin development proficiency to fully utilize this
 *         plugin in intended ways
 *         (Basic knowledge on what RMMZ plugin development does in general
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
 *      This Plugin:
 *      1. https://github.com/Double-X/DoubleX-RMMZ/blob/master/DoubleX%20RMMZ%20Enhanced%20Codebase.js
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
 *    # Instructions
 *      1. THIS PLUGIN MUST BE PLACED ABOVE ALL THE OTHER PLUGINS
 *      2. The version number of this plugin's consists of 2 parts, with 1
 *         being the targeted default RMMZ codebase versions, so this plugin
 *         must be outdated if those version numbers are indeed different
 *      3. The default plugin parameters file name is
 *         DoubleX RMMZ Enhanced Codebase
 *         If you want to change that, you must edit the value of
 *         DoubleX_RMMZ.Enhanced_Codebase.PLUGIN_NAME, which must be done via
 *         opening this plugin js file directly
 *      4. (Plugin developers only)The version numbers of this plugin are
 *         stored in DoubleX_RMMZ.Enhanced_Codebase.VERSIONS, which should be
 *         { codebase: "1.1.0", plugin: "v0.00a" }
 *         If it's falsy, it means this plugin's not loaded at the moment of
 *         querying its version numbers
 *      5. (Plugin developers only)Please use the following search tag to
 *         check how this plugin extends and rewrites functions:
 *         - Enhanced_Codebase_Extend_Rewrite_Funcs
 *         Note that the original function will still be stored in the plugin
 *         container even if it's supposed to be rewritten rather than
 *         extended
 *         Please use the following search tag to check how this plugin adds
 *         accessors, getters and setters:
 *         - Enhanced_Codebase_Add_Accessors
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
 *    # Todo
 *      1. Adds Array.prototype.filterFlat(with improved performance)
 *      2. Adds Array.prototype.filterFlatMap(with improved performance)
 *      3. Adds Array.prototype.filterMapReduce(with improved performance)
 *      4. Adds Array.prototype.filterMapReduceRight(with improved
 *         performance)
 *      5. Adds Array.prototype.filterReduce(with improved performance)
 *      6. Adds Array.prototype.filterReduceRight(with improved performance)
 *      7. Adds Array.prototype.flatFilter(with improved performance)
 *      8. Adds Array.prototype.flatFilterReduce(with improved performance)
 *      9. Adds Array.prototype.flatFilterReduceRight(with improved
 *         performance)
 *      10. Adds Array.prototype.flatMapEvery(with improved performance)
 *      11. Adds Array.prototype.flatMapFilter(with improved performance)
 *      12. Adds Array.prototype.flatMapFilterReduce(with improved
 *          performance)
 *      13. Adds Array.prototype.flatMapFilterReduceRight(with improved
 *          performance)
 *      14. Adds Array.prototype.flatMapFind(with improved performance)
 *      15. Adds Array.prototype.flatMapReduce(with improved performance)
 *      16. Adds Array.prototype.flatMapReduceRight(with improved performance)
 *      17. Adds Array.prototype.flatMapSome(with improved performance)
 *      18. Adds Array.prototype.mapEvery(with improved performance)
 *      19. Adds Array.prototype.mapFilterReduce(with improved performance)
 *      20. Adds Array.prototype.mapFilterReduceRight(with improved
 *          performance)
 *      21. Adds Array.prototype.mapFind(with improved performance)
 *      22. Adds Array.prototype.mapReduceRight(with improved performance)
 *      23. Adds Array.prototype.mapSome(with improved performance)
 *============================================================================*/
/*:
 * @url https://www.patreon.com/doublex
 * @target MZ
 * @plugindesc Versions: { codebase: "1.1.0", plugin: "v0.00a" }
 * Fixes bugs, improves codebase quality, boosts performance and gives new APIs
 * @author DoubleX
 *
 * @param rngPartNum
 * @desc Sets the number of parts altering Math.random randomness
 * It makes Math.random gives more evenly distributed numbers
 * @default 10
 *
 * @help
 *============================================================================
 *    ## Plugin Users Info
 *----------------------------------------------------------------------------
 *    # Additional plugin parameter explanations
 *      1. rngPartNum
 *         Math.random will be run under each of equal-sized partitions
 *         The number of those partitions is rngPartNum
 *         No partition will be run under twice before they've all been run
 *         under
 *         rngPartNum shouldn't be too large nor too small to maximize the
 *         chance for the RNG generated by Math.random() to be more evenly
 *         distributed(For instance, 10 is a good value for rngPartNum)
 *         Larger rngPartNum means more time and memory needed to run it
 *         E.g.:
 *         - With rngPartNum being 10, the random numbers will be divided into
 *           the below 10 partitions:
 *           i. - [0, 0.1)
 *           ii. - [0.1, 0.2)
 *           iii. - [0.2, 0.3)
 *           iv. - [0.3, 0.4)
 *           v. - [0.4, 0.5)
 *           vi. - [0.5, 0.6)
 *           vii. - [0.6, 0.7)
 *           viii. - [0.7, 0.8)
 *           ix. - [0.8, 0.9)
 *           x. - [0.9, 1)
 *           Then every 10 consecutive Math.random() call will always results
 *           in random numbers in different partitions, until all partitions
 *           are used, then all those partitions will be reset and can be used
 *           again
 *           For instance, the consecutive call results of Math.random with
 *           rngPartNum being 10, can be something like this:
 *           i. - 0.5583369022811258 // 6 - [0.5, 0.6)
 *           ii. - 0.8856774551202906 // 9 - [0.8, 0.9)
 *           iii. - 0.7053351634934172 // 8 - [0.7, 0.8)
 *           iv. - 0.2910141721648054 // 3 - [0.2, 0.3)
 *           v. - 0.46443921703774416 // 5 - [0.4, 0.5)
 *           vi. - 0.34247765359444715 // 4 - [0.3, 0.4)
 *           vii. - 0.9611230852360236 // 10 - [0.9, 1)
 *           viii. 0.170055669517572 // 2 - [0.1, 0.2)
 *           ix. - 0.6280946076323228 // 7 - [0.6, 0.7)
 *           x. - 0.09900382018076581 // 1 - [0, 0.1)
 *           (Now all the 10 partitions are used after the 1st 10 consecutive
 *           Math.random() call and thus reset to be able to be "used" again)
 *           xi. - 0.49970969353564276 // 5 - [0.4, 0.5)
 *           xii. - 0.19670031315146652 // 2 - [0.1, 0.2)
 *           xiii. - 0.6183234115814623 // 7 - [0.6, 0.7)
 *           xiv. - 0.9592661473226407 // 10 - [0.9, 1)
 *           xv. - 0.837747307203645 // 9 - [0.8, 0.9)
 *           xvi. - 0.06670947818157003 // 1 - [0, 0.1)
 *           xvii. - 0.20614586616388186 // 3 - [0.2, 0.3)
 *           xviii. - 0.38808043042462215 // 4 - [0.3, 0.4)
 *           xix. - 0.7973840400497697 // 8 - [0.7, 0.8)
 *           xx. - 0.5467456358572309 // 6 - [0.5, 0.6)
 *    # Fixed bugs
 *      1. The RMMZ hardcodes the rendering loop fps to be the monitor refresh
 *         rate, and can be problematic when targeting players with low end
 *         mobiles
 *         - This plugin lets you force the rendering loop fps by this script
 *           call:
 *           Graphics.renderFps = newRenderFps
 *           Where newRenderFps is the new clamped rendering loop fps
 *         - This can be useful when targeting low end mobiles by clamping the
 *           rendering loop fps to 30
 *         - Setting this as 0 will remove the clamping
 *         - Do note that the rendering loop fps can never go beyond the
 *           monitor refresh rate
 *         Search tag: Graphics_Render_FPS
 *      2. The RMMZ hardcodes the game loop fps to be 60, and can be
 *         problematic when targeting players with low end mobiles
 *         - This plugin lets you change the game loop fps by this script
 *           call:
 *           Graphics.gameFps = newGameFps
 *           Where newGameFps is the game loop fps
 *         - This can be useful as a performance stress test by raising the
 *           game loop fps to be 120, or when targeting low end mobiles by
 *           capping the game loop fps to 30
 *         - Do note that the game loop fps has an upper bound, which depends
 *           on the hardware capability of the running machine(so you'll have
 *           to test it out yourselves), so don't be too insane with it(like
 *           setting it to 2400, and you'll most likely have troubles)
 *         Search tag: Graphics_Game_FPS
 *      3. The faulty damage formula will just silently return 0 damage
 *         instead of informing you what faults are in which damage formula
 *         - This plugin lets you know them by this script call:
 *           Game_Action.IS_SHOW_DAMAGE_FORMULA_ERRS = true
 *           Which is useful when testing the damage formulae
 *         - Alternatively, if you don't want your players to know anything
 *           about the damage formula, you can use this script call:
 *           Game_Action.IS_SHOW_DAMAGE_FORMULA_ERRS = false
 *           Which is useful when the game's about to be published
 *      4. Any damage formula having side effects will have those side effects
 *         leaked out in the battle when some autobattle actors having those
 *         skills/items input actions
 *         - This plugin temporarily removes the side effect parts of all
 *           damage formulae of skills/items of autobattle actors when they
 *           input actions, but those side effects will still be there when
 *           the inputted actions are actually executed
 *         - It's done by replacing the damage formula string with the regular
 *           expression stored in
 *           Game_Action.NO_SIDE_EFFECT_DAMAGE_FORMULA_REGEX, and its default
 *           value is new RegExp(".*[};] *", "gim"), meaning that anything
 *           before the last } or ; will be temporarily removed from the
 *           damage formula
 *         - If that default regular expression doesn't suit your needs, you
 *           can change Game_Action.NO_SIDE_EFFECT_DAMAGE_FORMULA_REGEX to be
 *           a suitable counterpart
 *         - Regardless of how the regular expression's written, you should
 *           standardize your damage formula so the side effect parts can
 *           always be reliably removed with an easy, simple and small regular
 *           expression
 *         - (Advanced)Alternatively, you can edit
 *           Game_Action.prototype.damageFormulaWithoutSideEffects to use
 *           different regular expressions to santizie different damage
 *           formulae, or even just return a separate side-effect free
 *           counterpart as string literals or notetag values for some
 *           skills/items yourselves, like:
 *           Game_Action.prototype.damageFormulaWithoutSideEffects = function() {
 *               const { id, meta, damage: { formula } } = this.item();
 *               switch (id) {
 *                   case 1: return meta.damageFormulaWithoutSideEffectsNotetag;
 *                   case 2: return "damageFormulaWithoutSideEffects";
 *                   case 3: return formula.replace(regex1, "");
 *                   case 4: return formula.replace(regex2, "");
 *                   default 1: return formula.replace(Game_Action.NO_SIDE_EFFECT_DAMAGE_FORMULA_REGEX, "");
 *               }
 *           };
 *           Do note that this plugin doesn't provide such notetags for you,
 *           so you'll have to use the default RMMZ notetags, which is of this
 *           format: <notetagName:notetagValue>
 *============================================================================
 *    ## Plugin Developers Info
 *----------------------------------------------------------------------------
 *   # New public APIs
 *     Array
 *     - Instance methods
 *       1. fastMap(mapCallback, mapThis_)
 *          The same as map but is tested to be noticeably faster
 *       2. fastMerge(arr)
 *          The same as concat except that fastMerge alters the original array
 *          instead of returning a new one
 *       3. filterMap(filterCallback, mapCallback, filterThis_, mapThis_)
 *          The same as chaining filter with map except that the new array
 *          returned by filter will be mapped in place(.filter().map())
 *       4. mapFilter(mapCallback, filterCallback, mapThis_, filterThis_)
 *          The same as chaining map with filter except that the new array
 *          returned by map will be filtered in place(.map().filter())
 *       5. mapReduce(mapCallback, reduceCallback, initVal_, mapThis_, reduceThis_)
 *          The same as chaining map with reduce but is tested to be
 *          noticeably faster(.map().reduce())
 *       6. eraseElem(elem)
 *          Erases the passed element(if any) from this original array
 *       7. split(splitCallback, splitThis)
 *          Returns an array of array splited by the removed elements
 *          returning truthy results in splitCallback
 *       8. splitInPlace(splitCallback, splitThis)
 *          Returns an array of array splited by the removed elements
 *          returning truthy results in splitCallback
 *          This method changes the original array
 *       9. isProperSubsetOf(arr)
 *          Returns if this array's a proper subset of the specified array
 *       10. isProperSupersetOf(arr)
 *           Returns if this array's a proper superset of the specified array
 *       11. isSupersetOf(arr)
 *           Returns if this array's a superset of the specified array
 *       12. isSubsetOf(arr)
 *           Returns if this array's a subset of the specified array
 *       13. isEmpty()
 *           Returns if this array's empty
 *       14. symmetricDifference(arr)
 *           Returns the symmetric difference of this and the specified array
 *       15. symmetricDifferenceInplace(arr)
 *           Returns the symmetric difference of this and the specified array
 *           This method changes the original array
 *       16. union(arr)
 *           Returns the union of this and the specified array
 *       17. unionInPlace(arr)
 *           Returns the union of this and the specified array
 *           This method changes the original array
 *       18. difference(arr)
 *           Returns the difference of this and the specified array
 *       19. differenceInPlace(arr)
 *           Returns the difference of this and the specified array
 *           This method changes the original array
 *       20. intersection(arr)
 *           Returns the intersection of this and the specified array
 *       21. intersectionInPlace(arr)
 *           Returns the intersection of this and the specified array
 *           This method changes the original array
 *       22. excludes(elem, fromI)
 *           Returns if this array doesn't include the specified element
 *       23. clear()
 *           Empties the whole array
 *     Graphics
 *     - Static Accessor
 *       1. renderFps
 *          Returns the current render fps
 *       2. renderFps = newRenderFps
 *          Sets the current render fps to be newRenderFps
 *       3. gameFps
 *          Returns the current game fps
 *       4. gameFps = newGameFps
 *          Sets the current game fps to be newGameFps
 *     Input
 *     - Static Function
 *       1. isJustReleased(keyName)
 *          Returns if the specified key's just released right on this frame
 *     Game_Action
 *     - Static Variable
 *       1. IS_SHOW_DAMAGE_FORMULA_ERRS
 *          Controls whether the damage formula error will be reported on the
 *          console to let users know whether they've some faulty damage
 *          formulae
 *       2. IS_CACHE_DAMAGE_FORMULA
 *          Controls whether the skill/item damage formula will be always
 *          reevaluated each time or cached into a function to turn repeated
 *          eval calls into repeated function calls
 *       3. NO_SIDE_EFFECT_DAMAGE_FORMULA_REGEX
 *          Stores the regular expressions to temporarily remove the parts of
 *          the damage formula leaking side effects when evaluating the damage
 *          among all actions of autobattle actors to fix the side effect
 *          leaking bug when those actor input actions
 *     Game_BattlerBase
 *     - Instance Method
 *       1. onUnrestrict
 *          Triggers events to happen when a battler becomes no longer
 *          restricted
 *     Game_Battler
 *     - Instance Method
 *       1. tpbCastTime
 *          Returns the proportion of the skill/item casting progress
 *       2. tpbIdleTime
 *          Returns the proportion of the battler idling progress
 *       3. isTpbActing
 *          Returns whether the battler's executing tpb actions
 *       4. isTpbCharging
 *          Returns whether the battler's charging the tpb bar
 *       5. isTpbCasting
 *          Returns whether the battler's casting tpb actions
 *       6. onTpbReady
 *          Triggers events to happen when the battler just finished casting
 *          tpb actions
 *       7. isEndTpbCharging
 *          Returns whether the tpb battler's just ended charging the tpb bar
 *       8. isEndTpbCasting
 *          Returns whether the tpb battler's just ended casting actions
 *       9. isTpbIdle
 *          Returns whether the battler tpb bar's idle(not doing anything)
 *     Game_Interpreter
 *     - Static Variable
 *       1. IS_CACHE_SCRIPT
 *          Controls whether the scripts in events will be always reevaluated
 *          each time or cached into a function to turn repeated eval calls
 *          into repeated function calls
 *============================================================================
 */

// jshint esversion: 6

var DoubleX_RMMZ = DoubleX_RMMZ || {}; // var must be used or game will crash
// Separates the version numbers with the rest to make the former more clear
DoubleX_RMMZ.Enhanced_Codebase = {
    PLUGIN_NAME: "DoubleX RMMZ Enhanced Codebase",
    VERSIONS: { codebase: "1.1.0", plugin: "v0.00a" }
}; // DoubleX_RMMZ.Enhanced_Codebase
//

(EC => {

    "use strict";

    const pluginCodebaseVer = EC.VERSIONS.codebase;
    if (Utils.checkRMVersion(pluginCodebaseVer)) return;
    console.warn(`Your codebase version is ${Utils.RPGMAKER_VERSION} but must be
                 at least ${pluginCodebaseVer} to use ${EC.PLUGIN_NAME}`);

})(DoubleX_RMMZ.Enhanced_Codebase);

/*============================================================================
 *    ## Plugin Implementations
 *       You need not edit this part as it's about how this plugin works
 *----------------------------------------------------------------------------
 *    # Plugin Support Info:
 *      1. Prerequisites
 *         - Solid understanding on how the default RMMZ codebase works on its
 *           own in details
 *         - Decent RMMZ plugin development proficiency to fully comprehend
 *           this plugin
 *           (Solid understanding on how RMMZ plugin development works on its
 *           own in details with dozens of tolerable quality plugins written
 *           without nontrivial bugs with some up to 3000 LoC scale and being
 *           experienced)
 *      2. Parameter/Return value of type * means it might be of any type
 *      3. Function signature with (**) means it might take any number of
 *         parameters of any type
 *      4. Supposedly nullable variables are marked with the _ suffix in their
 *         names(but they can be sure to be non null in some cases)
 *      5. Functions supposedly returning nullable values are marked with the
 *         _ suffix in their names(but their return values can be sure to be
 *         non null in some cases)
 *----------------------------------------------------------------------------*/

/*============================================================================*/

(MZ_EC => {

    "use strict";

    MZ_EC.setKlassContainer = (klassName, origKlass, plugin) => {
        const container = plugin[klassName] = { orig: {}, new: {} };
        return {
            NEW: container.new,
            ORIG: container.orig,
            addAccessor: CORE._addAccessor.bind(undefined, origKlass),
            addGetter: CORE._addGetter.bind(undefined, origKlass),
            addSetter: CORE._addSetter.bind(undefined, origKlass),
            rewriteAccessor: CORE._rewriteAccessor.bind(undefined, origKlass),
            rewriteGetter: CORE._rewriteGetter.bind(undefined, origKlass),
            rewriteSetter: CORE._rewriteSetter.bind(undefined, origKlass),
            extendFunc: MZ_EC.extendFunc.bind(undefined, origKlass, container),
            rewriteFunc: MZ_EC.rewriteFunc.bind(undefined, origKlass, container)
        };
    }; // MZ_EC.makeKlassContainer

    // Search tag: Enhanced_Codebase_Extend_Rewrite_Funcs
    MZ_EC.extendFunc = (origKlass, pluginContainer, funcName, func) => {
        pluginContainer.orig[funcName] = origKlass[funcName];
        pluginContainer.new[funcName] = origKlass[funcName] = func;
    }; // MZ_EC.extendFunc
    //
    // It has the same implementations but different meanings on the callers
    MZ_EC.rewriteFunc = MZ_EC.extendFunc;
    //

    const CORE = MZ_EC.CORE = {};

    // Search tag: Enhanced_Codebase_Add_Accessors
    CORE._addAccessor = (origKlass, accessorName, getFunc, setFunc) => {
        Object.defineProperty(origKlass, accessorName, {
            get: getFunc,
            set: setFunc,
            configurable: true
        });
    }; // CORE._addAccessor
    //

    CORE._addGetter = (origKlass, getterName, getFunc) => {
        Object.defineProperty(origKlass, getterName, {
            get: getFunc,
            configurable: true
        });
    }; // CORE._addGetter

    CORE._addSetter = (origKlass, setterName, setFunc) => {
        Object.defineProperty(origKlass, setterName, {
            set: setFunc,
            configurable: true
        });
    }; // CORE._addSetter

    // They've the same implementations but different meanings on the callers
    CORE._rewriteAccessor = CORE._addAccessor;
    CORE._rewriteGetter = CORE._addGetter;
    CORE._rewriteSetter = CORE._addSetter;
    //

    // They must be placed here or the notetag pairs of other plugins won't work
    MZ_EC.BOOL_SUFFIXES = ["val", "switch", "script"];
    MZ_EC.VAL_SUFFIXES = ["val", "var", "script"];
    MZ_EC.EVENT_SUFFIXES = ["event", "script"];
    [MZ_EC.BOOL_ENTRY, MZ_EC.BOOL_ARRAY_ENTRY] = ["bool", "boolArray"];
    [MZ_EC.NUM_ENTRY, MZ_EC.NUM_ARRAY_ENTRY] = ["num", "numArray"];
    [MZ_EC.STRING_ENTRY, MZ_EC.STRING_ARRAY_ENTRY] = ["string", "stringArray"];
    //

    CORE._BOOL_VAL = entry => entry === "true" || entry !== "false";
    CORE._ARRAY_VAL_SEPARATOR = "|", CORE._BOOL_ARRAY_VAL = entry => {
        return entry.split(CORE._ARRAY_VAL_SEPARATOR).fastMap(CORE._BOOL_VAL);
    }; // CORE._BOOL_ARRAY_VAL
    CORE._NUM_ARRAY_VAL = entry => {
        return entry.split(CORE._ARRAY_VAL_SEPARATOR).fastMap(Number);
    }; // CORE._NUM_ARRAY_VAL
    CORE._STRING_VAL = entry => entry;
    CORE._STRING_ARRAY_VAL = entry => entry.split(CORE._ARRAY_VAL_SEPARATOR);
    CORE._RETURNED_ENTRY_VAL = (notePairs, notetagType, entry, count) => {
        // There's not enough context to throw errors meaningfully
        if (!notePairs.has(notetagType)) return CORE._STRING_VAL;
        switch (notePairs.get(notetagType).get(`entry${count}`)) {
            // There's not enough context to throw errors meaningfully
            case MZ_EC.BOOL_ENTRY: return CORE._BOOL_VAL.bind(undefined, entry);
            case MZ_EC.BOOL_ARRAY_ENTRY: {
                return CORE._BOOL_ARRAY_VAL.bind(undefined, entry);
            } case MZ_EC.NUM_ENTRY: return Number.bind(undefined, entry);
            case MZ_EC.NUM_ARRAY_ENTRY: {
                return CORE._NUM_ARRAY_VAL.bind(undefined, entry);
            } case MZ_EC.STRING_ENTRY: {
                return CORE._STRING_VAL.bind(undefined, entry);
            } case MZ_EC.STRING_ARRAY_ENTRY: {
                return CORE._STRING_ARRAY_VAL.bind(undefined, entry);
            } default: return CORE._STRING_VAL.bind(undefined, entry);
            //
        }
    }; // CORE._RETURNED_ENTRY_VAL
    CORE._RETURNED_ENTRY_SWITCH = entry => {
        const switchId = +entry;
        return function() { return $gameSwitches.value(switchId); };
    }; // CORE._RETURNED_ENTRY_SWITCH
    CORE._RETURNED_ENTRY_VAR = entry => {
        const varId = +entry;
        return function() { return $gameVariables.value(varId); };
    }; // CORE._RETURNED_ENTRY_VAR
    // The script function will be reloaded upon setting the variables anyway
    CORE._RETURNED_ENTRY_SCRIPT = () => () => {};
    //
    CORE._SUFFIX_ENTRY_FUNC = function(notePairs, notetagType, suffix, entry, count) {
        switch (suffix) {
            case "val": return CORE._RETURNED_ENTRY_VAL(
                    notePairs, notetagType, entry, count);
            case "switch": return CORE._RETURNED_ENTRY_SWITCH(entry);
            case "var": return CORE._RETURNED_ENTRY_VAR(entry);
            case "script": return CORE._RETURNED_ENTRY_SCRIPT();
            // There's not enough context to throw errors meaningfully
            default: return CORE._STRING_VAL;
            //
        }
    }; // CORE._SUFFIX_ENTRY_FUNC
    CORE._IS_VALID_SUFFIX = (notePairs, notetagType, suffix, count) => {
        const notetagTypePairs = notePairs.get(notetagType);
        const suffixName = `suffix${count}`;
        if (!notetagTypePairs.has(suffixName)) return false;
        return notetagTypePairs.get(suffixName).includes(suffix);
    }; // CORE._IS_VALID_SUFFIX
    CORE._SHOW_INVALID_NOTE_SUFFIX = (datumType, id, count, suffix, line) => {
        console.warn(`A ${datumType} data with id ${id}
                     has the invalid ${count}th suffix ${suffix}
                     in notetag ${line}`);
    }; // CORE._SHOW_INVALID_NOTE_SUFFIX
    CORE._NOTETAG_PAIRS = (container, notePairs, line, notetagType, suffixes, entries) => {
        // So those excessive suffixes/entries will be discarded right here
        const pairs = new Map(), l = Math.min(suffixes.length, entries.length);
        //
        let i = 0;
        // It's tolerable and more performant than any declarative counterpart
        while (i < l) { // while is at least slightly faster than for in general
            const suffix = suffixes[i], entry = entries[i], count = i + 1;
            if (CORE._IS_VALID_SUFFIX(notePairs, notetagType, suffix, count)) {
                // suffixes and entries are still stored to handle dynamic data
                pairs.set(`suffix${count}`, suffix);
                pairs.set(`entry${count}`, entry);
                //
                pairs.set(`func${count}`, CORE._SUFFIX_ENTRY_FUNC(
                        notePairs, notetagType, suffix, entry, count));
            } else CORE._SHOW_INVALID_NOTE_SUFFIX(
                    container.datumType, container.id, count, suffix, line);
            i++;
        }
        return pairs;
        //
    }; // CORE._NOTETAG_PAIRS
    CORE._ON_LOAD_NOTETAG_PAIRS = (container, notePairs, line, notetagType, suffixes, entries) => {
        const pairs = CORE._NOTETAG_PAIRS(
                container, notePairs, line, notetagType, suffixes, entries);
        // push is much faster than concat and pairs isn't an array
        container.notetags.push({ notetagType, pairs });
        //
    }; // CORE._ON_LOAD_NOTETAG_PAIRS

    CORE._REG_EXP_SUFFIX_SEPARATOR = " +", CORE._REG_EXP_SUFFIX_SEPARATOR_OBJ =
            new RegExp(CORE._REG_EXP_SUFFIX_SEPARATOR);
    CORE._REG_EXP_ENTRY_SEPARATOR = " *, +";

    CORE._REG_EXP_ENTRY_SEPARATOR_OBJ =
            new RegExp(CORE._REG_EXP_ENTRY_SEPARATOR);

    CORE._SHOW_INVALID_NOTE_TYPE = (datumType, id, noteType, line) => {
        console.warn(`A ${datumType} data with id ${id}
                     has the invalid type ${noteType} in notetag ${line}`);
    }; // CORE._SHOW_INVALID_NOTE_TYPE
    CORE._ON_LOAD_DATUM_NOTETAG = (container, fullRegex, notePairs, line) => {
        if (!line.match(fullRegex)) return;
        const notetagType = RegExp.$1;
        if (!notePairs.has(notetagType)) return CORE._SHOW_INVALID_NOTE_TYPE(
                container.datumType, container.id, notetagType, line);
        // Otherwise split would corrupt RegExp.$2 and RegExp.$3
        const rawSuffixes = RegExp.$2, rawEntries = RegExp.$3;
        const suffixes = rawSuffixes.split(CORE._REG_EXP_SUFFIX_SEPARATOR_OBJ);
        const entries = rawEntries.split(CORE._REG_EXP_ENTRY_SEPARATOR_OBJ);
        //
        CORE._ON_LOAD_NOTETAG_PAIRS(
                container, notePairs, line, notetagType, suffixes, entries);
        //
    }; //  CORE._ON_LOAD_DATUM_NOTETAG

    CORE._REG_EXP_SPLIT_NOTES = /[\r\n]+/;

    CORE._ON_LOAD_DATUM_NOTETAGS = (datumType, datum, containerName, fullRegex, notePairs) => {
        const { meta } = datum;
        meta.enhancedCodebase = meta.enhancedCodebase || {};
        // Storing datumType is to streamline the notetag datum type reading
        const container = meta.enhancedCodebase[containerName] = {
            id: datum.id,
            datumType,
            notetags: []
        }, lines = datum.note.split(CORE._REG_EXP_SPLIT_NOTES);
        //
        lines.forEach(line => {
            CORE._ON_LOAD_DATUM_NOTETAG(container, fullRegex, notePairs, line);
        });
    }; // CORE._ON_LOAD_DATUM_NOTETAGS

    CORE._REG_EXP_PREFIX = "\\s*(?:doublex\\s+rmmz\\s+)?";
    CORE._REG_EXP_SUFFIXES = "\\s+(\\w+)\\s+(\\w+(?:" +
            CORE._REG_EXP_SUFFIX_SEPARATOR + "\\w+)*)\\s*";
    // So alphanumeric characters as well as numbers with decimals are captured
    CORE.REG_EXP_ENTRY_VAL = "[\\/A-Za-z\\d_\\.\\+\\-\\*%=]+";
    // The / is captured as well to support filepath strings
    CORE._REG_EXP_ENTRIES = " *(" + CORE.REG_EXP_ENTRY_VAL + "(?:" +
            CORE._REG_EXP_ENTRY_SEPARATOR + CORE.REG_EXP_ENTRY_VAL + ")*)\\s*";

    CORE._FULL_REG_EXP = baseRegex => {
        return new RegExp("<" + CORE._REG_EXP_PREFIX + baseRegex +
                CORE._REG_EXP_SUFFIXES + ":" + CORE._REG_EXP_ENTRIES + ">",
                "gim");
    }; // CORE._FULL_REG_EXP
    MZ_EC.onLoadDataNotetags = (obj, datumType, baseRegex, notePairs, containerName = baseRegex) => {
        const fullRegex = CORE._FULL_REG_EXP(baseRegex);
        console.info("MZ_EC.onLoadDataNotetags fullRegex", fullRegex);
        obj.forEach(datum_ => {
            if (datum_) CORE._ON_LOAD_DATUM_NOTETAGS(
                    datumType, datum_, containerName, fullRegex, notePairs);
        });
    }; // MZ_EC.onLoadDataNotetags

    CORE._IS_RELOAD_DATA_NOTETAG_PAIRS = (pairs, count, varId) => {
        if (pairs.get(`suffix${count}`) !== "script") return false;
        return +pairs.get(`entry${count}`) === varId;
    }; // CORE._IS_RELOAD_DATA_NOTETAG_PAIRS
    CORE._RELOAD_DATA_NOTETAG_PAIRS = (varId, val, pairs) => {
        let count = 1;
        while (pairs.has(`func${count}`)) {
            if (CORE._IS_RELOAD_DATA_NOTETAG_PAIRS(pairs, count, varId)) {
                pairs.set(`func${count}`, new Function("argObj", val));
                // It's a cheap idempotent operation so it's ok to call it here
                MZ_EC.clearAllBattlerNotetagCaches();
                //
            }
            count++;
        }
    }; // MZ_EC._RELOAD_DATA_NOTETAG_PAIRS
    MZ_EC.updateDataNotetags = (obj, containerName, varId, val) => {
        obj.forEach(datum_ => {
            if (!datum_) return;
            const { enhancedCodebase } = datum_.meta;
            enhancedCodebase[containerName].notetags.forEach(({ pairs }) => {
                CORE._RELOAD_DATA_NOTETAG_PAIRS(varId, val, pairs);
            });
        });
    }; // MZ_EC.updateDataNotetags

    CORE._battlerNotetagCache = new Map();

    CORE._BATTLER_CACHE_KEY = battler => {
        if (battler.isActor()) return `{"id":${battler.actorId()}}`;
        if (battler.isEnemy()) return `{"i":${battler.index()}}`;
        return "";
    }; // CORE._BATTLER_CACHE_KEY
    CORE._ARRAY_CACHE_KEY = JSON.stringify;
    CORE._IS_VALID_CACHE = cache => cache !== null && cache !== undefined;

    CORE._ACTOR_NOTETAG_DATA = battler => {
        return battler.isActor() ? [battler.actor()] : [];
    }; // CORE._ACTOR_NOTETAG_DATA
    CORE._CLASS_NOTETAG_DATA = battler => {
        return battler.isActor() ? [battler.currentClass()] : [];
    }; // CORE._CLASS_NOTETAG_DATA
    CORE._ACT_DATA_SKILL = ({ skillId }) => $dataSkills[skillId];
    CORE._SKILLS_NOTETAG_DATA = battler => {
        if (battler.isActor()) return battler.skills();
        if (!battler.isEnemy()) return [];
        return battler.enemy().actions.fastMap(CORE._ACT_DATA_SKILL);
    }; // CORE._SKILLS_NOTETAG_DATA
    CORE._USABLE_SKILLS_NOTETAG_DATA = battler => {
        if (battler.isActor()) return battler.usableSkills();
        if (!battler.isEnemy()) return [];
        const EC_GE = MZ_EC.Game_Enemy.new;
        return EC_GE._validActs.call(battler).fastMap(CORE._ACT_DATA_SKILL);
    }; // CORE._USABLE_SKILLS_NOTETAG_DATA
    CORE._ITEMS_NOTETAG_DATA = battler => {
        return battler.isActor() ? $gameParty.items() : [];
    }; // CORE._ITEMS_NOTETAG_DATA
    CORE._USABLE_ITEMS_NOTETAG_DATA = battler => {
        return battler.isActor() ? $gameParty.items().fastMap(item => {
            return battler.canUse(item);
        }) : [];
    }; // CORE._USABLE_ITEMS_NOTETAG_DATA
    CORE._LATEST_SKILL_ITEM_NOTETAG_DATA = battler => {
        if (battler.latestSkillItems) return battler.latestSkillItems;
        const curAct = battler.currentAction();
        return curAct && curAct.item() ? [curAct.item()] : [];
    }; // CORE._LATEST_SKILL_ITEM_NOTETAG_DATA
    CORE._WEAPONS_NOTETAG_DATA = battler => {
        return battler.isActor() ? battler.weapons() : [];
    }; // CORE._WEAPONS_NOTETAG_DATA
    CORE._ARMORS_NOTETAG_DATA = battler => {
        return battler.isActor() ? battler.armors() : [];
    }; // CORE._ARMORS_NOTETAG_DATA
    CORE._ENEMIES_NOTETAG_DATA = battler => {
        return battler.isEnemy() ? [battler.enemy()] : [];
    }; // CORE._ENEMIES_NOTETAG_DATA
    CORE._STATES_NOTETAG_DATA = battler => battler.states();
    CORE._THIS_STATE_NOTETAG_DATA = battler => {
        return battler.thisState ? [battler.thisState] : [];
    }; // CORE._THIS_STATE_NOTETAG_DATA
    CORE._NOTETAG_DATA = (battler, dataType) => {
        switch (dataType) {
            case "actor": return CORE._ACTOR_NOTETAG_DATA(battler);
            case "class": return CORE._CLASS_NOTETAG_DATA(battler);
            case "skills": return CORE._SKILLS_NOTETAG_DATA(battler);
            case "usableSkills": {
                return CORE._USABLE_SKILLS_NOTETAG_DATA(battler);
            }
            case "items" : return CORE._ITEMS_NOTETAG_DATA(battler);
            case "usableItems" : {
                return CORE._USABLE_ITEMS_NOTETAG_DATA(battler);
            }
            case "latestSkillItem": {
                return CORE._LATEST_SKILL_ITEM_NOTETAG_DATA(battler);
            }
            case "weapons" : return CORE._WEAPONS_NOTETAG_DATA(battler);
            case "armors" : return CORE._ARMORS_NOTETAG_DATA(battler);
            case "enemy" : return CORE._ENEMIES_NOTETAG_DATA(battler);
            case "states" : return CORE._STATES_NOTETAG_DATA(battler);
            case "thisState" : return CORE._THIS_STATE_NOTETAG_DATA(battler);
            // There's not enough context to throw errors meaningfully
            default: return [];
            //
        }
    }; // CORE._NOTETAG_DATA
    CORE._IS_VALID_DATUM = datum => datum;
    CORE._DATA_NOTETAGS = (battler, dataType, containerName) => {
          const notetagData = CORE._NOTETAG_DATA(battler, dataType);
          const validNotetagData = notetagData.filter(CORE._IS_VALID_DATUM);
          return validNotetagData.reduce((notes, { meta }) => {
              const { enhancedCodebase } = meta;
              return notes.fastMerge(enhancedCodebase[containerName].notetags);
          }, []);
    }; // CORE._DATA_NOTETAGS
    CORE._NEW_LIST_CONTAINER = notetagList => new Map(Object.entries({
        list: notetagList
    })); // CORE._NEW_LIST_CONTAINER
    CORE._NEW_NOTETAG_LIST_CONTAINER = (containerName, notetagList) => {
        return new Map(Object.entries({
            [containerName]: CORE._NEW_LIST_CONTAINER(notetagList)
        }));
    }; // CORE._NEW_NOTETAG_LIST_CONTAINER
    CORE._NEW_BATTLER_NOTETAG_LIST_CACHE = (priorityKey, containerName, notetagList) => {
        return new Map(Object.entries({
            [priorityKey]: CORE._NEW_NOTETAG_LIST_CONTAINER(
                    containerName, notetagList)
        }));
    }; // CORE._NEW_BATTLER_NOTETAG_LIST_CACHE
    CORE._CACHE_BATTLER_NOTETAG_LIST = (battler, priorities, containerName, notetagList) => {
        const battlerKey = CORE._BATTLER_CACHE_KEY(battler);
        if (!battlerKey) return;
        const priorityKey = CORE._ARRAY_CACHE_KEY(priorities);
        if (!CORE._battlerNotetagCache.has(battlerKey)) {
            const newBattlerNotetagCache = CORE._NEW_BATTLER_NOTETAG_LIST_CACHE(
                    priorityKey, containerName, notetagList);
            return CORE._battlerNotetagCache.set(
                    battlerKey, newBattlerNotetagCache);
        }
        const battlerNotetagCache = CORE._battlerNotetagCache.get(battlerKey);
        if (!battlerNotetagCache.has(priorityKey)) {
            return battlerNotetagCache.set(priorityKey, CORE.
                    _NEW_NOTETAG_LIST_CONTAINER(containerName, notetagList));
        }
        const battlerNotetagContainerCache =
                battlerNotetagCache.get(priorityKey);
        const list = CORE._NEW_LIST_CONTAINER(notetagList);
        battlerNotetagContainerCache.set(containerName, list);
    }; // CORE._CACHE_BATTLER_NOTETAG_LIST

    CORE._NOTETAG_WITH_TYPES = (notetags, notetagTypes_) => {
        // Not cloning the cached list can end up mutating the cache unknowingly
        return notetagTypes_ ? notetags.filter(({ notetagType }) => {
            return notetagTypes_.includes(notetagType);
        }) : notetags.clone();
        //
    }; // CORE._NOTETAG_WITH_TYPES

    CORE._NEW_NOTETAG_LIST = (battler, priorities, containerName, notetagTypes_) => {
        // Cache the whole notetag list regardless of notetagTypes_
        const notetagList = priorities.reduce((notetags, dataType) => {
            return notetags.fastMerge(
                    CORE._DATA_NOTETAGS(battler, dataType, containerName));
        }, []);
        CORE._CACHE_BATTLER_NOTETAG_LIST(
                battler, priorities, containerName, notetagList);
        //
        // Only returns the needed parts of the whole cached notetag list
        return CORE._NOTETAG_WITH_TYPES(notetagList, notetagTypes_);
        //
    }; // CORE._NEW_NOTETAG_LIST
    CORE._BATTLER_NOTETAG_CACHE_LIST_CONTAINER = (battlerNotetagContainerCache, containerName, notetagTypes_) => {
        if (!battlerNotetagContainerCache.has(containerName)) return undefined;
        const container = battlerNotetagContainerCache.get(containerName);
        //
        // Only returns the needed parts of the whole cached notetag list
        return CORE._NOTETAG_WITH_TYPES(container.get("list"), notetagTypes_);
        //
    }; // CORE._BATTLER_NOTETAG_CACHE_LIST_CONTAINER
    CORE._CACHED_BATTLER_NOTETAG_LIST = (battler, priorities, containerName, notetagTypes_) => {
        const battlerKey = CORE._BATTLER_CACHE_KEY(battler);
        if (!CORE._battlerNotetagCache.has(battlerKey)) return undefined;
        const battlerNotetagCache = CORE._battlerNotetagCache.get(battlerKey);
        const priorityKey = CORE._ARRAY_CACHE_KEY(priorities);
        if (!battlerNotetagCache.has(priorityKey)) return undefined;
        const battlerNotetagContainerCache =
                battlerNotetagCache.get(priorityKey);
        return CORE._BATTLER_NOTETAG_CACHE_LIST_CONTAINER(
                battlerNotetagContainerCache, containerName, notetagTypes_);
    }; // CORE._CACHED_BATTLER_NOTETAG_LIST
    MZ_EC.notetags = (battler, priorities, containerName, notetagTypes_) => {
        const cachedNotetagList_ = CORE._CACHED_BATTLER_NOTETAG_LIST(
                battler, priorities, containerName, notetagTypes_);
        if (CORE._IS_VALID_CACHE(cachedNotetagList_)) return cachedNotetagList_;
        return CORE._NEW_NOTETAG_LIST(
                battler, priorities, containerName, notetagTypes_);
    }; // MZ_EC.notetags

    CORE._accumCondOpValNotetagVal = function(accumVal, { pairs }) {
        // condFunc
        if (!pairs.has("func1")) return accumVal;
        if (!pairs.get("func1").call(this)) return accumVal;
        //
        // opFunc and valFunc
        if (!pairs.has("func2") || !pairs.has("func3")) return accumVal;
        const val = pairs.get("func3").call(this);
        switch(pairs.get("func2").call(this)) {
            case "+": return accumVal + val;
            case "-": return accumVal - val;
            case "*": return accumVal * val;
            case "/": return accumVal / val;
            case "%": return accumVal % val;
            case "=": return val;
            // There's not enough context to throw errors meaningfully
            default: return accumVal;
            //
        }
        //
    }; // CORE._accumCondOpValNotetagVal

    CORE._NEW_INIT_VAL_CONTAINER = (initVal, notetagVal) => {
        return new Map(Object.entries({ [initVal]: notetagVal }));
    }; // CORE._NEW_INIT_VAL_CONTAINER
    CORE._NEW_NOTETAG_TYPE_VAL_CONTAINER = (notetagTypeKey, initVal, notetagVal) => {
        return new Map(Object.entries({
            [notetagTypeKey]: CORE._NEW_INIT_VAL_CONTAINER(initVal, notetagVal)
        }));
    }; // CORE._NEW_NOTETAG_TYPE_VAL_CONTAINER
    CORE._CACHE_BATTLER_NOTETAG_VAL = (battler, priorities, containerName, notetagTypes_, initVal, notetagVal) => {
        const battlerKey = CORE._BATTLER_CACHE_KEY(battler);
        if (!battlerKey) return;
        const priorityKey = CORE._ARRAY_CACHE_KEY(priorities);
        const notetagTypeKey = CORE._ARRAY_CACHE_KEY(notetagTypes_);
        // CORE._CACHE_BATTLER_NOTETAG_LIST must be run before running this
        const battlerNotetagCache = CORE._battlerNotetagCache.get(battlerKey);
        const battlerNotetagValCache =
                battlerNotetagCache.get(priorityKey).get(containerName);
        //
        if (!battlerNotetagValCache.has("val")) {
            const notetagTypeCache = CORE._NEW_NOTETAG_TYPE_VAL_CONTAINER(
                    notetagTypeKey, initVal, notetagVal);
            return battlerNotetagValCache.set("val", notetagTypeCache);
        }
        const battlerNotetagTypeCache = battlerNotetagValCache.get("val");
        if (!battlerNotetagTypeCache.has(notetagTypeKey)) {
            const initValCache =
                    CORE._NEW_INIT_VAL_CONTAINER(initVal, notetagVal);
            return battlerNotetagTypeCache.set(notetagTypeKey, initValCache);
        }
        battlerNotetagTypeCache.get(notetagTypeKey).set(initVal, notetagVal);
    }; // CORE._CACHE_BATTLER_NOTETAG_VAL
    CORE._NEW_NOTETAG_VAL = (battler, priorities, containerName, notetagTypes_, initVal) => {
        const notetags = MZ_EC.notetags(
                battler, priorities, containerName, notetagTypes_);
        const notetagVal = notetags.reduce(
                CORE._accumCondOpValNotetagVal, initVal, battler);
        CORE._CACHE_BATTLER_NOTETAG_VAL(battler, priorities, containerName,
                notetagTypes_, initVal, notetagVal);
        return notetagVal;
    }; // CORE._NEW_NOTETAG_VAL
    CORE._BATTLER_NOTETAG_CACHE_VAL_CONTAINER = (battlerNotetagContainerCache, containerName, notetagTypes_, initVal) => {
        if (!battlerNotetagContainerCache.has(containerName)) return undefined;
        const container = battlerNotetagContainerCache.get(containerName);
        const notetagTypes = container.get("val");
        if (notetagTypes_) {
            const notetagTypeKey = CORE._ARRAY_CACHE_KEY(notetagTypes_);
            if (!notetagTypes.has(notetagTypeKey)) return undefined;
            return notetagTypes.get(notetagTypeKey).get(initVal);
        }
        return notetagTypes.get("allNotetags").get(initVal);
    }; // CORE._BATTLER_NOTETAG_CACHE_VAL_CONTAINER
    CORE._CACHED_BATTLER_NOTETAG_VAL = (battler, priorities, containerName, notetagTypes_, initVal) => {
        const battlerKey = CORE._BATTLER_CACHE_KEY(battler);
        if (!CORE._battlerNotetagCache.has(battlerKey)) return undefined;
        const battlerNotetagCache = CORE._battlerNotetagCache.get(battlerKey);
        const priorityKey = CORE._ARRAY_CACHE_KEY(priorities);
        if (!battlerNotetagCache.has(priorityKey)) return undefined;
        const battlerNotetagContainerCache =
                battlerNotetagCache.get(priorityKey);
        return CORE._BATTLER_NOTETAG_CACHE_VAL_CONTAINER(
                battlerNotetagContainerCache, containerName, notetagTypes_, initVal);
    }; // CORE._CACHED_BATTLER_NOTETAG_VAL
    MZ_EC.condOpValNotetagVal = (battler, priorities, containerName, notetagTypes_, initVal) => {
        const cachedNotetagVal_ = CORE._CACHED_BATTLER_NOTETAG_VAL(
                battler, priorities, containerName, notetagTypes_, initVal);
        if (CORE._IS_VALID_CACHE(cachedNotetagVal_)) return cachedNotetagVal_;
        return CORE._NEW_NOTETAG_VAL(
                battler, priorities, containerName, notetagTypes_, initVal);
    }; // MZ_EC.condOpValNotetagVal

    MZ_EC.runCondEventNotetags = (battler, priorities, containerName, notetagTypes_) => {
        const notetags = MZ_EC.notetags(
                battler, priorities, containerName, notetagTypes_);
        notetags.forEach(({ pairs }) => {
            if (!pairs.has("func1")) return;
            if (!pairs.get("func1").call(battler)) return;
            pairs.get("func2").call(battler);
        });
    }; // MZ_EC.runCondEventNotetags

    MZ_EC.clearAllBattlerNotetagCaches = () => {
        CORE._battlerNotetagCache.clear();
    }; // MZ_EC.clearAllBattlerNotetagCaches

    MZ_EC.clearBattlerNotetagCache = (battler, containerName_) => {
        const battlerKey = CORE._BATTLER_CACHE_KEY(battler);
        if (!CORE._battlerNotetagCache.has(battlerKey)) return;
        if (!containerName_) {
            return CORE._battlerNotetagCache.delete(battlerKey);
        }
        CORE._battlerNotetagCache.get(battlerKey).forEach((container) => {
            container.delete(containerName_);
        });
    }; // MZ_EC.clearBattlerNotetagCache

})(DoubleX_RMMZ.Enhanced_Codebase);

/*----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------
 *    ## Core
 *----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------
 *    # Edit class: Array
 *      - Adds some new array APIs
 *----------------------------------------------------------------------------*/

(function($) {

    "use strict";

    /**
     * Potential Hotspot/Nullipotent
     * @author DoubleX @interface @since v0.00a @version v0.00a
     * @memberof JsExtensions
     * @param {(*, <T>, index, [<T>]) -> *} mapCallback - The callback in the
     *                                                    Array map method
     * @param {*?} mapThis_ - The context of mapCallback
     * @returns {[*]} - The fully mapped array from this
     */
    $.fastMap = function(mapCallback, mapThis_) {
        if (this == null) throw new TypeError("this is null or not defined");
        if (typeof mapCallback !== "function") {
            throw new TypeError(`${mapCallback} is not a function`);
        }
        const newArray = [];
        // forEach is tested to be the fastest among sandboxes including NW.js
        this.forEach((elem, i) => {
            // It's ok to call undefined context with previously bound callbacks
            newArray.push(mapCallback.call(mapThis_, elem, i, this));
            //
        });
        //
        return newArray;
    }; // $.fastMap

    /**
     * concat array that can be changed in place will lead to needless throwaway
     * This method alters the original array(this) as it merges another in place
     * @author DoubleX @interface @since v0.00a @version v0.00a
     * @memberof JsExtensions
     * @param {[*]} arr - The array to be merged
     * @returns {This} The original array merged with another array in place
     */
    $.fastMerge = function(arr) {
        this.push(...arr);
        return this;
    }; // $.fastMerge

    /**
     * Chaining filter with map will lead to a new redundantly throwaway Array
     * This method doesn't support the thisArg argument in mapCallback
     * Potential Hotspot/Nullipotent
     * @author DoubleX @interface @since v0.00a @version v0.00a
     * @memberof JsExtensions
     * @param {(*, <T>, index, [<T>]) -> boolean} filterCallback - The callback
     *                                                             in the Array
     *                                                             filter method
     * @param {(*, *, index) -> *} mapCallback - The callback in the Array map
     *                                           method
     * @param {*?} filterThis_ - The context of filterCallback
     * @param {*?} mapThis_ - The context of mapCallback
     * @returns {[*]} - The fully filtered then mapped array from this
     */
    $.filterMap = function(filterCallback, mapCallback, filterThis_, mapThis_) {
        if (this == null) throw new TypeError("this is null or not defined");
        if (typeof filterCallback !== "function") {
            throw new TypeError(`${filterCallback} is not a function`);
        } else if (typeof mapCallback !== "function") {
            throw new TypeError(`${mapCallback} is not a function`);
        }
        const newArray = [];
        // forEach is tested to be the fastest among sandboxes including NW.js
        this.forEach((elem, i) => {
            // It's ok to call undefined context with previously bound callbacks
            if (!filterCallback.call(filterThis_, elem, i, this)) return;
            newArray.push(mapCallback.call(mapThis_, elem, i));
            //
        });
        //
        return newArray;
    }; // $.filterMap

    /**
     * Chaining map with filter will lead to a new redundantly throwaway Array
     * This method doesn't support the thisArg argument in filterCallback
     * Potential Hotspot/Nullipotent
     * @author DoubleX @interface @since v0.00a @version v0.00a
     * @memberof JsExtensions
     * @param {(*, <T>, index, [<T>]) -> *} mapCallback - The callback in the
     *                                                    Array map method
     * @param {(*, *, index) -> boolean} filterCallback - The callback in the
     *                                                    Array filter method
     * @param {*?} mapThis_ - The context of mapCallback
     * @param {*?} filterThis_ - The context of filterCallback
     * @returns {[*]} - The fully mapped then filtered array from this
     */
    $.mapFilter = function(mapCallback, filterCallback, mapThis_, filterThis_) {
        if (this == null) throw new TypeError("this is null or not defined");
        if (typeof mapCallback !== "function") {
            throw new TypeError(`${mapCallback} is not a function`);
        } else if (typeof filterCallback !== "function") {
            throw new TypeError(`${filterCallback} is not a function`);
        }
        const newArray = [];
        // forEach is tested to be the fastest among sandboxes including NW.js
        this.forEach((elem, i) => {
            // It's ok to call undefined context with previously bound callbacks
            const mappedElem = mapCallback.call(mapThis_, elem, i, this);
            if (!filterCallback.call(filterThis_, mappedElem, i)) return;
            //
            newArray.push(mappedElem);
        });
        //
        return newArray;
    }; // $.mapFilter

    /**
     * Chaining map with reduce will lead to a new redundantly throwaway Array
     * This method doesn't support the thisArg argument in reduceCallback
     * Potential Hotspot/Nullipotent
     * @author DoubleX @interface @since v0.00a @version v0.00a
     * @memberof JsExtensions
     * @param {(*, <T>, index, [<T>]) -> *} mapCallback - The callback in the
     *                                                    Array map method
     * @param {(*, *, *, index) -> *} reduceCallback - The callback in the Array
     *                                                 reduce method
     * @param {*?} initVal_ - The initial value of reduceCallback
     * @param {*?} mapThis_ - The context of mapCallback
     * @param {*?} reduceThis_ - The context of reduceCallback
     * @returns {*} - The fully mapped then reduced array result from this
     */
    $.mapReduce = function(mapCallback, reduceCallback, initVal_, mapThis_, reduceThis_) {
        if (this == null) throw new TypeError("this is null or not defined");
        const l = this.length, hasInitVal = initVal_ !== undefined;
        if (typeof mapCallback !== "function") {
            throw new TypeError(`${mapCallback} is not a function`);
        } else if (typeof reduceCallback !== "function") {
            throw new TypeError(`${reduceCallback} is not a function`);
        } else if (l <= 0 && !hasInitVal) {
            throw new TypeError("Reduce of empty array with no initial value");
        }
        if (hasInitVal) {
            let val = initVal_;
            // forEach is tested to be fastest among sandboxes including NW.js
            this.forEach((elem, i) => {
                // It's ok to call undefined context with already bound callback
                const mappedElem = mapCallback.call(mapThis_, elem, i, this);
                val = reduceCallback.call(reduceThis_, val, mappedElem, i);
                //
            });
            //
            return val;
        }
        /** @todo Uses forEach without checking if (i === 0) to be faster */
        let val = this[0], i = 1;
        while (i < l) {
            // It's ok to call undefined context with already bound callback
            const mappedElem = mapCallback.call(mapThis_, this[i], i, this);
            val = reduceCallback.call(reduceThis_, val, mappedElem, i);
            //
            i++;
        }
        //
        return val;
    }; // $.mapReduce

    /**
     * This method erases the passed element(if any) from this original array
     * @author DoubleX @interface @since v0.00a @version v0.00a
     * @memberof JsExtensions
     * @param {*} elem - Element(if any) to be erased from this original array
     * @returns {This} This original array with passed element(if any) erased
     */
    $.eraseElem = function(elem) {
        const i = this.indexOf(elem);
        if (i >= 0) this.splice(i, 1);
        return this;
    }; // $.eraseElem

    /**
     * Potential Hotspot/Nullipotent
     * @author DoubleX @interface @since v0.00a @version v0.00a
     * @memberof JsExtensions
     * @param {(<T>, index, [<T>]) -> boolean} splitCallback - The callback in
     *                                                         the Array split
     *                                                         method
     * @param {*?} splitThis_ - The context of splitCallback
     * @returns {[[<T>]]} - The fully splitted array from this
     */
    $.split = function(splitCallback, splitThis_) {
        if (this == null) throw new TypeError("this is null or not defined");
        if (typeof splitCallback !== "function") {
            throw new TypeError(`${splitCallback} is not a function`);
        }
        const newArray = [];
        let newGroup = [];
        // forEach is tested to be the fastest among sandboxes including NW.js
        this.forEach((elem, i) => {
            // It's ok to call undefined context with previously bound callbacks
            if (splitCallback.call(splitThis_, elem, i, this)) {
                newArray.push(newGroup); // It's ok for 1st group to be empty
                newGroup = [];
            } else newGroup.push(elem);
            //
        });
        newArray.push(newGroup); // It's ok for the last group to be empty
        //
        return newArray;
    }; // $.split

    /**
     * This method changes the original array
     * Potential Hotspot/Nullipotent
     * @author DoubleX @interface @since v0.00a @version v0.00a
     * @memberof JsExtensions
     * @param {(<T>, index, [<T>]) -> boolean} splitCallback - The callback in
     *                                                         the Array split
     *                                                         method
     * @param {*?} splitThis_ - The context of splitCallback
     * @returns {[[<T>]]} - The fully splitted array as the modified this
     */
    $.splitInPlace = function(splitCallback, splitThis_) {
        if (this == null) throw new TypeError("this is null or not defined");
        if (typeof splitCallback !== "function") {
            throw new TypeError(`${splitCallback} is not a function`);
        }
        let newGroup = [], oldI = 0, newI = 0; // oldI = newI = 0 doesn't work
        while (this.length > newI) {
            const elem = this.shift();
            // It's ok to call undefined context with previously bound callbacks
            if (splitCallback.call(splitThis_, elem, oldI, this)) {
                this.push(newGroup); // It's ok for 1st group to be empty
                newGroup = [];
                newI++;
            } else newGroup.push(elem);
            //
            oldI++;
        }
        this.push(newGroup); // It's ok for the last group to be empty
        //
        return this;
    }; // $.splitInPlace

    /**
     * Potential Hotspot/Nullipotent
     * @author DoubleX @interface @since v0.00a @version v0.00a
     * @memberof JsExtensions
     * @param {[*]} arr - The array to be checked against
     * @returns {boolean} If this's a proper subset of the specified array
     */
    $.isProperSubsetOf = function(arr) {
        return this.isSubsetOf(arr) && !arr.isSubsetOf(this);
    }; // $.isProperSubsetOf

    /**
     * Potential Hotspot/Nullipotent
     * @author DoubleX @interface @since v0.00a @version v0.00a
     * @memberof JsExtensions
     * @param {[*]} arr - The array to be checked against
     * @returns {boolean} If this's a proper superset of the specified array
     */
    $.isProperSupersetOf = function(arr) {
        return this.isSupersetOf(arr) && !arr.isSupersetOf(this);
    }; // $.isProperSupersetOf

    /**
     * Potential Hotspot/Nullipotent
     * @author DoubleX @interface @since v0.00a @version v0.00a
     * @memberof JsExtensions
     * @param {[*]} arr - The array to be checked against
     * @returns {boolean} If this's a superset of the specified array
     */
    $.isSupersetOf = function(arr) { return arr.isSubsetOf(this); };

    /**
     * Potential Hotspot/Nullipotent
     * @author DoubleX @interface @since v0.00a @version v0.00a
     * @memberof JsExtensions
     * @param {[*]} arr - The array to be checked against
     * @returns {boolean} If this's a subset of the specified array
     */
    $.isSubsetOf = function(arr) { return this.difference(arr).isEmpty(); };

    /**
     * Potential Hotspot/Nullipotent
     * @author DoubleX @interface @since v0.00a @version v0.00a
     * @memberof JsExtensions
     * @returns {boolean} If this array's empty
     */
    $.isEmpty = function() { return this.length <= 0; };

    /**
     * Potential Hotspot/Nullipotent
     * @author DoubleX @interface @since v0.00a @version v0.00a
     * @memberof JsExtensions
     * @param {[*]} arr - The array to have symmetric difference with
     * @returns {[*]} The symmetric difference of this and the specified array
     */
    $.symmetricDifference = function(arr) {
        return this.difference(arr).union(arr.difference(this));
    }; // $.symmetricDifference

    /**
     * This method changes the original array
     * Potential Hotspot/Nullipotent
     * @author DoubleX @interface @since v0.00a @version v0.00a
     * @memberof JsExtensions
     * @param {[*]} arr - The array to have symmetric difference with
     * @returns {[*]} The symmetric difference of this and the specified array
     */
    $.symmetricDifferenceInPlace = function(arr) {
        return this.differenceInPlace(arr).unionInPlace(arr.difference(this));
    }; // $.symmetricDifferenceInPlace

    /**
     * Potential Hotspot/Nullipotent
     * @author DoubleX @interface @since v0.00a @version v0.00a
     * @memberof JsExtensions
     * @param {[*]} arr - The array to have union with this array
     * @returns {[*]} The union of this and the specified array
     */
    $.union = function(arr) { return this.concat(arr.difference(this)); };

    /**
     * This method changes the original array
     * Potential Hotspot/Nullipotent
     * @author DoubleX @interface @since v0.00a @version v0.00a
     * @memberof JsExtensions
     * @param {[*]} arr - The array to have union with this array
     * @returns {[*]} The union of this and the specified array
     */
    $.unionInPlace = function(arr) {
        return this.fastMerge(arr.difference(this));
    }; // $.unionInPlace

    /**
     * Potential Hotspot/Nullipotent
     * @author DoubleX @interface @since v0.00a @version v0.00a
     * @memberof JsExtensions
     * @param {[*]} arr - The array to have difference with this array
     * @returns {[*]} The difference of this and the specified array
     */
    $.difference = function(arr) {
        return this.filter(elem => arr.excludes(elem));
    }; // $.difference

    /**
     * This method changes the original array
     * Potential Hotspot/Nullipotent
     * @author DoubleX @interface @since v0.00a @version v0.00a
     * @memberof JsExtensions
     * @param {[*]} arr - The array to have difference with this array
     * @returns {[*]} The difference of this and the specified array
     */
    $.differenceInPlace = function(arr) {
        for (let i = 0; ; i++) {
            while (this[i] && arr.includes(this[i])) this.remove(this[i]);
            if (!this[i]) return this;
        }
    }; // $.differenceInPlace

    /**
     * Potential Hotspot/Nullipotent
     * @author DoubleX @interface @since v0.00a @version v0.00a
     * @memberof JsExtensions
     * @param {[*]} arr - The array to have intersection with this array
     * @returns {[*]} The intersection of this and the specified array
     */
    $.intersection = function(arr) {
        // The 2nd argument of includes doesn't match with that of filter
        return this.filter(elem => arr.includes(elem));
        //
    }; // $.intersection

    /**
     * This method changes the original array
     * Potential Hotspot/Nullipotent
     * @author DoubleX @interface @since v0.00a @version v0.00a
     * @memberof JsExtensions
     * @param {[*]} arr - The array to have intersection with this array
     * @returns {[*]} The intersection of this and the specified array
     */
    $.intersectionInPlace = function(arr) {
        for (let i = 0; ; i++) {
            while (this[i] && arr.excludes(this[i])) this.remove(this[i]);
            if (!this[i]) return this;
        }
    }; // $.intersectionInPlace

    /**
     * Potential Hotspot/Nullipotent
     * @author DoubleX @interface @since v0.00a @version v0.00a
     * @memberof JsExtensions
     * @param {*} elem - The element to be checked against
     * @param {index} fromI - The index in this at which to begin searching
     * @returns {boolean} If this array doesn't have the specified element
     */
    $.excludes = function(elem, fromI) { return !this.includes(elem, fromI); };

    /**
     * Potential Hotspot/Idempotent
     * @author DoubleX @interface @since v0.00a @version v0.00a
     * @memberof JsExtensions
     */
    $.clear = function() { this.length = 0; };

})(Array.prototype);

/*----------------------------------------------------------------------------
 *    # Edit class: Math
 *      - Lets you control the randomness of Math.random in RMMZ
 *----------------------------------------------------------------------------*/

(function($, MZ_EC) {

    "use strict";

    const { NEW, ORIG, extendFunc } = MZ_EC.setKlassContainer("Math", $, MZ_EC);

    extendFunc("random", function() {
        // Rewritten to restrict the RNG into an unused partition if any
        if (NEW._rngParts.length >= NEW._RNG_PART_NUM) NEW._rngParts.length = 0;
        let part, rng;
        do {
            rng = ORIG.random.apply(this, arguments);
            part = Math.floor(rng * NEW._RNG_PART_NUM);
        } while (NEW._rngParts.includes(part));
        NEW._rngParts.push(part);
        return rng;
       //
    }); // v0.00a - v0.00a

    NEW._RNG_PART_NUM = +PluginManager.parameters(MZ_EC.PLUGIN_NAME).rngPartNum;

    NEW._rngParts = [];

})(Math, DoubleX_RMMZ.Enhanced_Codebase);

/*----------------------------------------------------------------------------
 *    # Edited class: Graphics
 *      - Impproves code quality and adds Graphics renderFps/gameFps accessors
 *----------------------------------------------------------------------------*/

(($, MZ_EC) => {

    "use strict";

    const {
        NEW,
        ORIG,
        addAccessor,
        extendFunc,
        rewriteFunc
    } = MZ_EC.setKlassContainer("Graphics", $, MZ_EC);

    extendFunc("initialize", function() {
        const init = ORIG.initialize.apply(this, arguments);
        // Added to help plugins alter initialize behaviors in better ways
        NEW._initKeyEvents.call(this);
        //
        return init;
    }); // v0.00a - v0.00a

    rewriteFunc("resize", function(width, height) {
        // Added to fix redundant resizes with width and height unchanged
        if (this._width === width && this._height === height) return;
        //
        [this._width, this._height] = [width, height];
        this._updateAllElements();
    }); // v0.00a - v0.00a

    rewriteFunc("_onKeyDown", function() {
        // Edited to help plugins alter key events in better ways
        if (NEW._hasNoKeyEvent.call(this, event)) return;
        const { keyCode } = event;
        for (const [keyCodeFunc, eventFunc] of NEW._keyEvents) {
            if (keyCodeFunc() !== keyCode) continue;
            event.preventDefault();
            return eventFunc();
        }
        //
    }); // v0.00a - v0.00a

    rewriteFunc("_createPixiApp", function() {
        // Edited to help plugins alter create pixi app in better ways
        try { NEW._createPixiAppWithoutRescue.call(this); } catch (e) {
            NEW._onCreatePixiAppErr.call(this, e);
        }
        //
    }); // v0.00a - v0.00a

    rewriteFunc("_createEffekseerContext", function() {
        // Edited to help plugins alter create effekseer context in better ways
        if (!NEW._isCreateEffekseerContext.call(this)) return;
        NEW._tryCreateEffekseerContext.call(this);
        //
    }); // v0.00a - v0.00a

    // Search tag: Graphics_Render_FPS
    addAccessor("renderFps", function() {
        return this._app.ticker.FPS;
    }, function(renderFps) {
        const { ticker } = this._app;
        ticker.maxFPS = ticker.minFPS = renderFps;
    }); // v0.00a - v0.00a
    //

    // Search tag: Graphics_Game_FPS
    addAccessor("gameFps", function() { // v0.00a - v0.00a
        return PIXI.settings.TARGET_FPMS * 1000.0;
    }, function(gameFps) { PIXI.settings.TARGET_FPMS = gameFps / 1000.0; });
    //

    NEW._keyEvents = new Map();

    /**
     * The this pointer is Graphics
     * Idempotent
     * @author DoubleX @since v0.00a @version v0.00a
     */
    NEW._initKeyEvents = function() {
        NEW._keyEvents.clear();
        const fpsKeyFunc = NEW._switchFPSCounterKey.bind(this);
        NEW._keyEvents.set(fpsKeyFunc, this._switchFPSCounter.bind(this));
        const stretchKeyFunc = NEW._switchStretchModeKey.bind(this);
        NEW._keyEvents.set(stretchKeyFunc, this._switchStretchMode.bind(this));
        const fullScreenKeyFn = NEW._switchFullScreenKey.bind(this);
        NEW._keyEvents.set(fullScreenKeyFn, this._switchFullScreen.bind(this));
    }; // NEW._initKeyEvents

    /**
     * The this pointer is Graphics
     * Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @enum @returns {number} - The code of the switch FPS counter key
     */
    NEW._switchFPSCounterKey = function() { return 113; };

    /**
     * The this pointer is Graphics
     * Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @enum @returns {number} - The code of the switch stretch mode key
     */
    NEW._switchStretchModeKey = function() { return 114; };

    /**
     * The this pointer is Graphics
     * Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @enum @returns {number} - The code of the switch full screen key
     */
    NEW._switchFullScreenKey = function() { return 115; };

    /**
     * The this pointer is Graphics
     * Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {Event} event - The onkeydown event to be checked against
     * @returns {boolean} If the event might trigger functions to be called
     */
    NEW._hasNoKeyEvent = function(event) {
        return event.ctrlKey || event.altKey;
    }; // NEW._hasNoKeyEvent

    /**
     * The this pointer is Graphics
     * Idempotent
     * @author DoubleX @since v0.00a @version v0.00a
     */
    NEW._createPixiAppWithoutRescue = function() {
        this._setupPixi();
        this._app = NEW._pixiApp.call(this);
    }; // NEW._createPixiAppWithoutRescue

    /**
     * The this pointer is Graphics
     * Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @returns {PIXI.Application} The graphics pixi application
     */
    NEW._pixiApp = function() {
        const app = new PIXI.Application({
            view: this._canvas,
            autoStart: false
        });
        app.ticker.remove(app.render, app);
        app.ticker.add(this._onTick, this);
        return app;
    }; // NEW._pixiApp

    /**
     * The this pointer is Graphics
     * Idempotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {Error} e - The error occured when trying to create the pixi app
     */
    NEW._onCreatePixiAppErr = function(e) { this._app = null; };

    /**
     * The this pointer is Graphics
     * Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @returns {boolean} If the effekseer context can be created
     */
    NEW._isCreateEffekseerContext = function() {
        return this._app && window.effekseer;
    }; // NEW._isCreateEffekseerContext

    /**
     * The this pointer is Graphics
     * Idempotent
     * @author DoubleX @since v0.00a @version v0.00a
     */
    NEW._tryCreateEffekseerContext = function() {
        try {
            this._effekseer = NEW._effekseerContextWithoutRescue.call(this);
        } catch (e) { NEW._onCreateEffekseerContextErr.call(this, e); }
    }; // NEW._tryCreateEffekseerContext

    /**
     * The this pointer is Graphics
     * Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @returns {EffekseerContext} The graphics effekseer context
     */
    NEW._effekseerContextWithoutRescue = function() {
        const context = effekseer.createContext();
        if (context) context.init(this._app.renderer.gl);
        return context;
    }; // NEW._effekseerContextWithoutRescue

    /**
     * The this pointer is Graphics
     * Idempotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {Error} e - The error when failing to create the effekseer context
     */
    NEW._onCreateEffekseerContextErr = function(e) { this._app = null; };

    /**
     * The this pointer is Graphics
     * Hotspot/Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @returns {number} The current target rendering loop FPS
     */
    NEW._getRenderFps = function() { return this._app.ticker.FPS; };

    /**
     * The this pointer is Graphics
     * Idempotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {number} renderFps - The new target rendering loop FPS
     */
    NEW._setRenderFps = function(renderFps) {
        const { ticker } = this._app;
        ticker.maxFPS = ticker.minFPS = renderFps;
    }; // NEW._setRenderFps

    /**
     * The this pointer is Graphics
     * Hotspot/Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @returns {number} The current target game loop FPS
     */
    NEW._getGameFps = function() { return PIXI.settings.TARGET_FPMS * 1000.0; };

    /**
     * The this pointer is Graphics
     * Idempotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {number} gameFps - The new target game loop FPS
     */
    NEW._setGameFps = function(gameFps) {
        PIXI.settings.TARGET_FPMS = gameFps / 1000.0;
    }; // NEW._setGameFps

})(Graphics, DoubleX_RMMZ.Enhanced_Codebase);

/*----------------------------------------------------------------------------
 *    # Edited class: Graphics.FPSCounter
 *      - Impproves code quality
 *----------------------------------------------------------------------------*/

(($, MZ_EC) => {

    "use strict";

    const {
        NEW,
        rewriteFunc
    } = MZ_EC.setKlassContainer("Graphics_FPSCounter", $, MZ_EC);

    rewriteFunc("_update", function() {
        // Edited to help plugins alter update behaviors in better ways
        this._labelDiv.textContent = NEW._labelDivTextContent.call(this);
        this._numberDiv.textContent = NEW._numDivTextContent.call(this);
        //
    }); // v0.00a - v0.00a

    /**
     * Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @returns {string} The new FPS counter label text content
     */
    NEW._labelDivTextContent = function() {
        return this._showFps ? "FPS" : "ms";
    }; // NEW._labelDivTextContent

    /**
     * The this pointer is Graphics.FPSCounter.prototype
     * Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @returns {string} The new FPS counter number text content
     */
    NEW._numDivTextContent = function() {
        return (this._showFps ? this.fps : this.duration).toFixed(0);
    }; // NEW._numDivTextContent

})(Graphics.FPSCounter.prototype, DoubleX_RMMZ.Enhanced_Codebase);

/*----------------------------------------------------------------------------
 *    # Edited class: Bitmap
 *      - Impproves code quality
 *----------------------------------------------------------------------------*/

(($, MZ_EC) => {

    "use strict";

    const { NEW, rewriteFunc } = MZ_EC.setKlassContainer("Bitmap", $, MZ_EC);

    rewriteFunc("blt", function(source, sx, sy, sw, sh, dx, dy, dw, dh) {
        // Edited to help plugins alter the blt behaviors in better ways
        try {
            NEW._bltWithoutRescue.call(
                    this, source, sx, sy, sw, sh, dx, dy, dw, dh);
        } catch (e) { NEW._onBltError.call(this, e); }
        //
    }); // v0.00a - v0.00a

    rewriteFunc("drawText", function(text, x, y, maxWidth, lineHeight, align) {
        const { context } = this, alpha = context.globalAlpha;
        maxWidth = maxWidth || 0xffffffff;
        // Edited to help plugins alter the text align behaviors in better ways
        const tx = NEW._drawnTextX.call(this, align, x, maxWidth);
        //
        // Edited to help plugins alter the line height behaviors in better ways
        const ty = NEW._drawnTextY.call(this, y, lineHeight);
        //
        context.save();
        [context.font, context.textAlign] = [this._makeFontNameText(), align];
        [context.textBaseline, context.globalAlpha] = ["alphabetic", 1];
        this._drawTextOutline(text, tx, ty, maxWidth);
        context.globalAlpha = alpha;
        this._drawTextBody(text, tx, ty, maxWidth);
        context.restore();
        this._baseTexture.update();
    }); // v0.00a - v0.00a

    /**
     * The this pointer is Bitmap.prototype
     * Potential Hotspot/Idempotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {Bitmap} source - The bitmap to draw.
     * @param {number} sx - The x coordinate in the source
     * @param {number} sy - The y coordinate in the source
     * @param {number} sw - The width of the source image
     * @param {number} sh - The height of the source image
     * @param {number} dx - The x coordinate in the destination
     * @param {number} dy - The y coordinate in the destination
     * @param {number} [dw=sw] The width to draw the image in the destination
     * @param {number} [dh=sh] The height to draw the image in the destination
     */
    NEW._bltWithoutRescue = function(source, sx, sy, sw, sh, dx, dy, dw, dh) {
        // Default parameters can't be used as it's possible for them to be 0
        [dw, dh] = [dw || sw, dh || sh];
        //
        const image = source._canvas || source._image;
        this.context.globalCompositeOperation = "source-over";
        this.context.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
        this._baseTexture.update();
    }; // NEW._bltWithoutRescue

    /**
     * The this pointer is Bitmap.prototype
     * Potential Hotspot/Idempotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {Error} e - The error when failing to perform bit block transfer
     */
    NEW._onBltError = function(e) {};

    /**
     * The this pointer is Bitmap.prototype
     * Potential Hotspot/Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {number} x - The x coordinate for the top of the text
     * @param {number} lineHeight - The height of the text line
     * @returns {number} The x position of the text to be drawn
     */
    NEW._drawnTextX = function(align, x, maxWidth) {
        if (align === "center") return x + maxWidth / 2;
        return align === "right" ? x + maxWidth : x;
    }; // NEW._drawnTextX

    /**
     * The this pointer is Bitmap.prototype
     * Potential Hotspot/Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {number} y - The y coordinate for the top of the text
     * @param {number} lineHeight - The height of the text line
     * @returns {number} The y position of the text to be drawn
     */
    NEW._drawnTextY = function(y, lineHeight) {
        return Math.round(y + lineHeight / 2 + this.fontSize * 0.35);
    }; // NEW._drawnTextY

})(Bitmap.prototype, DoubleX_RMMZ.Enhanced_Codebase);

/*----------------------------------------------------------------------------
 *    # Edited class: Sprite
 *      - Impproves performance and code quality
 *----------------------------------------------------------------------------*/

(($, MZ_EC) => {

    "use strict";

    const {
        NEW,
        rewriteAccessor,
        rewriteFunc
    } = MZ_EC.setKlassContainer("Sprite", $, MZ_EC);

    rewriteAccessor("width", function() {
        return this._frame.width;
    }, function(val) {
        // Added to stop refreshing the sprite when its width remain unchanged
        if (this._frame.width === val) return;
        //
        this._frame.width = val;
        this._refresh();
    }); // v0.00a - v0.00a

    rewriteAccessor("height", function() {
        return this._frame.height;
    }, function(val) {
        // Added to stop refreshing the sprite when its height remain unchanged
        if (this._frame.height === val) return;
        //
        this._frame.height = val;
        this._refresh();
    }); // v0.00a - v0.00a

    rewriteFunc("_refresh", function() {
        // Edited to help plugins alter texture refresh behaviors in better ways
        if (this.texture) NEW._refreshWithTexture.call(this);
        //
    }); // v0.00a - v0.00a

    /**
     * The this pointer is Sprite.prototype
     * Idempotent
     * @author DoubleX @since v0.00a @version v0.00a
     */
    NEW._refreshWithTexture = function() {
        const frameX = Math.floor(this._frame.x);
        const frameY = Math.floor(this._frame.y);
        const frameW = Math.floor(this._frame.width);
        const frameH = Math.floor(this._frame.height);
        const baseTexture = this._bitmap ? this._bitmap.baseTexture : null;
        const baseTextureW = baseTexture ? baseTexture.width : 0;
        const baseTextureH = baseTexture ? baseTexture.height : 0;
        const realX = frameX.clamp(0, baseTextureW);
        const realY = frameY.clamp(0, baseTextureH);
        const realW = (frameW - realX + frameX).clamp(0, baseTextureW - realX);
        const realH = (frameH - realY + frameY).clamp(0, baseTextureH - realY);
        const frame = new Rectangle(realX, realY, realW, realH);
        [this.pivot.x, this.pivot.y] = [frameX - realX, frameY - realY];
        if (baseTexture) {
            NEW._refreshWithBaseTexture.call(this, baseTexture, frame);
        }
        this.texture._updateID++;
    }; // NEW._refreshWithTexture

    /**
     * The this pointer is Sprite.prototype
     * Idempotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {PIXI.BaseTexture} baseTexture - The sprite bitmap base texture
     * @param {Rectangle} frame - The rectangular frame with real dimensions
     */
    NEW._refreshWithBaseTexture = function(baseTexture, frame) {
        const { texture } = this;
        texture.baseTexture = baseTexture;
        try { texture.frame = frame; } catch (e) {
            NEW._onRefreshWithBaseTextureErr.call(this, e);
        }
    }; // NEW._refreshWithBaseTexture

    /**
     * The this pointer is Sprite.prototype
     * Idempotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {Error} e - The error when failing to refresh with base texture
     */
    NEW._onRefreshWithBaseTextureErr = function(e) {
        this.texture.frame = new Rectangle();
    }; // NEW._onRefreshWithBaseTextureErr

    /**
     * The this pointer is Sprite.prototype
     * Hotspot/Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @returns {number} The current width of this sprite
     */
    NEW._getWidth = function() { return this._frame.width; };

    /**
     * The this pointer is Sprite.prototype
     * Idempotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {number} val - The new width of this sprite
     */
    NEW._setWidth = function(val) {
        // Added to stop refreshing the sprite when its width remain unchanged
        if (this._frame.width === val) return;
        //
        this._frame.width = val;
        this._refresh();
    }; // NEW._setWidth

    /**
     * The this pointer is Sprite.prototype
     * Hotspot/Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @returns {number} The current height of this sprite
     */
    NEW._getHeight = function() { return this._frame.height; };

    /**
     * The this pointer is Sprite.prototype
     * Idempotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {number} val - The new height of this sprite
     */
    NEW._setHeight = function(val) {
        // Added to stop refreshing the sprite when its height remain unchanged
        if (this._frame.height === val) return;
        //
        this._frame.height = val;
        this._refresh();
    }; // NEW._setHeight

})(Sprite.prototype, DoubleX_RMMZ.Enhanced_Codebase);

/*----------------------------------------------------------------------------
 *    # Edited class: Tilemap.Renderer
 *      - Impproves performance and code quality
 *----------------------------------------------------------------------------*/

(($, MZ_EC) => {

    "use strict";

    const {
        NEW,
        rewriteFunc
    } = MZ_EC.setKlassContainer("Tilemap_Renderer", $, MZ_EC);

    rewriteFunc("_createShader", function() {
        // Edited to help plugins alter the create shader glsl in better ways
        const vertexSrc = NEW._shaderVertexSrc.call(this);
        const fragmentSrc = NEW._shaderFragmentSrc.call(this);
        //
        return new PIXI.Shader(PIXI.Program.from(vertexSrc, fragmentSrc), {
            uSampler0: 0,
            uSampler1: 1,
            uSampler2: 2,
            uProjectionMatrix: new PIXI.Matrix()
        });
    }); // v0.00a - v0.00a

    /**
     * The this pointer is Tilemap.Renderer.prototype
     * Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @returns {string} The shader vertex glsl source codes
     */
    NEW._shaderVertexSrc = function() {
        return `attribute float aTextureId;
                attribute vec4 aFrame;
                attribute vec2 aSource;
                attribute vec2 aDest;
                uniform mat3 uProjectionMatrix;
                varying vec4 vFrame;
                varying vec2 vTextureCoord;
                varying float vTextureId;
                void main(void) {
                  vec3 position = uProjectionMatrix * vec3(aDest, 1.0);
                  gl_Position = vec4(position, 1.0);
                  vFrame = aFrame;
                  vTextureCoord = aSource;
                  vTextureId = aTextureId;
                }`;
    }; // NEW._shaderVertexSrc

    /**
     * The this pointer is Tilemap.Renderer.prototype
     * Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @returns {string} The shader fragment glsl source codes
     */
    NEW._shaderFragmentSrc = function() {
        return `varying vec4 vFrame;
                varying vec2 vTextureCoord;
                varying float vTextureId;
                uniform sampler2D uSampler0;
                uniform sampler2D uSampler1;
                uniform sampler2D uSampler2;
                void main(void) {
                  vec2 textureCoord = clamp(vTextureCoord, vFrame.xy, vFrame.zw);
                  int textureId = int(vTextureId);
                  vec4 color;
                  if (textureId < 0) {
                    color = vec4(0.0, 0.0, 0.0, 0.5);
                  } else if (textureId == 0) {
                    color = texture2D(uSampler0, textureCoord / 2048.0);
                  } else if (textureId == 1) {
                    color = texture2D(uSampler1, textureCoord / 2048.0);
                  } else if (textureId == 2) {
                    color = texture2D(uSampler2, textureCoord / 2048.0);
                  }
                  gl_FragColor = color;
                }`;
    }; // NEW._shaderFragmentSrc

})(Tilemap.Renderer.prototype, DoubleX_RMMZ.Enhanced_Codebase);

/*----------------------------------------------------------------------------
 *    # Edited class: TilingSprite
 *      - Impproves code quality
 *----------------------------------------------------------------------------*/

(($, MZ_EC) => {

    "use strict";

    const {
        NEW,
        rewriteFunc
    } = MZ_EC.setKlassContainer("TilingSprite", $, MZ_EC);

    rewriteFunc("_refresh", function() {
        // Edited to help plugins alter texture refresh behaviors in better ways
        if (this.texture) NEW._refreshWithTexture.call(this);
        //
    }); // v0.00a - v0.00a

    /**
     * The this pointer is TilingSprite.prototype
     * Idempotent
     * @author DoubleX @since v0.00a @version v0.00a
     */
    NEW._refreshWithTexture = function() {
        if (this.texture.baseTexture) NEW._refreshWithBaseTexture.call(this);
        this.texture._updateID++;
    }; // NEW._refreshWithTexture

    /**
     * The this pointer is TilingSprite.prototype
     * Idempotent
     * @author DoubleX @since v0.00a @version v0.00a
     */
    NEW._refreshWithBaseTexture = function() {
        try {
            this.texture.frame = NEW._refreshedTextureFrame.call(this);
        } catch (e) { NEW._onRefreshWithBaseTextureErr.call(this, e); }
    }; // NEW._refreshWithBaseTexture

    /**
     * The this pointer is TilingSprite.prototype
     * Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @returns {Rectangle} The new frame for the refreshed texture
     */
    NEW._refreshedTextureFrame = function() {
        const frame = this._frame.clone();
        /** @todo Extracts these codes into well-named functions */
        if (frame.width === 0 && frame.height === 0 && this._bitmap) {
            frame.width = this._bitmap.width;
            frame.height = this._bitmap.height;
        }
        //
        return frame;
    }; // NEW._refreshedTextureFrame

    /**
     * The this pointer is TilingSprite.prototype
     * Idempotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {Error} e - The error occured when failing to refresh base texture
     */
    NEW._onRefreshWithBaseTextureErr = function(e) {
        this.texture.frame = new Rectangle();
    }; // NEW._onRefreshWithBaseTextureErr

})(TilingSprite.prototype, DoubleX_RMMZ.Enhanced_Codebase);

/*----------------------------------------------------------------------------
 *    # Edited class: Window
 *      - Impproves performance
 *----------------------------------------------------------------------------*/

(($, MZ_EC) => {

    "use strict";

    const {
        NEW,
        rewriteAccessor
    } = MZ_EC.setKlassContainer("Window", $, MZ_EC);

    rewriteAccessor("width", NEW._getWidth = function() {
        return this._width;
    }, NEW._setWidth = function(val) {
        // Added to fix redundant refresh with width unchanged
        if (this._width === val) return;
        //
        this._width = val;
        this._refreshAllParts();
        //
    }); // v0.00a - v0.00a

    rewriteAccessor("height", NEW._getHeight = function() {
        return this._height;
    }, NEW._setHeight = function(val) {
        // Added to fix redundant refresh with height unchanged
        if (this._height === val) return;
        //
        this._height = val;
        this._refreshAllParts();
        //
    }); // v0.00a - v0.00a

    rewriteAccessor("padding", NEW._getPadding = function() {
        return this._padding;
    }, NEW._setPadding = function(val) {
        // Added to fix redundant refresh with padding unchanged
        if (this._padding === val) return;
        //
        this._padding = val;
        this._refreshAllParts();
        //
    }); // v0.00a - v0.00a

    rewriteAccessor("margin", NEW._getMargin = function() {
        return this._margin;
    }, NEW._setMargin = function(val) {
        // Added to fix redundant refresh with margin unchanged
        if (this._margin === val) return;
        //
        this._margin = val;
        this._refreshAllParts();
        //
    }); // v0.00a - v0.00a

    /**
     * The this pointer is Window.prototype
     * Hotspot/Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @returns {number} The current width of this window
     */
    NEW._getWidth = function() { return this._width; };

    /**
     * The this pointer is Window.prototype
     * Idempotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {number} val - The new width of this window
     */
    NEW._setWidth = function(val) {
        // Added to fix redundant refresh with width unchanged
        if (this._width === val) return;
        //
        this._width = val;
        this._refreshAllParts();
        //
    }; // NEW._setWidth

    /**
     * The this pointer is Window.prototype
     * Hotspot/Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @returns {number} The current height of this window
     */
    NEW._getHeight = function() { return this._height; };

    /**
     * The this pointer is Window.prototype
     * Idempotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {number} val - The new height of this window
     */
    NEW._setHeight = function(val) {
        // Added to fix redundant refresh with height unchanged
        if (this._height === val) return;
        //
        this._height = val;
        this._refreshAllParts();
        //
    }; // NEW._setHeight

    /**
     * The this pointer is Window.prototype
     * Hotspot/Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @returns {number} The current padding of this window
     */
    NEW._getPadding = function() { return this._padding; };

    /**
     * The this pointer is Window.prototype
     * Idempotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {number} val - The new padding of this window
     */
    NEW._setPadding = function(val) {
        // Added to fix redundant refresh with padding unchanged
        if (this._padding === val) return;
        //
        this._padding = val;
        this._refreshAllParts();
        //
    }; // NEW._setPadding

    /**
     * The this pointer is Window.prototype
     * Hotspot/Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @returns {number} The current margin of this window
     */
    NEW._getMargin = function() { return this._margin; };

    /**
     * The this pointer is Window.prototype
     * Idempotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {number} val - The new margin of this window
     */
    NEW._setMargin = function(val) {
        // Added to fix redundant refresh with margin unchanged
        if (this._margin === val) return;
        //
        this._margin = val;
        this._refreshAllParts();
        //
    }; // NEW._setMargin

})(Window.prototype, DoubleX_RMMZ.Enhanced_Codebase);

/*----------------------------------------------------------------------------
 *    # Edited class: WebAudio
 *      - Impproves code quality
 *----------------------------------------------------------------------------*/

(($, MZ_EC) => {

    "use strict";

    const { NEW, rewriteFunc } = MZ_EC.setKlassContainer("WebAudio", $, MZ_EC);
    const {
        NEW: NEW_PROTO,
        rewriteFunc: rewriteProtoFunc
    } = MZ_EC.setKlassContainer("WebAudio_Proto", $.prototype, MZ_EC);

    rewriteFunc("_createContext", function() {
        // Edited to help plugins alter create context behaviors in better ways
        try {
            const AudioContext =
                    window.AudioContext || window.webkitAudioContext;
            this._context = new AudioContext();
        } catch (e) { NEW._onCreateContextErr.call(this, e); }
        //
    }); // v0.00a - v0.00a

    rewriteProtoFunc("_stopSourceNode", function() {
        // Edited to help plugins alter stop source node in better ways
        this._sourceNodes.forEach(NEW_PROTO._stopEachSourceNode, this);
        //
    }); // v0.00a - v0.00a

    /**
     * The this pointer is WebAudio
     * Idempotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {Error} e - The error when failing to create the audio context
     */
    NEW._onCreateContextErr = function(e) { this._context = null; };

    /**
     * The this pointer is WebAudio.prototype
     * Idempotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {AudioBufferSourceNode} sourceNode - The source node to be stopped
     */
    NEW_PROTO._stopEachSourceNode = function(sourceNode) {
        try {
            sourceNode.onended = null;
            sourceNode.stop();
        } catch (e) {
            NEW_PROTO._onStopSourceNodeErr.call(this, e);
        }
    }; // NEW_PROTO._stopEachSourceNode

    /**
     * The this pointer is WebAudio.prototype
     * Idempotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {Error} e - The error when failing to stop the source node
     */
    NEW_PROTO._onStopSourceNodeErr = function(e) {};

})(WebAudio, DoubleX_RMMZ.Enhanced_Codebase);

/*----------------------------------------------------------------------------
 *    # Edited class: Input
 *      - Adds some new Input APIs
 *----------------------------------------------------------------------------*/

(($, MZ_EC) => {

    "use strict";

    const {
        NEW,
        ORIG,
        extendFunc,
        rewriteFunc
    } = MZ_EC.setKlassContainer("Input", $, MZ_EC);

    extendFunc("clear", function() {
        ORIG.clear.apply(this, arguments);
        // Added to help plugins support the isJustReleased static function
        NEW._isJustReleased.clear();
        //
    }); // v0.00a - v0.00a

    rewriteFunc("update", function() {
        this._pollGamepads();
        // Edited to help plugins alter update behaviors in better ways
        NEW._updateLatestButton.call(this);
        NEW._updateCurrentStates.call(this);
        if (this._virtualButton) NEW._updateVirtualClick.call(this);
        //
        this._updateDirection();
    }); // v0.00a - v0.00a

    rewriteFunc("_onKeyDown", function(event) {
        const { keyCode } = event;
        if (this._shouldPreventDefault(keyCode)) event.preventDefault();
        // Edited to help plugins alter clear keys in better ways
        if (NEW._shouldClear.call(this, keyCode)) this.clear();
        //
        const buttonName = this.keyMapper[keyCode];
        if (buttonName) this._currentState[buttonName] = true;
    }); // v0.00a - v0.00a

    /**
     * Nullipotent
     * @author DoubleX @interface @since v0.00a @version v0.00a
     * @enum @param {string} keyName - The mapped name of the key
     * @returns {boolean} If the key's just released right on this frame
     */
    $.isJustReleased = function(keyName) {
        if (NEW._isEscCompatibleJustReleased.call(this, keyName)) return true;
        return NEW._isJustReleased.has(keyName);
    }; // $.isJustReleased

    NEW._isJustReleased = new Map();

    /**
     * The this pointer is Input
     * Hotspot/Idempotent
     * @author DoubleX @since v0.00a @version v0.00a
     */
    NEW._updateLatestButton = function() {
        if (this._currentState[this._latestButton]) {
            this._pressedTime++;
        } else this._latestButton = null;
    }; // NEW._updateLatestButton

    /**
     * The this pointer is Input
     * Hotspot/Idempotent
     * @author DoubleX @since v0.00a @version v0.00a
     */
    NEW._updateCurrentStates = function() {
        for (const keyName in this._currentState) {
            const currentState = this._currentState[keyName];
            NEW._updateCurrentState.call(this, currentState, keyName);
        }
    }; // NEW._updateCurrentStates

    /**
     * The this pointer is Input
     * Hotspot/Idempotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @enum @param {boolean} keyState - If the key's currently pressed
     * @enum @param {string} keyName - The mapped name of the key
     */
    NEW._updateCurrentState = function(keyState, keyName) {
        NEW._updateLatestState.call(this, keyName);
        this._previousState[keyName] = keyState;
    }; // NEW._updateCurrentState

    /**
     * The this pointer is Input
     * Hotspot/Idempotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @enum @param {string} keyName - The mapped name of the key
     */
    NEW._updateLatestState = function(keyName) {
        if (NEW._isJustPressed.call(this, keyName)) {
            NEW._onStartPress.call(this, keyName);
        } else if (NEW._isKeyJustReleased.call(this, keyName)) {
            NEW._isJustReleased.set(keyName, true);
        } else NEW._isJustReleased.delete(keyName);
        //
    }; // NEW._updateLatestState

    /**
     * The this pointer is Input
     * Hotspot/Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @enum @param {string} keyName - The mapped name of the key
     * @returns {boolean} If the key's just pressed right on this frame
     */
    NEW._isJustPressed = function(keyName) {
        if (!this._currentState[keyName]) return false;
        return !this._previousState[keyName];
    }; // NEW._isJustPressed

    /**
     * The this pointer is Input
     * Idempotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @enum @param {string} keyName - The mapped name of the key
     */
    NEW._onStartPress = function(keyName) {
        [this._latestButton, this._pressedTime] = [keyName, 0];
        this._date = Date.now();
        NEW._isJustReleased.delete(keyName);
    }; // NEW._onStartPress

    /**
     * The this pointer is Input
     * Hotspot/Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @enum @param {string} keyName - The mapped name of the key
     * @returns {boolean} If the key's just released right on this frame
     */
    NEW._isKeyJustReleased = function(keyName) {
        if (this._currentState[keyName]) return false;
        return this._previousState[keyName];
    }; // NEW._isKeyJustReleased

    /**
     * The this pointer is Input
     * Hotspot/Idempotent
     * @author DoubleX @since v0.00a @version v0.00a
     */
    NEW._updateVirtualClick = function() {
        this._latestButton = this._virtualButton;
        [this._pressedTime, this._virtualButton] = [0, null];
    }; // NEW._updateVirtualClick

    /**
     * The this pointer is Input
     * Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @enum @param {string} keyName - The mapped name of the key
     * @returns {boolean} If the pressed key should clear all input states
     */
    NEW._shouldClear = function(keyCode) { return keyCode === 144; };

    /**
     * The this pointer is Input
     * Hotspot/Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @enum @param {string} keyName - The mapped name of the key
     * @returns {boolean} If the specified key should be regarded as pressed
     */
    NEW._isEscCompatibleJustReleased = function(keyName) {
        if (!this._isEscapeCompatible(keyName)) return false;
        return this.isJustReleased("escape");
    }; // NEW._isEscCompatibleJustReleased

})(Input, DoubleX_RMMZ.Enhanced_Codebase);

/*----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------
 *    ## Managers
 *----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------
 *    # Edited class: DataManager
 *      - Impproves code quality and helps plugins load notetags in better way
 *----------------------------------------------------------------------------*/

(($, MZ_EC) => {

    "use strict";

    const klassName = "DataManager", {
        NEW,
        ORIG,
        extendFunc,
        rewriteFunc,
    } = MZ_EC.setKlassContainer(klassName, $, MZ_EC);

    extendFunc("extractSaveContents", function(contents) {
        ORIG.extractSaveContents.apply(this, arguments);
        // Added to ensure all parameter functions uses the parameters in saves
        $gameSystem.loadParamFuncs();
        //
    }); // v0.00a - v0.00a

    rewriteFunc("onXhrLoad", function(xhr, name, src, url) {
        // Edited to help plugins alter on xhr load behaviors in better ways
        if (xhr.status < 400) return NEW._onXhrLoadSuc.call(this, xhr, name);
        //
        this.onXhrError(name, src, url);
    }); // v0.00a - v0.00a

    rewriteFunc("onLoad", function(obj, objName) {
        NEW.loadObj.call(this, obj, objName);
        // Added to help plugins load notetags with known data container type
        NEW.loadDataNotetags.call(this, obj, objName);
        //
    }); // v0.00a - v0.00a

    /**
     * The this pointer is DataManager
     * Idempotent
     * @author DoubleX @interface @since v0.00a @version v0.00a
     * @param {{*}} obj - The raw data from the database to be loaded
     * @param {string} objName - The name of the data container having notetags
     */
    NEW.loadObj = function(obj, objName) {
        if (this.isMapObject(obj)) return NEW.loadMapObj.call(this, obj);
        NEW.loadOtherObj.call(this, obj, objName);
    }; // NEW.loadObj

    /**
     * The this pointer is DataManager
     * Idempotent
     * @author DoubleX @interface @since v0.00a @version v0.00a
     * @param {{*}} obj - The raw data from the database to be loaded
     */
    NEW.loadMapObj = function(obj) {
        this.extractMetadata(obj);
        this.extractArrayMetadata(obj.events);
    }; // NEW.loadMapObj

    /**
     * The this pointer is DataManager
     * Idempotent
     * @author DoubleX @interface @since v0.00a @version v0.00a
     * @param {{*}} obj - The raw data from the database to be loaded
     * @param {string} objName - The name of the data container having notetags
     */
    NEW.loadOtherObj = function(obj, objName) {
        this.extractArrayMetadata(obj);
    }; // NEW.loadOtherObj

    /**
     * The this pointer is DataManager
     * Idempotent
     * @author DoubleX @interface @since v0.00a @version v0.00a
     * @param {[Datum]} obj - The data container having notetags to be loaded
     * @param {string} objName - The name of the data container having notetags
     */
    NEW.loadDataNotetags = function(obj, objName) {};

    /**
     * The this pointer is DataManager
     * Idempotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {XMLHttpRequest} xhr - The xhr successfully loading the data
     * @param {string} name - The name of the successfully loaded data container
     */
    NEW._onXhrLoadSuc = function(xhr, name) {
        window[name] = JSON.parse(xhr.responseText);
        this.onLoad(window[name], name);
    }; // NEW._onXhrLoadSuc

    MZ_EC.loadDataManagerNotetags = (pluginName, notePairs, containerNames, regex, containerName = regex) => {

        const {
            NEW,
            ORIG
        } = MZ_EC.setKlassContainer(klassName, $, pluginName);
        const EC_DM = MZ_EC[klassName].new, DM = pluginName[klassName];

        NEW.NOTETAG_PAIRS = notePairs;
        NEW.NOTETAG_DATA_CONTAINER_NAMES = containerNames;

        NEW._REG_EXP_NOTE = regex;

        MZ_EC.extendFunc(EC_DM, DM, "loadDataNotetags", function(obj, objName) {
            ORIG.loadDataNotetags.apply(this, arguments);
            // Added to load all notetags of this plugin
            NEW._loadDataNotetags.call(this, obj, objName);
            //
        }); // v0.00a - v0.00a

        /**
         * The this pointer is DataManager
         * Idempotent
         * @author DoubleX @since v0.00a @version v0.00a
         * @param {[Datum]} obj - Data container having notetags to be loaded
         * @param {string} objName - The name of data container having notetags
         */
        NEW._loadDataNotetags = function(obj, objName) {
            if (!containerNames.has(objName)) return;
            const datumType = containerNames.get(objName);
            MZ_EC.onLoadDataNotetags.call(
                    this, obj, datumType, regex, notePairs, containerName);
        }; // NEW._loadDataNotetags

    }; // MZ_EC.loadDataManagerNotetags

})(DataManager, DoubleX_RMMZ.Enhanced_Codebase);

/*----------------------------------------------------------------------------
 *    # Edited class: StorageManager
 *      - Impproves code quality
 *----------------------------------------------------------------------------*/

(($, MZ_EC) => {

    "use strict";

    const {
        NEW,
        rewriteFunc
    } = MZ_EC.setKlassContainer("StorageManager", $, MZ_EC);

    rewriteFunc("jsonToZip", function(json) {
        return new Promise((resolve, reject) => {
            try {
                // Edited to help plugins alter json to zip in better ways
                const zip = NEW._zipFromJson.call(this, json);
                NEW._checkSaveDataSize.call(this, zip);
                //
                resolve(zip);
            } catch (e) { reject(e); }
        });
    }); // v0.00a - v0.00a

    rewriteFunc("zipToJson", function(zip) {
        return new Promise((resolve, reject) => {
            try {
                // Edited to help plugins alter zip to json in better ways
                if (zip) return resolve(NEW._jsonFromZip.call(this, zip));
                //
                resolve("null");
            } catch (e) { reject(e); }
        });
    }); // v0.00a - v0.00a

    rewriteFunc("saveToLocalFile", function(saveName, zip) {
        const filePath = this.filePath(saveName);
        const backupFilePath = `${filePath}_`;
        return new Promise((resolve, reject) => {
            // Edited to help plugins alter save to local file in better ways
            NEW._onPrepareSaveToLocalFile.call(this, filePath, backupFilePath);
            try {
                NEW._onSaveToLocalFileWithoutRescue.call(
                        this, zip, filePath, backupFilePath);
                resolve();
            } catch (e) {
                NEW._onTryRollbackFailedLocalFileSave.call(
                        this, filePath, backupFilePath);
                reject(e);
            }
            //
        });
    }); // v0.00a - v0.00a

    /**
     * The this pointer is StorageManager
     * Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {json} json - The json string save data to the compressed
     * @returns {Uint8Array|Array} The compressed zip from the json string data
     */
    NEW._zipFromJson = function(json) {
        return pako.deflate(json, { to: "string", level: 1 });
    }; // NEW._zipFromJson

    /**
     * The this pointer is StorageManager
     * Idempotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {Uint8Array|Array} zip - Zipped save data to have its size checked
     */
    NEW._checkSaveDataSize = function(zip) {
        /** @todo Figures out where does 50000 come from */
        if (zip.length >= 50000) console.warn("Save data is too big.");
        //
    }; // NEW._checkSaveDataSize

    /**
     * The this pointer is StorageManager
     * Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {Uint8Array|Array} zip - The zipped save data to be decompressed
     * @returns {json} The decompressed json string from the compressed zip
     */
    NEW._jsonFromZip = function(zip) {
        return pako.inflate(zip, { to: "string" });
    }; // NEW._jsonFromZip

    /**
     * The this pointer is StorageManager
     * Idempotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {string} filePath - The real file path of the local save file
     * @param {string} backupFilePath - The test file path of the save file
     */
    NEW._onPrepareSaveToLocalFile = function(filePath, backupFilePath) {
        // It's almost immediately called after saveToLocalFile so it's ok here
        this.fsMkdir(this.fileDirectoryPath());
        //
        this.fsUnlink(backupFilePath);
        this.fsRename(filePath, backupFilePath);
    }; // NEW._onPrepareSaveToLocalFile

    /**
     * The this pointer is StorageManager
     * Idempotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {Uint8Array|Array} zip - The zipped save data to be saved locally
     * @param {string} filePath - The real file path of the local save file
     * @param {string} backupFilePath - The test file path of the save file
     */
    NEW._onSaveToLocalFileWithoutRescue = function(zip, filePath, backupFilePath) {
        this.fsWriteFile(filePath, zip);
        this.fsUnlink(backupFilePath);
    }; // NEW._onSaveToLocalFileWithoutRescue

    /**
     * The this pointer is StorageManager
     * Idempotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {string} filePath - The real file path of the local save file
     * @param {string} backupFilePath - The test file path of the save file
     */
    NEW._onTryRollbackFailedLocalFileSave = function(filePath, backupFilePath) {
        try {
            NEW._onRollbackFailedLocalFileSaveWithouRescue.call(
                    this, filePath, backupFilePath);
        } catch (e2) { NEW._onRollbackFailedLocalFileSaveErr.call(this, e2); }
    }; // NEW._onTryRollbackFailedLocalFileSave

    /**
     * The this pointer is StorageManager
     * Idempotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {Error} e - Error when failing to rollback failed local file save
     */
    NEW._onRollbackFailedLocalFileSaveErr = function(e) {};

    /**
     * The this pointer is StorageManager
     * Idempotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {string} filePath - The real file path of the local save file
     * @param {string} backupFilePath - The test file path of the save file
     */
    NEW._onRollbackFailedLocalFileSaveWithouRescue = function(filePath, backupFilePath) {
        this.fsUnlink(filePath);
        this.fsRename(backupFilePath, filePath);
    }; // NEW._onRollbackFailedLocalFileSaveWithouRescue

})(StorageManager, DoubleX_RMMZ.Enhanced_Codebase);

/*----------------------------------------------------------------------------
 *    # Edited class: SceneManager
 *      - Impproves code quality
 *----------------------------------------------------------------------------*/

(($, MZ_EC) => {

    "use strict";

    const {
        NEW,
        ORIG,
        extendFunc,
        rewriteFunc
    } = MZ_EC.setKlassContainer("SceneManager", $, MZ_EC);

    extendFunc("initialize", function() {
        ORIG.initialize.apply(this, arguments);
        // Added to help plugins alter key events in better ways
        NEW._initKeyEvents.call(this);
        //
    }); // v0.00a - v0.00a

    rewriteFunc("onKeyDown", function(event) {
        // Edited to help plugins alter key events in better ways
        if (NEW._hasNoKeyEvent.call(this, event)) return;
        const { keyCode } = event;
        for (const [keyCodeFunc, eventFunc] of NEW._keyEvents) {
            if (keyCodeFunc() === keyCode) return eventFunc();
        }
        //
    }); // v0.00a - v0.00a

    NEW._keyEvents = new Map();

    /**
     * The this pointer is SceneManager
     * Idempotent
     * @author DoubleX @since v0.00a @version v0.00a
     */
    NEW._initKeyEvents = function() {
        NEW._keyEvents.clear();
        const reloadGameKeyFunc = NEW._reloadGameKey.bind(this);
        NEW._keyEvents.set(reloadGameKeyFunc, this.reloadGame.bind(this));
        const showDevToolsKeyFunc = NEW._showDevToolsKey.bind(this);
        NEW._keyEvents.set(showDevToolsKeyFunc, this.showDevTools.bind(this));
    }; // NEW._initKeyEvents

    /**
     * The this pointer is SceneManager
     * Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @enum @returns {number} - The code of the reload game key
     */
    NEW._reloadGameKey = function() { return 116; };

    /**
     * The this pointer is SceneManager
     * Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @enum @returns {number} - The code of the show dev tools key
     */
    NEW._showDevToolsKey = function() { return 119; };

    /**
     * The this pointer is SceneManager
     * Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {Event} event - The onkeydown event to be checked against
     * @returns {boolean} If the event might trigger functions to be called
     */
    NEW._hasNoKeyEvent = function(event) {
        return event.ctrlKey || event.altKey;
    }; // NEW._hasNoKeyEvent

})(SceneManager, DoubleX_RMMZ.Enhanced_Codebase);

/*----------------------------------------------------------------------------
 *    # Edited class: BattleManager
 *      - Impproves performance and code quality
 *----------------------------------------------------------------------------*/

(($, MZ_EC) => {

    "use strict";

    const {
        NEW,
        ORIG,
        extendFunc,
        rewriteFunc
    } = MZ_EC.setKlassContainer("BattleManager", $, MZ_EC);

    extendFunc("setup", function() {
        // Added to ensures the battler notetag cache won't store stale data
        MZ_EC.clearAllBattlerNotetagCaches();
        //
        ORIG.setup.apply(this, arguments);
    }); // v0.00a - v0.00a

    extendFunc("initMembers", function() {
        ORIG.initMembers.apply(this, arguments);
        // Added to help plugins check if the battle should end
        NEW._isBattleEnd = false;
        //
        // Added to help plugins check if the event main's updated
        NEW._isUpdateEventMain = false;
        //
    }); // v0.00a - v0.00a

    extendFunc("updateBattleEnd", function() {
        ORIG.updateBattleEnd.apply(this, arguments);
        // Added to ensures the battler notetag cache won't store stale data
        MZ_EC.clearAllBattlerNotetagCaches();
        //
    }); // v0.00a - v0.00a

    rewriteFunc("onEncounter", function() {
        // Edited to help plugins alter encounter behaviors in better ways
        this._preemptive = NEW._encounterPreemptive.call(this);
        this._surprise = NEW._encounterSurprise.call(this);
        //
    }); // v0.00a - v0.00a

    rewriteFunc("makeEscapeRatio", function() {
        // Edited to help plugins alter escape ratio behaviors in better ways
        this._escapeRatio = NEW._newEscRatio.call(this);
        //
    }); // v0.00a - v0.00a

    rewriteFunc("updateEventMain", function() {
        $gameTroop.updateInterpreter();
        $gameParty.requestMotionRefresh();
        // Edited to help plugins check if the event main's updated
        if ($gameTroop.isEventRunning() || this.checkBattleEnd()) {
            return NEW._isUpdateEventMain = true;
        }
        $gameTroop.setupBattleEvent();
        return NEW._isUpdateEventMain =
                $gameTroop.isEventRunning() || SceneManager.isSceneChanging();
        //
    }); // v0.00a - v0.00a

    rewriteFunc("startBattle", function() {
        this._phase = "start";
        $gameSystem.onBattleStart();
        // Edited to help plugins alter start battle behaviors in better ways
        $gameParty.onBattleStart(this._preemptive, this._surprise);
        $gameTroop.onBattleStart(this._surprise, this._preemptive);
        //
        this.displayStartMessages();
    }); // v0.00a - v0.00a

    rewriteFunc("changeCurrentActor", function(forward) {
        // Edited to help plugins alter change current actor in better ways
        this._currentActor = NEW._newCurActor_.call(this, forward);
        //
        this.startActorInput();
    }); // v0.00a - v0.00a

    rewriteFunc("updateTurn", function(timeActive) {
        $gameParty.requestMotionRefresh();
        // Edited to help plugins alter update turn behaviors in better ways
        if (NEW._isUpdateTpb.call(this, timeActive)) this.updateTpb();
        //
        this._subject = this._subject || this.getNextSubject();
        if (this._subject) return this.processTurn();
        if (!this.isTpb()) this.endTurn();
    }); // v0.00a - v0.00a

    rewriteFunc("endBattlerActions", function(battler) {
        // Edited to help plugins alter battler action end state in better ways
        battler.setActionState(NEW._battlerActEndState.call(this));
        //
        battler.onAllActionsEnd();
        battler.clearTpbChargeTime();
        this.displayBattlerStatus(battler, true);
    }); // v0.00a - v0.00a

    rewriteFunc("invokeAction", function(subject, target) {
        this._logWindow.push("pushBaseLine");
        // Edited to help plugins alter invoke action behaviors in better ways
        if (NEW._isInvokeCnt.call(this, target)) {
            this.invokeCounterAttack(subject, target);
        } else if (NEW._isInvokeMrf.call(this, target)) {
            this.invokeMagicReflection(subject, target);
        } else this.invokeNormalAction(subject, target);
        //
        subject.setLastTarget(target);
        this._logWindow.push("popBaseLine");
    }); // v0.00a - v0.00a

    rewriteFunc("checkBattleEnd", function() {
        // Added _isBattleEnd to help plugins check if the battle should end
        if (!this._phase) return NEW._isBattleEnd = false;
        if (this.checkAbort()) return NEW._isBattleEnd = true;
        if ($gameParty.isAllDead()) {
            this.processDefeat();
            return NEW._isBattleEnd = true;
        } else if (!$gameTroop.isAllDead()) return NEW._isBattleEnd = false;
        this.processVictory();
        return NEW._isBattleEnd = true;
        //
    }); // v0.00a - v0.00a

    rewriteFunc("processEscape", function() {
        $gameParty.performEscape();
        SoundManager.playEscape();
        // Edited to help plugins alter process escape behaviors in better ways
        const success = NEW._isEscSuc.call(this);
        //
        success ? this.onEscapeSuccess() : this.onEscapeFailure();
        return success;
    }); // v0.00a - v0.00a

    rewriteFunc("onEscapeFailure", function() {
        $gameParty.onEscapeFailure();
        this.displayEscapeFailureMessage();
        // Edited to help plugins alter escape ratio increment in better ways
        this._escapeRatio = NEW._updatedEscRatio.call(this);
        //
        if (!this.isTpb()) this.startTurn();
    }); // v0.00a - v0.00a

    /**
     * The this pointer is BattleManager
     * Nullipotent/Random
     * @author DoubleX @since v0.00a @version v0.00a
     * @returns {boolean} Whether the battle has a preemptive start
     */
    NEW._encounterPreemptive = function() {
        return Math.random() < this.ratePreemptive();
    }; // NEW._encounterPreemptive

    /**
     * The this pointer is BattleManager
     * Nullipotent/Random
     * @author DoubleX @since v0.00a @version v0.00a
     * @returns {boolean} Whether the battle has a surprise start
     */
    NEW._encounterSurprise = function() {
        return Math.random() < this.rateSurprise() && !this._preemptive;
    }; // NEW._encounterSurprise

    /**
     * The this pointer is BattleManager
     * Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @returns {number} The probability of the party escape attempt to succeed
     */
    NEW._newEscRatio = function() {
        return 0.5 * $gameParty.agility() / $gameTroop.agility();
    }; // NEW._newEscRatio

    /**
     * The this pointer is BattleManager
     * Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @returns {Game_Actor?} The actor as the selected one to input actions
     */
    NEW._newCurActor_ = function(forward) {
        const members = $gameParty.battleMembers();
        const iIncrement = forward ? 1 : -1;
        let currentI = members.indexOf(this._currentActor);
        for (;;) {
            currentI += iIncrement;
            const actor = members[currentI];
            if (!actor) return null;
            if (actor.canInput()) return actor;
        }
    }; // NEW._newCurActor_

    /**
     * The this pointer is BattleManager
     * Hotspot/Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {boolean} timeActive - Whether the TPBS time is actually active
     * @returns {boolean} Whether the TPBS frame update should proceed
     */
    NEW._isUpdateTpb = function(timeActive) {
        return this.isTpb() && timeActive;
    }; // NEW._isUpdateTpb

    /**
     * The this pointer is BattleManager
     * Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @enum @returns {pose} The pose of the battler ending executing an action
     */
    NEW._battlerActEndState = function() {
        return this.isTpb() ? "undecided" : "done";
    }; // NEW._battlerActEndState

    /**
     * The this pointer is BattleManager
     * Nullipotent/Random
     * @author DoubleX @since v0.00a @version v0.00a
     * @returns {boolean} Whether the battle should be aborted
     */
    NEW._isInvokeCnt = function(target) {
        return Math.random() < this._action.itemCnt(target);
    }; // NEW._isInvokeCnt

    /**
     * The this pointer is BattleManager
     * Nullipotent/Random
     * @author DoubleX @since v0.00a @version v0.00a
     * @returns {boolean} Whether the battle should be aborted
     */
    NEW._isInvokeMrf = function(target) {
        return Math.random() < this._action.itemMrf(target);
    }; // NEW._isInvokeMrf

    /**
     * The this pointer is BattleManager
     * Nullipotent/Random
     * @author DoubleX @since v0.00a @version v0.00a
     * @returns {boolean} Whether the party escape attempt should succeed
     */
    NEW._isEscSuc = function() {
        return this._preemptive || Math.random() < this._escapeRatio;
    }; // NEW._isEscSuc

    /**
     * The this pointer is BattleManager
     * Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @returns {number} The new party escape attempt success probability
     */
    NEW._updatedEscRatio = function() { return this._escapeRatio + 0.1; };

})(BattleManager, DoubleX_RMMZ.Enhanced_Codebase);

/*----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------
 *    ## Objects
 *----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------
 *    # Edited class: Game_System
 *      - Uses the configurable Graphics fps instead of the constant 60
 *----------------------------------------------------------------------------*/

(($, MZ_EC) => {

    "use strict";

    const klassName = "Game_System", {
        NEW,
        ORIG,
        extendFunc,
        rewriteFunc
    } = MZ_EC.setKlassContainer(klassName, $, MZ_EC);

    /*------------------------------------------------------------------------
     *    New private variables
     *------------------------------------------------------------------------*/
    // {{*}} _enhancedCodebase: The container of everything from other plugins

    extendFunc("initialize", function() {
        ORIG.initialize.call(this);
        // Added to help plugins store all parameter values in game saves
        NEW.storeParams.call(this);
        //
    }); // v0.00a - v0.00a

    rewriteFunc("playtime", function() {
        // Edited to help plugins alter the fps in better ways
        return Math.floor(Graphics.frameCount / Graphics.gameFps);
        //
    }); // v0.00a - v0.00a

    /**
     * Idempotent
     * @author DoubleX @interface @since v0.00a @version v0.00a
     */
    $.loadParamFuncs = function() {
        const pluginParamEntries = Object.entries(this._enhancedCodebase);
        pluginParamEntries.forEach(([containerName, container]) => {
            Object.entries(container).forEach(([param, val]) => {
                // It's to update param functions of other plugins
                NEW.storeParamVal.call(this, containerName, param, val);
                // Even though it does involve redundant container assignments
            });
        });
    }; // $.loadParamFuncs

    /**
     * The this pointer is Game_System.prototype
     * Idempotent
     * @author DoubleX @interface @since v0.00a @version v0.00a
     */
    NEW.storeParams = function() {
        // Map can't be serialized so ordinary objects must be used
        this._enhancedCodebase = {};
        //
    }; // NEW.storeParams

    NEW._TRY_JSON_PARAM = val => {
        try { return JSON.parse(val); } catch (err) { return val; }
    }; // NEW._TRY_JSON_PARAM
    NEW._JSON_PARAM = val => {
        if (!val) return val;
        if (Array.isArray(val)) return val.fastMap(v => {
            return NEW._JSON_PARAM(NEW._TRY_JSON_PARAM(v));
        });
        if (typeof val === "object" || val instanceof Object) {
            return Object.entries(val).reduce((obj, [k, v]) => {
                obj[k] = NEW._JSON_PARAM(NEW._TRY_JSON_PARAM(v));
                return obj;
            }, {});
        }
        const jsonVal = NEW._TRY_JSON_PARAM(val);
        return jsonVal === val ? val : NEW._JSON_PARAM(jsonVal);
    }; // NEW._JSON_PARAM
    NEW._PARSED_PARAMS = params => { // v0.05b+
        Object.entries(params).forEach(([param, val]) => {
            params[param] = NEW._JSON_PARAM(val);
        });
        return params;
    }; // NEW._PARSED_PARAMS
    NEW._RAW_PARAMS = pluginName => {
        // There's no need to cache it as _RAW_PARAMS should only be called once
        const params = PluginManager.parameters(pluginName);
        //
        if (Object.keys(params) <= 0) alert(`Please check if the filename of
                                            ${pluginName} is ${pluginName}`);
        // The original plugin parameter container should never be edited
        return NEW._PARSED_PARAMS(JsonEx.makeDeepCopy(params));
        //
    }; // NEW._RAW_PARAMS
    /**
     * The this pointer is Game_System.prototype
     * Idempotent
     * @author DoubleX @interface @since v0.00a @version v0.00a
     * @param {string} pluginName - The name of the plugin to store parameters
     * @param {string} containerName - The name of the parameter container
     */
    NEW.onStoreParams = function(pluginName, containerName) {
        // Map can't be serialized so ordinary objects must be used
        this._enhancedCodebase[containerName] = {};
        //
        Object.entries(NEW._RAW_PARAMS(pluginName)).forEach(([param, val]) => {
            NEW.storeParamVal.call(this, containerName, param, val);
        });
    }; // NEW.onStoreParams

    /**
     * The this pointer is Game_System.prototype
     * Idempotent
     * @author DoubleX @interface @since v0.00a @version v0.00a
     * @param {string} containerName - The name of the parameter container
     * @enum @param {string} param - The name of parameter to be stored in saves
     * @param {*} val - The value of the parameter to be stored in game saves
     */
    NEW.storeParamVal = function(containerName, param, val) {
        this._enhancedCodebase[containerName][param] = val;
    }; // NEW.storeParamVal

    /**
     * The this pointer is Game_System.prototype
     * Nullipotent
     * @author DoubleX @interface @since v0.00a @version v0.00a
     * @param {string} containerName - The name of the parameter container
     * @enum @param {string} param - The name of parameter to be stored in saves
     * @returns {*} The value of the parameter to be stored in game saves
     */
    NEW.storedParamVal = function(containerName, param) {
        return this._enhancedCodebase[containerName][param];
    }; // NEW.storedParamVal

    MZ_EC.setupGameSystemParamsIOs = (pluginName, containerName) => {

        const { ORIG } = MZ_EC.setKlassContainer(klassName, $, pluginName);
        const EC_GS = MZ_EC[klassName].new, GS = pluginName[klassName];

        const PLUGIN_NAME = pluginName.PLUGIN_NAME;

        MZ_EC.extendFunc(EC_GS, GS, "storeParams", function() {
            ORIG.storeParams.apply(this, arguments);
            // Added to store all parameters of this plugin
            EC_GS.onStoreParams.call(this, PLUGIN_NAME, containerName);
            //
        }); // v0.00a - v0.00a

        const UPPER_CASE_NAME = name => {
            return `${name[0].toUpperCase()}${name.slice(1)}`;
        }; // UPPER_CASE_NAME
        const CMD_NAME = `set${UPPER_CASE_NAME(containerName)}Param`;

        /**
         * Script Call/Idempotent
         * @author DoubleX @interface @since v0.00a @version v0.00a
         * @enum @param {string} param - Name of parameter to be stored in saves
         * @param {*} val - The value of the parameter to be stored in saves
         */
        $[CMD_NAME] = function(param, val) {
            EC_GS.storeParamVal.call(this, containerName, param, val);
        }; // $$[CMD_NAME]

        /**
         * Script Call/Nullipotent
         * @author DoubleX @interface @since v0.00a @version v0.00a
         * @enum @param {string} param - Name of parameter to be stored in saves
         * @returns {*} The value of the parameter to be stored in game saves
         */
        $[`${containerName}Param`] = function(param) {
            return EC_GS.storedParamVal.call(this, containerName, param);
        }; // $[`${containerName}Param`]

        PluginManager.registerCommand(PLUGIN_NAME, CMD_NAME, ({ param, val }) => {
            $gameSystem[CMD_NAME](param, JSON.parse(val));
        });

    }; // MZ_EC.setupGameSystemParamsIOs

})(Game_System.prototype, DoubleX_RMMZ.Enhanced_Codebase);

/*----------------------------------------------------------------------------
 *    # Edited class: Game_Switches
 *      - Helps plugins keep the notetag contents in sync with switch changes
 *----------------------------------------------------------------------------*/

(($, MZ_EC) => {

    "use strict";

    const {
        NEW,
        ORIG,
        extendFunc
    } = MZ_EC.setKlassContainer("Game_Switches", $, MZ_EC);

    NEW._REFRESH_BATTLER = battler => battler.refresh();
    extendFunc("onChange", function() {
        ORIG.onChange.apply(this, arguments);
        // Added to invalidates all caches of all battlers
        MZ_EC.clearAllBattlerNotetagCaches();
        //
    }); // v0.00a - v0.00a

})(Game_Switches.prototype, DoubleX_RMMZ.Enhanced_Codebase);

/*----------------------------------------------------------------------------
 *    # Edited class: Game_Variables
 *      - Helps plugins keep the notetag contents in sync with variable change
 *----------------------------------------------------------------------------*/

(($, MZ_EC) => {

    "use strict";

    const klassName = "Game_Variables", {
        NEW,
        ORIG,
        extendFunc
    } = MZ_EC.setKlassContainer(klassName, $, MZ_EC);

    extendFunc("setValue", function(variableId, value) {
        ORIG.setValue.apply(this, arguments);
        // Added to help plugins store all parameter values in game saves
        NEW.updateDataNotetags.call(this, variableId, value);
        //
    }); // v0.00a - v0.00a

    /**
     * The this pointer is Game_Variables.prototype
     * Idempotent
     * @author DoubleX @interface @since v0.00a @version v0.00a
     * @param {id} varId - The id of the variable to have its values set
     * @param {*} val - The new value of the variable to have its values set
     */
    NEW.updateDataNotetags = function(varId, val) {
        MZ_EC.clearAllBattlerNotetagCaches();
    }; // NEW.updateDataNotetags

    MZ_EC.updateGameVarsDataNotetags = (pluginName, containerName) => {

        const DM = pluginName.DataManager.new;
        const { NEW, ORIG } = MZ_EC.setKlassContainer(klassName, $, pluginName);
        const EC_GV = MZ_EC[klassName].new, GV = pluginName[klassName];

        MZ_EC.extendFunc(EC_GV, GV, "updateDataNotetags", function(varId, val) {
            ORIG.updateDataNotetags.apply(this, arguments);
            // Added to reload all notetag of this plugin to keep script updated
            NEW._updateDataNotetags.call(this, varId, val);
            //
        }); // v0.00a - v0.00a

        /**
         * The this pointer is Game_Variables.prototype
         * Idempotent
         * @author DoubleX @since v0.00a @version v0.00a
         * @param {id} varId - The id of the variable to have its values set
         * @param {*} val - The new value of the variable to have its values set
         */
        NEW._updateDataNotetags = function(varId, val) {
            DM.NOTETAG_DATA_CONTAINER_NAMES.forEach((objType, objName) => {
                const obj = window[objName];
                MZ_EC.updateDataNotetags(obj, containerName, varId, val);
            });
        }; // NEW._updateDataNotetags

    }; // MZ_EC.updateGameVarsDataNotetags

})(Game_Variables.prototype, DoubleX_RMMZ.Enhanced_Codebase);

/*----------------------------------------------------------------------------
 *    # Edited class: Game_Timer
 *      - Uses the configurable Graphics fps instead of the constant 60
 *----------------------------------------------------------------------------*/

(($, MZ_EC) => {

    "use strict";

    const {
        NEW,
        rewriteFunc
    } = MZ_EC.setKlassContainer("Game_Timer", $, MZ_EC);

    rewriteFunc("update", function(sceneActive) {
        // Edited to help plugins alter the update behaviors in better ways
        if (!NEW._isActive.call(this, sceneActive)) return;
        NEW._updateWhenActive.call(this);
        //
    }); // v0.00a - v0.00a

    rewriteFunc("seconds", function() {
        // Edited to help plugins alter the fps in better ways
        return Math.floor(this._frames / Graphics.gameFps);
        //
    }); // v0.00a - v0.00a

    /**
     * The this pointer is Game_Timer.prototype
     * Hotspot/Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @returns {boolean} Whether the timer's still active
     */
    NEW._isActive = function(sceneActive) {
        return sceneActive && this._working && this._frames > 0;
    }; // NEW._isActive

    /**
     * The this pointer is Game_Timer.prototype
     * Hotspot
     * @author DoubleX @since v0.00a @version v0.00a
     */
    NEW._updateWhenActive = function() {
        this._frames--;
        if (this._frames === 0) this.onExpire();
    }; // NEW._updateWhenActive

})(Game_Timer.prototype, DoubleX_RMMZ.Enhanced_Codebase);

/*----------------------------------------------------------------------------
 *    # Edited class: Game_Action
 *      - Improves performance and code quality and fixes bugs for actions
 *----------------------------------------------------------------------------*/

(($, MZ_EC) => {

    "use strict";

    const proto = $.prototype;
    const {
        NEW,
        rewriteFunc
    } = MZ_EC.setKlassContainer("Game_Action", proto, MZ_EC);

    rewriteFunc("decideRandomTarget", function() {
        // Edited to help plugins alter decide random target in better ways
        const target = NEW._randomTarget.call(this);
        //
        target ? this._targetIndex = target.index() : this.clear();
    }); // v0.00a - v0.00a

    rewriteFunc("makeTargets", function() {
        // Edited to help plugins alter make targets in better ways
        return this.repeatTargets(NEW._madeRawTargets.call(this));
        //
    }); // v0.00a - v0.00a

    rewriteFunc("confusionTarget", function() {
        switch (this.subject().confusionLevel()) {
            // Edited to help plugins to alter confusion target in better ways
            case 1: return NEW._randomOpponentTarget.call(this);
            case 2: return NEW._confusionAnyTarget.call(this);
            default: return NEW._randomFriendTarget.call(this);
            //
        }
    }); // v0.00a - v0.00a

    rewriteFunc("targetsForDead", function(unit) {
        // Edited to help plugins alter targets for dead behaviors in better way
        if (this.isForOne()) return NEW._targetForOneDead.call(this, unit);
        //
        return unit.deadMembers();
    }); // v0.00a - v0.00a

    rewriteFunc("targetsForAlive", function(unit) {
        // Edited to help plugins alter targets for alive in better ways
        if (this.isForOne()) return NEW._targetForOneAlive.call(this, unit);
        //
        return unit.aliveMembers();
    }); // v0.00a - v0.00a

    rewriteFunc("targetsForDeadAndAlive", function(unit) {
        // Edited to help plugins alter targets for dead and alive in better way
        if (this.isForOne()) {
            return NEW._targetForOneDeadAndAlive.call(this, unit);
        } else return unit.members();
        //
    }); // v0.00a - v0.00a

    rewriteFunc("evaluate", function() {
        // Edited to help plugins alter evaluate behaviors in better ways
        const value = NEW._evalBaseVal.call(this) * this.numRepeats();
        //
        return value > 0 ? value + Math.random() : value;
    }); // v0.00a - v0.00a

    rewriteFunc("evaluateWithTarget", function(target) {
        /** @todo Figures out whther returning undefined's intentional here */
        if (!this.isHpEffect()) return;
        //
        // Edited to help plugins fix autobattle leak damage formula side effect
        const value = NEW._evalDamageWithoutCri.call(this, target);
        //
        if (this.isForOpponent()) return value / Math.max(target.hp, 1);
        return Math.min(-value, target.mhp - target.hp) / target.mhp;
    }); // v0.00a - v0.00a

    rewriteFunc("apply", function(target) {
        const result = target.result();
        this.subject().clearResult();
        result.clear();
        result.used = this.testApply(target);
        // Edited to help plugins alter apply behaviors in better ways
        result.missed = NEW._isMissed.call(this, target);
        result.evaded = NEW._isEvaded.call(this, target);
        //
        [result.physical, result.drain] = [this.isPhysical(), this.isDrain()];
        // Edited to help plugins alter apply behaviors in better ways
        if (result.isHit()) NEW._applyHit.call(this, target);
        //
        this.updateLastTarget(target);
    }); // v0.00a - v0.00a

    rewriteFunc("makeDamageValue", function(target, critical) {
        const baseValue = this.evalDamageFormula(target);
        // Edited to try up codes essentially being the identical knowledge
        return NEW._execDamageVal.call(this, target, critical, baseValue);
        //
    }); // v0.00a - v0.00a

    rewriteFunc("evalDamageFormula", function(target) {
        // Edited to help plugins alter eval damage formula in better ways
        try {
            return NEW._evalDamageFormulaWithoutRescue.call(this, target);
        } catch (e) {
            NEW._onEvalDamageFormulaErr.call(this, e);
            return 0;
        }
        //
    }); // v0.00a - v0.00a

    rewriteFunc("itemEffectRecoverHp", function(target, effect) {
        // Edited to help plugins alter item effect recover hp in better ways
        const value = NEW._recoveredHp.call(this, target, effect);
        //
        if (value === 0) return;
        target.gainHp(value);
        this.makeSuccess(target);
    }); // v0.00a - v0.00a

    rewriteFunc("itemEffectRecoverMp", function(target, effect) {
        // Edited to help plugins alter item effect recover mp in better ways
        const value = NEW._recoveredMp.call(this, target, effect);
        //
        if (value === 0) return;
        target.gainMp(value);
        this.makeSuccess(target);
    }); // v0.00a - v0.00a

    rewriteFunc("itemEffectGainTp", function(target, effect) {
        // Edited to help plugins alter item effect gain tp in better ways
        const value = NEW._gainedTp.call(this, target, effect);
        //
        if (value === 0) return;
        target.gainTp(value);
        this.makeSuccess(target);
    }); // v0.00a - v0.00a

    rewriteFunc("itemEffectAddAttackState", function(target, effect) {
        this.subject().attackStates().forEach(stateId => {
            // Edited to help plugins alter item effect add state in better ways
            if (!NEW._isAddAtkState.call(this, target, effect, stateId)) return;
            //
            target.addState(stateId);
            this.makeSuccess(target);
        });
    }); // v0.00a - v0.00a

    rewriteFunc("itemEffectAddNormalState", function(target, effect) {
        // Edited to help plugins alter item effect add state in better ways
        if (!NEW._isAddNormState.call(this, target, effect)) return;
        //
        target.addState(effect.dataId);
        this.makeSuccess(target);
    }); // v0.00a - v0.00a

    rewriteFunc("itemEffectRemoveState", function(target, effect) {
        // Edited to help plugins alter item effect add debuff in better ways
        if (!NEW._isRemoveState.call(this, target, effect)) return;
        //
        target.removeState(effect.dataId);
        this.makeSuccess(target);
    }); // v0.00a - v0.00a

    rewriteFunc("itemEffectAddDebuff", function(target, effect) {
        // Edited to help plugins alter item effect add debuff in better ways
        if (!NEW._isAddDebuff.call(this, target, effect)) return;
        //
        target.addDebuff(effect.dataId, effect.value1);
        this.makeSuccess(target);
    }); // v0.00a - v0.00a

    rewriteFunc("applyItemUserEffect", function() {
        // Edited to help plugins alter apply item user effect in better ways
        this.subject().gainSilentTp(NEW._gainedSilentTp.call(this));
        //
    }); // v0.00a - v0.00a

    $.IS_SHOW_DAMAGE_FORMULA_ERRS = $.IS_CACHE_DAMAGE_FORMULA = false;
    $.NO_SIDE_EFFECT_DAMAGE_FORMULA_REGEX = new RegExp(".*[};] *", "gim");

    /**
     * The this pointer is Game_Action.prototype
     * Nullipotent
     * @author DoubleX @interface @since v0.00a @version v0.00a
     * @returns {string} The damage formula with the side effect parts removed
     */
    proto.damageFormulaWithoutSideEffects = function() {
        const regex = $.NO_SIDE_EFFECT_DAMAGE_FORMULA_REGEX;
        return this.item().damage.formula.replace(regex, "");
    }; // proto.damageFormulaWithoutSideEffects

    /**
     * The this pointer is Game_Action.prototype
     * Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @returns {Game_Battler} The randomnly decided target for this action
     */
    NEW._randomTarget = function() {
        if (this.isForDeadFriend()) {
            return NEW._randomDeadFriendTarget.call(this);
        } else if (this.isForFriend()) {
            return NEW._randomFriendTarget.call(this);
        } return NEW._randomOpponentTarget.call(this);
    }; // NEW._randomTarget

    /**
     * The this pointer is Game_Action.prototype
     * Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @returns {Game_Battler} The randomnly decided target for this action
     */
    NEW._randomDeadFriendTarget = function() {
        return this.friendsUnit().randomDeadTarget();
    }; // NEW._randomDeadFriendTarget

    /**
     * The this pointer is Game_Action.prototype
     * Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @returns {Game_Battler} The randomnly decided target for this action
     */
    NEW._randomFriendTarget = function() {
        return this.friendsUnit().randomTarget();
    }; // NEW._randomFriendTarget

    /**
     * The this pointer is Game_Action.prototype
     * Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @returns {Game_Battler} The randomnly decided target for this action
     */
    NEW._randomOpponentTarget = function() {
        return this.opponentsUnit().randomTarget();
    }; // NEW._randomOpponentTarget

    /**
     * The this pointer is Game_Action.prototype
     * Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     */
    NEW._madeRawTargets = function() {
        if (NEW._isForConfused.call(this)) return [this.confusionTarget()];
        if (this.isForEveryone()) return this.targetsForEveryone();
        if (this.isForOpponent()) return this.targetsForOpponents();
        if (this.isForFriend()) return this.targetsForFriends();
        return [];
    }; // NEW._madeRawTargets

    /**
     * The this pointer is Game_Action.prototype
     * Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @returns {boolean} Whether the action's for confused targets
     */
    NEW._isForConfused = function() {
        return !this._forcing && this.subject().isConfused();
    }; // NEW._isForConfused

    NEW._IS_CONFUSION_OPPONENTS_TARGET = () => Math.randomInt(2) === 0;
    /**
     * The this pointer is Game_Action.prototype
     * Nullipotent/Random
     * @author DoubleX @since v0.00a @version v0.00a
     * @returns {[Game_Battler]} The list of confusion targets
     */
    NEW._confusionAnyTarget = function() {
        if (NEW._IS_CONFUSION_OPPONENTS_TARGET()) {
            return NEW._randomOpponentTarget.call(this);
        } else return NEW._randomFriendTarget.call(this);
    }; // NEW._confusionAnyTarget

    /**
     * The this pointer is Game_Action.prototype
     * Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {Game_Unit} unit - The list of battlers on the same side
     * @returns {[Game_Battler]} The list of dead targets
     */
    NEW._targetForOneDead = function(unit) {
        return [unit.smoothDeadTarget(this._targetIndex)];
    }; // NEW._targetForOneDead

    /**
     * The this pointer is Game_Action.prototype
     * Nullipotent/Random
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {Game_Unit} unit - The list of battlers on the same side
     * @returns {[Game_Battler]} The list of alive targets
     */
    NEW._targetForOneAlive = function(unit) {
        if (this._targetIndex < 0) return [unit.randomTarget()];
        return [unit.smoothTarget(this._targetIndex)];
    }; // NEW._targetForOneAlive

    /**
     * The this pointer is Game_Action.prototype
     * Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {Game_Unit} unit - The list of battlers on the same side
     * @returns {[Game_Battler]} The list of dead and alive targets
     */
    NEW._targetForOneDeadAndAlive = function(unit) {
        return [unit.members()[this._targetIndex]];
    }; // NEW._targetForOneDeadAndAlive

    /**
     * The this pointer is Game_Action.prototype
     * Nullipotent/Random
     * @author DoubleX @since v0.00a @version v0.00a
     * @returns {number} The evaluated base damage this action
     */
    NEW._evalBaseVal = function() {
        const targets = this.itemTargetCandidates();
        if (this.isForAll()) return NEW._evalBaseValForAll.call(this, targets);
        return NEW._evalBaseValForOne.call(this, targets);
    }; // NEW._evalBaseVal

    /**
     * The this pointer is Game_Action.prototype
     * Nullipotent/Random
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {[Game_Battler]} targets - The list of targets to be evaluated
     * @returns {number} The accumulated evaluated base damage of all targets
     */
    NEW._evalBaseValForAll = function(targets) {
        return targets.reduce((value, target) => {
            return value += this.evaluateWithTarget(target);
        }, 0);
    }; // NEW._evalBaseValForAll

    /**
     * The this pointer is Game_Action.prototype
     * Random
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {[Game_Battler]} targets - The list of targets to be evaluated
     * @returns {number} The highest evaluated base damage with target index set
     */
    NEW._evalBaseValForOne = function(targets) {
        let value = 0;
        targets.forEach(target => {
            const targetValue = this.evaluateWithTarget(target);
            if (targetValue <= value) return;
            value = targetValue;
            this._targetIndex = target.index();
        });
        return value;
    }; // NEW._evalBaseValForOne

    /**
     * The this pointer is Game_Action.prototype
     * Nullipotent/Random
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {Game_Battler} target - The target of the action to be evaluated
     * @returns {number} The evaluated damage from applying the action to target
     */
    NEW._evalDamageWithoutCri = function(target) {
        const baseValue =
                NEW._tryEvalDamageFormulaWithoutSideEffects.call(this, target);
        return NEW._execDamageVal.call(this, target, false, baseValue);
    }; // NEW._evalDamageWithoutCri

    /**
     * The this pointer is Game_Action.prototype
     * Nullipotent/Random
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {Game_Battler} target - The target of the action to be evaluated
     * @returns {number} The evaluated damage from applying the action to target
     */
    NEW._tryEvalDamageFormulaWithoutSideEffects = function(target) {
        // Edited to help plugins alter eval damage formula in better ways
        try {
            return NEW._evalDamageFormulaWithoutSideEffectsRescue.call(
                    this, target);
        } catch (e) {
            NEW._onEvalDamageFormulaErr.call(this, e);
            return 0;
        }
        //
    }; // NEW._tryEvalDamageFormulaWithoutSideEffects

    /**
     * The this pointer is Game_Action.prototype
     * Nullipotent/Random
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {Game_Battler} target - The target of the action to be evaluated
     * @returns {number} The evaluated damage from applying the action to target
     */
    NEW._evalDamageFormulaWithoutSideEffectsRescue = function(target) {
        /** @todo Figures out if anyone will use sign in damage formula */
        const sign = [3, 4].includes(this.item().damage.type) ? -1 : 1;
        //
        const damageFormula = this.damageFormulaWithoutSideEffects(), value =
                NEW._evalDamageFormula_.call(this, target, sign, damageFormula);
        if (!isNaN(value)) return Math.max(value, 0) * sign;
        // Edited to help RM users detect and fix damage formula errors
        throw new Error(`${damageFormula} doesn't return a number!`);
        //
    }; // NEW._evalDamageFormulaWithoutSideEffectsRescue

    /**
     * The this pointer is Game_Action.prototype
     * Nullipotent/Random
     * @author DoubleX @since v0.00a @version v0.00a
     * @returns {boolean} Whether the action's missed the target
     */
    NEW._isMissed = function(target) {
        return target.result().used && Math.random() >= this.itemHit(target);
    }; // NEW._isMissed

    /**
     * The this pointer is Game_Action.prototype
     * Nullipotent/Random
     * @author DoubleX @since v0.00a @version v0.00a
     * @returns {boolean} Whether the action's evaded by the target
     */
    NEW._isEvaded = function(target) {
        return !target.result().missed && Math.random() < this.itemEva(target);
    }; // NEW._isEvaded

    /**
     * The this pointer is Game_Action.prototype
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {Game_Battler} target - The target to be hit by the applied action
     */
    NEW._applyHit = function(target) {
        if (NEW._isApplyDamage.call(this)) NEW._applyDamage.call(this, target);
        this.item().effects.forEach(effect => {
            this.applyItemEffect(target, effect);
        });
        this.applyItemUserEffect(target);
    }; // NEW._applyHit

    /**
     * The this pointer is Game_Action.prototype
     * Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {Game_Battler} target - The target to be hit by the applied action
     * @returns {boolean} Whether the applied action has damages
     */
    NEW._isApplyDamage = function() { return this.item().damage.type > 0; };

    /**
     * The this pointer is Game_Action.prototype
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {Game_Battler} target - The target to be hit by the applied action
     */
    NEW._applyDamage = function(target) {
        const result = target.result();
        result.critical = NEW._isCritical.call(this, target);
        const value = this.makeDamageValue(target, result.critical);
        this.executeDamage(target, value);
    }; // _applyDamage

    /**
     * The this pointer is Game_Action.prototype
     * Nullipotent/Random
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {Game_Battler} target - The target to be hit by the applied action
     * @returns {boolean} Whether the applied action damage's critical
     */
    NEW._isCritical = function(target) {
        return Math.random() < this.itemCri(target);
    }; // NEW._isCritical

    /**
     * The this pointer is Game_Action.prototype
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {Game_Battler} target - The target to have damage formula applied
     */
    NEW._evalDamageFormulaWithoutRescue = function(target) {
        const item = this.item();
        /** @todo Figures out if anyone will use sign in damage formula */
        const sign = [3, 4].includes(item.damage.type) ? -1 : 1;
        //
        const damageFormula = item.damage.formula, value =
                NEW._evalDamageFormula_.call(this, target, sign, damageFormula);
        if (!isNaN(value)) return Math.max(value, 0) * sign;
        // Edited to help RM users detect and fix damage formula errors
        throw new Error(`${damageFormula} doesn't return a number!`);
        //
    }; // NEW._evalDamageFormulaWithoutRescue

    NEW._cachedScripts = new Map();
    /**
     * The this pointer is Game_Action.prototype
     * Idempotent
     * @author DoubleX @interface @since v0.00a @version v0.00a
     * @param {Game_Battler} b - The target to have damage formula applied
     * @enum @param {number} sign - Whether it's damage or recovery(1/-1)
     * @enum @param {string} damageFormula - The damage formumal string data
     * @returns {number?} The evaluated applied damage of skill/item to target
     */
    NEW._evalDamageFormula_ = function(b, sign, damageFormula) {
        const item = this.item();
        const [a, v] = [this.subject(), $gameVariables._data];
        if (!$.IS_CACHE_DAMAGE_FORMULA) return eval(damageFormula);
        // It's to avoid 1st call being eval and subsequent ones being functions
        if (!NEW._cachedScripts.has(damageFormula)) {
            const newDamageFormulaFunc =
                  new Function("item", "a", "b", "v", "sign", damageFormula);
            NEW._cachedScripts.set(damageFormula, newDamageFormulaFunc);
        }
        const damageFormulaFunc = NEW._cachedScripts.get(damageFormula);
        return damageFormulaFunc.call(this, item, a, b, v, sign);
        //
    }; // NEW._evalDamageFormula_

    /**
     * The this pointer is Game_Action.prototype
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {Error} e - The error when failing to evaluate the damage formula
     */
    NEW._onEvalDamageFormulaErr = function(e) {
        // Edited to help RM users detect and fix damage formula errors
        if (!$.IS_SHOW_DAMAGE_FORMULA_ERRS) return;
        const item = this.item();
        console.warn(`${this._item._dataClass} id:`, item.id);
        console.warn("damage formula:", item.damage.formula);
        console.warn("error:", e.toString());
        console.warn(e.stack);
        //
    }; // NEW._onEvalDamageFormulaErr

    /**
     * The this pointer is Game_Action.prototype
     * Nullipotent/Random
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {Game_Battler} target - The target of the action to be evaluated
     * @param {boolean} critical - Whether the target takes a critical hit
     * @param {number} baseValue - Base damage from applying action to target
     * @returns {number} The executed damage from applying the action to target
     */
    NEW._execDamageVal = function(target, critical, baseValue) {
        let value = baseValue * this.calcElementRate(target);
        if (this.isPhysical()) value *= target.pdr;
        if (this.isMagical()) value *= target.mdr;
        if (baseValue < 0) value *= target.rec;
        if (critical) value = this.applyCritical(value);
        value = this.applyVariance(value, this.item().damage.variance);
        return Math.round(this.applyGuard(value, target));
    }; // NEW._execDamageVal

    /**
     * The this pointer is Game_Action.prototype
     * Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {Game_Battler} target - The specified target to have hp recovered
     * @param {ItemEffect} effect - The specified item effect applied to target
     * @returns {number} Amount of hp recovery applied to the specified target
     */
    NEW._recoveredHp = function(target, effect) {
        const value = (target.mhp * effect.value1 + effect.value2) * target.rec;
        return Math.floor(this.isItem() ? value * this.subject().pha : value);
    }; // NEW._recoveredHp

    /**
     * The this pointer is Game_Action.prototype
     * Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {Game_Battler} target - The specified target to have mp recovered
     * @param {ItemEffect} effect - The specified item effect applied to target
     * @returns {number} Amount of mp recovery applied to the specified target
     */
    NEW._recoveredMp = function(target, effect) {
        const value = (target.mmp * effect.value1 + effect.value2) * target.rec;
        return Math.floor(this.isItem() ? value * this.subject().pha : value);
    }; // NEW._recoveredMp

    /**
     * The this pointer is Game_Action.prototype
     * Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {Game_Battler} target - The specified target to have tp gained
     * @param {ItemEffect} effect - The specified item effect applied to target
     * @returns {number} The amount of tp gain applied to the specified target
     */
    NEW._gainedTp = function(target, effect) {
        // The arugment target's still passed to be used by other plugins
        return Math.floor(effect.value1);
        //
    }; // NEW._gainedTp

    /**
     * The this pointer is Game_Action.prototype
     * Nullipotent/Random
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {Game_Battler} target - The specified target to have state added
     * @param {ItemEffect} effect - The specified item effect applied to target
     * @param {id} stateId - The id of the specified attack state to be added
     * @returns {boolean} Whether the attack state should be added to the target
     */
    NEW._isAddAtkState = function(target, effect, stateId) {
        /** @todo Figures out whether it's still right for certain hit attack */
        const chance = effect.value1 * target.stateRate(stateId);
        //
        const atkStatesRate = this.subject().attackStatesRate(stateId);
        const lukEffectRate = this.lukEffectRate(target);
        return Math.random() < chance * atkStatesRate * lukEffectRate;
    }; // NEW._isAddAtkState

    /**
     * The this pointer is Game_Action.prototype
     * Nullipotent/Random
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {Game_Battler} target - The specified target to have state added
     * @param {ItemEffect} effect - The specified item effect applied to target
     * @returns {boolean} Whether the normal state should be added to the target
     */
    NEW._isAddNormState = function(target, effect) {
        const chance = NEW._addNormStateChance.call(this, target, effect);
        return Math.random() < chance;
    }; // NEW._isAddNormState

    /**
     * The this pointer is Game_Action.prototype
     * Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {Game_Battler} target - The specified target to have state added
     * @param {ItemEffect} effect - The specified item effect applied to target
     * @returns {number} Chance of the normal state to be added to the target
     */
    NEW._addNormStateChance = function(target, effect) {
        const chance = effect.value1;
        if (this.isCertainHit()) return chance;
        const stateRate = target.stateRate(effect.dataId);
        const lukEffectRate = this.lukEffectRate(target);
        return chance * stateRate * lukEffectRate;
    }; // NEW._addNormStateChance

    /**
     * The this pointer is Game_Action.prototype
     * Nullipotent/Random
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {Game_Battler} target - The specified target to have state removed
     * @param {ItemEffect} effect - The specified item effect applied to target
     * @returns {boolean} Whether the state should be removed from the target
     */
    NEW._isRemoveState = function(target, effect) {
        // The arugment target's still passed to be used by other plugins
        return Math.random() < effect.value1;
        //
    }; // NEW._isRemoveState

    /**
     * The this pointer is Game_Action.prototype
     * Nullipotent/Random
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {Game_Battler} target - The specified target to have debuff added
     * @param {ItemEffect} effect - The specified item effect applied to target
     * @returns {boolean} Whether the debuff should be added to the target
     */
    NEW._isAddDebuff = function(target, effect) {
        const lukEffectRate = this.lukEffectRate(target);
        Math.random() < target.debuffRate(effect.dataId) * lukEffectRate;
    }; // NEW._isAddDebuff

    /**
     * The this pointer is Game_Action.prototype
     * Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @returns {number} The new silent tp applied to this action subject
     */
    NEW._gainedSilentTp = function() {
        return Math.floor(this.item().tpGain * this.subject().tcr);
    }; // NEW._gainedSilentTp

})(Game_Action, DoubleX_RMMZ.Enhanced_Codebase);

/*----------------------------------------------------------------------------
 *    # Edited class: Game_BattlerBase
 *      - Improves code quality and adds some new battler APIs
 *----------------------------------------------------------------------------*/

(($, MZ_EC) => {

    "use strict";

    const {
        NEW,
        rewriteFunc
    } = MZ_EC.setKlassContainer("Game_BattlerBase", $, MZ_EC);

    rewriteFunc("resetStateCounts", function(stateId) {
        // Edited to help plugins alter reset state counts in better ways
        this._stateTurns[stateId] = NEW._newStateCounts.call(this, stateId);
        //
    }); // v0.00a - v0.00a

    rewriteFunc("updateStateTurns", function() {
        // Edited to help plugins alter update state turns in better ways
        this._states.forEach(NEW._updateStateTurn, this);
        //
    }); // v0.00a - v0.00a

    rewriteFunc("updateBuffTurns", function() {
        // Edited to help plugins alter update buff turns in better ways
        this._buffTurns.forEach((buffTurn, i) => {
            NEW._updateBuffTurn.call(this, i);
        });
        //
    }); // v0.00a - v0.00a

    rewriteFunc("updateBuffTurns", function(buffLevel, paramId) {
        // Edited to help plugins alter buff incon index in better ways
        if (buffLevel > 0) {
            return NEW._positiveBuffIconIndex.call(this, buffLevel, paramId);
        } else if (buffLevel < 0) {
            return NEW._negativeBuffIconIndex.call(this, buffLevel, paramId);
        } else return 0;
        //
    }); // v0.00a - v0.00a

    rewriteFunc("updateBuffTurns", function() {
        // Edited to help plugins alter is dying behaviors in better ways
        return this.isAlive() && NEW._isLowHp.call(this);
        //
    }); // v0.00a - v0.00a

    rewriteFunc("sortStates", function() {
        // Edited to help plugins alter sort states behaviors in better ways
        this._states.sort(NEW._sortState, this);
        //
    }); // v0.00a - v0.00a

    rewriteFunc("addNewState", function(stateId) {
        if (stateId === this.deathStateId()) this.die();
        const wasRestricted = this.isRestricted();
        this._states.push(stateId);
        this.sortStates();
        const isRestricted = this.isRestricted();
        if (!wasRestricted && isRestricted) this.onRestrict();
        // Added to help plugins listen to the unrestrict events
        if (wasRestricted && !isRestricted) this.onUnrestrict();
        //
    }); // v0.00a - v0.00a

    /**
     * @author DoubleX @interface @since v0.00a @version v0.00a
     */
    $.onUnrestrict = function() {};

    /**
     * The this pointer is Game_BattlerBase.prototype
     * Nullipotent/Random
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {id} stateId - The id of the state to have its turn count reset
     * @returns {number} The reset state count of the state with the state id
     */
    NEW._newStateCounts = function(stateId) {
        const { maxTurns, minTurns } = $dataStates[stateId];
        return minTurns + Math.randomInt(1 + Math.max(maxTurns - minTurns, 0));
    }; // NEW._newStateCounts

    /**
     * The this pointer is Game_BattlerBase.prototype
     * Updates the turn counter of the state with the specified state id
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {id} stateId - The id of the state to have its turn count updated
     */
    NEW._updateStateTurn = function(stateId) {
        if (this._stateTurns[stateId] > 0) this._stateTurns[stateId]--;
    }; // NEW._updateStateTurn

    /**
     * The this pointer is Game_BattlerBase.prototype
     * Updates the turn counter of the buff with the specified parameter id
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {index} paramId - Param id of the buff to have its turn updated
     */
    NEW._updateBuffTurn = function(paramId) {
        if (this._buffTurns[paramId] > 0) this._buffTurns[paramId]--;
    }; // NEW._updateBuffTurn

    /**
     * The this pointer is Game_BattlerBase.prototype
     * Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {number} bufflevel - The current buff level of this battler
     * @param {index} paramId - The param id of the current buff of this battler
     * @returns {index} The icon index of the current buff of this battler
     */
    NEW._positiveBuffIconIndex = function(buffLevel, paramId) {
        const iconStart = Game_BattlerBase.ICON_BUFF_START;
        return iconStart + (buffLevel - 1) * 8 + paramId;
    }; // NEW._positiveBuffIconIndex

    /**
     * The this pointer is Game_BattlerBase.prototype
     * Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {number} bufflevel - The current debuff level of this battler
     * @param {index} paramId - Param id of the current debuff of this battler
     * @returns {index} The icon index of the current debuff of this battler
     */
    NEW._negativeBuffIconIndex = function(buffLevel, paramId) {
        const iconStart = Game_BattlerBase.ICON_DEBUFF_START;
        return iconStart + (-buffLevel - 1) * 8 + paramId;
    }; // NEW._negativeBuffIconIndex

    /**
     * The this pointer is Game_BattlerBase.prototype
     * Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @returns {boolean} Whether the battler's current hp's considered as low
     */
    NEW._isLowHp = function() { return this._hp < this.mhp / 4; };

    /**
     * The this pointer is Game_BattlerBase.prototype
     * Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {id} damage - Amount of damage right before applying critical
     * @returns {number} State sorting direction(-ve: ascending/+ve: descending)
     */
    NEW._sortState = function(a, b) {
        const [p1, p2] = [$dataStates[a].priority, $dataStates[b].priority];
        return p1 !== p2 ? p2 - p1 : a - b;
    }; // NEW._sortState

})(Game_BattlerBase.prototype, DoubleX_RMMZ.Enhanced_Codebase);

/*----------------------------------------------------------------------------
 *    # Edited class: Game_Battler
 *      - Improves code quality
 *----------------------------------------------------------------------------*/

(($, MZ_EC) => {

    "use strict";

    const $$ = Game_BattlerBase.prototype, {
        NEW,
        ORIG,
        extendFunc,
        rewriteFunc
    } = MZ_EC.setKlassContainer("Game_Battler", $, MZ_EC);

    extendFunc("refresh", function() {
        ORIG.refresh.apply(this, arguments);
        // Edited to ensures the battler notetags will return updated results
        MZ_EC.clearBattlerNotetagCache(this);
        //
    }); // v0.00a - v0.00a

    rewriteFunc("applyTpbPenalty", function() {
        this._tpbState = "charging";
        // Edited to help plugins alter apply tpb penalty in better ways
        this._tpbChargeTime = NEW._tpbChargeTimeWithPenalty.call(this);
        //
    }); // v0.00a - v0.00a

    rewriteFunc("initTpbChargeTime", function(advantageous, disadvantageous) {
        this._tpbState = "charging";
        // Edited to help plugins alter init tpb charge time in better ways
        this._tpbChargeTime = NEW._initializedTpbChargeTime.call(
                this, advantageous, disadvantageous);
        //
    }); // v0.00a - v0.00a

    rewriteFunc("updateTpb", function() {
        // Edited to help plugins alter update tpb behaviors in better ways
        if (this.canMove()) NEW._updateTpbWhenMovable.call(this);
        //
        if (this.isAlive()) this.updateTpbIdleTime();
    }); // v0.00a - v0.00a

    rewriteFunc("updateTpbChargeTime", function() {
        // Edited to help plugins alter update tpb charge time in better ways
        if (this.isTpbCharging()) NEW._onUpdateTpbChargeTime.call(this);
        //
    }); // v0.00a - v0.00a

    rewriteFunc("updateTpbCastTime", function() {
        // Edited to help plugins alter update tpb cast time in better ways
        if (this.isTpbCasting()) NEW._onUpdateTpbCastTime.call(this);
        //
    }); // v0.00a - v0.00a

    rewriteFunc("updateTpbAutoBattle", function() {
        // Edited to help plugins alter update tpb auto battle in better ways
        if (NEW._isMakeAutoTpbActs.call(this)) this.makeTpbActions();
        //
    }); // v0.00a - v0.00a

    rewriteFunc("updateTpbIdleTime", function() {
        // Edited to help plugins alter update tpb idle time in better ways
        if (this.isTpbIdle()) NEW._onUpdateTpbIdleTime.call(this);
        //
    }); // v0.00a - v0.00a

    rewriteFunc("tpbRequiredCastTime", function() {
        // Edited to help plugins alter tpb required case time in better ways
        return Math.sqrt(NEW._tpbCastDelay.call(this)) / this.tpbSpeed();
        //
    }); // v0.00a - v0.00a

    rewriteFunc("makeTpbActions", function() {
        this.makeActions();
        if (this.canInput()) return this.setActionState("undecided");
        // Edited to help plugins alter make tpb actions in better ways
        NEW._onAutoInputTpbActs.call(this);
        //
    }); // v0.00a - v0.00a

    rewriteFunc("addState", function(stateId) {
        // Edited to help plugins alter add state behaviors in better ways
        if (this.isStateAddable(stateId)) NEW._onAddState.call(this, stateId);
        //
    }); // v0.00a - v0.00a

    rewriteFunc("onRestrict", function() {
        $$.onRestrict.call(this);
        this.clearTpbChargeTime();
        this.clearActions();
        // Edited to help plugins alter on restrict behaviors in better ways
        this.states().forEach(NEW._removeStateByRestriction, this);
        //
    }); // v0.00a - v0.00a

    rewriteFunc("removeState", function(stateId) {
        // Edited to help plugins alter remove state behaviors in better ways
        if (!this.isStateAffected(stateId)) return;
        NEW._onRemoveState.call(this, stateId);
        //
    }); // v0.00a - v0.00a

    rewriteFunc("addBuff", function(paramId, turns) {
        // Edited to help plugins alter add buff behaviors in better ways
        if (this.isAlive()) NEW._onAddBuff.call(this, paramId, turns);
        //
    }); // v0.00a - v0.00a

    rewriteFunc("addDebuff", function(paramId, turns) {
        // Edited to help plugins alter add debuff behaviors in better ways
        if (this.isAlive()) NEW._onAddDebuff.call(this, paramId, turns);
        //
    }); // v0.00a - v0.00a

    rewriteFunc("removeBuff", function(paramId) {
        // Edited to help plugins alter remove buff behaviors in better ways
        if (!NEW._isRemoveBuff.call(this, paramId)) return;
        NEW._onRemoveBuff.call(this, paramId);
        //
    }); // v0.00a - v0.00a

    rewriteFunc("removeBattleStates", function() {
        // Edited to help plugins alter remove battle states in better ways
        this.states().forEach(NEW._removeBattleState, this);
        //
    }); // v0.00a - v0.00a

    rewriteFunc("removeStatesAuto", function(timing) {
        // Edited to help plugins alter remove states auto in better ways
        this.states().forEach(state => {
            NEW._removeStateAuto.call(this, timing, state);
        });
        //
    }); // v0.00a - v0.00a

    rewriteFunc("removeBuffsAuto", function() {
        for (let i = 0, l = this.buffLength(); i < l; i++) {
            // Edited to help plugins alter remove buffs auto in better ways
            NEW._removeBuffAuto.call(this, i);
            //
        }
    }); // v0.00a - v0.00a

    rewriteFunc("removeStatesByDamage", function() {
        // Edited to help plugins remove states by damage in better ways
        this.states().forEach(NEW._removeStateByDamage, this);
        //
    }); // v0.00a - v0.00a

    rewriteFunc("makeActions", function() {
        this.clearActions();
        // Edited to help plugins alter make actions behaviors in better ways
        if (this.canMove()) NEW._makeActsWhenMovable.call(this);
        //
    }); // v0.00a - v0.00a

    rewriteFunc("forceAction", function(skillId, targetIndex) {
        this.clearActions();
        // Edited to help plugins alter force action behaviors in better ways
        this._actions.push(NEW._forcedAct.call(this, skillId, targetIndex));
        //
    }); // v0.00a - v0.00a

    rewriteFunc("initTp", function() {
        // Edited to help plugins alter init tp behaviors in better ways
        this.setTp(NEW._initializedTp.call(this));
        //
    }); // v0.00a - v0.00a

    rewriteFunc("chargeTpByDamage", function(damageRate) {
        // Edited to help plugins alter charge tp by damage in better ways
        this.gainSilentTp(NEW._chargedTpByDamage.call(this, damageRate));
        //
    }); // v0.00a - v0.00a

    rewriteFunc("regenerateHp", function() {
        // Edited to help plugins alter regenerate hp behaviors in better ways
        const value = NEW._regeneratedHp.call(this);
        //
        if (value !== 0) this.gainHp(value);
    }); // v0.00a - v0.00a

    rewriteFunc("regenerateMp", function() {
        // Edited to help plugins alter regenerate mp behaviors in better ways
        const value = NEW._regeneratedMp.call(this);
        //
        if (value !== 0) this.gainMp(value);
    }); // v0.00a - v0.00a

    rewriteFunc("regenerateTp", function() {
        // Edited to help plugins alter regenerate tp behaviors in better ways
        this.gainSilentTp(NEW._regeneratedTp.call(this));
        //
    }); // v0.00a - v0.00a

    rewriteFunc("regenerateAll", function() {
        // Edited to help plugins alter regenerate all behaviors in better ways
        if (this.isAlive()) NEW._regenerateAlive.call(this);
        //
    }); // v0.00a - v0.00a

    rewriteFunc("onBattleStart", function(advantageous, disadvantageous) {
        this.setActionState("undecided");
        this.clearMotion();
        // Edited to help plugins alter on battle start in better ways
        this.initTpbChargeTime(advantageous, disadvantageous);
        //
        this.initTpbTurn();
        if (!this.isPreserveTp()) this.initTp();
    }); // v0.00a - v0.00a

    /**
     * The this pointer is Game_Battler.prototype
     * Hotspot/Nullipotent
     * @author DoubleX @interface @since v0.00a @version v0.00a
     * @returns {number} The proportion of the skill/item casting progress
     */
    $.tpbCastTime = function() { return this._tpbCastTime; };

    /**
     * The this pointer is Game_Battler.prototype
     * Hotspot/Nullipotent
     * @author DoubleX @interface @since v0.00a @version v0.00a
     * @returns {number} The proportion of the battler idling progress
     */
    $.tpbIdleTime = function() { return this._tpbIdleTime; };

    /**
     * The this pointer is Game_Battler.prototype
     * Hotspot/Nullipotent
     * @author DoubleX @interface @since v0.00a @version v0.00a
     * @returns {boolean} Whether the tpb battler's executing actions
     */
    $.isTpbActing = function() { return this._tpbState === "acting"; };

    /**
     * The this pointer is Game_Battler.prototype
     * Hotspot/Nullipotent
     * @author DoubleX @interface @since v0.00a @version v0.00a
     * @returns {boolean} Whether the tpb battler's charging the tpb bar
     */
    $.isTpbCharging = function() { return this._tpbState === "charging"; };

    /**
     * The this pointer is Game_Battler.prototype
     * Hotspot/Nullipotent
     * @author DoubleX @interface @since v0.00a @version v0.00a
     * @returns {boolean} Whether the tpb battler's casting tpb actions
     */
    $.isTpbCasting = function() { return this._tpbState === "casting"; };

    /**
     * The this pointer is Game_Battler.prototype
     * Idempotent
     * @author DoubleX @interface @since v0.00a @version v0.00a
     */
    $.onTpbReady = function() { this._tpbState = "ready"; };

    /**
     * The this pointer is Game_Battler.prototype
     * Hotspot/Nullipotent
     * @author DoubleX @interface @since v0.00a @version v0.00a
     * @returns {boolean} Whether the tpb battler's just ended charging tpb bar
     */
    $.isEndTpbCharging = function() { return this._tpbChargeTime >= 1; };

    /**
     * The this pointer is Game_Battler.prototype
     * Hotspot/Nullipotent
     * @author DoubleX @interface @since v0.00a @version v0.00a
     * @returns {boolean} Whether the tpb battler's just ended casting actions
     */
    $.isEndTpbCasting = function() {
        return this._tpbCastTime >= this.tpbRequiredCastTime();
    }; // $.isEndTpbCasting

    /**
     * The this pointer is Game_Battler.prototype
     * Hotspot/Nullipotent
     * @author DoubleX @interface @since v0.00a @version v0.00a
     * @returns {boolean} Whether the tpb battler's in the idle state
     */
    $.isTpbIdle = function() { return !this.canMove() || this.isTpbCharged(); };

    /**
     * The this pointer is Game_Battler.prototype
     * Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @returns {number} The new TPBS charge time value with the penalty applied
     */
    NEW._tpbChargeTimeWithPenalty = function() {
        return this._tpbChargeTime - 1;
    }; // NEW._tpbChargeTimeWithPenalty

    /**
     * The this pointer is Game_Battler.prototype
     * Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {boolean} advantageous - Whether battler has advantageous start
     * @param {boolean} disadvantageous - If battler has disadvantageous start
     * @returns {number} The starting tpb bar charged proportion for the battler
     */
    NEW._initializedTpbChargeTime = function(advantageous, disadvantageous) {
        // disadvantageous is added to be used by other plugins
        if (this.isRestricted()) return 0;
        return advantageous ? 1 : NEW._initializedNormTpbChargeTime.call(this);
        //
    }; // NEW._initializedTpbChargeTime

    /**
     * The this pointer is Game_Battler.prototype
     * Nullipotent/Random
     * @author DoubleX @since v0.00a @version v0.00a
     * @returns {number} The starting tpb bar charged proportion for the battler
     */
    NEW._initializedNormTpbChargeTime = function() {
        return this.tpbRelativeSpeed() * Math.random() * 0.5;
    }; // NEW._initializedNormTpbChargeTime

    /**
     * The this pointer is Game_Battler.prototype
     * Hotspot/Idempotent
     * @author DoubleX @since v0.00a @version v0.00a
     */
    NEW._updateTpbWhenMovable = function() {
        this.updateTpbChargeTime();
        this.updateTpbCastTime();
        this.updateTpbAutoBattle();
    }; // NEW._updateTpbWhenMovable

    /**
     * The this pointer is Game_Battler.prototype
     * Hotspot/Idempotent
     * @author DoubleX @since v0.00a @version v0.00a
     */
    NEW._onUpdateTpbChargeTime = function() {
        this._tpbChargeTime = NEW._updatedTpbChargeTime.call(this);
        if (!this.isEndTpbCharging()) return;
        this._tpbChargeTime = 1;
        this.onTpbCharged();
    }; // NEW._onUpdateTpbChargeTime

    /**
     * The this pointer is Game_Battler.prototype
     * Hotspot/Idempotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @returns {number} The updated tpb charge time value
     */
    NEW._updatedTpbChargeTime = function() {
        return this._tpbChargeTime + this.tpbAcceleration();
    }; // NEW._updatedTpbChargeTime

    /**
     * The this pointer is Game_Battler.prototype
     * Hotspot/Idempotent
     * @author DoubleX @interface @since v0.00a @version v0.00a
     */
    NEW._onUpdateTpbCastTime = function() {
        this._tpbCastTime = NEW._updatedTpbCastTime.call(this);
        if (!this.isEndTpbCasting()) return;
        this._tpbCastTime = this.tpbRequiredCastTime();
        this.onTpbReady();
    }; // NEW._onUpdateTpbCastTime

    /**
     * The this pointer is Game_Battler.prototype
     * Hotspot/Idempotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @returns {number} The updated tpb cast time value
     */
    NEW._updatedTpbCastTime = function() {
        return this._tpbCastTime + this.tpbAcceleration();
    }; // NEW._updatedTpbCastTime

    /**
     * The this pointer is Game_Battler.prototype
     * Hotspot/Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @returns {boolean} Whether the autobattle battlers will make tpb actions
     */
    NEW._isMakeAutoTpbActs = function() {
        if (!this.isTpbCharged() || this.isTpbTurnEnd()) return false;
        return this.isAutoBattle();
    }; // NEW._isMakeAutoTpbActs

    /**
     * The this pointer is Game_Battler.prototype
     * Hotspot/Idempotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @todo Figures out why isTpbTimeout and onTpbTimeout aren't called here
     */
    NEW._onUpdateTpbIdleTime = function() {
        this._tpbIdleTime = NEW._updatedTpbIdleTime.call(this);
    }; // NEW._onUpdateTpbIdleTime

    /**
     * The this pointer is Game_Battler.prototype
     * Hotspot/Idempotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @returns {number} The updated tpb idle time value
     */
    NEW._updatedTpbIdleTime = function() {
        return this._tpbIdleTime + this.tpbAcceleration();
    }; // NEW._updatedTpbIdleTime

    NEW._IS_VALID_FUNC = act => act.isValid();
    NEW._ITEM_FUNC = act => act.item();
    NEW._ACCUM_SPEED_FUNC = (delay, { speed }) => delay + Math.max(0, -speed);
    /**
     * The this pointer is Game_Battler.prototype
     * Hotspot/Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @returns {number} The casting delay of the action to be executed
     */
    NEW._tpbCastDelay = function() {
        /** @todo Uses filterMapReduce if it's faster than filterMap.reduce */
        return this._actions.filterMap(NEW._IS_VALID_FUNC, NEW._ITEM_FUNC).
                reduce(NEW._ACCUM_SPEED_FUNC, 0);
        //
    }; // NEW._tpbCastDelay

    /**
     * The this pointer is Game_Battler.prototype
     * Idempotent
     * @author DoubleX @since v0.00a @version v0.00a
     */
    NEW._onAutoInputTpbActs = function() {
        this.startTpbCasting();
        this.setActionState("waiting");
    }; // NEW._onAutoInputTpbActs

    /**
     * The this pointer is Game_Battler.prototype
     * Idempotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {id} stateId - The id of the state to be added to this battler
     */
    NEW._onAddState = function(stateId) {
        if (!this.isStateAffected(stateId)) {
            NEW._onAddNewState.call(this, stateId);
        }
        this.resetStateCounts(stateId);
        this._result.pushAddedState(stateId);
    }; // NEW._onAddState

    /**
     * The this pointer is Game_Battler.prototype
     * Idempotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {id} stateId - The id of the new state to be added to this battler
     */
    NEW._onAddNewState = function(stateId) {
        this.addNewState(stateId);
        this.refresh();
    }; // NEW._onAddNewState

    /**
     * The this pointer is Game_Battler.prototype
     * Idempotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {DataState} state - The state to be removed upon restriction
     */
    NEW._removeStateByRestriction = function(state) {
        if (state.removeByRestriction) this.removeState(state.id);
    }; // NEW._removeStateByRestriction

    /**
     * The this pointer is Game_Battler.prototype
     * Idempotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {id} stateId - The id of the state to be removed from this battler
     */
    NEW._onRemoveState = function(stateId) {
        if (stateId === this.deathStateId()) this.revive();
        this.eraseState(stateId);
        this.refresh();
        this._result.pushRemovedState(stateId);
    }; // NEW._onRemoveState

    /**
     * The this pointer is Game_Battler.prototype
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {index} paramId - The parameter id of the buff to be added
     * @param {number} turns - The number of turns of the buff to be added
     */
    NEW._onAddBuff = function(paramId, turns) {
        this.increaseBuff(paramId);
        if (this.isBuffAffected(paramId)) {
            this.overwriteBuffTurns(paramId, turns);
        }
        this._result.pushAddedBuff(paramId);
        this.refresh();
    }; // NEW._onAddBuff

    /**
     * The this pointer is Game_Battler.prototype
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {index} paramId - The parameter id of the debuff to be added
     * @param {number} turns - The number of turns of the debuff to be added
     */
    NEW._onAddDebuff = function(paramId, turns) {
        this.decreaseBuff(paramId);
        if (this.isDebuffAffected(paramId)) {
            this.overwriteBuffTurns(paramId, turns);
        }
        this._result.pushAddedDebuff(paramId);
        this.refresh();
    }; // NEW._onAddDebuff

    /**
     * The this pointer is Game_Battler.prototype
     * Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {index} paramId - The parameter id of the buff to be removed
     * @returns {boolean} Whether the specified buff's to be removed
     */
    NEW._isRemoveBuff = function(paramId) {
        return this.isAlive() && this.isBuffOrDebuffAffected(paramId);
    }; // NEW._isRemoveBuff

    /**
     * The this pointer is Game_Battler.prototype
     * Idempotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {index} paramId - The parameter id of the buff to be removed
     */
    NEW._onRemoveBuff = function(paramId) {
        this.eraseBuff(paramId);
        this._result.pushRemovedBuff(paramId);
        this.refresh();
    }; // NEW._onRemoveBuff

    /**
     * The this pointer is Game_Battler.prototype
     * Idempotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {DataState} state - Data of the state to be removed on battle end
     */
    NEW._removeBattleState = function(state) {
        if (state.removeAtBattleEnd) this.removeState(state.id);
    }; // NEW._removeBattleState

    /**
     * The this pointer is Game_Battler.prototype
     * Idempotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @enum @param {number} timing - 1 is action end and 2 is turn end
     * @param {DataState} state - Data of the state to be removed automatically
     */
    NEW._removeStateAuto = function(timing, state) {
        if (!NEW._isRemoveStateAuto.call(this, timing, state)) return;
        this.removeState(state.id);
    }; // NEW._removeStateAuto

    /**
     * The this pointer is Game_Battler.prototype
     * Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @enum @param {number} timing - 1 is action end and 2 is turn end
     * @param {DataState} state - Data of the state to be removed automatically
     * @returns {boolean} Whether the state's automatically removed from battler
     */
    NEW._isRemoveStateAuto = function(timing, state) {
        if (!this.isStateExpired(state.id)) return;
        return state.autoRemovalTiming === timing;
    }; // NEW._isRemoveStateAuto

    /**
     * The this pointer is Game_Battler.prototype
     * Idempotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {index} paramId - The parameter id of the buff to be removed
     */
    NEW._removeBuffAuto = function(paramId) {
        if (this.isBuffExpired(paramId)) this.removeBuff(paramId);
    }; // NEW._removeBuffAuto

    /**
     * The this pointer is Game_Battler.prototype
     * Idempotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {DataState} state - The data of the state to be removed by damage
     */
    NEW._removeStateByDamage = function(state) {
        if (!NEW._isRemoveStateByDamage.call(this, state)) return;
        this.removeState(state.id);
    }; // NEW._removeStateByDamage

    /**
     * The this pointer is Game_Battler.prototype
     * Nullipotent/Random
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {DataState} state - The data of the state to be removed by damage
     * @returns {boolean} Whether the state's to be removed by daamge
     */
    NEW._isRemoveStateByDamage = function(state) {
        if (!state.removeByDamage) return false;
        return Math.randomInt(100) < state.chanceByDamage;
    }; // NEW._isRemoveStateByDamage

    /**
     * The this pointer is Game_Battler.prototype
     * @author DoubleX @since v0.00a @version v0.00a
     */
    NEW._makeActsWhenMovable = function() {
        /** @todo Figures out why it's needed when clearActions is called */
        this._actions = [];
        //
        const actionTimes = this.makeActionTimes();
        for (let i = 0; i < actionTimes; i++) {
            this._actions.push(new Game_Action(this));
        }
    }; // NEW._makeActsWhenMovable

    /**
     * The this pointer is Game_Battler.prototype
     * Nullipotent/Random
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {id} skillId - The id of the skill as this new forced action
     * @param {index} targetIndex - The index of the target of the forced action
     * @returns {Game_Action} The newly creted forced action of this battler
     */
    NEW._forcedAct = function(skillId, targetIndex) {
        const action = new Game_Action(this, true);
        action.setSkill(skillId);
        if (targetIndex === -2) {
            action.setTarget(this._lastTargetIndex);
        } else if (targetIndex === -1) {
            action.decideRandomTarget();
        } else action.setTarget(targetIndex);
        return action;
    }; // NEW._forcedAct

    /**
     * The this pointer is Game_Battler.prototype
     * Nullipotent/Random
     * @author DoubleX @since v0.00a @version v0.00a
     * @returns {number} The amount of tp intiialized for this battler
     */
    NEW._initializedTp = function() { return Math.randomInt(25); };

    /**
     * The this pointer is Game_Battler.prototype
     * Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @returns {number} damageRate - The proportion of the battler hp damaged
     * @returns {number} The amount of tp charged by damage for this battler
     */
    NEW._chargedTpByDamage = function(damageRate) {
        return Math.floor(50 * damageRate * this.tcr);
    }; // NEW._chargedTpByDamage

    /**
     * The this pointer is Game_Battler.prototype
     * Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @returns {number} The amount of hp regenerated for this battler
     */
    NEW._regeneratedHp = function() {
        return Math.max(Math.floor(this.mhp * this.hrg), -this.maxSlipDamage());
    }; // NEW._regeneratedHp

    /**
     * The this pointer is Game_Battler.prototype
     * Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @returns {number} The amount of mp regenerated for this battler
     */
    NEW._regeneratedMp = function() { return Math.floor(this.mmp * this.mrg); };

    /**
     * The this pointer is Game_Battler.prototype
     * Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @returns {number} The amount of tp regenerated for this battler
     */
    NEW._regeneratedTp = function() {
        return Math.floor(this.maxTp() * this.trg);
    }; // NEW._regeneratedTp

    /**
     * The this pointer is Game_Battler.prototype
     * @author DoubleX @since v0.00a @version v0.00a
     */
    NEW._regenerateAlive = function() {
        this.regenerateHp();
        this.regenerateMp();
        this.regenerateTp();
    }; // NEW._regenerateAlive

})(Game_Battler.prototype, DoubleX_RMMZ.Enhanced_Codebase);

/*----------------------------------------------------------------------------
 *    # Edited class: Game_Actor
 *      - Improves performance and code quality
 *----------------------------------------------------------------------------*/

(($, MZ_EC) => {

    "use strict";

    const $$ = Game_Battler.prototype, {
        NEW,
        rewriteFunc
    } = MZ_EC.setKlassContainer("Game_Actor", $, MZ_EC);

    rewriteFunc("initSkills", function() {
        this._skills = [];
        // Edited to help plugins alter init skills behaviors in better ways
        this.currentClass().learnings.forEach(NEW._initLearntSkill, this);
        //
    }); // v0.00a - v0.00a

    rewriteFunc("initEquips", function(equips) {
        // Edited to help plugins alter init equips behaviors in better ways
        this._equips = NEW._initializedEquips.call(this, equips);
        //
        this.releaseUnequippableItems(true);
        this.refresh();
    }); // v0.00a - v0.00a

    rewriteFunc("changeEquip", function(slotId, item) {
        // Edited to help plugins alter change equip behaviors in better ways
        if (!NEW._isChangeEquip.call(this, slotId, item)) return;
        NEW._onChangeEquip.call(this, slotId, item);
        //
    }); // v0.00a - v0.00a

    rewriteFunc("tradeItemWithParty", function(newItem, oldItem) {
        if (newItem && !$gameParty.hasItem(newItem)) return false;
        // Edited to help plugins alter trade item with party in better ways
        NEW._onTradeItemWithParty.call(this, newItem, oldItem);
        //
        return true;
    }); // v0.00a - v0.00a

    rewriteFunc("releaseUnequippableItems", function(forcing) {
        const slots = this.equipSlots();
        // Edited to help plugins alter release unequippable items in better way
        this._equips.forEach((equip, i) => {
            // There's no need to loop through equips multiple times
            NEW._releaseUnequippableItem.call(this, forcing, equip, slots[i]);
            //
        });
        //
    }); // v0.00a - v0.00a

    rewriteFunc("attackElements", function() {
        const set = $$.attackElements.call(this);
        // Edited to help plugins alter attack elements behaviors in better ways
        if (NEW._isIncludeBareHandElem.call(this, set)) {
            set.push(this.bareHandsElementId());
        }
        //
        return set;
    }); // v0.00a - v0.00a

    rewriteFunc("changeExp", function(exp, show) {
        this._exp[this._classId] = Math.max(exp, 0);
        const [lastLevel, lastSkills] = [this._level, this.skills()];
        // Edited to help plugins alter change exp behaviors in better ways
        while (NEW._isLevelUp.call(this)) this.levelUp();
        while (NEW._isLevelDown.call(this)) this.levelDown();
        if (NEW._isDisplayLevelUp.call(this, show, lastLevel)) {
            this.displayLevelUp(this.findNewSkills(lastSkills));
        }
        //
        this.refresh();
    }); // v0.00a - v0.00a

    rewriteFunc("levelUp", function() {
        this._level++;
        // Edited to help plugins alter level up behaviors in better ways
        this.currentClass().learnings.forEach(NEW._learnLevelUpSkill, this);
        //
    }); // v0.00a - v0.00a

    rewriteFunc("gainExp", function(exp) {
        // Edited to help plugins alter gain exp behaviors in better ways
        const newExp = NEW._gainedExp.call(this, exp);
        //
        this.changeExp(newExp, this.shouldDisplayLevelUp());
    }); // v0.00a - v0.00a

    rewriteFunc("learnSkill", function(skillId) {
        // Edited to help plugins alter learn skill behaviors in better ways
        if (this.isLearnedSkill(skillId)) return;
        NEW._onLearnSkill.call(this, skillId);
        //
    }); // v0.00a - v0.00a

    rewriteFunc("performAttack", function() {
        // Edited to help plugins alter perform attack behaviors in better ways
        const attackMotion = NEW._performedAtkMotion.call(this);
        if (attackMotion) NEW._performAtkMotion.call(this, attackMotion);
        //
    }); // v0.00a - v0.00a

    rewriteFunc("makeAutoBattleActions", function() {
        // Edited to help plugins alter make auto battle actions in better ways
        NEW._setAutoBattleActs.call(this);
        //
        this.setActionState("waiting");
    }); // v0.00a - v0.00a

    rewriteFunc("onPlayerWalk", function() {
        this.clearResult();
        this.checkFloorEffect();
        // Edited to help plugins alter on player walk behaviors in better ways
        if ($gamePlayer.isNormal()) NEW._onNormPlayerWalk.call(this);
        //
    }); // v0.00a - v0.00a

    rewriteFunc("showAddedStates", function() {
        // Edited to help plugins alter show added states in better ways
        this.result().addedStateObjects().forEach(NEW._showAddedState, this);
        //
    }); // v0.00a - v0.00a

    rewriteFunc("showRemovedStates", function() {
        // Edited to help plugins alter show removed states in better ways
        this.result().removedStateObjects().forEach(
                NEW._showRemovedState, this);
        //
    }); // v0.00a - v0.00a

    rewriteFunc("turnEndOnMap", function() {
        // Edited to help plugins alter turn end on map behaviors in better ways
        if (NEW._isTurnEndOnMap.call(this)) NEW._onTurnEndOnMap.call(this);
        //
    }); // v0.00a - v0.00a

    rewriteFunc("executeFloorDamage", function() {
        // Edited to help plugins alter execute floor damage in better ways
        const realDamage = NEW._realFloorDamage.call(this);
        //
        this.gainHp(-realDamage);
        if (realDamage > 0) this.performMapDamage();
    }); // v0.00a - v0.00a

    /**
     * The this pointer is Game_Actor.prototype
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {DataLearning} learning - The skill that can be learned by actor
     */
    NEW._initLearntSkill = function(learning) {
        if (!NEW._isInitLearntSkill.call(this, learning)) return;
        this.learnSkill(learning.skillId);
    }; // NEW._initLearntSkill

    /**
     * The this pointer is Game_Actor.prototype
     * Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {DataLearning} learning - The skill that can be learned by actor
     * @returns {boolean} Whether actor will learn skill upon initialization
     */
    NEW._isInitLearntSkill = function(learning) {
        return learning.level <= this._level;
    }; // NEW._isInitLearntSkill

    /**
     * The this pointer is Game_Actor.prototype
     * Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {[DatumEquip]} equips - List of data of equipments to initialize
     * @returns {[Game_Item]} The list of initialized equipments of this actor
     */
    NEW._initializedEquips = function(equips) {
        const equipNum = equips.length;
        return this.equipSlots().fastMap((slot, i) => {
            const item = new Game_Item();
            if (i < equipNum) item.setEquip(slot === 1, equips[i]);
            return item;
        });
    }; // NEW._initializedEquips

    /**
     * The this pointer is Game_Actor.prototype
     * Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {index} slotId - The index of the equipment slot to be cleared
     * @param {DataEquip} item - New equipment as the replacement for the slot
     * @returns {boolean} Whether the current equip in the slot's to be changed
     */
    NEW._isChangeEquip = function(slotId, item) {
        if (!this.tradeItemWithParty(item, this.equips()[slotId])) return false;
        return !item || this.equipSlots()[slotId] === item.etypeId;
    }; // NEW._isChangeEquip

    /**
     * The this pointer is Game_Actor.prototype
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {index} slotId - The index of the equipment slot to be cleared
     * @param {DataEquip} item - New equipment as the replacement for the slot
     */
    NEW._onChangeEquip = function(slotId, item) {
        this._equips[slotId].setObject(item);
        this.refresh();
    }; // NEW._onChangeEquip

    /**
     * The this pointer is Game_Actor.prototype
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {DataEquip|DataItem} newItem - The new item from party to actor
     * @param {DataEquip|DataItem} oldItem - The old item from actor to party
     */
    NEW._onTradeItemWithParty = function(newItem, oldItem) {
        $gameParty.gainItem(oldItem, 1);
        $gameParty.loseItem(newItem, 1);
    }; // NEW._onTradeItemWithParty

    /**
     * The this pointer is Game_Actor.prototype
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {index} slotId - The index of the equipment slot to be cleared
     */
    NEW._clearEquip = function(slotId) {
        if (this.isEquipChangeOk(slotId)) this.changeEquip(slotId, null);
    }; // NEW._clearEquip

    /**
     * The this pointer is Game_Actor.prototype
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {index} slotId - The index of the slot to have the optimized equip
     */
    NEW._optimizeEquip = function(slotId) {
        if (!this.isEquipChangeOk(slotId)) return;
        this.changeEquip(slotId, this.bestEquipItem(slotId));
    }; // NEW._optimizeEquip

    /**
     * The this pointer is Game_Actor.prototype
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {boolean} forcing - Whether the equip's forcibly released
     * @param {Game_Item} equip - The unequippable item to be released
     * @param {number} slot - The type of the slot of the specified equipment
     */
    NEW._releaseUnequippableItem = function(forcing, equip, slot) {
        if (!NEW._isUnequippableItem.call(this, equip.object(), slot)) return;
        NEW._onReleaseUnequippableItem.call(this, forcing, equip);
    }; // NEW._releaseUnequippableItem

    /**
     * The this pointer is Game_Actor.prototype
     * Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {DataEquip} item - The data of the equipment to be checked against
     * @param {number} slot - The type of the slot of the specified equipment
     * @returns {boolean} Whether the equip's not equippable to the slot
     */
    NEW._isUnequippableItem = function(item, slot) {
        return item && (!this.canEquip(item) || item.etypeId !== slot);
    }; // NEW._isUnequippableItem

    /**
     * The this pointer is Game_Actor.prototype
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {boolean} forcing - Whether the equip's forcibly released
     * @param {Game_Item} equip - The unequippable item to be released
     */
    NEW._onReleaseUnequippableItem = function(forcing, equip) {
        if (!forcing) this.tradeItemWithParty(null, equip.object());
        equip.setObject(null);
    }; // NEW._onReleaseUnequippableItem

    /**
     * The this pointer is Game_Actor.prototype
     * Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {[DatumTrait]} set - The set of base attack elements of this actor
     * @returns {boolean} Whether attack elements should include barehand ones
     */
    NEW._isIncludeBareHandElem = function(set) {
        return this.hasNoWeapons() && !set.includes(this.bareHandsElementId());
    }; // NEW._isIncludeBareHandElem

    /**
     * The this pointer is Game_Actor.prototype
     * Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @returns {boolean} Whether the level of this actor should be increased
     */
    NEW._isLevelUp = function() {
        return !this.isMaxLevel() && this.currentExp() >= this.nextLevelExp();
    }; // NEW._isLevelUp

    /**
     * The this pointer is Game_Actor.prototype
     * Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @returns {boolean} Whether the level of this actor should be decreased
     */
    NEW._isLevelDown = function() {
        return this.currentExp() < this.currentLevelExp();
    }; // NEW._isLevelDown

    /**
     * The this pointer is Game_Actor.prototype
     * Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {boolean} show - Whether the level up display can be shown
     * @param {number} lastLevel - The last level of actor before exp changes
     * @returns {boolean} Whether the level up of this actor will be displayed
     */
    NEW._isDisplayLevelUp = function(show, lastLevel) {
        return show && this._level > lastLevel;
    }; // NEW._isDisplayLevelUp

    /**
     * The this pointer is Game_Actor.prototype
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {DataLearning} learning - The skill that can be learned by actor
     */
    NEW._learnLevelUpSkill = function(learning) {
        if (!NEW._isLearnLevelUpSkill.call(this, learning)) return;
        this.learnSkill(learning.skillId);
    }; // NEW._learnLevelUpSkill

    /**
     * The this pointer is Game_Actor.prototype
     * Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {DataLearning} learning - The skill that can be learned by actor
     * @returns {boolean} Whether this actor will learn this skill upon level up
     */
    NEW._isLearnLevelUpSkill = function(learning) {
        return learning.level === this._level;
    }; // NEW._isLearnLevelUpSkill

    /**
     * The this pointer is Game_Actor.prototype
     * Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {number} exp - The raw amount of experience gained
     * @returns {number} The new total number of experience of this actor
     */
    NEW._gainedExp = function(exp) {
        return this.currentExp() + Math.round(exp * this.finalExpRate());
    }; // NEW._gainedExp

    NEW._ASCENDING_SORT = (a, b) => a - b;
    /**
     * The this pointer is Game_Actor.prototype
     * @author DoubleX @since v0.00a @version v0.00a
     */
    NEW._onLearnSkill = function(skillId) {
        this._skills.push(skillId);
        this._skills.sort(NEW._ASCENDING_SORT);
    }; // NEW._onLearnSkill

    /**
     * The this pointer is Game_Actor.prototype
     * Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @returns {DataMotion} The data of the attack motion to be performed
     */
    NEW._performedAtkMotion = function() {
        /** @todo Dries up these codes representing identical knowledge */
        const firstWeapon = this.weapons()[0];
        return $dataSystem.attackMotions[firstWeapon ? firstWeapon.wtypeId : 0];
        //
    }; // NEW._performedAtkMotion

    /**
     * The this pointer is Game_Actor.prototype
     * Idempotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {DataMotion} attackMotion - The attack motion to be performed
     */
    NEW._performAtkMotion = function(attackMotion) {
        const { type, weaponImageId } = attackMotion;
        if (type === 0) {
            this.requestMotion("thrust");
        } else if (type === 1) {
            this.requestMotion("swing");
        } else if (type === 2) this.requestMotion("missile");
        this.startWeaponAnimation(weaponImageId);
    }; // NEW._performAtkMotion

    /**
     * The this pointer is Game_Actor.prototype
     * @author DoubleX @since v0.00a @version v0.00a
     */
    NEW._setAutoBattleActs = function() {
        const action = NEW._autoBattleAct.call(this);
        for (let i = 0, numActions = this.numActions(); i < numActions; i++) {
            // It's pointless to evaluate the same action multiple times
            this.setAction(i, action);
            //
        }
    }; // NEW._setAutoBattleActs

    /**
     * The this pointer is Game_Actor.prototype
     * Nullipotent/Random
     * @author DoubleX @since v0.00a @version v0.00a
     * @returns {boolean} Whether the actor's turn has ended on the game map
     */
    NEW._autoBattleAct = function() {
        let maxValue = -Number.MAX_VALUE, bestAct;
        this.makeActionList().forEach(action => {
            const value = action.evaluate();
            if (value > maxValue) [maxValue, bestAct] = [value, action];
        });
        return bestAct;
    }; // NEW._autoBattleAct

    /**
     * The this pointer is Game_Actor.prototype
     * Hotspot
     * @author DoubleX @since v0.00a @version v0.00a
     */
    NEW._onNormPlayerWalk = function() {
        this.turnEndOnMap();
        this.states().forEach(this.updateStateSteps, this);
        this.showAddedStates();
        this.showRemovedStates();
    }; // NEW._onNormPlayerWalk

    /**
     * The this pointer is Game_Actor.prototype
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {state} - The state for this actor to have its message shown
     */
    NEW._showAddedState = function(state) {
        NEW._showState.call(this, state.message1);
    }; // NEW._showAddedState

    /**
     * The this pointer is Game_Actor.prototype
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {state} - The state for this actor to have its message shown
     */
    NEW._showRemovedState = function(state) {
        NEW._showState.call(this, state.message4);
    }; // NEW._showRemovedState

    /**
     * The this pointer is Game_Actor.prototype
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {msg} - The message of the state for this actor to be shown
     */
    NEW._showState = function(msg) {
        if (msg) $gameMessage.add(msg.format(this._name));
    }; // NEW._showState

    /**
     * The this pointer is Game_Actor.prototype
     * Hotspot/Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @returns {boolean} Whether the actor's turn has ended on the game map
     */
    NEW._isTurnEndOnMap = function() {
        return $gameParty.steps() % this.stepsForTurn() === 0;
    }; // NEW._isTurnEndOnMap

    /**
     * The this pointer is Game_Actor.prototype
     * Potential Hotspot
     * @author DoubleX @since v0.00a @version v0.00a
     */
    NEW._onTurnEndOnMap = function() {
        this.onTurnEnd();
        if (this.result().hpDamage > 0) this.performMapDamage();
    }; // NEW._onTurnEndOnMap

    /**
     * The this pointer is Game_Actor.prototype
     * Potential Hotspot
     * @author DoubleX @since v0.00a @version v0.00a
     * @returns {number} The amount of the final floor damage applied to actor
     */
    NEW._realFloorDamage = function() {
        const floorDamage = Math.floor(this.basicFloorDamage() * this.fdr);
        return Math.min(floorDamage, this.maxFloorDamage());
    }; // NEW._realFloorDamage

})(Game_Actor.prototype, DoubleX_RMMZ.Enhanced_Codebase);

/*----------------------------------------------------------------------------
 *    # Edited class: Game_Enemy
 *      - Improves performance and code quality
 *----------------------------------------------------------------------------*/

(($, MZ_EC) => {

    "use strict";

    const $$ = Game_Battler.prototype, {
        NEW,
        rewriteFunc
    } = MZ_EC.setKlassContainer("Game_Enemy", $, MZ_EC);

    rewriteFunc("makeDropItems", function() {
        // Edited to help plugins alter make drop items in better ways
        return this.enemy().dropItems.reduce((dropItems, dropItem) => {
            return NEW._accumDropItems.call(this, dropItems, dropItem);
        }, []);
        //
    }); // v0.00a - v0.00a

    rewriteFunc("selectAllActions", function(actionList) {
        // Edited to help plugins alter select all actions in better ways
        const ratingZero = NEW._ratingZero.call(this, actionList);
        //
        actionList = actionList.filter(({ rating }) => rating > ratingZero);
        for (let i = 0; i < this.numActions(); i++) {
            const selectedAct = this.selectAction(actionList, ratingZero);
            this.action(i).setEnemyAction(selectedAct);
        }
    }); // v0.00a - v0.00a

    rewriteFunc("makeActions", function() {
        $$.makeActions.call(this);
        /** @todo Extracts these codes into well-named functions */
        if (this.numActions() > 0) {
            // Edited to help plugins alter make actions behaviors in better way
            const actionList = NEW._validActs.call(this);
            //
            if (!actionList.isEmpty()) this.selectAllActions(actionList);
        }
        //
        this.setActionState("waiting");
    }); // v0.00a - v0.00a

    /**
     * The this pointer is Game_Enemy.prototype
     * Nullipotent/Random
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {[DatumDropItem]} dropItems - The items to be dropped by the enemy
     * @param {DataDropItem} dropItem - The item to be dropped by the enemy
     * @returns {[DatumDropItem]} The accumulated items to be dropped by enemy
     */
    NEW._accumDropItems = function(dropItems, dropItem) {
        if (NEW._isDropItem.call(this, dropItem)) {
            dropItems.push(this.itemObject(dropItem.kind, dropItem.dataId));
        }
        return dropItems;
    }; // NEW._accumDropItems

    /**
     * The this pointer is Game_Actor.prototype
     * Nullipotent/Random
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {DataDropItem} dropItem - The item to be dropped by the enemy
     * @returns {boolean} Whether the specified item's to be dropped by enemy
     */
    NEW._isDropItem = function(dropItem) {
        const rate = this.dropItemRate();
        return dropItem.kind > 0 && Math.random() * dropItem.denominator < rate;
    }; // NEW._isDropItem

    /**
     * The this pointer is Game_Actor.prototype
     * Nullipotent/Random
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {DataDropItem} actList - The list of actions to be selected
     * @returns {number} The rating to filter out those not having higher rating
     */
    NEW._ratingZero = function(actList) {
        return Math.max(...actList.fastMap(({ rating }) => rating)) - 3;
    }; // NEW._ratingZero

    /**
     * The this pointer is Game_Actor.prototype
     * Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @returns {[DataAction]} The list of valid enemy actions to be inputted
     */
    NEW._validActs = function() {
        return this.enemy().actions.filter(this.isActionValid, this);
    }; // NEW._validActs

})(Game_Enemy.prototype, DoubleX_RMMZ.Enhanced_Codebase);

/*----------------------------------------------------------------------------
 *    # Edited class: Game_Unit
 *      - Uses the configurable Graphics fps instead of the constant 60
 *----------------------------------------------------------------------------*/

(($, MZ_EC) => {

    "use strict";

    const { rewriteFunc } = MZ_EC.setKlassContainer("Game_Unit", $, MZ_EC);

    rewriteFunc("onBattleStart", function(advantageous, disadvantageous) {
        this.members().forEach(mem => {
            // Edited to help plugins alter the on battle start in better ways
            mem.onBattleStart(advantageous, disadvantageous);
            //
        });
        this._inBattle = true;
    }); // v0.00a - v0.00a

    rewriteFunc("tpbReferenceTime", function() {
        // Edited to help plugins alter the fps in better ways
        const fps = Graphics.gameFps;
        return BattleManager.isActiveTpb() ? 4 * fps : fps;
        //
    }); // v0.00a - v0.00a

})(Game_Unit.prototype, DoubleX_RMMZ.Enhanced_Codebase);

/*----------------------------------------------------------------------------
 *    # Edited class: Game_Party
 *      - Improves code quality
 *----------------------------------------------------------------------------*/

(($, MZ_EC) => {

    "use strict";

    const {
        NEW,
        rewriteFunc
    } = MZ_EC.setKlassContainer("Game_Party", $, MZ_EC);

    rewriteFunc("setupBattleTestMembers", function() {
        // Edited to help plugins alter setup battle test members in better ways
        $dataSystem.testBattlers.forEach(NEW._setupBattleTestMem, this);
        //
    }); // v0.00a - v0.00a

    rewriteFunc("addActor", function(actorId) {
        if (this._actors.includes(actorId)) return;
        // Edited to help plugins alter add actor behaviors in better ways
        NEW._addNewActor.call(this, actorId);
        //
    }); // v0.00a - v0.00a

    rewriteFunc("removeActor", function(actorId) {
        if (!this._actors.includes(actorId)) return;
        // Edited to help plugins alter remove actor behaviors in better ways
        NEW._removeExistingActor.call(this, actorId);
        //
    }); // v0.00a - v0.00a

    /**
     * The this pointer is Game_Party.prototype
     * Idempotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {DataActor} battler - The data of the actor to be setup in test
     */
    NEW._setupBattleTestMem = function(battler) {
        const actor = $gameActors.actor(battler.actorId);
        if (actor) NEW._setupExistingBattleTestMem.call(this, battler, actor);
    }; // NEW._setupBattleTestMem

    /**
     * The this pointer is Game_Party.prototype
     * Idempotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {DataActor} battler - The data of the actor to be setup in test
     * @param {Game_Actor} actor - The the actor to be setup in the battle test
     */
    NEW._setupExistingBattleTestMem = function(battler, actor) {
        actor.changeLevel(battler.level, false);
        actor.initEquips(battler.equips);
        actor.recoverAll();
        this.addActor(battler.actorId);
    }; // NEW._setupExistingBattleTestMem

    /**
     * The this pointer is Game_Party.prototype
     * Idempotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {id} actorId - The id of the actor to be added into the party
     */
    NEW._addNewActor = function(actorId) {
        this._actors.push(actorId);
        $gamePlayer.refresh();
        $gameMap.requestRefresh();
        $gameTemp.requestBattleRefresh();
        if (this.inBattle()) NEW._addNewActorInBattle.call(this, actorId);
    }; // NEW._addNewActor

    /**
     * The this pointer is Game_Party.prototype
     * Idempotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {id} actorId - The id of the actor to be added into the party
     */
    NEW._addNewActorInBattle = function(actorId) {
        const actor = $gameActors.actor(actorId);
        if (this.battleMembers().includes(actor)) actor.onBattleStart();
    }; // NEW._addNewActorInBattle

    /**
     * The this pointer is Game_Party.prototype
     * Idempotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {id} actorId - The id of the actor to be removed from the party
     */
    NEW._removeExistingActor = function(actorId) {
        const actor = $gameActors.actor(actorId);
        const wasBattleMember = this.battleMembers().includes(actor);
        this._actors.remove(actorId);
        $gamePlayer.refresh();
        $gameMap.requestRefresh();
        $gameTemp.requestBattleRefresh();
        if (this.inBattle() && wasBattleMember) actor.onBattleEnd();
    }; // NEW._removeExistingActor

})(Game_Party.prototype, DoubleX_RMMZ.Enhanced_Codebase);

/*----------------------------------------------------------------------------
 *    # Edited class: Game_Troop
 *      - Improves code quality
 *----------------------------------------------------------------------------*/

(($, MZ_EC) => {

    "use strict";

    const {
        NEW,
        rewriteFunc
    } = MZ_EC.setKlassContainer("Game_Troop", $, MZ_EC);

    rewriteFunc("setup", function(troopId) {
        this.clear();
        [this._troopId, this._enemies] = [troopId, []];
        // Edited to help plugins alter setup behaviors in better ways
        this.troop().members.forEach(NEW._setupMem, this);
        //
        this.makeUniqueNames();
    }); // v0.00a - v0.00a

    /**
     * The this pointer is Game_Troop.prototype
     * Idempotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {Game_Enemy} mem - The enemy to be setup in this troop
     */
    NEW._setupMem = function(mem) {
        if ($dataEnemies[mem.enemyId]) NEW._setupExistingMem.call(this, mem);
    }; // NEW._setupMem

    /**
     * The this pointer is Game_Troop.prototype
     * Idempotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {Game_Enemy} mem - The enemy to be setup in this troop
     */
    NEW._setupExistingMem = function(mem) {
        const enemy = new Game_Enemy(mem.enemyId, mem.x, mem.y);
        if (mem.hidden) enemy.hide();
        this._enemies.push(enemy);
    }; // NEW._setupExistingMem

})(Game_Troop.prototype, DoubleX_RMMZ.Enhanced_Codebase);

/*----------------------------------------------------------------------------
 *    # Edited class: Game_Map
 *      - Improves code quality
 *----------------------------------------------------------------------------*/

(($, MZ_EC) => {

    "use strict";

    const {
        rewriteFunc
    } = MZ_EC.setKlassContainer("Game_Map", $.prototype, MZ_EC);

    rewriteFunc("roundXWithDirection", function(x, d) {
        // Edited to help plugins alter round x with direction in better ways
        return this.roundX(this.xWithDirection(x, d));
        //
    }); // v0.00a - v0.00a

    rewriteFunc("roundYWithDirection", function(y, d) {
        // Edited to help plugins alter round y with direction in better ways
        return this.roundY(this.yWithDirection(y, d));
        //
    }); // v0.00a - v0.00a

})(Game_Map, DoubleX_RMMZ.Enhanced_Codebase);

/*----------------------------------------------------------------------------
 *    # Edited class: Game_CharacterBase
 *      - Improves code quality
 *----------------------------------------------------------------------------*/

(($, MZ_EC) => {

    "use strict";

    const {
        rewriteFunc,
        NEW
    } = MZ_EC.setKlassContainer("Game_CharacterBase", $.prototype, MZ_EC);

    rewriteFunc("moveStraight", function(d) {
        this.setMovementSuccess(this.canPass(this._x, this._y, d));
        // Edited to help plugins alter move straight behaviors in better ways
        if (this.isMovementSucceeded()) {
            NEW._onMoveStraightSuc.call(this, d);
        } else NEW._onMoveStraightFail.call(this, d);
        //
    }); // v0.00a - v0.00a

    rewriteFunc("moveDiagonally", function(horz, vert) {
        const canPass = this.canPassDiagonally(this._x, this._y, horz, vert);
        this.setMovementSuccess(canPass);
        if (this.isMovementSucceeded()) {
            // Edited to help plugins alter move diagonally in better ways
            NEW._onMoveDiagonallySuc.call(this, horz, vert);
            //
        }
        if (this._direction === this.reverseDir(horz)) this.setDirection(horz);
        if (this._direction === this.reverseDir(vert)) this.setDirection(vert);
    }); // v0.00a - v0.00a

    /**
     * The this pointer is Game_Interpreter.prototype
     * Idempotent
     * @author DoubleX @interface @since v0.00a @version v0.00a
     * @enum @param {number} d - 2 for down/4 for left/6 for right/8 for up
     */
    NEW._onMoveStraightSuc = function(d) {
        this.setDirection(d);
        NEW._updateStraightXY.call(this, d);
        this.increaseSteps();
    }; // NEW._onMoveStraightSuc

    /**
     * The this pointer is Game_Interpreter.prototype
     * Idempotent
     * @author DoubleX @interface @since v0.00a @version v0.00a
     * @enum @param {number} d - 2 for down/4 for left/6 for right/8 for up
     */
    NEW._updateStraightXY = function(d) {
        this._x = $gameMap.roundXWithDirection(this._x, d);
        this._y = $gameMap.roundYWithDirection(this._y, d);
        this._realX = $gameMap.xWithDirection(this._x, this.reverseDir(d));
        this._realY = $gameMap.yWithDirection(this._y, this.reverseDir(d));
    }; // NEW._updateStraightXY

    /**
     * The this pointer is Game_Interpreter.prototype
     * Idempotent
     * @author DoubleX @interface @since v0.00a @version v0.00a
     * @enum @param {number} d - 2 for down/4 for left/6 for right/8 for up
     */
    NEW._onMoveStraightFail = function(d) {
        this.setDirection(d);
        this.checkEventTriggerTouchFront(d);
    }; // NEW._onMoveStraightFail

    /**
     * The this pointer is Game_Interpreter.prototype
     * Idempotent
     * @author DoubleX @interface @since v0.00a @version v0.00a
     * @enum @param {number} horz - 4 for left/6 for right
     * @enum @param {number} vert - 2 for down/8 for up
     */
    NEW._onMoveDiagonallySuc = function(horz, vert) {
        NEW._updateDiagonalXY.call(this, horz, vert);
        this.increaseSteps();
    }; // NEW._onMoveDiagonallySuc

    /**
     * The this pointer is Game_Interpreter.prototype
     * Idempotent
     * @author DoubleX @interface @since v0.00a @version v0.00a
     * @enum @param {number} horz - 4 for left/6 for right
     * @enum @param {number} vert - 2 for down/8 for up
     */
    NEW._updateDiagonalXY = function(horz, vert) {
        this._x = $gameMap.roundXWithDirection(this._x, horz);
        this._y = $gameMap.roundYWithDirection(this._y, vert);
        this._realX = $gameMap.xWithDirection(this._x, this.reverseDir(horz));
        this._realY = $gameMap.yWithDirection(this._y, this.reverseDir(vert));
    }; // NEW._updateDiagonalXY

})(Game_CharacterBase, DoubleX_RMMZ.Enhanced_Codebase);

/*----------------------------------------------------------------------------
 *    # Edited class: Game_Player
 *      - Improves code quality
 *----------------------------------------------------------------------------*/

(($, MZ_EC) => {

    "use strict";

    const $$ = Game_Character.prototype, {
        rewriteFunc,
        NEW
    } = MZ_EC.setKlassContainer("Game_Player", $.prototype, MZ_EC);

    rewriteFunc("update", function(sceneActive) {
        const lastScrolledX = this.scrolledX();
        const lastScrolledY = this.scrolledY();
        const wasMoving = this.isMoving();
        this.updateDashing();
        if (sceneActive) this.moveByInput();
        $$.update.call(this);
        this.updateScroll(lastScrolledX, lastScrolledY);
        this.updateVehicle();
        if (!this.isMoving()) this.updateNonmoving(wasMoving, sceneActive);
        this._followers.update();
    }); // v0.00a - v0.00a

    /**
     * The this pointer is Game_Interpreter.prototype
     * Idempotent
     * @author DoubleX @interface @since v0.00a @version v0.00a
     * @enum @param {number} horz - 4 for left/6 for right
     * @enum @param {number} vert - 2 for down/8 for up
     */
    NEW._onMoveDiagonallySuc = function(horz, vert) {
        NEW._updateDiagonalXY.call(this, horz, vert);
        this.increaseSteps();
    }; // NEW._onMoveDiagonallySuc

})(Game_Player, DoubleX_RMMZ.Enhanced_Codebase);

/*----------------------------------------------------------------------------
 *    # Edited class: Game_Interpreter
 *      - Improves code quality
 *----------------------------------------------------------------------------*/

(($, MZ_EC) => {

    "use strict";

    const {
        NEW,
        rewriteFunc
    } = MZ_EC.setKlassContainer("Game_Interpreter", $.prototype, MZ_EC);

    rewriteFunc("command111", function(params) {
        this._branch[this._indent] = NEW._condBranchResult.call(this, params);
        if (!this._branch[this._indent]) this.skipBranch();
        return true;
    }); // v0.00a - v0.00a

    rewriteFunc("command122", function(params) {
        const [startId, endId, operationType] = params;
        const [value, randomMax] = NEW._varValRandMax.call(this, params);
        for (let i = startId; i <= endId; i++) {
            if (!isNaN(value)) {
                const realValue = value + Math.randomInt(randomMax);
                this.operateVariable(i, operationType, realValue);
            } else this.operateVariable(i, operationType, value);
        }
        return true;
    }); // v0.00a - v0.00a

    rewriteFunc("command355", function() {
        // Edited to help plugins alter command 355 behaviors in better ways
        let script = NEW.curScriptLine.call(this);
        while (NEW.hasNextScriptLine.call(this)) {
            this._index++;
            script += NEW.curScriptLine.call(this);
        }
        NEW.evalScript_.call(this, script);
        return true;
        //
    }); // v0.00a - v0.00a

    $.IS_CACHE_SCRIPT = false;

    /**
     * The this pointer is Game_Interpreter.prototype
     * Nullipotent
     * @author DoubleX @interface @since v0.00a @version v0.00a
     * @returns {boolean} Whether there are still more script lines to be read
     */
    NEW.hasNextScriptLine = function() { return this.nextEventCode() === 655; };

    /**
     * The this pointer is Game_Interpreter.prototype
     * Nullipotent
     * @author DoubleX @interface @since v0.00a @version v0.00a
     * @returns {string} The current script line to be read from the script box
     */
    NEW.curScriptLine = function() {
        return `${this.currentCommand().parameters[0]}\n`;
    }; // $.curScriptLine

    NEW._isSameSwitchState = params => {
        return $gameSwitches.value(params[1]) === (params[2] === 0);
    }; // NEW._isSameSwitchState
    NEW._isVarValRelationMet = params => {
        const value1 = $gameVariables.value(params[1]), rhs = params[3];
        const value2 = params[2] === 0 ? rhs : $gameVariables.value(rhs);
        switch (params[4]) {
            case 0: return value1 === value2;
            case 1: return value1 >= value2;
            case 2: return value1 <= value2;
            case 3: return value1 > value2;
            case 4: return value1 < value2;
            case 5: return value1 !== value2;
            default: return false;
        }
    }; // NEW._isVarValRelationMet
    NEW._isSameSelfSwitchState = (eventId, mapId, params) => {
        if (eventId <= 0) return false;
        const key = [mapId, eventId, params[1]];
        return $gameSelfSwitches.value(key) === (params[2] === 0);
    }; // NEW._isSameSwitchState
    NEW._isTimerValRelationMet = params => {
        if (!$gameTimer.isWorking()) return false;
        const secs = $gameTimer.seconds(), timerVal = params[1];
        return params[2] === 0 ? secs >= timerVal : secs <= timerVal;
    }; // NEW._isTimerValRelationMet
    NEW._isActorCondMet = params => {
        const actor = $gameActors.actor(params[1]);
        if (!actor) return false;
        const n = params[3];
        switch (params[2]) {
            case 0: return $gameParty.members().includes(actor);
            case 1: return actor.name() === n;
            case 2: return actor.isClass($dataClasses[n]);
            case 3: return actor.hasSkill(n);
            case 4: return actor.hasWeapon($dataWeapons[n]);
            case 5: return actor.hasArmor($dataArmors[n]);
            case 6: return actor.isStateAffected(n);
            default: return false;
        }
    }; // NEW._isActorCondMet
    NEW._isEnemyCondMet = params => {
        const enemy = $gameTroop.members()[params[1]];
        if (!enemy) return false;
        switch (params[2]) {
            case 0: return enemy.isAlive();
            case 1: return enemy.isStateAffected(params[3]);
            default: return false;
        }
    }; // NEW._isEnemyCondMet
    NEW._isSameCharDir = (char_, dir) => char_ && char_.direction() === dir;
    NEW._isGoldValRelationMet = params => {
        const goldVal = params[1];
        switch (params[2]) {
            case 0: return $gameParty.gold() >= goldVal;
            case 1: return $gameParty.gold() <= goldVal;
            case 2: return $gameParty.gold() < goldVal;
            default: return false;
        }
    }; // NEW._isGoldValRelationMet
    NEW._isButtonEventRun = params => {
        const keyName = params[1];
        switch (params[2] || 0) {
            case 0: return Input.isPressed(keyName);
            case 1: return Input.isTriggered(keyName);
            case 2: return Input.isRepeated(keyName);
            default: return false;
        }
    }; // NEW._isButtonEventRun
    /**
     * The this pointer is Game_Interpreter.prototype
     * Nullipotent
     * @author DoubleX @interface @since v0.00a @version v0.00a
     * @param {[*]} params - The conditional branch event parameters
     * @returns {boolean} Whether the if in the conditional branch is met
     */
    NEW._condBranchResult = function(params) {
        switch (params[0]) {
            case 0: return NEW._isSameSwitchState(params);
            case 1: return NEW._isVarValRelationMet(params);
            case 2: return NEW._isSameSelfSwitchState(
                    this._eventId, this._mapId, params);
            case 3: return NEW._isTimerValRelationMet(params);
            case 4: return NEW._isActorCondMet(params);
            case 5: return NEW._isEnemyCondMet(params);
            case 6: {
                return NEW._isSameCharDir(this.character(params[1]), params[2]);
            } case 7: return NEW._isGoldValRelationMet(params);
            case 8: return $gameParty.hasItem($dataItems[params[1]]);
            case 9: {
                return $gameParty.hasItem($dataWeapons[params[1]], params[2]);
            } case 10: {
                return $gameParty.hasItem($dataArmors[params[1]], params[2]);
            } case 11: return NEW._isButtonEventRun(params);
            case 12: return !!NEW.evalScriptLine_.call(this, params[1]);
            case 13: {
                return $gamePlayer.vehicle() === $gameMap.vehicle(params[1]);
            }
        }
    }; // NEW._condBranchResult

    /**
     * The this pointer is Game_Interpreter.prototype
     * Nullipotent
     * @author DoubleX @interface @since v0.00a @version v0.00a
     * @param {[*]} params - The control variable event parameters
     * @returns {[*]} The variable value and random max pair
     */
    NEW._varValRandMax = function(params) {
        const [operand, rhs, param5] = [params[3], params[4], params[5]];
        switch (operand) {
            case 0: return [rhs, 1];
            case 1: return [$gameVariables.value(rhs), 1];
            case 2: return [rhs, Math.max(param5 - rhs + 1, 1)];
            case 3: return [this.gameDataOperand(rhs, param5, params[6]), 1];
            case 4: return [NEW.evalScriptLine_.call(this, rhs), 1];
            default: return [0, 1];
        }
    }; // NEW._varValRandMax

    /**
     * The this pointer is Game_Interpreter.prototype
     * @author DoubleX @interface @since v0.00a @version v0.00a
     * @param {string} scriptLine - The raw script string input to be evaluated
     * @returns {*?} The result returned by the evaluated script
     */
    NEW.evalScriptLine_ = function(scriptLine) {
        return NEW.evalScript_.call(this, scriptLine);
    }; // NEW.evalScriptLine_

    NEW._cachedScripts = new Map();
    /**
     * The this pointer is Game_Interpreter.prototype
     * @author DoubleX @interface @since v0.00a @version v0.00a
     * @param {string} script - The raw script string input to be evaluated
     * @returns {*?} The result returned by the evaluated script
     */
    NEW.evalScript_ = function(script) {
        if (!script) return undefined;
        if (!$.IS_CACHE_SCRIPT) return eval(script);
        // It's to avoid 1st call being eval and subsequent ones being functions
        if (!NEW._cachedScripts.has(script)) {
            NEW._cachedScripts.set(script, new Function(script));
        }
        return NEW._cachedScripts.get(script).call(this);
        //
    }; // NEW.evalScript_

})(Game_Interpreter, DoubleX_RMMZ.Enhanced_Codebase);

/*============================================================================*/
