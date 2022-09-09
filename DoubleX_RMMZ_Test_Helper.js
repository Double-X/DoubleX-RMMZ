/*============================================================================
 *    ## Plugin Info
 *----------------------------------------------------------------------------
 *    # Plugin Name
 *      DoubleX_RMMZ_Test_Helper
 *----------------------------------------------------------------------------
 *    # Introduction
 *      1. Some plugin developers will write automated tests for their
 *         plugins, and some of them want their testing codes to be used by
 *         their plugin users as well, so those automated tests can catch
 *         abnormalities when those users and their players run the games
 *      2. With this plugin, you can write those automated tests more
 *         effectively and efficiently, without having to use full-fledged
 *         testing frameworks like Jasmine or Mocha, because you'd have to
 *         ask your users and even their players to install them as well in
 *         order for your automated tests to be run during production
 *----------------------------------------------------------------------------
 *    # Prerequisites
 *      Abilities:
 *      1. Little RMMZ plugin development proficiency to fully utilize this
 *         (Elementary Javascript exposures being able to write beginner codes
 *         up to 300LoC scale)
 *----------------------------------------------------------------------------
 *    # Author Notes
 *      1. This plugin's meant to be used by other plugin developers, but
 *         plugin users will still need this if the automated tests of the
 *         plugins they're using do use this test helper plugin
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
 *      1. https://github.com/Double-X/DoubleX-RMMZ/blob/master/DoubleX_RMMZ_Test_Helper.js
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
 *      { codebase: "1.0.2", plugin: "v1.00a" }(2020 Sep 24 GMT 1400):
 *      1. 1st version of this plugin finished
 *============================================================================*/
