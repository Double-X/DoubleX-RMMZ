/*============================================================================
 *    ## Plugin Info
 *----------------------------------------------------------------------------
 *    # Plugin Name
 *      DoubleX_RMMZ_Plugin_Command_Lines
 *----------------------------------------------------------------------------
 *    # Introduction
 *      1. The RMMZ editor has changed the plugin command from entering a
 *         single line of string command to selecting plugin commands among
 *         all plugins having plugin commands
 *      2. With this plugin, those preferring the RMMV plugin command can
 *         replicate this style in RMMZ by typing plugin command as a script
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
 *      Plugins:
 *      1. DoubleX RMMZ Enhanced Codebase
 *         https://github.com/Double-X/DoubleX-RMMZ/blob/master/DoubleX%20RMMZ%20Enhanced%20Codebase.js
 *      Abilities:
 *      1. Nothing special for most ordinary cases
 *      2. Little RMMZ plugin development proficiency to fully utilize this
 *         (Elementary Javascript exposures being able to write beginner codes
 *         up to 300LoC scale)
 *      Knowledge:
 *      1. Basic knowledge on what RMMV plugin command does in general on the
 *         user level
 *----------------------------------------------------------------------------
 *    # Author Notes
 *      1. If a plugin command's inputted as a script call, it must only take
 *         exactly 1 line for the plugin command
 *      2. Multiple plugin commands, each taking 1 line, can be inputted into
 *         the same script box in the editor, but do note that the size of
 *         that script box's limited so don't type too many plugin commands in
 *         the same script box in the editor
 *      3. If multiple plugin commands have the same name, the one having a
 *         highest ordering in pluginCmds will be used(or if pluginCmds is
 *         empty, the one from the plugin with the highest ordering will be
 *         used)
 *         (Search tag: First_In_Duplicate_Plugin_Cmds)
 *      4. If script calls and plugin commands are mixed in the same script
 *         box in the editor, script calls separated by plugin commands there
 *         will be called separately
 *         E.g.:
 *         - The following contents in the same script box in the editor
 *           scriptLine1
 *           scriptLine2
 *           pluginCommandLine1
 *           scriptLine3
 *           scriptLine4
 *           Will cause the scripts combined from scriptLine1 and scriptLine2
 *           to be a separate script call from the script call of the scripts
 *           combined from scriptLine3 and scriptLine4
 *----------------------------------------------------------------------------
 *    # Links
 *      Video:
 *      1. https://www.youtube.com/watch?v=9Cro1e_uQBI
 *      2.(v1.01a+) https://www.youtube.com/watch?v=r9g4S8yuiRU
 *      This Plugin:
 *      1. https://github.com/Double-X/DoubleX-RMMZ/blob/master/DoubleX%20RMMZ%20Plugin%20Command%20Lines.js
 *      Posts:
 *      1. https://forums.rpgmakerweb.com/index.php?threads/doublex-rmmz-plugin-command-lines.126735/
 *      2. https://www.rpgmakercentral.com/topic/42574-doublex-rmmz-plugin-command-lines/
 *      3. https://rpgmaker.net/engines/rmmz/utilities/282/
 *      4. https://www.save-point.org/thread-8159.html
 *      5. https://gdu.one/forums/topic/13629-doublex-rmmz-plugin-command-lines/
 *      6. http://www.hbgames.org/forums/viewtopic.php?f=332&t=80313
 *      7. https://forum.chaos-project.com/index.php/topic,16072.0.html
 *      8. https://doublexrpgmaker.wordpress.com/2020/09/04/doublex-rmmz-plugin-command-lines/
 *      9. https://www.patreon.com/posts/41227340
 *      10. https://www.makerdevs.com/plugin/doublex-rmmz-plugin-command-lines
 *----------------------------------------------------------------------------
 *    # Instructions
 *      1. The default plugin parameters file name is
 *         DoubleX_RMMZ_Plugin_Command_Lines
 *         If you want to change that, you must edit the value of
 *         DoubleX_RMMZ.Plugin_Command_Lines.PLUGIN_NAME, which must be done
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
 *      { codebase: "1.0.0", plugin: "v1.01a" }(2020 Sep 11 GMT 1400):
 *      1. Lets you make some new plugin commands as existing ones with some
 *         argument values already set
 *      2. Fixed the bug to load even inactive plugins and those not in the
 *         plugin manager when the parameter pluginCmds is empty
 *      { codebase: "1.0.0", plugin: "v1.00a" }(2020 Sep 4 GMT 0600):
 *      1. 1st version of this plugin finished
 *============================================================================*/

