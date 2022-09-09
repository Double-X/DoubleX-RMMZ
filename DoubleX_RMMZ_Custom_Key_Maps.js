/*============================================================================
 *    ## Plugin Info
 *----------------------------------------------------------------------------
 *    # Plugin Name
 *      DoubleX_RMMZ_Custom_Key_Maps
 *----------------------------------------------------------------------------
 *    # Prerequisites
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
 *      1. https://www.youtube.com/watch?v=UA4BjaNii0k
 *      This Plugin:
 *      1. https://github.com/Double-X/DoubleX-RMMZ/blob/master/DoubleX_RMMZ_Custom_Key_Maps.js
 *      Posts:
 *      1. https://forums.rpgmakerweb.com/index.php?threads/doublex_rmmz_custom_key_maps.128057/
 *      2. https://www.rpgmakercentral.com/topic/42628-doublex_rmmz_custom_key_maps/
 *      3. https://rpgmaker.net/engines/rmmz/utilities/297/
 *      4. https://www.save-point.org/thread-8176.html
 *      5. https://gdu.one/forums/topic/13657-doublex_rmmz_custom_key_maps/
 *      6. http://www.hbgames.org/forums/viewtopic.php?f=332&t=80351
 *      7. https://forum.chaos-project.com/index.php/topic,16085.new.html
 *      8. https://doublexrpgmaker.wordpress.com/2020/09/30/doublex_rmmz_custom_key_maps/
 *      9. https://www.patreon.com/posts/42155627
 *      10. https://www.makerdevs.com/plugin/doublex-rmmz-custom-key-maps
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
 *      { codebase: "1.1.0", plugin: "v1.00b" }(2020 Dec 2 GMT 0600):
 *      1. You no longer have to edit the value of
 *         DoubleX_RMMZ.Custom_Key_Maps.PLUGIN_NAME when changing this plugin
 *         file name
 *      { codebase: "1.0.2", plugin: "v1.00a" }(2020 Sep 29 GMT 1600):
 *      1. 1st version of this plugin finished
 *----------------------------------------------------------------------------
 *    # Todo
 *    1. Figures our what the IntlRo and IntlYen keys are on the keyboard
 *============================================================================*/

