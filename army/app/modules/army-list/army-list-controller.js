/*
 * ANGULAR SINGLE PAGE Warhammer APP
 * Version: 1.0
 * Creator: Bogdan Suciu
 * Description: The app retrieves Warhammer data from server
 * CONTROLLER
 */
(function() {
  "use strict";
  angular.module("armyApp").controller("armyList",['scopeService', 'dataServices', 'requestServices', 'storageServices', '$localStorage', '$sessionStorage', '$scope', '$http', function(scopeService, dataServices, requestServices, storageServices, $localStorage, $sessionStorage, $scope, $http) {
    // registering in the shared scope
    if(!scopeService.shared.armyList) {
      scopeService.shared.armyList = {};
    }
    $scope.armyList = scopeService.shared.armyList;
    $scope.modal = scopeService.shared.modal;
    
    var _this = $scope.armyList;
    var _modal = $scope.modal;
    
    _this.forcesList = {};
    _this.codices = {};
    
    _this.armyForm = {};
    _this.armyForm.visible = false;
    _this.armyForm.name = "";
    _this.armyForm.description = "";
    _this.armyForm.pointsLimit = -1;
    _this.armyForm.armySaved = false;
    
    _this.toggleArmyForm = function() {
      _this.armyForm.visible = !_this.armyForm.visible;
    };
    
    _this.army = function(armyForm) {
      this.name = armyForm.name;
      this.description = armyForm.description;
      if(armyForm.pointsLimit) {
        this.pointsLimit = armyForm.pointsLimit;
      } else {
        this.pointsLimit = -1;
      }
      this.points = 0;
      this.forces = [];
    };
    
    _this.createArmy = function(armyForm) {
      _this.forcesList = new _this.army(armyForm);
      _this.armyForm.armySaved = true;
    };
    
    _this.editArmy = function() {
      _this.armyForm.visible = true;
      _this.armyForm.armySaved = false;
    };
    
    _this.addForce = function() {
      var data = {}
      data.force = {};
      data.force.selectedCodex = "";
      data.force.selectedDetachment = "";
      data.force.codices = {};
      data.force.selectedFormation = "";
      data.force.detachmentList = [];

      data.retrieveDetachments = function(codexId) {
        _this.retrieveDetachments(codexId).then(function(response) {
          data.force.detachmentList = response;
        });
      };
      data.saveSelection = function() {
        _this.forcesList.forces.push(data.force);
        _modal.hideModal();
      };
      _modal.showModal("app/modules/army-list/html/army-list-modal.html",data);
      
      if(!_this.codices.length) {
        _this.retrieveCodices().then(function(response) {
          _this.codices = response;
          data.force.codices = response
        });
      } else {
        data.force.codices = _this.codices;
      }
    }
    
    // retrieving initial codex list
    _this.retrieveCodices = function() {
      return requestServices.codexList().then(function(response) {
        return response;
      });
    };

    _this.retrieveDetachments = function (codexId) {
      return requestServices.forceList(codexId).then(function(response) {
        return response;
      });
    };

    _this.removeForce = function(index) {
      _this.forcesList.forces.splice(index,1);
    }

  }]);
})();