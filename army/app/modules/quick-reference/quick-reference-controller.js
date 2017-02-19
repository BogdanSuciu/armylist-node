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
        values: false,
        getValues: function() {
          return requestServices.getBallisticSkillTable().then(function(response) {
            return response.values;
          }).catch(function(error){
            console.error("error")
            return false;
          });
        }
      },
      "wound": {
        values: false,
        getValues: function() {
          return requestServices.getToWoundTable().then(function(response) {
            return response.values;
          }).catch(function(error){
            console.error("error")
            return false;
          });
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