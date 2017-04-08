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

import * as RxJS from "rxjs";
import {ChildProcess} from "child_process";
import {EventService} from "../../../event/service/event.service";

export class SessionExecutionEvent {

    private eventService: EventService;

    private onMessageEvent: RxJS.Subject<{ output: string }>;

    private onCloseSessionEvent: RxJS.Subject<{ childProcess: ChildProcess, fullOutput: string }>;

    public constructor() {

        this.eventService = new EventService();

        this.onMessageEvent = this.eventService.createEvent();
        this.onCloseSessionEvent = this.eventService.createEvent();
    }

    public launchOnMessageEvent(data: { output: string }) {

        this.onMessageEvent.next(data);
    }

    public subscribeOnMessageEvent(callback: (data: { output: string }) => void) {

        this.onMessageEvent.subscribe(callback);
    }

    public launchOnCloseSessionEvent(data: { childProcess: ChildProcess, fullOutput: string }) {

        this.onCloseSessionEvent.next(data);
    }

    public subscribeOnCloseSessionEvent(callback: (data: { childProcess: ChildProcess, fullOutput: string })=>void){

        this.onCloseSessionEvent.subscribe(callback);
    }
}