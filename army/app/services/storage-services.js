/*
 * ANGULAR SINGLE PAGE Warhammer APP
 * Version: 1.0
 * Creator: Bogdan Suciu
 * Description: The app retrieves Warhammer data from server
 * STORAGE SERVICES
 */
(function () {
  "use strict";
  // defining local and session storage services
  angular.module("armyApp").factory("storageServices", function ($localStorage, $sessionStorage) {
    return {
      // retrieving local and session storage
      localStorage: $localStorage,
      sessionStorage: $sessionStorage,
      // function to make the initial data save to local storage
      defaultLocalStorage: function (data) {
        $localStorage.$reset();
        $localStorage = $localStorage.$default(data);
      },
      // function to make the initial data save to session storage
      defaultSessionStorage: function (data) {
        $sessionStorage = $sessionStorage.$default(data);
      },
      // function to save the provided data to local storage with a limit of 10 records
      saveToLocal: function (target, data) {
        if (data.length > 10) {
          data.length = 10;
        }
        $localStorage[target] = data;
      },
      // function to save the provided data to session storage with a limit of 10 records
      saveToSession: function (target, data) {
        if (data.length > 10) {
          data.length = 10;
        }
        $sessionStorage[target] = data;
      },
      // function to reset local storage
      resetLocalStorage: function () {
        $localStorage.$reset();
      },
      // function to reset session storage
      resetSessionStorage: function () {
        $sessionStorage.$reset();
      }
    };
  });
})();