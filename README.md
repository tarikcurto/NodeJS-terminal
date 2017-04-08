Welcome to **node-terminal**
===================


Node-terminal is an open source deploy for execute basic and advanced **commands with node JS**.

Current version is developed under **TypeScript OOP**, has support for **asynchronous and synchronous** process.

Is based in reactive programming with **RxJS framework** and is able to **interact with I/O buffers of session**.


Let's go to develop!
-------------


- First, we need **node-terminal**:

```
npm install tarikcurto.node-terminal
```

```
git clone --branch "2.0.x" https://github.com/tarikcurto/node-terminal.git
```


- Next step is **import module** to JS or TypeScript file:
```
const CommandService =  require('tarikcurto.node-terminal').CommandService;
```
```
import {CommandService} from "tarikcurto.node-terminal";
import {ExecutionService} from "tarikcurto.node-terminal";
import {SessionExecutionService} from "tarikcurto.node-terminal";
```


- **Instance** service:
```
let commandService = new CommandService();
```

- **Deploy** your query:
```
let commandService = new CommandService();
commandService.nameCommandService.nameCommandData = {value: "ipconfig"};
commandService.argumentCommandService.argumentCommandData.push({key: "/all"});
```

- **Execute** your query:
```
let executionService:ExecutionService = commandService.instanceExecution();
let sessionExecutionService: SessionExecutionService = executionService.executeAsync();
```

- And finally,subscribe to **events** of terminal (optional):
```
sessionExecutionService.mainEventList.subscribeOnCloseSessionEvent((data)=>{
    console.log(data.fullOutput);
});
```

For bugs
-------------

- You can open a issue on [tarikcurto/node-terminal issue](https://github.com/tarikcurto/node-terminal/issues/new).

About me
-------------

- I am a passionate developer of 20 years that currently lives in Spain. 
-  You can contact me through [centro.tarik@live.com](mailto:centro.tarik@live.com)!
