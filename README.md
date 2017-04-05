Welcome to **node-terminal**
===================


Node-terminal is an open source deploy for execute basic and advanced **commands with node JS**.

Current version is developed under **TypeScript OOP**, has support for **asynchronous and synchronous** process.

Is based in reactive programming with **RxJS framework** and is able to **interact with I/O buffers of session**.


Let's go developing!
-------------


- First, we need **node-terminal**:

```
npm install tarikcurto.node-terminal
```

```
git clone --branch 1.0.x https://github.com/tarikcurto/node-terminal.git
```


- Next step is **import module** to JS or TypeScript file:
```
const TerminalExecutionService =  require('node-terminal').TerminalExecutionService;
```
```
import {TerminalExecutionService} from 'node-terminal';
```


- **Instance** service:
```
var terminalExecution = new TerminalExecutionService();
```

- Subscribe to **events** of terminal (optional):
```
terminalExecution.terminalExecutionEvent.onMessageEvent((data)=>{
  console.log(data.output);
});
```

- And finally **deploy** you query and **execute**, congrats!
```
terminalExecution.setCommandName('ipconfig');
terminalExecution.argumentService.addArgument({key: '/all'})
terminalExecution.setMode(TerminalExecutionService.EXECUTION_ASYNC)
terminalExecution.exec();
```

For bugs
-------------

- You can open a issue on [tarikcurto/node-terminal issue](https://github.com/tarikcurto/node-terminal/issues/new).

About me
-------------

- I am a passionate developer of 20 years that currently lives in Spain. 
-  You can contact me through [centro.tarik@live.com](mailto:centro.tarik@live.com)!
