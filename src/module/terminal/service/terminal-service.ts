
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
  public terminalEvent: TerminalEvent;

  /**
   * Use TerminalArgumentService for declare
   * your execution properties.
   *
   * @type {TerminalArgumentService}
   */
  public argumentService: TerminalArgumentService;

  protected commandName: string;

  /**
   * Constructor of TerminalService.
   *
   */
  constructor() {

    this.terminalEvent = new TerminalEvent();
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
  
}