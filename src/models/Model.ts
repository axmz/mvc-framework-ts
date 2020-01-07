import { AxiosPromise, AxiosResponse } from "axios";

interface Eventing {
  on(eventName: string, callback: () => void): void;
  trigger(eventName: string): void;
}

interface ApiSync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

interface Attributes<T> {
  get<K extends keyof T>(key: K): T[K] | string;
  getAll(): T;
  set(update: T): void;
}

type hasId = {
  id?: number
}

export default class Model<T extends hasId> {
  constructor(
    private events: Eventing,
    private sync: ApiSync<T>,
    private attributes: Attributes<T>
  ) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  get get() {
    return this.attributes.get;
  }

  get getAll() {
    return this.attributes.getAll;
  }

  set(update: T): void {
    this.attributes.set(update);
    this.trigger("change");
  }

  fetch(): void {
    const id = this.attributes.get("id");

    if (typeof id !== "number") {
      throw "Error: No id";
    }
    this.sync.fetch(id).then((res: AxiosResponse): void => {
      console.log("data", res.data);
      this.set(res.data);
    });
  }

  save(): void {
    const data = this.attributes.getAll();
    this.sync
      .save(data)
      .then((res: AxiosResponse) => this.trigger("save"))
      .catch(err => this.trigger("error"));
  }
}
