
import {TerminalExecutionService as _TerminalExecutionService}  from './src/module/terminal/service/terminal-execution-service';

export const TerminalExecutionService = _TerminalExecutionService;

/* --- Example of terminal ---

//instance
let terminalExecution = new TerminalExecutionService();

//event manager
terminalExecution.terminalExecutionEvent.onMessageEvent((data)=>{
  console.log(data.output);
});

//execute
terminalExecution.setCommandName('ipconfig');
terminalExecution.argumentService.addArgument({key: '/all'})
terminalExecution.setMode(TerminalExecutionService.EXECUTION_ASYNC)
terminalExecution.exec();

*/
