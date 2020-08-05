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
 *    # Links
 *      This Plugin:
 *      1. https://github.com/Double-X/DoubleX-RMMZ/blob/master/DoubleX%20RMMZ%20ES6%20Codebase.js
 *      Posts:
 *      1. https://forums.rpgmakerweb.com/index.php?threads/is-a-plugin-rewriting-rmmz-codebase-into-es6-standard-a-good-idea.124928/
 *      2. https://www.rpgmakercentral.com/topic/42504-is-a-plugin-rewriting-rmmz-codebase-into-es6-standard-a-good-idea/
 *      3. https://rpgmaker.net/forums/topics/25326/?post=909885#post909885
 *      4. https://xyphien.com/forums/threads/is-a-plugin-rewriting-rmmz-codebase-into-es6-standard-a-good-idea.9529/
 *----------------------------------------------------------------------------
 *    # Instructions
 *      1. THIS PLUGIN MUST BE PLACED ABOVE ALL THE OTHER PLUGINS
 *      2. The version number of this plugin's supposed to be the same as that
 *         of the default RMMZ codebase, so this plugin must be outdated if
 *         those version numbers are indeed different
 *      3. (Plugin developers only)The version number of this plugin is
 *         DoubleX_RMMZ["ES6 Codebase"], which should be "0.9.5"
 *         If it's falsy, it means this plugin's not loaded at the moment of
 *         querying its version number
 *      4. (Plugin developers only)If you don't want your plugin to use this
 *         plugin but still want to alias functions/methods without direct
 *         prototyping on your side, you can copy the ES6ExtendedClassAlias
 *         class from this plugin without having to give me credit or ask your
 *         plugin users to do so(as long as you've just copied that class and
 *         nothing more)
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
 *      0.9.5(GMT 1000 5-Aug-2020):
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
 * standards in better ways, but such plugins will need this plugin to work
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

