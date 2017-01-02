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
          return response.data.records;
        });
      },
      detachmentDetails: function(data) {
        return $http.get("http://armylist.bogdansuciu.com/php/detachment.php?id=" + data.id).then(function(response) {
          return response.data.records;
        });
      },
      units: function(codex, slot) {
        return $http.get("http://armylist.bogdansuciu.com/php/units.php?codex=" + codex + "&slot=" + slot).then(function(response) {
          return response.data.records;
        });
      },
      models: function(id) {
        return $http.get("http://armylist.bogdansuciu.com/php/models.php?model-id=" + id).then(function(response) {
          return response.data.records;
        });
      }
    };
  });
})();