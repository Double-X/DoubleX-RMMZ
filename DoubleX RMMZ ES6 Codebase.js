/*============================================================================
 *    ## Plugin Info
 *----------------------------------------------------------------------------
 *    # Plugin Name
 *      DoubleX RMMZ ES6 Codebase
 *----------------------------------------------------------------------------
 *    # Introduction
 *    1. As the majority of the default RMMZ codebase's still written in ES5,
 *       which can cause problems to those avoiding direct prototyping like a
 *       plague or those not being familiar with ES5, this plugin aims to
 *       rewrite the whole codebase into the ES6 standard
 *    2. This plugin's supposed to be fully compatible with those not written
 *       with this plugin in mind, so plugin developers don't have to write 2
 *       versions per plugin
 *    3. THIS PLUGIN'S INTENDED TO GIVES AN EXTRA OPTION TO PLUGIN DEVELOPERS
 *       RATHER THAN REPLACING THE DEFAULT RMMZ CODEBASE
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
 *    # Prerequisites
 *      Abilities:
 *      1. Some RMMZ plugin development proficiency to fully utilize this
 *         plugin in intended ways
 *         (Basic knowledge on what RMMZ plugin development does in general
 *         with several easy, simple and small plugins written without
 *         nontrivial bugs up to 1000 LoC scale but still being inexperienced)
 *----------------------------------------------------------------------------
 *    # Links
 *      This Plugin:
 *      1. https://github.com/Double-X/DoubleX-RMMZ/blob/master/DoubleX%20RMMZ%20ES6%20Codebase.js
 *      Posts:
 *      1.
 *      2.
 *      3.
 *      4.
 *      5.
 *      6.
 *      7.
 *      8.
 *----------------------------------------------------------------------------
 *    # Instructions
 *      1. THIS PLUGIN MUST BE PLACED ABOVE ALL THE OTHER PLUGINS
 *      2. The version number of this plugin's supposed to be the same as that
 *         of the default RMMZ codebase, so this plugin must be outdated if
 *         those version numbers are indeed different
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
 *      0.9.5(GMT 1400 4-Aug-2020):
 *      1. Rewritten the core parts into the ES6 standard
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
 * @plugindesc (0.9.5)Helps plugin developers write their plugins into ES6
 * standards, but such plugins will need this plugin to work
 * @author DoubleX
 *
 * @help
 *============================================================================
 *    ## Plugin Developers Info
 *----------------------------------------------------------------------------
 *    # Aliasing functions/methods without prototyping on your side
 *      Please note that it doesn't work with built-in JavaScript prototypes
 *      like Array and String
 *      Do these 2 additional things when using ES6 class inheritance aliasing
 *      without directly typing prototypes:
 *      1. Adds the following code right below a new class inheriting another
 *         one:
 *         - ES6ExtendedClassAlias.inherit(Klass);
 *         Where Klass is the new class inheriting another one
 *      2. Adds the following code right below extending an existing class as
 *         a way to alias its methods:
 *         - ES6ExtendedClassAlias.update(Klass);
 *         Where Klass is the existing class being extended as a way to alias
 *         its methods
 *      Right now it doesn't work well with inheriting static functions in
 *      classes, so those in children classes should use
 *      ParentClass.staticFunc.call(this) instead of super.staticFunc()
 *   # New public APIs
 *     Input
 *     1. isJustReleased(keyName)
 *        Returns if the specified key's just released right on this frame
 *     Array.prototype
 *     1. fastMap(mapCallback, mapThis_)
 *        The same as map but is tested to be noticeably faster
 *     2. fastMerge(arr)
 *        The same as concat except that fastMerge alters the original array
 *        instead of returning a new one
 *     3. filterMap(filterCallback, mapCallback, filterThis_, mapThis_)
 *        The same as chaining filter with map except that the new array
 *        returned by filter will be mapped in place(.filter().map())
 *     4. mapFilter(mapCallback, filterCallback, mapThis_, filterThis_)
 *        The same as chaining map with filter except that the new array
 *        returned by map will be filtered in place(.map().filter())
 *     5. mapReduce(mapCallback, reduceCallback, initVal_, mapThis_, reduceThis_)
 *        The same as chaining map with reduce but is tested to be noticeably
 *        faster(.map().reduce())
 *     6. isProperSubsetOf(arr)
 *        Returns if this array's a proper subset of the specified array
 *     7. isProperSupersetOf(arr)
 *        Returns if this array's a proper superset of the specified array
 *     8. isSupersetOf(arr)
 *        Returns if this array's a superset of the specified array
 *     9. isSubsetOf(arr)
 *        Returns if this array's a subset of the specified array
 *     10. isEmpty()
 *         Returns if this array's empty
 *     11. symmetricDifference(arr)
 *         Returns the symmetric difference of this and the specified array
 *     12. union(arr)
 *         Returns the union of this and the specified array
 *     13. difference(arr)
 *         Returns the difference of this and the specified array
 *     14. intersection(arr)
 *         Returns the intersection of this and the specified array
 *     15. excludes(elem, fromI)
 *         Returns if this array doesn't include the specified element
 *     16. clear()
 *         Empties the whole array
 *============================================================================
 */

var DoubleX_RMMZ = DoubleX_RMMZ || {};
DoubleX_RMMZ["ES6 Codebase"] = "0.9.5";

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

/*----------------------------------------------------------------------------
 *    # New class: ES6ExtendedClassAlias
 *      - Lets plugin developers alias ES6 classes without direct prototyping
 *----------------------------------------------------------------------------*/

class ES6ExtendedClassAlias {

    static _inheritances = new Map();

    /**
     * Idempotent
     * @author DoubleX @constructor @since 0.9.5 @version 0.9.5
     */
    constructor() {
        throw new Error("ES6ExtendedClassAlias is a static class!");
    } // constructor

    /**
     * Idempotent
     * @author DoubleX @interface @since 0.9.5 @version 0.9.5
     * @param {Class} Child - The child class to inherit from its parent class
     */
    static inherit(Child) {
        const childProto = Child.prototype;
        const parentName = Object.getPrototypeOf(childProto).constructor.name;
        this._inherit(Child, parentName);
    } // inherit

    /**
     * Idempotent
     * @author DoubleX @interface @since 0.9.5 @version 0.9.5
     * @param {Class} Parent - The parent class to update its children classes
     */
    static update(Parent) {
        const parentName = Parent.prototype.constructor.name;
        // There's no need to update anything if the passed class's no children
        if (!this._inheritances.has(parentName)) return;
        this._update(this._inheritances.get(parentName), Parent);
        //
    } // update

    /**
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {Class} Child - The child class to inherit from its parent class
     * @param {string} parentName - The name of the parent of the Child class
     */
    static _inherit(Child, parentName) {
        // So the parent class will know which classes are its children
        if (this._inheritances.has(parentName)) {
            // Set can only have unique elements so Child won't be duplicated
            this._inheritances.get(parentName).add(Child);
            //
        } else this._inheritances.set(parentName, new Set([Child]));
        //
    } // _inherit

    /**
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {[Class]} children - The children classes of the parent class
     * @param {Class} Parent - The parent class to update its children classes
     */
    static _update(children, Parent) {
        this._updateProtoMethods(children, Parent.prototype);
        this._updateStaticFuncs(children, Parent);
    } // _update

    /**
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {[Class]} children - The children classes of the parent class
     * @param {Prototype} parentProto - The parent class prototype
     */
    static _updateProtoMethods(children, parentProto) {
        // So all the children will inherit the new rather than the old parent
        children.forEach(Child => Child.prototype.__proto__ = parentProto);
        //
    } // _updateProtoMethods

    /**
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {[Class]} children - The children classes of the parent class
     * @param {Class} Parent - The parent class to update its children classes
     */
    static _updateStaticFuncs(children, Parent) {
        // So all children will inherit all new static functions from new parent
        Object.getOwnPropertyNames(Parent).forEach(name => {
            const desc = Object.getOwnPropertyDescriptor(Parent, name);
            if (!desc || typeof desc.value !== "function") return;
            const parentFunc = Parent[name];
            children.forEach(Child => Child[name] = Child[name] || parentFunc);
        });
        //
    } // _updateStaticFuncs

} // ES6ExtendedClassAlias

/*----------------------------------------------------------------------------
 *    # Rewritten class: Graphics
 *      - Rewrites it into the ES6 standard
 *----------------------------------------------------------------------------*/

/**
 * The static class that carries out graphics processing.
 *
 * @namespace
 */
class Graphics {

    constructor() { throw new Error("This is a static class"); }

    static initialize() {
        // Edited to help plugins add more private variables in better ways
        this._initPrivateVars();
        //
        // Edited to help plugins add more public variables in better ways
        this._initPublicVars();
        //
        this._updateRealScale();
        this._createAllElements();
        this._disableContextMenu();
        this._setupEventHandlers();
        this._createPixiApp();
        this._createEffekseerContext();
        return !!this._app;
    } // initialize

    /**
     * The PIXI.Application object.
     *
     * @readonly
     * @type PIXI.Application
     * @name Graphics.app
     */
    static get app() { return this._app; }

    /**
     * The context object of Effekseer.
     *
     * @readonly
     * @type EffekseerContext
     * @name Graphics.effekseer
     */
    static get effekseer() { return this._effekseer; }

    /**
     * Register a handler for tick events.
     *
     * @param {function} handler - The listener function to be added for updates.
     */
    static setTickHandler(handler) { this._tickHandler = handler; }

    /**
     * Starts the game loop.
     */
    static startGameLoop() { if (this._app) this._app.start(); }

    /**
     * Stops the game loop.
     */
    static stopGameLoop() { if (this._app) this._app.stop(); }

   /**
    * Sets the stage to be rendered.
    *
    * @param {Stage} stage - The stage object to be rendered.
    */
    static setStage(stage) { if (this._app) this._app.stage = stage; }

    /**
     * Shows the loading spinner.
     */
    static startLoading() {
        if (document.getElementById("loadingSpinner")) return;
        // Edited to help plugins alter loading spinner appending behaviors
        this._appendLoadingSpinner();
        //
    } // startLoading

    /**
     * Erases the loading spinner.
     *
     * @returns {boolean} True if the loading spinner was active.
     */
    static endLoading() {
        if (!document.getElementById("loadingSpinner")) return false;
        // Edited to help plugins alter loading spinner removing behaviors
        this._removeLoadingSpinner();
        //
        return true;
    } // endLoading

    /**
     * Displays the error text to the screen.
     *
     * @param {string} name - The name of the error.
     * @param {string} message - The message of the error.
     * @param {Error} [error] - The error object.
     */
    static printError(name, message, error = null) {
        if (!this._errorPrinter) this._createErrorPrinter();
        this._errorPrinter.innerHTML = this._makeErrorHtml(name, message, error);
        this._wasLoading = this.endLoading();
        this._applyCanvasFilter();
    } // printError

    /**
     * Displays a button to try to reload resources.
     *
     * @param {function} retry - The callback function to be called when the button
     *                           is pressed.
     */
    static showRetryButton(retry) {
        const button = document.createElement("button");
        [button.id, button.innerHTML] = ["retryButton", "Retry"];
        // [Note] stopPropagation() is required for iOS Safari.
        // Edited to help plugins alter these listener function contents
        button.ontouchstart = this._onRetryTouchStart.bind(this);
        button.onclick = this._onRetry.bind(this, retry);
        //
        this._errorPrinter.appendChild(button);
        button.focus();
    } // showRetryButton

    /**
     * Erases the loading error text.
     */
    static eraseError() {
        // Edited to help plugins alter error erasing behaviors with the printer
        if (this._errorPrinter) this._eraseErrorWithPrinter();
        //
        this._clearCanvasFilter();
    } // eraseError

    /**
     * Converts an x coordinate on the page to the corresponding
     * x coordinate on the canvas area.
     *
     * @param {number} x - The x coordinate on the page to be converted.
     * @returns {number} The x coordinate on the canvas area.
     */
    static pageToCanvasX(x) {
        // Edited to help plugins alter the canvas x value with existing canvas
        return this._canvas ? this._pageToExistingCanvasX(x) : 0;
        //
    } // pageToCanvasX

    /**
     * Converts a y coordinate on the page to the corresponding
     * y coordinate on the canvas area.
     *
     * @param {number} y - The y coordinate on the page to be converted.
     * @returns {number} The y coordinate on the canvas area.
     */
    static pageToCanvasY(y) {
        // Edited to help plugins alter the canvas y value with existing canvas
        return this._canvas ? this._pageToExistingCanvasY(y) : 0;
        //
    } // pageToCanvasY

    /**
     * Checks whether the specified point is inside the game canvas area.
     *
     * @param {number} x - The x coordinate on the canvas area.
     * @param {number} y - The y coordinate on the canvas area.
     * @returns {boolean} True if the specified point is inside the game canvas area.
     */
    static isInsideCanvas(x, y) {
        return x >= 0 && x < this._width && y >= 0 && y < this._height;
    } // isInsideCanvas

    /**
     * Shows the game screen.
     */
    static showScreen() { this._canvas.style.opacity = 1; }

    /**
     * Hides the game screen.
     */
    static hideScreen() { this._canvas.style.opacity = 0; }

    /**
     * Changes the size of the game screen.
     *
     * @param {number} width - The width of the game screen.
     * @param {number} height - The height of the game screen.
     */
    static resize(width, height) {
        [this._width, this._height] = [width, height];
        /** @todo Check if it should be called with the same width and height */
        this._updateAllElements();
        //
    } // resize

    /**
     * The width of the game screen.
     *
     * @type number
     * @name Graphics.width
     */
    static get width() { return this._width; }

    /**
     * The width of the game screen.
     *
     * @type number
     * @name Graphics.width
     */
    // Edited to dry up codes essentially being the identical knowledge
    static set width(value) { this._updateDimen("_width", value); }
    //

    /**
     * The height of the game screen.
     *
     * @type number
     * @name Graphics.height
     */
    static get height() { return this._height; }

    /**
     * The height of the game screen.
     *
     * @type number
     * @name Graphics.height
     */
    // Edited to dry up codes essentially being the identical knowledge
    static set height(value) { this._updateDimen("_height", value); }
    //

    /**
     * The default zoom scale of the game screen.
     *
     * @type number
     * @name Graphics.defaultScale
     */
    static get defaultScale() { return this._defaultScale; }

    /**
     * The default zoom scale of the game screen.
     *
     * @type number
     * @name Graphics.defaultScale
     */
    static set defaultScale(value) {
        // Edited to dry up codes essentially being the identical knowledge
        this._updateDimen("_defaultScale", value);
        //
    } // defaultScale

    static _createAllElements() {
        this._createErrorPrinter();
        this._createCanvas();
        this._createLoadingSpinner();
        this._createFPSCounter();
    } // _createAllElements

    static _updateAllElements() {
        this._updateRealScale();
        this._updateErrorPrinter();
        this._updateCanvas();
        this._updateVideo();
    } // _updateAllElements

    static _onTick(deltaTime) {
        this._fpsCounter.startTick();
        if (this._tickHandler) this._tickHandler(deltaTime);
        this._app.render();
        this.frameCount++;
        this._fpsCounter.endTick();
    } // _onTick

    static _updateRealScale() {
        // Edited to help plugins alter real scale updating behaviors
        if (this._isUpdateStretchRealScale()) {
            this._updateStretchRealScale();
        } else this._updateDefaultRealScale();
        //
    } // _updateRealScale

    static _stretchWidth() {
        if (Utils.isMobileDevice()) return document.documentElement.clientWidth;
        return window.innerWidth;
    } // _stretchWidth

    static _stretchHeight() {
        if (!Utils.isMobileDevice()) return window.innerHeight;
        // [Note] Mobile browsers often have special operations at the top and
        // bottom of the screen.
        const rate = Utils.isLocal() ? 1.0 : 0.9;
        return document.documentElement.clientHeight * rate;
    } // _stretchHeight

    static _makeErrorHtml(name, message /*, error*/) {
        // Edited to dry up codes essentially being the identical knowledge
        const nameHTML = this._errorHTML("errorName", name);
        const msgHTML = this._errorHTML("errorMessage", message);
        return nameHTML + msgHTML;
        //
    } // _makeErrorHtml

    static _defaultStretchMode() {
        return Utils.isNwjs() || Utils.isAtsumaru() || Utils.isMobileDevice();
    } // _defaultStretchMode

    static _createErrorPrinter() {
        // Edited to help plugins alter the error printer in better ways
        this._errorPrinter = this._newErrorPrinter();
        //
        document.body.appendChild(this._errorPrinter);
    } // _createErrorPrinter

    static _updateErrorPrinter() {
        // Edited to help plugins alter the existing error printer in better way
        if (this._errorPrinter) this._updateExistingErrorPrinter();
        //
    } // _updateErrorPrinter

    static _createCanvas() {
        // Edited to help plugins alter the canvas in better ways
        this._canvas = this._newCanvas();
        this._updateExistingCanvas();
        //
        document.body.appendChild(this._canvas);
    } // _createCanvas

    // Edited to help plugins update the existing canvas in better ways
    static _updateCanvas() { if (this._canvas) this._updateExistingCanvas(); }
    //

    static _updateVideo() {
        const w = this._width * this._realScale;
        const h = this._height * this._realScale;
        Video.resize(w, h);
    } // _updateVideo

    static _createLoadingSpinner() {
        // Edited to help plugins create the loading spinner in better ways
        this._loadingSpinner = this._newLoadingSpinner();
        //
    } // _createLoadingSpinner

    static _createFPSCounter() { this._fpsCounter = new Graphics.FPSCounter(); }

    static _centerElement(element) {
        const { style, width, height } = element;
        [style.position, style.margin] = ["absolute", "auto"];
        style.top = style.left = style.right = style.bottom = 0;
        style.width = `${width * this._realScale}px`;
        style.height = `${height * this._realScale}px`;
    } // _centerElement

    static _disableContextMenu() {
        const oncontextmenu = () => false;
        document.body.getElementsByTagName("*").forEach(elem => {
            elem.oncontextmenu = oncontextmenu;
        });
    } // _disableContextMenu

    static _applyCanvasFilter() {
        // Edited to help plugins apply existing canvas filter in better ways
        if (this._canvas) this._applyExistingCanvasFilter();
        //
    } // _applyCanvasFilter

    static _clearCanvasFilter() {
        // Edited to help plugins clear existing canvas filter in better ways
        if (this._canvas) this._clearExistingCanvasFilter();
        //
    } // _clearCanvasFilter

    static _setupEventHandlers() {
        window.addEventListener("resize", this._onWindowResize.bind(this));
        document.addEventListener("keydown", this._onKeyDown.bind(this));
    } // _setupEventHandlers

    static _onWindowResize() { this._updateAllElements(); }

    static _onKeyDown(event) {
        // Edited to help plugins alter key events in better ways
        if (this._hasNoKeyEvent(event)) return;
        const { keyCode } = event;
        for (const [keyCodeFunc, eventFunc] of this._keyEvents) {
            if (keyCodeFunc() !== keyCode) continue;
            event.preventDefault();
            return eventFunc();
        }
        //
    } // _onKeyDown

    static _switchFPSCounter() { this._fpsCounter.switchMode(); }

    static _switchStretchMode() {
        this._stretchEnabled = !this._stretchEnabled;
        /** @todo Check if it should be called if there's nothing to stretch */
        this._updateAllElements();
        //
    } // _switchStretchMode

    static _switchFullScreen() {
        if (this._isFullScreen()) return this._cancelFullScreen();
        this._requestFullScreen();
    } // _switchFullScreen

    static _isFullScreen() {
        if (document.fullScreenElement) return true;
        return document.mozFullScreen || document.webkitFullscreenElement;
    } // _isFullScreen

