/**
 * @module <%= controllerClass %>
 * @description <%= controllerDesc %>.
 */
<% if (controllerParentClass !== 'Controller') { %>
const <%= controllerParentClass %> = require('./<%= controllerParentClass %>')
<% } %>
module.exports = class <%= controllerClass %> extends <%= controllerParentClass %> {

}
