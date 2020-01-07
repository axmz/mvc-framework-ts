import Eventing from "./Eventing";
import ApiSync from "./ApiSync";
import Attributes from "./Attributes";
import Model from "./Model";
import Collection from "./Collection";

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = "http://localhost:3000/users";

export default class User extends Model<UserProps> {
  static buildUser = (data: UserProps) => {
    return new User(new Eventing(), new ApiSync(rootUrl), new Attributes(data));
  };

  static getUsers = (): Collection<User, UserProps> => {
    return new Collection<User, UserProps>(rootUrl, User.buildUser);
    // const users = new Collection<User, UserProps>(rootUrl, User.buildUser);
    // users.fetch();
    // return users.models
  };
}
