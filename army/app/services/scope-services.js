/*
 * ANGULAR SINGLE PAGE Warhammer APP
 * Version: 1.0
 * Creator: Bogdan Suciu
 * Description: service to offer common scope for all controllers
 * REQUEST SERVICES
 */
(function() {
  "use strict";
  // defining api communication services
  angular.module("armyApp").factory("scopeService", function() {
    var shared = {};
    return {
      shared: shared
    };
  });
})();