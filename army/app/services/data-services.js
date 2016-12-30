/*
 * ANGULAR SINGLE PAGE Warhammer APP
 * Version: 1.0
 * Creator: Bogdan Suciu
 * Description: The app retrieves Warhammer data from server
 * DATA SERVICES
 */
(function() {
  "use strict";
  // defining data filtering services
  angular.module("armyApp").factory("dataServices", function() {
    return {
      /*
      function to check if the historical record is older than 10 minutes
      if the record is older than 10 mins the function removes it from provided object
    */
      expiryCheck: function(data) {
        // retrieving current time stamp
        var compareTime = new Date().getTime();
        // looping through the data and checking how long has passed since it was created
        for (var i = 0; i < data.length; i++) {
          var record = data[i];
          // removing the item if more than 600000 ms or 10 mins have passed
          if (compareTime - record.timeStamp > 600000) {
            data.splice(i, 1);
          }
        }
        return data;
      }
    };
  });
})();