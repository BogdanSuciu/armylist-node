/*
 * ANGULAR SINGLE PAGE Warhammer APP
 * Version: 1.0
 * Creator: Bogdan Suciu
 * Description: The app retrieves Warhammer data from server
 * CONTROLLER
 */
(function() {
  "use strict";
  angular.module("armyApp").controller("welcome",['$scope', 'scopeService', function($scope, scopeService) {
    if(!scopeService.shared.welcome) {
      scopeService.shared.welcome = {};
    }
    $scope.welcome = scopeService.shared.welcome;
    let _this = $scope.welcome;
    _this.message = "Welcome to my App";
  }]);
})();