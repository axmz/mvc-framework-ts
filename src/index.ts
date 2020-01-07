////////////////////////////////////////////////////////////////////////////////
// User
////////////////////////////////////////////////////////////////////////////////
// import User from "./models/User";
// const user = User.buildUser({ id: 8 });
// user.on('save', () => console.log(user))
// user.save()
// user.fetch()
// setTimeout(
//  () => console.log('get',user.get('name'))
// , 2000
// )

////////////////////////////////////////////////////////////////////////////////
// Collection
////////////////////////////////////////////////////////////////////////////////
// import Collection from "./models/Collection";
// import User, { UserProps } from "./models/User";
// const collection = new Collection<User, UserProps>("http://localhost:3000/users", User.buildUser);
// collection.fetch();
// setTimeout(() => {
//   console.log(collection);
// }, 2000);

// const user = User.buildUser({name: "Tina", age: 22})
// const users = User.getUsers()
// users.on('change', () => console.log('event',users))
// users.fetch()
// setTimeout( () => console.log(users), 3000)

////////////////////////////////////////////////////////////////////////////////
// View
////////////////////////////////////////////////////////////////////////////////
// import UserForm from "./views/UserForm";
// import User from './models/User'
// import UserShow from "./views/UserShow";
// import UserEdit from "./views/UserEdit";
// const root = document.querySelector('#root')
// const user = User.buildUser({name: "Susan", age: 32})
// // const userShow = new UserShow(root!, user)
// // userShow.render()
// // const userForm = new UserForm(root!, user)
// // userForm.render()
// const userEdit = new UserEdit(root!, user)
// console.log(userEdit)
// userEdit.render()

////////////////////////////////////////////////////////////////////////////////
// CollectionView / UserList
////////////////////////////////////////////////////////////////////////////////
import User, { UserProps } from "./models/User";
import UserList from "./views/UserList";
import Collection from "./models/Collection";
const root = document.querySelector("#root");
const collection = new Collection<User, UserProps>( "http://localhost:3000/users", User.buildUser);
collection.on('change', () => new UserList(root!, collection).render())
collection.fetch()