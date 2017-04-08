import {CommandService} from "./src/terminal/service/command/command.service";
import {ExecutionService} from "./src/terminal/service/execution/execution.service";
import {SessionExecutionService} from "./src/terminal/service/execution/session-execution.service";

let commandService = new CommandService();
commandService.nameCommandService.nameCommandData = {value: "ipconfig"};
commandService.argumentCommandService.argumentCommandData.push({key: "/all"});

let executionService:ExecutionService = commandService.instanceExecution();
let sessionExecutionService: SessionExecutionService = executionService.executeAsync();

sessionExecutionService.mainEventList.subscribeOnCloseSessionEvent((data)=>{
    console.log(data.fullOutput);
});