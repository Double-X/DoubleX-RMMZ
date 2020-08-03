/*============================================================================
 *    ## Plugin Info
 *----------------------------------------------------------------------------
 *    # Plugin Name
 *      DoubleX RMMZ ES6 Codebase
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
 *      1. https://pastebin.com/qjqn9sE0
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
 *      1. The default plugin parameters file name is
 *         DoubleX RMMZ ES6 Codebase
 *         If you want to change that, you must edit the value of
 *         DoubleX_RMMZ.ES6_Codebase_File, which must be done via opening this
 *         plugin js file directly
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
 *      v0.00a(GMT 1400 3-Aug-2020):
 *      1. Rewritten the core parts into the ES6 standard
 *============================================================================*/
/*:
 * @plugindesc (v1.00a)Helps plugin developers write their plugins into ES6
 * standards, but such plugins will need this plugin to work
 * @author DoubleX
 *
 * @help
 *============================================================================
 *    ## Plugin Developers Info
 *----------------------------------------------------------------------------
 *    Do these 2 additional things when using ES6 class inheritance aliasing
 *    without directly typing prototypes:
 *    1. Adds the following code right below a new class inheriting another
 *       one:
 *       - ES6ExtendedClassAlias.inherit(Klass);
 *       Where Klass is the new class inheriting another one
 *    2. Adds the following code right below extending an existing class as a
 *       way to alias its methods:
 *       - ES6ExtendedClassAlias.update(Klass);
 *       Where Klass is the existing class being extended as a way to alias
 *       its methods
 *    Right now it doesn't work well with inheriting static functions in
 *    classes, so those in children classes should use
 *    ParentClass.staticFunc.call(this) instead of super.staticFunc()
 *============================================================================
 */

var DoubleX_RMMZ = DoubleX_RMMZ || {};
DoubleX_RMMZ["ES6 Codebase"] = "v0.00a";

// The plugin file name must be the same as DoubleX_RMMZ.ES6_Codebase_File
DoubleX_RMMZ.ES6_Codebase_File = "DoubleX RMMZ ES6 Codebase";
//

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
 *----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------
 *    # New class: ES6ExtendedClassAlias
 *      - Lets plugin developers alias ES6 classes without direct prototyping
 *----------------------------------------------------------------------------*/

class ES6ExtendedClassAlias {

    static _inheritances = new Map();

    constructor() {
        throw new Error("ES6ExtendedClassAlias is a static class!");
    }

    static inherit(Child) {
        const childProto = Child.prototype;
        const parentName = Object.getPrototypeOf(childProto).constructor.name;
        this._inherit(Child, parentName);
    } // inherit

    static update(Parent) {
        const parentName = Parent.prototype.constructor.name;
        // There's no need to update anything if the passed class's no children
        if (!this._inheritances.has(parentName)) return;
        this._update(this._inheritances.get(parentName), Parent);
        //
    } // update

    static _inherit(Child, parentName) {
        // So the parent class will know which classes are its children
        if (this._inheritances.has(parentName)) {
            const oldChildProtos = this._inheritances.get(parentName);
            const newChildProtos = oldChildProtos.concat([Child]);
            this._inheritances.set(parentName, newChildProtos);
        } else this._inheritances.set(parentName, [Child]);
        //
    } // _inherit

    static _update(children, Parent) {
        this._updateProtoMethods(children, Parent.prototype);
        this._updateStaticFuncs(children, Parent);
    } // _update

    static _updateProtoMethods(children, parentProto) {
        // So all the children will inherit the new rather than the old parent
        children.forEach(Child => Child.prototype.__proto__ = parentProto);
        //
    } // _updateProtoMethods

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
    static set width(value) {
        // Edited to dry up codes essentially being the identical knowledge
        this._updateDimen("_width", value);
        //
    } // width

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
    static set height(value) {
        // Edited to dry up codes essentially being the identical knowledge
        this._updateDimen("_height", value);
        //
    } // height

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

