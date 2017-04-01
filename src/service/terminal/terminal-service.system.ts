
const spawn = require('child_process').execSync;

import {TerminalArgumentService} from './terminal-argument-service.system';

import {TerminalEvent} from '../../event/terminal/terminal-event.system';

/**
 * TerminalService is a util for execute
 * commands from JavaScript with NodeJS.
 *
 * @author Tarik Curto <centro.tarik@live.com>
 */
export class TerminalService {

  /**
   * Event launchers and listeners for
   * TerminalService.
   *
   * @type {TerminalEvent}
   */
  public eventManager: TerminalEvent;

  /**
   * Use TerminalArgumentService for declare
   * your execution properties.
   *
   * @type {TerminalArgumentService}
   */
  public argumentService: TerminalArgumentService;

  private commandName: string;

  private spawnExecute:Function;

  /**
   * Constructor of TerminalService.
   *
   */
  constructor() {

    this.eventManager = new TerminalEvent();

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
  public setCommandName(command: string): TerminalService {

    this.commandName = command;
    return this;
  }

  /**
   * Execute your application and properties.
   *
   * @returns {string} Terminal output.
   */
  public exec(): string {

    let childProcess = this.spawnExecute(this.execCommand());
    this.eventManager.lauchStartExecutionEvent({child_process: childProcess});

    let output: string = String(childProcess);
    this.eventManager.lauchEndExecutionEvent({child_process: childProcess, output: output});

    return output;
  }

  private execCommand(): string {

    let commandName: string = this.commandName;
    let argumentList: string = this.argumentService.buildArgumentList();

    let execCommand: string;
    if (argumentList.length) {

      execCommand = `${commandName} ${argumentList}`;
    } else {

      execCommand = commandName;
    }

    return execCommand;
  }

}