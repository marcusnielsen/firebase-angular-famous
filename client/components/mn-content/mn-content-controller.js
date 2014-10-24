var name = 'mnContentController'

var fn = function ($scope, mnContentFactory) {
  $scope.mnContent = mnContentFactory
}

module.exports = {
  name: name,
  fn: fn
}