// THIS CLASS ITSELF SHOULD NEVER EVER HAVE ANY CHILD CLASS
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
//

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
     * This function shouldn't be called without an existing error printer
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    static _updateExistingErrorPrinter() {
        const { style } = this._errorPrinter;
        /** @todo Figures out where do 640 and 100 come from respectively */
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
        /** @todo Figures out where does 12 come from */
        this._frameTime += (thisFrameTime - this._frameTime) / 12;
        //
        this.fps = 1000 / this._frameTime;
        this.duration = Math.max(0, time - this._frameStart);
        this._lastLoop = time;
        /** @todo Figures out where does 15 come from */
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
        // Edited to help plugins alter event handlers in better ways
        this._setupMouseEventHandlers();
        this._setupTouchEventHandlers();
        //
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
     * Setups all mouse event handlers of this touch input static class
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    static _setupMouseEventHandlers() {
      document.addEventListener("mousedown", this._onMouseDown.bind(this));
      document.addEventListener("mousemove", this._onMouseMove.bind(this));
      document.addEventListener("mouseup", this._onMouseUp.bind(this));
      document.addEventListener("wheel", this._onWheel.bind(this), {
          passive: false
      });
    } // _setupMouseEventHandlers

    /**
     * Setups all touch event handlers of this touch input static class
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    static _setupTouchEventHandlers() {
        const pf = { passive: false };
        document.addEventListener("touchstart", this._onTouchStart.bind(this), pf);
        document.addEventListener("touchmove", this._onTouchMove.bind(this), pf);
        document.addEventListener("touchend", this._onTouchEnd.bind(this));
        document.addEventListener("touchcancel", this._onTouchCancel.bind(this));
    } // _setupTouchEventHandlers

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
    resize(width = 0, height = 0) {
        // They shouldn't be "", false, null, NaN or other defined falsy values
        const [w, h] = [Math.max(width, 1), Math.max(height, 1)];
        //
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
    _startDecrypting() { this._newDecryptingXhr().send(); }
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
        // Default parameters can't be used as it's possible for them to be 0
        [dw, dh] = [dw || sw, dh || sh];
        //
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
     * This method shouldn't be called without an existing image
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    _ensureCanvasWithImage() {
        this._createCanvas(this._image.width, this._image.height);
        this._context.drawImage(this._image, 0, 0);
    } // _ensureCanvasWithImage

    /**
     * This method shouldn't be called without an existing canvas
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
     * This method shouldn't be called without an existing base texture
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
    _newDecryptingXhr() {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", `${this._url}_`);
        xhr.responseType = "arraybuffer";
        xhr.onload = this._onXhrLoad.bind(this, xhr);
        xhr.onerror = this._onError.bind(this);
        return xhr;
    } // _newDecryptingXhr

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
// It's just to play safe in case of any plugin extending PIXI.Filter in ES6 way
ES6ExtendedClassAlias.inherit(ColorFilter);
//

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
// It's just to play safe in case of any plugin extending PIXI.Point in ES6 way
ES6ExtendedClassAlias.inherit(Point);
//

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
// It's just to play safe in case of any plugin extending PIXI.Rectangle in ES6
ES6ExtendedClassAlias.inherit(Rectangle);
//

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
    _setNewColor(r = 0, g = 0, b = 0) {
        // They shouldn't be "", false, null, NaN or other defined falsy values
        [this._red, this._green, this._blue] = [r, g, b].map(component => {
            return Math.round(component).clamp(0, 255);
        });
        //
        const graphics = this._graphics;
        graphics.clear();
        graphics.beginFill((this._red << 16) | (this._green << 8) | this._blue, 1);
        /** @todo Fugures out where do -50000 and 100000 come from */
        graphics.drawRect(-50000, -50000, 100000, 100000);
        //
    } // _setNewColor

} // ScreenSprite
// It's just to play safe in case of any plugin extending PIXI.Container in ES6
ES6ExtendedClassAlias.inherit(ScreenSprite);
//

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
        Sprite._initEmptyBaseTexture();
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
     * This method shouldn't be called without an existing bitmap
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
// It's just to play safe in case of any plugin extending PIXI.Sprite in ES6 way
ES6ExtendedClassAlias.inherit(Sprite);
//

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
// It's just to play safe in case of any plugin extending PIXI.Container in ES6
ES6ExtendedClassAlias.inherit(Stage);
//

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
    set width(value) { this._width = value; }

    /**
     * The height of the tilemap.
     *
     * @type number
     * @name Tilemap#height
     */
    get height() { return this._height; }
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
    updateTransform() {
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

    _updateBitmaps() {
        /** @todo Extracts these codes into well-named functions */
        if (!this._needsBitmapsUpdate || !this.isReady()) return;
        this._lowerLayer.setBitmaps(this._bitmaps);
        this._needsBitmapsUpdate = false;
        this._needsRepaint = true;
        //
    }

    _addAllSpots(startX, startY) {
        this._lowerLayer.clear();
        this._upperLayer.clear();
        /** @todo Extracts these codes into a well-named function */
        const widthWithMatgin = this.width + this._margin * 2;
        const heightWithMatgin = this.height + this._margin * 2;
        const tileCols = Math.ceil(widthWithMatgin / this._tileWidth) + 1;
        const tileRows = Math.ceil(heightWithMatgin / this._tileHeight) + 1;
        for (let y = 0; y < tileRows; y++) {
            for (let x = 0; x < tileCols; x++) {
                this._addSpot(startX, startY, x, y);
            }
        }
        //
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
        /** @todo Figures out where does 0x0f come from */
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
        /** @todo Figures out where does 0x80 come from */
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
// It's just to play safe in case of any plugin extending PIXI.Container in ES6
ES6ExtendedClassAlias.inherit(Tilemap);
//

/*----------------------------------------------------------------------------
 *    # Rewritten class: Tilemap.Layer
 *      - Rewrites it into the ES6 standard
 *----------------------------------------------------------------------------*/

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
     * This method shouldn't be called without an existing vao
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
     * @param {number} numElements - The number of rectangle elements
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
// It's just to play safe in case of any plugin extending PIXI.Container in ES6
ES6ExtendedClassAlias.inherit(Tilemap.Layer);
//

/*----------------------------------------------------------------------------
 *    # Rewritten class: Tilemap.Renderer
 *      - Rewrites it into the ES6 standard
 *----------------------------------------------------------------------------*/

//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// Internal classes
Tilemap.Renderer = class extends PIXI.ObjectRenderer {

    constructor(renderer) {
        super(renderer);
        // Edited to help plugins initialize private variables in better ways
        this._initPrivateVars();
        //
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
        // Edited to help plugins alter the create shader glsl in better ways
        const vertexSrc = this._shaderVertexSrc();
        const fragmentSrc = this._shaderFragmentSrc();
        //
        return new PIXI.Shader(PIXI.Program.from(vertexSrc, fragmentSrc), {
            uSampler0: 0,
            uSampler1: 1,
            uSampler2: 2,
            uProjectionMatrix: new PIXI.Matrix()
        });
    } // _createShader

    _createInternalTextures() {
        this._destroyInternalTextures();
        const maxGLTextures = Tilemap.Layer.MAX_GL_TEXTURES;
        for (let i = 0; i < maxGLTextures; i++) {
            // Edited to help plugins alter internal base textures in better way
            this._internalTextures.push(this._internalBaseTexture());
            //
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
            // Edited to help plugins alter texture updates in better ways
            this._updateTextureImage(renderer, image, i);
            //
        });
    } // updateTextures

    bindTextures(renderer) {
        const maxGLTextures = Tilemap.Layer.MAX_GL_TEXTURES;
        for (let ti = 0; ti < maxGLTextures; ti++) {
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
        /** @todo Figures out where does 4 come from */
        this._clearBuffer = new Uint8Array(1024 * 1024 * 4);
        //
    } // _initPrivateVars

    /**
     * Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @returns {string} The shader vertex glsl source codes
     */
    _shaderVertexSrc() {
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
    } // _shaderVertexSrc

    /**
     * Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @returns {string} The shader fragment glsl source codes
     */
    _shaderFragmentSrc() {
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
    } // _shaderFragmentSrc

    /**
     * Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @returns {PIXI.BaseRenderTexture} The internal base texture in the list
     */
    _internalBaseTexture() {
        const baseTexture = new PIXI.BaseRenderTexture();
        /** @todo Figures out where does 2048 come from */
        baseTexture.resize(2048, 2048);
        //
        baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
        return baseTexture;
    } // _internalBaseTexture

    /**
     * Updates the specified texture image with the specified renderer
     * Hotspot/Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {PIXI.Renderer} renderer - The pixi renderer
     * @param {HTMLImageElement|HTMLCanvasElement} image - The texture image
     * @param {index} i - The index of the texture image in the image list
     */
    _updateTextureImage(renderer, image, i) {
        renderer.texture.bind(this._internalTextures[i >> 2], 0);
        const [gl, x, y] = [renderer.gl, 1024 * (i % 2), 1024 * ((i >> 1) % 2)];
        const [format, type] = [gl.RGBA, gl.UNSIGNED_BYTE];
        gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0);
        // prettier-ignore
        gl.texSubImage2D(gl.TEXTURE_2D, 0, x, y, 1024, 1024, format, type,
                this._clearBuffer);
        gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
        gl.texSubImage2D(gl.TEXTURE_2D, 0, x, y, format, type, image);
    } // _updateTextureImage

}; // Tilemap.Renderer
PIXI.Renderer.registerPlugin("rpgtilemap", Tilemap.Renderer);
// It's just to play safe in case of any plugin extending PIXI.ObjectRenderer
ES6ExtendedClassAlias.inherit(Tilemap.Renderer);
//

/*----------------------------------------------------------------------------
 *    # Rewritten class: TilingSprite
 *      - Rewrites it into the ES6 standard
 *----------------------------------------------------------------------------*/

//-----------------------------------------------------------------------------
/**
 * The sprite object for a tiling image.
 *
 * @class
 * @extends PIXI.TilingSprite
 * @param {Bitmap} bitmap - The image for the tiling sprite.
 */
class TilingSprite extends PIXI.TilingSprite {

    constructor(bitmap) {
        TilingSprite._initEmptyBaseTexture();
        const frame = new Rectangle();
        const texture = new PIXI.Texture(TilingSprite._emptyBaseTexture, frame);
        PIXI.TilingSprite.call(this, texture);
        this._bitmap = bitmap;
        this._width = this._height = 0;
        this._frame = frame;
        this._initPublicVars();
        this._onBitmapChange();
    } // constructor

    static _emptyBaseTexture = null;

    /**
     * The image for the tiling sprite.
     *
     * @type Bitmap
     * @name TilingSprite#bitmap
     */
    get bitmap() { return this._bitmap; }
    set bitmap(value) {
        if (this._bitmap === value) return;
        this._bitmap = value;
        this._onBitmapChange();
    } // bitmap

    /**
     * The opacity of the tiling sprite (0 to 255).
     *
     * @type number
     * @name TilingSprite#opacity
     */
    get opacity() { return this.alpha * 255; }
    set opacity(value) { this.alpha = value.clamp(0, 255) / 255; }

    /**
     * Destroys the tiling sprite.
     */
    destroy() { super.destroy({ children: true, texture: true }); }

    /**
     * Updates the tiling sprite for each frame.
     */
    update() {
        /** @todo Checks if an invisible sprite needs to be updated */
        this.children.forEach(child => { if (child.update) child.update(); });
        //
    } // update

    /**
     * Sets the x, y, width, and height all at once.
     *
     * @param {number} x - The x coordinate of the tiling sprite.
     * @param {number} y - The y coordinate of the tiling sprite.
     * @param {number} width - The width of the tiling sprite.
     * @param {number} height - The height of the tiling sprite.
     */
    move(x = 0, y = 0, width = 0, height = 0) {
        // They shouldn't be "", false, null, NaN or other defined falsy values
        [this.x, this.y, this._width, this._height] = [x, y, width, height];
        //
    } // move

    /**
     * Specifies the region of the image that the tiling sprite will use.
     *
     * @param {number} x - The x coordinate of the frame.
     * @param {number} y - The y coordinate of the frame.
     * @param {number} width - The width of the frame.
     * @param {number} height - The height of the frame.
     */
    setFrame(x, y, width, height) {
        [this._frame.x, this._frame.y] = [x, y];
        [this._frame.width, this._frame.height] = [width, height];
        this._refresh();
    } // setFrame

    /**
     * Updates the transform on all children of this container for rendering.
     */
    updateTransform() {
        this.tilePosition.x = Math.round(-this.origin.x);
        this.tilePosition.y = Math.round(-this.origin.y);
        super.updateTransform();
    } // updateTransform

    _onBitmapChange() {
        if (!this._bitmap) return this.texture.frame = new Rectangle();
        this._bitmap.addLoadListener(this._onBitmapLoad.bind(this));
    } // _onBitmapChange

    _onBitmapLoad() {
        this.texture.baseTexture = this._bitmap.baseTexture;
        this._refresh();
    } // _onBitmapLoad
    
    // Edited to help plugins alter texture refresh behaviors in better ways
    _refresh() { if (this.texture) this._refreshWithTexture(); }
    //

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
     * Initializes all public variables of this tiling sprite
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    _initPublicVars() {
        /**
         * The origin point of the tiling sprite for scrolling.
         *
         * @type Point
         */
        this.origin = new Point();
    } // _initPublicVars

    /**
     * This method shouldn't be called without an existing texture
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    _refreshWithTexture() {
        if (this.texture.baseTexture) this._refreshWithBaseTexture();
        this.texture._updateID++;
    } // _refreshWithTexture

    /**
     * This method shouldn't be called without an existing base texture
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    _refreshWithBaseTexture() {
        /** @todo Thinks of if at least logging the catch will be better */
        try {
            this.texture.frame = this._refreshedTextureFrame();
        } catch (e) { this.texture.frame = new Rectangle(); }
        //
    } // _refreshWithBaseTexture

    /**
     * Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @returns {Rectangle} The new frame for the refreshed texture
     */
    _refreshedTextureFrame() {
        const frame = this._frame.clone();
        /** @todo Extracts these codes into well-named functions */
        if (frame.width === 0 && frame.height === 0 && this._bitmap) {
            frame.width = this._bitmap.width;
            frame.height = this._bitmap.height;
        }
        //
        return frame;
    } // _refreshedTextureFrame

} // TilingSprite
// It's just to play safe in case of any plugin extending PIXI.TilingSprite
ES6ExtendedClassAlias.inherit(TilingSprite);
//

/*----------------------------------------------------------------------------
 *    # Rewritten class: Weather
 *      - Rewrites it into the ES6 standard
 *----------------------------------------------------------------------------*/

//-----------------------------------------------------------------------------
/**
 * The weather effect which displays rain, storm, or snow.
 *
 * @class
 * @extends PIXI.Container
 */
class Weather extends PIXI.Container {

    constructor() {
        super();
        // Edited to help plugins initialize private variables in better ways
        this._initPrivateVars();
        //
        this._createBitmaps();
        this._createDimmer();
        // Edited to help plugins initialize public variables in better ways
        this._initPublicVars();
        //
    } // constructor

    /**
     * Destroys the weather.
     */
    destroy() {
        super.destroy({ children: true, texture: true });
        this._rainBitmap.destroy();
        this._stormBitmap.destroy();
        this._snowBitmap.destroy();
    } // destroy

    /**
     * Updates the weather for each frame.
     */
    update() {
        this._updateDimmer();
        this._updateAllSprites();
    } // update

    _createBitmaps() {
        this._rainBitmap = new Bitmap(1, 60);
        this._rainBitmap.fillAll("white");
        this._stormBitmap = new Bitmap(2, 100);
        this._stormBitmap.fillAll("white");
        this._snowBitmap = new Bitmap(9, 9);
        this._snowBitmap.drawCircle(4, 4, 4, "white");
    } // _createBitmaps

    _createDimmer() {
        this._dimmerSprite = new ScreenSprite();
        this._dimmerSprite.setColor(80, 80, 80);
        this.addChild(this._dimmerSprite);
    } // _createDimmer

