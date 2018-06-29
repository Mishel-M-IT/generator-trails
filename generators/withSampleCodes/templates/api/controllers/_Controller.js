/**
 *  * @module _Controller
 *   * @description used to customize controllers
 *    */
module.exports = class _Controller extends Controller {
  
  constructor(){
    super();
  }

  _json_response(res, h = null){
    let ret = '';
    ret = JSON.stringify(res);
    if (h == null){
      return ret;
    }else{
      const response = h.response(ret)
        .header('cache-control', 'no-cache')
        .type('application/json')
      return response;
    }
  }
  
}
