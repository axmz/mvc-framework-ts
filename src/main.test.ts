const User = require('./models/User')

const rootUrl = 'http://localhost:3000/users'


function test1() {
  const user = User.build({name: "Josh", age: 28})
  user.get('name')
}

test('attributes works properly', () => {
  expect(test1()).toBe('Josh')
})
