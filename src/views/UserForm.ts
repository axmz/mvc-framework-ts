import View from "./View";
import User, { UserProps } from "../models/User";

export default class UserForm extends View<User, UserProps> {
	eventsMap() {
		return {
			"click:.set-name": this.onSetNameClick,
			"click:.set-age": this.onSetAgeClick,
			"click:.save-model": this.onSaveClick
		};
	}

	onSaveClick = (): void => {
		this.model.save();
	};

	onSetNameClick = (): void => {
		const selector = this.parent.querySelector("input");
		if (selector) {
			const name = selector.value;
			this.model.set({ name });
		}
	};

	onSetAgeClick = (): void => {
		const age = Math.floor(Math.random() * 100);
		this.model.set({ age });
	};

	template() {
		return `
			<input placeholder="${this.model.get("name")}" />
			<button class="set-name">Change name</button>
			<button class="set-age">Set random age</button>
			<button class="save-model">Save User</button>
	  `;
	}
}