    static _requestFullScreen() {
        const elem = document.body;
        if (elem.requestFullScreen) return elem.requestFullScreen();
        if (elem.mozRequestFullScreen) return elem.mozRequestFullScreen();
        if (!elem.webkitRequestFullScreen) return;
        elem.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
    } // _requestFullScreen

    static _cancelFullScreen() {
        if (document.cancelFullScreen) return document.cancelFullScreen();
        if (document.mozCancelFullScreen) return document.mozCancelFullScreen();
        if (!document.webkitCancelFullScreen) return;
        document.webkitCancelFullScreen();
    } // _cancelFullScreen

    static _createPixiApp() {
        /** @todo Thinks of if at least logging the catch will be better */
        try {
            // Edited to help plugins creating pixi app in better ways
            this._createPixiAppWithoutRescue();
            //
        } catch (e) { this._app = null; }
        //
    } // _createPixiApp

    static _setupPixi() {
        PIXI.utils.skipHello();
        PIXI.settings.GC_MAX_IDLE = 600;
    } // _setupPixi

    static _createEffekseerContext() {
        // Edited to help plugins creating effekseer context in better ways
        if (this._isCreateEffekseerContext()) this._tryCreateEffekseerContext();
        //
    } // _createEffekseerContext

    /**
     * Initializes all graphics private variables
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    static _initPrivateVars() {
        this._width = this._height = 0;
        this._defaultScale = this._realScale = 1;
        this._errorPrinter = this._tickHandler = this._canvas = null;
        this._fpsCounter = this._loadingSpinner = null;
        this._stretchEnabled = this._defaultStretchMode();
        this._app = this._effekseer = null;
        this._wasLoading = false;
        // Added to help plugins alter key events in better ways
        this._initKeyEvents();
        //
    } // _initPrivateVars

    /**
     * Adds a new private variable to help plugins alter key events
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    static _initKeyEvents() {
        this._keyEvents = new Map();
        const fpsKeyFunc = this._switchFPSCounterKey.bind(this);
        this._keyEvents.set(fpsKeyFunc, this._switchFPSCounter.bind(this));
        const stretchKeyFunc = this._switchStretchModeKey.bind(this);
        this._keyEvents.set(stretchKeyFunc, this._switchStretchMode.bind(this));
        const fullScreenKeyFn = this._switchFullScreenKey.bind(this);
        this._keyEvents.set(fullScreenKeyFn, this._switchFullScreen.bind(this));
    } // _initKeyEvents

    /**
     * Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @enum @returns {number} - The code of the switch FPS counter key
     */
    static _switchFPSCounterKey() { return 113; /* F2 */ }

    /**
     * Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @enum @returns {number} - The code of the switch stretch mode key
     */
    static _switchStretchModeKey() { return 114; /* F3 */ }

    /**
     * Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @enum @returns {number} - The code of the switch full screen key
     */
    static _switchFullScreenKey() { return 115; /* F4 */ }

    /**
     * This function should be called after calling _initPrivateVars
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    static _initPublicVars() {
        /**
         * The total frame count of the game screen.
         *
         * @type number
         * @name Graphics.frameCount
         */
        this.frameCount = 0;
        /**
         * The width of the window display area.
         *
         * @type number
         * @name Graphics.boxWidth
         */
        this.boxWidth = this._width;
        /**
         * The height of the window display area.
         *
         * @type number
         * @name Graphics.boxHeight
         */
         this.boxHeight = this._height;
    } // _initPublicVars

    /**
     * This function shouldn't be called with an existing loading spinner
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    static _appendLoadingSpinner() {
        document.body.appendChild(this._loadingSpinner);
    } // _appendLoadingSpinner

    /**
     * This function shouldn't be called without an existing loading spinner
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    static _removeLoadingSpinner() {
        document.body.removeChild(this._loadingSpinner);
    } // _removeLoadingSpinner

    /**
     * It's supposed to be the ontouchstart event of the retry button
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    static _onRetryTouchStart(e) { e.stopPropagation(); }

    /**
     * It's supposed to be the onclick event of the retry button
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {()} retry - The callback to be called when the button's pressed
     */
    static _onRetry(retry) {
        this.eraseError();
        retry();
    } // _onRetry

    /**
     * This function shouldn't be called without an existing error printer
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    static _eraseErrorWithPrinter() {
        this._errorPrinter.innerHTML = this._makeErrorHtml();
        if (this._wasLoading) this.startLoading();
    } // _eraseErrorWithPrinter

    /**
     * Hotspot/Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {number} x - The x coordinate on the page to be converted
     * @returns {number} The x coordinate on the canvas area
     */
    static _pageToExistingCanvasX(x) {
        return Math.round((x - this._canvas.offsetLeft) / this._realScale);
    } // _pageToExistingCanvasX

    /**
     * Hotspot/Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {number} y - The y coordinate on the page to be converted
     * @returns {number} The y coordinate on the canvas area
     */
    static _pageToExistingCanvasY(y) {
        return Math.round((y - this._canvas.offsetTop) / this._realScale);
    } // _pageToExistingCanvasY

    /**
     * Updates all graphics elements if the specified dimension's indeed changed
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @enum @param {string} dimen - The name of the dimension to be updated
     * @param {*} val - The updated value of the dimension
     */
    static _updateDimen(dimen, val) {
        if (this[dimen] === val) return;
        this[dimen] = val;
        this._updateAllElements();
    } // _updateDimen

    /**
     * Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @returns {boolean} If the real scale's updated with the stretch enabled
     */
    static _isUpdateStretchRealScale() {
        return this._stretchEnabled && this._width > 0 && this._height > 0;
    } // _isUpdateStretchRealScale

    /**
     * Sets the real scale with the stretch enabled
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    static _updateStretchRealScale() {
        this._realScale = this._stretchRealScale();
        window.scrollTo(0, 0);
    } // _updateStretchRealScale

    /**
     * Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @returns {number} The real scale with the stretch enabled
     */
    static _stretchRealScale() {
        const h = this._stretchWidth() / this._width;
        const v = this._stretchHeight() / this._height;
        return Math.min(h, v);
    } // _stretchRealScale

    /**
     * Sets the real scale without the stretch enabled nor dimension to stretch
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    static _updateDefaultRealScale() { this._realScale = this._defaultScale; }

    /**
     * Creates a new document with a specified id as well as returning the html
     * Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @returns {string} The html of the specified error display portion
     */
    static _errorHTML(id, html) {
        const div = document.createElement("div");
        [div.id, div.innerHTML] = [id, Utils.escapeHtml(html || "")];
        return div.outerHTML;
    } // _errorHTML

    /**
     * Creates a new document with id errorPrinter as the error printer
     * Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @returns {DOM} The error printer document
     */
    static _newErrorPrinter() {
        const errorPrinter = document.createElement("div");
        errorPrinter.id = "errorPrinter";
        errorPrinter.innerHTML = this._makeErrorHtml();
        return errorPrinter;
    } // _newErrorPrinter

    /**
     * Updates the existing error printer document
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    static _updateExistingErrorPrinter() {
        const { style } = this._errorPrinter;
        /** @todo Figures out where 640 and 100 come from respectively */
        style.width = `${640 * this._realScale}px`;
        style.height = `${100 * this._realScale}px`;
        //
    } // _updateExistingErrorPrinter

    /**
     * Creates new canvas document with id gameCanvas
     * Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @returns {Canvas} The graphics canvas document
     */
    static _newCanvas() {
        const canvas = document.createElement("canvas");
        canvas.id = "gameCanvas";
        return canvas;
    } // _newCanvas

    /**
     * This function shouldn't be called without existing canvas
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    static _updateExistingCanvas() {
        [this._canvas.width, this._canvas.height] = [this._width, this._height];
        this._canvas.style.zIndex = 1;
        this._centerElement(this._canvas);
    } // _updateExistingCanvas

    /**
     * Creates a new document as the loading spinner with id loadingSpinner
     * Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @returns {DOM} The loading spinner document
     */
    static _newLoadingSpinner() {
        const loadingSpinner = document.createElement("div");
        loadingSpinner.id = "loadingSpinner";
        loadingSpinner.appendChild(this._newLoadingSpinnerImg());
        return loadingSpinner;
    } // _newLoadingSpinner

    /**
     * Creates a new dom as loading spinner image with id loadingSpinnerImage
     * Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @returns {DOM} The loading spinner document
     */
    static _newLoadingSpinnerImg() {
        const loadingSpinnerImage = document.createElement("div");
        loadingSpinnerImage.id = "loadingSpinnerImage";
        return loadingSpinnerImage;
    } // _newLoadingSpinnerImg

    /**
     * This function shouldn't be called without existing canvas
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    static _applyExistingCanvasFilter() {
        const { style } = this._canvas, filter = "blur(8px)";
        style.opacity = 0.5;
        [style.filter, style.webkitFilter] = [filter, filter];
    } // _applyExistingCanvasFilter

    /**
     * This function shouldn't be called without existing canvas
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    static _clearExistingCanvasFilter() {
        const { style } = this._canvas, filter = "";
        [style.opacity, style.filter, style.webkitFilter] = [1, filter, filter];
    } // _clearExistingCanvasFilter

    /**
     * Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {Event} event - The onkeydown event to be checked against
     * @returns {boolean} If the event might trigger functions to be called
     */
    static _hasNoKeyEvent(event) { return event.ctrlKey || event.altKey; }

    /**
     * This function shouldn't be called without a try and catch
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    static _createPixiAppWithoutRescue() {
        this._setupPixi();
        this._app = this._pixiApp();
    } // _createPixiAppWithoutRescue

    /**
     * Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @returns {PIXI.Application} The graphics pixi application
     */
    static _pixiApp() {
        const app = new PIXI.Application({
            view: this._canvas,
            autoStart: false
        });
        app.ticker.remove(app.render, app);
        app.ticker.add(this._onTick, this);
        return app;
    } // _pixiApp

    /**
     * Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @returns {boolean} If the effekseer context can be created
     */
    static _isCreateEffekseerContext() { return this._app && window.effekseer; }

    /**
     * Removes the pixi application if it fails to create an effekseer context
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    static _tryCreateEffekseerContext() {
        /** @todo Thinks of if at least logging the catch will be better */
        try {
            this._effekseer = this._effekseerContextWithoutRescue();
        } catch (e) { this._app = null; }
        //
    } // _tryCreateEffekseerContext

    /**
     * This function shouldn't be called without a try and catch
     * Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @returns {EffekseerContext} The graphics effekseer context
     */
    static _effekseerContextWithoutRescue() {
        const context = effekseer.createContext();
        if (context) context.init(this._app.renderer.gl);
        return context;
    } // _effekseerContextWithoutRescue

} // Graphics

/*----------------------------------------------------------------------------
 *    # Rewritten class: Graphics.FPSCounter
 *      - Rewrites it into the ES6 standard
 *----------------------------------------------------------------------------*/

//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// FPSCounter
//
// This is based on Darsain's FPSMeter which is under the MIT license.
// The original can be found at https://github.com/Darsain/fpsmeter.
Graphics.FPSCounter = class {

    constructor() {
        [this._tickCount, this._frameTime, this._frameStart] = [0, 100, 0];
        [this._lastLoop, this._showFps] = [performance.now() - 100, true];
        this.fps = this.duration = 0;
        this._createElements();
        this._update();
    } // constructor

    startTick() { this._frameStart = performance.now(); }

    endTick() {
        const time = performance.now(), thisFrameTime = time - this._lastLoop;
        /** @todo Figures out where 12 comes from */
        this._frameTime += (thisFrameTime - this._frameTime) / 12;
        //
        this.fps = 1000 / this._frameTime;
        this.duration = Math.max(0, time - this._frameStart);
        this._lastLoop = time;
        /** @todo Figures out where 15 comes from */
        if (this._tickCount++ % 15 === 0) this._update();
        //
    } // endTick

    switchMode() {
        // Edited to help plugins alter meter modes in better ways
        this._switchMode();
        //
        this._update();
    } // switchMode

    _createElements() {
        // Edited to help plugins create elements in better ways
        this._labelDiv = this._newLabelDiv();
        this._numberDiv = this._newNumberDiv();
        this._boxDiv = this._newBoxDiv(this._labelDiv, this._numberDiv);
        //
        document.body.appendChild(this._boxDiv);
    } // _createElements

    _update() {
        const count = this._showFps ? this.fps : this.duration;
        this._labelDiv.textContent = this._showFps ? "FPS" : "ms";
        this._numberDiv.textContent = count.toFixed(0);
    } // _update

    /**
     * Switches the fps counter following none -> fps -> duration -> none
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    _switchMode() {
        if (this._boxDiv.style.display === "none") return this._switchToFPS();
        this._showFps ? this._switchToDuration() : this._switchToNone();
    } // _switchMode

    /**
     * Switches the fps counter to show the fps
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    _switchToFPS() {
        [this._boxDiv.style.display, this._showFps] = ["block", true];
    } // _switchToFPS

    /**
     * Switches the fps counter to show the number of ms elapsed in this frame
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    _switchToDuration() { this._showFps = false; }

    /**
     * Switches the fps counter to show nothing
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    _switchToNone() { this._boxDiv.style.display = "none"; }

    /**
     * Creates a new fps counter box div document with id fpsCounterBox
     * Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {Div} labelDiv - The fps counter label div document
     * @param {Div} numberDiv - The fps counter number div document
     * @returns {DOM} The fps counter box div document
     */
    _newBoxDiv(labelDiv, numberDiv) {
        const boxDiv = document.createElement("div");
        [boxDiv.id, boxDiv.style.display] = ["fpsCounterBox", "none"];
        boxDiv.appendChild(labelDiv);
        boxDiv.appendChild(numberDiv);
        return boxDiv;
    } // _newBoxDiv

    /**
     * Creates a new fps counter label div document with id fpsCounterLabel
     * Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @returns {DOM} The fps counter label div document
     */
    _newLabelDiv() {
        const labelDiv = document.createElement("div");
        labelDiv.id = "fpsCounterLabel";
        return labelDiv;
    } // _newLabelDiv

    /**
     * Creates a new fps counter number div document with id fpsCounterNumber
     * Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @returns {DOM} The fps counter number div document
     */
    _newNumberDiv() {
        const numberDiv = document.createElement("div");
        numberDiv.id = "fpsCounterNumber";
        return numberDiv;
    } // _newNumberDiv

}; // Graphics.FPSCounter

/*----------------------------------------------------------------------------
 *    # Rewritten class: Input
 *      - Rewrites it into the ES6 standard
 *----------------------------------------------------------------------------*/

/**
 * The static class that handles input data from the keyboard and gamepads.
 *
 * @namespace
 */
class Input {

    constructor() { throw new Error("This is a static class"); }

    /**
     * Initializes the input system.
     */
    static initialize() {
        this.clear();
        this._setupEventHandlers();
    } // initialize

    /**
     * The wait time of the key repeat in frames.
     *
     * @type number
     */
    static keyRepeatWait = 24;

    /**
     * The interval of the key repeat in frames.
     *
     * @type number
     */
    static keyRepeatInterval = 6;

    /**
     * A hash table to convert from a virtual key code to a mapped key name.
     *
     * @type Object
     */
    static keyMapper = {
        9: "tab", // tab
        13: "ok", // enter
        16: "shift", // shift
        17: "control", // control
        18: "control", // alt
        27: "escape", // escape
        32: "ok", // space
        33: "pageup", // pageup
        34: "pagedown", // pagedown
        37: "left", // left arrow
        38: "up", // up arrow
        39: "right", // right arrow
        40: "down", // down arrow
        45: "escape", // insert
        81: "pageup", // Q
        87: "pagedown", // W
        88: "escape", // X
        90: "ok", // Z
        96: "escape", // numpad 0
        98: "down", // numpad 2
        100: "left", // numpad 4
        102: "right", // numpad 6
        104: "up", // numpad 8
        120: "debug" // F9
    }; // keyMapper

    /**
     * A hash table to convert from a gamepad button to a mapped key name.
     *
     * @type Object
     */
    static gamepadMapper = {
        0: "ok", // A
        1: "cancel", // B
        2: "shift", // X
        3: "menu", // Y
        4: "pageup", // LB
        5: "pagedown", // RB
        12: "up", // D-pad up
        13: "down", // D-pad down
        14: "left", // D-pad left
        15: "right" // D-pad right
    }; // gamepadMapper

    /**
     * Clears all the input data.
     */
    static clear() {
        [this._currentState, this._previousState] = [new Map(), new Map()];
        [this._gamepadStates, this._latestButton] = [[], null];
        this._pressedTime = this._dir4 = this._dir8 = 0;
        [this._preferredAxis, this._date, this._virtualButton] = ["", 0, null];
        // Added to support the isJustReleased static function
        this._isJustReleased = new Map();
        //
    } // clear

    /**
     * Updates the input data.
     */
    static update() {
        this._pollGamepads();
        // Edited to help plugins update the current states in better ways
        this._updateLatestButton();
        this._currentState.forEach(this._updateCurrentState, this);
        //
        if (this._virtualButton) this._updateVirtualClick();
        this._updateDirection();
    } // update

    /**
     * Checks whether a key is currently pressed down.
     *
     * @param {string} keyName - The mapped name of the key.
     * @returns {boolean} True if the key is pressed.
     */
    static isPressed(keyName) {
        if (this._isEscCompatiblePressed(keyName)) return true;
        return !!this._currentState.get(keyName);
    } // isPressed

    /**
     * Checks whether a key is just pressed.
     *
     * @param {string} keyName - The mapped name of the key.
     * @returns {boolean} True if the key is triggered.
     */
    static isTriggered(keyName) {
        if (this._isEscCompatiblePressed(keyName)) return true;
        return this._latestButton === keyName && this._pressedTime === 0;
    } // isTriggered

    /**
     * Checks whether a key is just pressed or a key repeat occurred.
     *
     * @param {string} keyName - The mapped name of the key.
     * @returns {boolean} True if the key is repeated.
     */
    static isRepeated(keyName) {
        if (this._isEscCompatiblePressed(keyName)) return true;
        if (this._latestButton !== keyName) return false;
        if (this._pressedTime === 0) return true;
        if (this._pressedTime < this.keyRepeatWait) return false;
        return this._pressedTime % this.keyRepeatInterval === 0;
    } // isRepeated

    /**
     * Checks whether a key is kept depressed.
     *
     * @param {string} keyName - The mapped name of the key.
     * @returns {boolean} True if the key is long-pressed.
     */
    static isLongPressed(keyName) {
        if (this._isEscCompatiblePressed(keyName)) return true;
        if (this._latestButton !== keyName) return false;
        return this._pressedTime >= this.keyRepeatWait;
    } // isLongPressed

    /**
     * The four direction value as a number of the numpad, or 0 for neutral.
     *
     * @readonly
     * @type number
     * @name Input.dir4
     */
    static get dir4() { return this._dir4; }

    /**
     * The eight direction value as a number of the numpad, or 0 for neutral.
     *
     * @readonly
     * @type number
     * @name Input.dir8
     */
    static get dir8() { return this._dir8; }

    /**
     * The time of the last input in milliseconds.
     *
     * @readonly
     * @type number
     * @name Input.date
     */
    static get date() { return this._date; }

    static virtualClick(buttonName) { this._virtualButton = buttonName; }

    /**
     * Nullipotent
     * @author DoubleX @interface @since 0.9.5 @version 0.9.5
     * @enum @param {string} keyName - The mapped name of the key
     * @returns {boolean} If the key's just released right on this frame
     */
    static isJustReleased(keyName) {
        if (this._isEscCompatiblePressed(keyName)) return true;
        return this._isJustReleased.has(keyName);
    } // isJustReleased

    static _setupEventHandlers() {
        document.addEventListener("keydown", this._onKeyDown.bind(this));
        document.addEventListener("keyup", this._onKeyUp.bind(this));
        window.addEventListener("blur", this._onLostFocus.bind(this));
    } // _setupEventHandlers