    static _updateCanvas() {
        // Edited to help plugins update the existing canvas in better ways
        if (this._canvas) this._updateExistingCanvas();
        //
    } // _updateCanvas

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
        style.width = width * this._realScale + "px";
        style.height = height * this._realScale + "px";
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
        try {
            // Edited to help plugins creating pixi app in better ways
            this._createPixiAppWithoutRescue();
            //
        } catch (e) { this._app = null; }
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
     * @author DoubleX @since v0.00a @version v0.00a
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
     * @author DoubleX @since v0.00a @version v0.00a
     */
    static _initKeyEvents() {
        this._keyEvents = new Map();
        this._keyEvents.set(this._switchFPSCounterKey.bind(this), 
                this._switchFPSCounter.bind(this));
        this._keyEvents.set(this._switchStretchModeKey.bind(this), 
                this._switchStretchMode.bind(this));
        this._keyEvents.set(this._switchFullScreenKey.bind(this), 
                this._switchFullScreen.bind(this));
    } // _initKeyEvents

    /**
     * Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @enum @returns {number} - The code of the switch FPS counter key
     */
    static _switchFPSCounterKey() { return 113; /* F2 */ }

    /**
     * Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @enum @returns {number} - The code of the switch stretch mode key
     */
    static _switchStretchModeKey() { return 114; /* F3 */ }

    /**
     * Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @enum @returns {number} - The code of the switch full screen key
     */
    static _switchFullScreenKey() { return 115; /* F4 */ }

    /**
     * This function should be called after calling _initPrivateVars
     * Idempotent
     * @author DoubleX @since v0.00a @version v0.00a
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
     * @author DoubleX @since v0.00a @version v0.00a
     */
    static _appendLoadingSpinner() { 
        document.body.appendChild(this._loadingSpinner);
    } // _appendLoadingSpinner

    /**
     * This function shouldn't be called without an existing loading spinner
     * @author DoubleX @since v0.00a @version v0.00a
     */
    static _removeLoadingSpinner() {
        document.body.removeChild(this._loadingSpinner);
    } // _removeLoadingSpinner

    /**
     * It's supposed to be the ontouchstart event of the retry button
     * @author DoubleX @since v0.00a @version v0.00a
     */
    static _onRetryTouchStart(e) { e.stopPropagation(); }

    /**
     * It's supposed to be the onclick event of the retry button
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {()} retry - The callback to be called when the button's pressed
     */
    static _onRetry(retry) {
        this.eraseError();
        retry();
    } // _onRetry

    /**
     * This function shouldn't be called without an existing error printer
     * Idempotent
     * @author DoubleX @since v0.00a @version v0.00a
     */
    static _eraseErrorWithPrinter() {
        this._errorPrinter.innerHTML = this._makeErrorHtml();
        if (this._wasLoading) this.startLoading();
    } // _eraseErrorWithPrinter

    /**
     * Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {number} x - The x coordinate on the page to be converted
     * @returns {number} The x coordinate on the canvas area
     */
    static _pageToExistingCanvasX(x) {
        return Math.round((x - this._canvas.offsetLeft) / this._realScale);
    } // _pageToExistingCanvasX

    /**
     * Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {number} y - The y coordinate on the page to be converted
     * @returns {number} The y coordinate on the canvas area
     */
    static _pageToExistingCanvasY(y) {
        return Math.round((y - this._canvas.offsetTop) / this._realScale);
    } // _pageToExistingCanvasY

    /**
     * Updates all graphics elements if the specified dimension's indeed changed
     * Idempotent
     * @author DoubleX @since v0.00a @version v0.00a
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
     * @author DoubleX @since v0.00a @version v0.00a
     * @returns {boolean} If the real scale's updated with the stretch enabled
     */
    static _isUpdateStretchRealScale() {
        return this._stretchEnabled && this._width > 0 && this._height > 0;
    } // _isUpdateStretchRealScale

    /**
     * Sets the real scale with the stretch enabled
     * Idempotent
     * @author DoubleX @since v0.00a @version v0.00a
     */
    static _updateStretchRealScale() {
        this._realScale = this._stretchRealScale();
        window.scrollTo(0, 0);
    } // _updateStretchRealScale

    /**
     * Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
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
     * @author DoubleX @since v0.00a @version v0.00a
     */
    static _updateDefaultRealScale() {
        this._realScale = this._defaultScale;
    } // _updateDefaultRealScale

    /**
     * Creates a new document with a specified id as well as returning the html
     * Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @returns {string} The html of the specified error display portion
     */
    static _errorHTML(id, html) {
        const div = document.createElement("div");
        [div.id. div.innerHTML] = [id, Utils.escapeHtml(html || "")];
        return div.outerHTML;
    } // _errorHTML

