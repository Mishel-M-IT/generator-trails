const <%= modelName %>Resolver = require('../resolvers/<%= modelName %>Resolver') 

/**
 * 
 * @module <%= modelName %>
 * @description <%= modelDesc %>
 */
module.exports = class <%= modelName %> extends Model {

  static config () {
    return {
      resolver: <%= modelName %>Resolver
    }
  }

  static schema () {

  }
}

