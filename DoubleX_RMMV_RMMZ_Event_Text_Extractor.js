/*============================================================================
 *    ## Plugin Info
 *----------------------------------------------------------------------------
 *    # Plugin Name
 *      DoubleX_RMMV_RMMZ_Event_Text_Extractor
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
 *      1. https://www.youtube.com/watch?v=xDjqmoJAZk4
 *      This Plugin:
 *      1. https://github.com/Double-X/DoubleX-RMMZ/blob/master/DoubleX_RMMV_RMMZ_Event_Text_Extractor.js
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
 *      { codebase: "1.4.4", plugin: "v1.00a" }(2022 Apr 15 GMT 1300):
 *      1. 1st version of this plugin finished
 *============================================================================*/

/*:
 * @url https://www.patreon.com/doublex
 * @target MZ
 * @plugindesc Versions: { codebase: "1.4.4", plugin: "v1.00a" }
 * Lets you extract texts in events/common events/battle events to txt file
 * @orderAfter DoubleX_RMMZ_Enhanced_Codebase
 * @author DoubleX
 *
 * @param fileName
 * @type string
 * @desc Sets the name of the txt file having those extracted texts
 * @default Extracted Event Texts
 *
 * @param filePath
 * @type string
 * @desc Sets the path of the txt file having those extracted texts
 * Leaving it empty means placing the file at project root directory
 * @default
 *
 * @help
 * This plugin works for both RMMV and RMMZ but only when running on NW.js
 * Only texts, choices and scroll texts in common events, events and troop
 * battle events will be extracted by this plugin into the output txt file
 * This plugin can lead to very long loading time upon game start when the
 * project has hundreds of maps each having tons of texts, choices and
 * scroll texts in common events, events and troop battle events
 * The output txt file may contain something like this:
 *  {
 *  	"Common Events": {
 *  		"Cri Hit Sound": {
 *  			"Text": {
 *  				"Contents Line 4": "Cri Hit Sound"
 *  			}
 *  		},
 *  		"Norm Hit Sound": {
 *  			"Text": {
 *  				"Contents Line 4": "Norm Hit Sound"
 *  			}
 *  		},
 *  		"Common Event Name Test Event Text Extractor": {
 *  			"Text": {
 *  				"Contents Line 2": "Common Event Test Text"
 *  			},
 *  			"Choices": {
 *  				"Contents Line 3": [
 *  					"Choice I",
 *  					"B",
 *  					"3rd Selection",
 *  					"Yes",
 *  					"No",
 *  					"Cancel"
 *  				]
 *  			},
 *  			"Scroll Text": {
 *  				"Contents Line 18": "Common Event Scroll Text Extractor Test"
 *  			}
 *  		}
 *  	},
 *  	"Troop Events": {
 *  		"Hi_monster*8": {
 *  			"Page 1": {
 *  				"Text": {
 *  					"Contents Line 3": "New Turn"
 *  				}
 *  			}
 *  		}
 *  	},
 *  	"First Map": {
 *  		"Event Name Summon Hi Monster X": {
 *  			"Page 1": {
 *  				"Text": {
 *  					"Contents Line 16": "Do you want to fight Hi Monster X?"
 *  				},
 *  				"Choices": {
 *  					"Contents Line 17": [
 *  						"Yes",
 *  						"No"
 *  					]
 *  				},
 *  				"Scroll Text": {
 *  					"Contents Line 48": "Is Monsters X Working?"
 *  				}
 *  			}
 *  		},
 *  		"Event Name Summon Minions": {
 *  			"Page 1": {
 *  				"Choices": {
 *  					"Contents Line 13": [
 *  						"Cnt Crow"
 *  					]
 *  				}
 *  			}
 *  		}
 *  	}
 *  }
 */

// jshint esversion: 8

// var must be used or game will crash
var DoubleX_RMMV_RMMZ = DoubleX_RMMV_RMMZ || {};
//

(() => {

    "use strict";

    const src = document.currentScript.src;
    const name = src.split("/").slice(-1)[0].split(".")[0].replace(/%20/g, " ");
    console.info(src, name);

    // Separates the version numbers with the rest to make the former more clear
    DoubleX_RMMV_RMMZ.Event_Text_Extractor = {
        PLUGIN_NAME: name,
        VERSIONS: { codebase: "1.4.4", plugin: "v1.00a" }
    }; // DoubleX_RMMV_RMMZ.Event_Text_Extractor
    //

})();

(ETE => {

    "use strict";

    const pluginCodebaseVer = ETE.VERSIONS.codebase;
    if (!Utils.checkRMVersion) return;
    if (Utils.checkRMVersion(pluginCodebaseVer)) return;
    console.warn(`Your codebase version is ${Utils.RPGMAKER_VERSION} but must be
                 at least ${pluginCodebaseVer} to use ${ETE.PLUGIN_NAME}`);

})(DoubleX_RMMV_RMMZ.Event_Text_Extractor);

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