    _updateDimmer() {
        this._dimmerSprite.opacity = Math.floor(this.power * 6);
    } // _updateDimmer

    _updateAllSprites() {
        const maxSprites = Math.floor(this.power * 10);
        while (this._sprites.length < maxSprites) this._addSprite();
        while (this._sprites.length > maxSprites) this._removeSprite();
        this._sprites.forEach(sprite => {
            this._updateSprite(sprite);
            sprite.x = sprite.ax - this.origin.x;
            sprite.y = sprite.ay - this.origin.y;
        });
    } // _updateAllSprites

    _addSprite() {
        // Edited to help plugins alter sprite add behaviors in better ways
        const sprite = this._newSprite();
        //
        this._sprites.push(sprite);
        this.addChild(sprite);
    } // _addSprite

    _removeSprite() { this.removeChild(this._sprites.pop()); }

    _updateSprite(sprite) {
        switch (this.type) {
            case "rain":
                this._updateRainSprite(sprite);
                break;
            case "storm":
                this._updateStormSprite(sprite);
                break;
            case "snow":
                this._updateSnowSprite(sprite);
                break;
        }
        /** @todo Figures out where does 40 come from */
        if (sprite.opacity < 40) this._rebornSprite(sprite);
        //
    } // _updateSprite

    _updateRainSprite(sprite) {
        // Edited to dry up codes essentially being the identical knowledge
        this._updateWeatherSprite(sprite, this._rainBitmap, Math.PI / 16, 6);
        //
    } // _updateRainSprite

    _updateStormSprite(sprite) {
        // Edited to dry up codes essentially being the identical knowledge
        this._updateWeatherSprite(sprite, this._stormBitmap, Math.PI / 8, 8);
        //
    } // _updateStormSprite

    _updateSnowSprite(sprite) {
        // Edited to dry up codes essentially being the identical knowledge
        this._updateWeatherSprite(sprite, this._snowBitmap, Math.PI / 16, 3);
        //
    } // _updateSnowSprite

    /**
     * Initializes all private variables of this weather
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    _initPrivateVars() {
        [this._width, this._height] = [Graphics.width, Graphics.height];
        this._sprites = [];
    } // _initPrivateVars

    /**
     * Initializes all public variables of this weather
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    _initPublicVars() {
        /**
         * The type of the weather in ["none", "rain", "storm", "snow"].
         *
         * @type string
         */
        this.type = "none";
        /**
         * The power of the weather in the range (0, 9).
         *
         * @type number
         */
        this.power = 0;
        /**
         * The origin point of the tiling sprite for scrolling.
         *
         * @type Point
         */
        this.origin = new Point();
    } // _initPublicVars

    /**
     * Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @returns {Sprite} The new weather sprite to be added in the list
     */
    _newSprite() {
        const sprite = new Sprite(this.viewport);
        sprite.opacity = 0;
        return sprite;
    } // _newSprite

    /**
     * Updates the sprite with the specified weather, radian and opacity change
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {Sprite} sprite - The weather sprite to be updated
     * @param {Bitmap} bitmap - The new bitmap of the weather sprite
     * @param {number} radian - The new rotation of the weather sprite
     * @param {number} opacityDecrement - The weather sprite opacity decrement
     */
    _updateWeatherSprite(sprite, bitmap, radian, opacityDecrement) {
        [sprite.bitmap, sprite.rotation] = [bitmap, radian];
        sprite.ax -= opacityDecrement * Math.sin(sprite.rotation);
        sprite.ay += opacityDecrement * Math.cos(sprite.rotation);
        sprite.opacity -= opacityDecrement;
    } // _updateWeatherSprite

} // Weather
// It's just to play safe in case of any plugin extending PIXI.Container in ES6
ES6ExtendedClassAlias.inherit(Weather);
//

/*----------------------------------------------------------------------------
 *    # Rewritten class: WebAudio
 *      - Rewrites it into the ES6 standard
 *----------------------------------------------------------------------------*/

//-----------------------------------------------------------------------------
/**
 * The audio object of Web Audio API.
 *
 * @class
 * @param {string} url - The url of the audio file.
 */
class WebAudio {

    constructor(url) {
        this.clear();
        this._url = url;
        this._startLoading();
    } // constructor

    /**
     * Initializes the audio system.
     *
     * @returns {boolean} True if the audio system is available.
     */
    static initialize() {
        this._context = this._masterGainNode = null;
        this._masterVolume = 1;
        this._createContext();
        this._createMasterGainNode();
        this._setupEventHandlers();
        return !!this._context;
    } // initialize

    /**
     * Sets the master volume for all audio.
     *
     * @param {number} value - The master volume (0 to 1).
     */
    static setMasterVolume(value) {
        this._masterVolume = value;
        this._resetVolume();
    } // setMasterVolume

    static _createContext() {
        try {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            this._context = new AudioContext();
        } catch (e) { this._context = null; }
    } // _createContext

    static _currentTime() {
        return this._context ? this._context.currentTime : 0;
    } // _currentTime

    static _createMasterGainNode() {
        // Edited to help plugins create master gain node in better ways
        if (this._context) this._createMasterGainNodeWithContext();
        //
    } // _createMasterGainNode

    static _setupEventHandlers() {
        const onUserGesture = this._onUserGesture.bind(this);
        const onVisibilityChange = this._onVisibilityChange.bind(this);
        document.addEventListener("keydown", onUserGesture);
        document.addEventListener("mousedown", onUserGesture);
        document.addEventListener("touchend", onUserGesture);
        document.addEventListener("visibilitychange", onVisibilityChange);
    } // _setupEventHandlers

    static _onUserGesture() {
        const context = this._context;
        if (context && context.state === "suspended") context.resume();
    } // _onUserGesture

    static _onVisibilityChange() {
        if (document.visibilityState === "hidden") return this._onHide();
        this._onShow();
    } // _onVisibilityChange

    static _onHide() {
        if (this._shouldMuteOnHide()) this._fadeOut(1);
    } // _onHide

    static _onShow() {
        if (this._shouldMuteOnHide()) this._fadeIn(1);
    } // _onShow

    static _shouldMuteOnHide() {
        return Utils.isMobileDevice() && !window.navigator.standalone;
    } // _shouldMuteOnHide

    static _resetVolume() {
        // Edited to help plugins reset volume with gain node in better ways
        if (this._masterGainNode) this._resetVolWithMasterGainNode();
        //
    } // _resetColume

    static _fadeIn(duration) {
        // Edited to help plugins fade in with master gain node in better ways
        if (this._masterGainNode) this._fadeInWithMasterGainNode(duration);
        //
    } // _fadeIn

    static _fadeOut(duration) {
        // Edited to help plugins fade out with master gain node in better ways
        if (this._masterGainNode) this._fadeOutWithMasterGainNode(duration);
        //
    } // _fadeOut

    /**
     * Clears the audio data.
     */
    clear() {
        this.stop();
        this._data = this._buffer = null;
        this._sourceNode = this._gainNode = this._pannerNode = null;
        this._totalTime = this._sampleRate = 0;
        this._loop = this._loopStart = this._loopLength = 0;
        this._loopStartTime = this._loopLengthTime = this._startTime = 0;
        this._volume = this._pitch = 1;
        [this._pan, this._endTimer] = [0, null];
        [this._loadListeners, this._stopListeners] = [[], []];
        this._lastUpdateTime = 0;
        this._isLoaded = this._isError = this._isPlaying = false;
        this._decoder = null;
    } // clear

    /**
     * The url of the audio file.
     *
     * @readonly
     * @type string
     * @name WebAudio#url
     */
    get url() { return this._url; }

    /**
     * The volume of the audio.
     *
     * @type number
     * @name WebAudio#volume
     */
    get volume() { return this._volume; }
    set volume(value) {
        this._volume = value;
        if (!this._gainNode) return;
        this._gainNode.gain.setValueAtTime(value, WebAudio._currentTime());
    } // volume

    /**
     * The pitch of the audio.
     *
     * @type number
     * @name WebAudio#pitch
     */
    get pitch() { return this._pitch; }
    set pitch(value) {
        if (this._pitch === value) return;
        this._pitch = value;
        if (this.isPlaying()) this.play(this._loop, 0);
    } // pitch

    /**
     * The pan of the audio.
     *
     * @type number
     * @name WebAudio#pan
     */
    get pan() { return this._pan; }
    set pan(value) {
        this._pan = value;
        this._updatePanner();
    } // pan

    /**
     * Checks whether the audio data is ready to play.
     *
     * @returns {boolean} True if the audio data is ready to play.
     */
    isReady() { return !!this._buffer; }

    /**
     * Checks whether a loading error has occurred.
     *
     * @returns {boolean} True if a loading error has occurred.
     */
    isError() { return this._isError; }

    /**
     * Checks whether the audio is playing.
     *
     * @returns {boolean} True if the audio is playing.
     */
    isPlaying() { return this._isPlaying; }

