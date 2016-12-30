/*
 * ANGULAR SINGLE PAGE Warhammer APP
 * Version: 1.0
 * Creator: Bogdan Suciu
 * Description: The app retrieves Warhammer data from server
 * DIRECTIVE
 */
(function() {
  "use strict";
  angular.module("armyApp").directive('troopsSelect', function() {
  return {
    restrict: 'E',
    template: '<select class="form-control" ng-model="armyList.troopsList[key].selectedOption" ng-options="y.name for (x,y) in armyList.troops" ng-change="armyList.getModels(armyList.troopsList[key].selectedOption)"></select>'
  };
});
})();