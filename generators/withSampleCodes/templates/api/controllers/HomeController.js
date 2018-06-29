/**
 * @module HomeController
 * @description default controller.
 */

module.exports = class HomeController extends Controller {
  index(request, h){
    return 'home page';
  }
}