/*~struct~PluginCmd:
 *
 * @param cmdName
 * @type string
 * @desc The name of the plugin command to be used in the RMMV ways
 * @default
 *
 * @param argNames
 * @type string[]
 * @desc The argument name of the plugin command to be used in the RMMV styles
 * @default []
 */

/*~struct~NewPluginCmd:
 *
 * @param newCmdName
 * @type string
 * @desc The name of the new plugin command to be used in the RMMV ways
 * @default
 *
 * @param origCmdName
 * @type string
 * @desc The name of the original plugin command used by the new one
 * @default
 *
 * @param cmdArgNameVals
 * @type struct<NewPluginCmdArg>[]
 * @desc The list of arguments with their values already set by thre new one
 * @default []
 */

/*~struct~NewPluginCmdArg:
 *
 * @param argName
 * @type string
 * @desc The name of the argument to have its value already set
 * @default
 *
 * @param argVal
 * @type string
 * @desc The already set value of the argument with the specified name
 * @default
 */

/*:
 * @url https://www.patreon.com/doublex
 * @target MZ
 * @plugindesc Versions: { codebase: "1.0.0", plugin: "v1.01a" }
 * Lets you use plugin commands in the RMMV styles by typing them as scripts
 *
 * @param pluginCmds
 * @type struct<PluginCmd>[]
 * @desc Sets the list of plugin commands to be called in RMMV ways
 * This being empty means all plugin commands to be that way
 * @default []
 *
 * @param newPluginCmds
 * @type struct<NewPluginCmd>[]
 * @desc Sets list of new plugin commands to be called in RMMV way
 * They're existing ones with some argument values already set
 * @default []
 *
 * @help
 *============================================================================
 *    ## RMMV Style Plugin Command Lines Info
 *----------------------------------------------------------------------------
 *    1. General form
 *       cmdName argName1 argName2 argName3 argNameI argNameN
 *       E.g.:
 *       - If the plugin command has its command name as abcdefg and arguments
 *         as h, i, j and k, then the RMMV style plugin command line is
 *         abcdefg h i j k
 *    2. pluginCmds
 *       - If there's only a small number of plugin commands among all enabled
 *         plugins, then whether the parameter pluginCmds should be filled
 *         doesn't matter much
 *       - If there's a large number of plugin commands among all enabled
 *         plugins, but only a small number of them being used in the RMMV
 *         styles, then pluginCmds should be filled with all those plugin
 *         commands, or the time needed for this plugin to load such a large
 *         number of plugin commands automatically upon game start can lead to
 *         a long game starting time
 *       - If there's a large number of plugin commands among all enabled
 *         plugins, and most of them being used in the RMMV styles, then I'm
 *         afraid that this plugin won't be able to give you a nice option
 *============================================================================
 *    ## (v1.01a+)Script Call Info
 *----------------------------------------------------------------------------
 *    # Parameter manipulations
 *      1. $gameSystem.setNewPluginCmd(newCmdName, origCmdName, argNameVals)
 *         - Sets the new plugin command with name newCmdName as that with
 *           name origCmdName but with argument values already set by
 *           argNameVals
 *         - argNameVals is an Object with argument names as keys and values
 *           of those arguments already set in newCmdName as values
 *         - E.g.:
 *           $gameSystem.setNewPluginCmd("ssicA1", "setSkillItemCooldown", {
 *               side: "actor",
 *               label: 1
 *           }) sets the new plugin command with name ssicA1 as that with name
 *           setSkillItemCooldown but with the side and label argument values
 *           already set as "actor" and 1 respectively
 *============================================================================
 */

// jshint esversion: 6