    /**
     * Plays the audio.
     *
     * @param {boolean} loop - Whether the audio data play in a loop.
     * @param {number} offset - The start position to play in seconds.
     */
    play(loop, offset) {
        this._loop = loop;
        if (this.isReady()) {
            this._startPlaying(offset || 0);
        } else if (WebAudio._context) {
            this.addLoadListener(this.play.bind(this, loop, offset));
        }
        this._isPlaying = true;
    } // play

    /**
     * Stops the audio.
     */
    stop() {
        this._isPlaying = false;
        this._removeEndTimer();
        this._removeNodes();
        this._loadListeners = [];
        // Edited to help plugins call stop listeners in better ways
        if (this._stopListeners) this._callStopListeners();
        //
    } // stop

    /**
     * Destroys the audio.
     */
    destroy() {
        this.stop();
        this._destroyDecoder();
    } // destroy

    /**
     * Performs the audio fade-in.
     *
     * @param {number} duration - Fade-in time in seconds.
     */
    fadeIn(duration) {
        // Edited to help plugins alter fade in ready behaviors in better ways
        if (this.isReady()) return this._fadeInWhenReady(duration);
        //
        this.addLoadListener(this.fadeIn.bind(this, duration));
    } // fadeIn

    /**
     * Performs the audio fade-out.
     *
     * @param {number} duration - Fade-out time in seconds.
     */
    fadeOut(duration) {
        // Edited to help plugins alter fade out with gain node in better ways
        if (this._gainNode) this._fadeOutWithGainNode(duration);
        //
        [this._isPlaying, this._loadListeners] = [false, []];
    } // fadeOut

    /**
     * Gets the seek position of the audio.
     */
    // Edited to help plugins alter seeking with context in better ways
    seek() { return WebAudio._context ? this._seekWithContext() : 0; }
    //

    /**
     * Adds a callback function that will be called when the audio data is loaded.
     *
     * @param {function} listner - The callback function.
     */
    addLoadListener(listner) { this._loadListeners.push(listner); }

    /**
     * Adds a callback function that will be called when the playback is stopped.
     *
     * @param {function} listner - The callback function.
     */
    addStopListener(listner) { this._stopListeners.push(listner); }

    /**
     * Tries to load the audio again.
     */
    retry() {
        this._startLoading();
        if (this._isPlaying) this.play(this._loop, 0);
    } // retry

    // Edited to help plugins alter start loading behaviors in better ways
    _startLoading() { if (WebAudio._context) this._startLoadingWithContext(); }
    //

    _shouldUseDecoder() {
        return !Utils.canPlayOgg() && typeof VorbisDecoder === "function";
    } // _shouldUseDecoder

    _createDecoder() {
        this._decoder = new VorbisDecoder(
            WebAudio._context,
            this._onDecode.bind(this),
            this._onError.bind(this)
        );
    } // _createDecoder

    _destroyDecoder() {
        if (!this._decoder) return;
        this._decoder.destroy();
        this._decoder = null;
    } // _destroyDecoder

    _realUrl() { return `${this._url}${Utils.hasEncryptedAudio() ? "_" : ""}`; }

    // Edited to help plugins alter start loading xhr behaviors in better ways
    _startXhrLoading(url) { this._newLoadingXhr(url).sned(); }
    //

    _startFetching(url) {
        fetch(url).then(this._onFetch.bind(this)).catch(this._onError.bind(this));
    } // _startFetching

    _onXhrLoad(xhr) {
        // Edited to help pluggins alter the xhr load behaviors in better ways
        xhr.status < 400 ? this._onXhrLoadSuc(xhr) : this._onError();
        //
    } // _onXhrLoad

    _onFetch(response) {
        // Edited to help plugins alter on fetch ok behaviors in better ways
        response.ok ? this._onFetchOk(response) : this._onError();
        //
    } // _onFetch

    _onError() {
        if (this._sourceNode) this._stopSourceNode();
        [this._data, this._isError] = [null, true];
    } // _onError

    _onFetchProcess(value) {
        const currentData = this._data;
        const currentSize = currentData ? currentData.length : 0;
        const newData = new Uint8Array(currentSize + value.length);
        if (currentData) newData.set(currentData);
        newData.set(value, currentSize);
        this._data = newData;
        this._updateBufferOnFetch();
    } // _onFetchProcess

    _updateBufferOnFetch() {
        // [Note] Too frequent updates have a negative impact on sound quality.
        //   In addition, decodeAudioData() may fail if the data is being fetched
        //   and is too small.
        const currentTime = performance.now();
        const deltaTime = currentTime - this._lastUpdateTime;
        /** @todo Extracts these codes into well-named functions */
        if (deltaTime >= 500 && this._data.length >= 50000) {
            this._updateBuffer();
            this._lastUpdateTime = currentTime;
        }
        //
    } // _updateBufferOnFetch

    _updateBuffer() {
        const arrayBuffer = this._readableBuffer();
        this._readLoopComments(arrayBuffer);
        this._decodeAudioData(arrayBuffer);
    } // _updateBuffer

    _readableBuffer() {
        if (!Utils.hasEncryptedAudio()) return this._data.buffer;
        return Utils.decryptArrayBuffer(this._data.buffer);
    } // _readableBuffer

    _decodeAudioData(arrayBuffer) {
        if (this._shouldUseDecoder()) {
            /** @todo Extracts these codes into a well-named function */
            if (this._decoder) this._decoder.send(arrayBuffer, this._isLoaded);
            //
        } else {
            // [Note] Make a temporary copy of arrayBuffer because
            //   decodeAudioData() detaches it.
            WebAudio._context
                .decodeAudioData(arrayBuffer.slice())
                .then(this._onDecode.bind(this))
                .catch(this._onError.bind(this));
        }
    } // _decodeAudioData

    _onDecode(buffer) {
        [this._buffer, this._totalTime] = [buffer, buffer.duration];
        /** @todo Extracts these codes into well-named functions */
        if (this._loopLength > 0 && this._sampleRate > 0) {
            this._loopStartTime = this._loopStart / this._sampleRate;
            this._loopLengthTime = this._loopLength / this._sampleRate;
        } else {
            [this._loopStartTime, this._loopLengthTime] = [0, this._totalTime];
        }
        //
        if (this._sourceNode) this._refreshSourceNode();
        this._onLoad();
    } // _onDecode

    _refreshSourceNode() {
        this._stopSourceNode();
        this._createSourceNode();
        // Edited to help plugins alter refresh source node in better ways
        if (this._isPlaying) this._refreshSourceNodeWhenPlaying();
        //
    } // _refreshSourceNode

    _startPlaying(offset) {
        // Edited to help plugins alter the start playing offset in better ways
        const playingOffset = this._startPlayingOffset(offset);
        //
        this._removeEndTimer();
        this._removeNodes();
        this._createPannerNode();
        this._createGainNode();
        this._createSourceNode();
        this._startSourceNode(0, playingOffset);
        this._startTime = WebAudio._currentTime() - playingOffset / this._pitch;
        this._createEndTimer();
    } // _startPlaying

    _startSourceNode(when, offset) {
        if (offset >= this._buffer.duration) return;
        this._sourceNode.start(when, offset);
    } // _startSourceNode

    // Ignore InvalidStateError
    _stopSourceNode() { try { this._sourceNode.stop(); } catch (e) {} }

    _createPannerNode() {
        this._pannerNode = WebAudio._context.createPanner();
        this._pannerNode.panningModel = "equalpower";
        this._pannerNode.connect(WebAudio._masterGainNode);
        this._updatePanner();
    } // _createPannerNode

    _createGainNode() {
        const currentTime = WebAudio._currentTime();
        this._gainNode = WebAudio._context.createGain();
        this._gainNode.gain.setValueAtTime(this._volume, currentTime);
        this._gainNode.connect(this._pannerNode);
    } // _createGainNode

    _createSourceNode() {
        const currentTime = WebAudio._currentTime();
        this._sourceNode = WebAudio._context.createBufferSource();
        this._sourceNode.buffer = this._buffer;
        this._sourceNode.loop = this._loop && this._isLoaded;
        this._sourceNode.loopStart = this._loopStartTime;
        this._sourceNode.loopEnd = this._loopStartTime + this._loopLengthTime;
        this._sourceNode.playbackRate.setValueAtTime(this._pitch, currentTime);
        this._sourceNode.connect(this._gainNode);
    } // _createSourceNode

    // Edited to help plugins alter the remove nodes behaviors in better way
    _removeNodes() { if (this._sourceNode) this._removeNodesWithSourceNode(); }

    _createEndTimer() {
        /** @todo Extracts these codes into well-named functions */
        if (this._sourceNode && !this._loop) {
            const endTime = this._startTime + this._totalTime / this._pitch;
            const delay = endTime - WebAudio._currentTime();
            this._endTimer = setTimeout(this.stop.bind(this), delay * 1000);
        }
        //
    } // _createEndTimer

    _removeEndTimer() {
        if (!this._endTimer) return;
        clearTimeout(this._endTimer);
        this._endTimer = null;
    } // _removeEndTimer

    _updatePanner() {
         if (!this._pannerNode) return;
         this._pannerNode.setPosition(this._pan, 0, 1 - Math.abs(this._pan));
    } // _updatePanner

