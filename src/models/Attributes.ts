export default class Attributes<T> {
  constructor(public data: T) {}
  get = <K extends keyof T>(key: K): T[K] | string => {
    if (!key) {
      return "no prop was provided";
    } else {
      return this.data[key]!;
    }
  };

  getAll = (): T => {
    return this.data;
  };

  set = (update: T): void => {
    this.data = { ...this.data, ...update };
  };
}
