"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const terminal_argument_service_1 = require("./terminal-argument-service");
const terminal_event_1 = require("../event/terminal-event");
/**
 * TerminalService is a util for execute
 * commands from JavaScript with NodeJS.
 *
 * @author Tarik Curto <centro.tarik@live.com>
 */
class TerminalService {
    /**
     * Constructor of TerminalService.
     *
     */
    constructor() {
        this.terminalEvent = new terminal_event_1.TerminalEvent();
        this.argumentService = new terminal_argument_service_1.TerminalArgumentService();
    }
    /**
     * Set process for execute.
     * For example: 'git commit'
     *
     * @param {string} command
     * @returns {TerminalService}
     */
    setCommandName(command) {
        this.commandName = command;
        return this;
    }
}
exports.TerminalService = TerminalService;
//# sourceMappingURL=terminal-service.js.map