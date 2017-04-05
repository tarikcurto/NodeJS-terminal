"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * TerminalArgumentService is a util for
 * declare your execution properties.
 *
 * @author Tarik Curto <centro.tarik@live.com>
 */
class TerminalArgumentService {
    /**
     * Constructor of TerminalArgumentService
     *
     */
    constructor() {
        this.argumentList = [];
    }
    /**
     * Define all arguments of execution.
     *
     * @param {Array<TerminalArgumentInterface>} argumentList
     * @returns {TerminalArgumentService}
     */
    setArgumentList(argumentList) {
        this.argumentList = argumentList;
        return this;
    }
    /**
     * Add argument or property.
     *
     * @param {TerminalArgumentInterface} argument
     * @returns {TerminalArgumentService}
     */
    addArgument(argument) {
        this.argumentList.push(argument);
        return this;
    }
    /**
     * Build your declared arguments.
     *
     * @returns {string}
     */
    buildArgumentList() {
        let argumentList = this.argumentListToString();
        return argumentList;
    }
    argumentListToString() {
        //Todo: apply array.join()
        let argumentList = '';
        for (let i = 0; i < this.argumentList.length; i++) {
            let argument = this.argumentToString(i);
            argumentList += argument;
            if (i < this.argumentList.length - 1) {
                argumentList += ' ';
            }
        }
        return argumentList;
    }
    argumentToString(key) {
        let argument = this.argumentList[key];
        let argumentText = '';
        if (Object.keys(argument).length == 1) {
            argumentText = argument.key;
        }
        else {
            argumentText = `${argument.key} "${argument.value}"`;
        }
        return argumentText;
    }
}
exports.TerminalArgumentService = TerminalArgumentService;
//# sourceMappingURL=terminal-argument-service.js.map