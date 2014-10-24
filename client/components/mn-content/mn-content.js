module.exports = function (controllerName, template) {
  return function () {
    return {
      restrict: 'AE',
      controller: controllerName,
      template: template,
      transclude: true
    }
  }
}
