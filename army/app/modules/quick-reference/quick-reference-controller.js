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

    if(!_this.referenceTables) {
      _this.referenceTables = {};
    }

    _this.getReferenceValues = function(table) {
      switch(table) {
        case "melee":
          return requestServices.getWeaponSkillTable().then(function(response) {
            return response;
          }).catch(function(error){
            console.error("error")
            return false;
          });
        case "ballistic":
          return requestServices.getBallisticSkillTable().then(function(response) {
            return response;
          }).catch(function(error){
            console.error("error")
            return false;
          });
        case "wound":
          return requestServices.getToWoundTable().then(function(response) {
            return response;
          }).catch(function(error){
            console.error("error")
            return false;
          });
      }
    };

    _this.toggleReferenceTable = function(table) {

      _this.visibleTable = table;

      if(!_this.referenceTables[table]) {
        _this.getReferenceValues(table).then(function(response){
          _this.referenceTables[table] = response;
        }).catch(function(error){
          console.error(error);
        });
      }

    }

  });
})();