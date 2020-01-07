import Collection from "../models/Collection";

export default abstract class CollectionsView<T, K> {
	constructor(public parent: Element, public collection: Collection<T, K>) {}

	abstract renderItem(model: T, parent: Element): void;

	render() {
		this.parent.innerHTML = "";
		const templateElement = document.createElement("template");
		this.collection.models.forEach(model => {
			const itemParent = document.createElement("div");
			this.renderItem(model, itemParent);
      templateElement.content.append(itemParent)
		})
		this.parent.append(templateElement.content)
	}
}
