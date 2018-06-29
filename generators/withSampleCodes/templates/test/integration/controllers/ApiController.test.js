const assert = require('assert')

describe('ApiController', () => {
  let ApiController

  before(() => {
    ApiController = global.app.controllers.ApiController
    assert(ApiController)
  })
})

