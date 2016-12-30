/*
 * ANGULAR SINGLE PAGE Warhammer APP
 * Version: 1.0
 * Creator: Bogdan Suciu
 * Description: The app retrieves Warhammer data from server
 * DIRECTIVE
 */
(function() {
  "use strict";
  angular.module("armyApp").directive('oneDTable', function() {
    return {
      restrict: 'E',
      scope: {
        data: '=tableData'
      },
      templateUrl: 'app/directives/one-d-table/one-d-table.html'
    };
  });
})();