export default class Observer {
  constructor() {
    this.subscribers = [];
  }

  subscribe(func) {
    this.subscribers.push(func);
  }

  unsubscribe(func) {
    this.subscribers = this.subscribers.filter((it) => it !== func);
  }

  notifySubscribers(data) {
    this.subscribers.forEach((it) => it(data));
  }
}
