// app/routes.js

var mongoose = require('mongoose');

// grab the item model we just created
var codexList = require('./models/codexes');
var forcesList = require('./models/forces');
var forceTypes = require('./models/force-types');

module.exports = function (app) {

  // server routes ===========================================================
  // handle things like api calls
  // authentication routes

  /**
   * retrieves codex list
   */
  app.get('/api/codex-list', function (req, res) {
    // use mongoose to get all nerds in the database
    codexList.find(function (err, items) {

      // if there is an error retrieving, send the error.
      // nothing after res.send(err) will execute
      if (err)
        res.send(err);

      res.json(items); // return all nerds in JSON format
    });
  });

  /**
   * retrieves a list of available detachments/formations for the provided codex id
   */
  app.post('/api/forces', function (req, res) {
    forcesList.findOne({"codex_id": req.body.codex}, "force_types", function (err, forces) {

      // if there is an error retrieving, send the error.
      // nothing after res.send(err) will execute
      if (err)
        res.send(err);

      res.json(forces.force_types); // return all in JSON format
    });
  });

  /**
   * retrieves force type list
   */
  app.post('/api/force-types', function (req, res) {
    var idArray = [];
    for(var i = 0; i < req.body.forcetypes.length; i++) {
      var currentId = req.body.forcetypes[i];
      console.log(currentId);
      idArray.push(mongoose.mongo.ObjectId(currentId));
    }
    forceTypes.find({
        '_id': {
          $in: idArray
        }
      },
      "name",
      function (err, typesList) {

        // if there is an error retrieving, send the error.
        // nothing after res.send(err) will execute
        if (err)
          res.send(err);

        res.json(typesList); // return all in JSON format
      });
  });

  // route to handle creating goes here (app.post)
  // route to handle delete goes here (app.delete)

  // frontend routes =========================================================
  // route to handle all angular requests
  app.get('*', function (req, res) {
    res.sendfile('./army/index.html'); // load our public/index.html file
  });

};