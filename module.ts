
import {TerminalService}  from './src/service/terminal/terminal-service.system';

let terminalService: TerminalService = new TerminalService();

terminalService.setCommandName('git status');
terminalService.argumentService.addArgument({key:"-v"})
let execOutput = terminalService.exec();