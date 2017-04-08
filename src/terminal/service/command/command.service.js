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
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const name_command_service_1 = require("./name-command.service");
const argument_command_service_1 = require("./argument-command.service");
const execution_service_1 = require("./../execution/execution.service");
class CommandService {
    constructor() {
        this.nameCommandService = new name_command_service_1.NameCommandService;
        this.argumentCommandService = new argument_command_service_1.ArgumentCommandService();
    }
    build() {
        let command = this.nameCommandService.build() + ' ' +
            this.argumentCommandService.build();
        return command;
    }
    instanceExecution() {
        let command = this.build();
        let executionService = new execution_service_1.ExecutionService(command);
        return executionService;
    }
}
exports.CommandService = CommandService;
//# sourceMappingURL=command.service.js.map