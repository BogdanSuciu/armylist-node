/*
 * ANGULAR SINGLE PAGE Warhammer APP
 * Version: 1.0
 * Creator: Bogdan Suciu
 * Description: The app retrieves Warhammer data from server
 * DIRECTIVE
 */
(function() {
  "use strict";
  angular.module("armyApp").directive('mainNavigation', function() {
  return {
    restrict: 'E',
    templateUrl: 'app/modules/main-navigation/directives/main-navigation.html'
  };
});
})();