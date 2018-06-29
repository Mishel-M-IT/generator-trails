/**
 * @module ApiController
 * @description default api controller.
 */

const _Controller = require('./_Controller');

module.exports = class ApiController extends _Controller {

  index(request, h){
    const ret = {
      status: 'ok',
      message: 'welcome to api main page'
    };
    return this._json_response(ret, h);
  }
}
