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
 *    3. This plugin also added some new APIs and refactored some codes to
 *       further facilitate more effective and efficient plugin development by
 *       making the default RMMZ codebase quality improvements even more
 *       drastic
 *    4. This plugin also helps converting RMMV plugins into RMMZ counterparts
 *       by porting default MV classes/functions/methodsvariables/ not present
 *       in the default RMMZ codebase
 *    5. THIS PLUGIN'S INTENDED TO GIVES AN EXTRA OPTION TO PLUGIN DEVELOPERS
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
 *     Graphics
 *     1. fps
 *        Returns the current game fps
 *     2. fps = newFps
 *        Sets the current game fps to be newFps
 *     Input
 *     1. isJustReleased(keyName)
 *        Returns if the specified key's just released right on this frame
 *   # New private functions/methods/variables
 *     Search "ed to help plugins" for such additions in the plugin
 *   # Core MV functions/methods/variables not in MZ added by this plugin
 *     1. Utils
 *        Static Functions
 *        - canReadGameFiles
 *        - rgbToCssColor
 *        - generateRuntimeId
 *        - isSupportPassiveEvent
 *        Static Variables
 *        - _id
 *        - _supportPassiveEvent
 *     2. CacheEntry
 *     3. CacheMap
 *     4. ImageCache
 *     5. RequestQueue
 *        The whole class
 *     6. Rectangle
 *        Static Variable
 *        - Rectangle.emptyRectangle
 *     7. Bitmap
 *        Instance Methods
 *        - _clearImgInstance
 *        - touch
 *        - bltImage
 *        - adjustTone
 *        - rotateHue
 *        - blur
 *        - _setDirty
 *        - checkDirty
 *        - isRequestReady
 *        Instance Variable
 *        - cacheEntry
 *     8. Graphics
 *        Static Functions
 *        - _setupCssFontLoading
 *        - canUseCssFontLoading
 *        - hasWebGL
 *        - canUseDifferenceBlend
 *        - canUseSaturationBlend
 *        - loadFont
 *        - isFontLoaded
 *        - _testCanvasBlendModes
 *        - _modifyExistingElements
 *        - _createGameFontLoader
 *        - _createFontLoader
 *        - _disableTextSelection
 *        Static Variables
 *        - _cssFontLoading
 *        - _fontLoaded
 *        - BLEND_NORMAL
 *        - BLEND_ADD
 *        - BLEND_MULTIPLY
 *        - BLEND_SCREEN
 *        - scale
 *     9. Input
 *        Static Function
 *        - _wrapNwjsAlert
 *     10. TouchInput
 *         Static Function
 *         - _onPointerDown
 *     11. Sprite
 *         Instance Methods
 *         - _isInBitmapRect
 *         - _needsTint
 *     12. Tilemap
 *         Instance Methods
 *         - refreshTileset
 *         - _readLastTiles
 *         - _writeLastTiles
 *         - _drawTile
 *         - _drawNormalTile
 *         - _drawAutotile
 *         - _drawTableEdge
 *         - _drawShadow
 *         Instance Variables
 *         - tileWidth
 *         - tileHeight
 *         - _lastTiles
 *     13. ToneFilter
 *         The whole class
 *     14. ToneSprite
 *         The whole class
 *     15. WebAudio
 *         Static Function
 *         - _onTouchStart
 *         Static Variable
 *         - _unlocked
 *         Instance Methods
 *         - _createNodes
 *         - _connectNodes
 *         - _readOgg
 *         - _readMp4
 *         - _readLittleEndian
 *         - _readBigEndian
 *   # Managers MV functions/methods/variables not in MZ added by this plugin
 *     1. StorageManager
 *        Static Functions
 *        - localFileBackupExists
 *        - webStorageBackupExists
 *        - webStorageExists
 *        - removeWebStorage
 *        - localFileDirectoryPath
 *        - localFilePath
 *        - webStorageKey
 *     2. ImageManager
 *         Static Functions
 *        - _generateCacheKey
 *        - loadEmptyBitmap
 *        - loadNormalBitmap
 *        - reserveAnimation
 *        - reserveBattleback1
 *        - reserveBattleback2
 *        - reserveEnemy
 *        - reserveCharacter
 *        - reserveFace
 *        - reserveParallax
 *        - reservePicture
 *        - reserveSvActor
 *        - reserveSvEnemy
 *        - reserveSystem
 *        - reserveTileset
 *        - reserveTitle1
 *        - reserveTitle2
 *        - reserveBitmap
 *        - reserveNormalBitmap
 *        - releaseReservation
 *        - setDefaultReservationId
 *        - requestAnimation
 *        - requestBattleback1
 *        - requestBattleback2
 *        - requestEnemy
 *        - requestCharacter
 *        - requestFace
 *        - requestParallax
 *        - requestPicture
 *        - requestSvActor
 *        - requestSvEnemy
 *        - requestSystem
 *        - requestTileset
 *        - requestTitle1
 *        - requestTitle2
 *        - requestBitmap
 *        - requestNormalBitmap
 *        - update
 *        - clearRequest
 *        Static Variables
 *        - cache
 *        - _imageCache
 *        - _requestQueue
 *        - _systemReservationId
 *     3. AudioManager
 *        Static Functions
 *        - createDecryptBuffer
 *        - shouldUseHtml5Audio
 *        - checkWebAudioError
 *        Static Variables
 *        - _masterVolume
 *        - _blobUrl
 *     4. SceneManager
 *        Static Functions
 *        - _getTimeInMsWithoutMobileSafari
 *        - checkFileAccess
 *        - initNwjs
 *        - setupErrorHandlers
 *   # Objects MV functions/methods/variables not in MZ added by this plugin
 *     1. Game_Temp
 *        Instance Method
 *        - clearCommonEvent
 *     2. Game_Picture
 *        Instance Method
 *        - erase
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
 *         - Basic knowledge on what the default RMMV codebase does in general
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
// You can copy this class without giving me crefit or asking users to do so

/*============================================================================*/

