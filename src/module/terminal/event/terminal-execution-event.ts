

import {EventService} from '../../event/service/event-service';
import {EventInterface} from '../../event/service/event-interface';
import {TerminalExecutionStartEventInterface} from './terminal-execution-start-event-interface';
import {TerminalExecutionMessageEventInterface} from './terminal-execution-message-event-interface';
import {TerminalExecutionEndEventInterface} from './terminal-execution-end-event-interface';

export class TerminalExecutionEvent extends EventService {

  private startEvent: EventInterface;
  
  private messageExecutionEvent: EventInterface;
  
  private endExecutionEvent: EventInterface;

  constructor() {

    super();

    this.startEvent = new this.rxjsEvent();
    this.messageExecutionEvent = new this.rxjsEvent();
    this.endExecutionEvent = new this.rxjsEvent();
  }

  public lauchStartEvent(data: TerminalExecutionStartEventInterface) {

    this.startEvent.next(data)
  }

  public onStartEvent(callback: (data: TerminalExecutionStartEventInterface) => void) {

    this.startEvent.subscribe(callback);
  }

  public lauchMessageEvent(data: TerminalExecutionMessageEventInterface) {

    this.messageExecutionEvent.next(data)
  }

  public onMessageEvent(callback: (data: TerminalExecutionMessageEventInterface) => void) {

    this.messageExecutionEvent.subscribe(callback);
  }

  public lauchEndEvent(data: TerminalExecutionEndEventInterface) {

    this.endExecutionEvent.next(data)
  }

  public onEndEvent(callback: (data: TerminalExecutionEndEventInterface) => void) {

    this.endExecutionEvent.subscribe(callback);
  }
}