    static _onKeyDown(event) {
        const { keyCode } = event;
        if (this._shouldPreventDefault(keyCode)) event.preventDefault();
        // Edited to help plugins alter clear keys in better ways
        if (this._shouldClear(keyCode)) this.clear(); // Numlock
        //
        const buttonName = this.keyMapper[keyCode];
        if (buttonName) this._currentState.set(buttonName, true);
    } // _onKeyDown

    static _shouldPreventDefault(keyCode) {
        switch (keyCode) {
            case 8: // backspace
            case 9: // tab
            case 33: // pageup
            case 34: // pagedown
            case 37: // left arrow
            case 38: // up arrow
            case 39: // right arrow
            case 40: // down arrow
                return true;
        }
        return false;
    } // _shouldPreventDefault

    static _onKeyUp(event) {
        const buttonName = this.keyMapper[event.keyCode];
        if (buttonName) this._currentState.set(buttonName, false);
    } // _onKeyUp

    static _onLostFocus() { this.clear(); }

    static _pollGamepads() {
        if (!navigator.getGamepads) return;
        const gamepads = navigator.getGamepads();
        // Edited to help plugins poll gamepads in better ways
        if (gamepads) gamepads.forEach(this._pollGamepad, this);
        //
    } // _pollGamepads

    static _updateGamepadState(gamepad) {
        const { index, buttons, axes } = gamepad;
        const lastState = this._gamepadStates[index] || [];
        // Edited to help plugins alter new gamepad states in better ways
        this._gamepadStates[index] = this._newGamepadStates(buttons, axes);
        //
        this._gamepadStates[index].forEach((ns, i) => {
            if (ns === lastState[i]) return;
            const buttonName = this.gamepadMapper[i];
            if (buttonName) this._currentState.set(buttonName, ns);
        });
    } // _updateGamepadState

    static _updateDirection() {
        let [x, y] = [this._signX(), this._signY()];
        this._dir8 = this._makeNumpadDirection(x, y);
        if (x !== 0 && y !== 0) {
            this._preferredAxis === "x" ? y = 0 : x = 0;
        } else if (x !== 0) {
            this._preferredAxis = "y";
        } else if (y !== 0) this._preferredAxis = "x";
        this._dir4 = this._makeNumpadDirection(x, y);
    } // _updateDirection

    // Edited to dry up codes essentially being the identical knowledge
    static _signX() { return this._sign("right") - this._sign("left"); }
    //

    // Edited to dry up codes essentially being the identical knowledge
    static _signY() {  return this._sign("down") - this._sign("up"); }
    //

    static _makeNumpadDirection(x, y) {
        return x === 0 && y === 0 ? 0 : 5 - y * 3 + x;
    } // _makeNumpadDirection

    static _isEscapeCompatible(keyName) {
        return keyName === "cancel" || keyName === "menu";
    } // _isEscapeCompatible

    /**
     * Updates the latest pressed button states
     * Hotspot/Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    static _updateLatestButton() {
        if (this._currentState.get(this._latestButton)) {
            this._pressedTime++;
        } else this._latestButton = null;
    } // _updateLatestButton

    /**
     * Updates the current state of all input keys
     * Hotspot/Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @enum @param {boolean} keyState - If the key's currently pressed
     * @enum @param {string} keyName - The mapped name of the key
     */
    static _updateCurrentState(keyState, keyName) {
        this._updateLatestState(keyName);
        this._previousState.set(keyName, keyState);
    } // _updateCurrentState

    /**
     * Updates the latest state of all input keys
     * Hotspot/Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @enum @param {string} keyName - The mapped name of the key
     */
    static _updateLatestState(keyName) {
        if (this._isJustPressed(keyName)) return this._onStartPress(keyName);
        // Added to support the isJustReleased static function
        if (this._isKeyJustReleased(keyName)) {
            this._isJustReleased.set(keyName, true);
        } else this._isJustReleased.delete(keyName);
        //
    } // _updateLatestState

    /**
     * Hotspot/Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @enum @param {string} keyName - The mapped name of the key
     * @returns {boolean} If the key's just pressed right on this frame
     */
    static _isJustPressed(keyName) {
        if (!this._currentState.get(keyName)) return false;
        return !this._previousState.get(keyName);
    } // _isJustPressed

    /**
     * Updates the current input states with the input key that's just pressed
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @enum @param {string} keyName - The mapped name of the key
     */
    static _onStartPress(keyName) {
        [this._latestButton, this._pressedTime] = [keyName, 0];
        this._date = Date.now();
        this._isJustReleased.delete(keyName);
    } // _onStartPress

    /**
     * Hotspot/Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @enum @param {string} keyName - The mapped name of the key
     * @returns {boolean} If the key's just released right on this frame
     */
    static _isKeyJustReleased(keyName) {
        if (this._currentState.get(keyName)) return false;
        return this._previousState.get(keyName);
    } // _isKeyJustReleased

    /**
     * Updates the current input states with virtual button that's just clicked
     * Hotspot/Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    static _updateVirtualClick() {
        this._latestButton = this._virtualButton;
        [this._pressedTime, this._virtualButton] = [0, null];
    } // _updateVirtualClick

    /**
     * Hotspot/Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @enum @param {string} keyName - The mapped name of the key
     * @returns {boolean} If the specified key should be regarded as pressed
     */
    static _isEscCompatiblePressed(keyName) {
        return this._isEscapeCompatible(keyName) && this.isPressed("escape");
    } // _isEscCompatiblePressed

    /**
     * Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @enum @param {string} keyName - The mapped name of the key
     * @returns {boolean} If the pressed key should clear all input states
     */
    static _shouldClear(keyCode) { return keyCode === 144; }

    /**
     * Updates the existing and connected gamepad state
     * Hotspot/Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @enum @param {Gamepad} gamepad - The gamepad to be polled
     */
    static _pollGamepad(gamepad) {
        if (gamepad && gamepad.connected) this._updateGamepadState(gamepad);
    } // _pollGamepad

    /**
     * Hotspot/Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @enum @param {[GamepadButton]} buttons - The list of the gamepad buttons
     * @enum @param {[number]} axes - The amounts of the gamepad axes directions
     * @returns {[boolean]} The list of new gamepad button states
     */
    static _newGamepadStates(buttons, axes) {
        const [newState, threshold] = [[], 0.5];
        newState[12] = newState[13] = newState[14] = newState[15] = false;
        buttons.forEach((button, i) => newState[i] = button.pressed);
        if (axes[1] < -threshold) {
            newState[12] = true; // up
        } else if (axes[1] > threshold) newState[13] = true; // down
        if (axes[0] < -threshold) {
            newState[14] = true; // left
        } else if (axes[0] > threshold) newState[15] = true; // right
        return newState;
    } // _newGamepadStates

    /**
     * Hotspot/Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @enum @param {string} keyName - The mapped name of the key
     * @enum @returns {number} 1 for the direction of this key and 0 for not
     */
    static _sign(keyName) { return this.isPressed(keyName) ? 1 : 0; }

} // Input

/*----------------------------------------------------------------------------
 *    # Edit class: Array
 *      - Adds some new array functions
 *----------------------------------------------------------------------------*/

