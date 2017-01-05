/*
 * ANGULAR SINGLE PAGE Warhammer APP
 * Version: 1.0
 * Creator: Bogdan Suciu
 * Description: The app retrieves Warhammer data from server
 * CONTROLLER
 */
(function() {
  "use strict";
  angular.module("armyApp").controller("armyList", function(scopeService, dataServices, requestServices, storageServices, $localStorage, $sessionStorage, $scope, $http) {
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
      var force = {};
      force.selectedCodex = "";
      force.codices = {};
      force.selectedFormation = "";
      _this.forcesList.forces.push(force);
      
      _modal.template = "app/modules/army-list/html/army-list-modal.html";
      _modal.data = force;
      _modal.data.retrieveDetachments = _this.retrieveDetachments;
      _modal.showModal();
      
      if(!_this.codices.length) {
        _this.retrieveCodices().then(function(response) {
          _this.codices = response;
          force.codices = response
        });
      } else {
        force.codices = _this.codices;
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
        console.log(response);
      });
    }
    
    // TODO refactor
    _this.selectedForce;
    _this.detachment;
    _this.selectedCodex;
    _this.forces;
    _this.detachment;
    _this.troops;
    _this.troopsList = {};
    _this.models={};

  });
})();