var DoubleX_RMMZ = DoubleX_RMMZ || {}; // var must be used or game will crash
// Separates the version numbers with the rest to make the former more clear
DoubleX_RMMZ.Plugin_Command_Lines = {
    PLUGIN_NAME: "DoubleX_RMMZ_Plugin_Command_Lines",
    VERSIONS: { codebase: "1.0.0", plugin: "v1.01a" }
}; // DoubleX_RMMZ.Plugin_Command_Lines
//
Utils.checkRMVersion(DoubleX_RMMZ.Plugin_Command_Lines.VERSIONS.codebase);

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
 *         - Basic knowledge on what the RMMV plugin command implementation
 *           does in general
 *         - Basic knowledge on what the node js fs and path does in general
 *           on the user level
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
 *    ## Objects
 *----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------
 *    # Edited class: Game_System
 *      - Lets you access the parameters of this plugin and store them in save
 *----------------------------------------------------------------------------*/

(($, MZ_EC, PCL) => {

    "use strict";

    const klassName = "Game_System";
    const { ORIG, NEW } = MZ_EC.setKlassContainer(klassName, $, PCL);
    const EC_GS = MZ_EC[klassName].new, GS = PCL[klassName];

    MZ_EC.extendFunc(EC_GS, GS, "storeParams", function() {
        ORIG.storeParams.apply(this, arguments);
        // Added to store all parameters of this plugin
        NEW._storeParams.call(this);
        //
    }); // v1.00a - v1.00a

    NEW._NEW_PLUGIN_CMD_ARGS = argNameVals => { // v1.01a+
        return Object.entries(argNameVals).fastMap(([argName, argVal]) => {
            return { argName, argVal };
        });
    }; // NEW._NEW_PLUGIN_CMD_ARGS
    /**
     * The this pointer is Game_System.prototype
     * Script Call/Nullipotent
     * @author DoubleX @interface @since v1.01a @version v1.01a
     * @param {string} newCmdName - The name of the new plugin command
     * @param {string} origCmdName - The name of the original plugin command
     * @param {{string}} argNameVals - The argument name-preset value pairs
     */
    $.setNewPluginCmd = function(newCmdName, origCmdName, argNameVals) {
        /** @todo Breaks these codes into well-named functions */
        const newPluginCmds = EC_GS.storedParamVal.call(
                this, "pluginCmdLines", "newPluginCmds");
        const newPluginCmd_ = newPluginCmds.find(newPluginCmd => {
            return newPluginCmd.newCmdName === newCmdName;
        });
        const cmdArgNameVals = NEW._NEW_PLUGIN_CMD_ARGS(argNameVals);
        if (newPluginCmd_) {
            newPluginCmd_.origCmdName = origCmdName;
            newPluginCmd_.cmdArgNameVals = cmdArgNameVals;
        } else newPluginCmds.push({ newCmdName, origCmdName, cmdArgNameVals });
        //
    }; // $.setNewPluginCmd

    /**
     * The this pointer is Game_System.prototype
     * Nullipotent
     * @author DoubleX @interface @since v1.00a @version v1.01a
     * @param {string} cmdName - The name of the plugin command
     * @returns {{[]}?} The list of argument names with their preset values
     */
    $.pluginCmdLineArgNameVals_ = function(cmdName) {
        const newPluginCmds = EC_GS.storedParamVal.call(
                this, "pluginCmdLines", "newPluginCmds");
        const newPluginCmd_ = newPluginCmds.find(({ newCmdName }) => {
            return newCmdName === cmdName;
        });
        const pluginCmds =
                EC_GS.storedParamVal.call(this, "pluginCmdLines", "pluginCmds");
        if (newPluginCmd_) {
            const { origCmdName } = newPluginCmd_;
            const pluginCmd_ = pluginCmds.find(cmd => {
                return cmd.cmdName === origCmdName;
            });
            if (!pluginCmd_) throw new Error(`The new plugin command name
                                             ${cmdName} has no matching
                                             original plugin commands!`);
            return {
                origCmdName,
                argNames: pluginCmd_.argNames,
                argNameVals: newPluginCmd_.cmdArgNameVals
            };
        }
        // Search tag: First_In_Duplicate_Plugin_Cmds
        const pluginCmd_ = pluginCmds.find(cmd => cmd.cmdName === cmdName);
        return pluginCmd_ && {
            origCmdName: pluginCmd_.cmdName,
            argNames: pluginCmd_.argNames,
            argNameVals: []
        };
        //
    }; // $.pluginCmdLineArgNameVals_

    /**
     * The this pointer is Game_System.prototype
     * Idempotent
     * @author DoubleX @since v1.01a @version v1.01a
     */
    NEW._storeParams = function() {
        EC_GS.onStoreParams.call(this, PCL.PLUGIN_NAME, "pluginCmdLines");
        const pluginCmds =
                EC_GS.storedParamVal.call(this, "pluginCmdLines", "pluginCmds");
        if (pluginCmds.isEmpty()) NEW._loadAllPluginCmds.call(this);
    }; // NEW._storeParams

    NEW._PLUGIN_DIR_PATH = path => {
        const base = path.dirname(process.mainModule.filename);
        return path.join(base, "js/plugins");
    }; // NEW._PLUGIN_DIR_PATH
    NEW._READDIR_ERR = (dirPath, err) => {
        console.warn(`The fs failed to read the directory with path ${dirPath}
                     by plugin ${PCL.PLUGIN_NAME}: ${err.stack}`);
    }; // NEW._READDIR_ERR
    NEW._READ_FILE_ERR = (filePath, err) => {
        console.warn(`The fs failed to read the file with path ${filePath}
                     by plugin ${PCL.PLUGIN_NAME}: ${err.stack}`);
    }; // NEW._READ_FILE_ERR
    /**
     * The this pointer is Game_System.prototype
     * Idempotent
     * @author DoubleX @since v1.00a @version v1.01a
     */
    NEW._loadAllPluginCmds = function() {
        const path = require("path"), dirPath = NEW._PLUGIN_DIR_PATH(path);
        const fs = require("fs");
        PluginManager._scripts.forEach(pluginName => {
            const filePath = path.join(dirPath, `${pluginName}.js`);
            NEW._loadPluginFileContent.call(this, fs, filePath);
        });
    }; // NEW._loadAllPluginCmds

    /**
     * The this pointer is Game_System.prototype
     * Idempotent
     * @author DoubleX @since v1.00a @version v1.00a
     * @param {FS} fs - The node js filesystem for loading plugin file contents
     * @param {string} filePath - The absolute path of the plugin to be loaded
     */
    NEW._loadPluginFileContent = function(fs, filePath) {
        fs.readFile(filePath, "utf8", (err, fileData) => {
            if (err) return NEW._READ_FILE_ERR(filePath, err);
            NEW._loadPluginCmds.call(this, fileData.split(/[\r\n]+/));
        });
    }; // NEW._loadPluginFileContent

    NEW._ADD_PLUGIN_CMDS = (fileLines, pluginCmds) => {
        let isReadPluginCmds = false, cmdName = "", argNames = [];
        fileLines.forEach(line => {
            if (line.match(/\/\*:/)) return isReadPluginCmds = true;
            if (!isReadPluginCmds) return;
            if (line.match(/\*\//)) return isReadPluginCmds = false;
            if (!isReadPluginCmds) return;
            if (line.match(/@command\s+(\w+)/)) {
                // Search tag: First_In_Duplicate_Plugin_Cmds
                if (cmdName) pluginCmds.push({ cmdName, argNames });
                //
                return [cmdName, argNames] = [RegExp.$1, []];
            } else if (!cmdName) return;
            if (line.match(/@arg\s+(\w+)/)) return argNames.push(RegExp.$1);
        });
        // Search tag: First_In_Duplicate_Plugin_Cmds
        if (cmdName) pluginCmds.push({ cmdName, argNames });
        //
    }; // NEW._ADD_PLUGIN_CMDS
    /**
     * The this pointer is Game_System.prototype
     * Idempotent
     * @author DoubleX @since v1.00a @version v1.00a
     * @param {[string]} fileLines - The lines of the plugin file contents
     */
    NEW._loadPluginCmds = function(fileLines) {
        const pluginCmds =
                EC_GS.storedParamVal.call(this, "pluginCmdLines", "pluginCmds");
        NEW._ADD_PLUGIN_CMDS(fileLines, pluginCmds);
    }; // NEW._loadPluginCmds

})(Game_System.prototype, DoubleX_RMMZ.Enhanced_Codebase,
        DoubleX_RMMZ.Plugin_Command_Lines);

/*----------------------------------------------------------------------------
 *    # Edit class: Game_Interpreter
 *      - Intercepts plugin commands as script calls to use the RMMZ ones
 *----------------------------------------------------------------------------*/

(($, MZ_EC, PCL) => {

    "use strict";

    const klassName = "Game_Interpreter", EC_GI = MZ_EC[klassName].new, {
        NEW,
        rewriteFunc
    } = MZ_EC.setKlassContainer(klassName, $, PCL);

    rewriteFunc("command355", function() {
        // Edited to call the RMMZ plugin commands if they're not scripts
        let script = "", scriptLine = EC_GI.curScriptLine.call(this);
        if (NEW._IS_PLUGIN_CMD(scriptLine)) {
            NEW._callPluginCmd.call(this, scriptLine);
        } else script = scriptLine;
        while (EC_GI.hasNextScriptLine.call(this)) {
            this._index++;
            scriptLine = EC_GI.curScriptLine.call(this);
            if (NEW._IS_PLUGIN_CMD(scriptLine)) {
                EC_GI.evalScript_.call(this, script);
                script = "";
                NEW._callPluginCmd.call(this, scriptLine);
            } else script += scriptLine;
        }
        EC_GI.evalScript_.call(this, script);
        return true;
        //
    }); // v1.00a - v1.00a

    NEW._IS_PLUGIN_CMD = scriptLine => {
        // The plugin command should be as forgiving to syntax error as possible
        const cmdName_ = scriptLine.split(/\s+/)[0];
        //
        // New plugin commands don't appear in NEW._PLUGIN_CMD_KEY_
        return cmdName_ && $gameSystem.pluginCmdLineArgNameVals_(cmdName_);
        //
    }; // NEW._IS_PLUGIN_CMD

    NEW._PLUGIN_CMD_KEY_ = cmdName => {
        return Object.keys(PluginManager._commands).find(key => {
            return key.split(":")[1] === cmdName;
        });
    }; // NEW._PLUGIN_CMD_KEY_
    NEW._PLUGIN_CMD_ARG_OBJ = ({ argNames, argNameVals }, script) => {
        let j = 0;
        return argNames.reduce((obj, arg, i) => {
            const argNameVal_ = argNameVals.find(({ argName }) => {
                return argName === arg;
            }), scriptVal = script[i + 1 - j];
            if (argNameVal_) {
                j++;
                obj[arg] = argNameVal_.argVal;
            } else obj[arg] = scriptVal;
            return obj;
        }, {});
    }; // NEW._PLUGIN_CMD_ARG_OBJ
    /**
     * The this pointer is Game_Interpreter.prototype
     * Nullipotent
     * @author DoubleX @since v1.00a @version v1.01a
     * @param {string} scriptLine - The current script line in the script box
     * @returns {boolean} Whether the plugin command's successfully called
     */
    NEW._callPluginCmd = function(scriptLine) {
        // The plugin command should be as forgiving to syntax error as possible
        const pluginCmd = scriptLine.split(/\s+/);
        //
        const cmdName_ = pluginCmd[0];
        if (!cmdName_) return false;
        const argNameVals_ = $gameSystem.pluginCmdLineArgNameVals_(cmdName_);
        if (!argNameVals_) return false;
        const { origCmdName } = argNameVals_;
        const key_ = NEW._PLUGIN_CMD_KEY_(origCmdName);
        if (!key_) return false;
        const pluginName = key_.split(":")[0];
        const argObj = NEW._PLUGIN_CMD_ARG_OBJ(argNameVals_, pluginCmd);
        PluginManager.callCommand(this, pluginName, origCmdName, argObj);
        return true;
    }; // NEW._callPluginCmd

})(Game_Interpreter.prototype, DoubleX_RMMZ.Enhanced_Codebase,
        DoubleX_RMMZ.Plugin_Command_Lines);

/*============================================================================*/

    const curMZECVer = DoubleX_RMMZ.Enhanced_Codebase.VERSIONS.plugin;
    const minMZECVer = "v0.00a";
    if (curMZECVer < minMZECVer) {
        console.warn(`The version of DoubleX RMMZ Enhanced Codebase is
                     ${curMZECVer} but should be at least ${minMZECVer}`);
    }

} else {

    console.warn(`DoubleX RMMZ Enhanced Codebase should be placed above
                 ${DoubleX_RMMZ.Plugin_Command_Lines.PLUGIN_NAME}`);

} // if (DoubleX_RMMZ.Enhanced_Codebase)
