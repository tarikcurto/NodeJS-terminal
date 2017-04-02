
import {TerminalService as _TerminalService}  from './src/module/terminal/service/terminal-service';

export const TerminalService = _TerminalService;

let terminalService = new TerminalService();

terminalService.eventManager.onEndExecutionEvent((data)=>{
  console.log(data.output)
})

terminalService.setCommandName('ipconfig')
  .setExecutionMode(TerminalService.EXECUTION_ASYNC)
  .exec();