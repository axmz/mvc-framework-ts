type Callback = () => void;

export default class Eventing {
  events: { [key: string]: Callback[] } = {};

  on = (eventName: string, callback: Callback): void => {
    const eventArr = this.events[eventName] || [];
    eventArr.push(callback);
    this.events[eventName] = eventArr;
  }

  trigger = (eventName: string): void => {
    const eventArr = this.events[eventName];
    if (eventArr && eventArr.length > 0) {
      eventArr.forEach(cb => cb());
    }
    return;
  }
}
