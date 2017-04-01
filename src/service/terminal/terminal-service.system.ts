
const spawn = require('child_process').execSync;

import {TerminalArgumentService} from './terminal-argument-service.system';

/**
 * TerminalService is a util for execute
 * commands from JavaScript with NodeJS.
 *
 * @author Tarik Curto <centro.tarik@live.com>
 */
export class TerminalService{

    /**
     * Use TerminalArgumentService for declare
     * your execution properties.
     *
     * @type {TerminalArgumentService}
     */
    public argumentService: TerminalArgumentService;

    private commandName: string;

    private spawnExecute;

    /**
     * Constructor of TerminalService.
     *
     */
    constructor(){

        this.spawnExecute = spawn;
        this.argumentService = new TerminalArgumentService();
    }

    /**
     * Set process for execute.
     * For example: 'git commit'
     *
     * @param {string} command
     * @returns {TerminalService}
     */
    public setCommandName(command:string) : TerminalService{

        this.commandName = command;
        return this;
    }

    /**
     * Execute your application and properties.
     *
     * @returns {Promise<string>}
     */
    public exec(){

        let childProcess = this.spawnExecute(this.execCommand());
        let output: string = String(childProcess);

        return output;
    }

    private execCommand() : string{

        let commandName: string = this.commandName;
        let argumentList: string = this.argumentService.buildArgumentList();

        let execCommand:string;
        if(argumentList.length){

            execCommand = `${commandName} ${argumentList}`;
        }else{

            execCommand = commandName;
        }

        return execCommand;
    }

}