/*----------------------------------------------------------------------------
 *    ## Core
 *----------------------------------------------------------------------------*/

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
     * push can't be applied to merge extremely long arrays so fastMerge is made
     * This method alters the original array(this) as it merges another in place
     * @author DoubleX @interface @since 0.9.5 @version 0.9.5
     * @memberof JsExtensions
     * @param {[*]} arr - The array to be merged
     * @returns {This} The original array merged with another array in place
     */
    $.fastMerge = function(arr) {
        // forEach is tested to be the fastest among sandboxes including NW.js
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

    // RMMV static functions not present in the default RMMZ codebase
    static canReadGameFiles() {
        var scripts = document.getElementsByTagName('script');
        var lastScript = scripts[scripts.length - 1];
        var xhr = new XMLHttpRequest();
        try {
            xhr.open('GET', lastScript.src);
            xhr.overrideMimeType('text/javascript');
            xhr.send();
            return true;
        } catch (e) {
            return false;
        }
    }

    static rgbToCssColor(r, g, b) {
        r = Math.round(r);
        g = Math.round(g);
        b = Math.round(b);
        return 'rgb(' + r + ',' + g + ',' + b + ')';
    }

    static _id = 1;
    static generateRuntimeId() { return Utils._id++; }

    static _supportPassiveEvent = null;

    static isSupportPassiveEvent() {
        if (typeof Utils._supportPassiveEvent === "boolean") {
            return Utils._supportPassiveEvent;
        }
        // test support passive event
        // https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection
        var passive = false;
        var options = Object.defineProperty({}, "passive", {
            get: function() { passive = true; }
        });
        window.addEventListener("test", null, options);
        Utils._supportPassiveEvent = passive;
        return passive;
    }
    //

} // Utils

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

    // Added to help plugins alter fps in better ways
    get fps() { return this._fps; }
    set fps(fps) { [this._fps, this._app.deltaMs] = [fps, 1000.0 / fps]; }
    //

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
        // Added to help plugins alter fps in better ways
        this._fps = 60;
        //
        // Added to help plugins alter key events in better ways
        this._initKeyEvents();
        //
        // RMMV instance variables not present in the default RMMZ codebase
        this._canUseDifferenceBlend = false;
        this._canUseSaturationBlend = false;
        this._hiddenCanvas = null;
        //
    } // _initPrivateVars

    // Added to help plugins alter key events in better ways
    static _keyEvents = new Map();
    //

    /**
     * Adds a new private variable to help plugins alter key events
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    static _initKeyEvents() {
        this._keyEvents.clear();
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
        app.deltaMs = 1000.0 / this._fps;
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

    // RMMV static variables not present in the default RMMZ codebase
    static _cssFontLoading =  document.fonts && document.fonts.ready;
    static _fontLoaded = null;
    //

    // RMMV static functions not present in the default RMMZ codebase
    static _setupCssFontLoading() {
        if(Graphics._cssFontLoading){
            document.fonts.ready.then(function(fonts){
                Graphics._fontLoaded = fonts;
            }).catch(function(error){
                SceneManager.onError(error);
            });
        }
    }

    static canUseCssFontLoading() {
        return !!this._cssFontLoading;
    }
    //

    // RMMV static variables not present in the default RMMZ codebase
    static BLEND_NORMAL   = 0;
    static BLEND_ADD      = 1;
    static BLEND_MULTIPLY = 2;
    static BLEND_SCREEN   = 3;
    //

    // RMMV static functions not present in the default RMMZ codebase
    static hasWebGL() {
        try {
            var canvas = document.createElement('canvas');
            return !!(canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
        } catch (e) {
            return false;
        }
    }

    static canUseDifferenceBlend() {
        return this._canUseDifferenceBlend;
    }

    static canUseSaturationBlend() {
        return this._canUseSaturationBlend;
    }

    static loadFont(name, url) {
        var style = document.createElement('style');
        var head = document.getElementsByTagName('head');
        var rule = '@font-face { font-family: "' + name + '"; src: url("' + url + '"); }';
        style.type = 'text/css';
        head.item(0).appendChild(style);
        style.sheet.insertRule(rule, 0);
        this._createFontLoader(name);
    }

    static isFontLoaded(name) {
        if (Graphics._cssFontLoading) {
            if(Graphics._fontLoaded){
                return Graphics._fontLoaded.check('10px "'+name+'"');
            }

            return false;
        } else {
            if (!this._hiddenCanvas) {
                this._hiddenCanvas = document.createElement('canvas');
            }
            var context = this._hiddenCanvas.getContext('2d');
            var text = 'abcdefghijklmnopqrstuvwxyz';
            var width1, width2;
            context.font = '40px ' + name + ', sans-serif';
            width1 = context.measureText(text).width;
            context.font = '40px sans-serif';
            width2 = context.measureText(text).width;
            return width1 !== width2;
        }
    }
    //

    // RMMV static variable not present in the default RMMZ codebase
    static get scale() {
        return this.defaultScale;
    }
    static set scale(value) {
        this.defaultScale = value;
    } // defaultScale
    //

    // RMMV static functions not present in the default RMMZ codebase
    static _testCanvasBlendModes() {
        var canvas, context, imageData1, imageData2;
        canvas = document.createElement('canvas');
        canvas.width = 1;
        canvas.height = 1;
        context = canvas.getContext('2d');
        context.globalCompositeOperation = 'source-over';
        context.fillStyle = 'white';
        context.fillRect(0, 0, 1, 1);
        context.globalCompositeOperation = 'difference';
        context.fillStyle = 'white';
        context.fillRect(0, 0, 1, 1);
        imageData1 = context.getImageData(0, 0, 1, 1);
        context.globalCompositeOperation = 'source-over';
        context.fillStyle = 'black';
        context.fillRect(0, 0, 1, 1);
        context.globalCompositeOperation = 'saturation';
        context.fillStyle = 'white';
        context.fillRect(0, 0, 1, 1);
        imageData2 = context.getImageData(0, 0, 1, 1);
        this._canUseDifferenceBlend = imageData1.data[0] === 0;
        this._canUseSaturationBlend = imageData2.data[0] === 0;
    }

    static _modifyExistingElements() {
        var elements = document.getElementsByTagName('*');
        for (var i = 0; i < elements.length; i++) {
            if (elements[i].style.zIndex > 0) {
                elements[i].style.zIndex = 0;
            }
        }
    }

    static _createGameFontLoader() {
        this._createFontLoader('GameFont');
    }

    static _createFontLoader(name) {
        var div = document.createElement('div');
        var text = document.createTextNode('.');
        div.style.fontFamily = name;
        div.style.fontSize = '0px';
        div.style.color = 'transparent';
        div.style.position = 'absolute';
        div.style.margin = 'auto';
        div.style.top = '0px';
        div.style.left = '0px';
        div.style.width = '1px';
        div.style.height = '1px';
        div.appendChild(text);
        document.body.appendChild(div);
    }

    static _disableTextSelection() {
        var body = document.body;
        body.style.userSelect = 'none';
        body.style.webkitUserSelect = 'none';
        body.style.msUserSelect = 'none';
        body.style.mozUserSelect = 'none';
    }
    //

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
class Rectangle extends PIXI.Rectangle {

    // RMMV static variable not present in the default RMMZ codebase
    static emptyRectangle = new Rectangle(0, 0, 0, 0);
    //

} // Rectangle
// It's just to play safe in case of any plugin extending PIXI.Rectangle in ES6
ES6ExtendedClassAlias.inherit(Rectangle);
//

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
        // RMMV instance variable not present in the default RMMZ codebase
        this.cacheEntry = null;
        //
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

    // RMMV static variable not present in the default RMMZ codebase
    static _reuseImages = [];
    //

    // RMMV instance methods not present in the default RMMZ codebase
    _clearImgInstance() {
        this._image.src = "";
        this._image.onload = null;
        this._image.onerror = null;
        this._errorListener = null;
        this._loadListener = null;

        Bitmap._reuseImages.push(this._image);
        this._image = null;
    }

    touch() {
        if (this.cacheEntry) {
            this.cacheEntry.touch();
        }
    }

    bltImage(source, sx, sy, sw, sh, dx, dy, dw, dh) {
        dw = dw || sw;
        dh = dh || sh;
        if (sx >= 0 && sy >= 0 && sw > 0 && sh > 0 && dw > 0 && dh > 0 &&
            sx + sw <= source.width && sy + sh <= source.height) {
            this._context.globalCompositeOperation = 'source-over';
            this._context.drawImage(source._image, sx, sy, sw, sh, dx, dy, dw, dh);
            this._setDirty();
        }
    }

    adjustTone(r, g, b) {
        if ((r || g || b) && this.width > 0 && this.height > 0) {
            var context = this._context;
            var imageData = context.getImageData(0, 0, this.width, this.height);
            var pixels = imageData.data;
            for (var i = 0; i < pixels.length; i += 4) {
                pixels[i + 0] += r;
                pixels[i + 1] += g;
                pixels[i + 2] += b;
            }
            context.putImageData(imageData, 0, 0);
            this._setDirty();
        }
    }

    rotateHue(offset) {
        function rgbToHsl(r, g, b) {
            var cmin = Math.min(r, g, b);
            var cmax = Math.max(r, g, b);
            var h = 0;
            var s = 0;
            var l = (cmin + cmax) / 2;
            var delta = cmax - cmin;

            if (delta > 0) {
                if (r === cmax) {
                    h = 60 * (((g - b) / delta + 6) % 6);
                } else if (g === cmax) {
                    h = 60 * ((b - r) / delta + 2);
                } else {
                    h = 60 * ((r - g) / delta + 4);
                }
                s = delta / (255 - Math.abs(2 * l - 255));
            }
            return [h, s, l];
        }

        function hslToRgb(h, s, l) {
            var c = (255 - Math.abs(2 * l - 255)) * s;
            var x = c * (1 - Math.abs((h / 60) % 2 - 1));
            var m = l - c / 2;
            var cm = c + m;
            var xm = x + m;

            if (h < 60) {
                return [cm, xm, m];
            } else if (h < 120) {
                return [xm, cm, m];
            } else if (h < 180) {
                return [m, cm, xm];
            } else if (h < 240) {
                return [m, xm, cm];
            } else if (h < 300) {
                return [xm, m, cm];
            } else {
                return [cm, m, xm];
            }
        }

        if (offset && this.width > 0 && this.height > 0) {
            offset = ((offset % 360) + 360) % 360;
            var context = this._context;
            var imageData = context.getImageData(0, 0, this.width, this.height);
            var pixels = imageData.data;
            for (var i = 0; i < pixels.length; i += 4) {
                var hsl = rgbToHsl(pixels[i + 0], pixels[i + 1], pixels[i + 2]);
                var h = (hsl[0] + offset) % 360;
                var s = hsl[1];
                var l = hsl[2];
                var rgb = hslToRgb(h, s, l);
                pixels[i + 0] = rgb[0];
                pixels[i + 1] = rgb[1];
                pixels[i + 2] = rgb[2];
            }
            context.putImageData(imageData, 0, 0);
            this._setDirty();
        }
    }

    blur() {
        for (var i = 0; i < 2; i++) {
            var w = this.width;
            var h = this.height;
            var canvas = this._canvas;
            var context = this._context;
            var tempCanvas = document.createElement('canvas');
            var tempContext = tempCanvas.getContext('2d');
            tempCanvas.width = w + 2;
            tempCanvas.height = h + 2;
            tempContext.drawImage(canvas, 0, 0, w, h, 1, 1, w, h);
            tempContext.drawImage(canvas, 0, 0, w, 1, 1, 0, w, 1);
            tempContext.drawImage(canvas, 0, 0, 1, h, 0, 1, 1, h);
            tempContext.drawImage(canvas, 0, h - 1, w, 1, 1, h + 1, w, 1);
            tempContext.drawImage(canvas, w - 1, 0, 1, h, w + 1, 1, 1, h);
            context.save();
            context.fillStyle = 'black';
            context.fillRect(0, 0, w, h);
            context.globalCompositeOperation = 'lighter';
            context.globalAlpha = 1 / 9;
            for (var y = 0; y < 3; y++) {
                for (var x = 0; x < 3; x++) {
                    context.drawImage(tempCanvas, x, y, w, h, 0, 0, w, h);
                }
            }
            context.restore();
        }
        this._setDirty();
    }

    _setDirty() {
        this._dirty = true;
    }

    checkDirty() {
        if (this._dirty) {
            this._baseTexture.update();
            this._dirty = false;
        }
    }

    isRequestReady() {
        return this._loadingState !== 'pending' &&
            this._loadingState !== 'requesting' &&
            this._loadingState !== 'decrypting';
    }
    //

} // Bitmap

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

    // RMMV instance methods not present in the default RMMZ codebase
    _isInBitmapRect(x, y, w, h) {
        return (this._bitmap && x + w > 0 && y + h > 0 &&
                x < this._bitmap.width && y < this._bitmap.height);
    }

    _needsTint() {
        var tone = this._colorTone;
        return tone[0] || tone[1] || tone[2] || tone[3] || this._blendColor[3] > 0;
    }
    //

} // Sprite
// It's just to play safe in case of any plugin extending PIXI.Sprite in ES6 way
ES6ExtendedClassAlias.inherit(Sprite);
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
    refresh() {
        this._needsRepaint = true;
        // RMMV instance variable not present in the default RMMZ codebase
        this._lastTiles.length = 0;
        //
    } // refresh

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
        // RMMV instance variable not present in the default RMMZ codebase
        this._lastTiles = [];
        //
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

    // RMMV instance variables not present in the default RMMZ codebase
    get tileWidth() {
        return this._tileWidth;
    }
    set tileWidth(value) {
        if (this._tileWidth !== value) {
            this._tileWidth = value;
            this._createLayers();
        }
    }

    get tileHeight() {
        return this._tileHeight;
    }
    set tileHeight(value) {
        if (this._tileHeight !== value) {
            this._tileHeight = value;
            this._createLayers();
        }
    }
    //

    // RMMV instance methods not present in the default RMMZ codebase
    refreshTileset() {

    }

    _readLastTiles(i, x, y) {
        var array1 = this._lastTiles[i];
        if (array1) {
            var array2 = array1[y];
            if (array2) {
                var tiles = array2[x];
                if (tiles) {
                    return tiles;
                }
            }
        }
        return [];
    }

    _writeLastTiles(i, x, y, tiles) {
        var array1 = this._lastTiles[i];
        if (!array1) {
            array1 = this._lastTiles[i] = [];
        }
        var array2 = array1[y];
        if (!array2) {
            array2 = array1[y] = [];
        }
        array2[x] = tiles;
    }

    _drawTile(bitmap, tileId, dx, dy) {
        if (Tilemap.isVisibleTile(tileId)) {
            if (Tilemap.isAutotile(tileId)) {
                this._drawAutotile(bitmap, tileId, dx, dy);
            } else {
                this._drawNormalTile(bitmap, tileId, dx, dy);
            }
        }
    }

    _drawNormalTile(bitmap, tileId, dx, dy) {
        var setNumber = 0;

        if (Tilemap.isTileA5(tileId)) {
            setNumber = 4;
        } else {
            setNumber = 5 + Math.floor(tileId / 256);
        }

        var w = this._tileWidth;
        var h = this._tileHeight;
        var sx = (Math.floor(tileId / 128) % 2 * 8 + tileId % 8) * w;
        var sy = (Math.floor(tileId % 256 / 8) % 16) * h;

        var source = this.bitmaps[setNumber];
        if (source) {
            bitmap.bltImage(source, sx, sy, w, h, dx, dy, w, h);
        }
    }

    _drawAutotile(bitmap, tileId, dx, dy) {
        var autotileTable = Tilemap.FLOOR_AUTOTILE_TABLE;
        var kind = Tilemap.getAutotileKind(tileId);
        var shape = Tilemap.getAutotileShape(tileId);
        var tx = kind % 8;
        var ty = Math.floor(kind / 8);
        var bx = 0;
        var by = 0;
        var setNumber = 0;
        var isTable = false;

        if (Tilemap.isTileA1(tileId)) {
            var waterSurfaceIndex = [0, 1, 2, 1][this.animationFrame % 4];
            setNumber = 0;
            if (kind === 0) {
                bx = waterSurfaceIndex * 2;
                by = 0;
            } else if (kind === 1) {
                bx = waterSurfaceIndex * 2;
                by = 3;
            } else if (kind === 2) {
                bx = 6;
                by = 0;
            } else if (kind === 3) {
                bx = 6;
                by = 3;
            } else {
                bx = Math.floor(tx / 4) * 8;
                by = ty * 6 + Math.floor(tx / 2) % 2 * 3;
                if (kind % 2 === 0) {
                    bx += waterSurfaceIndex * 2;
                }
                else {
                    bx += 6;
                    autotileTable = Tilemap.WATERFALL_AUTOTILE_TABLE;
                    by += this.animationFrame % 3;
                }
            }
        } else if (Tilemap.isTileA2(tileId)) {
            setNumber = 1;
            bx = tx * 2;
            by = (ty - 2) * 3;
            isTable = this._isTableTile(tileId);
        } else if (Tilemap.isTileA3(tileId)) {
            setNumber = 2;
            bx = tx * 2;
            by = (ty - 6) * 2;
            autotileTable = Tilemap.WALL_AUTOTILE_TABLE;
        } else if (Tilemap.isTileA4(tileId)) {
            setNumber = 3;
            bx = tx * 2;
            by = Math.floor((ty - 10) * 2.5 + (ty % 2 === 1 ? 0.5 : 0));
            if (ty % 2 === 1) {
                autotileTable = Tilemap.WALL_AUTOTILE_TABLE;
            }
        }

        var table = autotileTable[shape];
        var source = this.bitmaps[setNumber];

        if (table && source) {
            var w1 = this._tileWidth / 2;
            var h1 = this._tileHeight / 2;
            for (var i = 0; i < 4; i++) {
                var qsx = table[i][0];
                var qsy = table[i][1];
                var sx1 = (bx * 2 + qsx) * w1;
                var sy1 = (by * 2 + qsy) * h1;
                var dx1 = dx + (i % 2) * w1;
                var dy1 = dy + Math.floor(i / 2) * h1;
                if (isTable && (qsy === 1 || qsy === 5)) {
                    var qsx2 = qsx;
                    var qsy2 = 3;
                    if (qsy === 1) {
                        qsx2 = [0,3,2,1][qsx];
                    }
                    var sx2 = (bx * 2 + qsx2) * w1;
                    var sy2 = (by * 2 + qsy2) * h1;
                    bitmap.bltImage(source, sx2, sy2, w1, h1, dx1, dy1, w1, h1);
                    dy1 += h1/2;
                    bitmap.bltImage(source, sx1, sy1, w1, h1/2, dx1, dy1, w1, h1/2);
                } else {
                    bitmap.bltImage(source, sx1, sy1, w1, h1, dx1, dy1, w1, h1);
                }
            }
        }
    }

    _drawTableEdge(bitmap, tileId, dx, dy) {
        if (Tilemap.isTileA2(tileId)) {
            var autotileTable = Tilemap.FLOOR_AUTOTILE_TABLE;
            var kind = Tilemap.getAutotileKind(tileId);
            var shape = Tilemap.getAutotileShape(tileId);
            var tx = kind % 8;
            var ty = Math.floor(kind / 8);
            var setNumber = 1;
            var bx = tx * 2;
            var by = (ty - 2) * 3;
            var table = autotileTable[shape];

            if (table) {
                var source = this.bitmaps[setNumber];
                var w1 = this._tileWidth / 2;
                var h1 = this._tileHeight / 2;
                for (var i = 0; i < 2; i++) {
                    var qsx = table[2 + i][0];
                    var qsy = table[2 + i][1];
                    var sx1 = (bx * 2 + qsx) * w1;
                    var sy1 = (by * 2 + qsy) * h1 + h1/2;
                    var dx1 = dx + (i % 2) * w1;
                    var dy1 = dy + Math.floor(i / 2) * h1;
                    bitmap.bltImage(source, sx1, sy1, w1, h1/2, dx1, dy1, w1, h1/2);
                }
            }
        }
    }

    _drawShadow(bitmap, shadowBits, dx, dy) {
        if (shadowBits & 0x0f) {
            var w1 = this._tileWidth / 2;
            var h1 = this._tileHeight / 2;
            var color = 'rgba(0,0,0,0.5)';
            for (var i = 0; i < 4; i++) {
                if (shadowBits & (1 << i)) {
                    var dx1 = dx + (i % 2) * w1;
                    var dy1 = dy + Math.floor(i / 2) * h1;
                    bitmap.fillRect(dx1, dy1, w1, h1, color);
                }
            }
        }
    }
    //

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
    _startXhrLoading(url) { this._newLoadingXhr(url).send(); }
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

    // RMMV static variable not present in the default RMMZ codebase
    static _unlocked       = false;
    //

    // RMMV static function not present in the default RMMZ codebase
    static _onTouchStart() {
        var context = WebAudio._context;
        if (context && !this._unlocked) {
            var node = context.createBufferSource();
            node.start(0);
            this._unlocked = true;
        }
    }
    //

    // RMMV instance methods not present in the default RMMZ codebase
    _createNodes() {
        var context = WebAudio._context;
        this._sourceNode = context.createBufferSource();
        this._sourceNode.buffer = this._buffer;
        this._sourceNode.loopStart = this._loopStart;
        this._sourceNode.loopEnd = this._loopStart + this._loopLength;
        this._sourceNode.playbackRate.setValueAtTime(this._pitch, context.currentTime);
        this._gainNode = context.createGain();
        this._gainNode.gain.setValueAtTime(this._volume, context.currentTime);
        this._pannerNode = context.createPanner();
        this._pannerNode.panningModel = 'equalpower';
        this._updatePanner();
    }

    _connectNodes() {
        this._sourceNode.connect(this._gainNode);
        this._gainNode.connect(this._pannerNode);
        this._pannerNode.connect(WebAudio._masterGainNode);
    }

    _readOgg(array) {
        var index = 0;
        while (index < array.length) {
            if (this._readFourCharacters(array, index) === 'OggS') {
                index += 26;
                var vorbisHeaderFound = false;
                var numSegments = array[index++];
                var segments = [];
                for (var i = 0; i < numSegments; i++) {
                    segments.push(array[index++]);
                }
                for (i = 0; i < numSegments; i++) {
                    if (this._readFourCharacters(array, index + 1) === 'vorb') {
                        var headerType = array[index];
                        if (headerType === 1) {
                            this._sampleRate = this._readLittleEndian(array, index + 12);
                        } else if (headerType === 3) {
                            this._readMetaData(array, index, segments[i]);
                        }
                        vorbisHeaderFound = true;
                    }
                    index += segments[i];
                }
                if (!vorbisHeaderFound) {
                    break;
                }
            } else {
                break;
            }
        }
    }

    _readMp4(array) {
        if (this._readFourCharacters(array, 4) === 'ftyp') {
            var index = 0;
            while (index < array.length) {
                var size = this._readBigEndian(array, index);
                var name = this._readFourCharacters(array, index + 4);
                if (name === 'moov') {
                    index += 8;
                } else {
                    if (name === 'mvhd') {
                        this._sampleRate = this._readBigEndian(array, index + 20);
                    }
                    if (name === 'udta' || name === 'meta') {
                        this._readMetaData(array, index, size);
                    }
                    index += size;
                    if (size <= 1) {
                        break;
                    }
                }
            }
        }
    }

    _readLittleEndian(array, index) {
        return (array[index + 3] * 0x1000000 + array[index + 2] * 0x10000 +
                array[index + 1] * 0x100 + array[index + 0]);
    }

    _readBigEndian(array, index) {
        return (array[index + 0] * 0x1000000 + array[index + 1] * 0x10000 +
                array[index + 2] * 0x100 + array[index + 3]);
    }
    //

} // WebAudio

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

    // Added to help plugins support the isJustReleased static function
    static _isJustReleased = new Map();
    //

    /**
     * Clears all the input data.
     */
    static clear() {
        [this._currentState, this._previousState] = [{}, {}];
        [this._gamepadStates, this._latestButton] = [[], null];
        this._pressedTime = this._dir4 = this._dir8 = 0;
        [this._preferredAxis, this._date, this._virtualButton] = ["", 0, null];
        // Added to help plugins support the isJustReleased static function
        this._isJustReleased.clear();
        //
    } // clear

    /**
     * Updates the input data.
     */
    static update() {
        this._pollGamepads();
        // Edited to help plugins update the current states in better ways
        this._updateLatestButton();
        for (const keyName in this._currentState) {
            this._updateCurrentState(this._currentState[keyName], keyName);
        }
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
        return !!this._currentState[keyName];
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
        if (this._shouldClear(keyCode)) this.clear();
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
        this._gamepadStates[index] = this._newGamepadStates(buttons, axes);
        //
        this._gamepadStates[index].forEach((ns, i) => {
            if (ns === lastState[i]) return;
            const buttonName = this.gamepadMapper[i];
            if (buttonName) this._currentState[buttonName] = ns;
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
        if (this._currentState[this._latestButton]) {
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
        this._previousState[keyName] = keyState;
    } // _updateCurrentState

    /**
     * Updates the latest state of all input keys
     * Hotspot/Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @enum @param {string} keyName - The mapped name of the key
     */
    static _updateLatestState(keyName) {
        if (this._isJustPressed(keyName)) return this._onStartPress(keyName);
        // Added to help plugins support the isJustReleased static function
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
        if (!this._currentState[keyName]) return false;
        return !this._previousState[keyName];
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
        if (this._currentState[keyName]) return false;
        return this._previousState[keyName];
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
    static _shouldClear(keyCode) { return keyCode === 144; /* Numlock */ }

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

    // RMMV static function not present in the default RMMZ codebase
    static _wrapNwjsAlert() {
        if (Utils.isNwjs()) {
            var _alert = window.alert;
            window.alert = function() {
                var gui = require('nw.gui');
                var win = gui.Window.get();
                _alert.apply(this, arguments);
                win.focus();
                Input.clear();
            };
        }
    }
    //

} // Input

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

    // RMMV static function not present in the default RMMZ codebase
    static _onPointerDown(event) {
        if (event.pointerType === 'touch' && !event.isPrimary) {
            var x = Graphics.pageToCanvasX(event.pageX);
            var y = Graphics.pageToCanvasY(event.pageY);
            if (Graphics.isInsideCanvas(x, y)) {
                // For Microsoft Edge
                this._onCancel(x, y);
                event.preventDefault();
            }
        }
    }
    //

} // TouchInput

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
 *    # New class: CacheEntry
 *      - A RMMV class not present in the default RMMZ codebase
 *----------------------------------------------------------------------------*/

class CacheEntry {

    constructor(cache, key, item) {
        this.cache = cache;
        this.key = key;
        this.item = item;
        this.cached = false;
        this.touchTicks = 0;
        this.touchSeconds = 0;
        this.ttlTicks = 0;
        this.ttlSeconds = 0;
        this.freedByTTL = false;
    }

    free(byTTL) {
        this.freedByTTL = byTTL || false;
        if (this.cached) {
            this.cached = false;
            delete this.cache._inner[this.key];
        }
    }

    allocate() {
        if (!this.cached) {
            this.cache._inner[this.key] = this;
            this.cached = true;
        }
        this.touch();
        return this;
    }

    setTimeToLive(ticks, seconds) {
        this.ttlTicks = ticks || 0;
        this.ttlSeconds = seconds || 0;
        return this;
    }

    isStillAlive() {
        var cache = this.cache;
        return ((this.ttlTicks == 0) || (this.touchTicks + this.ttlTicks < cache.updateTicks )) &&
            ((this.ttlSeconds == 0) || (this.touchSeconds + this.ttlSeconds < cache.updateSeconds ));
    }

    touch() {
        var cache = this.cache;
        if (this.cached) {
            this.touchTicks = cache.updateTicks;
            this.touchSeconds = cache.updateSeconds;
        } else if (this.freedByTTL) {
            this.freedByTTL = false;
            if (!cache._inner[this.key]) {
                cache._inner[this.key] = this;
            }
        }
    }

}

/*----------------------------------------------------------------------------
 *    # New class: CacheMap
 *      - A RMMV class not present in the default RMMZ codebase
 *----------------------------------------------------------------------------*/

class CacheMap {

    constructor(manager) {
        this.manager = manager;
        this._inner = {};
        this._lastRemovedEntries = {};
        this.updateTicks = 0;
        this.lastCheckTTL = 0;
        this.delayCheckTTL = 100.0;
        this.updateSeconds = Date.now();
    }

    checkTTL() {
        var cache = this._inner;
        var temp = this._lastRemovedEntries;
        if (!temp) {
            temp = [];
            this._lastRemovedEntries = temp;
        }
        for (var key in cache) {
            var entry = cache[key];
            if (!entry.isStillAlive()) {
                temp.push(entry);
            }
        }
        for (var i = 0; i < temp.length; i++) {
            temp[i].free(true);
        }
        temp.length = 0;
    }

    getItem(key) {
        var entry = this._inner[key];
        if (entry) {
            return entry.item;
        }
        return null;
    }

    clear() {
        var keys = Object.keys(this._inner);
        for (var i = 0; i < keys.length; i++) {
            this._inner[keys[i]].free();
        }
    }

    setItem(key, item) {
        return new CacheEntry(this, key, item).allocate();
    }

    update(ticks, delta) {
        this.updateTicks += ticks;
        this.updateSeconds += delta;
        if (this.updateSeconds >= this.delayCheckTTL + this.lastCheckTTL) {
            this.lastCheckTTL = this.updateSeconds;
            this.checkTTL();
        }
    }

}

/*----------------------------------------------------------------------------
 *    # New class: ImageCache
 *      - A RMMV class not present in the default RMMZ codebase
 *----------------------------------------------------------------------------*/

class ImageCache {

    constructor() {
        this._items = {};
    }

    static limit = 10 * 1000 * 1000;

    initialize(){
        this._items = {};
    }

    add(key, value) {
        this._items[key] = {
            bitmap: value,
            touch: Date.now(),
            key: key
        };

        this._truncateCache();
    }

    get(key) {
        if(this._items[key]){
            var item = this._items[key];
            item.touch = Date.now();
            return item.bitmap;
        }

        return null;
    }

    reserve(key, value, reservationId) {
        if(!this._items[key]){
            this._items[key] = {
                bitmap: value,
                touch: Date.now(),
                key: key
            };
        }

        this._items[key].reservationId = reservationId;
    }

    releaseReservation(reservationId) {
        var items = this._items;

        Object.keys(items)
            .map(function(key){return items[key];})
            .forEach(function(item){
                if(item.reservationId === reservationId){
                    delete item.reservationId;
                }
            });
    }

    _truncateCache() {
        var items = this._items;
        var sizeLeft = ImageCache.limit;

        Object.keys(items).map(function(key){
            return items[key];
        }).sort(function(a, b){
            return b.touch - a.touch;
        }).forEach(function(item){
            if(sizeLeft > 0 || this._mustBeHeld(item)){
                var bitmap = item.bitmap;
                sizeLeft -= bitmap.width * bitmap.height;
            }else{
                delete items[item.key];
            }
        }.bind(this));
    }

    _mustBeHeld(item) {
        // request only is weak so It's purgeable
        if(item.bitmap.isRequestOnly()) return false;
        // reserved item must be held
        if(item.reservationId) return true;
        // not ready bitmap must be held (because of checking isReady())
        if(!item.bitmap.isReady()) return true;
        // then the item may purgeable
        return false;
    }

    isReady() {
        var items = this._items;
        return !Object.keys(items).some(function(key){
            return !items[key].bitmap.isRequestOnly() && !items[key].bitmap.isReady();
        });
    }

    getErrorBitmap() {
        var items = this._items;
        var bitmap = null;
        if(Object.keys(items).some(function(key){
                if(items[key].bitmap.isError()){
                    bitmap = items[key].bitmap;
                    return true;
                }
                return false;
            })) {
            return bitmap;
        }

        return null;
    }

}

/*----------------------------------------------------------------------------
 *    # New class: RequestQueue
 *      - A RMMV class not present in the default RMMZ codebase
 *----------------------------------------------------------------------------*/

class RequestQueue {

    constructor() {
        this._queue = [];
    }

    enqueue(key, value) {
        this._queue.push({
            key: key,
            value: value,
        });
    }

    update() {
        if(this._queue.length === 0) return;

        var top = this._queue[0];
        if(top.value.isRequestReady()){
            this._queue.shift();
            if(this._queue.length !== 0){
                this._queue[0].value.startRequest();
            }
        }else{
            top.value.startRequest();
        }
    }

    raisePriority(key) {
        for(var n = 0; n < this._queue.length; n++){
            var item = this._queue[n];
            if(item.key === key){
                this._queue.splice(n, 1);
                this._queue.unshift(item);
                break;
            }
        }
    }

    clear() {
        this._queue.splice(0);
    }

}

/*----------------------------------------------------------------------------
 *    # New class: ToneFilter
 *      - A RMMV class not present in the default RMMZ codebase
 *----------------------------------------------------------------------------*/

class ToneFilter extends PIXI.filters.ColorMatrixFilter {

    adjustHue(value) {
        this.hue(value, true);
    }

    adjustSaturation(value) {
        value = (value || 0).clamp(-255, 255) / 255;
        this.saturate(value, true);
    }

    adjustTone(r, g, b) {
        r = (r || 0).clamp(-255, 255) / 255;
        g = (g || 0).clamp(-255, 255) / 255;
        b = (b || 0).clamp(-255, 255) / 255;

        if (r !== 0 || g !== 0 || b !== 0) {
            var matrix = [
                1, 0, 0, r, 0,
                0, 1, 0, g, 0,
                0, 0, 1, b, 0,
                0, 0, 0, 1, 0
            ];

            this._loadMatrix(matrix, true);
        }
    }

}
// Just to play safe in case of plugin extending PIXI.filters.ColorMatrixFilter
ES6ExtendedClassAlias.inherit(ToneFilter);
//

/*----------------------------------------------------------------------------
 *    # New class: ToneSprite
 *      - A RMMV class not present in the default RMMZ codebase
 *----------------------------------------------------------------------------*/

class ToneSprite extends PIXI.Container {

    constructor() {
        super();
        this.clear();
    }

    clear() {
        this._red = 0;
        this._green = 0;
        this._blue = 0;
        this._gray = 0;
    }

    setTone(r, g, b, gray) {
        this._red = Math.round(r || 0).clamp(-255, 255);
        this._green = Math.round(g || 0).clamp(-255, 255);
        this._blue = Math.round(b || 0).clamp(-255, 255);
        this._gray = Math.round(gray || 0).clamp(0, 255);
    }

    _renderCanvas(renderer) {
        if (this.visible) {
            var context = renderer.context;
            var t = this.worldTransform;
            var r = renderer.resolution;
            var width = Graphics.width;
            var height = Graphics.height;
            context.save();
            context.setTransform(t.a, t.b, t.c, t.d, t.tx * r, t.ty * r);
            if (Graphics.canUseSaturationBlend() && this._gray > 0) {
                context.globalCompositeOperation = 'saturation';
                context.globalAlpha = this._gray / 255;
                context.fillStyle = '#ffffff';
                context.fillRect(0, 0, width, height);
            }
            context.globalAlpha = 1;
            var r1 = Math.max(0, this._red);
            var g1 = Math.max(0, this._green);
            var b1 = Math.max(0, this._blue);
            if (r1 || g1 || b1) {
                context.globalCompositeOperation = 'lighter';
                context.fillStyle = Utils.rgbToCssColor(r1, g1, b1);
                context.fillRect(0, 0, width, height);
            }
            if (Graphics.canUseDifferenceBlend()) {
                var r2 = Math.max(0, -this._red);
                var g2 = Math.max(0, -this._green);
                var b2 = Math.max(0, -this._blue);
                if (r2 || g2 || b2) {
                    context.globalCompositeOperation = 'difference';
                    context.fillStyle = '#ffffff';
                    context.fillRect(0, 0, width, height);
                    context.globalCompositeOperation = 'lighter';
                    context.fillStyle = Utils.rgbToCssColor(r2, g2, b2);
                    context.fillRect(0, 0, width, height);
                    context.globalCompositeOperation = 'difference';
                    context.fillStyle = '#ffffff';
                    context.fillRect(0, 0, width, height);
                }
            }
            context.restore();
        }
    }

    _renderWebGL(renderer) {

    }

}
// It's just to play safe in case of any plugin extending PIXI.Container in ES6
ES6ExtendedClassAlias.inherit(ToneSprite);
//

/*----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------
 *    ## Managers
 *----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------
 *    # Rewritten class: DataManager
 *      - Rewrites it into the ES6 standard
 *----------------------------------------------------------------------------*/

//-----------------------------------------------------------------------------
// DataManager
//
// The static class that manages the database and game objects.

// They can't use let as they must be attached to the global window object
$dataActors = $dataClasses = $dataSkills = $dataItems = null;
$dataStates = $dataAnimations = $dataTilesets = $dataCommonEvents = null;
$dataSystem = $dataMapInfos = $dataMap = null;
$gameTemp = $gameSystem = $gameScreen = $gameTimer = $gameMessage = null;
$gameSwitches = $gameVariables = $gameSelfSwitches = null;
$gameActors = $gameParty = $gameTroop = $gameMap = $gamePlayer = null;
$testEvent = null;
//

class DataManager {

    constructor() { throw new Error("This is a static class"); }

    static _globalInfo = null;
    static _errors = [];

    static _databaseFiles = [
        { name: "$dataActors", src: "Actors.json" },
        { name: "$dataClasses", src: "Classes.json" },
        { name: "$dataSkills", src: "Skills.json" },
        { name: "$dataItems", src: "Items.json" },
        { name: "$dataWeapons", src: "Weapons.json" },
        { name: "$dataArmors", src: "Armors.json" },
        { name: "$dataEnemies", src: "Enemies.json" },
        { name: "$dataTroops", src: "Troops.json" },
        { name: "$dataStates", src: "States.json" },
        { name: "$dataAnimations", src: "Animations.json" },
        { name: "$dataTilesets", src: "Tilesets.json" },
        { name: "$dataCommonEvents", src: "CommonEvents.json" },
        { name: "$dataSystem", src: "System.json" },
        { name: "$dataMapInfos", src: "MapInfos.json" }
    ]; // _databaseFiles

    static loadGlobalInfo() {
        StorageManager.loadObject("global").then(globalInfo => {
            // Edited to help plugins alter load global info in better ways
            this._loadGlobalInfoSuc(globalInfo);
            //
            return 0;
        }).catch(() => this._globalInfo = []);
    } // loadGlobalInfo

    static removeInvalidGlobalInfo() {
        const globalInfo = this._globalInfo;
        for (const info of globalInfo) {
            const savefileId = globalInfo.indexOf(info);
            if (!this.savefileExists(savefileId)) delete globalInfo[savefileId];
        }
    } // removeInvalidGlobalInfo

    static saveGlobalInfo() {
        StorageManager.saveObject("global", this._globalInfo);
    } // saveGlobalInfo

    static isGlobalInfoLoaded() { return !!this._globalInfo; }

    static loadDatabase() {
        const test = this.isBattleTest() || this.isEventTest();
        const prefix = test ? "Test_" : "";
        this._databaseFiles.forEach(({ name, src }) => {
            this.loadDataFile(name, `${prefix}${src}`);
        });
        if (!this.isEventTest()) return;
        this.loadDataFile("$testEvent", `${prefix}Event.json`);
    } // loadDatabase

    static loadDataFile(name, src) {
        window[name] = null;
        // Edited to help plugins alter load data file behaviors in better ways
        this._loadDataFileXhr(name, src).send();
        //
    } // loadDataFile

    static onXhrLoad(xhr, name, src, url) {
        // Edited to help plugins alter load xhr behaviors in better ways
        if (xhr.status < 400) return this._onXhrLoadSuc(xhr, name);
        //
        this.onXhrError(name, src, url);
    } // onXhrLoad

    static onXhrError(name, src, url) { this._errors.push({ name, src, url }); }

    static isDatabaseLoaded() {
        this.checkError();
        return this._databaseFiles.every(({ name }) => window[name]);
    } // isDatabaseLoaded

    static loadMapData(mapId) {
        if (mapId <= 0) return this.makeEmptyMap();
        // Edited to help plugins alter load map data behaviors in better ways
        this.loadDataFile("$dataMap", this._mapFilename(mapId));
        //
    } // loadMapData

    // Edited to help plugins alter empty map behaviors in better ways
    static makeEmptyMap() { $dataMap = this._newEmptyMap(); }
    //

    static isMapLoaded() {
        this.checkError();
        return !!$dataMap;
    } // isMapLoaded

    static onLoad(object) {
        // Edited to help plugins alter on load behaviors in better ways
        if (this.isMapObject(object)) return this._onloadMapObj(object);
        this.extractArrayMetadata(object);
        //
    } // onLoad

    static isMapObject(object) { return !!(object.data && object.events); }

    static extractArrayMetadata(array) {
        if (Array.isArray(array)) array.forEach(data => {
            if (data && "note" in data) this.extractMetadata(data);
        });
    } // extractArrayMetadata

    static extractMetadata(data) {
        const regExp = /<([^<>:]+)(:?)([^>]*)>/g;
        data.meta = {};
        for (;;) {
            const match = regExp.exec(data.note);
            if (!match) break;
            data.meta[match[1]] = match[2] === ":" ? match[3] : true;
        }
    } // extractMetadata

    static checkError() {
        if (this._errors.isEmpty()) return;
        const { name, src, url } = this._errors.shift();
        throw ["LoadError", url, this.loadDataFile.bind(this, name, src)];
    } // checkError

    static isBattleTest() { return Utils.isOptionValid("btest"); }

    static isEventTest() { return Utils.isOptionValid("etest"); }

    static isSkill(item) { return item && $dataSkills.includes(item); }

    static isItem(item) { return item && $dataItems.includes(item); }

    static isWeapon(item) { return item && $dataWeapons.includes(item); }

    static isArmor(item) { return item && $dataArmors.includes(item); }

    static createGameObjects() {
        [$gameTemp, $gameSystem] = [new Game_Temp(), new Game_System()];
        [$gameScreen, $gameTimer] = [new Game_Screen(), new Game_Timer()];
        $gameMessage = new Game_Message();
        $gameSwitches = new Game_Switches();
        $gameVariables = new Game_Variables();
        $gameSelfSwitches = new Game_SelfSwitches();
        $gameActors = new Game_Actors();
        [$gameParty, $gameTroop] = [new Game_Party(), new Game_Troop()];
        [$gameMap, $gamePlayer] = [new Game_Map(), new Game_Player()];
    } // createGameObjects

    static setupNewGame() {
        this.createGameObjects();
        this.selectSavefileForNewGame();
        $gameParty.setupStartingMembers();
        $gamePlayer.setupForNewGame();
        Graphics.frameCount = 0;
    } // setupNewGame

    static setupBattleTest() {
        this.createGameObjects();
        $gameParty.setupBattleTest();
        /** @todo Extracts these codes into well-named BattleManager function */
        BattleManager.setup($dataSystem.testTroopId, true, false);
        BattleManager.setBattleTest(true);
        BattleManager.playBattleBgm();
        //
    } // setupBattleTest

    static setupEventTest() {
        this.createGameObjects();
        this.selectSavefileForNewGame();
        $gameParty.setupStartingMembers();
        $gamePlayer.reserveTransfer(-1, 8, 6);
        $gamePlayer.setTransparent(false);
    } // setupEventTest

    static isAnySavefileExists() { return this._globalInfo.some(x => x); }

    static latestSavefileId() {
        /** @todo Dries up these codes representing identical knowledge */
        const globalInfo = this._globalInfo;
        const validInfo = globalInfo.slice(1).filter(x => x);
        const latest = Math.max(...validInfo.map(x => x.timestamp));
        const i = globalInfo.findIndex(x => x && x.timestamp === latest);
        return i > 0 ? i : 0;
        //
    } // latestSavefileId

    static earliestSavefileId() {
        /** @todo Dries up these codes representing identical knowledge */
        const globalInfo = this._globalInfo;
        const validInfo = globalInfo.slice(1).filter(x => x);
        const earliest = Math.min(...validInfo.map(x => x.timestamp));
        const i = globalInfo.findIndex(x => x && x.timestamp === earliest);
        return i > 0 ? i : 0;
        //
    } // earliestSavefileId

    static emptySavefileId() {
        const globalInfo = this._globalInfo, l = globalInfo.length;
        const maxSavefiles = this.maxSavefiles();
        if (l < maxSavefiles) return Math.max(1, l);
        const i = globalInfo.slice(1).findIndex(x => !x);
        return i >= 0 ? i + 1 : -1;
    } // emptySavefileId

    static loadAllSavefileImages() {
        this._globalInfo.forEach(info => {
            if (info) this.loadSavefileImages(info);
        });
    } // loadAllSavefileImages

    static loadSavefileImages(info) {
        // Edited to help plugins alter load save file images in better ways
        this._loadSaveFileCharImgs(info.characters);
        this._loadSaveFileFaceImgs(info.faces);
        //
    } // loadSavefileImages

    static maxSavefiles() { return 20; }

    static savefileInfo(savefileId) {
        const globalInfo = this._globalInfo;
        return globalInfo[savefileId] ? globalInfo[savefileId] : null;
    } // savefileInfo

    static savefileExists(savefileId) {
        return StorageManager.exists(this.makeSavename(savefileId));
    } // savefileExists

    static saveGame(savefileId) {
        const contents = this.makeSaveContents();
        const saveName = this.makeSavename(savefileId);
        return StorageManager.saveObject(saveName, contents).then(() => {
            // Edited to help plugins alter save game behaviors in better ways
            this._onSaveGameSuc(savefileId);
            //
            return 0;
        });
    } // saveGame

    static loadGame(savefileId) {
        const saveName = this.makeSavename(savefileId);
        return StorageManager.loadObject(saveName).then(contents => {
            // Edited to help plugins alter load game behaviors in better ways
            this._onLoadGameSuc(contents);
            //
            return 0;
        });
    } // loadGame

    static makeSavename(savefileId) { return "file%1".format(savefileId); }

    static selectSavefileForNewGame() {
        const emptySavefileId = this.emptySavefileId();
        if (emptySavefileId > 0) {
            $gameSystem.setSavefileId(emptySavefileId);
        } else $gameSystem.setSavefileId(this.earliestSavefileId());
    } // selectSavefileForNewGame

    static makeSavefileInfo() {
        return {
            title: $dataSystem.gameTitle,
            characters: $gameParty.charactersForSavefile(),
            faces: $gameParty.facesForSavefile(),
            playtime: $gameSystem.playtimeText(),
            timestamp: Date.now()
        };
    } // makeSavefileInfo

    static makeSaveContents() {
        // A save data does not contain $gameTemp, $gameMessage, and $gameTroop.
        return {
            system: $gameSystem,
            screen: $gameScreen,
            timer: $gameTimer,
            switches: $gameSwitches,
            variables: $gameVariables,
            selfSwitches: $gameSelfSwitches,
            actors: $gameActors,
            party: $gameParty,
            map: $gameMap,
            player: $gamePlayer
        };
    } // makeSaveContents

    static extractSaveContents(contents) {
        [$gameSystem, $gameScreen] = [contents.system, contents.screen];
        $gameTimer = contents.timer;
        $gameSwitches = contents.switches;
        $gameVariables = contents.variables;
        $gameSelfSwitches = contents.selfSwitches;
        [$gameActors, $gameParty] = [contents.actors, contents.party];
        [$gameMap, $gamePlayer] = [contents.map, contents.player];
    } // extractSaveContents

    static correctDataErrors() { $gameParty.removeInvalidMembers(); }

    /**
     * Triggers events upon successfully loading the global information
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {[SaveInfo]} globalInfo - Check makeSavefileInfo for details
     */
    static _loadGlobalInfoSuc(globalInfo) {
        this._globalInfo = globalInfo;
        this.removeInvalidGlobalInfo();
    } // _loadGlobalInfoSuc

    /**
     * Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {string} name - The name of the global data contents container
     * @param {string} src - The name of data json file to be loaded
     * @returns {XMLHttpRequest} The GET XMLHttpRequest loading data json file
     */
    static _loadDataFileXhr(name, src) {
        const [xhr, url] = [new XMLHttpRequest(), `data/${src}`];
        xhr.open("GET", url);
        xhr.overrideMimeType("application/json");
        xhr.onload = this.onXhrLoad.bind(this, xhr, name, src, url);
        xhr.onerror = this.onXhrError.bind(this, name, src, url);
        return xhr;
    } // _loadDataFileXhr

    /**
     * Triggers eevents upon successfully loading the data json file
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {XMLHttpRequest} xhr - GET XMLHttpRequest loading data json file
     * @param {string} name - The name of the global data contents container
     */
    static _onXhrLoadSuc(xhr, name) {
        window[name] = JSON.parse(xhr.responseText);
        this.onLoad(window[name]);
    } // _onXhrLoadSuc

    /**
     * Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {id} mapId - The id of the map stored in the data json file
     * @returns {string} The name of the data json file storing the map
     */
    static _mapFilename(mapId) { return "Map%1.json".format(mapId.padZero(3)); }

    /**
     * Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @returns {DataMap} The data of the empty map in the json format
     */
    static _newEmptyMap() {
        return {
            data: [],
            events: [],
            width: 100,
            height: 100,
            scrollType: 3
        };
    } // _newEmptyMap

    /**
     * Loads all the map data json file contents
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {DataMap} obj - The global map data json file contents container
     */
    static _onloadMapObj(obj) {
        this.extractMetadata(obj);
        this.extractArrayMetadata(obj.events);
    } // _onloadMapObj

    /**
     * Loads all the save file character images
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {[Image]} chars - The list of loaded save file character images
     */
    static _loadSaveFileCharImgs(chars) {
        if (!chars || !Symbol.iterator in chars) return;
        chars.forEach(char => ImageManager.loadCharacter(char[0]));
    } // _loadSaveFileCharImgs

    /**
     * Loads all the save file face images
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {[Image]} faces - The list of loaded save file face images
     */
    static _loadSaveFileFaceImgs(faces) {
        if (!faces || !Symbol.iterator in faces) return;
        faces.forEach(face => ImageManager.loadFace(face[0]));
    } // _loadSaveFileFaceImgs

    /**
     * Triggers eevents upon successfully saving the game file
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {id} savefileId - The id of the successfully saved game file
     */
    static _onSaveGameSuc(savefileId) {
        this._globalInfo[savefileId] = this.makeSavefileInfo();
        this.saveGlobalInfo();
    } // _onSaveGameSuc

    /**
     * Triggers eevents upon successfully loading the game file
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {SaveFile} contents - Check makeSaveContents for details
     */
    static _onLoadGameSuc(contents) {
        this.createGameObjects();
        this.extractSaveContents(contents);
        this.correctDataErrors();
    } // _onLoadGameSuc

    // RMMV static variable not present in the default RMMZ codebase
    static _lastAccessedId = 1;
    //

    // RMMV static functions not present in the default RMMZ codebase
    static isThisGameFile(savefileId) {
        var globalInfo = this.loadGlobalInfo();
        if (globalInfo && globalInfo[savefileId]) {
            if (StorageManager.isLocalMode()) {
                return true;
            } else {
                var savefile = globalInfo[savefileId];
                return (savefile.globalId === this._globalId &&
                        savefile.title === $dataSystem.gameTitle);
            }
        } else {
            return false;
        }
    }

    static loadSavefileInfo(savefileId) {
        var globalInfo = this.loadGlobalInfo();
        return (globalInfo && globalInfo[savefileId]) ? globalInfo[savefileId] : null;
    }

    static lastAccessedSavefileId() {
        return this._lastAccessedId;
    }

    static saveGameWithoutRescue(savefileId) {
        var json = JsonEx.stringify(this.makeSaveContents());
        if (json.length >= 200000) {
            console.warn('Save data too big!');
        }
        StorageManager.save(savefileId, json);
        this._lastAccessedId = savefileId;
        var globalInfo = this.loadGlobalInfo() || [];
        globalInfo[savefileId] = this.makeSavefileInfo();
        this.saveGlobalInfo(globalInfo);
        return true;
    }

    static loadGameWithoutRescue(savefileId) {
        var globalInfo = this.loadGlobalInfo();
        if (this.isThisGameFile(savefileId)) {
            var json = StorageManager.load(savefileId);
            this.createGameObjects();
            this.extractSaveContents(JsonEx.parse(json));
            this._lastAccessedId = savefileId;
            return true;
        } else {
            return false;
        }
    }
    //

} // DataManager

/*----------------------------------------------------------------------------
 *    # Rewritten class: ConfigManager
 *      - Rewrites it into the ES6 standard
 *----------------------------------------------------------------------------*/

//-----------------------------------------------------------------------------
// ConfigManager
//
// The static class that manages the configuration data.

class ConfigManager {

    constructor() { throw new Error("This is a static class"); }

    static alwaysDash = false;
    static commandRemember = false;
    static touchUI = true;
    static _isLoaded = false;

    get bgmVolume() { return AudioManager._bgmVolume; }
    get bgmVolume(value) { AudioManager.bgmVolume = value; }

    get bgsVolume() { return AudioManager.bgsVolume; }
    set bgsVolume(value) { AudioManager.bgsVolume = value; }

    get meVolume() { return AudioManager.meVolume; }
    set meVolume(value) { AudioManager.meVolume = value; }

    get seVolume() { return AudioManager.seVolume; }
    set seVolume(value) { AudioManager.seVolume = value; }

    static load() {
        StorageManager.loadObject("config").then(config => {
            this.applyData(config || {});
        }).catch(() => 0).then(() => {
            this._isLoaded = true;
            return 0;
        }).catch(() => 0);
    } // load

    static save() { StorageManager.saveObject("config", this.makeData()); }

    static isLoaded() { return this._isLoaded; }

    static makeData() {
        const config = {};
        config.alwaysDash = this.alwaysDash;
        config.commandRemember = this.commandRemember;
        config.touchUI = this.touchUI;
        [config.bgmVolume, config.bgsVolume] = [this.bgmVolume, this.bgsVolume];
        [config.meVolume, config.seVolume] = [this.meVolume, this.seVolume];
        return config;
    } // makeData

    static applyData(config) {
        this.alwaysDash = this.readFlag(config, "alwaysDash", false);
        this.commandRemember = this.readFlag(config, "commandRemember", false);
        this.touchUI = this.readFlag(config, "touchUI", true);
        this.bgmVolume = this.readVolume(config, "bgmVolume");
        this.bgsVolume = this.readVolume(config, "bgsVolume");
        this.meVolume = this.readVolume(config, "meVolume");
        this.seVolume = this.readVolume(config, "seVolume");
    } // applyData

    static readFlag(config, name, defaultValue) {
        return name in config ? !!config[name] : defaultValue;
    } // readFlag

    static readVolume(config, name) {
        return name in config ? Number(config[name]).clamp(0, 100) : 100;
    } // readVolume

} // ConfigManager

/*----------------------------------------------------------------------------
 *    # Rewritten class: StorageManager
 *      - Rewrites it into the ES6 standard
 *----------------------------------------------------------------------------*/

//-----------------------------------------------------------------------------
// StorageManager
//
// The static class that manages storage for saving game data.
class StorageManager {

    constructor() { throw new Error("This is a static class"); }

    static _forageKeys = [];
    static _forageKeysUpdated = false;

    static isLocalMode() { return Utils.isNwjs(); }

    static saveObject(saveName, object) {
        return this.objectToJson(object)
            .then(this.jsonToZip.bind(this))
            .then(zip => this.saveZip(saveName, zip));
    } // saveObject

    static loadObject(saveName) {
        return this.loadZip(saveName)
            .then(this.zipToJson.bind(this))
            .then(this.jsonToObject.bind(this));
    } // loadObject

    static objectToJson(object) {
        return new Promise((resolve, reject) => {
            try { resolve(JsonEx.stringify(object)); } catch (e) { reject(e); }
        });
    } // objectToJson

    static jsonToObject(json) {
        return new Promise((resolve, reject) => {
            try { resolve(JsonEx.parse(json)); } catch (e) { reject(e); }
        });
    } // jsonToObject

    static jsonToZip(json) {
        return new Promise((resolve, reject) => {
            try {
                // Edited to help plugins alter json to zip in better ways
                const zip = this._zipFromJson(json);
                this._checkSaveDataSize(zip);
                //
                resolve(zip);
            } catch (e) { reject(e); }
        });
    } // jsonToZip

    static zipToJson(zip) {
        return new Promise((resolve, reject) => {
            try {
                // Edited to help plugins alter zip to json in better ways
                if (zip) return resolve(this._jsonFromZip(zip));
                //
                resolve("null");
            } catch (e) {
                reject(e);
            }
        });
    } // zipToJson

    static saveZip(saveName, zip) {
        if (this.isLocalMode()) return this.saveToLocalFile(saveName, zip);
        return this.saveToForage(saveName, zip);
    } // saveZip

    static loadZip(saveName) {
        if (this.isLocalMode()) return this.loadFromLocalFile(saveName);
        return this.loadFromForage(saveName);
    } // loadZip

    static exists(saveName) {
        if (this.isLocalMode()) return this.localFileExists(saveName);
        return this.forageExists(saveName);
    } // exists

    static remove(saveName) {
        if (this.isLocalMode()) return this.removeLocalFile(saveName);
        return this.removeForage(saveName);
    } // remove

    static saveToLocalFile(saveName, zip) {
        const filePath = this.filePath(saveName);
        const backupFilePath = `${filePath}_`;
        return new Promise((resolve, reject) => {
            // Edited to help plugins alter save to local file in better ways
            this._onPrepareSaveToLocalFile(filePath, backupFilePath);
            try {
                this._onSaveToLocalFileWithoutRescue(zip, filePath, backupFilePath);
                resolve();
            } catch (e) {
                this._onTryRollbackFailedLocalFileSave(filePath, backupFilePath);
                reject(e);
            }
            //
        });
    } // saveToLocalFile

    static loadFromLocalFile(saveName) {
        return new Promise((resolve, reject) => {
            // It's almost immediately run so file path can be called here
            const data = this.fsReadFile(this.filePath(saveName));
            //
            data ? resolve(data) : reject(new Error("Savefile not found"));
        });
    } // loadFromLocalFile

    static localFileExists(saveName) {
        return require("fs").existsSync(this.filePath(saveName));
    } // localFileExists

    static removeLocalFile(saveName) { this.fsUnlink(this.filePath(saveName)); }

    static saveToForage(saveName, zip) {
        const testKey = this.forageTestKey();
        setTimeout(localforage.removeItem.bind(this, testKey));
        return localforage
            .setItem(testKey, zip)
            .then(localforage.setItem(this.forageKey(saveName), zip))
            .then(this.updateForageKeys());
    } // saveToForage

    static loadFromForage(saveName) {
        return localforage.getItem(this.forageKey(saveName));
    } // loadFromForage

    static forageExists(saveName) {
        return this._forageKeys.includes(this.forageKey(saveName));
    } // forageExists

    static removeForage(saveName) {
        const key = this.forageKey(saveName);
        return localforage.removeItem(key).then(this.updateForageKeys());
    } // removeForage

    static updateForageKeys() {
        this._forageKeysUpdated = false;
        return localforage.keys().then(keys => {
            // Edited to help plugins alter update forage keys in better ways
            this._onUpdateForageKeySuc(keys);
            //
            return 0;
        });
    } // updateForageKeys

    static forageKeysUpdated() { return this._forageKeysUpdated; }

    static fsMkdir(path) {
        const fs = require("fs");
        if (!fs.existsSync(path)) fs.mkdirSync(path);
    } // fsMkdir

    static fsRename(oldPath, newPath) {
        const fs = require("fs");
        if (fs.existsSync(oldPath)) fs.renameSync(oldPath, newPath);
    } // fsRename

    static fsUnlink(path) {
        const fs = require("fs");
        if (fs.existsSync(path)) fs.unlinkSync(path);
    } // fsUnlink

    static fsReadFile(path) {
        const fs = require("fs");
        if (!fs.existsSync(path)) return null;
        return fs.readFileSync(path, { encoding: "utf8" });
    } // fsReadFile

    static fsWriteFile(path, data) { require("fs").writeFileSync(path, data); }

    static fileDirectoryPath() {
        const path = require("path");
        return path.join(path.dirname(process.mainModule.filename), "save/");
    } // fileDirectoryPath

    static filePath(saveName) {
        return `${this.fileDirectoryPath()}${saveName}.rmmzsave`;
    } // filePath

    static forageKey(saveName) {
        return `rmmzsave.${$dataSystem.advanced.gameId}.${saveName}`;
    } // forageKey

    static forageTestKey() { return "rmmzsave.test"; }

    /**
     * Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {json} json - The json string save data to the compressed
     * @returns {Uint8Array|Array} The compressed zip from the json string data
     */
    static _zipFromJson(json) {
        return pako.deflate(json, { to: "string", level: 1 });
    } // _zipFromJson

    /**
     * Checks whether the compressed save data size's okay
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {Uint8Array|Array} zip - Zipped save data to have its size checked
     */
    static _checkSaveDataSize(zip) {
        /** @todo Figures out where does 50000 come from */
        if (zip.length >= 50000) console.warn("Save data is too big.");
    } // _checkSaveDataSize

    /**
     * Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {Uint8Array|Array} zip - The zipped save data to be decompressed
     * @returns {json} The decompressed json string from the compressed zip
     */
    static _jsonFromZip(zip) { return pako.inflate(zip, { to: "string" }) }

    /**
     * Prepares to save the compressed local file with the test counterpart
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {string} filePath - The real file path of the local save file
     * @param {string} backupFilePath - The test file path of the save file
     */
    static _onPrepareSaveToLocalFile(filePath, backupFilePath) {
        // It's almost immediately called after saveToLocalFile so it's ok here
        this.fsMkdir(this.fileDirectoryPath());
        //
        this.fsUnlink(backupFilePath);
        this.fsRename(filePath, backupFilePath);
    } // _onPrepareSaveToLocalFile

    /**
     * This function shouldn't be called without a try and catch
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {Uint8Array|Array} zip - The zipped save data to be saved locally
     * @param {string} filePath - The real file path of the local save file
     * @param {string} backupFilePath - The test file path of the save file
     */
    static _onSaveToLocalFileWithoutRescue(zip, filePath, backupFilePath) {
        this.fsWriteFile(filePath, zip);
        this.fsUnlink(backupFilePath);
    } // _onSaveToLocalFileWithoutRescue

    /**
     * Tries to rollback the failed local file save attempt
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {string} filePath - The real file path of the local save file
     * @param {string} backupFilePath - The test file path of the save file
     */
    static _onTryRollbackFailedLocalFileSave(filePath, backupFilePath) {
        /** @todo Thinks of if at least logging the catch will be better */
        try {
            this._onRollbackFailedLocalFileSaveWithouRescue(filePath, backupFilePath);
        } catch (e2) {}
        //
    } // _onTryRollbackFailedLocalFileSave

    /**
     * This function shouldn't be called without a try and catch
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {string} filePath - The real file path of the local save file
     * @param {string} backupFilePath - The test file path of the save file
     */
    static _onRollbackFailedLocalFileSaveWithouRescue(filePath, backupFilePath) {
        this.fsUnlink(filePath);
        this.fsRename(backupFilePath, filePath);
    } // _onRollbackFailedLocalFileSaveWithouRescue

    /**
     * Triggers events to happen upon successfully updating the forage key
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {[string]} keys - The updated forage key list with updated keys
     */
    static _onUpdateForageKeySuc(keys) {
        [this._forageKeys, this._forageKeysUpdated] = [keys, true];
    } // _onUpdateForageKeySuc
    
    // RMMV static functions not present in the default RMMZ codebase
    static localFileBackupExists(savefileId) {
        var fs = require('fs');
        return fs.existsSync(this.localFilePath(savefileId) + ".bak");
    }

    static webStorageBackupExists(savefileId) {
        var key = this.webStorageKey(savefileId) + "bak";
        return !!localStorage.getItem(key);
    }

    static webStorageExists(savefileId) {
        var key = this.webStorageKey(savefileId);
        return !!localStorage.getItem(key);
    }

    static removeWebStorage(savefileId) {
        var key = this.webStorageKey(savefileId);
        localStorage.removeItem(key);
    }

    static localFileDirectoryPath() {
        var path = require('path');
    
        var base = path.dirname(process.mainModule.filename);
        return path.join(base, 'save/');
    }

    static localFilePath(savefileId) {
        var name;
        if (savefileId < 0) {
            name = 'config.rpgsave';
        } else if (savefileId === 0) {
            name = 'global.rpgsave';
        } else {
            name = 'file%1.rpgsave'.format(savefileId);
        }
        return this.localFileDirectoryPath() + name;
    }

    static webStorageKey(savefileId) {
        if (savefileId < 0) {
            return 'RPG Config';
        } else if (savefileId === 0) {
            return 'RPG Global';
        } else {
            return 'RPG File%1'.format(savefileId);
        }
    }
    //

} // StorageManager

/*----------------------------------------------------------------------------
 *    # Rewritten class: FontManager
 *      - Rewrites it into the ES6 standard
 *----------------------------------------------------------------------------*/

//-----------------------------------------------------------------------------
// FontManager
//
// The static class that loads font files.

class FontManager {

    constructor() { throw new Error("This is a static class"); }

    static _urls = {};
    static _states = {};

    static load(family, filename) {
        if (this._states[family] === "loaded") return;
        if (filename) return this.startLoading(family, this.makeUrl(filename));
        [this._urls[family], this._states[family]] = ["", "loaded"];
    } // load

    static isReady() {
        for (const family in this._states) {
            const state = this._states[family];
            if (state === "loading") return false;
            if (state === "error") this.throwLoadError(family);
        }
        return true;
    } // isReady

    static startLoading(family, url) {
        // Edited to help plugins alter start loading behaviors in better ways
        const font = new FontFace(family, this._fontFaceSource(url));
        [this._urls[family], this._states[family]] = [url, "loading"];
        font.load().then(() => {
            this._onLoadSuc(font, family);
            return 0;
        }).catch(() => this._onLoadErr(family));
        //
    } // startLoading

    static throwLoadError(family) {
        const url = this._urls[family];
        throw ["LoadError", url, this.startLoading.bind(this, family, url)];
    } // throwLoadError

    static makeUrl(filename) { return `fonts/${Utils.encodeURI(filename)}`; }

    /**
     * Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {string} url - The source url of the font face to be loaded
     * @returns {string} The source of the font face to be loaded
     */
    static _fontFaceSource(url) { return `url(${url})`; }

    /**
     * Triggers events upon successfully loading the specified font face
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {string} font - The font face just being successfully loaded
     * @param {string} family - The family owning the specified font face
     */
    static _onLoadSuc(font, family) {
        document.fonts.add(font);
        this._states[family] = "loaded";
    } // _onLoadSuc

    /**
     * Triggers events upon failing to load the font face
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {string} family - The family owning the font face being loaded
     */
    static _onLoadErr(family) { this._states[family] = "error"; }

} // FontManager

/*----------------------------------------------------------------------------
 *    # Rewritten class: ImageManager
 *      - Rewrites it into the ES6 standard
 *----------------------------------------------------------------------------*/

//-----------------------------------------------------------------------------
// ImageManager
//
// The static class that loads images, creates bitmap objects and retains them.
class ImageManager {

    constructor() { throw new Error("This is a static class"); }

    static iconWidth = 32;
    static iconHeight = 32;
    static faceWidth = 144;
    static faceHeight = 144;

    static _cache = {};
    static _system = {};
    static _emptyBitmap = new Bitmap(1, 1);

    static loadAnimation(filename) {
        return this.loadBitmap("img/animations/", filename);
    } // loadAnimation

    static loadBattleback1(filename) {
        return this.loadBitmap("img/battlebacks1/", filename);
    } // loadBattleback1

    static loadBattleback2(filename) {
        return this.loadBitmap("img/battlebacks2/", filename);
    } // loadBattleback2

    static loadEnemy(filename) {
        return this.loadBitmap("img/enemies/", filename);
    } // loadEnemy

    static loadCharacter(filename) {
        return this.loadBitmap("img/characters/", filename);
    } // loadCharacter

    static loadFace(filename) {
        return this.loadBitmap("img/faces/", filename);
    } // loadFace

    static loadParallax(filename) {
        return this.loadBitmap("img/parallaxes/", filename);
    } // loadParallax

    static loadPicture(filename) {
        return this.loadBitmap("img/pictures/", filename);
    } // loadPicture

    static loadSvActor(filename) {
        return this.loadBitmap("img/sv_actors/", filename);
    } // loadSvActor

    static loadSvEnemy(filename) {
        return this.loadBitmap("img/sv_enemies/", filename);
    } // loadSvEnemy

    static loadSystem(filename) {
        return this.loadBitmap("img/system/", filename);
    } // loadSystem

    static loadTileset(filename) {
        return this.loadBitmap("img/tilesets/", filename);
    } // loadTileset

    static loadTitle1(filename) {
        return this.loadBitmap("img/titles1/", filename);
    } // loadTitle1

    static loadTitle2(filename) {
        return this.loadBitmap("img/titles2/", filename);
    } // loadTitle2

    static loadBitmap(folder, filename) {
        if (!filename) return this._emptyBitmap;
        // Edited to help plugins alter load bitmnap behaviors in better ways
        return this.loadBitmapFromUrl(this._bitmapUrl(folder, filename));
        //
    } // loadBitmap

    static loadBitmapFromUrl(url) {
        const cache = url.includes("/system/") ? this._system : this._cache;
        if (!cache[url]) cache[url] = Bitmap.load(url);
        return cache[url];
    } // loadBitmapFromUrl

    static clear() {
        const cache = this._cache;
        for (const url in cache) cache[url].destroy();
        this._cache = {};
    } // clear

    static isReady() {
        for (const cache of [this._cache, this._system]) {
            for (const url in cache) {
                const bitmap = cache[url];
                if (bitmap.isError()) this.throwLoadError(bitmap);
                if (!bitmap.isReady()) return false;
            }
        }
        return true;
    } // isReady

    static throwLoadError(bitmap) {
        throw ["LoadError", bitmap.url, bitmap.retry.bind(bitmap)];
    } // throwLoadError

    static isObjectCharacter(filename) {
        /** @todo Dries up these codes representing identical knowledge */
        const sign = filename.match(/^[!$]+/);
        return sign && sign[0].includes("!");
        //
    } // isObjectCharacter

    static isBigCharacter(filename) {
        /** @todo Dries up these codes representing identical knowledge */
        const sign = filename.match(/^[!$]+/);
        return sign && sign[0].includes("$");
        //
    } // isBigCharacter

    static isZeroParallax(filename) { return filename.charAt(0) === "!"; }

    /**
     * Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {string} folder - The relative file path of bitmap to be loaded
     * @param {string} filename - The file name of the bitmap to be loaded
     * @returns {string} The url of the bitmap to be loaded
     */
    static _bitmapUrl(folder, filename) {
        return `${folder}${Utils.encodeURI(filename)}.png`;
    } // _bitmapUrl

    // RMMV static variables not present in the default RMMZ codebase
    static cache = new CacheMap(ImageManager);

    static _imageCache = new ImageCache();
    static _requestQueue = new RequestQueue();
    static _systemReservationId = Utils.generateRuntimeId();
    //

    // RMMV static functions not present in the default RMMZ codebase
    static _generateCacheKey(path, hue) { return  path + ':' + hue; }

    static loadEmptyBitmap() {
        var empty = this._imageCache.get('empty');
        if(!empty){
            empty = new Bitmap();
            this._imageCache.add('empty', empty);
            this._imageCache.reserve('empty', empty, this._systemReservationId);
        }

        return empty;
    }

    static loadNormalBitmap(path, hue) {
        var key = this._generateCacheKey(path, hue);
        var bitmap = this._imageCache.get(key);
        if (!bitmap) {
            bitmap = Bitmap.load(decodeURIComponent(path));
            bitmap.addLoadListener(function() {
                bitmap.rotateHue(hue);
            });
            this._imageCache.add(key, bitmap);
        }else if(!bitmap.isReady()){
            bitmap.decode();
        }
        return bitmap;
    }

    static reserveAnimation(filename, hue, reservationId) {
        return this.reserveBitmap('img/animations/', filename, hue, true, reservationId);
    }

    static reserveBattleback1(filename, hue, reservationId) {
        return this.reserveBitmap('img/battlebacks1/', filename, hue, true, reservationId);
    }

    static reserveBattleback2(filename, hue, reservationId) {
        return this.reserveBitmap('img/battlebacks2/', filename, hue, true, reservationId);
    }

    static reserveEnemy(filename, hue, reservationId) {
        return this.reserveBitmap('img/enemies/', filename, hue, true, reservationId);
    }

    static reserveCharacter(filename, hue, reservationId) {
        return this.reserveBitmap('img/characters/', filename, hue, false, reservationId);
    }

    static reserveFace(filename, hue, reservationId) {
        return this.reserveBitmap('img/faces/', filename, hue, true, reservationId);
    }

    static reserveParallax(filename, hue, reservationId) {
        return this.reserveBitmap('img/parallaxes/', filename, hue, true, reservationId);
    }

    static reservePicture(filename, hue, reservationId) {
        return this.reserveBitmap('img/pictures/', filename, hue, true, reservationId);
    }

    static reserveSvActor(filename, hue, reservationId) {
        return this.reserveBitmap('img/sv_actors/', filename, hue, false, reservationId);
    }

    static reserveSvEnemy(filename, hue, reservationId) {
        return this.reserveBitmap('img/sv_enemies/', filename, hue, true, reservationId);
    }

    static reserveSystem(filename, hue, reservationId) {
        return this.reserveBitmap('img/system/', filename, hue, false, reservationId || this._systemReservationId);
    }

    static reserveTileset(filename, hue, reservationId) {
        return this.reserveBitmap('img/tilesets/', filename, hue, false, reservationId);
    }

    static reserveTitle1(filename, hue, reservationId) {
        return this.reserveBitmap('img/titles1/', filename, hue, true, reservationId);
    }

    static reserveTitle2(filename, hue, reservationId) {
        return this.reserveBitmap('img/titles2/', filename, hue, true, reservationId);
    }

    static reserveBitmap(folder, filename, hue, smooth, reservationId) {
        if (filename) {
            var path = folder + encodeURIComponent(filename) + '.png';
            var bitmap = this.reserveNormalBitmap(path, hue || 0, reservationId || this._defaultReservationId);
            bitmap.smooth = smooth;
            return bitmap;
        } else {
            return this.loadEmptyBitmap();
        }
    }

    static reserveNormalBitmap(path, hue, reservationId) {
        var bitmap = this.loadNormalBitmap(path, hue);
        this._imageCache.reserve(this._generateCacheKey(path, hue), bitmap, reservationId);

        return bitmap;
    }

    static releaseReservation(reservationId){
        this._imageCache.releaseReservation(reservationId);
    }

    static setDefaultReservationId(reservationId){
        this._defaultReservationId = reservationId;
    }

    static requestAnimation(filename, hue) {
        return this.requestBitmap('img/animations/', filename, hue, true);
    }

    static requestBattleback1(filename, hue) {
        return this.requestBitmap('img/battlebacks1/', filename, hue, true);
    }

    static requestBattleback2(filename, hue) {
        return this.requestBitmap('img/battlebacks2/', filename, hue, true);
    }

    static requestEnemy(filename, hue) {
        return this.requestBitmap('img/enemies/', filename, hue, true);
    }

    static requestCharacter(filename, hue) {
        return this.requestBitmap('img/characters/', filename, hue, false);
    }

    static requestFace(filename, hue) {
        return this.requestBitmap('img/faces/', filename, hue, true);
    }

    static requestParallax(filename, hue) {
        return this.requestBitmap('img/parallaxes/', filename, hue, true);
    }

    static requestPicture(filename, hue) {
        return this.requestBitmap('img/pictures/', filename, hue, true);
    }

    static requestSvActor(filename, hue) {
        return this.requestBitmap('img/sv_actors/', filename, hue, false);
    }

    static requestSvEnemy(filename, hue) {
        return this.requestBitmap('img/sv_enemies/', filename, hue, true);
    }

    static requestSystem(filename, hue) {
        return this.requestBitmap('img/system/', filename, hue, false);
    }

    static requestTileset(filename, hue) {
        return this.requestBitmap('img/tilesets/', filename, hue, false);
    }

    static requestTitle1(filename, hue) {
        return this.requestBitmap('img/titles1/', filename, hue, true);
    }

    static requestTitle2(filename, hue) {
        return this.requestBitmap('img/titles2/', filename, hue, true);
    }

    static requestBitmap(folder, filename, hue, smooth) {
        if (filename) {
            var path = folder + encodeURIComponent(filename) + '.png';
            var bitmap = this.requestNormalBitmap(path, hue || 0);
            bitmap.smooth = smooth;
            return bitmap;
        } else {
            return this.loadEmptyBitmap();
        }
    }

    static requestNormalBitmap(path, hue) {
        var key = this._generateCacheKey(path, hue);
        var bitmap = this._imageCache.get(key);
        if(!bitmap){
            bitmap = Bitmap.request(path);
            bitmap.addLoadListener(function(){
                bitmap.rotateHue(hue);
            });
            this._imageCache.add(key, bitmap);
            this._requestQueue.enqueue(key, bitmap);
        }else{
            this._requestQueue.raisePriority(key);
        }

        return bitmap;
    }

    static update() {
        this._requestQueue.update();
    }

    static clearRequest() {
        this._requestQueue.clear();
    }
    //

} // ImageManager

/*----------------------------------------------------------------------------
 *    # Rewritten class: EffectManager
 *      - Rewrites it into the ES6 standard
 *----------------------------------------------------------------------------*/

//-----------------------------------------------------------------------------
// EffectManager
//
// The static class that loads Effekseer effects.
class EffectManager {

    constructor() { throw new Error("This is a static class"); }

    static _cache = {};
    static _errorUrls = [];

    static load(filename) {
        if (!filename) return null;
        const url = this.makeUrl(filename), effect = this._cache[url];
        if (!effect && Graphics.effekseer) this.startLoading(url);
        return effect;
    } // load

    static startLoading(url) {
        const onLoad = this.onLoad.bind(this, url);
        const onError = this.onError.bind(this, url);
        const effect = Graphics.effekseer.loadEffect(url, 1, onLoad, onError);
        this._cache[url] = effect;
        return effect;
    } // startLoading

    static clear() {
        for (const url in this._cache) {
            Graphics.effekseer.releaseEffect(this._cache[url]);
        }
        this._cache = {};
    } // clear

    static onLoad(/*url*/) {}

    static onError(url) { this._errorUrls.push(url); }

    static makeUrl(filename) {
        return `effects/${Utils.encodeURI(filename)}.efkefc`;
    } // makeUrl

    static checkErrors() {
        const url = this._errorUrls.shift();
        if (url) this.throwLoadError(url);
    } // checkErrors

    static throwLoadError(url) {
        throw ["LoadError", url, this.startLoading.bind(this, url)];
    } // throwLoadError

    static isReady() {
        this.checkErrors();
        // Edited to help plugins alter is ready behaviors in better ways
        return this._isAllEffectsLoaded();
        //
    } // isReady

    /**
     * Hotspot/Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @returns {boolean} If all cached Effekseer effects are loaded
     */
    static _isAllEffectsLoaded() {
        for (const url in this._cache) {
            if (!this._cache[url].isLoaded) return false;
        }
        return true;
    } // _isAllEffectsLoaded

} // EffectManager

/*----------------------------------------------------------------------------
 *    # Rewritten class: AudioManager
 *      - Rewrites it into the ES6 standard
 *----------------------------------------------------------------------------*/

//-----------------------------------------------------------------------------
// AudioManager
//
// The static class that handles BGM, BGS, ME and SE.
class AudioManager {

    constructor() { throw new Error("This is a static class"); }

    static _bgmVolume = 100;
    static _bgsVolume = 100;
    static _meVolume = 100;
    static _seVolume = 100;
    static _currentBgm = null;
    static _currentBgs = null;
    static _bgmBuffer = null;
    static _bgsBuffer = null;
    static _meBuffer = null;
    static _seBuffers = [];
    static _staticBuffers = [];
    static _replayFadeTime = 0.5;
    static _path = "audio/";

    get bgmVolume() { return this._bgmVolume; }
    set bgmVolume(value) {
        this._bgmVolume = value;
        this.updateBgmParameters(this._currentBgm);
    } // bgmVolume

    get bgsVolume() { return this._bgsVolume; }
    set bgsVolume(value) {
        this._bgsVolume = value;
        this.updateBgsParameters(this._currentBgs);
    } // bgsVolume

    get meVolume() { return this._meVolume; }
    set meVolume(value) {
        this._meVolume = value;
        this.updateMeParameters(this._currentMe);
    } // meVolume

    get seVolume() { return this._seVolume; }
    set seVolume(value) { this._seVolume = value; }

    static playBgm(bgm, pos) {
        // Edited to help plugins alter play new bgm behaviors in better ways
        if (this.isCurrentBgm(bgm)) {
            this.updateBgmParameters(bgm);
        } else this._playNewBgm(bgm, pos);
        //
        this.updateCurrentBgm(bgm, pos);
    } // playBgm

    static replayBgm(bgm) {
        if (this.isCurrentBgm(bgm)) return this.updateBgmParameters(bgm);
        // Edited to help plugins alter replay new bgm behaviors in better ways
        this._replayNewBgm(bgm);
        //
    } // replayBgm

    static isCurrentBgm(bgm) {
        if (!this._currentBgm) return false;
        return this._bgmBuffer && this._currentBgm.name === bgm.name;
    } // isCurrentBgm

    static updateBgmParameters(bgm) {
        this.updateBufferParameters(this._bgmBuffer, this._bgmVolume, bgm);
    } // updateBgmParameters

    static updateCurrentBgm(bgm, pos) {
        this._currentBgm = {
            name: bgm.name,
            volume: bgm.volume,
            pitch: bgm.pitch,
            pan: bgm.pan,
            pos: pos
        };
    } // updateCurrentBgm

    // Edited to help plugins alter stop bgm behaviors in better ways
    static stopBgm() { if (this._bgmBuffer) this._stopBgmWithBuffer(); }
    //

    static fadeOutBgm(duration) {
        if (!this._hasCurrentBgmBuffer()) return;
        this._fadeOutCurrentBgmWithBuffer(duration);
    } // fadeOutBgm

    static fadeInBgm(duration) {
        if (this._hasCurrentBgmBuffer()) this._bgmBuffer.fadeIn(duration);
    } // fadeInBgm

    static playBgs(bgs, pos) {
        // Edited to help plugins alter play new bgs behaviors in better ways
        if (this.isCurrentBgs(bgs)) {
            this.updateBgsParameters(bgs);
        } else this._playNewBgs(bgs, pos);
        //
        this.updateCurrentBgs(bgs, pos);
    } // playBgs

    static replayBgs(bgs) {
        if (this.isCurrentBgs(bgs)) return this.updateBgsParameters(bgs);
        // Edited to help plugins alter replay new bgs behaviors in better ways
        this._replayNewBgs(bgs);
        //
    } // replayBgs

    static isCurrentBgs(bgs) {
        if (!this._currentBgs) return false;
        return this._bgsBuffer && this._currentBgs.name === bgs.name;
    } // isCurrentBgs

    static updateBgsParameters(bgs) {
        this.updateBufferParameters(this._bgsBuffer, this._bgsVolume, bgs);
    } // updateBgsParameters

    static updateCurrentBgs(bgs, pos) {
        this._currentBgs = {
            name: bgs.name,
            volume: bgs.volume,
            pitch: bgs.pitch,
            pan: bgs.pan,
            pos: pos
        };
    } // updateCurrentBgs

    // Edited to help plugins alter stop bgs behaviors in better ways
    static stopBgs() { if (this._bgsBuffer) this._stopBgsWithBuffer(); }
    //

    static fadeOutBgs(duration) {
        if (!this._hasCurrentBgsBuffer()) return;
        this._fadeOutCurrentBgsWithBuffer(duration);
    } // fadeOutBgs

    static fadeInBgs(duration) {
        if (this._hasCurrentBgsBuffer()) this._bgsBuffer.fadeIn(duration);
    } // fadeInBgs

    static playMe(me) {
        this.stopMe();
        // Edited to help plugins alter play me behaviors in better ways
        if (me.name) this._playMeWithName(me);
        //
    } // playMe

    static updateMeParameters(me) {
        this.updateBufferParameters(this._meBuffer, this._meVolume, me);
    } // updateMeParameters

    static fadeOutMe(duration) {
        if (this._meBuffer) this._meBuffer.fadeOut(duration);
    } // fadeOutMe

    static stopMe() { if (this._meBuffer) this._stopMeWithBuffer(); }

    static playSe(se) { if (se.name) this._playSeWithName(se); } // playSe

    static updateSeParameters(buffer, se) {
        this.updateBufferParameters(buffer, this._seVolume, se);
    } // updateSeParameters

    static cleanupSe() {
        this._seBuffers = this._seBuffers.filter(buffer => buffer.isPlaying());
    } // cleanupSe

    static stopSe() {
        this._seBuffers.forEach(buffer => buffer.destroy());
        this._seBuffers = [];
    } // stopSe

    // Edited to help plugins alter play static se behviors in better ways
    static playStaticSe(se) { if (se.name) this._playStaticSeWithName(se); }
    //

    static loadStaticSe(se) {
        if (!se.name || this.isStaticSe(se)) return;
        this._staticBuffers.push(this.createBuffer("se/", se.name));
    } // loadStaticSe

    static isStaticSe(se) {
        const { name } = se;
        return this._staticBuffers.some(buffer => buffer.name === name);
    } // isStaticSe

    static stopAll() {
        this.stopMe();
        this.stopBgm();
        this.stopBgs();
        this.stopSe();
    } // stopAll

    static saveBgm() {
        if (this._currentBgm) return this._saveCurrentBgm();
        return this.makeEmptyAudioObject();
    } // saveBgm

    static saveBgs() {
        if (this._currentBgs) return this._saveCurrentBgs();
        return this.makeEmptyAudioObject();
    } // saveBgs

    static makeEmptyAudioObject() { return { name: "", volume: 0, pitch: 0 }; }

    static createBuffer(folder, name) {
        // Edited to help plugins alter the buffer url in better ways
        const buffer = new WebAudio(this._newBufferUrl(folder, name));
        //
        [buffer.name, buffer.frameCount] = [name, Graphics.frameCount];
        return buffer;
    } // createBuffer

    static updateBufferParameters(buffer, configVolume, audio) {
        if (!buffer || !audio) return;
        buffer.volume = (configVolume * (audio.volume || 0)) / 10000;
        buffer.pitch = (audio.pitch || 0) / 100;
        buffer.pan = (audio.pan || 0) / 100;
    } // updateBufferParameters

    static audioFileExt() { return ".ogg"; }

    static checkErrors() {
        const buffers = [this._bgmBuffer, this._bgsBuffer, this._meBuffer];
        buffers.fastMerge(this._seBuffers).fastMerge(this._staticBuffers);
        // Edited to help plugins alter check error behaviors in better ways
        buffers.forEach(this._checkBufferError, this);
        //
    } // checkErrors

    static throwLoadError(webAudio) {
        throw ["LoadError", webAudio.url, webAudio.retry.bind(webAudio)];
    } // throwLoadError

    /**
     * Plays the specified new bgm with the specified position
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {Audio} bgm - The bgm with its name, pan, pitch and volume
     * @param {number} pos - The start position to play in seconds
     */
    static _playNewBgm(bgm, pos) {
        this.stopBgm();
        if (bgm.name) this._playNewBgmWithName(bgm, pos);
    } // _playNewBgm

    /**
     * This function shouldn't be called without an existing bgm name
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {Audio} bgm - The bgm with its name, pan, pitch and volume
     * @param {number} pos - The start position to play in seconds
     */
    static _playNewBgmWithName(bgm, pos) {
        this._bgmBuffer = this.createBuffer("bgm/", bgm.name);
        this.updateBgmParameters(bgm);
        if (!this._meBuffer) this._bgmBuffer.play(true, pos || 0);
    } // _playNewBgmWithName

    /**
     * Replays the specified new bgm
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {Audio} bgm - The bgm with its name, pan, pitch and volume
     */
    static _replayNewBgm(bgm) {
        this.playBgm(bgm, bgm.pos);
        if (this._bgmBuffer) this._bgmBuffer.fadeIn(this._replayFadeTime);
    } // _replayNewBgm

    /**
     * This function shouldn't be called without an existing bgm buffer
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    static _stopBgmWithBuffer() {
        this._bgmBuffer.destroy();
        this._bgmBuffer = this._currentBgm = null;
    } // _stopBgmWithBuffer

    /**
     * This function shouldn't be called without the current bgm and bgm buffer
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {number} duration - Fade-out time in seconds
     */
    static _fadeOutCurrentBgmWithBuffer(duration) {
        this._bgmBuffer.fadeOut(duration);
        this._currentBgm = null;
    } // _fadeOutCurrentBgmWithBuffer

    /**
     * Plays the specified new bgs with the specified position
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {Audio} bgs - The bgs with its name, pan, pitch and volume
     * @param {number} pos - The start position to play in seconds
     */
    static _playNewBgs(bgs, pos) {
        this.stopBgs();
        if (bgs.name) this._playNewBgsWithName(bgs, pos);
    } // _playNewBgs

    /**
     * This function shouldn't be called without an existing bgs name
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {Audio} bgs - The bgs with its name, pan, pitch and volume
     * @param {number} pos - The start position to play in seconds
     */
    static _playNewBgsWithName(bgs, pos) {
        this._bgsBuffer = this.createBuffer("bgs/", bgs.name);
        this.updateBgsParameters(bgs);
        this._bgsBuffer.play(true, pos || 0);
    } // _playNewBgsWithName

    /**
     * Replays the specified new bgs
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {Audio} bgs - The bgs with its name, pan, pitch and volume
     */
    static _replayNewBgs(bgs) {
        this.playBgs(bgs, bgs.pos);
        if (this._bgsBuffer) this._bgsBuffer.fadeIn(this._replayFadeTime);
    } // _replayNewBgs

    /**
     * This function shouldn't be called without an existing bgs buffer
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    static _stopBgsWithBuffer() {
        this._bgsBuffer.destroy();
        this._bgsBuffer = this._currentBgs = null;
    } // _stopBgsWithBuffer

    /**
     * Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @returns {boolean} Whether the bgs buffer and the current bgs exist
     */
    static _hasCurrentBgsBuffer() {
        return this._bgsBuffer && this._currentBgs;
    } // _hasCurrentBgmBuffer

    /**
     * This function shouldn't be called without the current bgs and bgs buffer
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {number} duration - Fade-out time in seconds
     */
    static _fadeOutCurrentBgsWithBuffer(duration) {
        this._bgsBuffer.fadeOut(duration);
        this._currentBgs = null;
    } // _fadeOutCurrentBgsWithBuffer

    /**
     * This function shouldn't be called without an existing me name
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {Audio} me - The me with its name, pan, pitch and volume
     */
    static _playMeWithName(me) {
        if (this._hasCurrentBgmBuffer()) this._stopCurrentBgmBuffer();
        this._playMeBufferWithName(me);
    } // _playMeWithName

    /**
     * Stores the current bgm buffer position then immediately stops it
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    static _stopCurrentBgmBuffer() {
        this._currentBgm.pos = this._bgmBuffer.seek();
        this._bgmBuffer.stop();
    } // _stopCurrentBgmBuffer

    /**
     * This function shouldn't be called without an existing me name
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {Audio} me - The me with its name, pan, pitch and volume
     */
    static _playMeBufferWithName(me) {
        this._meBuffer = this.createBuffer("me/", me.name);
        this.updateMeParameters(me);
        this._meBuffer.play(false);
        this._meBuffer.addStopListener(this.stopMe.bind(this));
    } // _playMeBufferWithName

    /**
     * This function shouldn't be called without an existing me buffer
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    static _stopMeWithBuffer() {
        this._destroyMeBuffer();
        /** @todo Extracts these codes into well-named functions */
        if (this._hasCurrentBgmBuffer() && !this._bgmBuffer.isPlaying()) {
            this._bgmBuffer.play(true, this._currentBgm.pos);
            this._bgmBuffer.fadeIn(this._replayFadeTime);
        }
        //
    } // _stopMeWithBuffer

    /**
     * This function shouldn't be called without an existing me buffer
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    static _destroyMeBuffer() {
        this._meBuffer.destroy();
        this._meBuffer = null;
    } // _destroyMeBuffer

    /**
     * Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @returns {boolean} Whether the bgm buffer and the current bgm exist
     */
    static _hasCurrentBgmBuffer() {
        return this._bgmBuffer && this._currentBgm;
    } // _hasCurrentBgmBuffer

    /**
     * This function shouldn't be called without an existing se name
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {Audio} se - The se with its name, pan, pitch and volume
     */
    static _playSeWithName(se) {
        // [Note] Do not play the same sound in the same frame.
        if (this._hasLatestBuffer(se.name)) return;
        this._playNewSeBufferWithName(se);
    } // _playSeWithName

    /**
     * Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {string} seName - The name of the specified se to be checked
     * @returns {boolean} Whether the specified se name has a latest buffer
     */
    static _hasLatestBuffer(seName) {
        const frameCount = Graphics.frameCount;
        return this._seBuffers.some(buffer => {
            return buffer.frameCount === frameCount && buffer.name === seName;
        });
    } // _hasLatestBuffer

    /**
     * This function shouldn't be called without an existing se name
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {Audio} se - The se with its name, pan, pitch and volume
     */
    static _playNewSeBufferWithName(se) {
        // [Note] Do not play the same sound in the same frame.
        const buffer = this.createBuffer("se/", name);
        this.updateSeParameters(buffer, se);
        buffer.play(false);
        this._seBuffers.push(buffer);
        this.cleanupSe();
    } // _playNewSeBufferWithName

    /**
     * This function shouldn't be called without an existing se name
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {Audio} se - The se with its name, pan, pitch and volume
     */
    static _playStaticSeWithName(se) {
        this.loadStaticSe(se);
        const { name } = se.name;
        const staticBuffer_ = this._staticBuffers.find(buffer => {
            return buffer.name === name;
        });
        if (staticBuffer_) this._playStaticSeBufferWithName(staticBuffer_, se);
    } // _playStaticSeWithName

    /**
     * This function shouldn't be called without an existing se name
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {WebAudio} buffer - The static buffer of static se to be played
     * @param {Audio} se - The se with its name, pan, pitch and volume
     */
    static _playStaticSeBufferWithName(buffer, se) {
        buffer.stop();
        this.updateSeParameters(buffer, se);
        buffer.play(false);
    } // _playStaticSeBufferWithName

    /**
     * This function shouldn't be called without an existing current bgm
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    static _saveCurrentBgm() {
        const { name, volume, pitch, pan } = this._currentBgm;
        return {
            name,
            volume,
            pitch,
            pan,
            pos: this._bufferPos(this._bgmBuffer)
        };
    } // _saveCurrentBgm

    /**
     * This function shouldn't be called without an existing current bgs
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    static _saveCurrentBgs() {
        const { name, volume, pitch, pan } = this._currentBgs;
        return {
            name,
            volume,
            pitch,
            pan,
            pos: this._bufferPos(this._bgsBuffer)
        };
    } // _saveCurrentBgs

    /**
     * Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {WebAudio?} buffer_ - The audio buffer to has its positions seeked
     * @returns {number} The current position of the specified audio buffer
     */
    static _bufferPos(buffer_) { return buffer_ ? buffer_.seek() : 0 }

    /**
     * Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {string} folder - The folder of the audio creating its new buffer
     * @param {string} name - The name of the audio creating its new buffer
     * @returns {string} The url of the audio buffer to be created
     */
    static _newBufferUrl(folder, name) {
        const ext = this.audioFileExt();
        return `${this._path}${folder}${Utils.encodeURI(name)}${ext}`;
    } // _newBufferUrl

    /**
     * Checks if the specified buffer has errors to be thrown
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {WebAudio?} buffer_ - The audio buffer to have its errors checked
     */
    static _checkBufferError(buffer_) {
        if (buffer_ && buffer_.isError()) this.throwLoadError(buffer_);
    } // _checkBufferError


    // RMMV static variables not present in the default RMMZ codebase
    static _masterVolume   = 1;   // (min: 0, max: 1)
    static _blobUrl        = null;

    static get masterVolume() {
        return this._masterVolume;
    }
    static set masterVolume(value) {
        this._masterVolume = value;
        WebAudio.setMasterVolume(this._masterVolume);
        Graphics.setVideoVolume(this._masterVolume);
    }
    //

    // RMMV static functions not present in the default RMMZ codebase
    static createDecryptBuffer(url, bgm, pos){
        this._blobUrl = url;
        this._bgmBuffer = this.createBuffer('bgm', bgm.name);
        this.updateBgmParameters(bgm);
        if (!this._meBuffer) {
            this._bgmBuffer.play(true, pos || 0);
        }
        this.updateCurrentBgm(bgm, pos);
    }

    static shouldUseHtml5Audio() {
        // The only case where we wanted html5audio was android/ no encrypt
        // Atsuma-ru asked to force webaudio there too, so just return false for ALL    // return Utils.isAndroidChrome() && !Decrypter.hasEncryptedAudio;
     return false;
    }

    static checkWebAudioError(webAudio) {
        if (webAudio && webAudio.isError()) {
            throw new Error('Failed to load: ' + webAudio.url);
        }
    }
    //

} // AudioManager

/*----------------------------------------------------------------------------
 *    # Rewritten class: SoundManager
 *      - Rewrites it into the ES6 standard
 *----------------------------------------------------------------------------*/

//-----------------------------------------------------------------------------
// SoundManager
//
// The static class that plays sound effects defined in the database.
class SoundManager {

    constructor() { throw new Error("This is a static class"); }

    static preloadImportantSounds() {
        this.loadSystemSound(0);
        this.loadSystemSound(1);
        this.loadSystemSound(2);
        this.loadSystemSound(3);
    } // preloadImportantSounds

    static loadSystemSound(n) {
        if ($dataSystem) AudioManager.loadStaticSe($dataSystem.sounds[n]);
    } // loadSystemSound

    static playSystemSound(n) {
        if ($dataSystem) AudioManager.playStaticSe($dataSystem.sounds[n]);
    } // playSystemSound

    static playCursor() { this.playSystemSound(0); }

    static playOk() { this.playSystemSound(1); }

    static playCancel() { this.playSystemSound(2); }

    static playBuzzer() { this.playSystemSound(3); }

    static playEquip() { this.playSystemSound(4); }

    static playSave() { this.playSystemSound(5); }

    static playLoad() { this.playSystemSound(6); }

    static playBattleStart() { this.playSystemSound(7); }

    static playEscape() { this.playSystemSound(8); }

    static playEnemyAttack() { this.playSystemSound(9); }

    static playEnemyDamage() { this.playSystemSound(10); }

    static playEnemyCollapse() { this.playSystemSound(11); }

    static playBossCollapse1() { this.playSystemSound(12); }

    static playBossCollapse2() { this.playSystemSound(13); }

    static playActorDamage() { this.playSystemSound(14); }

    static playActorCollapse() { this.playSystemSound(15); }

    static playRecovery() { this.playSystemSound(16); }

    static playMiss() { this.playSystemSound(17); }

    static playEvasion() { this.playSystemSound(18); }

    static playMagicEvasion() { this.playSystemSound(19); }

    static playReflection() { this.playSystemSound(20); }

    static playShop() { this.playSystemSound(21); }

    static playUseItem() { this.playSystemSound(22); }

    static playUseSkill() { this.playSystemSound(23); }

} // SoundManager

/*----------------------------------------------------------------------------
 *    # Rewritten class: TextManager
 *      - Rewrites it into the ES6 standard
 *----------------------------------------------------------------------------*/

//-----------------------------------------------------------------------------
// TextManager
//
// The static class that handles terms and messages.
class TextManager {

    constructor() { throw new Error("This is a static class"); }

    static basic(basicId) {
        return $dataSystem.terms.basic[basicId] || "";
    } // basic

    static param(paramId) {
        return $dataSystem.terms.params[paramId] || "";
    } // param

    static command(commandId) {
        return $dataSystem.terms.commands[commandId] || "";
    } // command

    static message(messageId) {
        return $dataSystem.terms.messages[messageId] || "";
    } // message

    static getter(method, param) {
        return {
            get: function() { return this[method](param); },
            configurable: true
        };
    } // getter

    get currencyUnit() { return $dataSystem.currencyUnit; }
    get level() { return this.basic(0); }
    get levelA() { return this.basic(1); }
    get hp() { return this.basic(2); }
    get hpA() { return this.basic(3); }
    get mp() { return this.basic(4); }
    get mpA() { return this.basic(5); }
    get tp() { return this.basic(6); }
    get tpA() { return this.basic(7); }
    get exp() { return this.basic(8); }
    get expA() { return this.basic(9); }
    get fight() { return this.command(0); }
    get escape() { return this.command(1); }
    get attack() { return this.command(2); }
    get guard() { return this.command(3); }
    get item() { return this.command(4); }
    get skill() { return this.command(5); }
    get equip() { return this.command(6); }
    get status() { return this.command(7); }
    get formation() { return this.command(8); }
    get save() { return this.command(9); }
    get gameEnd() { return this.command(10); }
    get options() { return this.command(11); }
    get weapon() { return this.command(12); }
    get armor() { return this.command(13); }
    get keyItem() { return this.command(14); }
    get equip2() { return this.command(15); }
    get optimize() { return this.command(16); }
    get clear() { return this.command(17); }
    get newGame() { return this.command(18); }
    get continue_() { return this.command(19); }
    get toTitle() { return this.command(21); }
    get cancel() { return this.command(22); }
    get buy() { return this.command(24); }
    get sell() { return this.command(25); }
    get alwaysDash() { return this.message("alwaysDash"); }
    get commandRemember() { return this.message("commandRemember"); }
    get touchUI() { return this.message("touchUI"); }
    get bgmVolume() { return this.message("bgmVolume"); }
    get bgsVolume() { return this.message("bgsVolume"); }
    get meVolume() { return this.message("meVolume"); }
    get seVolume() { return this.message("seVolume"); }
    get possession() { return this.message("possession"); }
    get expTotal() { return this.message("expTotal"); }
    get expNext() { return this.message("expNext"); }
    get saveMessage() { return this.message("saveMessage"); }
    get loadMessage() { return this.message("loadMessage"); }
    get file() { return this.message("file"); }
    get autosave() { return this.message("autosave"); }
    get partyName() { return this.message("partyName"); }
    get emerge() { return this.message("emerge"); }
    get preemptive() { return this.message("preemptive"); }
    get surprise() { return this.message("surprise"); }
    get escapeStart() { return this.message("escapeStart"); }
    get escapeFailure() { return this.message("escapeFailure"); }
    get victory() { return this.message("victory"); }
    get defeat() { return this.message("defeat"); }
    get obtainExp() { return this.message("obtainExp"); }
    get obtainGold() { return this.message("obtainGold"); }
    get obtainItem() { return this.message("obtainItem"); }
    get levelUp() { return this.message("levelUp"); }
    get obtainSkill() { return this.message("obtainSkill"); }
    get useItem() { return this.message("useItem"); }
    get criticalToEnemy() { return this.message("criticalToEnemy"); }
    get criticalToActor() { return this.message("criticalToActor"); }
    get actorDamage() { return this.message("actorDamage"); }
    get actorRecovery() { return this.message("actorRecovery"); }
    get actorGain() { return this.message("actorGain"); }
    get actorLoss() { return this.message("actorLoss"); }
    get actorDrain() { return this.message("actorDrain"); }
    get actorNoDamage() { return this.message("actorNoDamage"); }
    get actorNoHit() { return this.message("actorNoHit"); }
    get enemyDamage() { return this.message("enemyDamage"); }
    get enemyRecovery() { return this.message("enemyRecovery"); }
    get enemyGain() { return this.message("enemyGain"); }
    get enemyLoss() { return this.message("enemyLoss"); }
    get enemyDrain() { return this.message("enemyDrain"); }
    get enemyNoDamage() { return this.message("enemyNoDamage"); }
    get enemyNoHit() { return this.message("enemyNoHit"); }
    get evasion() { return this.message("evasion"); }
    get magicEvasion() { return this.message("magicEvasion"); }
    get magicReflection() { return this.message("magicReflection"); }
    get counterAttack() { return this.message("counterAttack"); }
    get substitute() { return this.message("substitute"); }
    get buffAdd() { return this.message("buffAdd"); }
    get debuffAdd() { return this.message("debuffAdd"); }
    get buffRemove() { return this.message("buffRemove"); }
    get actionFailure() { return this.message("actionFailure"); }

} // TextManager

/*----------------------------------------------------------------------------
 *    # Rewritten class: ColorManager
 *      - Rewrites it into the ES6 standard
 *----------------------------------------------------------------------------*/

//-----------------------------------------------------------------------------
// ColorManager
//
// The static class that handles the window colors.

class ColorManager {

    constructor() { throw new Error("This is a static class"); }

    static loadWindowskin() {
        this._windowskin = ImageManager.loadSystem("Window");
    } // loadWindowskin

    static textColor(n) {
        const py = 144 + Math.floor(n / 8) * 12 + 6;
        return this._windowskin.getPixel(96 + (n % 8) * 12 + 6, py);
    } // textColor

    static normalColor() { return this.textColor(0); }

    static systemColor() { return this.textColor(16); }

    static crisisColor() { return this.textColor(17); }

    static deathColor() { return this.textColor(18); }

    static gaugeBackColor() { return this.textColor(19); }

    static hpGaugeColor1() { return this.textColor(20); }

    static hpGaugeColor2() { return this.textColor(21); }

    static mpGaugeColor1() { return this.textColor(22); }

    static mpGaugeColor2() { return this.textColor(23); }

    static mpCostColor() { return this.textColor(23); }

    static powerUpColor() { return this.textColor(24); }

    static powerDownColor() { return this.textColor(25); }

    static ctGaugeColor1() { return this.textColor(26); }

    static ctGaugeColor2() { return this.textColor(27); }

    static tpGaugeColor1() { return this.textColor(28); }

    static tpGaugeColor2() { return this.textColor(29); }

    static tpCostColor() { return this.textColor(29); }

    static pendingColor() { return this._windowskin.getPixel(120, 120); }

    static hpColor(actor) {
        if (!actor) return this.normalColor();
        if (actor.isDead()) return this.deathColor();
        if (actor.isDying()) return this.crisisColor();
        return this.normalColor();
    } // hpColor

    static mpColor(/*actor*/) { return this.normalColor(); }

    static tpColor(/*actor*/) { return this.normalColor(); }

    static paramchangeTextColor(change) {
        if (change > 0) return this.powerUpColor();
        if (change < 0) return this.powerDownColor();
        return this.normalColor();
    } // paramchangeTextColor

    static damageColor(colorType) {
        switch (colorType) {
            case 0: /* HP damage */ return "#ffffff";
            case 1: /* HP recover */ return "#b9ffb5";
            case 2: /* MP damage */ return "#ffff90";
            case 3: /* MP recover */ return "#80b0ff";
            default: return "#808080";
        }
    } // damageColor

    static outlineColor() { return "rgba(0, 0, 0, 0.6)"; }

    static dimColor1() { return "rgba(0, 0, 0, 0.6)"; }

    static dimColor2() { return "rgba(0, 0, 0, 0)"; }

    static itemBackColor1() { return "rgba(32, 32, 32, 0.5)"; }

    static itemBackColor2() { return "rgba(0, 0, 0, 0.5)"; }

} // ColorManager

/*----------------------------------------------------------------------------
 *    # Rewritten class: SceneManager
 *      - Rewrites it into the ES6 standard
 *----------------------------------------------------------------------------*/

//-----------------------------------------------------------------------------
// SceneManager
//
// The static class that manages scene transitions.
class SceneManager {

    constructor() { throw new Error("This is a static class"); }

    static _scene = null;
    static _nextScene = null;
    static _stack = [];
    static _exiting = false;
    static _previousScene = null;
    static _previousClass = null;
    static _backgroundBitmap = null;
    static _smoothDeltaTime = 1;
    static _elapsedTime = 0;

    static run(sceneClass) {
        try {
            // Edited to help plugins alter run behaviors in better ways
            this._runWithoutRescue(sceneClass);
            //
        } catch (e) { this.catchException(e); }
    } // run

    static initialize() {
        this.checkBrowser();
        this.checkPluginErrors();
        this.initGraphics();
        this.initAudio();
        this.initVideo();
        this.initInput();
        this.setupEventHandlers();
        // Added to help plugins alter key events in better ways
        this._initKeyEvents();
        //
    } // initialize

    static checkBrowser() {
        if (!Utils.canUseWebGL()) {
            throw new Error("Your browser does not support WebGL.");
        }
        if (!Utils.canUseWebAudioAPI()) {
            throw new Error("Your browser does not support Web Audio API.");
        }
        if (!Utils.canUseCssFontLoading()) {
            throw new Error("Your browser does not support CSS Font Loading.");
        }
        if (!Utils.canUseIndexedDB()) {
            throw new Error("Your browser does not support IndexedDB.");
        }
    } // checkBrowser

    static checkPluginErrors() { PluginManager.checkErrors(); }

    static initGraphics() {
        if (!Graphics.initialize()) {
            throw new Error("Failed to initialize graphics.");
        }
        Graphics.setTickHandler(this.update.bind(this));
    } // initGraphics

    static initAudio() { WebAudio.initialize(); }

    static initVideo() { Video.initialize(Graphics.width, Graphics.height); }

    static initInput() {
        Input.initialize();
        TouchInput.initialize();
    } // initInput

    static setupEventHandlers() {
        window.addEventListener("error", this.onError.bind(this));
        window.addEventListener("unhandledrejection", this.onReject.bind(this));
        window.addEventListener("unload", this.onUnload.bind(this));
        document.addEventListener("keydown", this.onKeyDown.bind(this));
    } // setupEventHandlers

    static update(deltaTime) {
        try {
            // Edited to help plugins alter update behaviors in better ways
            this._updateWithoutRescue(deltaTime);
            //
        } catch (e) { this.catchException(e); }
    } // update

    static determineRepeatNumber(deltaTime) {
        // [Note] We consider environments where the refresh rate is higher than
        //   60Hz, but ignore sudden irregular deltaTime.
        // Edited to help plugins alter determine repeat number in better ways
        this._updateSmoothDeltaTime(deltaTime);
        //
        /** @todo Extracts these codes into well-named functions */
        if (this._smoothDeltaTime >= 0.9) {
            this._elapsedTime = 0;
            return Math.round(this._smoothDeltaTime);
        } else {
            this._elapsedTime += deltaTime;
            if (this._elapsedTime >= 1) {
                this._elapsedTime -= 1;
                return 1;
            }
            return 0;
        }
        //
    } // determineRepeatNumber

    static terminate() { window.close(); }

    static onError(event) {
        // Edited to help plugins alter on error behaviors in better ways
        this._logError(event);
        //
        /** @todo Thinks of if at least logging the catch will be better */
        try {
            // Edited to help plugins alter on error behaviors in better ways
            this._onErrorWithoutRescue(event);
            //
        } catch (e) {}
        //
    } // onError

    static onReject(event) {
        // Catch uncaught exception in Promise
        event.message = event.reason;
        this.onError(event);
    } // onReject

    static onUnload() {
        ImageManager.clear();
        EffectManager.clear();
        AudioManager.stopAll();
    } // onUnload

    static onKeyDown(event) {
        // Edited to help plugins alter key events in better ways
        if (this._hasNoKeyEvent(event)) return;
        const { keyCode } = event;
        for (const [keyCodeFunc, eventFunc] of this._keyEvents) {
            if (keyCodeFunc() === keyCode) return eventFunc();
        }
        //
    } // onKeyDown

    static reloadGame() { if (Utils.isNwjs()) chrome.runtime.reload(); }

    static showDevTools() {
        if (!Utils.isNwjs() || !Utils.isOptionValid("test")) return;
        nw.Window.get().showDevTools();
    } // showDevTools

    static catchException(e) {
        // Edited to help plugins alter catch exception behaviors in better ways
        this._catchError(e);
        //
        this.stop();
    } // catchException

    static catchNormalError(e) {
        Graphics.printError(e.name, e.message, e);
        AudioManager.stopAll();
        console.error(e.stack);
    } // catchNormalError

    static catchLoadError(e) {
        const [url, retry] = [e[1], e[2]];
        Graphics.printError("Failed to load", url);
        // Edited to help plugins alter catch load error in better ways
        if (retry) return Graphics.showRetryButton(() => this._onRetry(retry));
        //
        AudioManager.stopAll();
    } // catchLoadError

    static catchUnknownError(e) {
        Graphics.printError("UnknownError", String(e));
        AudioManager.stopAll();
    } // catchUnknownError

    static updateMain() {
        this.updateInputData();
        this.updateEffekseer();
        this.changeScene();
        this.updateScene();
    } // updateMain

    static updateInputData() {
        Input.update();
        TouchInput.update();
    } // updateInputData

    static updateEffekseer() {
        if (Graphics.effekseer) Graphics.effekseer.update();
    } // updateEffekseer

    static changeScene() {
        // Edited to help plugins alter change scene behaviors in better ways
        if (this._isChangeToNextScene()) this._changeToNextScene();
        //
    } // changeScene

    // Edited to help plugins alter update scene behaviors in better ways
    static updateScene() { if (this._scene) this._updateExistingScene(); }
    //

    static isGameActive() {
        /** @todo Thinks of if at least logging the catch will be better */
        // [Note] We use "window.top" to support an iframe.
        try {
            return window.top.document.hasFocus();
        } catch (e) { /* SecurityError */ return true; }
        //
    } // isGameActive

    static onSceneTerminate() {
        this._previousScene = this._scene;
        this._previousClass = this._scene.constructor;
        Graphics.setStage(null);
    } // onSceneTerminate

    static onSceneCreate() { Graphics.startLoading(); }

    static onBeforeSceneStart() {
        // Edited to help plugins alter before scene start in better ways
        this._onDestroyPrevScene();
        //
        if (Graphics.effekseer) Graphics.effekseer.stopAll();
    } // onBeforeSceneStart

    static onSceneStart() {
        Graphics.endLoading();
        Graphics.setStage(this._scene);
    } // onSceneStart

    static isSceneChanging() { return this._exiting || !!this._nextScene; }

    static isCurrentSceneBusy() { return this._scene && this._scene.isBusy(); }

    static isNextScene(sceneClass) {
        return this._nextScene && this._nextScene.constructor === sceneClass;
    } // isNextScene

    static isPreviousScene(sceneClass) {
        return this._previousClass === sceneClass;
    } // isPreviousScene

    static goto(sceneClass) {
        if (sceneClass) this._nextScene = new sceneClass();
        if (this._scene) this._scene.stop();
    } // goto

    static push(sceneClass) {
        this._stack.push(this._scene.constructor);
        this.goto(sceneClass);
    } // push

    static pop() {
        this._stack.isEmpty() ? this.exit() : this.goto(this._stack.pop());
    } // pop

    static exit() {
        this.goto(null);
        this._exiting = true;
    } // exit

    static clearStack() { this._stack = []; }

    static stop() { Graphics.stopGameLoop(); }

    static prepareNextScene() { this._nextScene.prepare(...arguments); }

    static snap() { return Bitmap.snap(this._scene); }

    static snapForBackground() {
        if (this._backgroundBitmap) this._backgroundBitmap.destroy();
        this._backgroundBitmap = this.snap();
    } // snapForBackground

    static backgroundBitmap() { return this._backgroundBitmap; }

    static resume() {
        TouchInput.update();
        Graphics.startGameLoop();
    } // resume

    // Added to help plugins alter key events in better ways
    static _keyEvents = new Map();
    //

    /**
     * This function shouldn't be called without a try and catch
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {Klass} sceneClass - The class of the scene to be run
     */
    static _runWithoutRescue(sceneClass) {
        this.initialize();
        this.goto(sceneClass);
        Graphics.startGameLoop();
    } // _runWithoutRescue

    /**
     * Adds a new private variable to help plugins alter key events
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    static _initKeyEvents() {
        this._keyEvents.clear();
        const reloadGameKeyFunc = this._reloadGameKey.bind(this);
        this._keyEvents.set(reloadGameKeyFunc, this.reloadGame.bind(this));
        const showDevToolsKeyFunc = this._showDevToolsKey.bind(this);
        this._keyEvents.set(showDevToolsKeyFunc, this.showDevTools.bind(this));
    } // _initKeyEvents

    /**
     * Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @enum @returns {number} - The code of the reload game key
     */
    static _reloadGameKey() { return 116; /* F5 */ }

    /**
     * Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @enum @returns {number} - The code of the show dev tools key
     */
    static _showDevToolsKey() { return 119; /* F8 */ }

    /**
     * This function shouldn't be called without a try and catch
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {number} deltaTime - The time elapsed for each game loop
     */
    static _updateWithoutRescue(deltaTime) {
        const n = this.determineRepeatNumber(deltaTime);
        for (let i = 0; i < n; i++) this.updateMain();
    } // _updateWithoutRescue

    /**
     * Updates the smooth delta time when determining the repeat number
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {number} deltaTime - The time elapsed for each game loop
     */
    static _updateSmoothDeltaTime(deltaTime) {
        // [Note] We consider environments where the refresh rate is higher than
        //   60Hz, but ignore sudden irregular deltaTime.
        /** @todo Figures out where do 0.8 and 0.2 come from */
        this._smoothDeltaTime *= 0.8;
        this._smoothDeltaTime += Math.min(deltaTime, 2) * 0.2;
        //
    } // _updateSmoothDeltaTime

    /**
     * Shows the error event details onto the console
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {ErrorEvent} event - The event having the error to be shown
     */
    static _logError(event) {
        console.error(event.message);
        console.error(event.filename, event.lineno);
    } // _logError

    /**
     * This function shouldn't be called without a try and catch
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {ErrorEvent} event - The event having the error to be shown
     */
    static _onErrorWithoutRescue(event) {
        this.stop();
        Graphics.printError("Error", event.message, event);
        AudioManager.stopAll();
    } // _onErrorWithoutRescue

    /**
     * Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {Event} event - The onkeydown event to be checked against
     * @returns {boolean} If the event might trigger functions to be called
     */
    static _hasNoKeyEvent(event) { return event.ctrlKey || event.altKey; }

    /**
     * Catches the error being thrown when the game crashes
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {*} e - The exception being catched as the error
     */
    static _catchError(e) {
        if (e instanceof Error) return this.catchNormalError(e);
        if (e instanceof Array && e[0] === "LoadError") {
            this.catchLoadError(e);
        } else this.catchUnknownError(e);
    } // _catchError

    /**
     * Triggers events to happen upon retrying the game after throwing an error
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {()} retry - The function to be called upon retrying the game
     */
    static _onRetry(retry) {
        retry();
        this.resume();
    } // _onRetry

    /**
     * Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @returns {boolean} Whether the current scene can be changed to the next
     */
    static _isChangeToNextScene() {
        return this.isSceneChanging() && !this.isCurrentSceneBusy();
    } // _isChangeToNextScene

    /**
     * Changes the scene from the current to the next one
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    static _changeToNextScene() {
        if (this._scene) this._terminateCurrentScene();
        this._scene = this._nextScene, this._nextScene = null;
        if (this._scene) this._createCurrentScene();
        if (this._exiting) this.terminate();
    } // _changeToNextScene

    /**
     * This function shouldn't be called without the current scene
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    static _terminateCurrentScene() {
        this._scene.terminate();
        this.onSceneTerminate();
    } // _terminateCurrentScene

    /**
     * This function shouldn't be called without the current scene
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    static _createCurrentScene() {
        this._scene.create();
        this.onSceneCreate();
    } // _createCurrentScene

    /**
     * This function shouldn't be called without the current scene
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    static _updateExistingScene() {
        if (this._scene.isStarted()) return this._updateStartedScene();
        if (this._scene.isReady()) this._updateReadyScene();
    } // _updateExistingScene

    /**
     * This function shouldn't be called without the current scene being started
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    static _updateStartedScene() {
        if (this.isGameActive()) this._scene.update();
    } // _updateStartedScene

    /**
     * This function shouldn't be called without the current scene being ready
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    static _updateReadyScene() {
        this.onBeforeSceneStart();
        this._scene.start();
        this.onSceneStart();
    } // _updateReadyScene

    /**
     * Triggers events to happen upon destroying the previous scene
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    static _onDestroyPrevScene() {
        if (!this._previousScene) return;
        this._previousScene.destroy();
        this._previousScene = null;
    } // _onDestroyPrevScene

    // RMMV static functions not present in the default RMMZ codebase
    static _getTimeInMsWithoutMobileSafari() {
        return performance.now();
    }

    static checkFileAccess() {
        if (!Utils.canReadGameFiles()) {
            throw new Error('Your browser does not allow to read local files.');
        }
    }

    static initNwjs() {
        if (Utils.isNwjs()) {
            var gui = require('nw.gui');
            var win = gui.Window.get();
            if (process.platform === 'darwin' && !win.menu) {
                var menubar = new gui.Menu({ type: 'menubar' });
                var option = { hideEdit: true, hideWindow: true };
                menubar.createMacBuiltin('Game', option);
                win.menu = menubar;
            }
        }
    }

    static setupErrorHandlers() {
        window.addEventListener('error', this.onError.bind(this));
        document.addEventListener('keydown', this.onKeyDown.bind(this));
    }
    //

} // SceneManager

/*----------------------------------------------------------------------------
 *    # Rewritten class: BattleManager
 *      - Rewrites it into the ES6 standard
 *----------------------------------------------------------------------------*/

//-----------------------------------------------------------------------------
// BattleManager
//
// The static class that manages battle progress.

class BattleManager {

    constructor() { throw new Error("This is a static class"); }

    static setup(troopId, canEscape, canLose) {
        this.initMembers();
        [this._canEscape, this._canLose] = [canEscape, canLose];
        $gameTroop.setup(troopId);
        $gameScreen.onBattleStart();
        this.makeEscapeRatio();
    } // setup

    static initMembers() {
        this._phase = "";
        this._inputting = this._canEscape = this._canLose = false;
        [this._battleTest, this._eventCallback] = [false, null];
        this._preemptive = this._surprise = false;
        this._currentActor = this._actionForcedBattler = null;
        this._mapBgm = this._mapBgs = null;
        this._actionBattlers = [];
        this._subject = this._action = null;
        this._targets = [];
        this._logWindow = this._spriteset = null;
        [this._escapeRatio, this._escaped, this._rewards] = [0, false, {}];
        this._tpbNeedsPartyCommand = true;
        // Added to help plugins check if the battle should end
        this._isBattleEnd = false;
        //
        // Added to help plugins check if the event main's updated
        this._isUpdateEventMain = false;
        //
    } // initMembers

    static isTpb() { return $dataSystem.battleSystem >= 1; }

    static isActiveTpb() { return $dataSystem.battleSystem === 1; }

    static isBattleTest() { return this._battleTest; }

    static setBattleTest(battleTest) { this._battleTest = battleTest; }

    static setEventCallback(callback) { this._eventCallback = callback; }

    static setLogWindow(logWindow) { this._logWindow = logWindow; }

    static setSpriteset(spriteset) { this._spriteset = spriteset; }

    static onEncounter() {
        // Edited to help plugins alter encounter behaviors in better ways
        this._preemptive = this._encounterPreemptive();
        this._surprise = this._encounterSurprise();
        //
    } // onEncounter

    static ratePreemptive() {
        return $gameParty.ratePreemptive($gameTroop.agility());
    } // ratePreemptive

    static rateSurprise() {
        return $gameParty.rateSurprise($gameTroop.agility());
    } // rateSurprise

    static saveBgmAndBgs() {
        this._mapBgm = AudioManager.saveBgm();
        this._mapBgs = AudioManager.saveBgs();
    } // saveBgmAndBgs

    static playBattleBgm() {
        AudioManager.playBgm($gameSystem.battleBgm());
        AudioManager.stopBgs();
    } // playBattleBgm

    static playVictoryMe() { AudioManager.playMe($gameSystem.victoryMe()); }

    static playDefeatMe() { AudioManager.playMe($gameSystem.defeatMe()); }

    static replayBgmAndBgs() {
        if (this._mapBgm) {
            AudioManager.replayBgm(this._mapBgm);
        } else AudioManager.stopBgm();
        if (this._mapBgs) AudioManager.replayBgs(this._mapBgs);
    } // replayBgmAndBgs

    // Edited to help plugins alter escape ratio behaviors in better ways
    static makeEscapeRatio() { this._escapeRatio = this._newEscRatio(); }
    //

    static update(timeActive) {
        if (!this.isBusy() && !this.updateEvent()) this.updatePhase(timeActive);
        if (this.isTpb()) this.updateTpbInput();
    } // update

    static updatePhase(timeActive) {
        switch (this._phase) {
            case "start": return this.updateStart();
            case "turn": return this.updateTurn(timeActive);
            case "action": return this.updateAction();
            case "turnEnd": return this.updateTurnEnd();
            case "battleEnd": return this.updateBattleEnd();
        }
    } // updatePhase

    static updateEvent() {
        switch (this._phase) {
            case "start":
            case "turn":
            case "turnEnd":
                /** @todo Extracts these codes into a well-named function */
                if (!this.isActionForced()) return this.updateEventMain();
                this.processForcedAction();
                return true;
                //
        }
        return this.checkAbort();
    } // updateEvent

    static updateEventMain() {
        $gameTroop.updateInterpreter();
        $gameParty.requestMotionRefresh();
        // Edited to help plugins check if the event main's updated
        if ($gameTroop.isEventRunning() || this.checkBattleEnd()) {
            return this._isUpdateEventMain = true;
        }
        $gameTroop.setupBattleEvent();
        return this._isUpdateEventMain = 
                $gameTroop.isEventRunning() || SceneManager.isSceneChanging();
        //
    } // updateEventMain

    static isBusy() {
        if ($gameMessage.isBusy()) return true;
        return this._spriteset.isBusy() || this._logWindow.isBusy();
    } // isBusy

    static updateTpbInput() {
        this._inputting ? this.checkTpbInputClose() : this.checkTpbInputOpen();
    } // updateTpbInput

    static checkTpbInputClose() {
        // Edited to help plugins alter cancel current input in better ways
        if (this._isCancelCurInput()) this._cancelCurInput();
        //
    } // checkTpbInputClose

    static checkTpbInputOpen() {
        if (!this.isPartyTpbInputtable()) return;
        if (!this._tpbNeedsPartyCommand) return this.selectNextCommand();
        [this._inputting, this._tpbNeedsPartyCommand] = [true, false];
    } // checkTpbInputOpen

    static isPartyTpbInputtable() {
        return $gameParty.canInput() && this.isTpbMainPhase();
    } // isPartyTpbInputtable

    static needsActorInputCancel() {
        return this._currentActor && !this._currentActor.canInput();
    } // needsActorInputCancel

    static isTpbMainPhase() {
        return ["turn", "turnEnd", "action"].includes(this._phase);
    } // isTpbMainPhase

    static isInputting() { return this._inputting; }

    static isInTurn() { return this._phase === "turn"; }

    static isTurnEnd() { return this._phase === "turnEnd"; }

    static isAborting() { return this._phase === "aborting"; }

    static isBattleEnd() { return this._phase === "battleEnd"; }

    static canEscape() { return this._canEscape; }

    static canLose() { return this._canLose; }

    static isEscaped() { return this._escaped; }

    static actor() { return this._currentActor; }

    static startBattle() {
        this._phase = "start";
        $gameSystem.onBattleStart();
        $gameParty.onBattleStart(this._preemptive);
        $gameTroop.onBattleStart(this._surprise);
        this.displayStartMessages();
    } // startBattle

    static displayStartMessages() {
        $gameTroop.enemyNames().forEach(name => {
            $gameMessage.add(TextManager.emerge.format(name));
        });
        if (this._preemptive) {
            $gameMessage.add(TextManager.preemptive.format($gameParty.name()));
        } else if (this._surprise) {
            $gameMessage.add(TextManager.surprise.format($gameParty.name()));
        }
    } // displayStartMessages

    static startInput() {
        [this._phase, this._inputting] = ["input", true];
        $gameParty.makeActions();
        $gameTroop.makeActions();
        this._currentActor = null;
        // Edited to help plugins alter start input behaviors in better ways
        if (!this._canInputActs()) this.startTurn();
        //
    } // startInput

    static inputtingAction() {
        return this._currentActor ? this._currentActor.inputtingAction() : null;
    } // inputtingAction

    static selectNextCommand() {
        if (this._currentActor) {
            if (this._currentActor.selectNextCommand()) return;
            this.finishActorInput();
        }
        this.selectNextActor();
    } // selectNextCommand

    static selectNextActor() {
        this.changeCurrentActor(true);
        if (!this._currentActor) {
            /** @todo Extracts these codes into a well-named function */
            if (this.isTpb()) return this.changeCurrentActor(true);
            this.startTurn();
            //
        }
    } // selectNextActor

    static selectPreviousCommand() {
        if (this._currentActor) {
            if (this._currentActor.selectPreviousCommand()) return;
            this.cancelActorInput();
        }
        this.selectPreviousActor();
    } // selectPreviousCommand

    static selectPreviousActor() {
        // Edited to help plugins alter select previous actor in better ways
        if (this.isTpb()) return this._selectPrevTpbActor();
        //
        this.changeCurrentActor(false);
    } // selectPreviousActor

    static changeCurrentActor(forward) {
        // Edited to help plugins alter change current actor in better ways
        this._currentActor = this._newCurActor_(forward);
        //
        this.startActorInput();
    } // changeCurrentActor

    static startActorInput() {
        // Edited to help plugins alter start actor input in better ways
        if (this._currentActor) this._startCurActorInput();
        //
    } // startActorInput

    static finishActorInput() {
        // Edited to help plugins alter finish actor input in better ways
        if (this._currentActor) this._finishCurActorInput();
        //
    } // finishActorInput

    static cancelActorInput() {
        if (this._currentActor) this._currentActor.setActionState("undecided");
    } // cancelActorInput

    static updateStart() {
        this.isTpb() ? this._phase = "turn" : this.startInput();
    } // updateStart

    static startTurn() {
        this._phase = "turn";
        $gameTroop.increaseTurn();
        $gameParty.requestMotionRefresh();
        // Edited to help plugins alter start turn based turn in better ways
        if (!this.isTpb()) this._startTurnWithoutTpb();
        //
    } // startTurn

    static updateTurn(timeActive) {
        $gameParty.requestMotionRefresh();
        const isTpb = this.isTpb();
        if (isTpb && timeActive) this.updateTpb();
        if (!this._subject) this._subject = this.getNextSubject();
        if (this._subject) return this.processTurn();
        if (!isTpb) this.endTurn();
    } // updateTurn

    static updateTpb() {
        $gameParty.updateTpb();
        $gameTroop.updateTpb();
        this.updateAllTpbBattlers();
        this.checkTpbTurnEnd();
    } // updateTpb

    static updateAllTpbBattlers() {
        this.allBattleMembers().forEach(this.updateTpbBattler, this);
    } // updateAllTpbBattlers

    static updateTpbBattler(battler) {
        // Edited to help plugins alter the update tpb battler in better ways
        if (battler.isTpbTurnEnd()) {
            return this._updateTpbBattlerTurnEnd(battler);
        }
        if (battler.isTpbReady()) return this._updateReadyTpbBattler(battler);
        if (battler.isTpbTimeout()) this._updateTpbBattlerTimeout(battler);
        //
    } // updateTpbBattler

    static checkTpbTurnEnd() { if ($gameTroop.isTpbTurnEnd()) this.endTurn(); }

    static processTurn() {
        const action = this._subject.currentAction();
        // Edited to help plugins alter process turn behaviors in better ways
        if (action) return this._procTurnWithAct(action);
        this._procTurnWithoutAct();
        //
    } // processTurn

    static endBattlerActions(battler) {
        // Edited to help plugins alter battler action end state in better ways
        battler.setActionState(this._battlerActEndState());
        //
        battler.onAllActionsEnd();
        battler.clearTpbChargeTime();
        this.displayBattlerStatus(battler, true);
    } // endBattlerActions

    static endTurn() {
        this._phase = "turnEnd", this._preemptive = this._surprise = false;
        if (!this.isTpb()) this.endAllBattlersTurn();
    } // endTurn

    static endAllBattlersTurn() {
        // Edited to help plugins alter end all battlers turn in better ways
        this.allBattleMembers().forEach(this._endBattlerTurn, this);
        //
    } // endAllBattlersTurn

    static displayBattlerStatus(battler, current) {
        this._logWindow.displayAutoAffectedStatus(battler);
        if (current) this._logWindow.displayCurrentState(battler);
        this._logWindow.displayRegeneration(battler);
    } // displayBattlerStatus

    static updateTurnEnd() {
        this.isTpb() ? this.startTurn() : this.startInput();
    } // updateTurnEnd

    static getNextSubject() {
        for (;;) {
            const battler = this._actionBattlers.shift();
            if (!battler) return null;
            if (battler.isBattleMember() && battler.isAlive()) return battler;
        }
    } // getNextSubject

    static allBattleMembers() {
        return $gameParty.battleMembers().concat($gameTroop.members());
    } // allBattleMembers
     
    // Edited to help plugins alter make action orders in better ways
    static makeActionOrders() { this._actionBattlers = this._newActBattlers(); }
    //

    static startAction() {
        const subject = this._subject, action = subject.currentAction();
        const targets = action.makeTargets();
        [this._phase, this._action, this._targets] = ["action", action, targets];
        subject.useItem(action.item());
        this._action.applyGlobal();
        this._logWindow.startAction(subject, action, targets);
    } // startAction

    static updateAction() {
        const target = this._targets.shift();
        if (target) return this.invokeAction(this._subject, target);
        this.endAction();
    } // updateAction

    static endAction() {
        this._logWindow.endAction(this._subject);
        this._phase = "turn";
        /** @todo Extracts these codes into well-named functions */
        if (this._subject.numActions() !== 0) return;
        this.endBattlerActions(this._subject);
        this._subject = null;
        //
    } // endAction

    static invokeAction(subject, target) {
        this._logWindow.push("pushBaseLine");
        // Edited to help plugins alter invoke action behaviors in better ways
        if (this._isInvokeCnt(target)) {
            this.invokeCounterAttack(subject, target);
        } else if (this._isInvokeMrf(target)) {
            this.invokeMagicReflection(subject, target);
        } else this.invokeNormalAction(subject, target);
        //
        subject.setLastTarget(target);
        this._logWindow.push("popBaseLine");
    } // invokeAction

    static invokeNormalAction(subject, target) {
        const realTarget = this.applySubstitute(target);
        this._action.apply(realTarget);
        this._logWindow.displayActionResults(subject, realTarget);
    } // invokeNormalAction

    static invokeCounterAttack(subject, target) {
        const action = new Game_Action(target);
        action.setAttack();
        action.apply(subject);
        this._logWindow.displayCounter(target);
        this._logWindow.displayActionResults(target, subject);
    } // invokeCounterAttack

    static invokeMagicReflection(subject, target) {
        this._action._reflectionTarget = target;
        this._logWindow.displayReflection(target);
        this._action.apply(subject);
        this._logWindow.displayActionResults(target, subject);
    } // invokeMagicReflection

    static applySubstitute(target) {
        if (!this.checkSubstitute(target)) return target;
        return this._displayedSubTarget(target);
    } // applySubstitute

    static checkSubstitute(target) {
        return target.isDying() && !this._action.isCertainHit();
    } // checkSubstitute

    static isActionForced() { return !!this._actionForcedBattler; }

    static forceAction(battler) {
         this._actionForcedBattler = battler;
         this._actionBattlers.remove(battler);
     } // forceAction

    static processForcedAction() {
        // Edited to help plugins alter process forced actions in better ways
        if (this._actionForcedBattler) this._procForcedActBattler();
        //
    } // processForcedAction

    static abort() { this._phase = "aborting"; }

    static checkBattleEnd() {
        // Added _isBattleEnd to help plugins check if the battle should end
        if (!this._phase) return this._isBattleEnd = false;
        if (this.checkAbort()) return this._isBattleEnd = true;
        if ($gameParty.isAllDead()) {
            this.processDefeat();
        } else if ($gameTroop.isAllDead()) this.processVictory();
        return this._isBattleEnd = true;
        //
    } // checkBattleEnd

    static checkAbort() {
        if (this._isProcAbort()) this.processAbort();
        return false;
    } // checkAbort

    static processVictory() {
        $gameParty.removeBattleStates();
        $gameParty.performVictory();
        this.playVictoryMe();
        this.replayBgmAndBgs();
        this.makeRewards();
        this.displayVictoryMessage();
        this.displayRewards();
        this.gainRewards();
        this.endBattle(0);
    } // processVictory

    static processEscape() {
        $gameParty.performEscape();
        SoundManager.playEscape();
        const success = this._isEscSuc();
        success ? this.onEscapeSuccess() : this.onEscapeFailure();
        return success;
    } // processEscape

    static onEscapeSuccess() {
        this.displayEscapeSuccessMessage();
        this._escaped = true;
        this.processAbort();
    } // onEscapeSuccess

    static onEscapeFailure() {
        $gameParty.onEscapeFailure();
        this.displayEscapeFailureMessage();
        // Edited to help plugins alter escape ratio increment in better ways
        this._escapeRatio += this._escRatioIncrement();
        //
        if (!this.isTpb()) this.startTurn();
    } // onEscapeFailure

    static processAbort() {
        $gameParty.removeBattleStates();
        this._logWindow.clear();
        this.replayBgmAndBgs();
        this.endBattle(1);
    } // processAbort

    static processDefeat() {
        this.displayDefeatMessage();
        this.playDefeatMe();
        this._canLose ? this.replayBgmAndBgs() : AudioManager.stopBgm();
        this.endBattle(2);
    } // processDefeat

    static endBattle(result) {
        this._phase = "battleEnd";
        this.cancelActorInput();
        this._inputting = false;
        if (this._eventCallback) this._eventCallback(result);
        if (result === 0) return $gameSystem.onBattleWin();
        if (this._escaped) $gameSystem.onBattleEscape();
    } // endBattle

    static updateBattleEnd() {
        // Edited to help plugins alter update battle end in better ways
        if (this.isBattleTest()) {
            this._updateBattleTestEnd();
        } else if (this._shouldDefeat()) {
            this._updateBattleEndDefeat();
        } else SceneManager.pop();
        //
        this._phase = "";
    } // updateBattleEnd

    // Edited to help plugins alter make rewards behaviors in better ways
    static makeRewards() { this._rewards = this._newRewards(); }
    //

    static displayVictoryMessage() {
        $gameMessage.add(TextManager.victory.format($gameParty.name()));
    } // displayVictoryMessage

    static displayDefeatMessage() {
        $gameMessage.add(TextManager.defeat.format($gameParty.name()));
    } // displayDefeatMessage

    static displayEscapeSuccessMessage() {
        $gameMessage.add(TextManager.escapeStart.format($gameParty.name()));
    } // displayEscapeSuccessMessage

    static displayEscapeFailureMessage() {
        $gameMessage.add(TextManager.escapeStart.format($gameParty.name()));
        $gameMessage.add(`\\.${TextManager.escapeFailure}`);
    } // displayEscapeFailureMessage

    static displayRewards() {
        this.displayExp();
        this.displayGold();
        this.displayDropItems();
    } // displayRewards

    static displayExp() {
        const exp = this._rewards.exp;
        if (exp <= 0) return;
        const text = TextManager.obtainExp.format(exp, TextManager.exp);
        $gameMessage.add(`\\.${text}`);
    } // displayExp

    static displayGold() {
        const gold = this._rewards.gold;
        if (gold <= 0) return;
        $gameMessage.add(`\\.${TextManager.obtainGold.format(gold)}`);
    } // displayGold

    static displayDropItems() {
        // Edited to help plugins alter display drop items in better ways
        if (!this._rewards.items.isEmpty()) this._displayExistingDropItems();
        //
    } // displayDropItems

    static gainRewards() {
        this.gainExp();
        this.gainGold();
        this.gainDropItems();
    } // gainRewards

    static gainExp() {
        const exp = this._rewards.exp;
        $gameParty.allMembers().forEach(actor => actor.gainExp(exp));
    } // gainExp

    static gainGold() { $gameParty.gainGold(this._rewards.gold); }

    static gainDropItems() {
        this._rewards.items.forEach(item => $gameParty.gainItem(item, 1));
    } // gainDropItems

    /**
     * Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @returns {boolean} Whether the battle has a preemptive start
     */
    static _encounterPreemptive() {
        return Math.random() < this.ratePreemptive();
    } // _encounterPreemptive

    /**
     * Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @returns {boolean} Whether the battle has a surprise start
     */
    static _encounterSurprise() {
        return Math.random() < this.rateSurprise() && !this._preemptive;
    } // _encounterSurprise

    /**
     * Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @returns {number} The probability of the party escape attempt to succeed
     */
    static _newEscRatio() {
        return 0.5 * $gameParty.agility() / $gameTroop.agility();
    } // _newEscRatio

    /**
     * Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @returns {boolean} Whether the current input progress should be cancelled
     */
    static _isCancelCurInput() {
        return !this.isPartyTpbInputtable() || this.needsActorInputCancel();
    } // _isCancelCurInput

    /**
     * Cancels the player inputs of the currently inputting actor
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    static _cancelCurInput() {
        this.cancelActorInput();
        [this._currentActor, this._inputting] = [null, false];
    } // _cancelCurInput

    /**
     * Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @returns {boolean} Whether players can input actions for the game party
     */
    static _canInputActs() { return !this._surprise && $gameParty.canInput(); }

    /**
     * Selects the previous inputable actor in the TPB system
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    static _selectPrevTpbActor() {
        this.changeCurrentActor(true);
        if (!this._currentActor) this._inputting = $gameParty.canInput();
    } // _selectPrevTpbActor

    /**
     * Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @returns {Game_Actor?} The actor as the selected one to input actions
     */
    static _newCurActor_(forward) {
        const members = $gameParty.battleMembers();
        const iIncrement = forward ? 1 : -1;
        let currentI = members.indexOf(this._currentActor);
        for (;;) {
            currentI += iIncrement;
            const actor = members[currentI];
            if (!actor) return null;
            if (actor.canInput()) return actor;
        }
    } // _newCurActor_

    /**
     * This function shouldn't be called without the existing current actor
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    static _startCurActorInput() {
        this._currentActor.setActionState("inputting");
        this._inputting = true;
    } // _startCurActorInput

    /**
     * This function shouldn't be called without the existing current actor
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    static _finishCurActorInput() {
        if (this.isTpb()) this._currentActor.startTpbCasting();
        this._currentActor.setActionState("waiting");
    } // _finishCurActorInput

    /**
     * Starts the battle turn in the default turn based battle system
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    static _startTurnWithoutTpb() {
        this.makeActionOrders();
        this._logWindow.startTurn();
        this._inputting = false;
    } // _startTurnWithoutTpb

    /**
     * Updates the battler individual turn in the TPB system
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {Game_Battler} battler - The battler to have the turn ended
     */
    static _updateTpbBattlerTurnEnd(battler) {
        battler.onTurnEnd();
        battler.startTpbTurn();
        this.displayBattlerStatus(battler, false);
    } // _updateTpbBattlerTurnEnd

    /**
     * Updates the battler being ready to execute actions
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {Game_Battler} battler - The battler ready to execute actions
     */
    static _updateReadyTpbBattler(battler) {
        battler.startTpbAction();
        this._actionBattlers.push(battler);
    } // _updateReadyTpbBattler

    /**
     * Updates the battler just reaching the timeout
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {Game_Battler} battler - The battler just reaching the timeout
     */
    static _updateTpbBattlerTimeout(battler) {
        battler.onTpbTimeout();
        this.displayBattlerStatus(battler, true);
    } // _updateTpbBattlerTimeout

    /**
     * Processes the battle turn with an action to be executed
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {Game_Action} action - The action to be executed
     */
    static _procTurnWithAct(action) {
        action.prepare();
        if (action.isValid()) this.startAction();
        this._subject.removeCurrentAction();
    } // _procTurnWithAct

    /**
     * Processes the battle turn without an action to be executed
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    static _procTurnWithoutAct() {
        this.endAction();
        this._subject = null;
    } // _procTurnWithoutAct

    /**
     * Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @returns {pose} The pose of the battler ending executing an action
     */
    static _battlerActEndState() { return this.isTpb() ? "undecided" : "done"; }

    /**
     * Ends the individual turn of the specified battler
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @returns {Game_Battler} battler - The battler to have the turn ended
     */
    static _endBattlerTurn(battler) {
        battler.onTurnEnd();
        this.displayBattlerStatus(battler, false);
    } // _endBattlerTurn

    /**
     * Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @returns {[Game_Battler]} The list of action execution subjects
     */
    static _newActBattlers() {
        const battlers = [];
        if (!this._surprise) battlers.push(...$gameParty.battleMembers());
        if (!this._preemptive) battlers.push(...$gameTroop.members());
        battlers.forEach(battler => battler.makeSpeed());
        battlers.sort((a, b) => b.speed() - a.speed());
        return battlers;
    } // _newActBattlers

    /**
     * Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @returns {boolean} Whether the battle should be aborted
     */
    static _isInvokeCnt(target) {
        return Math.random() < this._action.itemCnt(target);
    } // _isInvokeCnt

    /**
     * Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @returns {boolean} Whether the battle should be aborted
     */
    static _isInvokeMrf(target) {
        return Math.random() < this._action.itemMrf(target);
    } // _isInvokeMrf

    /**
     * Displays the action target substitute if any
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @returns {Game_Battler} The battler as the action target substitute
     */
    static _displayedSubTarget(target) {
        const substitute = target.friendsUnit().substituteBattler();
        if (!substitute || target === substitute) return target;
        this._logWindow.displaySubstitute(substitute, target);
        return substitute;
    } // _displayedSubTarget

    /**
     * Setups the forced action and its action execution subject
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    static _procForcedActBattler() {
        if (this._subject) this.endBattlerActions(this._subject);
        this._subject = this._actionForcedBattler;
        this._actionForcedBattler = null;
        this.startAction();
        this._subject.removeCurrentAction();
    } // _procForcedActBattler

    /**
     * Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @returns {boolean} Whether the battle should be aborted
     */
    static _isProcAbort() { return $gameParty.isEmpty() || this.isAborting(); }

    /**
     * Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @returns {boolean} Whether the party escape attempt should succeed
     */
    static _isEscSuc() {
        return this._preemptive || Math.random() < this._escapeRatio;
    } //_isEscSuc

    /**
     * Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @returns {number} The party escape attempt success probability increment
     */
    static _escRatioIncrement() { return 0.1; }

    /**
     * Triggers events to happen upon a battle test end
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    static _updateBattleTestEnd() {
        AudioManager.stopBgm();
        SceneManager.exit();
    } // _updateBattleTestEnd

    /**
     * Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @returns {boolean} Whether the battle should end with a defeat
     */
    static _shouldDefeat() { return !this._escaped && $gameParty.isAllDead(); }

    /**
     * Triggers events to happen upon a battle that's supposed to be a defeat
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    static _updateBattleEndDefeat() {
        if (this._canLose) return this._updateBattleEndCanLose();
        SceneManager.goto(Scene_Gameover);
    } // _updateBattleEndDefeat

    /**
     * Triggers events to happen upon a battle that's lost but can lose
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    static _updateBattleEndCanLose() {
        $gameParty.reviveBattleMembers();
        SceneManager.pop();
    } // _updateBattleEndCanLose

    /**
     * Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @returns {{*}} The new battle victory rewards
     */
    static _newRewards() {
        return {
            gold: $gameTroop.goldTotal(),
            exp: $gameTroop.expTotal(),
            items: $gameTroop.makeDropItems()
        };
    } // _newRewards

    /**
     * Displays all existing drop items as the battle victory rewards
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    static _displayExistingDropItems() {
        $gameMessage.newPage();
        this._rewards.items.forEach(({ name }) => {
            $gameMessage.add(TextManager.obtainItem.format(name));
       });
    } // _displayExistingDropItems

} // BattleManager

/*----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------
 *    ## Objects
 *----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------
 *    # Rewritten class: Game_Temp
 *      - Rewrites it into the ES6 standard
 *----------------------------------------------------------------------------*/

//-----------------------------------------------------------------------------
// Game_Temp
//
// The game object class for temporary data that is not included in save data.
class Game_Temp {

    constructor() {
        this._isPlaytest = Utils.isOptionValid("test");
        /** @todo Considers using clearDestination, clearTouchState, etc */
        this._destinationX = this._destinationY = null;
        [this._touchTarget, this._touchState] = [null, ""];
        this._needsBattleRefresh = false;
        //
        [this._commonEventQueue, this._animationQueue] = [[], []];
        [this._balloonQueue, this._lastActionData] = [[], [0, 0, 0, 0, 0, 0]];
    } // constructor

    isPlaytest() { return this._isPlaytest; }

    setDestination(x, y) { [this._destinationX, this._destinationY] = [x, y]; }

    clearDestination() { this._destinationX = this._destinationY = null; }

    isDestinationValid() { return this._destinationX !== null; }

    destinationX() { return this._destinationX; }

    destinationY() { return this._destinationY; }

    setTouchState(target, state) {
        [this._touchTarget, this._touchState] = [target, state];
    } // setTouchState

    clearTouchState() { [this._touchTarget, this._touchState] = [null, ""]; }

    touchTarget() { return this._touchTarget; }

    touchState() { return this._touchState; }

    requestBattleRefresh() {
        if ($gameParty.inBattle()) this._needsBattleRefresh = true;
    }

    clearBattleRefreshRequest() { this._needsBattleRefresh = false; }

    isBattleRefreshRequested() { return this._needsBattleRefresh; }

    reserveCommonEvent(commonEventId) {
        this._commonEventQueue.push(commonEventId);
    } // reserveCommonEvent

    retrieveCommonEvent() {
        return $dataCommonEvents[this._commonEventQueue.shift()];
    } // retrieveCommonEvent

    isCommonEventReserved() { return !this._commonEventQueue.empty(); }

    // prettier-ignore
    requestAnimation(targets, animationId, mirror = false) {
        if (!$dataAnimations[animationId]) return;
        // Edited to help plugins alter request animation in better ways
        this._requestExistingAnimation(targets, animationId, mirror);
        //
    } // requestAnimation

    retrieveAnimation() { return this._animationQueue.shift(); }

    requestBalloon(target, balloonId) {
        this._balloonQueue.push({ target, balloonId });
        if (target.startBalloon) target.startBalloon();
    } // requestBalloon

    retrieveBalloon() { return this._balloonQueue.shift(); }

    lastActionData(type) { return this._lastActionData[type] || 0; }

    setLastActionData(type, value) { this._lastActionData[type] = value; }

    setLastUsedSkillId(skillID) { this.setLastActionData(0, skillID); }

    setLastUsedItemId(itemID) { this.setLastActionData(1, itemID); }

    setLastSubjectActorId(actorID) { this.setLastActionData(2, actorID); }

    setLastSubjectEnemyIndex(enemyIndex) {
        this.setLastActionData(3, enemyIndex);
    } // setLastSubjectEnemyIndex

    setLastTargetActorId(actorID) { this.setLastActionData(4, actorID); }

    setLastTargetEnemyIndex(enemyIndex) {
        this.setLastActionData(5, enemyIndex);
    } // setLastTargetEnemyIndex

    /**
     * This method shouldn't be called without a valid animation id
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {[Game_Character]} targets - The list of targets to have animation
     * @param {id} animationId - The id of the animation to be requested
     * @param {boolean} mirror - 
     */
    _requestExistingAnimation(targets, animationId, mirror) {
        this._animationQueue.push({ targets, animationId, mirror });
        this._startTargetAnimations(targets);
    } // _requestExistingAnimation

    /**
     * Starts the animations of all targets if available
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {[Game_Character]} targets - The list of targets to have animation
     */
    _startTargetAnimations(targets) {
        targets.forEach(target => {
            if (target.startAnimation) target.startAnimation();
        });
    } // _startTargetAnimations

    // RMMV instance method not present in the default RMMZ codebase
    clearCommonEvent() {
        this._commonEventQueue.length = 0;
    }

} // Game_Temp

/*----------------------------------------------------------------------------
 *    # Rewritten class: Game_System
 *      - Rewrites it into the ES6 standard
 *----------------------------------------------------------------------------*/

//-----------------------------------------------------------------------------
// Game_System
//
// The game object class for the system data.
class Game_System {

    constructor() {
        this._saveEnabled = this._menuEnabled = true;
        this._encounterEnabled = this._formationEnabled = true;
        this._battleCount = this._winCount = this._escapeCount = 0;
        this._saveCount = 0;
        this._versionId = this._savefileId = 0;
        this._framesOnSave = 0;
        this._bgmOnSave = this._bgsOnSave = null;
        this._windowTone = this._battleBgm = null;
        this._victoryMe = this._defeatMe = null;
        this._savedBgm = this._walkingBgm = null;
    } // constructor

    isJapanese() { return $dataSystem.locale.match(/^ja/); }

    isChinese() { return $dataSystem.locale.match(/^zh/); }

    isKorean() { return $dataSystem.locale.match(/^ko/); }

    isCJK() { return $dataSystem.locale.match(/^(ja|zh|ko)/); }

    isRussian() { return $dataSystem.locale.match(/^ru/); }

    isSideView() { return $dataSystem.optSideView; }

    isAutosaveEnabled() { return $dataSystem.optAutosave; }

    isSaveEnabled() { return this._saveEnabled; }

    disableSave() { this._saveEnabled = false; }

    enableSave() { this._saveEnabled = true; }

    isMenuEnabled() { return this._menuEnabled; }

    disableMenu() { this._menuEnabled = false; }

    enableMenu() { this._menuEnabled = true; }

    isEncounterEnabled() { return this._encounterEnabled; }

    disableEncounter() { this._encounterEnabled = false; }

    enableEncounter() { this._encounterEnabled = true; }

    isFormationEnabled() { return this._formationEnabled; }

    disableFormation() { this._formationEnabled = false; }

    enableFormation() { this._formationEnabled = true; }

    battleCount() { return this._battleCount; }

    winCount() { return this._winCount; }

    escapeCount() { return this._escapeCount; }

    saveCount() { return this._saveCount; }

    versionId() { return this._versionId; }

    savefileId() { return this._savefileId || 0; }

    setSavefileId(savefileId) { this._savefileId = savefileId; }

    windowTone() { return this._windowTone || $dataSystem.windowTone; }

    setWindowTone(value) { this._windowTone = value; }

    battleBgm() { return this._battleBgm || $dataSystem.battleBgm; }

    setBattleBgm(value) { this._battleBgm = value; }

    victoryMe() { return this._victoryMe || $dataSystem.victoryMe; }

    setVictoryMe(value) { this._victoryMe = value; }

    defeatMe() { return this._defeatMe || $dataSystem.defeatMe; }

    setDefeatMe(value) { this._defeatMe = value; }

    onBattleStart() { this._battleCount++; }

    onBattleWin() { this._winCount++; }

    onBattleEscape() { this._escapeCount++; }

    onBeforeSave() {
        this._saveCount++;
        this._versionId = $dataSystem.versionId;
        this._framesOnSave = Graphics.frameCount;
        this._bgmOnSave = AudioManager.saveBgm();
        this._bgsOnSave = AudioManager.saveBgs();
    } // onBeforeSave

    onAfterLoad() {
        Graphics.frameCount = this._framesOnSave;
        AudioManager.playBgm(this._bgmOnSave);
        AudioManager.playBgs(this._bgsOnSave);
    } // onAfterLoad

    // Edited to help plugins alter the fps in better ways
    playtime() { return Math.floor(Graphics.frameCount / Graphics.fps); }
    //

    playtimeText() {
        const playTime = this.playtime(), playMin = playTime / 60;
        const hour = Math.floor(playMin / 60);
        const [min, sec] = [Math.floor(playMin) % 60, playTime % 60];
        return `${hour.padZero(2)}:${min.padZero(2)}:${sec.padZero(2)}`;
    } // playtimeText

    saveBgm() { this._savedBgm = AudioManager.saveBgm(); }

    replayBgm() { if (this._savedBgm) AudioManager.replayBgm(this._savedBgm); }

    saveWalkingBgm() { this._walkingBgm = AudioManager.saveBgm(); }

    replayWalkingBgm() {
        if (this._walkingBgm) AudioManager.playBgm(this._walkingBgm);
    } // replayWalkingBgm

    saveWalkingBgm2() { this._walkingBgm = $dataMap.bgm; }

    mainFontFace() {
        return `rmmz-mainfont, ${$dataSystem.advanced.fallbackFonts}`;
    } // mainFontFace

    numberFontFace() { return "rmmz-numberfont, " + this.mainFontFace(); }

    mainFontSize() { return $dataSystem.advanced.fontSize; }

    windowPadding() { return 12; }

} // Game_System

/*----------------------------------------------------------------------------
 *    # Rewritten class: Game_Timer
 *      - Rewrites it into the ES6 standard
 *----------------------------------------------------------------------------*/

//-----------------------------------------------------------------------------
// Game_Timer
//
// The game object class for the timer.
class Game_Timer {

    constructor() { [this._frames, this._working] = [0, false]; }

    update(sceneActive) {
        // Edited to help plugins alter the update behaviors in better ways
        if (this._isActive(sceneActive)) this._updateWhenActive();
        //
    } // update

    start(count) { [this._frames, this._working] = [count, true]; }

    stop() { this._working = false; }

    isWorking() { return this._working; }

    // Edited to help plugins alter the fps in better ways
    seconds() { return Math.floor(this._frames / Graphics.fps); }
    //

    onExpire() { BattleManager.abort(); }

    /**
     * Hotspot/Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @returns {boolean} Whether the timer's still active
     */
    _isActive(sceneActive) {
        return sceneActive && this._working && this._frames > 0;
    } // _isActive

    /**
     * Updates the timer when it's still active
     * Hotspot
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    _updateWhenActive() {
        this._frames--;
        if (this._frames === 0) this.onExpire();
    } // _updateWhenActive

} // Game_Timer

/*----------------------------------------------------------------------------
 *    # Rewritten class: Game_Message
 *      - Rewrites it into the ES6 standard
 *----------------------------------------------------------------------------*/

//-----------------------------------------------------------------------------
// Game_Message
//
// The game object class for the state of the message window that displays text
// or selections, etc.
class Game_Message {

    constructor() { this.clear(); }

    clear() {
        [this._texts, this._choices] = [[], []];
        this._speakerName = this._faceName = "";
        this._faceIndex = this._background = 0;
        this._positionType = 2;
        this._choiceDefaultType = this._choiceCancelType = 0;
        this._choiceBackground = 0;
        this._choicePositionType = 2;
        this._numInputVariableId = this._numInputMaxDigits = 0;
        this._itemChoiceVariableId = this._itemChoiceItypeId = 0;
        [this._scrollMode, this._scrollSpeed] = [false, 2];
        [this._scrollNoFast, this._choiceCallback] = [false, null];
    } // clear

    choices() { return this._choices; }

    speakerName() { return this._speakerName; }

    faceName() { return this._faceName; }

    faceIndex() { return this._faceIndex; }

    background() { return this._background; }

    positionType() { return this._positionType; }

    choiceDefaultType() { return this._choiceDefaultType; }

    choiceCancelType() { return this._choiceCancelType; }

    choiceBackground() { return this._choiceBackground; }

    choicePositionType() { return this._choicePositionType; }

    numInputVariableId() { return this._numInputVariableId; }

    numInputMaxDigits() { return this._numInputMaxDigits; }

    itemChoiceVariableId() { return this._itemChoiceVariableId; }

    itemChoiceItypeId() { return this._itemChoiceItypeId; }

    scrollMode() { return this._scrollMode; }

    scrollSpeed() { return this._scrollSpeed; }

    scrollNoFast() { return this._scrollNoFast; }

    add(text) { this._texts.push(text); }

    setSpeakerName(speakerName) { this._speakerName = speakerName || ""; }

    setFaceImage(faceName, faceIndex) {
        [this._faceName, this._faceIndex] = [faceName, faceIndex];
    } // setFaceImage

    setBackground(background) { this._background = background; }

    setPositionType(positionType) { this._positionType = positionType; }

    setChoices(choices, defaultType, cancelType) {
        this._choices = choices;
        this._choiceDefaultType = defaultType;
        this._choiceCancelType = cancelType;
    } // setChoices

    setChoiceBackground(background) { this._choiceBackground = background; }

    setChoicePositionType(positionType) {
        this._choicePositionType = positionType;
    } // setChoicePositionType

    setNumberInput(variableId, maxDigits) {
        this._numInputVariableId = variableId;
        this._numInputMaxDigits = maxDigits;
    } // setNumberInput

    setItemChoice(variableId, itemType) {
        this._itemChoiceVariableId = variableId;
        this._itemChoiceItypeId = itemType;
    } // setItemChoice

    setScroll(speed, noFast) {
        this._scrollMode = true;
        [this._scrollSpeed, this._scrollNoFast] = [speed, noFast];
    } // setScroll

    setChoiceCallback(callback) { this._choiceCallback = callback; }

    onChoice(n) {
        if (!this._choiceCallback) return;
        this._choiceCallback(n);
        this._choiceCallback = null;
    } // onChoice

    hasText() { return !this._texts.isEmpty(); }

    isChoice() { return !this._choices.isEmpty(); }

    isNumberInput() { return this._numInputVariableId > 0; }

    isItemChoice() { return this._itemChoiceVariableId > 0; }

    isBusy() {
        if (this.hasText() || this.isChoice()) return true;
        return this.isNumberInput() || this.isItemChoice();
    } // isBusy

    newPage() {
        if (this.hasText()) this._texts[this._texts.length - 1] += "\f";
    } // newPage

    allText() { return this._texts.join("\n"); }

    isRTL() { return Utils.containsArabic(this.allText()); }

} // Game_Message

/*----------------------------------------------------------------------------
 *    # Rewritten class: Game_Switches
 *      - Rewrites it into the ES6 standard
 *----------------------------------------------------------------------------*/

//-----------------------------------------------------------------------------
// Game_Switches
//
// The game object class for switches.
class Game_Switches {

    constructor() { this.clear(); }

    clear() { this._data = []; }

    value(switchId) { return !!this._data[switchId]; }

    setValue(switchId, value) {
        // Edited to help plugins alter set value behaviors in better ways
        if (!this._isValidSwitchId(switchId)) return;
        this._setValidSwitchVal(switchId, value);
        //
    } // setValue

    onChange() { $gameMap.requestRefresh(); }

    /**
     * Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {id} switchId - The switch id to be checked against
     * @returns {boolean} Whether the specified switch id's valid
     */
    _isValidSwitchId(switchId) {
        return switchId > 0 && switchId < $dataSystem.switches.length;
    } // _isValidSwitchId

    /**
     * Updates the timer when it's still active
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {id} switchId - The id of the specified game switch
     * @param {boolean} val - The new state of the specified game switch
     */
    _setValidSwitchVal(switchId, val) {
        this._data[switchId] = val;
        this.onChange();
    } // _setValidSwitchVal

} // Game_Switches

/*----------------------------------------------------------------------------
 *    # Rewritten class: Game_Variables
 *      - Rewrites it into the ES6 standard
 *----------------------------------------------------------------------------*/

//-----------------------------------------------------------------------------
// Game_Variables
//
// The game object class for variables.
class Game_Variables {

    constructor() { this.clear(); }

    clear() { this._data = []; }

    value(variableId) { return this._data[variableId] || 0; }

    setValue(variableId, value) {
        // Edited to help plugins alter set value behaviors in better ways
        if (!this._isValidVarId(variableId)) return;
        this._setValidVarVal(variableId, value);
        //
    } // setValue

    onChange() { $gameMap.requestRefresh(); }

    /**
     * Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {id} varId - The variable id to be checked against
     * @returns {boolean} Whether the specified variable id's valid
     */
    _isValidVarId(varId) {
        return varId > 0 && varId < $dataSystem.variables.length;
    } // _isValidVarId

    /**
     * Updates the timer when it's still active
     * Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {id} varId - The id of the specified game variable
     * @param {*} val - The new value of the specified game variable
     */
    _setValidVarVal(varId, val) {
        /** @todo Figures out why numbers are supposed to be integers */
        this._data[varId] = Number.isNaN(val) ? val : Math.floor(val);
        //
        this.onChange();
    } // _setValidVarVal

} // Game_Variables

/*----------------------------------------------------------------------------
 *    # Rewritten class: Game_SelfSwitches
 *      - Rewrites it into the ES6 standard
 *----------------------------------------------------------------------------*/

//-----------------------------------------------------------------------------
// Game_SelfSwitches
//
// The game object class for self switches.
class Game_SelfSwitches {

    constructor() { this.clear(); }

    clear() { this._data = {}; }

    value(key) { return !!this._data[key]; }

    setValue(key, value) {
        value ? this._data[key] = true : delete this._data[key];
        this.onChange();
    } // setValue

    onChange() { $gameMap.requestRefresh(); }

} // Game_SelfSwitches

/*----------------------------------------------------------------------------
 *    # Rewritten class: Game_Screen
 *      - Rewrites it into the ES6 standard
 *----------------------------------------------------------------------------*/

//-----------------------------------------------------------------------------
// Game_Screen
//
// The game object class for screen effect data, such as changes in color tone
// and flashes.
class Game_Screen {

    constructor() { this.clear(); }

    clear() {
        this.clearFade();
        this.clearTone();
        this.clearFlash();
        this.clearShake();
        this.clearZoom();
        this.clearWeather();
        this.clearPictures();
    } // clear

    onBattleStart() {
        this.clearFade();
        this.clearFlash();
        this.clearShake();
        this.clearZoom();
        this.eraseBattlePictures();
    } // onBattleStart

    brightness() { return this._brightness; }

    tone() { return this._tone; }

    flashColor() { return this._flashColor; }

    shake() { return this._shake; }

    zoomX() { return this._zoomX; }

    zoomY() { return this._zoomY; }

    zoomScale() { return this._zoomScale; }

    weatherType() { return this._weatherType; }

    weatherPower() { return this._weatherPower; }

    picture(pictureId) { return this._pictures[this.realPictureId(pictureId)]; }

    realPictureId(pictureId) {
        if ($gameParty.inBattle()) return pictureId + this.maxPictures();
        return pictureId;
    } // realPictureId

    clearFade() {
        this._brightness = 255;
        this._fadeOutDuration = this._fadeInDuration = 0;
    } // clearFade

    clearTone() {
        [this._tone, this._toneTarget] = [[0, 0, 0, 0], [0, 0, 0, 0]];
        this._toneDuration = 0;
    } // clearTone

    clearFlash() {
        [this._flashColor, this._flashDuration] = [[0, 0, 0, 0], 0];
    } // clearFlash

    clearShake() {
        this._shakePower = this._shakeSpeed = this._shakeDuration = 0;
        [this._shakeDirection, this._shake] = [1, 0];
    } // clearShake

    clearZoom() {
        this._zoomX = this._zoomY = 0;
        this._zoomScale = this._zoomScaleTarget = 1;
        this._zoomDuration = 0;
    } // clearZoom

    clearWeather() {
        this._weatherType = "none";
        this._weatherPower = this._weatherPowerTarget = 0;
        this._weatherDuration = 0;
    } // clearWeather

    clearPictures() { this._pictures = []; }

    eraseBattlePictures() {
        this._pictures = this._pictures.slice(0, this.maxPictures() + 1);
    } // eraseBattlePictures

    maxPictures() { return 100; }

    startFadeOut(duration) {
        [this._fadeOutDuration, this._fadeInDuration] = [duration, 0];
    } // startFadeOut

    startFadeIn(duration) {
        [this._fadeInDuration, this._fadeOutDuration] = [duration, 0];
    } // startFadeIn

    startTint(tone, duration) {
        [this._toneTarget, this._toneDuration] = [tone.clone(), duration];
        if (this._toneDuration === 0) this._tone = this._toneTarget.clone();
    } // startTint

    startFlash(color, duration) {
        [this._flashColor, this._flashDuration] = [color.clone(), duration];
    } // startFlash

    startShake(power, speed, duration) {
        [this._shakePower, this._shakeSpeed] = [power, speed];
        this._shakeDuration = duration;
    } // startShake

    startZoom(x, y, scale, duration) {
        // Edited to dry up codes essentially being the identical knowledge
        this.setZoom(x, y, scale);
        //
        this._zoomDuration = duration;
    } // startZoom

    setZoom(x, y, scale) {
        [this._zoomX, this._zoomY, this._zoomScale] = [x, y, scale];
    } // setZoom

    changeWeather(type, power, duration) {
        if (type !== "none" || duration === 0) this._weatherType = type;
        this._weatherPowerTarget = type === "none" ? 0 : power;
        this._weatherDuration = duration;
        if (duration === 0) this._weatherPower = this._weatherPowerTarget;
    } // changeWeather

    update() {
        this.updateFadeOut();
        this.updateFadeIn();
        this.updateTone();
        this.updateFlash();
        this.updateShake();
        this.updateZoom();
        this.updateWeather();
        this.updatePictures();
    } // update

    // Edited to help plugins alter update fade out behaviors in better ways
    updateFadeOut() { if (this._isFadingOut()) this._updateFadingOut(); }
    //

    // Edited to help plugins alter update fade in behaviors in better ways
    updateFadeIn() { if (this._isFadingIn()) this._updateFadingIn(); }
    //

    // Edited to help plugins alter update tone behaviors in better ways
    updateTone() { if (this._isTintingTone()) this._updateTintingTone(); }
    //

    // Edited to help plugins alter update flash behaviors in better ways
    updateFlash() { if (this._isFlashing()) this._updateFlashing(); }
    //

    updateShake() {
        /** @todo Extracts these codes into well-named functions */
        if (this._shakeDuration <= 0 && this._shake === 0) return;
        const delta = (this._shakePower * this._shakeSpeed * this._shakeDirection) / 10;
        if (this._shakeDuration <= 1 && this._shake * (this._shake + delta) < 0) {
            this._shake = 0;
        } else this._shake += delta;
        if (this._shake > this._shakePower * 2) this._shakeDirection = -1;
        if (this._shake < -this._shakePower * 2) this._shakeDirection = 1;
        this._shakeDuration--;
        //
    } // updateShake

    // Edited to help plugins alter update zoom behaviors in better ways
    updateZoom() { if (this._isZooming()) this._updateZooming(); }

    updateWeather() {
        // Edited to help plugins alter update weather behaviors in better ways
        if (this._isChangingWeather()) this._updateChangingWeather();
        //
    } // updateWeather

    updatePictures() {
        this._pictures.forEach(picture => { if (picture) picture.update(); });
    } // updatePictures

    startFlashForDamage() { this.startFlash([255, 0, 0, 128], 8); }

    // prettier-ignore
    showPicture(pictureId, name, origin, x, y, scaleX, scaleY, opacity, blendMode) {
        const picture = new Game_Picture();
        picture.show(name, origin, x, y, scaleX, scaleY, opacity, blendMode);
        this._pictures[this.realPictureId(pictureId)] = picture;
    } // showPicture

    // prettier-ignore
    movePicture(pictureId, origin, x, y, scaleX, scaleY, opacity, blendMode, duration, easingType) {
        const picture = this.picture(pictureId);
        // prettier-ignore
        if (picture) picture.move(origin, x, y, scaleX, scaleY, opacity, 
                blendMode, duration, easingType);
    } // movePicture

    rotatePicture(pictureId, speed) {
        const picture = this.picture(pictureId);
        if (picture) picture.rotate(speed);
    } // rotatePicture

    tintPicture(pictureId, tone, duration) {
        const picture = this.picture(pictureId);
        if (picture) picture.tint(tone, duration);
    } // tintPicture

    erasePicture(pictureId) {
        this._pictures[this.realPictureId(pictureId)] = null;
    } // erasePicture

    /**
     * Hotspot/Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @returns {boolean} Whether the current game screen's fading out
     */
    _isFadingOut() { return this._fadeOutDuration > 0; }

    /**
     * This method shouldn't be called without a positive fade out duration
     * Hotspot/Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    _updateFadingOut() {
        const d = this._fadeOutDuration;
        this._brightness = (this._brightness * (d - 1)) / d;
        this._fadeOutDuration--;
    } // _updateFadingOut

    /**
     * Hotspot/Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @returns {boolean} Whether the current game screen's fading in
     */
    _isFadingIn() { return this._fadeInDuration > 0; }

    /**
     * This method shouldn't be called without a positive fade in duration
     * Hotspot/Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    _updateFadingIn() {
        const d = this._fadeInDuration;
        this._brightness = (this._brightness * (d - 1) + 255) / d;
        this._fadeInDuration--;
    } // _updateFadingIn

    /**
     * Hotspot/Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @returns {boolean} Whether the current game screen's tinting its tones
     */
    _isTintingTone() { return this._toneDuration > 0; }

    /**
     * This method shouldn't be called without a positive tone duration
     * Hotspot/Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    _updateTintingTone() {
        const d = this._toneDuration;
        for (let i = 0; i < 4; i++) {
            this._tone[i] = (this._tone[i] * (d - 1) + this._toneTarget[i]) / d;
        }
        this._toneDuration--;
    } // _updateTintingTone

    /**
     * Hotspot/Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @returns {boolean} Whether the current game screen's flashing
     */
    _isFlashing() { return this._flashDuration > 0; }

    /**
     * This method shouldn't be called without a positive flash duration
     * Hotspot/Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    _updateFlashing() {
        const d = this._flashDuration;
        this._flashColor[3] *= (d - 1) / d;
        this._flashDuration--;
    } // _updateFlashing

    /**
     * Hotspot/Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @returns {boolean} Whether the current game screen's zooming
     */
    _isZooming() { return this._zoomDuration > 0; }

    /**
     * This method shouldn't be called without a positive zoom duration
     * Hotspot/Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    _updateZooming() {
        const [d, t] = [this._zoomDuration, this._zoomScaleTarget];
        this._zoomScale = (this._zoomScale * (d - 1) + t) / d;
        this._zoomDuration--;
    } // _updateZooming

    /**
     * Hotspot/Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @returns {boolean} Whether the current game screen's changing weather
     */
    _isChangingWeather() { return this._weatherDuration > 0; }

    /**
     * This method shouldn't be called without a positive weather duration
     * Hotspot/Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    _updateChangingWeather() {
        const [d, t] = [this._weatherDuration, this._weatherPowerTarget];
        this._weatherPower = (this._weatherPower * (d - 1) + t) / d;
        this._weatherDuration--;
        if (this._weatherDuration === 0 && this._weatherPowerTarget === 0) {
            this._weatherType = "none";
        }
    } // _updateChangingWeather

} // Game_Screen

/*----------------------------------------------------------------------------
 *    # Rewritten class: Game_Picture
 *      - Rewrites it into the ES6 standard
 *----------------------------------------------------------------------------*/

//-----------------------------------------------------------------------------
// Game_Picture
//
// The game object class for a picture.
class Game_Picture {

    constructor() {
        this.initBasic();
        this.initTarget();
        this.initTone();
        this.initRotation();
    } // constructor

    name() { return this._name; }

    origin() { return this._origin; }

    x() { return this._x; }

    y() { return this._y; }

    scaleX() { return this._scaleX; }

    scaleY() { return this._scaleY; }

    opacity() { return this._opacity; }

    blendMode() { return this._blendMode; }

    tone() { return this._tone; }

    angle() { return this._angle; }

    initBasic() {
        this._name = "";
        this._origin = this._x = this._y = 0;
        this._scaleX = this._scaleY = 100;
        [this._opacity, this._blendMode] = [255, 0];
    } // initBasic

    initTarget() {
        [this._targetX, this._targetY] = [this._x, this._y];
        [this._targetScaleX, this._targetScaleY] = [this._scaleX, this._scaleY];
        this._targetOpacity = this._opacity;
        this._duration = this._wholeDuration = 0;
        this._easingType = this._easingExponent = 0;
    } // initTarget

    initTone() {
        this._tone = this._toneTarget = null;
        this._toneDuration = 0;
    } // initTone

    initRotation() { this._angle = this._rotationSpeed = 0; }

    // prettier-ignore
    show(name, origin, x, y, scaleX, scaleY, opacity, blendMode) {
        [this._name, this._origin] = [name, origin];
        [this._x, this._y, this._scaleX, this._scaleY] = [x, y, scaleX, scaleY];
        [this._opacity, this._blendMode] = [opacity, blendMode];
        this.initTarget();
        this.initTone();
        this.initRotation();
    } // show

    // prettier-ignore
    move(origin, x, y, scaleX, scaleY, opacity, blendMode, duration, easingType) {
        [this._origin, this._targetX, this._targetY] = [origin, x, y];
        [this._targetScaleX, this._targetScaleY] = [scaleX, scaleY];
        [this._targetOpacity, this._blendMode] = [opacity, blendMode];
        this._duration = this._wholeDuration = duration;
        [this._easingType, this._easingExponent] = [easingType, 2];
    } // move

    rotate(speed) { this._rotationSpeed = speed; }

    tint(tone, duration) {
        this._tone = this._tone || [0, 0, 0, 0];
        [this._toneTarget, this._toneDuration] = [tone.clone(), duration];
        if (this._toneDuration === 0) this._tone = this._toneTarget.clone();
    } // tint

    update() {
        this.updateMove();
        this.updateTone();
        this.updateRotation();
    } // update

    // Edited to help plugins alter update move behaviors in better ways
    updateMove() { if (this._isMoving()) this._updateMoving(); }
    //

    // Edited to help plugins alter update tone behaviors in better ways
    updateTone() { if (this._isTintingTone()) this._updateTintingTone(); }
    //

    updateRotation() {
        if (this._rotationSpeed !== 0) this._angle += this._rotationSpeed / 2;
    } // updateRotation

    applyEasing(current, target) {
        const [d, wd] = [this._duration, this._wholeDuration];
        const lt = this.calcEasing((wd - d) / wd);
        const t = this.calcEasing((wd - d + 1) / wd);
        const start = (current - target * lt) / (1 - lt);
        return start + (target - start) * t;
    } // applyEasing

    calcEasing(t) {
        const exponent = this._easingExponent;
        switch (this._easingType) {
            case 1: /* Slow start */ return this.easeIn(t, exponent);
            case 2: /* Slow end */ return this.easeOut(t, exponent);
            case 3: /* Slow start and end */ return this.easeInOut(t, exponent);
            default: return t;
        }
    } // calcEasing

    easeIn(t, exponent) { return Math.pow(t, exponent); }

    easeOut(t, exponent) { return 1 - Math.pow(1 - t, exponent); }

    easeInOut(t, exponent) {
        if (t < 0.5) return this.easeIn(t * 2, exponent) / 2;
        return this.easeOut(t * 2 - 1, exponent) / 2 + 0.5;
    } // easeInOut

    /**
     * Hotspot/Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @returns {boolean} Whether the current game picture's moving
     */
    _isMoving() { return this._duration > 0; }

    /**
     * This method shouldn't be called without a positive duration
     * Hotspot/Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    _updateMoving() {
        this._x = this.applyEasing(this._x, this._targetX);
        this._y = this.applyEasing(this._y, this._targetY);
        this._scaleX = this.applyEasing(this._scaleX, this._targetScaleX);
        this._scaleY = this.applyEasing(this._scaleY, this._targetScaleY);
        this._opacity = this.applyEasing(this._opacity, this._targetOpacity);
        this._duration--;
    } // _updateMoving

    /**
     * Hotspot/Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @returns {boolean} Whether the current game screen's tinting its tones
     */
    _isTintingTone() { return this._toneDuration > 0; }

    /**
     * This method shouldn't be called without a positive tone duration
     * Hotspot/Idempotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     */
    _updateTintingTone() {
        const d = this._toneDuration;
        for (let i = 0; i < 4; i++) {
            this._tone[i] = (this._tone[i] * (d - 1) + this._toneTarget[i]) / d;
        }
        this._toneDuration--;
    } // _updateTintingTone

    // RMMV instance method not present in the default RMMZ codebase
    erase() {
        this._name = '';
        this._origin = 0;
        this.initTarget();
        this.initTone();
        this.initRotation();
    }
    //

} // Game_Picture

/*----------------------------------------------------------------------------
 *    # Rewritten class: Game_Item
 *      - Rewrites it into the ES6 standard
 *----------------------------------------------------------------------------*/

//-----------------------------------------------------------------------------
// Game_Item
//
// The game object class for handling skills, items, weapons, and armor. It is
// required because save data should not include the database object itself.
class Game_Item {

    constructor(item) {
        [this._dataClass, this._itemId] = ["", 0];
        if (item) this.setObject(item);
    } // constructor

    isSkill() { return this._dataClass === "skill"; }

    isItem() { return this._dataClass === "item"; }

    isUsableItem() { return this.isSkill() || this.isItem(); }

    isWeapon() { return this._dataClass === "weapon"; }

    isArmor() { return this._dataClass === "armor"; }

    isEquipItem() { return this.isWeapon() || this.isArmor(); }

    isNull() { return this._dataClass === ""; }

    itemId() { return this._itemId; }

    object() {
        if (this.isSkill()) return $dataSkills[this._itemId];
        if (this.isItem()) return $dataItems[this._itemId];
        if (this.isWeapon()) return $dataWeapons[this._itemId];
        return this.isArmor() ? $dataArmors[this._itemId] : null;
    } // object

    setObject(item) {
        // Edited to help plugins alter set object behaviors in better ways
        this._dataClass = this._newDataClass(item);
        //
        this._itemId = item ? item.id : 0;
    } // setObject

    setEquip(isWeapon, itemId) {
        this._dataClass = isWeapon ? "weapon" : "armor";
        this._itemId = itemId;
    } // setEquip

    /**
     * Nullipotent
     * @author DoubleX @since 0.9.5 @version 0.9.5
     * @param {Data} item - The database item being set as this item object
     * @returns {string} The data class of the object to be set with the item
     */
    _newDataClass(item) {
        if (DataManager.isSkill(item)) return "skill";
        if (DataManager.isItem(item)) return "item";
        if (DataManager.isWeapon(item)) return "weapon";
        return DataManager.isArmor(item) ? "armor" : "";
    } // _newDataClass

} // Game_Item