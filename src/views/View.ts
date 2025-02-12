import Model from "../models/Model";

export default abstract class View<T extends Model<K>, K> {
	public regions: { [key: string]: Element } = {};

	constructor(public parent: Element, public model: T) {
		this.bindModel();
	}

	abstract template(): string;

	regionsMap(): { [key: string]: string } {
		return {};
	}

	eventsMap(): { [key: string]: () => void } {
		return {};
	}

	bindModel(): void {
		this.model.on("change", () => this.render());
	}

	// bindEvents(fragment: DocumentFragment): void {
	// 	const eventsMap = this.eventsMap();
	// 	for (let eventKey in eventsMap) {
	// 		const [eventName, selector] = eventKey.split(":");
	// 		const element = fragment.querySelector(selector);
	// 		if (element) {
	// 			element.addEventListener(eventName, eventsMap[eventKey]);
	// 		}
	// 	}
  // }
  
  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':');

      fragment.querySelectorAll(selector).forEach(element => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }

	mapRegions(fragment: DocumentFragment) {
    const regionsMap = this.regionsMap();

		for (let key in regionsMap) {
			let element = fragment.querySelector(regionsMap[key]);
			if (element) {
				this.regions[key] = element;
			}
		}
	}

	onRender(): void {}

	render() {
    this.parent.innerHTML = "";

		const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();
    this.bindEvents(templateElement.content);
    this.mapRegions(templateElement.content)
    console.log(templateElement)

    this.onRender()

		this.parent.append(templateElement.content);
	}
}
