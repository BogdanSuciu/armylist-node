/*
 * ANGULAR SINGLE PAGE Warhammer APP
 * Version: 1.0
 * Creator: Bogdan Suciu
 * Description: The app retrieves Warhammer data from server
 * DIRECTIVE
 */
(function() {
  "use strict";
  angular.module("armyApp").directive('twoDTable', ['scopeService', function(scopeService) {
    return {
      restrict: 'E',
      scope: {
        id: '=tableId',
        label: '=tableLabel',
        data: '=tableData',
      },
      templateUrl: 'app/directives/two-d-table/two-d-table.html',
      link: function($scope) {
        // checking if table id was provided
        if($scope.id) {
          $scope.showTable = true;
          if(!scopeService.shared[$scope.id]) {
            scopeService.shared[$scope.id] = {};
          }
          if(!scopeService.shared[$scope.id]['twoDTable']) {
            var obj = {};
            obj.selectedColumn = "";
            obj.selectedRow = "";
            obj.selectColumn = function(column) {
              // TODO column selection doesn't work
              obj.selectedColumn = column.$index;
            };
            obj.selectRow = function(row) {
              obj.selectedRow = row.$index;
            };
              
            scopeService.shared[$scope.id]['twoDTable'] = obj;
          }
          $scope.table = scopeService.shared[$scope.id].twoDTable;
        } else {
            console.error("please provide table id for 2d table");
        }
      }
    };
  }]);
})();