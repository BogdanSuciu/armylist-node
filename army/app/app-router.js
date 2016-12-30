/*
 * ANGULAR SINGLE PAGE Warhammer APP
 * Version: 1.0
 * Creator: Bogdan Suciu
 * Description: The app retrieves Warhammer data from server
 */
(function() {
  "use strict";
  
  // app router
  angular.module("armyApp").config(['$routeProvider', '$locationProvider',function($routeProvider, $locationProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "app/modules/welcome/html/welcome.html",
    controller: "welcome"
  })
  .when("/armylist", {
    templateUrl : "app/modules/army-list/html/army-list.html",
    controller: "armyList"
  })
  .when("/quick-reference", {
    templateUrl : "app/modules/quick-reference/html/quick-reference.html",
    controller: "quickReference"
  })
  .otherwise({
    templateUrl : "app/modules/error-page/html/error-page.html",
    controller: "pageNotFound"
  });
  
  $locationProvider.html5Mode(true);
  
}]);
})();