    /**
     * Creates a new document with id errorPrinter as the error printer
     * Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
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
     * @author DoubleX @since v0.00a @version v0.00a
     */
    static _updateExistingErrorPrinter() {
        const { style } = this._errorPrinter;
        /** @todo Figures out where 640 and 100 come from respectively */
        style.width = 640 * this._realScale + "px";
        style.height = 100 * this._realScale + "px";
        //
    } // _updateExistingErrorPrinter

    /**
     * Creates new canvas document with id gameCanvas
     * Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
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
     * @author DoubleX @since v0.00a @version v0.00a
     */
    static _updateExistingCanvas() {
        [this._canvas.width, this._canvas.height] = [this._width, this._height];
        this._canvas.style.zIndex = 1;
        this._centerElement(this._canvas);
    } // _updateExistingCanvas

    /**
     * Creates a new document as the loading spinner with id loadingSpinner
     * Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
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
     * @author DoubleX @since v0.00a @version v0.00a
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
     * @author DoubleX @since v0.00a @version v0.00a
     */
    static _applyExistingCanvasFilter() {
        const { style } = this._canvas, filter = "blur(8px)";
        style.opacity = 0.5;
        [style.filter, style.webkitFilter] = [filter, filter];
    } // _applyExistingCanvasFilter

    /**
     * This function shouldn't be called without existing canvas
     * Idempotent
     * @author DoubleX @since v0.00a @version v0.00a
     */
    static _clearExistingCanvasFilter() {
        const { style } = this._canvas, filter = "";
        [style.opacity, style.filter, style.webkitFilter] = [1, filter, filter];
    } // _clearExistingCanvasFilter

    /**
     * Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {Event} event - The onkeydown event to be checked against
     * @returns {boolean} If the event might trigger functions to be called
     */
    static _hasNoKeyEvent(event) { return event.ctrlKey || event.altKey; }

    /**
     * This function shouldn't be called without a try and catch
     * Idempotent
     * @author DoubleX @since v0.00a @version v0.00a
     */
    static _createPixiAppWithoutRescue() {
        this._setupPixi();
        this._app = this._pixiApp();
    } // _createPixiAppWithoutRescue

    /**
     * Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
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
     * @author DoubleX @since v0.00a @version v0.00a
     * @returns {boolean} If the effekseer context can be created
     */
    static _isCreateEffekseerContext() {
        return this._app && window.effekseer;
    } // _isCreateEffekseerContext

    /**
     * Removes the pixi application if it fails to create an effekseer context
     * Idempotent
     * @author DoubleX @since v0.00a @version v0.00a
     */
    static _tryCreateEffekseerContext() {
        try {
            this._effekseer = this._effekseerContextWithoutRescue();
        } catch (e) { this._app = null; }
    } // _tryCreateEffekseerContext

    /**
     * This function shouldn't be called without a try and catch
     * Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
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
          this._tickCount = 0;
          this._frameTime = 100;
          this._frameStart = 0;
          this._lastLoop = performance.now() - 100;
          this._showFps = true;
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
     * @author DoubleX @since v0.00a @version v0.00a
     */
    _switchMode() {
        if (this._boxDiv.style.display === "none") {
            return this._switchToFPS();
        } else if (this._showFps) return this._switchToDuration();
        this._switchToNone();
    } // _switchMode

    /**
     * Switches the fps counter to show the fps
     * Idempotent
     * @author DoubleX @since v0.00a @version v0.00a
     */
    _switchToFPS() {
        this._boxDiv.style.display = "block";
        this._showFps = true;
    } // _switchToFPS

    /**
     * Switches the fps counter to show the number of ms elapsed in this frame
     * Idempotent
     * @author DoubleX @since v0.00a @version v0.00a
     */
    _switchToDuration() { this._showFps = false; }

    /**
     * Switches the fps counter to show nothing
     * Idempotent
     * @author DoubleX @since v0.00a @version v0.00a
     */
    _switchToNone() { this._boxDiv.style.display = "none"; }

    /**
     * Creates a new fps counter box div document with id fpsCounterBox
     * Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @param {Div} labelDiv - The fps counter label div document
     * @param {Div} numberDiv - The fps counter number div document
     * @returns {DOM} The fps counter box div document
     */
    _newBoxDiv(labelDiv, numberDiv) {
        const boxDiv = document.createElement("div");
        boxDiv.id = "fpsCounterBox";
        boxDiv.style.display = "none";
        boxDiv.appendChild(labelDiv);
        boxDiv.appendChild(numberDiv);
        return boxDiv;
    } // _newBoxDiv

