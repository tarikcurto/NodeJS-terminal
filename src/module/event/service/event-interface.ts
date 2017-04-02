
export interface EventInterface {

  subscribe(callback: Function): any;

  next(data: any): any;

}