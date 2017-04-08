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
const event_service_1 = require("../../../event/service/event.service");
class SessionExecutionEvent {
    constructor() {
        this.eventService = new event_service_1.EventService();
        this.onMessageEvent = this.eventService.createEvent();
        this.onCloseSessionEvent = this.eventService.createEvent();
    }
    launchOnMessageEvent(data) {
        this.onMessageEvent.next(data);
    }
    subscribeOnMessageEvent(callback) {
        this.onMessageEvent.subscribe(callback);
    }
    launchOnCloseSessionEvent(data) {
        this.onCloseSessionEvent.next(data);
    }
    subscribeOnCloseSessionEvent(callback) {
        this.onCloseSessionEvent.subscribe(callback);
    }
}
exports.SessionExecutionEvent = SessionExecutionEvent;
//# sourceMappingURL=session-execution.event.js.map