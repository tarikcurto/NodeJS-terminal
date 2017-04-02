
const childProcess = require('child_process');

import {TerminalArgumentService} from './terminal-argument-service';

import {TerminalEvent} from '../event/terminal-event';

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

  /**
   * Child process run asynchronous.
   * 
   * @type {number}
   */
  public static EXECUTION_ASYNC: number = 1;

  /**
   * Child process run synchronous.
   * 
   * @type {number}
   */
  public static EXECUTION_SYNC: number = 2;

  private commandName: string;

  private execAsyncService: any;

  private execSyncService: (command: string) => Buffer | string;

  private execOutput: Array<string>;

  private executionMode: number;

  /**
   * Constructor of TerminalService.
   *
   */
  constructor() {

    this.eventManager = new TerminalEvent();

    this.execOutput = [];
    this.execAsyncService = childProcess.exec;
    this.execSyncService = childProcess.execSync;
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
   * Define execution mode.
   * Use EXECUTION_ constants of class.
   * 
   * @param {number} mode
   * @returns {TerminalService}
   */
  public setExecutionMode(mode: number) {

    this.executionMode = mode;
    return this;
  }

  /**
   * Execute your application and properties.
   *
   * @returns {void}
   */
  public exec(): any {

    switch (this.executionMode) {

      case (TerminalService.EXECUTION_ASYNC):

        this.execAsync();
        break;

      case (TerminalService.EXECUTION_SYNC):
      default:

        this.execSync();
    }

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

  private execAsync() {

    let childProcess = this.execAsyncService(this.execCommand());
    this.eventManager.lauchStartExecutionEvent({child_process: childProcess});

    childProcess.stdout.on('data', (data:Buffer) => {
      
      let outputData: string = data.toString();
      this.execOutput.push(outputData);
      
      this.eventManager.lauchMessageExecutionEvent({output: outputData});
    });

    childProcess.on('exit', (pid: number) => {
      
      let fullOutput: string = this.execOutput.join('');
      this.eventManager.lauchEndExecutionEvent({output: fullOutput, pid: pid});
    });
  }

  private execSync(): string {

    let childProcess = this.execSyncService(this.execCommand());
    this.eventManager.lauchStartExecutionEvent({child_process: childProcess});

    let output: string = String(childProcess);
    this.eventManager.lauchMessageExecutionEvent({output: output})
    this.eventManager.lauchEndExecutionEvent({output: output});

    return output;
  }

}