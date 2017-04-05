"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const event_service_1 = require("../../event/service/event-service");
class TerminalExecutionEvent extends event_service_1.EventService {
    constructor() {
        super();
        this.startEvent = new this.rxjsEvent();
        this.messageExecutionEvent = new this.rxjsEvent();
        this.endExecutionEvent = new this.rxjsEvent();
    }
    lauchStartEvent(data) {
        this.startEvent.next(data);
    }
    onStartEvent(callback) {
        this.startEvent.subscribe(callback);
    }
    lauchMessageEvent(data) {
        this.messageExecutionEvent.next(data);
    }
    onMessageEvent(callback) {
        this.messageExecutionEvent.subscribe(callback);
    }
    lauchEndEvent(data) {
        this.endExecutionEvent.next(data);
    }
    onEndEvent(callback) {
        this.endExecutionEvent.subscribe(callback);
    }
}
exports.TerminalExecutionEvent = TerminalExecutionEvent;
//# sourceMappingURL=terminal-execution-event.js.map