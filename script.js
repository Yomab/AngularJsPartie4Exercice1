var app = angular.module('myApp', []);
app.controller('PlusMoins', function($scope) {
  $scope.count = 0;
  $scope.Add = function() {
    $scope.count++;
  }
  $scope.Moins = function() {
    $scope.count--;
  }
});