    /**
     * Creates a new fps counter label div document with id fpsCounterLabel
     * Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
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
     * @author DoubleX @since v0.00a @version v0.00a
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
        [this._currentState, this._previousState] = [{}, {}];
        this._gamepadStates = [];
        this._latestButton = null;
        this._pressedTime = this._dir4 = this._dir8 = 0;
        this._preferredAxis = "";
        this._date = 0;
        this._virtualButton = null;
        // Added to support the isJustReleased static function
        this._isJustReleased = {};
        //
    } // clear

    /**
     * Updates the input data.
     */
    static update() {
        this._pollGamepads();
        if (this._currentState[this._latestButton]) {
            this._pressedTime++;
        } else this._latestButton = null;
        // Edited to help plugins update the current states in better ways
        this._currentState.forEach(this._updateCurrentState, this);
        //
        if (this._virtualButton) {
            /** @todo Extracts these codes into a well-named static function */
            this._latestButton = this._virtualButton;
            this._pressedTime = 0;
            this._virtualButton = null;
            //
        }
        this._updateDirection();
    } // update

    /**
     * Checks whether a key is currently pressed down.
     *
     * @param {string} keyName - The mapped name of the key.
     * @returns {boolean} True if the key is pressed.
     */
    static isPressed(keyName) {
        /** @todo Extracts the conditional into a well-named static function */
        if (this._isEscapeCompatible(keyName) && this.isPressed("escape")) {
            return true;
        } else return !!this._currentState[keyName];
        //
    } // isPressed

    /**
     * Checks whether a key is just pressed.
     *
     * @param {string} keyName - The mapped name of the key.
     * @returns {boolean} True if the key is triggered.
     */
    static isTriggered(keyName) {
        /** @todo Extracts the conditional into a well-named static function */
        if (this._isEscapeCompatible(keyName) && this.isTriggered("escape")) {
            return true;
        } else return this._latestButton === keyName && this._pressedTime === 0;
        //
    } // isTriggered

