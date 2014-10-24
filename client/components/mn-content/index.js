require('angular')

var name = 'mnContent'

var controller = require('./mn-content-controller')
var template = require('./mn-content.html')

var factory = require('./mn-content-factory')

var directive = require('./mn-content')(controller.name, template)

module.exports = angular.module(name, [])
  .directive(name, directive)
  .controller(controller.name, controller.fn)
  .factory(factory.name, factory.fn)