(function($) {

    /**
     * Potential Hotspot/Nullipotent
     * @author DoubleX @interface @since 0.9.5 @version 0.9.5
     * @memberof JsExtensions
     * @param {(*, <T>, index, [<T>]) -> *} mapCallback - The callback in the
     *                                                    Array map method
     * @param {*?} mapThis_ - The context of mapCallback
     * @returns {Array} - The fully mapped array from this
     */
    $.fastMap = function(mapCallback, mapThis_) {
        if (this == null) throw new TypeError('this is null or not defined');
        if (typeof mapCallback !== 'function') {
            throw new TypeError(mapCallback + ' is not a function');
        }
        const newArray = [];
        // forEach is tested to be the fastest among sandboxes including RMMV
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
     * push can't be applied to merge extremely long arrays so fastMerge is made
     * This method alters the original array(this) as it merges another in place
     * @author DoubleX @interface @since 0.9.5 @version 0.9.5
     * @memberof JsExtensions
     * @param {[*]} arr - The array to be merged
     * @returns {This} The original array merged with another array in place
     */
    $.fastMerge = function(arr) {
        // forEach is tested to be the fastest among sandboxes including RMMV
        arr.forEach(elem => this.push(elem));
        // array.forEach(this.push, this) can't be used as forEach has > 1 args
        return this;
    }; // $.fastMerge

    /**
     * Chaining filter with map will lead to a new redundantly throwaway Array
     * This method doesn't support the thisArg argument in mapCallback
     * Potential Hotspot/Nullipotent
     * @author DoubleX @interface @since 0.9.5 @version 0.9.5
     * @memberof JsExtensions
     * @param {(*, <T>, index, [<T>]) -> boolean} filterCallback - The callback
     *                                                             in the Array
     *                                                             filter method
     * @param {(*, *, index) -> *} mapCallback - The callback in the Array map
     *                                           method
     * @param {*?} filterThis_ - The context of filterCallback
     * @param {*?} mapThis_ - The context of mapCallback
     * @returns {Array} - The fully filtered then mapped array from this
     */
    $.filterMap = function(filterCallback, mapCallback, filterThis_, mapThis_) {
        if (this == null) throw new TypeError('this is null or not defined');
        if (typeof filterCallback !== 'function') {
            throw new TypeError(filterCallback + ' is not a function');
        } else if (typeof mapCallback !== 'function') {
            throw new TypeError(mapCallback + ' is not a function');
        }
        const newArray = [];
        // forEach is tested to be the fastest among sandboxes including RMMV
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
     * @author DoubleX @interface @since 0.9.5 @version 0.9.5
     * @memberof JsExtensions
     * @param {(*, <T>, Index, [<T>]) -> *} mapCallback - The callback in the
     *                                                    Array map method
     * @param {(*, *, Index) -> Boolean} filterCallback - The callback in the
     *                                                    Array filter method
     * @param {*?} mapThis_ - The context of mapCallback
     * @param {*?} filterThis_ - The context of filterCallback
     * @returns {Array} - The fully mapped then filtered array from this
     */
    $.mapFilter = function(mapCallback, filterCallback, mapThis_, filterThis_) {
        if (this == null) throw new TypeError('this is null or not defined');
        if (typeof mapCallback !== 'function') {
            throw new TypeError(mapCallback + ' is not a function');
        } else if (typeof filterCallback !== 'function') {
            throw new TypeError(filterCallback + ' is not a function');
        }
        const newArray = [];
        // forEach is tested to be the fastest among sandboxes including RMMV
        this.forEach((elem, i) => {
            // It's ok to call undefined context with previously bound callbacks
            var mappedElem = mapCallback.call(mapThis_, elem, i, this);
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
     * @author DoubleX @interface @since 0.9.5 @version 0.9.5
     * @memberof JsExtensions
     * @param {(*, <T>, Index, [<T>]) -> *} mapCallback - The callback in the
     *                                                    Array map method
     * @param {(*, *, *, Index) -> *} reduceCallback - The callback in the Array
     *                                                 reduce method
     * @param {*?} initVal_ - The initial value of reduceCallback
     * @param {*?} mapThis_ - The context of mapCallback
     * @param {*?} reduceThis_ - The context of reduceCallback
     * @returns {Array} - The fully mapped then reduced array result from this
     */
    $.mapReduce = function(mapCallback, reduceCallback, initVal_, mapThis_, reduceThis_) {
        if (this == null) throw new TypeError('this is null or not defined');
        const l = this.length, hasInitVal = initVal_ !== undefined;
        if (typeof mapCallback !== 'function') {
            throw new TypeError(mapCallback + ' is not a function');
        } else if (typeof reduceCallback !== 'function') {
            throw new TypeError(reduceCallback + ' is not a function');
        } else if (l <= 0 && !hasInitVal) {
            throw new TypeError('Reduce of empty array with no initial value');
        }
        if (hasInitVal) {
            let val = initVal_;
            // forEach is tested to be fastest among sandboxes including RMMV
            this.forEach((elem, i) => {
                // It's ok to call undefined context with already bound callback
                var mappedElem = mapCallback.call(mapThis_, elem, i, this);
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
            var mappedElem = mapCallback.call(mapThis_, this[i], i, this);
            val = reduceCallback.call(reduceThis_, val, mappedElem, i);
            //
            i++;
        }
        //
        return val;
    }; // $.mapReduce

    /**
     * Potential Hotspot/Nullipotent
     * @author DoubleX @interface @since 0.9.5 @version 0.9.5
     * @memberof JsExtensions
     * @param {Array} arr - The array to be checked against
     * @returns {boolean} If this's a proper subset of the specified array
     */
    $.isProperSubsetOf = function(arr) {
        return this.isSubsetOf(arr) && !arr.isSubsetOf(this);
    }; // $.isProperSubsetOf

    /**
     * Potential Hotspot/Nullipotent
     * @author DoubleX @interface @since 0.9.5 @version 0.9.5
     * @memberof JsExtensions
     * @param {Array} arr - The array to be checked against
     * @returns {boolean} If this's a proper superset of the specified array
     */
    $.isProperSupersetOf = function(arr) {
        return this.isSupersetOf(arr) && !arr.isSupersetOf(this);
    }; // $.isProperSupersetOf

    /**
     * Potential Hotspot/Nullipotent
     * @author DoubleX @interface @since 0.9.5 @version 0.9.5
     * @memberof JsExtensions
     * @param {Array} arr - The array to be checked against
     * @returns {boolean} If this's a superset of the specified array
     */
    $.isSupersetOf = function(arr) { return arr.isSubsetOf(this); };

    /**
     * Potential Hotspot/Nullipotent
     * @author DoubleX @interface @since 0.9.5 @version 0.9.5
     * @memberof JsExtensions
     * @param {Array} arr - The array to be checked against
     * @returns {boolean} If this's a subset of the specified array
     */
    $.isSubsetOf = function(arr) { return this.difference(arr).isEmpty(); };

    /**
     * Potential Hotspot/Nullipotent
     * @author DoubleX @interface @since 0.9.5 @version 0.9.5
     * @memberof JsExtensions
     * @returns {boolean} If this array's empty
     */
    $.isEmpty = function() { return this.length <= 0; };

    /**
     * Potential Hotspot/Nullipotent
     * @author DoubleX @interface @since 0.9.5 @version 0.9.5
     * @memberof JsExtensions
     * @param {Array} arr - The array to have symmetric difference with
     * @returns {Array} The symmetric difference of this and the specified array
     */
    $.symmetricDifference = function(arr) {
        return this.difference(arr).union(arr.difference(this));
    }; // $.symmetricDifference

    /**
     * Potential Hotspot/Nullipotent
     * @author DoubleX @interface @since 0.9.5 @version 0.9.5
     * @memberof JsExtensions
     * @param {Array} arr - The array to have union with this array
     * @returns {Array} The union of this and the specified array
     */
    $.union = function(arr) { return this.concat(arr.difference(this)); };

    /**
     * Potential Hotspot/Nullipotent
     * @author DoubleX @interface @since 0.9.5 @version 0.9.5
     * @memberof JsExtensions
     * @param {Array} arr - The array to have difference with this array
     * @returns {Array} The difference of this and the specified array
     */
    $.difference = function(arr) {
        return this.filter(elem => arr.excludes(elem));
    }; // $.difference

    /**
     * Potential Hotspot/Nullipotent
     * @author DoubleX @interface @since 0.9.5 @version 0.9.5
     * @memberof JsExtensions
     * @param {Array} arr - The array to have intersection with this array
     * @returns {Array} The intersection of this and the specified array
     */
    $.intersection = function(arr) {
        // The 2nd argument of includes doesn't match with that of filter
        return this.filter(elem => arr.includes(elem));
        //
    }; // $.intersection

    /**
     * Potential Hotspot/Nullipotent
     * @author DoubleX @interface @since 0.9.5 @version 0.9.5
     * @memberof JsExtensions
     * @param {*} elem - The element to be checked against
     * @param {index} fromI - The index in this at which to begin searching
     * @returns {boolean} If this array doesn't have the specified element
     */
    $.excludes = function(elem, fromI) { return !this.includes(elem, fromI); };

    /**
     * Potential Hotspot/Idempotent
     * @author DoubleX @interface @since 0.9.5 @version 0.9.5
     * @memberof JsExtensions
     */
    $.clear = function() { this.length = 0; }

})(Array.prototype);

/*----------------------------------------------------------------------------
 *    # Rewritten class: JsonEx
 *      - Rewrites it into the ES6 standard
 *----------------------------------------------------------------------------*/

//-----------------------------------------------------------------------------
/**
 * The static class that handles JSON with object information.
 *
 * @namespace
 */
class JsonEx {

    constructor() { throw new Error("This is a static class"); }

    /**
     * The maximum depth of objects.
     *
     * @type number
     * @default 100
     */
    static maxDepth = 100;

    /**
     * Converts an object to a JSON string with object information.
     *
     * @param {object} object - The object to be converted.
     * @returns {string} The JSON string.
     */
    static stringify(object) { return JSON.stringify(this._encode(object, 0)); }

    /**
     * Parses a JSON string and reconstructs the corresponding object.
     *
     * @param {string} json - The JSON string.
     * @returns {object} The reconstructed object.
     */
    static parse(json) { return this._decode(JSON.parse(json)); }

    /**
     * Makes a deep copy of the specified object.
     *
     * @param {object} object - The object to be copied.
     * @returns {object} The copied object.
     */
    static makeDeepCopy(object) { return this.parse(this.stringify(object)); }

    static _encode(value, depth) {
        // [Note] The handling code for circular references in certain versions of
        //   MV has been removed because it was too complicated and expensive.
        if (depth >= this.maxDepth) throw new Error("Object too deep");
        // Edited to help plugins alter encode behaviors in better ways
        if (this._isValObj(value)) return this._encodeValObj(value, depth);
        //
        return value;
    } // _encode

    static _decode(value) {
        // Edited to help plugins alter decode behaviors in better ways
        return this._isValObj(value) ? this._decodeValObj(value) : value;
        //
    } // _decode

    /**
     * Pure function
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {*} val - The value object to be encoded
     * @param {number} depth - The current depth of the encoded value object
     * @returns {*} The fully encoded value object
     */
    static _encodeValObj(val, depth) {
        const constructorName = val.constructor.name;
        if (constructorName !== "Object" && constructorName !== "Array") {
            val["@"] = constructorName;
        }
        Object.entries(val).forEach(([k, v]) => {
            val[k] = this._encode(v, depth + 1);
        });
        return val;
    } // _encodeValObj

    /**
     * Pure function
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {*} val - The value to be encoded or decoded
     * @returns {boolean} If the value's indeed a value object
     */
    static _isValObj(val) {
        const type = Object.prototype.toString.call(val);
        return type === "[object Object]" || type === "[object Array]";
    } // _isValObj

    /**
     * Pure function
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {*} val - The value object to be decoded
     * @returns {*} The fully decoded value object
     */
    static _decodeValObj(val) {
        const constructorName = val["@"];
        if (constructorName) {
            const constructor = window[constructorName];
            if (constructor) Object.setPrototypeOf(val, constructor.prototype);
        }
        Object.entries(val).forEach(([k, v]) => val[k] = this._decode(v));
        return val;
    } // _decodeValObj

} // JsonEx

/*----------------------------------------------------------------------------
 *    # Rewritten class: TouchInput
 *      - Rewrites it into the ES6 standard
 *----------------------------------------------------------------------------*/

//-----------------------------------------------------------------------------
/**
 * The static class that handles input data from the mouse and touchscreen.
 *
 * @namespace
 */
class TouchInput {

    constructor() { throw new Error("This is a static class"); }

    /**
     * Initializes the touch system.
     */
    static initialize() {
        this.clear();
        this._setupEventHandlers();
    } // initialize

    /**
     * The wait time of the pseudo key repeat in frames.
     *
     * @type number
     */
    static keyRepeatWait = 24;

    /**
     * The interval of the pseudo key repeat in frames.
     *
     * @type number
     */
    static keyRepeatInterval = 6;

    /**
     * The threshold number of pixels to treat as moved.
     *
     * @type number
     */
    static moveThreshold = 10;

    static clear() {
        this._mousePressed = this._screenPressed = false;
        [this._pressedTime, this._clicked] = [0, false];
        this._newState = this._createNewState();
        this._currentState = this._createNewState();
        this._x = this._y = this._triggerX = this._triggerY = 0;
        [this._moved, this._date] = [false, 0];
    } // clear

    static update() {
        this._currentState = this._newState;
        this._newState = this._createNewState();
        this._clicked = this._currentState.released && !this._moved;
        if (this.isPressed()) this._pressedTime++;
    } // update

    /**
     * Checks whether the mouse button or touchscreen has been pressed and
     * released at the same position.
     *
     * @returns {boolean} True if the mouse button or touchscreen is clicked.
     */
    static isClicked() { return this._clicked; }

    /**
     * Checks whether the mouse button or touchscreen is currently pressed down.
     *
     * @returns {boolean} True if the mouse button or touchscreen is pressed.
     */
    static isPressed() { return this._mousePressed || this._screenPressed; }

    /**
     * Checks whether the left mouse button or touchscreen is just pressed.
     *
     * @returns {boolean} True if the mouse button or touchscreen is triggered.
     */
    static isTriggered() { return this._currentState.triggered; }

    /**
     * Checks whether the left mouse button or touchscreen is just pressed
     * or a pseudo key repeat occurred.
     *
     * @returns {boolean} True if the mouse button or touchscreen is repeated.
     */
    static isRepeated() {
        if (!this.isPressed()) return false;
        if (this._currentState.triggered) return true;
        if (this._pressedTime < this.keyRepeatWait) return false;
        return this._pressedTime % this.keyRepeatInterval === 0;
    } // isRepeated

    /**
     * Checks whether the left mouse button or touchscreen is kept depressed.
     *
     * @returns {boolean} True if the left mouse button or touchscreen is long-pressed.
     */
    static isLongPressed() {
        return this.isPressed() && this._pressedTime >= this.keyRepeatWait;
    } // isLongPressed

    /**
     * Checks whether the right mouse button is just pressed.
     *
     * @returns {boolean} True if the right mouse button is just pressed.
     */
    static isCancelled() { return this._currentState.cancelled; }

    /**
     * Checks whether the mouse or a finger on the touchscreen is moved.
     *
     * @returns {boolean} True if the mouse or a finger on the touchscreen is moved.
     */
    static isMoved() { return this._currentState.moved; }

    /**
     * Checks whether the mouse is moved without pressing a button.
     *
     * @returns {boolean} True if the mouse is hovered.
     */
    static isHovered() { return this._currentState.hovered; }

    /**
     * Checks whether the left mouse button or touchscreen is released.
     *
     * @returns {boolean} True if the mouse button or touchscreen is released.
     */
    static isReleased() { return this._currentState.released; }

    /**
     * The horizontal scroll amount.
     *
     * @readonly
     * @type number
     * @name TouchInput.wheelX
     */
    static get wheelX() { return this._currentState.wheelX; }

    /**
     * The vertical scroll amount.
     *
     * @readonly
     * @type number
     * @name TouchInput.wheelY
     */
    static get wheelY() { return this._currentState.wheelY; }

    /**
     * The x coordinate on the canvas area of the latest touch event.
     *
     * @readonly
     * @type number
     * @name TouchInput.x
     */
    static get x() { return this._x; }

    /**
     * The y coordinate on the canvas area of the latest touch event.
     *
     * @readonly
     * @type number
     * @name TouchInput.y
     */
    static get y() { return this._y; }

    /**
     * The time of the last input in milliseconds.
     *
     * @readonly
     * @type number
     * @name TouchInput.date
     */
    static get date() { return this._date; }

    static _createNewState() {
        return {
            triggered: false,
            cancelled: false,
            moved: false,
            hovered: false,
            released: false,
            wheelX: 0,
            wheelY: 0
        };
    } // _createNewState

    static _setupEventHandlers() {
        const pf = { passive: false };
        document.addEventListener("mousedown", this._onMouseDown.bind(this));
        document.addEventListener("mousemove", this._onMouseMove.bind(this));
        document.addEventListener("mouseup", this._onMouseUp.bind(this));
        document.addEventListener("wheel", this._onWheel.bind(this), pf);
        document.addEventListener("touchstart", this._onTouchStart.bind(this), pf);
        document.addEventListener("touchmove", this._onTouchMove.bind(this), pf);
        document.addEventListener("touchend", this._onTouchEnd.bind(this));
        document.addEventListener("touchcancel", this._onTouchCancel.bind(this));
        window.addEventListener("blur", this._onLostFocus.bind(this));
    } // _setupEventHandlers

    static _onMouseDown(event) {
        switch (event.button) {
            case 0: return this._onLeftButtonDown(event);
            case 1: return this._onMiddleButtonDown(event);
            case 2: this._onRightButtonDown(event);
        }
    } // _onMouseDown

    static _onLeftButtonDown(event) {
        // Edited to dry up codes essentially being the identical knowledge
        const xy = this._pageToCanvasXY(event);
        if (!Graphics.isInsideCanvas(...xy)) return;
        //
        // Edited to help plugins alter left button down behaviors in better way
        this._onLeftButtonDownInsideCanvas(...xy);
        //
    } // _onLeftButtonDown

    static _onMiddleButtonDown(/*event*/) {}

    static _onRightButtonDown(event) {
        // Edited to dry up codes essentially being the identical knowledge
        const xy = this._pageToCanvasXY(event);
        if (Graphics.isInsideCanvas(...xy)) this._onCancel(...xy);
        //
    } // _onRightButtonDown

    static _onMouseMove(event) {
        // Edited to dry up codes essentially being the identical knowledge
        const xy = this._pageToCanvasXY(event);
        if (this._mousePressed) return this._onMove(...xy);
        if (Graphics.isInsideCanvas(...xy)) this._onHover(...xy);
        //
    } // _onMouseMove

    static _onMouseUp(event) {
        // Edited to help plugins alter left button up behaviors in better ways
        if (event.button === 0) this._onLeftButtonUp(event);
        //
    } // _onMouseUp

    static _onWheel(event) {
        this._newState.wheelX += event.deltaX;
        this._newState.wheelY += event.deltaY;
        event.preventDefault();
    } // _onWheel

    static _onTouchStart(event) {
        const { changedTouches, touches } = event;
        changedTouches.forEach(touch => {
            // Edited to help plugins alter touches inside canvas in better ways
            const xy = this._pageToCanvasXY(touch);
            if (!Graphics.isInsideCanvas(...xy)) return;
            this._onTouchStartInsideCanvas(touches, ...xy);
            //
        });
        /** @todo Extracts this conditional into a well-named static function */
        if (!window.cordova && !window.navigator.standalone) return;
        //
        event.preventDefault();
    } // _onTouchStart

    static _onTouchMove(event) {
        event.changedTouches.forEach(this._onMoveTouch, this);
    } // _onTouchMove

    static _onTouchEnd(event) {
        event.changedTouches.forEach(this._onReleaseTouch, this);
    } // _onTouchEnd

    static _onTouchCancelfunction(/*event*/) { this._screenPressed = false; }

    static _onLostFocus() { this.clear(); }

    static _onTrigger(x, y) {
        this._newState.triggered = true;
        [this._x, this._y, this._triggerX, this._triggerY] = [x, y, x, y];
        [this._moved, this._date] = [false, Date.now()];
    } // _onTrigger

    // Edited to dry up codes essentially being the identical knowledge
    static _onCancel(x, y) { this._onUpdateNewState("cancelled", x, y); }
    //

    static _onMove(x, y) {
        // Edited to help plugins alter the on move event in better ways
        if (this._isMoved(x, y)) this._moved = true;
        if (this._moved) this._onUpdateNewState("_moved", x, y);
        //
    } // _onMove

    // Edited to dry up codes essentially being the identical knowledge
    static _onHover(x, y) { this._onUpdateNewState("hovered", x, y); }
    //

    // Edited to dry up codes essentially being the identical knowledge
    static _onRelease(x, y) { this._onUpdateNewState("released", x, y); }
    //

    /**
     * Triggers the left button down event inside the canvas x and y positions
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {number} x - The page x position of the touch event
     * @param {number} y - The page y position of the touch event
     */
    static _onLeftButtonDownInsideCanvas(x, y) {
        [this._mousePressed, this._pressedTime] = [true, 0];
        this._onTrigger(x, y);
    } // _onLeftButtonDownInsideCanvas

    /**
     * Triggers the specified the left button up event
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {Event} event - The specified left button up event
     */
    static _onLeftButtonUp(event) {
        this._mousePressed = false;
        this._onRelease(...this._pageToCanvasXY(event));
    } // _onLeftButtonUp

    /**
     * Triggers the touch start event inside canvas for the specified touches
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {[Touch]} touches - The specified touches from the specified event
     * @param {number} x - The page x position of the touch event
     * @param {number} y - The page y position of the touch event
     */
    static _onTouchStartInsideCanvas(touches, x, y) {
        [this._screenPressed, this._pressedTime] = [true, 0];
        touches.length >= 2 ? this._onCancel(x, y) : this._onTrigger(x, y);
        event.preventDefault();
    } // _onTouchStartInsideCanvas

    /**
     * Triggers the touch move event for the specified touch
     * Potential Hotspot/Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {Touch} touch - The specified touch from the specified event
     */
    static _onMoveTouch(touch) { this._onMove(...this._pageToCanvasXY(touch)); }

    /**
     * Triggers the touch release event for the specified touch
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {Touch} touch - The specified touch from the specified event
     */
    static _onReleaseTouch(touch) {
        this._screenPressed = false;
        this._onRelease(...this._pageToCanvasXY(touch));
    } // _onReleaseTouch

    /**
     * Potential Hotspot/Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {Event|Touch} eventTouch - The specified event or its touch
     * @returns {[number]} The converted x and y canvas positions
     */
    static _pageToCanvasXY(eventTouch) {
        return [
            Graphics.pageToCanvasX(eventTouch.pageX),
            Graphics.pageToCanvasY(eventTouch.pageY)
        ];
    } // _pageToCanvasXY

    /**
     * Potential Hotspot/Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {number} x - The page x position of the touch event
     * @param {number} y - The page y position of the touch event
     * @returns {boolean} If the detected touch event's indeed a movement
     */
    static _isMoved(x, y) {
        const dx = Math.abs(x - this._triggerX);
        const dy = Math.abs(y - this._triggerY);
        return dx > this.moveThreshold || dy > this.moveThreshold;
    } // _isMoved

    /**
     * Updates the specified new states as well as the current x and y positions
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @enum @param {string} state - The name of the new state to be updated
     * @param {number} x - The page x position of the touch event
     * @param {number} y - The page y position of the touch event
     */
    static _onUpdateNewState(state, x, y) {
        [this._newState[state], this._x, this._y] = [true, x, y];
    } // _onUpdateNewState

} // TouchInput

/*----------------------------------------------------------------------------
 *    # Rewritten class: Utils
 *      - Rewrites it into the ES6 standard
 *----------------------------------------------------------------------------*/

//-----------------------------------------------------------------------------
/**
 * The static class that defines utility methods.
 *
 * @namespace
 */
class Utils {

    constructor() { throw new Error("This is a static class"); }

    /**
     * The name of the RPG Maker. "MZ" in the current version.
     *
     * @type string
     * @constant
     */
    static RPGMAKER_NAME = "MZ";

    /**
     * The version of the RPG Maker.
     *
     * @type string
     * @constant
     */
    static RPGMAKER_VERSION = "0.9.5";

    /**
     * Checks whether the current RPG Maker version is greater than or equal to
     * the given version.
     *
     * @param {string} version - The "x.x.x" format string to compare.
     * @returns {boolean} True if the current version is greater than or equal
     *                    to the given version.
     */
    static checkRMVersion(version) {
        const array1 = this.RPGMAKER_VERSION.split("."), l = array1.length;
        const array2 = String(version).split(".");
        for (let i = 0; i < l; i++) {
            const [v1, v2] = [+array1[i], +array2[i]];
            if (v1 > v2) return true;
            if (v1 < v2) return false;
        }
        return true;
    } // checkRMVersion

    /**
     * Checks whether the option is in the query string.
     *
     * @param {string} name - The option name.
     * @returns {boolean} True if the option is in the query string.
     */
    static isOptionValid(name) {
        const args = location.search.slice(1);
        if (args.split("&").includes(name)) return true;
        if (!this.isNwjs() || nw.App.argv.isEmpty()) return false;
        return nw.App.argv[0].split("&").includes(name);
    } // isOptionValid

    /**
     * Checks whether the platform is NW.js.
     *
     * @returns {boolean} True if the platform is NW.js.
     */
    static isNwjs() {
        return typeof require === "function" && typeof process === "object";
    } // isNwjs

    /**
     * Checks whether the platform is RPG Atsumaru.
     *
     * @returns {boolean} True if the platform is RPG Atsumaru.
     */
    static isAtsumaru() { return typeof RPGAtsumaru === "object"; }

    /**
     * Checks whether the platform is a mobile device.
     *
     * @returns {boolean} True if the platform is a mobile device.
     */
    static isMobileDevice() {
        const r = /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/i;
        return !!navigator.userAgent.match(r);
    } // isMobileDevice

    /**
     * Checks whether the browser is Mobile Safari.
     *
     * @returns {boolean} True if the browser is Mobile Safari.
     */
    static isMobileSafari() {
        const agent = navigator.userAgent;
        if (!agent.match(/iPhone|iPad|iPod/)) return false;
        return !!agent.match(/AppleWebKit/) && !agent.match("CriOS");
    } // isMobileSafari

    /**
     * Checks whether the browser is Android Chrome.
     *
     * @returns {boolean} True if the browser is Android Chrome.
     */
    static isAndroidChrome() {
        const agent = navigator.userAgent;
        return !!(agent.match(/Android/) && agent.match(/Chrome/));
    } // isAndroidChrome

    /**
     * Checks whether the browser is accessing local files.
     *
     * @returns {boolean} True if the browser is accessing local files.
     */
    static isLocal() { return window.location.href.startsWith("file:"); }

    /**
     * Checks whether the browser supports WebGL.
     *
     * @returns {boolean} True if the browser supports WebGL.
     */
    static canUseWebGL() {
        /** @todo Thinks of if using conditional's better than try catch */
        try {
            return !!document.createElement("canvas").getContext("webgl");
        } catch (e) { return false; }
        //
    } // canUseWebGL

    /**
     * Checks whether the browser supports Web Audio API.
     *
     * @returns {boolean} True if the browser supports Web Audio API.
     */
    static canUseWebAudioAPI() {
        return !!(window.AudioContext || window.webkitAudioContext);
    } // canUseWebAudioAPI

    /**
     * Checks whether the browser supports CSS Font Loading.
     *
     * @returns {boolean} True if the browser supports CSS Font Loading.
     */
    static canUseCssFontLoadingfunction() {
        return !!(document.fonts && document.fonts.ready);
    } // canUseCssFontLoadingfunction

    /**
     * Checks whether the browser supports IndexedDB.
     *
     * @returns {boolean} True if the browser supports IndexedDB.
     */
    static canUseIndexedDB() {
        if (!window.indexedDB) return;
        return !!(window.mozIndexedDB || window.webkitIndexedDB);
    } // canUseIndexedDB

    /**
     * Checks whether the browser can play ogg files.
     *
     * @returns {boolean} True if the browser can play ogg files.
     */
    static canPlayOgg() {
        if (!this._audioElement) {
            this._audioElement = document.createElement("audio");
        }
        if (!this._audioElement) return false;
        return !!this._audioElement.canPlayType('audio/ogg; codecs="vorbis"');
    } // canPlayOgg

    /**
     * Checks whether the browser can play webm files.
     *
     * @returns {boolean} True if the browser can play webm files.
     */
    static canPlayWebm() {
        if (!this._videoElement) {
            this._videoElement = document.createElement("video");
        }
        if (!this._videoElement) return false;
        return !!this._videoElement.canPlayType('video/webm; codecs="vp8, vorbis"');
    } // canPlayWebm

    /**
     * Encodes a URI component without escaping slash characters.
     *
     * @param {string} str - The input string.
     * @returns {string} Encoded string.
     */
    static encodeURI(str) {
        return encodeURIComponent(str).replace(/%2F/g, "/");
    } // encodeURI

    /**
     * Escapes special characters for HTML.
     *
     * @param {string} str - The input string.
     * @returns {string} Escaped string.
     */
    static escapeHtml(str) {
        const entityMap = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#x2F;"
        };
        /** @todo Figures out why String(str) is needed here */
        return String(str).replace(/[&<>"'/]/g, s => entityMap[s]);
        //
    } // escapeHtml

    /**
     * Checks whether the string contains any Arabic characters.
     *
     * @returns {boolean} True if the string contains any Arabic characters.
     */
    static containsArabic(str) {
        const regExp = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF]/;
        return regExp.test(str);
    } // containsArabic

    /**
     * Sets information related to encryption.
     *
     * @param {boolean} hasImages - Whether the image files are encrypted.
     * @param {boolean} hasAudio - Whether the audio files are encrypted.
     * @param {string} key - The encryption key.
     */
    static setEncryptionInfo(hasImages, hasAudio, key) {
        // [Note] This function is implemented for module independence.
        this._hasEncryptedImages = hasImages;
        this._hasEncryptedAudio = hasAudio;
        this._encryptionKey = key;
    } // setEncryptionInfo

    /**
     * Checks whether the image files in the game are encrypted.
     *
     * @returns {boolean} True if the image files are encrypted.
     */
    static hasEncryptedImages() { return this._hasEncryptedImages; }

    /**
     * Checks whether the audio files in the game are encrypted.
     *
     * @returns {boolean} True if the audio files are encrypted.
     */
    static hasEncryptedAudio() { return this._hasEncryptedAudio; }

    /**
     * Decrypts encrypted data.
     *
     * @param {ArrayBuffer} source - The data to be decrypted.
     * @returns {ArrayBuffer} The decrypted data.
     */
    static decryptArrayBuffer(source) {
        const header = new Uint8Array(source, 0, 16);
        const headerHex = Array.from(header, x => x.toString(16)).join(",");
        if (headerHex !== "52,50,47,4d,56,0,0,0,0,3,1,0,0,0,0,0") {
            throw new Error("Decryption error");
        }
        const [body, view] = [source.slice(16), new DataView(body)];
        const key = this._encryptionKey.match(/.{2}/g);
        for (let i = 0; i < 16; i++) {
            view.setUint8(i, view.getUint8(i) ^ parseInt(key[i], 16));
        }
        return body;
    } // decryptArrayBuffer

} // Utils

/*----------------------------------------------------------------------------
 *    # Rewritten class: Video
 *      - Rewrites it into the ES6 standard
 *----------------------------------------------------------------------------*/

//-----------------------------------------------------------------------------
/**
 * The static class that handles video playback.
 *
 * @namespace
 */
class Video {

    constructor() { throw new Error("This is a static class"); }

    /**
     * Initializes the video system.
     *
     * @param {number} width - The width of the video.
     * @param {number} height - The height of the video.
     */
    static initialize(width, height) {
        [this._element, this._loading, this._volume] = [null, false, 1];
        this._createElement();
        this._setupEventHandlers();
        this.resize(width, height);
    } // initialize

    /**
     * Changes the display size of the video.
     *
     * @param {number} width - The width of the video.
     * @param {number} height - The height of the video.
     */
    static resize(width, height) {
        // Edited to help plugins alter element resize behaviors in better ways
        if (this._element) this._resizeElem(width, height);
        //
    } // resize

    /**
     * Starts playback of a video.
     *
     * @param {string} src.
     */
    static play(src) {
        this._element.src = src;
        this._element.onloadeddata = this._onLoad.bind(this);
        this._element.onerror = this._onError.bind(this);
        this._element.onended = this._onEnd.bind(this);
        this._element.load();
        this._loading = true;
    } // play

    /**
     * Checks whether the video is playing.
     *
     * @returns {boolean} True if the video is playing.
     */
    static isPlaying() { return this._loading || this._isVisible(); }

    /**
     * Sets the volume for videos.
     *
     * @param {number} volume - The volume for videos (0 to 1).
     */
    static setVolume(volume) {
        this._volume = volume;
        // Edited to help plugins alter element volume behaviors in better ways
        if (this._element) this._setElemVolume();
        //
    } // setVolume

    static _createElement() {
        // Edited to help plugins create video element behaviors in better ways
        this._element = this._createdElem();
        //
        document.body.appendChild(this._element);
    } // _createElement

    static _onLoad() {
        this._element.volume = this._volume;
        this._element.play();
        this._updateVisibility(true);
        this._loading = false;
    } // _onLoad

    static _onError() {
        this._updateVisibility(false);
        throw ["LoadError", this._element.src, () => this._element.load()];
    } // _onError

    static _onEnd() { this._updateVisibility(false); }

    static _updateVisibility(videoVisible) {
        // Edited to help plugins alter visibilities updates in better ways
        if (videoVisible) return this._updateWhenVisible();
        this._updateWhenInvisible();
        //
    } // _updateVisibility

    static _isVisible() { return this._element.style.opacity > 0; }

    static _setupEventHandlers() {
        const onUserGesture = this._onUserGesture.bind(this);
        document.addEventListener("keydown", onUserGesture);
        document.addEventListener("mousedown", onUserGesture);
        document.addEventListener("touchend", onUserGesture);
    } // _setupEventHandlers

    static _onUserGesture() {
        /** @todo Extracts this conditional into a well-named static function */
        if (this._element.src || !this._element.paused) return;
        //
        this._element.play().catch(() => 0);
    } // _onUserGesture

    /**
     * Resizes the video element
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    static _resizeElem(w, h) {
        const { style } = this._element;
        [style.width, style.height] = [`${w}px`, `${h}px`];
    } // _resizeElem

    /**
     * Sets the volume of the video element
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    static _setElemVolume() { this._element.volume = this._volume; }

    /**
     * Creates a new document with id gameVideo as the video element
     * Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @returns {DOM} The video element document
     */
    static _createdElem() {
        const elem = document.createElement("video");
        elem.id = "gameVideo";
        const { style } = elem;
        [style.position, style.margin] = ["absolute", "auto"];
        style.top = style.left = style.right = style.bottom = style.opacity = 0;
        style.zIndex = 2;
        elem.setAttribute("playsinline", "");
        elem.oncontextmenu = () => false;
        return elem;
    } // _createdElem

    /**
     * Updates this video when it should become visible
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    static _updateWhenVisible() {
        Graphics.hideScreen();
        this._element.style.opacity = 1;
    } // _updateWhenVisible

    /**
     * Updates this video when it should become invisible
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    static _updateWhenInvisible() {
        Graphics.showScreen();
        this._element.style.opacity = 0;
    } // _updateWhenInvisible

} // Video

/*----------------------------------------------------------------------------
 *    # Rewritten class: Bitmap
 *      - Rewrites it into the ES6 standard
 *----------------------------------------------------------------------------*/

//-----------------------------------------------------------------------------
/**
 * The basic object that represents an image.
 *
 * @class
 * @param {number} width - The width of the bitmap.
 * @param {number} height - The height of the bitmap.
 */

class Bitmap {

    constructor(width, height) {
        // Edited to help plugins initialize private variables in better ways
        this._initPrivateVars();
        //
        if (width > 0 && height > 0) this._createCanvas(width, height);
        // Edited to help plugins initialize public variables in better ways
        this._initPublicVars();
        //
    } // constructor

    /**
     * Loads a image file.
     *
     * @param {string} url - The image url of the texture.
     * @returns {Bitmap} The new bitmap object.
     */
    load(url) {
        /** @todo Figures out why new Bitmap() isn't used when it's the same */
        const bitmap = Object.create(Bitmap.prototype);
        bitmap.initialize();
        //
        bitmap._url = url;
        bitmap._startLoading();
        return bitmap;
    } // load

    /**
     * Takes a snapshot of the game screen.
     *
     * @param {Stage} stage - The stage object.
     * @returns {Bitmap} The new bitmap object.
     */
    snap(stage) {
        const [w, h] = [Graphics.width, Graphics.height];
        const bitmap = new Bitmap(w, h);
        const renderTexture = PIXI.RenderTexture.create(w, h);
        // Edited to help plugins alter the stage snapshot in better ways
        if (stage) this._snapStage(stage, renderTexture, bitmap);
        //
        renderTexture.destroy({ destroyBase: true });
        bitmap.baseTexture.update();
        return bitmap;
    } // snap

    /**
     * Checks whether the bitmap is ready to render.
     *
     * @returns {boolean} True if the bitmap is ready to render.
     */
    isReady() {
        return this._loadingState === "loaded" || this._loadingState === "none";
    } // isReady

    /**
     * Checks whether a loading error has occurred.
     *
     * @returns {boolean} True if a loading error has occurred.
     */
    isError() { return this._loadingState === "error"; }

    /**
     * The url of the image file.
     *
     * @readonly
     * @type string
     * @name Bitmap#url
     */
    get url() { return this._url; }

    /**
     * The base texture that holds the image.
     *
     * @readonly
     * @type PIXI.BaseTexture
     * @name Bitmap#baseTexture
     */
    get baseTexture() { return this._baseTexture; }

    /**
     * The bitmap image.
     *
     * @readonly
     * @type HTMLImageElement
     * @name Bitmap#image
     */
    get image() { return this._image; }

    /**
     * The bitmap canvas.
     *
     * @readonly
     * @type HTMLCanvasElement
     * @name Bitmap#canvas
     */
    get canvas() {
        this._ensureCanvas();
        return this._canvas;
    } // canvas

    /**
     * The 2d context of the bitmap canvas.
     *
     * @readonly
     * @type CanvasRenderingContext2D
     * @name Bitmap#context
     */
    get context() {
        this._ensureCanvas();
        return this._context;
    } // context

    /**
     * The width of the bitmap.
     *
     * @readonly
     * @type number
     * @name Bitmap#width
     */
    get width() {
        const image = this._canvas || this._image;
        return image ? image.width : 0;
    } // width

    /**
     * The height of the bitmap.
     *
     * @readonly
     * @type number
     * @name Bitmap#height
     */
    get height() {
        const image = this._canvas || this._image;
        return image ? image.height : 0;
    } // height

    /**
     * The rectangle of the bitmap.
     *
     * @readonly
     * @type Rectangle
     * @name Bitmap#rect
     */
    get rect() { return new Rectangle(0, 0, this.width, this.height); }

    /**
     * Whether the smooth scaling is applied.
     *
     * @type boolean
     * @name Bitmap#smooth
     */
    get smooth() { return this._smooth; }

    /**
     * Whether the smooth scaling is applied.
     *
     * @type boolean
     * @name Bitmap#smooth
     */
    set smooth(value) {
        if (this._smooth === value) return;
        this._smooth = value;
        this._updateScaleMode();
    } // smooth

    /**
     * The opacity of the drawing object in the range (0, 255).
     *
     * @type number
     * @name Bitmap#paintOpacity
     */
    get paintOpacity() { return this._paintOpacity; }

    /**
     * The opacity of the drawing object in the range (0, 255).
     *
     * @type number
     * @name Bitmap#paintOpacity
     */
    set paintOpacity(value) {
        if (this._paintOpacity === value) return;
        this._paintOpacity = value;
        this.context.globalAlpha = this._paintOpacity / 255;
    } // paintOpacity

    /**
     * Destroys the bitmap.
     */
    destroy() {
        // Edited to help plugins destroy the base texture in better ways
        if (this._baseTexture) this._destroyBaseTexture();
        //
        this._destroyCanvas();
    } // destroy

    /**
     * Resizes the bitmap.
     *
     * @param {number} width - The new width of the bitmap.
     * @param {number} height - The new height of the bitmap.
     */
    resize(width, height) {
        const [w, h] = [Math.max(width || 0, 1), Math.max(height || 0, 1)];
        [this.canvas.width, this.canvas.height] = [w, h];
        [this.baseTexture.width, this.baseTexture.height] = [w, h];
    } // resize

    /**
     * Performs a block transfer.
     *
     * @param {Bitmap} source - The bitmap to draw.
     * @param {number} sx - The x coordinate in the source.
     * @param {number} sy - The y coordinate in the source.
     * @param {number} sw - The width of the source image.
     * @param {number} sh - The height of the source image.
     * @param {number} dx - The x coordinate in the destination.
     * @param {number} dy - The y coordinate in the destination.
     * @param {number} [dw=sw] The width to draw the image in the destination.
     * @param {number} [dh=sh] The height to draw the image in the destination.
     */
    blt(source, sx, sy, sw, sh, dx, dy, dw, dh) {
        /** @todo Thinks of if at least logging the catch will be better */
        try {
            // Edited to help plugins alter the blt behaviors in better ways
            this._bltWithoutRescue(source, sx, sy, sw, sh, dx, dy, dw, dh);
            //
        } catch (e) {}
        //
    } // blt

    /**
     * Returns pixel color at the specified point.
     *
     * @param {number} x - The x coordinate of the pixel in the bitmap.
     * @param {number} y - The y coordinate of the pixel in the bitmap.
     * @returns {string} The pixel color (hex format).
     */
    getPixel(x, y) {
        const data = this.context.getImageData(x, y, 1, 1).data;
        let result = "#";
        for (let i = 0; i < 3; i++) result += data[i].toString(16).padZero(2);
        return result;
    } // getPixel

    /**
     * Returns alpha pixel value at the specified point.
     *
     * @param {number} x - The x coordinate of the pixel in the bitmap.
     * @param {number} y - The y coordinate of the pixel in the bitmap.
     * @returns {string} The alpha value.
     */
    getAlphaPixel(x, y) {
        return this.context.getImageData(x, y, 1, 1).data[3];
    } // getAlphaPixel

    /**
     * Clears the specified rectangle.
     *
     * @param {number} x - The x coordinate for the upper-left corner.
     * @param {number} y - The y coordinate for the upper-left corner.
     * @param {number} width - The width of the rectangle to clear.
     * @param {number} height - The height of the rectangle to clear.
     */
    clearRect(x, y, width, height) {
        this.context.clearRect(x, y, width, height);
        this._baseTexture.update();
    } // clearRect

    /**
     * Clears the entire bitmap.
     */
    clear() { this.clearRect(0, 0, this.width, this.height); }

    /**
     * Fills the specified rectangle.
     *
     * @param {number} x - The x coordinate for the upper-left corner.
     * @param {number} y - The y coordinate for the upper-left corner.
     * @param {number} width - The width of the rectangle to fill.
     * @param {number} height - The height of the rectangle to fill.
     * @param {string} color - The color of the rectangle in CSS format.
     */
    fillRect(x, y, width, height, color) {
        const context = this.context;
        context.save();
        context.fillStyle = color;
        context.fillRect(x, y, width, height);
        context.restore();
        this._baseTexture.update();
    } // fillRect

    /**
     * Fills the entire bitmap.
     *
     * @param {string} color - The color of the rectangle in CSS format.
     */
    fillAll(color) { this.fillRect(0, 0, this.width, this.height, color); }

    /**
     * Draws the specified rectangular frame.
     *
     * @param {number} x - The x coordinate for the upper-left corner.
     * @param {number} y - The y coordinate for the upper-left corner.
     * @param {number} width - The width of the rectangle to fill.
     * @param {number} height - The height of the rectangle to fill.
     * @param {string} color - The color of the rectangle in CSS format.
     */
    strokeRect(x, y, width, height, color) {
        const context = this.context;
        context.save();
        context.strokeStyle = color;
        context.strokeRect(x, y, width, height);
        context.restore();
        this._baseTexture.update();
    } // strokeRect

    // prettier-ignore
    /**
     * Draws the rectangle with a gradation.
     *
     * @param {number} x - The x coordinate for the upper-left corner.
     * @param {number} y - The y coordinate for the upper-left corner.
     * @param {number} width - The width of the rectangle to fill.
     * @param {number} height - The height of the rectangle to fill.
     * @param {string} color1 - The gradient starting color.
     * @param {string} color2 - The gradient ending color.
     * @param {boolean} vertical - Whether the gradient should be draw as vertical or not.
     */
    gradientFillRect(x, y, width, height, color1, color2, vertical) {
        const context = this.context;
        const [x1, y1] = [vertical ? x : x + width, vertical ? y + height : y];
        const grad = context.createLinearGradient(x, y, x1, y1);
        grad.addColorStop(0, color1);
        grad.addColorStop(1, color2);
        context.save();
        context.fillStyle = grad;
        context.fillRect(x, y, width, height);
        context.restore();
        this._baseTexture.update();
    } // gradientFillRect

    /**
     * Draws a bitmap in the shape of a circle.
     *
     * @param {number} x - The x coordinate based on the circle center.
     * @param {number} y - The y coordinate based on the circle center.
     * @param {number} radius - The radius of the circle.
     * @param {string} color - The color of the circle in CSS format.
     */
    drawCircle(x, y, radius, color) {
        const context = this.context;
        context.save();
        context.fillStyle = color;
        context.beginPath();
        context.arc(x, y, radius, 0, Math.PI * 2, false);
        context.fill();
        context.restore();
        this._baseTexture.update();
    } // drawCircle

    /**
     * Draws the outline text to the bitmap.
     *
     * @param {string} text - The text that will be drawn.
     * @param {number} x - The x coordinate for the left of the text.
     * @param {number} y - The y coordinate for the top of the text.
     * @param {number} maxWidth - The maximum allowed width of the text.
     * @param {number} lineHeight - The height of the text line.
     * @param {string} align - The alignment of the text.
     */
    drawText(text, x, y, maxWidth, lineHeight, align) {
        // [Note] Different browser makes different rendering with
        //   textBaseline == 'top'. So we use 'alphabetic' here.
        const { context, context: { alpha } } = this;
        maxWidth = maxWidth || 0xffffffff;
        // Edited to help plugins alter the text align behaviors in better ways
        const tx = this._drawnTextX(align, x, maxWidth);
        //
        // Edited to help plugins alter the line height behaviors in better ways
        const ty = this._drawnTextY(y, lineHeight);
        //
        context.save();
        [context.font, context.textAlign] = [this._makeFontNameText(), align];
        [context.textBaseline, context.globalAlpha] = ["alphabetic", 1];
        this._drawTextOutline(text, tx, ty, maxWidth);
        context.globalAlpha = alpha;
        this._drawTextBody(text, tx, ty, maxWidth);
        context.restore();
        this._baseTexture.update();
    } // drawText

    /**
     * Returns the width of the specified text.
     *
     * @param {string} text - The text to be measured.
     * @returns {number} The width of the text in pixels.
     */
    measureTextWidth(text) {
        const context = this.context;
        context.save();
        context.font = this._makeFontNameText();
        const width = context.measureText(text).width;
        context.restore();
        return width;
    } // measureTextWidth

    /**
     * Adds a callback function that will be called when the bitmap is loaded.
     *
     * @param {function} listner - The callback function.
     */
    addLoadListener(listner) {
        this.isReady() ? listner(this) : this._loadListeners.push(listner);
    } // addLoadListener

    /**
     * Tries to load the image again.
     */
    retry() {  this._startLoading(); }

    _makeFontNameText() {
        const italic = this.fontItalic ? "Italic " : "";
        const bold = this.fontBold ? "Bold " : "";
        return `${italic}${bold}${this.fontSize}px ${this.fontFace}`;
    } // _makeFontNameText

    _drawTextOutline(text, tx, ty, maxWidth) {
        const context = this.context;
        context.strokeStyle = this.outlineColor;
        [context.lineWidth, context.lineJoin] = [this.outlineWidth, "round"];
        context.strokeText(text, tx, ty, maxWidth);
    } // _drawTextOutline

    _drawTextBody(text, tx, ty, maxWidth) {
        const context = this.context;
        context.fillStyle = this.textColor;
        context.fillText(text, tx, ty, maxWidth);
    } // _drawTextBody

    _createCanvas(width, height) {
        this._canvas = document.createElement("canvas");
        this._context = this._canvas.getContext("2d");
        [this._canvas.width, this._canvas.height] = [width, height];
        this._createBaseTexture(this._canvas);
    } // _createCanvas

    _ensureCanvas() {
        if (this._canvas) return;
        if (this._image) return this._ensureCanvasWithImage();
        this._createCanvas(0, 0);
    } // _ensureCanvas

    _destroyCanvas() {
        // Edited to help plugins alter the canvas destructions in better ways
        if (this._canvas) this._destroyExistingCanvas();
        //
    } // _destroyCanvas

    _createBaseTexture(source) {
        // Edited to help plugins alter the base texture behaviors in better way
        this._baseTexture = this._newBaseTexture(source);
        //
        this._updateScaleModeWithBaseTexture();
    } // _createBaseTexture

    _updateScaleMode() {
        // Edited to help plugins alter the scale mode behaviors in better ways
        if (this._baseTexture) this._updateScaleModeWithBaseTexture();
        //
    } // _updateScaleMode

    _startLoading() {
        // Edited to help plugins alter the image behaviors in better ways
        this._image = this._newImage();
        //
        this._destroyCanvas();
        this._loadingState = "loading";
        if (Utils.hasEncryptedImages()) return this._startDecrypting();
        this._image.src = this._url;
    } // _startLoading

    // Edited to help pluggins alter the xhr behaviors in better ways
    _startDecrypting() { this._newXhr().send(); }
    //

    _onXhrLoad(xhr) {
        // Edited to help pluggins alter the xhr load behaviors in better ways
        xhr.status < 400 ? this._onXhrLoadSuc(xhr) : this._onError();
        //
    } // _onXhrLoad

    _onLoad() {
        if (Utils.hasEncryptedImages()) URL.revokeObjectURL(this._image.src);
        this._loadingState = "loaded";
        this._createBaseTexture(this._image);
        this._callLoadListeners();
    } // _onLoad

    _callLoadListeners() {
        const loadListeners = this._loadListeners;
        while (!loadListeners.isEmpty()) loadListeners.shift()(this);
    } // _callLoadListeners

    _onError() { this._loadingState = "error"; }

    /**
     * Initializes all private variables of this bitmap
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    _initPrivateVars() {
        this._canvas = this._context = this._baseTexture = this._image = null;
        [this._url, this._paintOpacity] = ["", 255];
        [this._smooth, this._loadListeners] = [true, []];
        // "none", "loading", "loaded", or "error"
        this._loadingState = "none";
    } // _initPrivateVars

    /**
     * Initializes all public variables of this bitmap
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    _initPublicVars() {
        /**
         * The face name of the font.
         *
         * @type string
         */
        this.fontFace = "sans-serif";
        /**
         * The size of the font in pixels.
         *
         * @type number
         */
        this.fontSize = 16;
        /**
         * Whether the font is bold.
         *
         * @type boolean
         */
        this.fontBold = false;
        /**
         * Whether the font is italic.
         *
         * @type boolean
         */
        this.fontItalic = false;
        /**
         * The color of the text in CSS format.
         *
         * @type string
         */
        this.textColor = "#ffffff";
        /**
         * The color of the outline of the text in CSS format.
         *
         * @type string
         */
        this.outlineColor = "rgba(0, 0, 0, 0.5)";
        /**
         * The width of the outline of the text.
         *
         * @type number
         */
        this.outlineWidth = 3;
    } // _initPublicVars

    /**
     * Use this bitmap to take the snapshot of the current game stage
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    _snapStage(stage, renderTexture, bitmap) {
        const renderer = Graphics.app.renderer;
        renderer.render(stage, renderTexture);
        stage.worldTransform.identity();
        bitmap.context.drawImage(renderer.extract.canvas(renderTexture), 0, 0);
    } // _snapStage

    /**
     * This method shouldn't be called without an existing base texture
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    _destroyBaseTexture() {
        this._baseTexture.destroy();
        this._baseTexture = null;
    } // _destroyBaseTexture

    /**
     * This method shouldn't be used without a try-catch
     * Potential Hotspot/Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
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
    _bltWithoutRescue(source, sx, sy, sw, sh, dx, dy, dw, dh) {
        [dw, dh] = [dw || sw, dh || sh];
        const image = source._canvas || source._image;
        this.context.globalCompositeOperation = "source-over";
        this.context.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
        this._baseTexture.update();
    } // _bltWithoutRescue

    /**
     * Potential Hotspot/Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {number} x - The x coordinate for the top of the text
     * @param {number} lineHeight - The height of the text line
     * @returns {number} The x position of the text to be drawn
     */
    _drawnTextX(align, x, maxWidth) {
        if (align === "center") return x + maxWidth / 2;
        if (align === "right") return x + maxWidth;
        return x;
    } // _drawnTextX

    /**
     * Potential Hotspot/Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {number} y - The y coordinate for the top of the text
     * @param {number} lineHeight - The height of the text line
     * @returns {number} The y position of the text to be drawn
     */
    _drawnTextY(y, lineHeight) {
        return Math.round(y + lineHeight / 2 + this.fontSize * 0.35);
    } // _drawnTextY

    /**
     * This shouldn't be called without an existing image
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    _ensureCanvasWithImage() {
        this._createCanvas(this._image.width, this._image.height);
        this._context.drawImage(this._image, 0, 0);
    } // _ensureCanvasWithImage

    /**
     * Cleanups the existing canvas of this bitmap before erasing it
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    _destroyExistingCanvas() {
        this._canvas.width = this._canvas.height = 0;
        this._canvas = null;
    } // _destroyExistingCanvas

    /**
     * Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @returns {PIXI.BaseTexture} The new base texture of this bitmap
     */
    _newBaseTexture(source) {
        const baseTexture = new PIXI.BaseTexture(source);
        baseTexture.mipmap = false;
        [baseTexture.width, baseTexture.height] = [source.width, source.height];
        return baseTexture;
    } // _newBaseTexture

    /**
     * Updates the scale mode of the existing base texture
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    _updateScaleModeWithBaseTexture() {
        if (this._smooth) {
            this._baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
        } else this._baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
    } // _updateScaleModeWithBaseTexture

    /**
     * Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @returns {Image} The new image of this bitmap
     */
    _newImage() {
        const image = new Image();
        image.onload = this._onLoad.bind(this);
        image.onerror = this._onError.bind(this);
        return image;
    } // _newImage

    /**
     * Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @returns {XMLHttpRequest} The GET XMLHttpRequest receiving array buffers
     */
    _newXhr() {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", `${this._url}_`);
        xhr.responseType = "arraybuffer";
        xhr.onload = () => this._onXhrLoad(xhr);
        xhr.onerror = this._onError.bind(this);
        return xhr;
    } // _newXhr

    /**
     * Sets the image source by the XMLHttpRequeset response
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {XMLHttpRequest} xhr - The GET XMLHttpRequest with array buffers
     */
    _onXhrLoadSuc(xhr) {
        const arrayBuffer = Utils.decryptArrayBuffer(xhr.response);
        this._image.src = URL.createObjectURL(new Blob([arrayBuffer]));
    } // _onXhrLoadSuc

} // Bitmap

/*----------------------------------------------------------------------------
 *    # Rewritten class: ColorFilter
 *      - Rewrites it into the ES6 standard
 *----------------------------------------------------------------------------*/

//-----------------------------------------------------------------------------
/**
 * The color filter for WebGL.
 *
 * @class
 * @extends PIXI.Filter
 */

class ColorFilter extends PIXI.Filter {

    constructor() {
        super(null, this._fragmentSrc());
        // Edited to help plugins setup the color filter uniforms in better ways
        this._initUniforms();
        //
    } // constructor

    /**
     * Sets the hue rotation value.
     *
     * @param {number} hue - The hue value (-360, 360).
     */
    setHue(hue) { this.uniforms.hue = +hue; }

    /**
     * Sets the color tone.
     *
     * @param {array} tone - The color tone [r, g, b, gray].
     */
    setColorTone(tone) {
        if (!(tone instanceof Array)) {
            throw new Error("Argument must be an array");
        }
        this.uniforms.colorTone = tone.clone();
    } // setColorTone

    /**
     * Sets the blend color.
     *
     * @param {array} color - The blend color [r, g, b, a].
     */
    setBlendColor(color) {
        if (!(color instanceof Array)) {
            throw new Error("Argument must be an array");
        }
        this.uniforms.blendColor = color.clone();
    } // setBlendColor

    /**
     * Sets the brightness.
     *
     * @param {number} brightness - The brightness (0 to 255).
     */
      setBrightness(brightness) { this.uniforms.brightness = +brightness; }

    _fragmentSrc() {
        return `varying vec2 vTextureCoord;
                uniform sampler2D uSampler;
                uniform float hue;
                uniform vec4 colorTone;
                uniform vec4 blendColor;
                uniform float brightness;
                vec3 rgbToHsl(vec3 rgb) {
                  float r = rgb.r;
                  float g = rgb.g;
                  float b = rgb.b;
                  float cmin = min(r, min(g, b));
                  float cmax = max(r, max(g, b));
                  float h = 0.0;
                  float s = 0.0;
                  float l = (cmin + cmax) / 2.0;
                  float delta = cmax - cmin;
                  if (delta > 0.0) {
                    if (r == cmax) {
                      h = mod((g - b) / delta + 6.0, 6.0) / 6.0;
                    } else if (g == cmax) {
                      h = ((b - r) / delta + 2.0) / 6.0;
                    else {
                      h = ((r - g) / delta + 4.0) / 6.0;
                    }
                    if (l < 1.0) {
                      s = delta / (1.0 - abs(2.0 * l - 1.0));
                    }
                  }
                  return vec3(h, s, l);
                }
                vec3 hslToRgb(vec3 hsl) {
                  float h = hsl.x;
                  float l = hsl.z;
                  float c = (1.0 - abs(2.0 * l - 1.0)) * hsl.y;
                  float m = l - c / 2.0;
                  float cm = c + m;
                  float xm = c * (1.0 - abs((mod(h * 6.0, 2.0)) - 1.0)) + m;
                  if (h < 1.0 / 6.0) {
                    return vec3(cm, xm, m);
                  } else if (h < 2.0 / 6.0) {
                    return vec3(xm, cm, m);
                  } else if (h < 3.0 / 6.0) {
                    return vec3(m, cm, xm);
                  } else if (h < 4.0 / 6.0) {
                    return vec3(m, xm, cm);
                  } else if (h < 5.0 / 6.0) {
                    return vec3(xm, m, cm);
                  } else {
                    return vec3(cm, m, xm);
                  }
                }
                float fragColorR(float r, float a, float i1, float i3) {
                  r = clamp((r / a + colorTone.r / 255.0) * a, 0.0, 1.0);
                  r = clamp(r * i1 + blendColor.r / 255.0 * i3 * a, 0.0, 1.0);
                  return r * brightness / 255.0;
                }
                float fragColorG(float g, float a, float i1, float i3) {
                  g = clamp((g / a + colorTone.g / 255.0) * a, 0.0, 1.0);
                  g = clamp(g * i1 + blendColor.g / 255.0 * i3 * a, 0.0, 1.0);
                  return g * brightness / 255.0;
                }
                float fragColorB(float b, float a, float i1, float i3) {
                  b = clamp((b / a + colorTone.b / 255.0) * a, 0.0, 1.0);
                  b = clamp(b * i1 + blendColor.b / 255.0 * i3 * a, 0.0, 1.0);
                  return b * brightness / 255.0;
                }
                void main() {
                  vec4 sample = texture2D(uSampler, vTextureCoord);
                  float a = sample.a;
                  vec3 hsl = rgbToHsl(sample.rgb);
                  hsl.x = mod(hsl.x + hue / 360.0, 1.0);
                  hsl.y = hsl.y * (1.0 - colorTone.a / 255.0);
                  vec3 rgb = hslToRgb(hsl);
                  float i3 = blendColor.a / 255.0;
                  float i1 = 1.0 - i3;
                  float r = fragColorR(rgb.r, a, i1, i3);
                  float g = fragColorG(rgb.g, a, i1, i3);
                  float b = fragColorB(rgb.b, a, i1, i3);
                  gl_FragColor = vec4(r, g, b, a);
                }`;
    } // _fragmentSrc

    /**
     * Initializes the uniforms of this color filter
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    _initUniforms() {
        this.uniforms.hue = 0;
        this.uniforms.colorTone = [0, 0, 0, 0];
        this.uniforms.blendColor = [0, 0, 0, 0];
        this.uniforms.brightness = 255;
    } // _initUniforms

} // ColorFilter

/*----------------------------------------------------------------------------
 *    # Rewritten class: Point
 *      - Rewrites it into the ES6 standard
 *----------------------------------------------------------------------------*/

//-----------------------------------------------------------------------------
/**
 * The point class.
 *
 * @class
 * @extends PIXI.Point
 * @param {number} x - The x coordinate.
 * @param {number} y - The y coordinate.
 */
class Point extends PIXI.Point {}

/*----------------------------------------------------------------------------
 *    # Rewritten class: Rectangle
 *      - Rewrites it into the ES6 standard
 *----------------------------------------------------------------------------*/

//-----------------------------------------------------------------------------
/**
 * The rectangle class.
 *
 * @class
 * @extends PIXI.Rectangle
 * @param {number} x - The x coordinate for the upper-left corner.
 * @param {number} y - The y coordinate for the upper-left corner.
 * @param {number} width - The width of the rectangle.
 * @param {number} height - The height of the rectangle.
 */
class Rectangle extends PIXI.Rectangle {}

/*----------------------------------------------------------------------------
 *    # Rewritten class: ScreenSprite
 *      - Rewrites it into the ES6 standard
 *----------------------------------------------------------------------------*/

//-----------------------------------------------------------------------------
/**
 * The sprite which covers the entire game screen.
 *
 * @class
 * @extends PIXI.Container
 */
class ScreenSprite extends PIXI.Container {

    constructor() {
        super();
        this._graphics = new PIXI.Graphics();
        this.addChild(this._graphics);
        this.opacity = 0;
        this._red = this._green = this._blue = -1;
        this.setBlack();
    } // constructor

    /**
     * The opacity of the sprite (0 to 255).
     *
     * @type number
     * @name ScreenSprite#opacity
     */
    get opacity() { return this.alpha * 255; }

    /**
     * The opacity of the sprite (0 to 255).
     *
     * @type number
     * @name ScreenSprite#opacity
     */
    set opacity(value) { this.alpha = value.clamp(0, 255) / 255; }

    /**
     * Destroys the screen sprite.
     */
    destroy() { super.destroy({ children: true, texture: true }); }

    /**
     * Sets black to the color of the screen sprite.
     */
    setBlack() { this.setColor(0, 0, 0); }

    /**
     * Sets white to the color of the screen sprite.
     */
    setWhite() { this.setColor(255, 255, 255); }

    /**
     * Sets the color of the screen sprite by values.
     *
     * @param {number} r - The red value in the range (0, 255).
     * @param {number} g - The green value in the range (0, 255).
     * @param {number} b - The blue value in the range (0, 255).
     */
    setColor(r, g, b) {
        // Edited to help plugins alter the set color behaviors in better ways
        if (this._isNewColor(r, g, b)) this._setNewColor(r, g, b);
        //
    } // setColor

    /**
     * Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {number} r - The red value in the range (0, 255)
     * @param {number} g - The green value in the range (0, 255)
     * @param {number} b - The blue value in the range (0, 255)
     * @returns {boolean} If the specified color's different from the current
     */
    _isNewColor(r, g, b) {
        return this._red !== r || this._green !== g || this._blue !== b;
    } // _isNewColor

    /**
     * Sets the new screen sprite red, green and blue color components
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {number} r - The red value in the range (0, 255)
     * @param {number} g - The green value in the range (0, 255)
     * @param {number} b - The blue value in the range (0, 255)
     */
    _setNewColor(r, g, b) {
        [this._red, this._green, this._blue] = [r, g, b].map(component => {
            return Math.round(component || 0).clamp(0, 255);
        });
        const graphics = this._graphics;
        graphics.clear();
        graphics.beginFill((this._red << 16) | (this._green << 8) | this._blue, 1);
        /** @todo Fugures out where do -50000 and 100000 come from */
        graphics.drawRect(-50000, -50000, 100000, 100000);
        //
    } // _setNewColor

} // ScreenSprite

/*----------------------------------------------------------------------------
 *    # Rewritten class: Sprite
 *      - Rewrites it into the ES6 standard
 *----------------------------------------------------------------------------*/

//-----------------------------------------------------------------------------
/**
 * The basic object that is rendered to the game screen.
 *
 * @class
 * @extends PIXI.Sprite
 * @param {Bitmap} bitmap - The image for the sprite.
 */
class Sprite extends PIXI.Sprite {

    constructor(bitmap) {
        // Edited to help plugins setups the empty base texture in better ways
        this._initEmptyBaseTexture();
        //
        const frame = new Rectangle();
        const texture = new PIXI.Texture(Sprite._emptyBaseTexture, frame);
        super(texture);
        [this.spriteId, this._bitmap] = [Sprite._counter++, bitmap];
        [this._frame, this._hue] = [frame, 0];
        [this._blendColor, this._colorTone] = [[0, 0, 0, 0], [0, 0, 0, 0]];
        [this._colorFilter, this._blendMode] = [null, PIXI.BLEND_MODES.NORMAL];
        this._hidden = false;
        this._onBitmapChange();
    } // constructor

    static _emptyBaseTexture = null;
    static _counter = 0;

    /**
     * The image for the sprite.
     *
     * @type Bitmap
     * @name Sprite#bitmap
     */
    get bitmap() { return this._bitmap; }

    /**
     * The image for the sprite.
     *
     * @type Bitmap
     * @name Sprite#bitmap
     */
    set bitmap(value) {
        if (this._bitmap === value) return;
        this._bitmap = value;
        this._onBitmapChange();
    } // bitmap

    /**
     * The width of the sprite without the scale.
     *
     * @type number
     * @name Sprite#width
     */
    get width() { return this._frame.width; }

    /**
     * The width of the sprite without the scale.
     *
     * @type number
     * @name Sprite#width
     */
    set width(value) {
        /** @todo Checks if these should be called if the width's unchanged */
        this._frame.width = value;
        this._refresh();
        //
    } // width

    /**
     * The height of the sprite without the scale.
     *
     * @type number
     * @name Sprite#height
     */
    get height() { return this._frame.height; }

    /**
     * The height of the sprite without the scale.
     *
     * @type number
     * @name Sprite#height
     */
    set height(value) {
        /** @todo Checks if these should be called if the height's unchanged */
        this._frame.height = value;
        this._refresh();
        //
    } // height

    /**
     * The opacity of the sprite (0 to 255).
     *
     * @type number
     * @name Sprite#opacity
     */
    get opacity() { return this.alpha * 255; }

    /**
     * The opacity of the sprite (0 to 255).
     *
     * @type number
     * @name Sprite#opacity
     */
    set opacity(value) { this.alpha = value.clamp(0, 255) / 255; }

    /**
     * The blend mode to be applied to the sprite.
     *
     * @type number
     * @name Sprite#blendMode
     */
    get blendMode() {
        if (this._colorFilter) return this._colorFilter.blendMode;
        return this._blendMode;
    } // blendMode

    /**
     * The blend mode to be applied to the sprite.
     *
     * @type number
     * @name Sprite#blendMode
     */
    set blendMode(value) {
        this._blendMode = value;
        if (this._colorFilter) this._colorFilter.blendMode = value;
    } // blendMode

    /**
     * Destroys the sprite.
     */
    destroy() { super.destroy({ children: true, texture: true }); }

    /**
     * Updates the sprite for each frame.
     */
    update() {
        /** @todo Checks if an invisible sprite needs to be updated */
        this.children.forEach(child => { if (child.update) child.update(); });
        //
    } // update

    /**
     * Makes the sprite "hidden".
     */
    hide() {
        this._hidden = true;
        this.updateVisibility();
    } // hide

    /**
     * Releases the "hidden" state of the sprite.
     */
    show() {
        this._hidden = false;
        this.updateVisibility();
    } // show

    /**
     * Reflects the "hidden" state of the sprite to the visible state.
     */
    updateVisibility() { this.visible = !this._hidden; }

    /**
     * Sets the x and y at once.
     *
     * @param {number} x - The x coordinate of the sprite.
     * @param {number} y - The y coordinate of the sprite.
     */
    move(x, y) { [this.x, this.y] = [x, y]; }

    /**
     * Sets the rectagle of the bitmap that the sprite displays.
     *
     * @param {number} x - The x coordinate of the frame.
     * @param {number} y - The y coordinate of the frame.
     * @param {number} width - The width of the frame.
     * @param {number} height - The height of the frame.
     */
    setFrame(x, y, width, height) {
        this._refreshFrame = false;
        // Edited to help plugins alter the set frame behaviors in better ways
        if (!this._isNewFrame(x, y, width, height)) return;
        this._setNewFrame(x, y, width, height);
        //
    } // setFrame

    /**
     * Sets the hue rotation value.
     *
     * @param {number} hue - The hue value (-360, 360).
     */
    setHue(hue) {
        const hueNum = +hue;
        if (this._hue === hueNum) return;
        this._hue = hueNum;
        this._updateColorFilter();
    } // setHue

    /**
     * Gets the blend color for the sprite.
     *
     * @returns {array} The blend color [r, g, b, a].
     */
    getBlendColor() { return this._blendColor.clone(); }

    /**
     * Sets the blend color for the sprite.
     *
     * @param {array} color - The blend color [r, g, b, a].
     */
    setBlendColor(color) {
        if (!(color instanceof Array)) {
            throw new Error("Argument must be an array");
        }
        if (this._blendColor.equals(color)) return;
        this._blendColor = color.clone();
        this._updateColorFilter();
    } // setBlendColor

    /**
     * Gets the color tone for the sprite.
     *
     * @returns {array} The color tone [r, g, b, gray].
     */
    getColorTone() { return this._colorTone.clone(); }

    /**
     * Sets the color tone for the sprite.
     *
     * @param {array} tone - The color tone [r, g, b, gray].
     */
    setColorTone(tone) {
        if (!(tone instanceof Array)) {
            throw new Error("Argument must be an array");
        }
        if (this._colorTone.equals(tone)) return;
        this._colorTone = tone.clone();
        this._updateColorFilter();
    } // setColorTone

    _onBitmapChange() {
        // Edited to help plugins alter bitmap change behaviors in better ways
        if (this._bitmap) return this._onExistingBitmapChange();
        this._onNullBitmapChange();
        //
    } // _onBitmapChange

    _onBitmapLoad(bitmapLoaded) {
        // Edited to help plugins alter bitmap loading behaviors in better ways
        if (bitmapLoaded === this._bitmap) this._onThisBitmapLoaded();
        //
        this._refresh();
    } // _onBitmapLoad

    // Edited to help plugins alter texture refresh behaviors in better ways
    _refresh() { if (this.texture) this._refreshWithTexture(); }
    //

    _createColorFilter() {
        this._colorFilter = new ColorFilter();
        this.filters = this.filters || [];
        this.filters.push(this._colorFilter);
    } // _createColorFilter

    _updateColorFilter() {
        if (!this._colorFilter) this._createColorFilter();
        this._colorFilter.setHue(this._hue);
        this._colorFilter.setBlendColor(this._blendColor);
        this._colorFilter.setColorTone(this._colorTone);
    } // _updateColorFilter

    /**
     * Initializes the new static empty base texture of the Sprite class
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    static _initEmptyBaseTexture() {
        if (this._emptyBaseTexture) return;
        this._emptyBaseTexture = this._newEmptyBaseTexture();
    } // _initEmptyBaseTexture

    /**
     * Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @returns {PIXI.BaseTexture} The new static empty base texture of Sprite
     */
    static _newEmptyBaseTexture() {
        const emptyBaseTexture = new PIXI.BaseTexture();
        emptyBaseTexture.setSize(1, 1);
        return emptyBaseTexture;
    } // _newEmptyBaseTexture

    /**
     * Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {number} x - The x coordinate of the frame
     * @param {number} y - The y coordinate of the frame
     * @param {number} width - The width of the frame
     * @param {number} height - The height of the frame
     * @returns {boolean} If it's indeed a new sprite bitmap rectangle
     */
    _isNewFrame(x, y, width, height) {
        const frame = this._frame;
        if (x !== frame.x || y !== frame.y) return true;
        return width !== frame.width || height !== frame.height;
    } // _isNewFrame

    /**
     * Sets the new rectangle of the bitmap that this sprite displays
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {number} x - The x coordinate of the frame
     * @param {number} y - The y coordinate of the frame
     * @param {number} width - The width of the frame
     * @param {number} height - The height of the frame
     */
    _setNewFrame(x, y, width, height) {
        const frame = this._frame;
        [frame.x, frame.y, frame.width, frame.height] = [x, y, width, height];
        this._refresh();
    } // _setNewFrame

    /**
     * Triggers the events upon changing this existing sprite bitmap
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    _onExistingBitmapChange() {
        this._refreshFrame = true;
        this._bitmap.addLoadListener(this._onBitmapLoad.bind(this));
    } // _onExistingBitmapChange

    /**
     * Triggers the events upon removing this sprite bitmap
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    _onNullBitmapChange() {
        this._refreshFrame = false;
        this.texture.frame = new Rectangle();
    } // _onNullBitmapChange

    /**
     * Triggers the events upon just finished loading this sprite bitmap
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    _onThisBitmapLoaded() {
      /** @todo Checks if bitmapLoaded in _onBitmapLoad is indeed nullable */
      if (!this._refreshFrame || !this._bitmap) return;
      //
      this._refreshFrame = false;
      this._frame.width = this._bitmap.width;
      this._frame.height = this._bitmap.height;
    } // _onThisBitmapLoaded

    /**
     * This method shouldn't be called without an existing texture
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    _refreshWithTexture() {
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
        if (baseTexture) this._refreshWithBaseTexture(baseTexture, frame);
        this.texture._updateID++;
    } // _refreshWithTexture

    /**
     * This method shouldn't be called without an existing texture
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {PIXI.BaseTexture} baseTexture - The sprite bitmap base texture
     * @param {Rectangle} frame - The rectangular frame with real dimensions
     */
    _refreshWithBaseTexture(baseTexture, frame) {
        const { texture } = this;
        texture.baseTexture = baseTexture;
        /** @todo Thinks of if at least logging the catch will be better */
        try {
            texture.frame = frame;
        } catch (e) { texture.frame = new Rectangle(); }
        //
    } // _refreshWithBaseTexture

} // Sprite

/*----------------------------------------------------------------------------
 *    # Rewritten class: Stage
 *      - Rewrites it into the ES6 standard
 *----------------------------------------------------------------------------*/

//-----------------------------------------------------------------------------
/**
 * The root object of the display tree.
 *
 * @class
 * @extends PIXI.Container
 */
class Stage extends PIXI.Container {

    destroy() { super.destroy({ children: true, texture: true }); }

} // Stage

/*----------------------------------------------------------------------------
 *    # Rewritten class: Tilemap
 *      - Rewrites it into the ES6 standard
 *----------------------------------------------------------------------------*/

//-----------------------------------------------------------------------------
/**
 * The tilemap which displays 2D tile-based game map.
 *
 * @class
 * @extends PIXI.Container
 */
class Tilemap extends PIXI.Container {

    constructor() {
        super();
        // Edited to help plugins initialize variables in better ways
        this._initPrivateVars();
        this._initPublicVars();
        //
        this._createLayers();
        this.refresh();
    } // constructor

    /**
     * The width of the tilemap.
     *
     * @type number
     * @name Tilemap#width
     */
    get width() { return this._width; }

    /**
     * The width of the tilemap.
     *
     * @type number
     * @name Tilemap#width
     */
    set width(value) { this._width = value; }

    /**
     * The height of the tilemap.
     *
     * @type number
     * @name Tilemap#height
     */
    get height() { return this._height; }

    /**
     * The height of the tilemap.
     *
     * @type number
     * @name Tilemap#height
     */
    set height(value) { this._height = value; }

    /**
     * Destroys the tilemap.
     */
    destroy() { super.destroy({ children: true, texture: true }); }

    /**
     * Sets the tilemap data.
     *
     * @param {number} width - The width of the map in number of tiles.
     * @param {number} height - The height of the map in number of tiles.
     * @param {array} data - The one dimensional array for the map data.
     */
    setData(width, height, data) {
        [this._mapWidth, this._mapHeight] = [width, height];
        this._mapData = data;
    } // setData

    /**
     * Checks whether the tileset is ready to render.
     *
     * @type boolean
     * @returns {boolean} True if the tilemap is ready.
     */
    isReady() {
        return this._bitmaps.every(bitmap => !bitmap || bitmap.isReady());
    } // isReady

    /**
     * Updates the tilemap for each frame.
     */
    update() {
        this.animationCount++;
        /** @todo Figures out where does 30 come from */
        this.animationFrame = Math.floor(this.animationCount / 30);
        //
        this.children.forEach(child => { if (child.update) child.update(); });
    } // update

    /**
     * Sets the bitmaps used as a tileset.
     *
     * @param {array} bitmaps - The array of the tileset bitmaps.
     */
    setBitmaps(bitmaps) {
        // [Note] We wait for the images to finish loading. Creating textures
        //   from bitmaps that are not yet loaded here brings some maintenance
        //   difficulties. e.g. PIXI overwrites img.onload internally.
        this._bitmaps = bitmaps;
        const listener = this._updateBitmaps.bind(this);
        this._bitmaps.forEach(bitmap => {
            if (!bitmap.isReady()) bitmap.addLoadListener(listener);
        });
        this._needsBitmapsUpdate = true;
        this._updateBitmaps();
    } // setBitmaps

    /**
     * Forces to repaint the entire tilemap.
     */
    refresh() { this._needsRepaint = true; }

    /**
     * Updates the transform on all children of this container for rendering.
     */
    updateTransform = function() {
        const [ox, oy] = [Math.ceil(this.origin.x), Math.ceil(this.origin.y)];
        const startX = Math.floor((ox - this._margin) / this._tileWidth);
        const startY = Math.floor((oy - this._margin) / this._tileHeight);
        this._upperLayer.x = this._lowerLayer.x = startX * this._tileWidth - ox;
        this._lowerLayer.y = startY * this._tileHeight - oy;
        this._upperLayer.y = this._lowerLayer.y;
        /** @todo Extracts these codes into well-named functions */
        if (this._needsRepaint ||
                this._lastAnimationFrame !== this.animationFrame ||
                this._lastStartX !== startX || this._lastStartY !== startY) {
            this._lastAnimationFrame = this.animationFrame;
            [this._lastStartX, this._lastStartY] = [startX, startY];
            this._addAllSpots(startX, startY);
            this._needsRepaint = false;
        }
        //
        this._sortChildren();
        super.updateTransform();
    } // updateTransform

    _createLayers() {
        /*
         * [Z coordinate]
         *  0 : Lower tiles
         *  1 : Lower characters
         *  3 : Normal characters
         *  4 : Upper tiles
         *  5 : Upper characters
         *  6 : Airship shadow
         *  7 : Balloon
         *  8 : Animation
         *  9 : Destination
         */
        this._lowerLayer = new Tilemap.Layer();
        this._lowerLayer.z = 0;
        this._upperLayer = new Tilemap.Layer();
        this._upperLayer.z = 4;
        this.addChild(this._lowerLayer);
        this.addChild(this._upperLayer);
        this._needsRepaint = true;
    } // _createLayers

    _updateBitmaps = function() {
        /** @todo Extracts these codes into well-named functions */
        if (!this._needsBitmapsUpdate || !this.isReady()) return;
        this._lowerLayer.setBitmaps(this._bitmaps);
        this._needsBitmapsUpdate = false;
        this._needsRepaint = true;
        //
    }

    _addAllSpots = function(startX, startY) {
        this._lowerLayer.clear();
        this._upperLayer.clear();
        const widthWithMatgin = this.width + this._margin * 2;
        const heightWithMatgin = this.height + this._margin * 2;
        const tileCols = Math.ceil(widthWithMatgin / this._tileWidth) + 1;
        const tileRows = Math.ceil(heightWithMatgin / this._tileHeight) + 1;
        for (let y = 0; y < tileRows; y++) {
            for (let x = 0; x < tileCols; x++) {
                this._addSpot(startX, startY, x, y);
            }
        }
    } // _addAllSpots

    _addSpot(startX, startY, x, y) {
        const [mx, my] = [startX + x, startY + y];
        const [dx, dy] = [x * this._tileWidth, y * this._tileHeight];
        const tileId0 = this._readMapData(mx, my, 0);
        const tileId1 = this._readMapData(mx, my, 1);
        const tileId2 = this._readMapData(mx, my, 2);
        const tileId3 = this._readMapData(mx, my, 3);
        const shadowBits = this._readMapData(mx, my, 4);
        const upperTileId1 = this._readMapData(mx, my - 1, 1);
        this._addSpotTile(tileId0, dx, dy);
        this._addSpotTile(tileId1, dx, dy);
        this._addShadow(this._lowerLayer, shadowBits, dx, dy);
        /** @todo Extracts these codes into well-named functions */
        if (this._isTableTile(upperTileId1) && !this._isTableTile(tileId1)) {
            if (!Tilemap.isShadowingTile(tileId0)) {
                this._addTableEdge(this._lowerLayer, upperTileId1, dx, dy);
            }
        }
        //
        /** @todo Extracts these codes into well-named functions */
        if (this._isOverpassPosition(mx, my)) {
            this._addTile(this._upperLayer, tileId2, dx, dy);
            this._addTile(this._upperLayer, tileId3, dx, dy);
        } else {
            this._addSpotTile(tileId2, dx, dy);
            this._addSpotTile(tileId3, dx, dy);
        }
        //
    } // _addSpot

    _addSpotTile(tileId, dx, dy) {
        if (this._isHigherTile(tileId)) {
            this._addTile(this._upperLayer, tileId, dx, dy);
        } else this._addTile(this._lowerLayer, tileId, dx, dy);
    } // _addSpotTile

    _addTile(layer, tileId, dx, dy) {
        // Edited to help plugins alter add tile behaviors in better ways
        if (!Tilemap.isVisibleTile(tileId)) return;
        this._addVisibleTile(layer, tileId, dx, dy);
        //
    } // _addTile

    _addNormalTile(layer, tileId, dx, dy) {
        const setNumber = Tilemap.isTileA5(tileId) ? 4 : 5 + Math.floor(tileId / 256);
        const [w, h] = [this._tileWidth, this._tileHeight];
        const sx = ((Math.floor(tileId / 128) % 2) * 8 + (tileId % 8)) * w;
        const sy = (Math.floor((tileId % 256) / 8) % 16) * h;
        layer.addRect(setNumber, sx, sy, dx, dy, w, h);
    } // _addNormalTile

    _addAutotile(layer, tileId, dx, dy) {
        /** @todo Breaks the codes into several smaller well-named functions */
        const kind = Tilemap.getAutotileKind(tileId);
        const shape = Tilemap.getAutotileShape(tileId);
        const [tx, ty] = [kind % 8, Math.floor(kind / 8)];
        let setNumber = bx = by = 0;
        let [autotileTable, isTable] = [Tilemap.FLOOR_AUTOTILE_TABLE, false];
        if (Tilemap.isTileA1(tileId)) {
            const waterSurfaceIndex = [0, 1, 2, 1][this.animationFrame % 4];
            setNumber = 0;
            if (kind === 0) {
                [bx, by] = [waterSurfaceIndex * 2, 0];
            } else if (kind === 1) {
                [bx, by] = [waterSurfaceIndex * 2, 3];
            } else if (kind === 2) {
                [bx, by] = [6, 0];
            } else if (kind === 3) {
                [bx, by] = [6, 3];
            } else {
                bx = Math.floor(tx / 4) * 8;
                by = ty * 6 + (Math.floor(tx / 2) % 2) * 3;
                if (kind % 2 === 0) {
                    bx += waterSurfaceIndex * 2;
                } else {
                    bx += 6;
                    autotileTable = Tilemap.WATERFALL_AUTOTILE_TABLE;
                    by += this.animationFrame % 3;
                }
            }
        } else if (Tilemap.isTileA2(tileId)) {
            [setNumber, bx, by] = [1, tx * 2, (ty - 2) * 3];
            isTable = this._isTableTile(tileId);
        } else if (Tilemap.isTileA3(tileId)) {
            [setNumber, bx, by] = [2, tx * 2, (ty - 6) * 2];
            bx = tx * 2;
            by = (ty - 6) * 2;
            autotileTable = Tilemap.WALL_AUTOTILE_TABLE;
        } else if (Tilemap.isTileA4(tileId)) {
            [setNumber, bx] = [3, tx * 2];
            by = Math.floor((ty - 10) * 2.5 + (ty % 2 === 1 ? 0.5 : 0));
            if (ty % 2 === 1) autotileTable = Tilemap.WALL_AUTOTILE_TABLE;
        }
        const table = autotileTable[shape];
        const [w1, h1] = [this._tileWidth / 2, this._tileHeight / 2];
        for (let i = 0; i < 4; i++) {
            const [qsx, qsy] = table[i];
            const [sx1, sy1] = [(bx * 2 + qsx) * w1, (by * 2 + qsy) * h1];
            const [dx1, dy1] = [dx + (i % 2) * w1, dy + Math.floor(i / 2) * h1];
            if (isTable && (qsy === 1 || qsy === 5)) {
                const [qsx2, qsy2] = [qsy === 1 ? (4 - qsx) % 4 : qsx, 3];
                const [sx2, sy2] = [(bx * 2 + qsx2) * w1, (by * 2 + qsy2) * h1];
                layer.addRect(setNumber, sx2, sy2, dx1, dy1, w1, h1);
                layer.addRect(setNumber, sx1, sy1, dx1, dy1 + h1 / 2, w1, h1 / 2);
            } else layer.addRect(setNumber, sx1, sy1, dx1, dy1, w1, h1);
        }
        //
    } // _addAutotile

    _addTableEdge(layer, tileId, dx, dy) {
        // Edited to help plugins alter add table edge behaviors in better ways
        if (!Tilemap.isTileA2(tileId)) return;
        this._addTileA2TableEdge(layer, tileId, dx, dy);
        //
    } // _addTableEdge

    _addShadow(layer, shadowBits, dx, dy) {
        /** @todo Figures out where 0x0f comes from */
        if (!(shadowBits & 0x0f)) return;
        //
        const [w1, h1] = [this._tileWidth / 2, this._tileHeight / 2];
        for (let i = 0; i < 4; i++) {
            if (!(shadowBits & (1 << i))) continue;
            const [dx1, dy1] = [dx + (i % 2) * w1, dy + Math.floor(i / 2) * h1];
            layer.addRect(-1, 0, 0, dx1, dy1, w1, h1);
        }
    } // _addShadow

    _readMapData(x, y, z) {
        if (!this._mapData) return 0;
        const [width, height] = [this._mapWidth, this._mapHeight];
        if (this.horizontalWrap) x = x.mod(width);
        if (this.verticalWrap) y = y.mod(height);
        if (x < 0 || x >= width || y < 0 || y >= height) return 0;
        return this._mapData[(z * height + y) * width + x] || 0;
    } // _readMapData

    _isHigherTile(tileId) { return this.flags[tileId] & 0x10; }

    _isTableTile(tileId) {
        /** @todo Figures out where 0x80 comes from */
        return this.isTileA2(tileId) && this.flags[tileId] & 0x80;
        //
    } // _isTableTile

    _isOverpassPosition(/*mx, my*/) { return false; }

    _sortChildren() { this.children.sort(this._compareChildOrder.bind(this)); }

    _compareChildOrder(a, b) {
        if (a.z !== b.z) return a.z - b.z;
        if (a.y !== b.y) return a.y - b.y;
        return a.spriteId - b.spriteId;
    } // _compareChildOrder

    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    // Tile type checkers
    static TILE_ID_B = 0;
    static TILE_ID_C = 256;
    static TILE_ID_D = 512;
    static TILE_ID_E = 768;
    static TILE_ID_A5 = 1536;
    static TILE_ID_A1 = 2048;
    static TILE_ID_A2 = 2816;
    static TILE_ID_A3 = 4352;
    static TILE_ID_A4 = 5888;
    static TILE_ID_MAX = 8192;

    static isVisibleTile(tileId) {
        return tileId > 0 && tileId < this.TILE_ID_MAX;
    } // isVisibleTile

    static isAutotile(tileId) { return tileId >= this.TILE_ID_A1; }

    static getAutotileKind(tileId) {
        return Math.floor((tileId - this.TILE_ID_A1) / 48);
    } // getAutotileKind

    static getAutotileShape(tileId) { return (tileId - this.TILE_ID_A1) % 48; }

    static makeAutotileId(kind, shape) {
        return this.TILE_ID_A1 + kind * 48 + shape;
    } // makeAutotileId

    static isSameKindTile(tileID1, tileID2) {
        if (this.isAutotile(tileID1) && this.isAutotile(tileID2)) {
            return this.getAutotileKind(tileID1) === this.getAutotileKind(tileID2);
        } else return tileID1 === tileID2;
    } // isSameKindTile

    static isTileA1(tileId) {
        return tileId >= this.TILE_ID_A1 && tileId < this.TILE_ID_A2;
    } // isTileA1

    static isTileA2(tileId) {
        return tileId >= this.TILE_ID_A2 && tileId < this.TILE_ID_A3;
    } // isTileA2

    static isTileA3(tileId) {
        return tileId >= this.TILE_ID_A3 && tileId < this.TILE_ID_A4;
    } // isTileA3

    static isTileA4(tileId) {
        return tileId >= this.TILE_ID_A4 && tileId < this.TILE_ID_MAX;
    } // isTileA4

    static isTileA5(tileId) {
        return tileId >= this.TILE_ID_A5 && tileId < this.TILE_ID_A1;
    } // isTileA5

    static isWaterTile(tileId) {
        if (!this.isTileA1(tileId)) return false;
        if (tileId < this.TILE_ID_A1 + 96) return false;
        return tileId < this.TILE_ID_A1 + 192;
    } // isWaterTile

    static isWaterfallTile(tileId) {
        if (tileId >= this.TILE_ID_A1 + 192 && tileId < this.TILE_ID_A2) {
            return this.getAutotileKind(tileId) % 2 === 1;
        } else return false;
    } // isWaterfallTile

    static isGroundTile(tileId) {
        if (this.isTileA1(tileId) || this.isTileA2(tileId)) return true;
        return this.isTileA5(tileId);
    } // isGroundTile

    static isShadowingTile(tileId) {
        return this.isTileA3(tileId) || this.isTileA4(tileId);
    } // isShadowingTile

    static isRoofTile(tileId) {
        return this.isTileA3(tileId) && this.getAutotileKind(tileId) % 16 < 8;
    } // isRoofTile

    static isWallTopTile(tileId) {
        return this.isTileA4(tileId) && this.getAutotileKind(tileId) % 16 < 8;
    } // isWallTopTile

    static isWallSideTile(tileId) {
        if (!this.isTileA3(tileId) && !this.isTileA4(tileId)) return false;
        return this.getAutotileKind(tileId) % 16 >= 8;
    } // isWallSideTile

    static isWallTile(tileId) {
        return this.isWallTopTile(tileId) || this.isWallSideTile(tileId);
    } // isWallTile

    static isFloorTypeAutotile(tileId) {
        if (this.isTileA1(tileId) && !this.isWaterfallTile(tileId)) return true;
        return this.isTileA2(tileId) || this.isWallTopTile(tileId);
    } // isFloorTypeAutotile

    static isWallTypeAutotile(tileId) {
        return this.isRoofTile(tileId) || this.isWallSideTile(tileId);
    } // isWallTypeAutotile

    static isWaterfallTypeAutotile(tileId) {
        return this.isWaterfallTile(tileId);
    } // isWaterfallTypeAutotile

    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    // Autotile shape number to coordinates of tileset images
    // prettier-ignore
    static FLOOR_AUTOTILE_TABLE = [
        [[2, 4], [1, 4], [2, 3], [1, 3]],
        [[2, 0], [1, 4], [2, 3], [1, 3]],
        [[2, 4], [3, 0], [2, 3], [1, 3]],
        [[2, 0], [3, 0], [2, 3], [1, 3]],
        [[2, 4], [1, 4], [2, 3], [3, 1]],
        [[2, 0], [1, 4], [2, 3], [3, 1]],
        [[2, 4], [3, 0], [2, 3], [3, 1]],
        [[2, 0], [3, 0], [2, 3], [3, 1]],
        [[2, 4], [1, 4], [2, 1], [1, 3]],
        [[2, 0], [1, 4], [2, 1], [1, 3]],
        [[2, 4], [3, 0], [2, 1], [1, 3]],
        [[2, 0], [3, 0], [2, 1], [1, 3]],
        [[2, 4], [1, 4], [2, 1], [3, 1]],
        [[2, 0], [1, 4], [2, 1], [3, 1]],
        [[2, 4], [3, 0], [2, 1], [3, 1]],
        [[2, 0], [3, 0], [2, 1], [3, 1]],
        [[0, 4], [1, 4], [0, 3], [1, 3]],
        [[0, 4], [3, 0], [0, 3], [1, 3]],
        [[0, 4], [1, 4], [0, 3], [3, 1]],
        [[0, 4], [3, 0], [0, 3], [3, 1]],
        [[2, 2], [1, 2], [2, 3], [1, 3]],
        [[2, 2], [1, 2], [2, 3], [3, 1]],
        [[2, 2], [1, 2], [2, 1], [1, 3]],
        [[2, 2], [1, 2], [2, 1], [3, 1]],
        [[2, 4], [3, 4], [2, 3], [3, 3]],
        [[2, 4], [3, 4], [2, 1], [3, 3]],
        [[2, 0], [3, 4], [2, 3], [3, 3]],
        [[2, 0], [3, 4], [2, 1], [3, 3]],
        [[2, 4], [1, 4], [2, 5], [1, 5]],
        [[2, 0], [1, 4], [2, 5], [1, 5]],
        [[2, 4], [3, 0], [2, 5], [1, 5]],
        [[2, 0], [3, 0], [2, 5], [1, 5]],
        [[0, 4], [3, 4], [0, 3], [3, 3]],
        [[2, 2], [1, 2], [2, 5], [1, 5]],
        [[0, 2], [1, 2], [0, 3], [1, 3]],
        [[0, 2], [1, 2], [0, 3], [3, 1]],
        [[2, 2], [3, 2], [2, 3], [3, 3]],
        [[2, 2], [3, 2], [2, 1], [3, 3]],
        [[2, 4], [3, 4], [2, 5], [3, 5]],
        [[2, 0], [3, 4], [2, 5], [3, 5]],
        [[0, 4], [1, 4], [0, 5], [1, 5]],
        [[0, 4], [3, 0], [0, 5], [1, 5]],
        [[0, 2], [3, 2], [0, 3], [3, 3]],
        [[0, 2], [1, 2], [0, 5], [1, 5]],
        [[0, 4], [3, 4], [0, 5], [3, 5]],
        [[2, 2], [3, 2], [2, 5], [3, 5]],
        [[0, 2], [3, 2], [0, 5], [3, 5]],
        [[0, 0], [1, 0], [0, 1], [1, 1]]
    ]; // FLOOR_AUTOTILE_TABLE
    // prettier-ignore
    static WALL_AUTOTILE_TABLE = [
        [[2, 2], [1, 2], [2, 1], [1, 1]],
        [[0, 2], [1, 2], [0, 1], [1, 1]],
        [[2, 0], [1, 0], [2, 1], [1, 1]],
        [[0, 0], [1, 0], [0, 1], [1, 1]],
        [[2, 2], [3, 2], [2, 1], [3, 1]],
        [[0, 2], [3, 2], [0, 1], [3, 1]],
        [[2, 0], [3, 0], [2, 1], [3, 1]],
        [[0, 0], [3, 0], [0, 1], [3, 1]],
        [[2, 2], [1, 2], [2, 3], [1, 3]],
        [[0, 2], [1, 2], [0, 3], [1, 3]],
        [[2, 0], [1, 0], [2, 3], [1, 3]],
        [[0, 0], [1, 0], [0, 3], [1, 3]],
        [[2, 2], [3, 2], [2, 3], [3, 3]],
        [[0, 2], [3, 2], [0, 3], [3, 3]],
        [[2, 0], [3, 0], [2, 3], [3, 3]],
        [[0, 0], [3, 0], [0, 3], [3, 3]]
    ]; // WALL_AUTOTILE_TABLE
    // prettier-ignore
    static WATERFALL_AUTOTILE_TABLE = [
        [[2, 0], [1, 0], [2, 1], [1, 1]],
        [[0, 0], [1, 0], [0, 1], [1, 1]],
        [[2, 0], [3, 0], [2, 1], [3, 1]],
        [[0, 0], [3, 0], [0, 1], [3, 1]]
    ]; // WATERFALL_AUTOTILE_TABLE

    /**
     * Initializes all private variables of this tilemap
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    _initPrivateVars() {
        [this._width, this._height] = [Graphics.width, Graphics.height];
        [this._margin, this._tileWidth, this._tileHeight] = [20, 48, 48];
        this._mapWidth = this._mapHeight = 0;
        [this._mapData, this._bitmaps] = [null, []];
    } // _initPrivateVars

    /**
     * Initializes all public variables of this tilemap
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    _initPublicVars() {
        /**
         * The origin point of the tilemap for scrolling.
         *
         * @type Point
         */
        this.origin = new Point();
        /**
         * The tileset flags.
         *
         * @type array
         */
        this.flags = [];
        /**
         * The animation count for autotiles.
         *
         * @type number
         */
        this.animationCount = 0;
        /**
         * Whether the tilemap loops horizontal.
         *
         * @type boolean
         */
        this.horizontalWrap = false;
        /**
         * Whether the tilemap loops vertical.
         *
         * @type boolean
         */
        this.verticalWrap = false;
    } // _initPublicVars

    /**
     * Adds the visible tile at the specified positions on the specified layer
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {Tilemap.Layer} later - The layer having this visible tile added
     * @param {id} tileId - The id of the visible tile to be added
     * @param {number} dx - The x position of the visible tile to be added
     * @param {number} dy - The y position of the visible tile to be added
     */
    _addVisibleTile(layer, tileId, dx, dy) {
        if (Tilemap.isAutotile(tileId)) {
            this._addAutotile(layer, tileId, dx, dy);
        } else this._addNormalTile(layer, tileId, dx, dy);
    } // _addVisibleTile

    /**
     * Adds the A2 table edge tile at specified positions on the specified layer
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {Tilemap.Layer} later - The layer having this visible tile added
     * @param {id} tileId - The id of the visible tile to be added
     * @param {number} dx - The x position of the visible tile to be added
     * @param {number} dy - The y position of the visible tile to be added
     */
    _addTileA2TableEdge(layer, tileId, dx, dy) {
        const autotileTable = Tilemap.FLOOR_AUTOTILE_TABLE;
        const kind = Tilemap.getAutotileKind(tileId);
        const shape = Tilemap.getAutotileShape(tileId);
        const [tx, ty, setNumber] = [kind % 8, Math.floor(kind / 8), 1];
        const [bx, by, table] = [tx * 2, (ty - 2) * 3, autotileTable[shape]];
        const [w1, h1] = [this._tileWidth / 2, this._tileHeight / 2];
        for (let i = 0; i < 2; i++) {
            const [qsx, qsy] = table[2 + i];
            const sx1 = (bx * 2 + qsx) * w1;
            const sy1 = (by * 2 + qsy) * h1 + h1 / 2;
            const [dx1, dy1] = [dx + (i % 2) * w1, dy + Math.floor(i / 2) * h1];
            layer.addRect(setNumber, sx1, sy1, dx1, dy1, w1, h1 / 2);
        }
    } // _addTileA2TableEdge

} // Tilemap

//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// Internal classes
Tilemap.Layer = class extends PIXI.Container {

    constructor() {
        super();
        // Edited to help plugins initialize private variables in better ways
        this._initPrivateVars();
        //
        this._createVao();
    } // constructor

    static MAX_GL_TEXTURES = 3;
    static VERTEX_STRIDE = 9 * 4;

    destroy() {
        // Edited to help plugins alter existing vao destructions in better ways
        if (this._vao) this._destroyWithVao();
        //
        this._indexBuffer = this._vertexBuffer = this._vao = null;
    } // destroy

    setBitmaps(bitmaps) {
        this._images = bitmaps.map(bitmap => bitmap.image || bitmap.canvas);
        this._needsTexturesUpdate = true;
    } // setBitmaps

    clear() {
        this._elements.clear();
        this._needsVertexUpdate = true;
    } // clear

    addRect(setNumber, sx, sy, dx, dy, w, h) {
        this._elements.push([setNumber, sx, sy, dx, dy, w, h]);
    } // addRect

    render(renderer) {
        const gl = renderer.gl;
        const tilemapRenderer = renderer.plugins.rpgtilemap;
        const shader = tilemapRenderer.getShader();
        const matrix = shader.uniforms.uProjectionMatrix;
        renderer.batch.setObjectRenderer(tilemapRenderer);
        renderer.projection.projectionMatrix.copyTo(matrix);
        matrix.append(this.worldTransform);
        renderer.shader.bind(shader);
        // Edited to help plugins alter texture update behaviors in better ways
        this._checkTexturesUpdate(tilemapRenderer, renderer);
        //
        tilemapRenderer.bindTextures(renderer);
        renderer.geometry.bind(this._vao, shader);
        this._updateIndexBuffer();
        // Edited to help plugins alter vertex update behaviors in better ways
        this._checkVertexUpdate();
        //
        renderer.geometry.updateBuffers();
        const numElements = this._elements.length;
        // Edited to help plugins alter render element behaviors in better ways
        if (numElements > 0) this._renderWithElems(renderer, gl, numElements);
        //
    } // render

    isReady() {
        if (this._images.isEmpty()) return false;
        return this._images.every(texture => texture && texture.valid);
    } // isReady

    _createVao() {
        this._indexBuffer = new PIXI.Buffer(null, true, true);
        this._vertexBuffer = new PIXI.Buffer(null, true, false);
        // Edited to help plugins alter vao create behaviors in better ways
        this._vao = this._newVao(this._indexBuffer, this._vertexBuffer);
        //
    } // _createVao

    _updateIndexBuffer() {
        const numElements = this._elements.length;
        /** @todo Extracts these codes into well-named functions */
        if (this._indexArray.length >= numElements * 6 * 2) return;
        this._indexArray = PIXI.utils.createIndicesForQuads(numElements * 2);
        this._indexBuffer.update(this._indexArray);
        //
    } // _updateIndexBuffer

    _updateVertexBuffer() {
        const numElements = this._elements.length;
        const required = numElements * Tilemap.Layer.VERTEX_STRIDE;
        if (this._vertexArray.length < required) {
            this._vertexArray = new Float32Array(required * 2);
        }
        const [vertexArray, repeatIs] = [this._vertexArray, [0, 9, 18, 27]];
        this._elements.forEach((item, i) => {
            const setNumber = item[0], tid = setNumber >> 2;
            const sxOffset = 1024 * (setNumber & 1);
            const syOffset = 1024 * ((setNumber >> 1) & 1);
            const [sx, sy] = [item[1] + sxOffset, item[2] + syOffset];
            const [dx, dy, w, h] = [item[3], item[4], item[5], item[6]];
            const [frameLeft, frameTop] = [sx + 0.5, sy + 0.5];
            const [frameRight, frameBottom] = [sx + w - 0.5, sy + h - 0.5];
            const vertexArrIStart = 36 * i;
            const repeats = [tid, frameLeft, frameTop, frameRight, frameBottom];
            repeatIs.forEach(i => {
                repeats.forEach((val, j) => {
                    vertexArray[vertexArrIStart + i + j] = val;
                });
            });
            vertexArray[vertexArrIStart + 5] = sx;
            vertexArray[vertexArrIStart + 6] = sy;
            vertexArray[vertexArrIStart + 7] = dx;
            vertexArray[vertexArrIStart + 8] = dy;
            vertexArray[vertexArrIStart + 14] = sx + w;
            vertexArray[vertexArrIStart + 15] = sy;
            vertexArray[vertexArrIStart + 16] = dx + w;
            vertexArray[vertexArrIStart + 17] = dy;
            vertexArray[vertexArrIStart + 23] = sx + w;
            vertexArray[vertexArrIStart + 24] = sy + h;
            vertexArray[vertexArrIStart + 25] = dx + w;
            vertexArray[vertexArrIStart + 26] = dy + h;
            vertexArray[vertexArrIStart + 32] = sx;
            vertexArray[vertexArrIStart + 33] = sy + h;
            vertexArray[vertexArrIStart + 34] = dx;
            vertexArray[vertexArrIStart + 35] = dy + h;
        });
        this._vertexBuffer.update(vertexArray);
    } // _updateVertexBuffer

    /**
     * Initializes all private variables of this tilemap layer
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    _initPrivateVars() {
        this._elements = [];
        [this._indexBuffer, this._indexArray] = [null, new Float32Array(0)];
        [this._vertexBuffer, this._vertexArray] = [null, new Float32Array(0)];
        this._vao = null;
        this._needsTexturesUpdate = this._needsVertexUpdate = false;
        [this._images, this._state] = [[], PIXI.State.for2d()];
    } // _initPrivateVars

    /**
     * Destroys this tilemap layer with the existing vao
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    _destroyWithVao() {
        this._vao.destroy();
        this._indexBuffer.destroy();
        this._vertexBuffer.destroy();
    } // _destroyWithVao

    /**
     * Checks if the textures need to be updated and do so if they're needed
     * Hotspot/Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {Tilemap.Renderer} tilemapRenderer - The RMMZ tilemap renderer
     * @param {PIXI.Renderer} renderer - The pixi renderer
     */
    _checkTexturesUpdate(tilemapRenderer, renderer) {
        if (!this._needsTexturesUpdate) return;
        tilemapRenderer.updateTextures(renderer, this._images);
        this._needsTexturesUpdate = false;
    } // _checkTexturesUpdate

    /**
     * Checks if the vertex needs to be updated and do so if it's needed
     * Hotspot/Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    _checkVertexUpdate() {
        if (!this._needsVertexUpdate) return;
        this._updateVertexBuffer();
        this._needsVertexUpdate = false;
    } // _checkVertexUpdate

    /**
     * Checks if the textures need to be updated and do so if they're needed
     * Hotspot/Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {PIXI.Renderer} renderer - The pixi renderer
     * @param {WebGLRenderingContext} gl - The pixi WebGL rendering context
     */
    _renderWithElems(renderer, gl, numElements) {
        renderer.state.set(this._state);
        renderer.geometry.draw(gl.TRIANGLES, numElements * 6, 0);
    } // _renderWithElems

    /**
     * Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {PIXI.Buffer} ib - The index buffer of this tilemap
     * @param {PIXI.Buffer} vb - The vertex buffer of this tilemap
     */
    _newVao(ib, vb) {
        const [stride, type] = [Tilemap.Layer.VERTEX_STRIDE, PIXI.TYPES.FLOAT];
        return new PIXI.Geometry()
                .addIndex(ib)
                .addAttribute("aTextureId", vb, 1, false, type, stride, 0)
                .addAttribute("aFrame", vb, 4, false, type, stride, 1 * 4)
                .addAttribute("aSource", vb, 2, false, type, stride, 5 * 4)
                .addAttribute("aDest", vb, 2, false, type, stride, 7 * 4);
    } // _newVao

}; // Tilemap.Layer

/*----------------------------------------------------------------------------
 *    # Rewritten class: Tilemap.Renderer
 *      - Rewrites it into the ES6 standard
 *----------------------------------------------------------------------------*/

Tilemap.Renderer = class extends PIXI.ObjectRenderer {

    constructor(renderer) {
        super(renderer);
        this._initPrivateVars();
        this.contextChange();
    } // constructor

    destroy() {
        super.destroy();
        this._destroyInternalTextures();
        this._shader.destroy();
        this._shader = null;
    } // destroy

    getShader() { return this._shader; }

    contextChange() {
        [this._shader, this._images] = [this._createShader(), []];
        this._createInternalTextures();
    } // contextChange

    _createShader() {
        const vertexSrc = `attribute float aTextureId;
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
        const fragmentSrc = `varying vec4 vFrame;
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
        return new PIXI.Shader(PIXI.Program.from(vertexSrc, fragmentSrc), {
            uSampler0: 0,
            uSampler1: 1,
            uSampler2: 2,
            uProjectionMatrix: new PIXI.Matrix()
        });
    } // _createShader

    _createInternalTextures() {
        this._destroyInternalTextures();
        for (let i = 0; i < Tilemap.Layer.MAX_GL_TEXTURES; i++) {
            const baseTexture = new PIXI.BaseRenderTexture();
            baseTexture.resize(2048, 2048);
            baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
            this._internalTextures.push(baseTexture);
        }
    } // _createInternalTextures

    _destroyInternalTextures() {
        this._internalTextures.forEach(internalTexture => {
            internalTexture.destroy();
        });
        this._internalTextures = [];
    } // _destroyInternalTextures

    updateTextures(renderer, images) {
        images.forEach((image, i) => {
            renderer.texture.bind(this._internalTextures[i >> 2], 0);
            const gl = renderer.gl;
            const [x, y] = [1024 * (i % 2), 1024 * ((i >> 1) % 2)];
            const [format, type] = [gl.RGBA, gl.UNSIGNED_BYTE];
            gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0);
            // prettier-ignore
            gl.texSubImage2D(gl.TEXTURE_2D, 0, x, y, 1024, 1024, format, type,
                    this._clearBuffer);
            gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
            gl.texSubImage2D(gl.TEXTURE_2D, 0, x, y, format, type, image);
        });
    } // updateTextures

    bindTextures(renderer) {
        for (let ti = 0; ti < Tilemap.Layer.MAX_GL_TEXTURES; ti++) {
            renderer.texture.bind(this._internalTextures[ti], ti);
        }
    } // bindTextures

    /**
     * Initializes all private variables of this tilemap renderer
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    _initPrivateVars() {
        [this._shader, this._images, this._internalTextures] = [null, [], []];
        this._clearBuffer = new Uint8Array(1024 * 1024 * 4);
    } // _initPrivateVars

}; // Tilemap.Renderer
PIXI.Renderer.registerPlugin("rpgtilemap", Tilemap.Renderer);
