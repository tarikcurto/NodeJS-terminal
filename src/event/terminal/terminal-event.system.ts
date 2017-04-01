
import {Event} from '../event.system';
import {EventInterface} from '../event-interface.system';

export class TerminalEvent extends Event {

  private startExecutionEvent: EventInterface;

  private endExecutionEvent: EventInterface;

  constructor() {

    super();

    this.startExecutionEvent = new this.rxjsEvent();
    this.endExecutionEvent = new this.rxjsEvent();
  }

  public lauchStartExecutionEvent(data: startExecutionEventInterface) {

    this.startExecutionEvent.next(data)
  }

  public onStartExecutionEvent(callback: (data: startExecutionEventInterface) => void) {

    this.startExecutionEvent.subscribe(callback);
  }
  
  public lauchEndExecutionEvent(data: endExecutionEventInterface) {

    this.endExecutionEvent.next(data)
  }

  public onEndExecutionEvent(callback: (data: endExecutionEventInterface) => void) {

    this.endExecutionEvent.subscribe(callback);
  }
}

interface startExecutionEventInterface {

  child_process: Object;
}

interface endExecutionEventInterface {

  child_process: Object;

  output: string;
}