/*~struct~KeyMap:
 *
 * @param keyCode
 * @type select
 * @option The 1 or ! key
 * @value Digit1
 * @option The 2 key
 * @value Digit2
 * @option The 3 or # key
 * @value Digit3
 * @option The 4 or $ key
 * @value Digit4
 * @option The 5 or % key
 * @value Digit5
 * @option The 6 or ^ key
 * @value Digit6
 * @option The 7 or & key
 * @value Digit7
 * @option The 8 or * key
 * @value Digit8
 * @option The 9 or ( key
 * @value Digit9
 * @option The 0 or ) key
 * @value Digit0
 * @option The a or A key
 * @value KeyA
 * @option The b or B key
 * @value KeyB
 * @option The c or C key
 * @value KeyC
 * @option The d or D key
 * @value KeyD
 * @option The e or E key
 * @value KeyE
 * @option The f or F key
 * @value KeyF
 * @option The g or G key
 * @value KeyG
 * @option The h or H key
 * @value KeyH
 * @option The i or I key
 * @value KeyI
 * @option The j or J key
 * @value KeyJ
 * @option The k or K key
 * @value KeyK
 * @option The l or L key
 * @value KeyL
 * @option The m or M key
 * @value KeyM
 * @option The n or N key
 * @value KeyN
 * @option The o or O key
 * @value KeyO
 * @option The p or P key
 * @value KeyP
 * @option The q or Q key
 * @value KeyQ
 * @option The r or R key
 * @value KeyR
 * @option The s or S key
 * @value KeyS
 * @option The t or T key
 * @value KeyT
 * @option The u or U key
 * @value KeyU
 * @option The v or V key
 * @value KeyV
 * @option The w or W key
 * @value KeyW
 * @option The x or X key
 * @value KeyX
 * @option The y or Y key
 * @value KeyY
 * @option The z or Z key
 * @value KeyZ
 * @option The , or < key
 * @value Comma
 * @option The . or > key
 * @value Period
 * @option The ; or : key
 * @value Semicolon
 * @option The ' or " key
 * @value Quote
 * @option The [ or { key
 * @value BracketLeft
 * @option The ] or } key
 * @value BracketRight
 * @option The v or V key
 * @value KeyV
 * @option The w or W key
 * @value KeyW
 * @option The - or _ key
 * @value Minus
 * @option The = or + key
 * @value Equal
 * @option The ` or ~ key
 * @value Backquote
 * @option The \ or | key
 * @value Backslash
 * @option The left alt key
 * @value AltLeft
 * @option The right alt key
 * @value AltRight
 * @option The caps lock key
 * @value CapsLock
 * @option The left ctrl key
 * @value ControlLeft
 * @option The right ctrl key
 * @value ControlRight
 * @option The left opearting system key
 * @value OSLeft
 * @option The right operating system key
 * @value OSRight
 * @option The left shift key
 * @value ShiftLeft
 * @option The right shift key
 * @value ShiftRight
 * @option The context menu key
 * @value ContextMenu
 * @option The enter key
 * @value Enter
 * @option The space key
 * @value Space
 * @option The tab key
 * @value Tab
 * @option The del key
 * @value Delete
 * @option The end key
 * @value End
 * @option The help key
 * @value Help
 * @option The home key
 * @value Home
 * @option The insert key
 * @value Insert
 * @option The page down key
 * @value PageDown
 * @option The page up key
 * @value PageUp
 * @option The arrow down key
 * @value ArrowDown
 * @option The arrow left key
 * @value ArrowLeft
 * @option The arrow right key
 * @value ArrowRight
 * @option The arrow up key
 * @value ArrowUp
 * @option The esc key
 * @value Escape
 * @option The print scr key
 * @value PrintScreen
 * @option The scroll lock key
 * @value ScrollLock
 * @option The pause key
 * @value Pause
 * @option The pause key
 * @value Pause
 * @option The F1 key
 * @value F1
 * @option The F2 key
 * @value F2
 * @option The F3 key
 * @value F3
 * @option The F4 key
 * @value F4
 * @option The F5 key
 * @value F5
 * @option The F6 key
 * @value F6
 * @option The F7 key
 * @value F7
 * @option The F8 key
 * @value F8
 * @option The F9 key
 * @value F9
 * @option The F10 key
 * @value F10
 * @option The F11 key
 * @value F11
 * @option The F12 key
 * @value F12
 * @option The Shift + F1 key
 * @value F13
 * @option The Shift + F2 key
 * @value F14
 * @option The Shift + F3 key
 * @value F15
 * @option The Shift + F4 key
 * @value F16
 * @option The Shift + F5 key
 * @value F17
 * @option The Shift + F6 key
 * @value F18
 * @option The Shift + F7 key
 * @value F19
 * @option The Shift + F8 key
 * @value F20
 * @option The Shift + F9 key
 * @value F21
 * @option The Shift + F10 key
 * @value F22
 * @option The Shift + F11 key
 * @value F23
 * @option The Shift + F12 key
 * @value F24
 * @option The num lock key
 * @value NumLock
 * @option The numpad 0 key
 * @value Numpad0
 * @option The numpad 1 key
 * @value Numpad1
 * @option The numpad 2 key
 * @value Numpad2
 * @option The numpad 3 key
 * @value Numpad3
 * @option The numpad 4 key
 * @value Numpad4
 * @option The numpad 5 key
 * @value Numpad5
 * @option The numpad 6 key
 * @value Numpad6
 * @option The numpad 7 key
 * @value Numpad7
 * @option The numpad 8 key
 * @value Numpad8
 * @option The numpad 9 key
 * @value Numpad9
 * @option The numpad + key
 * @value NumpadAdd
 * @option The numpad , key
 * @value NumpadComma
 * @option The numpad . key
 * @value NumpadDecimal
 * @option The numpad / key
 * @value NumpadDivide
 * @option The numpad enter key
 * @value NumpadEnter
 * @option The numpad = key
 * @value NumpadEqual
 * @option The numpad * key
 * @value NumpadMultiply
 * @option The numpad - key
 * @value NumpadSubtract
 * @desc The code of the key to have a custom key name keyName
 * @default
 * @param keyName
 * @desc The custom name of the key referring to the key code keyCode
 * @default
 */

/*:
 * @url https://www.patreon.com/doublex
 * @target MZ
 * @plugindesc Versions: { codebase: "1.1.0", plugin: "v1.00b" }
 * Lets you use more keys in the keyboard for RMMZ by setting the key maps
 * @orderAfter DoubleX_RMMZ_Enhanced_Codebase
 * @author DoubleX
 *
 * @param keyMaps
 * @type struct<KeyMap>[]
 * @desc Sets the list of custom key maps with codes and names
 * @default []
 */

// jshint esversion: 6

var DoubleX_RMMZ = DoubleX_RMMZ || {}; // var must be used or game will crash

(() => {

    "use strict";

    const src = document.currentScript.src;
    const name = src.split("/").slice(-1)[0].split(".")[0].replace(/%20/g, " ");
    console.info(src, name);

    // Separates the version numbers with the rest to make the former more clear
    DoubleX_RMMZ.Custom_Key_Maps = {
        PLUGIN_NAME: name,
        VERSIONS: { codebase: "1.1.0", plugin: "v1.00b" }
    }; // DoubleX_RMMZ.Custom_Key_Maps
    //

})();

(CKM => {

    "use strict";

    const pluginCodebaseVer = CKM.VERSIONS.codebase;
    if (Utils.checkRMVersion(pluginCodebaseVer)) return;
    console.warn(`Your codebase version is ${Utils.RPGMAKER_VERSION} but must be
                 at least ${pluginCodebaseVer} to use ${CKM.PLUGIN_NAME}`);

})(DoubleX_RMMZ.Custom_Key_Maps);

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

/*============================================================================*/

/*----------------------------------------------------------------------------
 *    ## Core
 *----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------
 *    # Edited class: Input
 *      - Adds all custom key maps in this plugin to the default key mappers
 *----------------------------------------------------------------------------*/