    _onLoad() {
        while (!this._loadListeners.isEmpty()) this._loadListeners.shift()();
    } // _onLoad

    _readLoopComments(arrayBuffer) {
        const view = new DataView(arrayBuffer), maxI = view.byteLength - 30;
        let index = 0;
        while (index < maxI) {
            if (this._readFourCharacters(view, index) !== "OggS") break;
            index += 26;
            const [numSegments, segments] = [view.getUint8(index++), []];
            for (let i = 0; i < numSegments; i++) {
                segments.push(view.getUint8(index++));
            }
            // Edited to help plugins alter loop comment packets in better ways
            const packets = this._loopCommentPackets(segments);
            //
            let vorbisHeaderFound = false;
            packets.forEach(size => {
                if (this._readFourCharacters(view, index + 1) === "vorb") {
                    // Edited to help plugins alter read packet in better ways
                    this._readLoopCommentPacket(view, index, size);
                    //
                    vorbisHeaderFound = true;
                }
                index += size;
            });
            if (!vorbisHeaderFound) break;
        }
    } // _readLoopComments

    _readMetaData(view, index, size) {
        const maxI = index + size - 10;
        for (let i = index; i < maxI; i++) {
            if (this._readFourCharacters(view, i) !== "LOOP") continue;
            let text = "";
            while (view.getUint8(i) > 0) {
                text += String.fromCharCode(view.getUint8(i++));
            }
            // Edited to help plugins alter loop start/length in better ways
            this._readMetaLoopStartLength(text);
            //
            if (text === "LOOPSTART" || text === "LOOPLENGTH") {
                let text2 = "";
                i += 16;
                while (view.getUint8(i) > 0) {
                    text2 += String.fromCharCode(view.getUint8(i++));
                }
                if (text === "LOOPSTART") {
                    this._loopStart = parseInt(text2);
                } else this._loopLength = parseInt(text2);
            }
        }
    } // _readMetaData

    _readFourCharacters(view, index) {
        let string = "";
        if (index <= view.byteLength - 4) {
            for (let i = 0; i < 4; i++) {
                string += String.fromCharCode(view.getUint8(index + i));
            }
        }
        return string;
    } // _readFourCharacters

    /**
     * Creates the master gain node with the global web audio context
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    static _createMasterGainNodeWithContext() {
        this._masterGainNode = this._context.createGain();
        this._resetVolume();
        this._masterGainNode.connect(this._context.destination);
    } // _createMasterGainNodeWithContext

    /**
     * Resets the master volume with its master gain node being present
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    static _resetVolWithMasterGainNode() {
        const [gain, volume] = [this._masterGainNode.gain, this._masterVolume];
        const currentTime = this._currentTime();
        gain.setValueAtTime(volume, currentTime);
    } // _resetVolWithMasterGainNode

    /**
     * Fades in the global web audio with its master gain node being present
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {number} duration - Fade-out time in seconds
     */
    static _fadeInWithMasterGainNode(duration) {
        const [gain, volume] = [this._masterGainNode.gain, this._masterVolume];
        const currentTime = this._currentTime();
        /** @todo Dries up these codes representing identical knowledge */
        gain.setValueAtTime(0, currentTime);
        gain.linearRampToValueAtTime(volume, currentTime + duration);
        //
    } // _fadeInWithMasterGainNode

    /**
     * Fades out the global web audio with its master gain node being present
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {number} duration - Fade-out time in seconds
     */
    static _fadeOutWithMasterGainNode(duration) {
        const [gain, volume] = [this._masterGainNode.gain, this._masterVolume];
        const currentTime = this._currentTime();
        /** @todo Dries up these codes representing identical knowledge */
        gain.setValueAtTime(volume, currentTime);
        gain.linearRampToValueAtTime(0, currentTime + duration);
        //
    } // _fadeOutWithMasterGainNode

    /**
     * Calls all stop listeners when this web audio's just stopped
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {number} duration - Fade-out time in seconds
     */
    _callStopListeners() {
        while (!this._stopListeners.isEmpty()) this._stopListeners.shift()();
    } // _callStopListeners

    /**
     * Fades in this web audio when it's ready
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {number} duration - Fade-out time in seconds
     */
    _fadeInWhenReady(duration) {
        if (this._gainNode) this._fadeInWhenReadyWithGainNode(duration);
    } // _fadeInWhenReady

    /**
     * Fades in this web audio when it's ready with its gain node being present
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {number} duration - Fade-out time in seconds
     */
    _fadeInWhenReadyWithGainNode(duration) {
        const gain = this._gainNode.gain;
        const currentTime = WebAudio._currentTime();
        /** @todo Dries up these codes representing identical knowledge */
        gain.setValueAtTime(0, currentTime);
        gain.linearRampToValueAtTime(this._volume, currentTime + duration);
        //
    } // _fadeInWhenReadyWithGainNode

    /**
     * Fades out this web audio with its gain node being present
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {number} duration - Fade-out time in seconds
     */
    _fadeOutWithGainNode(duration) {
        const gain = this._gainNode.gain;
        const currentTime = WebAudio._currentTime();
        /** @todo Dries up these codes representing identical knowledge */
        gain.setValueAtTime(this._volume, currentTime);
        gain.linearRampToValueAtTime(0, currentTime + duration);
        //
    } // _fadeOutWithGainNode

    /**
     * Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @returns {number} The seek position of this web audio with global context
     */
    _seekWithContext() {
        let pos = (WebAudio._currentTime() - this._startTime) * this._pitch;
        if (this._loopLength > 0) {
            const seekPos = this._loopStart + this._loopLength;
            while (pos >= seekPos) pos -= this._loopLength;
        }
        return pos;
    } // _seekWithContext

    /**
     * Starts loading this web audio data with the global web audio context
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    _startLoadingWithContext() {
        const url = this._realUrl();
        Utils.isLocal() ? this._startXhrLoading(url) : this._startFetching(url);
        this._lastUpdateTime = -10000;
        this._isError = this._isLoaded = false;
        this._destroyDecoder();
        if (this._shouldUseDecoder()) this._createDecoder();
    } // _startLoadingWithContext

    /**
     * Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @returns {XMLHttpRequest} The GET XMLHttpRequest receiving array buffers
     */
    _newLoadingXhr(url) {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.responseType = "arraybuffer";
        xhr.onload = this._onXhrLoad.bind(this, xhr);
        xhr.onerror = this._onError.bind(this);
        return xhr;
    } // _newLoadingXhr

    /**
     * Loads the data and updates the buffer of this local web audio
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {XMLHttpRequest} xhr - The GET XMLHttpRequest with array buffers
     */
    _onXhrLoadSuc(xhr) {
        [this._data, this._isLoaded] = [new Uint8Array(xhr.response), true];
        this._updateBuffer();
    } // _onXhrLoadSuc

    /**
     * Triggers the events when the non-local web audio fetches' okay
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {Response} response - The non-local web audio fetch okay response
     */
    _onFetchOk(response) {
        const reader = response.body.getReader();
        /** @todo Extracts this into a method without obscuring the recursion */
        const readChunk = ({ done, value }) => {
            if (done) {
                this._isLoaded = true;
                this._updateBuffer();
                return 0;
            } else {
                this._onFetchProcess(value);
                return reader.read().then(readChunk);
            }
        };
        //
        reader.read().then(readChunk).catch(this._onError.bind(this));
    } // _onFetchOk

    /**
     * Refreshes the source node of this web audio when it's playing
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    _refreshSourceNodeWhenPlaying() {
        const currentTime = WebAudio._currentTime();
        this._startSourceNode(0, (currentTime - this._startTime) * this._pitch);
        this._removeEndTimer();
        this._createEndTimer();
    } // _refreshSourceNodeWhenPlaying

    /**
     * Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {number} offset - The raw start playing offset of this web audio
     * @returns {number} The corrected start playing offset of this web audio
     */
    _startPlayingOffset(offset) {
        if (this._loopLengthTime <= 0) return offset;
        const loopEnd = this._loopStartTime + this._loopLengthTime;
        let playingOffset = offset;
        while (playingOffset >= loopEnd) playingOffset -= this._loopLengthTime;
        return playingOffset;
    } // _startPlayingOffset

    /**
     * This method shouldn't be called without an existing source node
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    _removeNodesWithSourceNode() {
        this._stopSourceNode();
        this._sourceNode = this._gainNode = this._pannerNode = null;
    } // _removeNodesWithSourceNode

    /**
     * Reads the loop comment from a packet in the packet list of this web audio
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {[uint8]} segments - The list of 8 bit integers in array buffer
     * @returns {[number]} The list of the sizes of the loop comment packets
     */
    _loopCommentPackets(segments) {
        const packets = [];
        while (!segments.isEmpty()) {
            let packetSize = 0;
            while (segments[0] === 255) packetSize += segments.shift();
            packetSize += segments.shift();
            packets.push(packetSize);
        }
        return packets;
    } // _loopCommentPackets

