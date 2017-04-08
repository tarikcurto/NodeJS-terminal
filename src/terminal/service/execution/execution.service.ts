/*
 * Copyright 2017 Tarik Curto - centro.tarik@live.com
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

import {ChildProcess, exec, execSync} from "child_process";
import {SessionExecutionService} from "./session-execution.service";

export class ExecutionService {

    private command: string;

    public constructor(command: string) {

        this.command = command;
    }

    public executeSync(): string {

        let output: Buffer = execSync(this.command);
        return output.toString();
    }

    public executeAsync(): SessionExecutionService {

        let childProcess: ChildProcess = exec(this.command);
        let sessionExecutionService: SessionExecutionService = new SessionExecutionService(childProcess);

        return sessionExecutionService;
    }
}