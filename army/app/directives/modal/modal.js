/*
 * ANGULAR SINGLE PAGE Warhammer APP
 * Version: 1.0
 * Creator: Bogdan Suciu
 * Description: The app retrieves Warhammer data from server
 * DIRECTIVE
 */
(function() {
  "use strict";
  angular.module("armyApp").directive('armylistModal', function(scopeService) {
    if(!scopeService.shared.modal) {
      scopeService.shared.modal = {};
      scopeService.shared.modal.template = "";
      scopeService.shared.modal.data = {};
    }
    return {
      restrict: 'E',
      link: function(scope) {
        scope.modal = scopeService.shared.modal;
        let _this = scope.modal;
        _this.show = false;
        _this.showModal = function(template, data) {
          _this.template = template;
          _this.data = data;
          _this.show = true;
        }
        _this.hideModal = function() {
          _this.show = false;
          _this.template = "";
          _this.data = {};
        };
      },
      templateUrl: 'app/directives/modal/modal.html'
    };
  });
})();