    /**
     * Reads the loop comment from a packet in the packet list of this web audio
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {DataView} view - The data view of the loop comment array buffer
     * @param {index} i - The index of the current byte in the data array buffer
     * @param {number} size - The size of this packet to be read
     */
    _readLoopCommentPacket(view, i, size) {
        const headerType = view.getUint8(i);
        if (headerType === 1) {
            this._sampleRate = view.getUint32(i + 12, true);
        } else if (headerType === 3) this._readMetaData(view, i, size);
    } // _readLoopCommentPacket

    /**
     * Reads the loop start and length meta data for this web audio
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {string} text - The meta data text having the loop start/length
     */
    _readMetaLoopStartLength(text) {
        if (text.match(/LOOPSTART=([0-9]+)/)) {
            this._loopStart = parseInt(RegExp.$1);
        }
        if (!text.match(/LOOPLENGTH=([0-9]+)/)) return;
        this._loopLength = parseInt(RegExp.$1);
    } // _readMetaLoopStartLength

} // WebAudio

/*----------------------------------------------------------------------------
 *    # Rewritten class: Window
 *      - Rewrites it into the ES6 standard
 *----------------------------------------------------------------------------*/

//-----------------------------------------------------------------------------
/**
 * The window in the game.
 *
 * @class
 * @extends PIXI.Container
 */
class Window extends PIXI.Container {

    constructor() {
        super();
        this._initPrivateVars();
        this._createAllParts();
        this._initPublicVars();
    } // constructor
    /**
     * The image used as a window skin.
     *
     * @type Bitmap
     * @name Window#windowskin
     */
    get windowskin() { return this._windowskin; }
    set windowskin(value) {
        if (this._windowskin === value) return;
        this._windowskin = value;
        this._windowskin.addLoadListener(this._onWindowskinLoad.bind(this));
    } // windowskin

    /**
     * The bitmap used for the window contents.
     *
     * @type Bitmap
     * @name Window#contents
     */
    get contents() { return this._contentsSprite.bitmap; }
    set contents(value) { this._contentsSprite.bitmap = value; }

    /**
     * The bitmap used for the window contents background.
     *
     * @type Bitmap
     * @name Window#contentsBack
     */
     get contentsBack() { return this._contentsBackSprite.bitmap; }
     set contentsBack(value) { this._contentsBackSprite.bitmap = value; }

    /**
     * The width of the window in pixels.
     *
     * @type number
     * @name Window#width
     */
    get width() { return this._width; }
    set width(value) {
        /** @todo Checks whether refresh's needed if the width's unchanged */
        this._width = value;
        this._refreshAllParts();
        //
    } // width

    /**
     * The height of the window in pixels.
     *
     * @type number
     * @name Window#height
     */
    get height() { return this._height; }
    set height(value) {
        /** @todo Checks whether refresh's needed if the height's unchanged */
        this._height = value;
        this._refreshAllParts();
        //
    } // height

    /**
     * The size of the padding between the frame and contents.
     *
     * @type number
     * @name Window#padding
     */
    get padding() { return this._padding; }
    set padding(value) {
        /** @todo Checks whether refresh's needed if the padding's unchanged */
        this._padding = value;
        this._refreshAllParts();
        //
    } // padding

    /**
     * The size of the margin for the window background.
     *
     * @type number
     * @name Window#margin
     */
    get margin() { return this._margin; }
    set margin(value) {
        /** @todo Checks whether refresh's needed if the margin's unchanged */
        this._margin = value;
        this._refreshAllParts();
        //
    } // margin

    /**
     * The opacity of the window without contents (0 to 255).
     *
     * @type number
     * @name Window#opacity
     */
    get opacity() { return this._container.alpha * 255; }
    set opacity(value) { this._container.alpha = value.clamp(0, 255) / 255; }

    /**
     * The opacity of the window background (0 to 255).
     *
     * @type number
     * @name Window#backOpacity
     */
    get backOpacity() { return this._backSprite.alpha * 255; }
    set backOpacity(value) {
        this._backSprite.alpha = value.clamp(0, 255) / 255;
    } // backOpacity

    /**
     * The opacity of the window contents (0 to 255).
     *
     * @type number
     * @name Window#contentsOpacity
     */
    get contentsOpacity() { return this._contentsSprite.alpha * 255; }
    set contentsOpacity(value) {
        this._contentsSprite.alpha = value.clamp(0, 255) / 255;
    } // contentsOpacity

    /**
     * The openness of the window (0 to 255).
     *
     * @type number
     * @name Window#openness
     */
    get openness() { return this._openness; }
    set openness(value) {
        if (this._openness === value) return;
        this._openness = value.clamp(0, 255);
        this._container.scale.y = this._openness / 255;
        this._container.y = (this.height / 2) * (1 - this._openness / 255);
    } // openness

    /**
     * The width of the content area in pixels.
     *
     * @readonly
     * @type number
     * @name Window#innerWidth
     */
    get innerWidth() { return Math.max(0, this._width - this._padding * 2); }

    /**
     * The height of the content area in pixels.
     *
     * @readonly
     * @type number
     * @name Window#innerHeight
     */
    get innerHeight() { return Math.max(0, this._height - this._padding * 2); }

    /**
     * The rectangle of the content area.
     *
     * @readonly
     * @type Rectangle
     * @name Window#innerRect
     */
    get innerRect() {
        return new Rectangle(
            this._padding,
            this._padding,
            this.innerWidth,
            this.innerHeight
        );
    } // innerRect

    /**
     * Destroys the window.
     */
    destroy() { super.destroy({ children: true, texture: true }); }

    /**
     * Updates the window for each frame.
     */
    update() {
        if (this.active) this._animationCount++;
        this.children.forEach(child => { if (child.update) child.update(); });
    } // update

    /**
     * Sets the x, y, width, and height all at once.
     *
     * @param {number} x - The x coordinate of the window.
     * @param {number} y - The y coordinate of the window.
     * @param {number} width - The width of the window.
     * @param {number} height - The height of the window.
     */
    move(x = 0, y = 0, width = 0, height = 0) {
        // They shouldn't be "", false, null, NaN or other defined falsy values
        [this.x, this.y] = [x, y];
        if (this._width === width && this._height === height) return;
        //
        [this._width, this._height] = [width, height];
        this._refreshAllParts();
    } // move

    /**
     * Checks whether the window is completely open (openness == 255).
     *
     * @returns {boolean} True if the window is open.
     */
    isOpen() { return this._openness >= 255; }

    /**
     * Checks whether the window is completely closed (openness == 0).
     *
     * @returns {boolean} True if the window is closed.
     */
    isClosed() { return this._openness <= 0; }

    /**
     * Sets the position of the command cursor.
     *
     * @param {number} x - The x coordinate of the cursor.
     * @param {number} y - The y coordinate of the cursor.
     * @param {number} width - The width of the cursor.
     * @param {number} height - The height of the cursor.
     */
    setCursorRect(x = 0, y = 0, width = 0, height = 0) {
        // They shouldn't be "", false, null, NaN or other defined falsy values
        const [cw, ch] = [Math.floor(width), Math.floor(height)];
        this._cursorRect.x = Math.floor(x);
        this._cursorRect.y = Math.floor(y);
        //
        if (this._cursorRect.width !== cw || this._cursorRect.height !== ch) {
            // Edited to help plugins alter cursor width height in better ways
            this._setNewCursorWH(cw, ch);
            //
        }
    } // setCursorRect

    /**
     * Moves the cursor position by the given amount.
     *
     * @param {number} x - The amount of horizontal movement.
     * @param {number} y - The amount of vertical movement.
     */
    moveCursorBy(x, y) { this._cursorRect.x += x, this._cursorRect.y += y; }

    /**
     * Moves the inner children by the given amount.
     *
     * @param {number} x - The amount of horizontal movement.
     * @param {number} y - The amount of vertical movement.
     */
    moveInnerChildrenBy(x, y) {
        this._innerChildren.forEach(child => { child.x += x, child.y += y; });
    } // moveInnerChildrenBy

    /**
     * Changes the color of the background.
     *
     * @param {number} r - The red value in the range (-255, 255).
     * @param {number} g - The green value in the range (-255, 255).
     * @param {number} b - The blue value in the range (-255, 255).
     */
    setTone(r, g, b) {
        const tone = this._colorTone;
        if (r === tone[0] && g === tone[1] && b === tone[2]) return;
        this._colorTone = [r, g, b, 0];
        this._refreshBack();
    } // setTone

    /**
     * Adds a child between the background and contents.
     *
     * @param {object} child - The child to add.
     * @returns {object} The child that was added.
     */
    addChildToBack(child) {
        const containerIndex = this.children.indexOf(this._container);
        return this.addChildAt(child, containerIndex + 1);
    } // addChildToBack

    /**
     * Adds a child to the client area.
     *
     * @param {object} child - The child to add.
     * @returns {object} The child that was added.
     */
    addInnerChild(child) {
        this._innerChildren.push(child);
        return this._clientArea.addChild(child);
    } // addInnerChild

