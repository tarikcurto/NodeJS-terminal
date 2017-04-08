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
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ArgumentCommandService {
    constructor() {
        this.argumentCommandData = [];
    }
    build() {
        let argumentList = this.argumentListToString();
        return argumentList;
    }
    argumentListToString() {
        //Todo: apply array.join()
        let argumentList = '';
        for (let i = 0; i < this.argumentCommandData.length; i++) {
            let argument = this.argumentToString(i);
            argumentList += argument;
            if (i < this.argumentCommandData.length - 1) {
                argumentList += ' ';
            }
        }
        return argumentList;
    }
    argumentToString(key) {
        let argument = this.argumentCommandData[key];
        let argumentText = '';
        if (Object.keys(argument).length == 1) {
            argumentText = argument.key;
        }
        else {
            argumentText = `${argument.key} "${argument.value}"`;
        }
        return argumentText;
    }
}
exports.ArgumentCommandService = ArgumentCommandService;
//# sourceMappingURL=argument-command.service.js.map