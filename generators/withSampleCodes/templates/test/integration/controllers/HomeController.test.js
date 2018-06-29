const assert = require('assert')

describe('HomeController', () => {
  let HomeController

  before(() => {
    HomeController = global.app.controllers.HomeController
    assert(HomeController)
  })
})