    /**
     * Updates the transform on all children of this container for rendering.
     */
    updateTransform() {
        this._updateClientArea();
        this._updateFrame();
        this._updateContentsBack();
        this._updateCursor();
        this._updateContents();
        this._updateArrows();
        this._updatePauseSign();
        super.updateTransform();
        this._updateFilterArea();
    } // updateTransform

    /**
     * Draws the window shape into PIXI.Graphics object. Used by WindowLayer.
     */
    drawShape(graphics) {
        // Edited to help plugins alter draw shape behaviors in better ways
        if (graphics) this._drawShapeWithGraphics(graphics);
        //
    } // drawShape

    _createAllParts() {
        this._createContainer();
        this._createBackSprite();
        this._createFrameSprite();
        this._createClientArea();
        this._createContentsBackSprite();
        this._createCursorSprite();
        this._createContentsSprite();
        this._createArrowSprites();
        this._createPauseSignSprites();
    } // _createAllParts

    _createContainer() {
        this._container = new PIXI.Container();
        this.addChild(this._container);
    } // _createContainer

    _createBackSprite() {
        this._backSprite = new Sprite();
        this._backSprite.addChild(new TilingSprite());
        this._container.addChild(this._backSprite);
    } // _createBackSprite

    _createFrameSprite() {
        this._frameSprite = new Sprite();
        for (let i = 0; i < 8; i++) {
            this._frameSprite.addChild(new Sprite());
        }
        this._container.addChild(this._frameSprite);
    } // _createFrameSprite

    _createClientArea() {
        // Edited to help plugins alter create client area in better ways
        this._clientArea = this._newClientArea();
        //
        this.addChild(this._clientArea);
    } // _createClientArea

    _createContentsBackSprite() {
        this._contentsBackSprite = new Sprite();
        this._clientArea.addChild(this._contentsBackSprite);
    } // _createContentsBackSprite

    _createCursorSprite() {
        this._cursorSprite = new Sprite();
        for (let i = 0; i < 9; i++) {
            this._cursorSprite.addChild(new Sprite());
        }
        this._clientArea.addChild(this._cursorSprite);
    } // _createCursorSprite

    _createContentsSprite() {
        this._contentsSprite = new Sprite();
        this._clientArea.addChild(this._contentsSprite);
    } // _createContentsSprite

    _createArrowSprites() {
        this._downArrowSprite = new Sprite();
        this.addChild(this._downArrowSprite);
        this._upArrowSprite = new Sprite();
        this.addChild(this._upArrowSprite);
    } // _createArrowSprites

    _createPauseSignSprites() {
        this._pauseSignSprite = new Sprite();
        this.addChild(this._pauseSignSprite);
    } // _createPauseSignSprites

    _onWindowskinLoad() { this._refreshAllParts(); }

    _refreshAllParts() {
        this._refreshBack();
        this._refreshFrame();
        this._refreshCursor();
        this._refreshArrows();
        this._refreshPauseSign();
    } // _refreshAllParts

    _refreshBack() {
        const w = Math.max(0, this._width - this._margin * 2);
        const h = Math.max(0, this._height - this._margin * 2);
        // Edited to help plugins alter refresh back behaviors in better ways
        this._refreshBackSprite(w, h);
        this._refreshBackTilingSprite(w, h);
        //
    } // refreshBack

    _refreshFrame() {
        const drect = { x: 0, y: 0, width: this._width, height: this._height };
        const srect = { x: 96, y: 0, width: 96, height: 96 };
        this._frameSprite.children.forEach(child => {
            child.bitmap = this._windowskin;
        });
        this._setRectPartsGeometry(this._frameSprite, srect, drect, 24);
    } // _refreshFrame

    _refreshCursor() {
        const drect = this._cursorRect.clone();
        const srect = { x: 96, y: 96, width: 48, height: 48 };
        this._cursorSprite.children.forEach(child => {
            child.bitmap = this._windowskin;
        });
        this._setRectPartsGeometry(this._cursorSprite, srect, drect, 4);
    } // _refreshCursor

    _setRectPartsGeometry(sprite, srect, drect, m) {
        const [sx, sy, sw, sh] = [srect.x, srect.y, srect.width, srect.height];
        const [dx, dy, dw, dh] = [drect.x, drect.y, drect.width, drect.height];
        const [smw, smh] = [sw - m * 2, sh - m * 2];
        const [dmw, dmh] = [dw - m * 2, dh - m * 2];
        const children = sprite.children;
        sprite.setFrame(0, 0, dw, dh);
        sprite.move(dx, dy);
        /** @todo Extracts these codes into a well-named function */
        // corner
        children[0].setFrame(sx, sy, m, m);
        children[1].setFrame(sx + sw - m, sy, m, m);
        children[2].setFrame(sx, sy + sw - m, m, m);
        children[3].setFrame(sx + sw - m, sy + sw - m, m, m);
        children[0].move(0, 0);
        children[1].move(dw - m, 0);
        children[2].move(0, dh - m);
        children[3].move(dw - m, dh - m);
        //
        /** @todo Extracts these codes into a well-named function */
        // edge
        children[4].move(m, 0);
        children[5].move(m, dh - m);
        children[6].move(0, m);
        children[7].move(dw - m, m);
        children[4].setFrame(sx + m, sy, smw, m);
        children[5].setFrame(sx + m, sy + sw - m, smw, m);
        children[6].setFrame(sx, sy + m, m, smh);
        children[7].setFrame(sx + sw - m, sy + m, m, smh);
        const [scaleX, scaleY] = [dmw / smw, dmh / smh];
        children[4].scale.x = children[5].scale.x = scaleX;
        children[6].scale.y = children[7].scale.y = scaleY;
        //
        /** @todo Extracts these codes into a well-named function */
        // center
        if (children[8]) {
            children[8].setFrame(sx + m, sy + m, smw, smh);
            children[8].move(m, m);
            [children[8].scale.x, children[8].scale.y] = [scaleX, scaleY];
        }
        //
        children.forEach(child => child.visible = dw > 0 && dh > 0);
    } // _setRectPartsGeometry

    _refreshArrows() {
        /** @todo Figures out the difference between 0 + p and p */
        const p = 24, [q, sx, sy] = [p / 2, 96 + p, 0 + p];
        //
        // Edited to help plugins alter the arrow refresh in better ways
        this._refreshDownArrow(p, q, sx, sy);
        this._refreshUpArrow(p, q, sx, sy);
        //
    } // _refreshArrows

    _refreshPauseSign() {
        const [sx, sy, p] = [144, 96, 24];
        this._pauseSignSprite.bitmap = this._windowskin;
        this._pauseSignSprite.anchor.x = 0.5;
        this._pauseSignSprite.anchor.y = 1;
        this._pauseSignSprite.move(this._width / 2, this._height);
        this._pauseSignSprite.setFrame(sx, sy, p, p);
        this._pauseSignSprite.alpha = 0;
    } // _refreshPauseSign

    _updateClientArea() {
        const pad = this._padding;
        this._clientArea.move(pad, pad);
        this._clientArea.x = pad - this.origin.x;
        this._clientArea.y = pad - this.origin.y;
        // Edited to help plugins alter client area visibility in better ways
        this._clientArea.visible = this._isUpdatedClientAreaVisible();
        //
    } // _updateClientArea

    _updateFrame() { this._frameSprite.visible = this.frameVisible; }

    _updateContentsBack() {
        const bitmap = this._contentsBackSprite.bitmap;
        if (!bitmap) return;
        this._contentsBackSprite.setFrame(0, 0, bitmap.width, bitmap.height);
    } // _updateContentsBack

    _updateCursor() {
        this._cursorSprite.alpha = this._makeCursorAlpha();
        this._cursorSprite.visible = this.isOpen() && this.cursorVisible;
        this._cursorSprite.x = this._cursorRect.x;
        this._cursorSprite.y = this._cursorRect.y;
    } // _updateCursor

    _makeCursorAlpha() {
        const blinkCount = this._animationCount % 40;
        const baseAlpha = this.contentsOpacity / 255;
        if (!this.active) return baseAlpha;
        if (blinkCount < 20) return baseAlpha - blinkCount / 32;
        return baseAlpha - (40 - blinkCount) / 32;
    } // _makeCursorAlpha

    _updateContents() {
        const bitmap = this._contentsSprite.bitmap;
        if (!bitmap) return;
        this._contentsSprite.setFrame(0, 0, bitmap.width, bitmap.height);
    } // _updateContents

    _updateArrows() {
        this._downArrowSprite.visible = this.isOpen() && this.downArrowVisible;
        this._upArrowSprite.visible = this.isOpen() && this.upArrowVisible;
    } // _updateArrows

    _updatePauseSign() {
        const x = Math.floor(this._animationCount / 16) % 2;
        const y = Math.floor(this._animationCount / 16 / 2) % 2;
        const [sx, sy, p] = [144, 96, 24];
        // Edited to help plugins update the pause sign alpha in better ways
        this._updatePauseSignAlpha();
        //
        this._pauseSignSprite.setFrame(sx + x * p, sy + y * p, p, p);
        this._pauseSignSprite.visible = this.isOpen();
    } // _updatePauseSign

