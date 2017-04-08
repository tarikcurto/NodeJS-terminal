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

import {ArgumentCommandInterface} from "./../../interface/command/argument-command.interface";

export class ArgumentCommandService {

    public argumentCommandData: Array<ArgumentCommandInterface>;

    public constructor() {

        this.argumentCommandData = [];
    }

    public build(): string {

        let argumentList: string = this.argumentListToString();
        return argumentList;
    }

    private argumentListToString(): string {

        //Todo: apply array.join()

        let argumentList: string = '';
        for (let i: number = 0; i < this.argumentCommandData.length; i++) {

            let argument: string = this.argumentToString(i);
            argumentList += argument;

            if (i < this.argumentCommandData.length - 1) {
                argumentList += ' ';
            }
        }

        return argumentList;
    }

    private argumentToString(key: number): string {

        let argument: ArgumentCommandInterface = this.argumentCommandData[key];
        let argumentText: string = '';


        if (Object.keys(argument).length == 1) {

            argumentText = argument.key;
        } else {

            argumentText = `${argument.key} "${argument.value}"`
        }

        return argumentText;
    }
}