
const childProcess = require('child_process');

import {TerminalService} from './terminal-service';
import {TerminalExecutionEvent} from '../event/terminal-execution-event';

export class TerminalExecutionService extends TerminalService{

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
  
  /**
   * Event launchers and listeners for
   * TerminalExecutionService.
   *
   * @type {TerminalExecutionEvent}
   */
  public terminalExecutionEvent: TerminalExecutionEvent;

  private asyncService: any;

  private syncService: (command: string) => Buffer | string;

  private output: Array<string>;

  private mode: number;

  constructor() {
    
    super();
    
    this.terminalExecutionEvent = new TerminalExecutionEvent();
    
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
  public setMode(mode: number) {

    this.mode = mode;
    return this;
  }

  /**
   * Execute your application and properties.
   *
   * @returns {void}
   */
  public exec(): any {

    switch (this.mode) {

      case (TerminalExecutionService.EXECUTION_ASYNC):

        this.async();
        break;

      case (TerminalExecutionService.EXECUTION_SYNC):
      default:

        this.sync();
    }

  }

  private command(): string {

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

  private async() {

    let childProcess = this.asyncService(this.command());
    this.terminalExecutionEvent.lauchStartEvent({child_process: childProcess});

    childProcess.stdout.on('data', (data: Buffer) => {

      let outputData: string = data.toString();
      this.output.push(outputData);

      this.terminalExecutionEvent.lauchMessageEvent({output: outputData});
    });

    childProcess.on('exit', (pid: number) => {

      let fullOutput: string = this.output.join('');
      this.terminalExecutionEvent.lauchEndEvent({output: fullOutput, pid: pid});
    });
  }

  private sync(): string {

    let childProcess = this.syncService(this.command());
    this.terminalExecutionEvent.lauchStartEvent({child_process: childProcess});

    let output: string = String(childProcess);
    this.terminalExecutionEvent.lauchMessageEvent({output: output})
    this.terminalExecutionEvent.lauchEndEvent({output: output});

    return output;
  }
}