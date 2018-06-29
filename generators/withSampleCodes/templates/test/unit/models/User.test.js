const assert = require('assert')

describe('User', () => {
  let User

  before(() => {
    User = global.app.models.User
    assert(User)
  })
})

