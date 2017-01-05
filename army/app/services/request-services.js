/*
 * ANGULAR SINGLE PAGE Warhammer APP
 * Version: 1.0
 * Creator: Bogdan Suciu
 * Description: The app retrieves Warhammer data from server
 * REQUEST SERVICES
 */
(function() {
  "use strict";
  // defining api communication services
  angular.module("armyApp").factory("requestServices", function($http) {
    return {
      codexList: function() {
        return $http.get("/api/codex-list").then(function(response) {
          return response.data;
        })
      },
      forceList: function(codexId) {
        var data =  {
          codex: codexId
        };
        return $http.post("/api/forces",data).then(function(response) {
          var data = {
            forcetypes: response.data
          };
          return $http.post("/api/force-types",data).then(function(response){
            return response;
          });
        });
      },

    };
  });
})();