    _updateFilterArea() {
        const pos = this._clientArea.worldTransform.apply(new Point(0, 0));
        const filterArea = this._clientArea.filterArea;
        filterArea.x = pos.x + this.origin.x;
        filterArea.y = pos.y + this.origin.y;
        filterArea.width = this.innerWidth;
        filterArea.height = this.innerHeight;
    } // _updateFilterArea

    /**
     * Initializes all private variables of this window
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    _initPrivateVars() {
        [this._isWindow, this._windowskin] = [true, null];
        this._width = this._height = 0;
        this._cursorRect = new Rectangle();
        [this._openness, this._animationCount] = [255, 0];
        [this._padding, this._margin] = [12, 4];
        [this._colorTone, this._innerChildren] = [[0, 0, 0, 0], []];
        this._container = this._backSprite = this._frameSprite = null;
        this._contentsBackSprite = this._cursorSprite = null;
        this._contentsSprite = this._downArrowSprite = null;
        this._upArrowSprite = this._pauseSignSprite = null;
    } // _initPrivateVars

    /**
     * Initializes all public variables of this window
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    _initPublicVars() {
        /**
         * The origin point of the window for scrolling.
         *
         * @type Point
         */
        this.origin = new Point();
        /**
         * The active state for the window.
         *
         * @type boolean
         */
        this.active = true;
        /**
         * The visibility of the frame.
         *
         * @type boolean
         */
        this.frameVisible = true;
        /**
         * The visibility of the cursor.
         *
         * @type boolean
         */
        this.cursorVisible = true;
        /**
         * The visibility of the down scroll arrow.
         *
         * @type boolean
         */
        this.downArrowVisible = false;
        /**
         * The visibility of the up scroll arrow.
         *
         * @type boolean
         */
        this.upArrowVisible = false;
        /**
         * The visibility of the pause sign.
         *
         * @type boolean
         */
        this.pause = false;
    } // _initPublicVars

    /**
     * Sets the new cursor width and height followed by a cursor refresh
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {int} cw - The truncated width of the cursor
     * @param {int} ch - The truncated height of the cursor
     */
    _setNewCursorWH(cw, ch) {
        [this._cursorRect.width, this._cursorRect.height] = [cw, ch];
        this._refreshCursor();
    } // _setNewCursorWH

    /**
     * Draws the window shape into PIXI.Graphics object used by WindowLayer
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {PIXI.Graphics} graphics - The Pixi graphics drawing the shape
     */
    _drawShapeWithGraphics(graphics) {
        const height = (this.height * this._openness) / 255;
        const y = this.y + (this.height - height) / 2;
        graphics.beginFill(0xffffff);
        graphics.drawRoundedRect(this.x, y, this.width, height, 0);
        graphics.endFill();
    } // _drawShapeWithGraphics

    /**
     * Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @returns {Sprite} The new client area sprite of this window
     */
    _newClientArea() {
        const clientArea = new Sprite();
        clientArea.filters = [new PIXI.filters.AlphaFilter()];
        clientArea.filterArea = new Rectangle();
        clientArea.move(this._padding, this._padding);
        return clientArea;
    } // _newClientArea

    /**
     * Refreshes the back sprite of this window
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {number} w - The width of this window excluding the margins
     * @param {number} h - The height of this window excluding the margins
     */
    _refreshBackSprite(w, h) {
        this._backSprite.bitmap = this._windowskin;
        /** @todo Figures out where does 96 come from */
        this._backSprite.setFrame(0, 0, 96, 96);
        this._backSprite.move(this._margin, this._margin);
        [this._backSprite.scale.x, this._backSprite.scale.y] = [w / 96, h / 96];
        //
        this._backSprite.setColorTone(this._colorTone);
    } // _refreshBackSprite

    /**
     * Refreshes the back tiling sprite of this window
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {number} w - The width of this window excluding the margins
     * @param {number} h - The height of this window excluding the margins
     */
    _refreshBackTilingSprite(w, h) {
        const tilingSprite = this._backSprite.children[0];
        tilingSprite.bitmap = this._windowskin;
        /** @todo Figures out where does 96 come from */
        tilingSprite.setFrame(0, 96, 96, 96);
        tilingSprite.move(0, 0, w, h);
        [tilingSprite.scale.x, tilingSprite.scale.y] = [96 / w, 96 / h];
        //
    } // _refreshBackTilingSprite

    /**
     * Refreshes the down arrow sprite of this window
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {number} p - The new width of the frame of the down arrow sprite
     * @param {number} q - The new height of the frame of the down arrow sprite
     * @param {number} sx - The source x position the down arrow sprite frame
     * @param {number} sy - The source y position the down arrow sprite frame
     */
    _refreshDownArrow(p, q, sx, sy) {
        this._downArrowSprite.bitmap = this._windowskin;
        this._downArrowSprite.anchor.x = this._downArrowSprite.anchor.y = 0.5;
        this._downArrowSprite.setFrame(sx + q, sy + q + p, p, q);
        this._downArrowSprite.move(this._width / 2, this._height - q);
    } // _refreshDownArrow

    /**
     * Refreshes the up arrow sprite of this window
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {number} p - The new width of the frame of the up arrow sprite
     * @param {number} q - The new height of the frame of the up arrow sprite
     * @param {number} sx - The source x position the up arrow sprite frame
     * @param {number} sy - The source y position the up arrow sprite frame
     */
    _refreshUpArrow(p, q, sx, sy) {
        this._upArrowSprite.bitmap = this._windowskin;
        this._upArrowSprite.anchor.x = this._upArrowSprite.anchor.y = 0.5;
        this._upArrowSprite.setFrame(sx + q, sy, p, q);
        this._upArrowSprite.move(this._width / 2, q);
    } // _refreshUpArrow

    /**
     * Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @returns {boolean} If the updated client area should be visible
     */
    _isUpdatedClientAreaVisible() {
        return this.innerWidth > 0 && this.innerHeight > 0 && this.isOpen();
    } // _isUpdatedClientAreaVisible

    /**
     * Updates the alpha value of the pause sign sprite in this window
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    _updatePauseSignAlpha() {
        const sprite = this._pauseSignSprite;
        if (!this.pause) return sprite.alpha = 0;
        if (sprite.alpha < 1) sprite.alpha = Math.min(sprite.alpha + 0.1, 1);
    } // _updatePauseSignAlpha

} // Window
// It's just to play safe in case of any plugin extending PIXI.Container in ES6
ES6ExtendedClassAlias.inherit(Window);
//

/*----------------------------------------------------------------------------
 *    # Rewritten class: WindowLayer
 *      - Rewrites it into the ES6 standard
 *----------------------------------------------------------------------------*/

//-----------------------------------------------------------------------------
/**
 * The layer which contains game windows.
 *
 * @class
 * @extends PIXI.Container
 */
class WindowLayer extends PIXI.Container {

    /**
     * Updates the window layer for each frame.
     */
    update() {
        this.children.forEach(child => { if (child.update) child.update(); });
    } // update

    /**
     * Renders the object using the WebGL renderer.
     *
     * @param {PIXI.Renderer} renderer - The renderer.
     */
    render(renderer) {
        if (!this.visible) return;
        const [graphics, gl] = [new PIXI.Graphics(), renderer.gl];
        const children = this.children.clone();
        renderer.framebuffer.forceStencil();
        graphics.transform = this.transform;
        renderer.batch.flush();
        gl.enable(gl.STENCIL_TEST);
        while (!children.isEmpty()) {
            const win = children.pop();
            if (!win._isWindow || !win.visible || win.openness <= 0) continue;
            // Edited to help plugins alter render child behaviors in better way
            this._renderChild(renderer, graphics, gl, win);
            //
        }
        gl.disable(gl.STENCIL_TEST);
        gl.clear(gl.STENCIL_BUFFER_BIT);
        gl.clearStencil(0);
        renderer.batch.flush();
        this.children.forEach(child => {
            if (!child._isWindow && child.visible) child.render(renderer);
        });
        renderer.batch.flush();
    } // render

    /**
     * Renders a child of this window layer
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {PIXI.Renderer} renderer - The renderer
     * @param {PIXI.Graphics} graphics - The Pixi graphics for drawing/rendering
     * @param {WebGLRenderingContext} gl - The pixi WebGL rendering context
     * @param {Window} win - The window as the child of this window layer
     */
    _renderChild(renderer, graphics, gl, win) {
        gl.stencilFunc(gl.EQUAL, 0, ~0);
        gl.stencilOp(gl.KEEP, gl.KEEP, gl.KEEP);
        win.render(renderer);
        renderer.batch.flush();
        graphics.clear();
        win.drawShape(graphics);
        gl.stencilFunc(gl.ALWAYS, 1, ~0);
        gl.stencilOp(gl.REPLACE, gl.REPLACE, gl.REPLACE);
        gl.blendFunc(gl.ZERO, gl.ONE);
        graphics.render(renderer);
        renderer.batch.flush();
        gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    } // _renderChild

} // WindowLayer
// It's just to play safe in case of any plugin extending PIXI.Container in ES6
ES6ExtendedClassAlias.inherit(WindowLayer);
//
