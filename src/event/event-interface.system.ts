
export interface EventInterface {

  subscribe(callback: Function);

  next(data: any);

}