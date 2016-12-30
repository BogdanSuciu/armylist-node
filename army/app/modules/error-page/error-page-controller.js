/*
 * ANGULAR SINGLE PAGE Warhammer APP
 * Version: 1.0
 * Creator: Bogdan Suciu
 * Description: The app retrieves Warhammer data from server
 * CONTROLLER
 */
(function() {
  "use strict";
  angular.module("armyApp").controller("pageNotFound", function($scope,scopeService) {
    if(!scopeService.shared.pageNotFound) {
      scopeService.shared.pageNotFound = {};
    }
    $scope.pageNotFound = scopeService.shared.pageNotFound;
    var _this = $scope.pageNotFound;
    _this.message = "WE ARE SORRY THE PAGE YOU ARE LOOKING FOR DOESN'T EXIST";
  });
})();