(($, CKM) => {

    "use strict";

    const I = CKM.Input = { orig: {}, new: {} }, [ORIG, NEW] = [I.orig, I.new];

    NEW._KEY_CODES = new Map(Object.entries({
        Digit1: 49,
        Digit2: 50,
        Digit3: 51,
        Digit4: 52,
        Digit5: 53,
        Digit6: 54,
        Digit7: 55,
        Digit8: 56,
        Digit9: 57,
        Digit0: 48,
        KeyA: 65,
        KeyB: 66,
        KeyC: 67,
        KeyD: 68,
        KeyE: 69,
        KeyF: 70,
        KeyG: 71,
        KeyH: 72,
        KeyI: 73,
        KeyJ: 74,
        KeyK: 75,
        KeyL: 76,
        KeyM: 77,
        KeyN: 78,
        KeyO: 79,
        KeyP: 80,
        KeyQ: 81,
        KeyR: 82,
        KeyS: 83,
        KeyT: 84,
        KeyU: 85,
        KeyV: 86,
        KeyW: 87,
        KeyX: 88,
        KeyY: 89,
        KeyZ: 90,
        Comma: 188,
        Period: 190,
        Semicolon: 186,
        Quote: 222,
        BracketLeft: 219,
        BracketRight: 222,
        Backquote: 192,
        Backslash: 220,
        Minus: 189,
        Equal: 187,
        IntlRo: 193,
        IntlYen: 255,
        AltLeft: 18,
        AltRight: 18,
        CapsLock: 20,
        ControlLeft: 17,
        ControlRight: 17,
        OSLeft: 91,
        OSRight: 92,
        ShiftLeft: 16,
        ShiftRight: 16,
        ContextMenu: 93,
        Enter: 13,
        Space: 32,
        Tab: 9,
        Delete: 46,
        End: 35,
        Help: 45,
        Home: 36,
        Insert: 45,
        PageDown: 34,
        PageUp: 33,
        ArrowDown: 40,
        ArrowLeft: 37,
        ArrowRight: 39,
        ArrowUp: 38,
        Escape: 27,
        PrintScreen: 44,
        ScrollLock: 145,
        Pause: 19,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        F13: 124,
        F14: 125,
        F15: 126,
        F16: 127,
        F17: 128,
        F18: 129,
        F19: 130,
        F20: 131,
        F21: 132,
        F22: 133,
        F23: 134,
        F24: 135,
        NumLock: 144,
        Numpad0: 96,
        Numpad1: 97,
        Numpad2: 98,
        Numpad3: 99,
        Numpad4: 100,
        Numpad5: 101,
        Numpad6: 102,
        Numpad7: 103,
        Numpad8: 104,
        Numpad9: 105,
        NumpadAdd: 107,
        NumpadComma: 194,
        NumpadDecimal: 100,
        NumpadDivide: 111,
        NumpadEnter: 13,
        NumpadEqual: 12,
        NumpadMultiply: 106,
        NumpadSubtract: 109
    })); // NEW._KEY_CODES

    NEW._KEY_MAPPER = new Map();
    const { keyMaps } = PluginManager.parameters(CKM.PLUGIN_NAME);
    JSON.parse(keyMaps).map(JSON.parse).forEach(keyMap => {
        const { keyName } = keyMap, keyMapper = NEW._KEY_MAPPER;
        const keyCode = NEW._KEY_CODES.get(keyMap.keyCode);
        if (!keyMapper.has(keyCode)) return keyMapper.set(keyCode, [keyName]);
        const keyNames = keyMapper.get(keyCode);
        if (!keyNames.includes(keyName)) keyNames.push(keyName);
    });

    ORIG._onKeyDown = $._onKeyDown;
    NEW._onKeyDown = $._onKeyDown = function(event) {
    // v1.00a - v1.00a; Extended
        ORIG._onKeyDown.apply(this, arguments);
        // Added to update the current states as true with the custom key maps
        NEW._updateCurrentStates.call(this, event.keyCode, true);
        //
    }; // $._onKeyDown

    ORIG._onKeyUp = $._onKeyUp;
    NEW._onKeyUp = $._onKeyUp = function(event) { // v1.00a - v1.00a; Extended
        ORIG._onKeyUp.apply(this, arguments);
        // Added to update the current states as false with the custom key maps
        NEW._updateCurrentStates.call(this, event.keyCode, false);
        //
    }; // $._onKeyUp

    /**
     * The this pointer is Input
     * Hotspot/Idempotent
     * @author DoubleX @since v1.00a @version v1.00a
     * @enum @param {number} keyCode - Code of the key to have its state updated
     * @param {boolean} currentState - The new state of the key with the code
     */
    NEW._updateCurrentStates = function(keyCode, currentState) {
        const keyMapper = NEW._KEY_MAPPER;
        if (keyMapper.has(keyCode)) keyMapper.get(keyCode).forEach(keyName => {
            this._currentState[keyName] = currentState;
        });
    }; // NEW._updateCurrentStates

})(Input, DoubleX_RMMZ.Custom_Key_Maps);

/*============================================================================*/
