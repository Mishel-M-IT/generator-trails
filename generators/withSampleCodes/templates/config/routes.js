/**
 * Routes Configuration
 *
 * Configure how url patterns map to controllers, views, and static files.
 *
 * @see {@link http://trailsjs.io/doc/config/routes}
 */

module.exports = [
  {
    method: [ 'GET' ],
    path: '/',
    handler: 'HomeController.index'
  },
  {
    method: [ 'GET' ],
    path: '/api/v1',
    handler: 'ApiController.index'
  },
  {
    method: [ 'GET' ],
    path: '/api/v1/',
    handler: 'ApiController.index'
  }
]
