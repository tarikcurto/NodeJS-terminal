"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const childProcess = require('child_process');
const terminal_service_1 = require("./terminal-service");
const terminal_execution_event_1 = require("../event/terminal-execution-event");
class TerminalExecutionService extends terminal_service_1.TerminalService {
    constructor() {
        super();
        this.terminalExecutionEvent = new terminal_execution_event_1.TerminalExecutionEvent();
        this.output = [];
        this.asyncService = childProcess.exec;
        this.syncService = childProcess.execSync;
    }
    /**
     * Define execution mode.
     * Use EXECUTION_ constants of class.
     *
     * @param {number} mode
     * @returns {TerminalExecutionService}
     */
    setMode(mode) {
        this.mode = mode;
        return this;
    }
    /**
     * Execute your application and properties.
     *
     * @returns {void}
     */
    exec() {
        switch (this.mode) {
            case (TerminalExecutionService.EXECUTION_ASYNC):
                this.async();
                break;
            case (TerminalExecutionService.EXECUTION_SYNC):
            default:
                this.sync();
        }
    }
    command() {
        let commandName = this.commandName;
        let argumentList = this.argumentService.buildArgumentList();
        let execCommand;
        if (argumentList.length) {
            execCommand = `${commandName} ${argumentList}`;
        }
        else {
            execCommand = commandName;
        }
        return execCommand;
    }
    async() {
        let childProcess = this.asyncService(this.command());
        this.terminalExecutionEvent.lauchStartEvent({ child_process: childProcess });
        childProcess.stdout.on('data', (data) => {
            let outputData = data.toString();
            this.output.push(outputData);
            this.terminalExecutionEvent.lauchMessageEvent({ output: outputData });
        });
        childProcess.on('exit', (pid) => {
            let fullOutput = this.output.join('');
            this.terminalExecutionEvent.lauchEndEvent({ output: fullOutput, pid: pid });
        });
    }
    sync() {
        let childProcess = this.syncService(this.command());
        this.terminalExecutionEvent.lauchStartEvent({ child_process: childProcess });
        let output = String(childProcess);
        this.terminalExecutionEvent.lauchMessageEvent({ output: output });
        this.terminalExecutionEvent.lauchEndEvent({ output: output });
        return output;
    }
}
/**
 * Child process run asynchronous.
 *
 * @type {number}
 */
TerminalExecutionService.EXECUTION_ASYNC = 1;
/**
 * Child process run synchronous.
 *
 * @type {number}
 */
TerminalExecutionService.EXECUTION_SYNC = 2;
exports.TerminalExecutionService = TerminalExecutionService;
//# sourceMappingURL=terminal-execution-service.js.map