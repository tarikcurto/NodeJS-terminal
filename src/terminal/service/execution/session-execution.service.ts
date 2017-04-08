/*
 * Copyright 2017 Tarik Curto
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {ChildProcess} from "child_process";
import {SessionExecutionEvent} from "./../../event/execution/session-execution.event";

export class SessionExecutionService {

    public mainEventList: SessionExecutionEvent;

    private childProcess: ChildProcess;

    private outputList: Array<string>;

    public constructor(childProcess: ChildProcess) {

        this.childProcess = childProcess;
        this.mainEventList = new SessionExecutionEvent();
        this.outputList = [];

        this.manageEventListByChildProcess();
    }

    private manageEventListByChildProcess(){

        this.childProcess.stdout.on('data', (data: Buffer) => {

            let outputData: string = data.toString();
            this.outputList.push(outputData);
            this.mainEventList.launchOnMessageEvent({output: outputData});
        });

        this.childProcess.on('exit', (pid: number) => {

            let fullOutput: string = this.outputList.join('');
            this.mainEventList.launchOnCloseSessionEvent({fullOutput: fullOutput, childProcess: this.childProcess});
        });
    }

}