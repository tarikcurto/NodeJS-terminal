
const execSyncService = require('child_process').execSync;

const execAsyncService = require('child_process').exec;

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
   * Child process run asynchronous
   * with output buffer.
   * 
   * @type {number}
   */
  public static EXECUTION_ASYNC_BUFFER: number = 2;

  /**
   * Child process run synchronous.
   * 
   * @type {number}
   */
  public static EXECUTION_SYNC: number = 3;

  private commandName: string;

  private execAsyncService: Function;

  private execSyncService: Function;

  private executionMode: number;

  /**
   * Constructor of TerminalService.
   *
   */
  constructor() {

    this.eventManager = new TerminalEvent();

    this.execAsyncService = execAsyncService;
    this.execSyncService = execSyncService;
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

  private execAsync() {

    let childProcess = this.execAsyncService(this.execCommand());
    this.eventManager.lauchStartExecutionEvent({child_process: childProcess});
    
    //Buffer streaming
    childProcess.stdout.on('data', (data) => {
      this.eventManager.lauchMessageExecutionEvent({child_process: childProcess, output:data.toString()});
    });
  }

  private execSync(): string {

    let childProcess = this.execSyncService(this.execCommand());
    this.eventManager.lauchStartExecutionEvent({child_process: childProcess});

    let output: string = String(childProcess);
    this.eventManager.lauchMessageExecutionEvent({child_process: childProcess, output: output})
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