import CollectionsView from "./CollectionsView";
import User, { UserProps } from "../models/User";
import UserShow from "./UserShow";

export default class UserList extends CollectionsView<User, UserProps> {
  renderItem(model: User, parent: Element): void {
    new UserShow(parent, model).render()
  }
}