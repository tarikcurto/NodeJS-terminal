"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_service_1 = require("./src/terminal/service/command/command.service");
let commandService = new command_service_1.CommandService();
commandService.nameCommandService.nameCommandData = { value: "ipconfig" };
commandService.argumentCommandService.argumentCommandData.push({ key: "/all" });
let executionService = commandService.instanceExecution();
console.log(executionService.executeSync());
/*let sessionExecutionService: SessionExecutionService = executionService.executeAsync();


sessionExecutionService.mainEventList.subscribeOnCloseSessionEvent((data)=>{
    console.log(data.fullOutput);
});*/ 
//# sourceMappingURL=index.js.map