    /**
     * Checks whether a key is just pressed or a key repeat occurred.
     *
     * @param {string} keyName - The mapped name of the key.
     * @returns {boolean} True if the key is repeated.
     */
    static isRepeated(keyName) {
        /** @todo Extracts the conditional into a well-named static function */
        if (this._isEscapeCompatible(keyName) && this.isRepeated("escape")) {
            return true;
        } else if (this._latestButton !== keyName) return false;
        //
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
        /** @todo Extracts the conditional into a well-named static function */
        if (this._isEscapeCompatible(keyName) && this.isLongPressed("escape")) {
            return true;
        } else if (this._latestButton !== keyName) return false;
        //
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
     * @author DoubleX @interface @since v0.00a @version v0.00a
     * @enum @param {string} keyName - The mapped name of the key
     * @returns {boolean} If the key's just released right on this frame
     */
    static isJustReleased(keyName) {
        /** @todo Extracts the conditional into a well-named static function */
        if (this._isEscapeCompatible(keyName) && this.isTriggered('escape')) {
            return true;
        } else return !!this._isJustReleased[keyName];
        //
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
        if (buttonName) this._currentState[buttonName] = true;
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
        if (buttonName) this._currentState[buttonName] = false;
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
        const newState = this._newGamepadStates(buttons, axes);
        //
        newState.forEach((ns, i) => {
            if (ns === lastState[i]) return;
            const buttonName = this.gamepadMapper[i];
            if (buttonName) this._currentState[buttonName] = ns;
        });
        this._gamepadStates[index] = newState;
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

    static _signX() {
        // Edited to dry up codes essentially being the identical knowledge
        return this._sign("right") - this._sign("left");
        //
    } // _signX

    static _signY() {
        // Edited to dry up codes essentially being the identical knowledge
        return this._sign("down") - this._sign("up");
        //
    } // _signY

    static _makeNumpadDirection(x, y) {
        return x === 0 && y === 0 ? 0 : 5 - y * 3 + x;
    } // _makeNumpadDirection

    static _isEscapeCompatible(keyName) {
        return keyName === "cancel" || keyName === "menu";
    } // _isEscapeCompatible

    /**
     * Updates the current state of all input keys
     * Idempotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @enum @param {string} keyName - The mapped name of the key
     */
    static _updateCurrentState(keyName) {
        // Edited to support the isJustReleased static function
        if (this._isJustPressed(keyName)) {
            this._onStartPress(keyName);
        } else if (this._isJustReleased(keyName)) {
            this._isJustReleased[keyName] = true;
        } else this._isJustReleased[keyName] = false;
        //
        this._previousState[keyName] = this._currentState[keyName];
    } // _updateCurrentState

    /**
     * Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @enum @param {string} keyName - The mapped name of the key
     * @returns {boolean} If the key's just pressed right on this frame
     */
    static _isJustPressed(keyName) {
        return this._currentState[keyName] && !this._previousState[keyName];
    } // _isJustPressed

    /**
     * Updates the current input states with the input key that's just pressed
     * Idempotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @enum @param {string} keyName - The mapped name of the key
     */
    static _onStartPress(keyName) {
        this._latestButton = keyName;
        this._pressedTime = 0;
        this._date = Date.now();
        this._isJustReleased[keyName] = false; // It's just to play safe
    } // _onStartPress

    /**
     * Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @enum @param {string} keyName - The mapped name of the key
     * @returns {boolean} If the key's just released right on this frame
     */
    static _isJustReleased(keyName) {
        return !this._currentState[keyName] && this._previousState[keyName];
    } // _isJustReleased

    /**
     * Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @enum @param {string} keyName - The mapped name of the key
     * @returns {boolean} If the pressed key should clear all input states
     */
    static _shouldClear(keyCode) { return keyCode === 144; }

    /**
     * Updates the existing and connected gamepad state
     * Idempotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @enum @param {Gamepad} gamepad - The gamepad to be polled
     */
    static _pollGamepad(gamepad) {
        if (gamepad && gamepad.connected) this._updateGamepadState(gamepad);
    } // _pollGamepad

    /**
     * Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
     * @enum @param {[GamepadButton]} buttons - The list of the gamepad buttons
     * @enum @param {[number]} axes - The amounts of the gamepad axes directions
     * @returns {[boolean]} The list of new gamepad button states
     */
    static _newGamepadStates(buttons, axes) {
        const newState = [];
        newState[12] = newState[13] = newState[14] = newState[15] = false;
        buttons.forEach((button, i) => newState[i] = button.pressed);
        const threshold = 0.5; /** @todo Figures out where the 0.5 come from */
        if (axes[1] < -threshold) {
            newState[12] = true; // up
        } else if (axes[1] > threshold) newState[13] = true; // down
        if (axes[0] < -threshold) {
            newState[14] = true; // left
        } else if (axes[0] > threshold) newState[15] = true; // right
        return newState;
    } // _newGamepadStates

    /**
     * Nullipotent
     * @author DoubleX @since v0.00a @version v0.00a
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
     * @author DoubleX @interface @since v0.00a @version v0.00a
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
     * @author DoubleX @interface @since v0.00a @version v0.00a
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
     * @author DoubleX @interface @since v0.00a @version v0.00a
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
     * @author DoubleX @interface @since v0.00a @version v0.00a
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
     * @author DoubleX @interface @since v0.00a @version v0.00a
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
     * Nullipotent
     * @author DoubleX @interface @since v0.00a @version v0.00a
     * @memberof JsExtensions
     * @param {Array} arr - The array to be checked against
     * @returns {boolean} If the specified array's a proper subset of this
     */
    $.isProperSubsetOf = function(arr) {
        return this.isSubsetOf(arr) && !arr.isSubsetOf(this);
    }; // $.isProperSubsetOf

    /**
     * Nullipotent
     * @author DoubleX @interface @since v0.00a @version v0.00a
     * @memberof JsExtensions
     * @param {Array} arr - The array to be checked against
     * @returns {boolean} If the specified array's a proper superset of this
     */
    $.isProperSupersetOf = function(arr) {
        return this.isSupersetOf(arr) && !arr.isSupersetOf(this);
    }; // $.isProperSupersetOf

    /**
     * Nullipotent
     * @author DoubleX @interface @since v0.00a @version v0.00a
     * @memberof JsExtensions
     * @param {Array} arr - The array to be checked against
     * @returns {boolean} If the specified array's a superset of this
     */
    $.isSupersetOf = function(arr) { return arr.isSubsetOf(this); };

    /**
     * Nullipotent
     * @author DoubleX @interface @since v0.00a @version v0.00a
     * @memberof JsExtensions
     * @param {Array} arr - The array to be checked against
     * @returns {boolean} If the specified array's a subset of this
     */
    $.isSubsetOf = function(arr) { return this.difference(arr).isEmpty(); };

    /**
     * Nullipotent
     * @author DoubleX @interface @since v0.00a @version v0.00a
     * @memberof JsExtensions
     * @returns {boolean} If this array's empty
     */
    $.isEmpty = function() { return this.length <= 0; };

    /**
     * Nullipotent
     * @author DoubleX @interface @since v0.00a @version v0.00a
     * @memberof JsExtensions
     * @param {Array} arr - The array to have symmetric difference with
     * @returns {Array} The symmetric difference of the specified and this array
     */
    $.symmetricDifference = function(arr) {
        return this.difference(arr).union(arr.difference(this));
    }; // $.symmetricDifference

    /**
     * Nullipotent
     * @author DoubleX @interface @since v0.00a @version v0.00a
     * @memberof JsExtensions
     * @param {Array} arr - The array to have union with this array
     * @returns {Array} The union of the specified and this array
     */
    $.union = function(arr) { return this.concat(arr.difference(this)); };

    /**
     * Nullipotent
     * @author DoubleX @interface @since v0.00a @version v0.00a
     * @memberof JsExtensions
     * @param {Array} arr - The array to have difference with this array
     * @returns {Array} The difference of the specified and this array
     */
    $.difference = function(arr) { return this.filter(this.excludes, arr); };

    /**
     * Nullipotent
     * @author DoubleX @interface @since v0.00a @version v0.00a
     * @memberof JsExtensions
     * @param {Array} arr - The array to have intersection with this array
     * @returns {Array} The intersection of the specified and this array
     */
    $.intersection = function(arr) {
        // The 2nd argument of includes doesn't match with that of filter
        return this.filter(elem => arr.includes(elem));
        //
    }; // $.intersection

    /**
     * Nullipotent
     * @author DoubleX @interface @since v0.00a @version v0.00a
     * @memberof JsExtensions
     * @param {*} elem - The element to be checked against
     * @returns {boolean} If this array doesn't have the specified element
     */
    $.excludes = function(elem) { return !this.includes(elem); };

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
    static stringify(object) {
        return JSON.stringify(this._encode(object, 0));
    }

    /**
     * Parses a JSON string and reconstructs the corresponding object.
     *
     * @param {string} json - The JSON string.
     * @returns {object} The reconstructed object.
     */
    static parse(json) {
        return this._decode(JSON.parse(json));
    }

    /**
     * Makes a deep copy of the specified object.
     *
     * @param {object} object - The object to be copied.
     * @returns {object} The copied object.
     */
    static makeDeepCopy(object) {
        return this.parse(this.stringify(object));
    }

    static _encode(value, depth) {
        // [Note] The handling code for circular references in certain versions of
        //   MV has been removed because it was too complicated and expensive.
        if (depth >= this.maxDepth) throw new Error("Object too deep");
        if (this._isValObj(value)) return this._encodeValObj(value, depth);
        return value;
    }

    static _decode(value) {
        return this._isValObj(value) ? this._decodeValObj(value) : value;
    }

    /**
     * Pure function
     * @author DoubleX @interface @since v0.00a @version v0.00a
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
    }

    /**
     * Pure function
     * @author DoubleX @interface @since v0.00a @version v0.00a
     * @param {*} val - The value to be encoded or decoded
     * @returns {boolean} If the value's indeed a value object
     */
    static _isValObj(val) {
        const type = Object.prototype.toString.call(val);
        return type === "[object Object]" || type === "[object Array]";
    }

    /**
     * Pure function
     * @author DoubleX @interface @since v0.00a @version v0.00a
     * @param {*} val - The value object to be decoded
     * @returns {*} The fully decoded value object
     */
    static _decodeValObj(val) {
        const constructorName = val["@"];
        if (constructorName) {
            const constructor = window[constructorName];
            if (constructor) {
                Object.setPrototypeOf(val, constructor.prototype);
            }
        }
        Object.entries(val).forEach(([k, v]) => val[k] = this._decode(v));
        return val;
    }

}