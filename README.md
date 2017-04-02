--- Example of terminal ---

import {TerminalExecutionService} from 'nodejs-terminal';

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