/*
 * ANGULAR SINGLE PAGE Warhammer APP
 * Version: 1.0
 * Creator: Bogdan Suciu
 * Description: The app retrieves Warhammer data from server
 * CONTROLLER
 */
(function () {
  "use strict";
  angular.module("armyApp").controller("quickReference", function ($scope, scopeService, requestServices) {
    if (!scopeService.shared.quickReference) {
      scopeService.shared.quickReference = {};
    }
    $scope.quickReference = scopeService.shared.quickReference;
    let _this = $scope.quickReference;

    _this.weaponSkillTable = {};

    if (!_this.visibleTable) {
      _this.visibleTable = "ballistic";
    }

    _this.referenceTables = {
      "melee": {
        values: false,
        getValues: function() {
          return requestServices.getWeaponSkillTable().then(function(response) {
            return response.values;
          }).catch(function(error){
            console.error("error")
            return false;
          });
        }
      },
      "ballistic": {
        values: {1: "6", 2: "5", 3: "4", 4: "3", 5: "2", 6: "2/6", 7: "2/5", 8: "2/4", 9: "2/3", 10: "2/2"},
        getValues: function() {
          return true;
        }
      },
      "wound": {
        values: {
          1: ["4+", "5+", "6+", "6+", "-", "-", "-", "-", "-", "-"],
          2: ["3+", "4+", "5+", "6+", "6+", "-", "-", "-", "-", "-"],
          3: ["2+", "3+", "4+", "5+", "6+", "6+", "-", "-", "-", "-"],
          4: ["2+", "2+", "3+", "4+", "5+", "6+", "6+", "-", "-", "-"],
          5: ["2+", "2+", "2+", "3+", "4+", "5+", "6+", "6+", "-", "-"],
          6: ["2+", "2+", "2+", "2+", "3+", "4+", "5+", "6+", "6+", "-"],
          7: ["2+", "2+", "2+", "2+", "2+", "3+", "4+", "5+", "6+", "6+"],
          8: ["2+", "2+", "2+", "2+", "2+", "2+", "3+", "4+", "5+", "6+"],
          9: ["2+", "2+", "2+", "2+", "2+", "2+", "2+", "3+", "4+", "5+"],
          10: ["2+", "2+", "2+", "2+", "2+", "2+", "2+", "2+", "3+", "4+"]
        },
        getValues: function() {
          return true;
        }
      }
    };

    _this.toggleReferenceTable = function(table) {

      if(_this.referenceTables[table]) {

        _this.visibleTable = table;

        if(!_this.referenceTables[table].values) {
          _this.referenceTables[table].getValues().then(function(response){
            _this.referenceTables[table].values = response;
          }).catch(function(error){
            console.error(error);
          });
        }

      }

    }

  });
})();