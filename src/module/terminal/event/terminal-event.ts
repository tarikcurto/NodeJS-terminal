
import {EventService} from '../../event/service/event-service';
import {EventInterface} from '../../event/service/event-interface';
import {TerminalExecutionStartEventInterface} from './terminal-execution-start-event-interface';
import {TerminalExecutionMessageEventInterface} from './terminal-execution-message-event-interface';
import {TerminalExecutionEndEventInterface} from './terminal-execution-end-event-interface';

export class TerminalEvent extends EventService {

  private startExecutionEvent: EventInterface;
  
  private messageExecutionEvent: EventInterface;
  
  private endExecutionEvent: EventInterface;

  constructor() {

    super();

    this.startExecutionEvent = new this.rxjsEvent();
    this.messageExecutionEvent = new this.rxjsEvent();
    this.endExecutionEvent = new this.rxjsEvent();
  }

  public lauchStartExecutionEvent(data: TerminalExecutionStartEventInterface) {

    this.startExecutionEvent.next(data)
  }

  public onStartExecutionEvent(callback: (data: TerminalExecutionStartEventInterface) => void) {

    this.startExecutionEvent.subscribe(callback);
  }

  public lauchMessageExecutionEvent(data: TerminalExecutionMessageEventInterface) {

    this.messageExecutionEvent.next(data)
  }

  public onMessageExecutionEvent(callback: (data: TerminalExecutionMessageEventInterface) => void) {

    this.messageExecutionEvent.subscribe(callback);
  }

  public lauchEndExecutionEvent(data: TerminalExecutionEndEventInterface) {

    this.endExecutionEvent.next(data)
  }

  public onEndExecutionEvent(callback: (data: TerminalExecutionEndEventInterface) => void) {

    this.endExecutionEvent.subscribe(callback);
  }
}