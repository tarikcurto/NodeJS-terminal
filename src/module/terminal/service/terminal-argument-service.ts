
import {TerminalArgumentInterface} from './terminal-argument-interface';

/**
 * TerminalArgumentService is a util for
 * declare your execution properties.
 *
 * @author Tarik Curto <centro.tarik@live.com>
 */
export class TerminalArgumentService {

  private argumentList: Array<TerminalArgumentInterface>;

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
  public setArgumentList(argumentList: Array<TerminalArgumentInterface>): TerminalArgumentService {

    this.argumentList = argumentList;
    return this;
  }

  /**
   * Add argument or property.
   *
   * @param {TerminalArgumentInterface} argument
   * @returns {TerminalArgumentService}
   */
  public addArgument(argument: TerminalArgumentInterface): TerminalArgumentService {

    this.argumentList.push(argument);
    return this;
  }

  /**
   * Build your declared arguments.
   *
   * @returns {string}
   */
  public buildArgumentList(): string {

    let argumentList: string = this.argumentListToString();
    return argumentList;
  }

  private argumentListToString(): string {

    //Todo: apply array.join()

    let argumentList: string = '';
    for (let i: number = 0; i < this.argumentList.length; i++) {

      let argument: string = this.argumentToString(i);
      argumentList += argument;

      if (i < this.argumentList.length - 1) {
        argumentList += ' ';
      }
    }

    return argumentList;
  }

  private argumentToString(key: number): string {

    let argument: TerminalArgumentInterface = this.argumentList[key];
    let argumentText: string = '';


    if (Object.keys(argument).length == 1) {

      argumentText = argument.key;
    } else {

      argumentText = `${argument.key} "${argument.value}"`
    }

    return argumentText;
  }
}