((ETE) => {

    "use strict";

    const _COMMON_EV_PATH = "data/CommonEvents.json";
    const _MAP_INFO_PATH = "data/MapInfos.json";
    const _TROOPS_PATH = "data/Troops.json";
    const _TEXT_CMD_CODES = { 401: "Text", 102: "Choices", 405: "Scroll Text" };

    const _allTxts = async () => _combinedTxts(await Promise.all([
        _allCommonEvs(),
        _allMaps(),
        _allTroopEvs()
    ])); // _allTxts

    const _allCommonEvs = async () => {
        return _commonEvWithTxts(await _readJSON(_COMMON_EV_PATH));
    }; // _allCommonEvs
    const _commonEvWithTxts = commonEvs => commonEvs.filter(commonEv_ => {
        return commonEv_ && _hasListTxts(commonEv_);
    }); // _commonEvWithTxts

    const _allMaps = async () => {
        const infos = (await _readJSON(_MAP_INFO_PATH)).filter(info_ => info_);
        return _mapWithTxts(infos, await _combinedMaps(infos));
    }; // _allMaps
    const _combinedMaps = infos => {
        return Promise.all(infos.map(map => _readJSON(_mapPath(map.id))));
    }; // _combinedMaps
    const _mapPath = id => {
        return `data/Map${"0".repeat(3 - id.toString().length)}${id}.json`;
    }; // _mapPath
    const _mapWithTxts = (infos, maps) => maps.filter(map => {
        return map.events.some(ev_ => ev_ && _hasPageTxts(ev_.pages));
    }).map((map, i) => Object.assign({ name: infos[i].name }, map));

    const _allTroopEvs = async () => {
        return _troopWithTxts(await _readJSON(_TROOPS_PATH));
    }; // _allTroopEvs
    const _troopWithTxts = troops => troops.filter(troop_ => {
        return troop_ && _hasPageTxts(troop_.pages);
    }); // _troopWithTxts

    const _readJSON = path => new Promise((resolve, reject) => {
        _readJSONXHR(path, resolve, reject).send();
    }); // _readJSON
    const _readJSONXHR = (path, resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onerror = () => {
            const rs = xhr.readyState, s = xhr.status;
            reject(`path: ${path}, readyState: ${rs}, status: ${s}`);
        };
        xhr.onload = () => {
            const s = xhr.status;
            if (s >= 400) return reject(`path: ${path}, status: ${s}`);
            const rt = xhr.responseText;
            if (rt) return resolve(JSON.parse(rt));
            reject(`path: ${path}, responseText: ${rt}`);
        };
        xhr.open("GET", path);
        xhr.overrideMimeType("application/json");
        return xhr;
    }; // _readJSONXHR

    const _combinedTxts = ([commonEvs, maps, troopEvs]) => {
        const txts = {
            "Common Events": _commonEvTxts(commonEvs),
            "Troop Events": _evTxts(troopEvs)
        };
        maps.forEach(map => { txts[map.name] = _evTxts(_evs(map)); });
        return JSON.stringify(txts, null, "\t");
    }; // _combinedTxts

    const _commonEvTxts = commonEvs => {
        const txts = {};
        commonEvs.forEach(commonEv => {
            const evNameTxts = txts[commonEv.name] = {};
            commonEv.list.forEach(_extractTxts.bind(null, evNameTxts));
        });
        return txts;
    }; // _commonEvTxts

    const _evTxts = ev => {
        const txts = {};
        ev.forEach(ev => {
            const evNameTxts = txts[ev.name] = {};
            ev.pages.filter(_hasListTxts).forEach((page, i) => {
                const evPageTxts = evNameTxts[`Page ${i + 1}`] = {};
                page.list.forEach(_extractTxts.bind(null, evPageTxts));
            });
        });
        return txts;
    }; // _evTxts

    const _evs = map => {
        return map.events.filter(ev_ => ev_ && _hasPageTxts(ev_.pages));
    }; // _evs

    const _extractTxts = (txts, cmd, i) => {
        const code = _txtCmdCode_(cmd);
        if (!code) return;
        txts[code] = txts[code] || {};
        txts[code][`Contents Line ${i + 1}`] = cmd.parameters[0];
    }; // _extractTxts

    const _hasPageTxts = pages => pages.some(_hasListTxts);
    const _hasListTxts = page => page.list.some(_txtCmdCode_);
    const _txtCmdCode_ = cmd => _TEXT_CMD_CODES[cmd.code];

    const {
        fileName,
        filePath
    } = PluginManager.parameters(ETE.PLUGIN_NAME);
    const _fullFileNamePath = `${filePath}${fileName}.txt`;
    (async () => {
        const txts = await _allTxts();
        if (!StorageManager.isLocalMode()) return console.info(txts);
        // RMMV doesn't support require("fs").promises
        require("fs").writeFile(_fullFileNamePath, txts, null , err => {
            if (err) return console.warn(err);
            console.info(`${_fullFileNamePath} is successfully created!`);
        });
        //
    })();

})(DoubleX_RMMV_RMMZ.Event_Text_Extractor);

/*============================================================================*/
