
import * as RxJS from 'rxjs';

export class Event {

  protected rxjsEvent;

  constructor() {

    this.rxjsEvent = RxJS.Subject;
  }
}