/*:
 * @url https://www.patreon.com/doublex
 * @target MZ
 * @plugindesc Versions: { codebase: "1.0.2", plugin: "v1.00a" }
 * Helps you write automated tests more effectively and efficiently
 * @orderAfter DoubleX_RMMZ_Enhanced_Codebase
 * @orderAfter DoubleX RMMZ Enhanced Codebase
 * @author DoubleX
 *
 * @help
 *============================================================================
 *    ## Plugin Developer Info
 *----------------------------------------------------------------------------
 *    Please check the TestHelper class in the plugin implementations
 *    You're free to edit that class to make it suit your needs
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
    DoubleX_RMMZ.Test_Helper = {
        PLUGIN_NAME: name,
        VERSIONS: { codebase: "1.0.2", plugin: "v1.00a" }
    }; // DoubleX_RMMZ.Test_Helper
    //

})();

(TH => {

    "use strict";

    const pluginCodebaseVer = TH.VERSIONS.codebase;
    if (Utils.checkRMVersion(pluginCodebaseVer)) return;
    console.warn(`Your codebase version is ${Utils.RPGMAKER_VERSION} but must be
                 at least ${pluginCodebaseVer} to use ${TH.PLUGIN_NAME}`);

})(DoubleX_RMMZ.Test_Helper);

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

class TestHelper {

    static TEXT_ALIGNS = [
        "left",
        "right",
        "center",
        "justify",
        "initial",
        "inherit"
    ]; // TEXT_ALIGNS

    /**
     * Idempotent
     * @author DoubleX @constructor @since v1.00a @version v1.00a
     * @param {string} pluginName - The name of the plugin using the test helper
     * @param {id} switchId - The id of the switch enabling this test helper
     */
    constructor(pluginName, switchId) {
        [this._pluginName, this._switchId] = [pluginName, switchId];
        this._failMsgArgs = new Map();
    } // constructor

    /**
     * Hotspot
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {*} val - The actual parameter value
     * @param {string} param - The parameter being tested
     * @param {{*}?} context_ - The context of the failed test
     * @returns {Boolean} The check result
     */
    checkArray(val, param, context_) {
        if (Array.isArray(val)) return true;
        this.showFailMsg(val, param, "It should be an Array!", context_);
        return false;
    } // checkArray

    /**
     * Hotspot/No-op
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {*} val - The actual parameter value
     * @param {string} param - The parameter being tested
     * @param {Constructor} Type - The type of the actual parameter value
     * @param {{*}?} context_ - The context of the failed test
     */
    checkArrayObjType(val, param, Type, context_) {
        if (!this.checkArray(val, param, context_)) return;
        val.forEach(elem => this.checkObjType(elem, param, Type, context_));
    } // checkArrayObjType

    /**
     * Hotspot/No-op
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {<T>} val - The actual parameter value
     * @param {string} param - The parameter being tested
     * @param {[<T>]} vals - The list of valid primitive values
     * @param {{*}?} context_ - The context of the failed test
     */
    checkArrayVals(val, param, vals, context_) {
        if (!this.checkArray(val, param, context_)) return;
        // The filter function doesn't use the original array
        var conds = [
            "These elements should be within " + vals + ":"
        ].concat(val.map((v, i) => {
            return vals.includes(v) ? "" : v + " with index " + i;
        }).filter(Boolean));
        //
        if (conds.length > 1) this.showFailMsg(
                JSON.stringify(val), param, conds.join("\n"), context_);
    } // checkArrayVals

    /**
     * Hotspot/No-op
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {*} val - The actual parameter value
     * @param {string} param - The parameter being tested
     * @param {{*}?} context_ - The context of the failed test
     */
    checkBool(val, param, context_) {
        if (val === !!val) return;
        this.showFailMsg(val, param, "It should be a Boolean!", context_);
    } // checkBool

    /**
     * Hotspot/No-op
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {*} val - The actual parameter value
     * @param {string} param - The parameter being tested
     * @param {{*}?} context_ - The context of the failed test
     */
    checkColor(val, param, context_) {
        if (!this.checkString(val, param, context_)) return;
        // #0xrrggbb or #rrggbb
        if (!val.match(/^#(?:0x)?[\da-f]{6}$/)) this.showFailMsg(
                val, param, "It should be a Color!", context_);
        //
    } // checkColor

    /**
     * Hotspot/No-op
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {*} val - The parameter function
     * @enum @param {Param} param - The parameter being tested
     * @param {{*}?} context_ - The context of the failed test
     * @returns {Boolean} The check result
     */
    checkFunc(val, param, context_) {
        if (typeof val === "function") return true;
        this.showFailMsg(val, param, "func should be a function!", context_);
        return false;
    } // checkFunc

    /**
     * Hotspot/No-op
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {*} val - The actual parameter value
     * @param {string} param - The parameter being tested
     * @param {{*}?} context_ - The context of the failed test
     */
    checkHue(val, param, context_) {
        this.checkIntRange(val, param, 0, 360, context_);
    } // checkHue

    /**
     * Hotspot/No-op
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {*} val - The actual parameter value
     * @param {string} param - The parameter being tested
     * @param {{*}?} context_ - The context of the failed test
     * @returns {Boolean} The check result
     */
    checkInt(val, param, context_) {
        if (Number.isInteger(val)) return true;
        this.showFailMsg(val, param, "It should be an integer!", context_);
        return false;
    } // checkInt

    /**
     * Hotspot/No-op
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {*} val - The actual parameter value
     * @param {string} param - The parameter being tested
     * @param {Int} min - The minimum valid integer value
     * @param {Int} max - The maximum valid integer value
     * @param {{*}?} context_ - The context of the failed test
     */
    checkIntRange(val, param, min, max, context_) {
        if (!this.checkInt(val, param, context_)) return;
        if (val < min || val > max) this.showFailMsg(val, param,
                "It should be an integer from " + min + " to " + max +
                " inclusive!", context_);
    } // checkIntRange

    /**
     * Hotspot/No-op
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {*} val - The actual parameter value
     * @param {string} param - The parameter being tested
     * @param {{*}?} context_ - The context of the failed test
     */
    checkNonnegativeInt(val, param, context_) {
        if (val < 0 || !Number.isInteger(val)) this.showFailMsg(val,
                param, "It should be a nonnegative integer!", context_);
    } // checkNonnegativeInt

    /**
     * Hotspot/No-op
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {*} val - The actual parameter value
     * @param {string} param - The parameter being tested
     * @param {{*}?} context_ - The context of the failed test
     */
    checkNonnegativeNum(val, param, context_) {
        if (isNaN(val) || val < 0) this.showFailMsg(
                val, param, "It should be a nonnegative Number!", context_);
    } // checkNonnegativeNum

    /**
     * Hotspot/No-op
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {*} val - The actual parameter value
     * @param {string} param - The parameter being tested
     * @param {{*}?} context_ - The context of the failed test
     */
    checkNaturalNum(val, param, context_) {
        if (val <= 0 || !Number.isInteger(val)) this.showFailMsg(
                val, param, "It should be a natural Number!", context_);
    } // checkNaturalNum

    /**
     * Hotspot/No-op
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {*} val - The actual parameter value
     * @param {string} param - The parameter being tested
     * @param {{*}?} context_ - The context of the failed test
     */
    checkNum(val, param, context_) {
        if (!isNaN(val)) return;
        this.showFailMsg(val, param, "It should be a Number!", context_);
    } // checkNum

    /**
     * Hotspot/No-op
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {*} val - The actual parameter value
     * @param {string} param - The parameter being tested
     * @param {{*}?} context_ - The context of the failed test
     * @returns {Boolean} The check result
     */
    checkObj(val, param, context_) {
        if (val && val.constructor === Object) return true;
        this.showFailMsg(val, param, "It should be an Object!", context_);
        return false;
    } // checkObj

    /**
     * Hotspot/No-op
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {*} val - The actual parameter value
     * @param {string} param - The parameter being tested
     * @param {Constructor} Type - The type of the actual parameter value
     * @param {{*}?} context_ - The context of the failed test
     */
    checkObjType(val, param, Type, context_) {
        if (!(val instanceof Type)) this.showFailMsg(
                val, param, "It should be a " + Type + "!", context_);
    } // checkObjType

    /**
     * Hotspot/No-op
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {*} val - The actual parameter value
     * @param {string} param - The parameter being tested
     * @param {{string}} checkFuncs - The function to check each object val
     * @param {{*}?} context_ - The context of the failed test
     */
    checkObjVals(val, param, checkFuncs, context_) {
        // There's no need to check anything if there's no checkFunc
        if (!checkFuncs) return;
        if (!this.checkObj(val, param, context_)) return;
        Object.entries(checkFuncs).forEach((key, checkFunc) => {
            this[checkFunc](val[key], param + "." + key, context_);
        });
    } // checkObjVals

    /**
     * Hotspot/No-op
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {*} val - The actual parameter value
     * @param {string} param - The parameter being tested
     * @param {{*}?} context_ - The context of the failed test
     */
    checkOpacity(val, param, context_) {
        this.checkIntRange(val, param, 0, 255, context_);
    } // checkOpacity

    /**
     * Hotspot/No-op
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {*} val - The actual parameter value
     * @param {string} param - The parameter being tested
     * @param {{*}?} context_ - The context of the failed test
     */
    checkPositiveNum(val, param, context_) {
        if (isNaN(val) || val <= 0) this.showFailMsg(
                val, param, "It should be a positive Number!", context_);
    } // checkPositiveNum

    /**
     * Hotspot/No-op
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {*} val - The actual parameter value
     * @param {string} param - The parameter being tested
     * @param {{*}?} context_ - The context of the failed test
     * @returns {Boolean} The check result
     */
    checkString(val, param, context_) {
        if (typeof val === "string" || val instanceof String) return true;
        this.showFailMsg(val, param, "It should be a String!", context_);
        return false;
    } // checkString

    /**
     * Hotspot/No-op
     * @author DoubleX @interface @since v0.01a @version v1.00a
     * @param {*} val - The actual parameter value
     * @param {string} param - The parameter being tested
     * @param {{*}?} context_ - The context of the failed test
     */
    checkStringArray(val, param, context_) {
        if (this.checkArray(val, param, context_)) val.forEach((v, i) => {
            this.checkString(v, param + " " + i + "th elem", context_);
        });
    } // checkStringArray

    /**
     * Hotspot/No-op
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {*} val - The actual parameter value
     * @param {string} param - The parameter being tested
     * @param {{*}?} context_ - The context of the failed test
     */
    checkTextAlign(val, param, context_) {
        this.checkVal(val, param, TestHelper.TEXT_ALIGNS, context_);
    } // checkTextAlign

    /**
     * Hotspot/No-op
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {*} val - The actual parameter value
     * @param {string} param - The parameter being tested
     * @param {[*]} vals - The list of valid values
     * @param {{*}?} context_ - The context of the failed test
     */
    checkVal(val, param, vals, context_) {
        if (!vals.includes(val)) this.showFailMsg(
                val, param, "It should be within " + vals + "!", context_);
    } // checkVal

    /**
     * Hotspot/No-op
     * @since v1.00a @version v1.00a
     * @param {*} val - The actual parameter value
     * @param {string} funcName - The name of the function making this log
     * @param {{*}?} contents_ - The contents to be logged in thie log
     */
    logMsg(funcName, contents_) {
        if (!this._isShowMsg()) return;
        contents_ ? console.info(funcName, contents_) : console.info(funcName);
    } // logMsg

    /**
     * Hotspot/No-op
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {*} val - The actual parameter value
     * @param {string} param - The parameter being tested
     * @param {string} cond - The parameter validity condition description
     * @param {{*}?} context_ - The context of the failed test
     */
    showFailMsg(val, param, cond, context_) {
        if (!this._isShowMsg()) return;
        const failMsgArgs = JSON.stringify({ val, param, cond });
        // Prevent the same fail message from needlessly flooding the console
        if (this._failMsgArgs.has(failMsgArgs)) return;
        //
        try { throw new Error("This test case has failed!"); } catch (err) {
            this._onShowFailMsg(val, param, cond, failMsgArgs, err, context_);
        }
    } // showFailMsg

    /**
     * Hotspot/Nullipotent
     * @author DoubleX @since v1.00a @version v1.00a
     * @returns {boolean} Whether the automated test messages will be shown
     */
    _isShowMsg() {
        return $gameSwitches && $gameSwitches.value(this._switchId);
    } // _isShowMsg

    /**
     * Hotspot/No-op
     * @author DoubleX @interface @since v1.00a @version v1.00a
     * @param {*} val - The actual parameter value
     * @param {string} param - The parameter being tested
     * @param {string} cond - The parameter validity condition description
     * @param {string} failMsgArgs - The failed val, param cond combination key
     * @param {Error} err - The fake error being thrown for the failed test
     * @param {{*}?} context_ - The context of the failed test
     */
    _onShowFailMsg(val, param, cond, failMsgArgs, err, context_) {
        const failMsg = this._failMsg(val, param, cond, err);
        this._failMsgArgs.set(failMsgArgs, failMsg);
        if (context_) return console.warn(failMsg, context_);
        console.warn(failMsg);
    } // _onShowFailMsg

    /**
     * Hotspot/Nullipotent
     * @author DoubleX @since v1.00a @version v1.00a
     * @param {*} val - The actual parameter value
     * @param {string} param - The parameter being tested
     * @param {string} cond - The parameter validity condition description
     * @param {Error} err - The fake error being thrown for the failed test
     * @returns {string} The failed test messages to be displayed
     */
    _failMsg(val, param, cond, err) {
        return `
        ${param} in ${this._pluginName} has value:
        ${val}
        Which isn't valid because:
        ${cond}
        The cause's shown by this stacktrace:
        ${err.stack}
        `;
    } // _failMsg

} // TestHelper

/*============================================================================*/
