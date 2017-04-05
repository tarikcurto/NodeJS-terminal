
import * as RxJS from 'rxjs';

export class EventService {

  protected rxjsEvent: any;

  constructor() {

    this.rxjsEvent = RxJS.Subject;
  }
}