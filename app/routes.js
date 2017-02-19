// app/routes.js

var mongoose = require('mongoose');

// grab the item model we just created
var codexList = require('./models/codexes');
var forcesList = require('./models/forces');
var forceTypes = require('./models/force-types')
var referenceSheets = require('./models/reference-sheets');

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

      if(forces && forces.force_types) {
          res.json(forces.force_types); // return all in JSON format
      } else {
          res.json(null);
      }
    });
  });

  /**
   * retrieves force type list
   */
  app.post('/api/force-types', function (req, res) {
    var idArray = [];
    for(var i = 0; i < req.body.forcetypes.length; i++) {
      var currentId = req.body.forcetypes[i];
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

  /**
   * retrieves weapon skill table reference
   */
  app.get('/api/reference-sheets/weapon-skill', function (req, res) {
      referenceSheets.findOne({"name": "weapon_skill_table"}, {"values": true, "_id": false },function (err, response) {

          // if there is an error retrieving, send the error.
          // nothing after res.send(err) will execute
          if (err)
              res.send(err);

          if(response) {
            res.json(response); // return all in JSON format
          } else {
            res.json(null);
          }


      });
  });

  /**
   * retrieves weapon skill table reference
   */
  app.get('/api/reference-sheets/ballistic-skill', function (req, res) {
    referenceSheets.findOne({"name": "ballistic_skill_table"}, {"values": true, "_id": false },function (err, response) {

      // if there is an error retrieving, send the error.
      // nothing after res.send(err) will execute
      if (err)
        res.send(err);

      if(response) {
        res.json(response); // return all in JSON format
      } else {
        res.json(null);
      }


    });
  });

  /**
   * retrieves weapon skill table reference
   */
  app.get('/api/reference-sheets/to-wound', function (req, res) {
    referenceSheets.findOne({"name": "to_wound_table"}, {"values": true, "_id": false },function (err, response) {

      // if there is an error retrieving, send the error.
      // nothing after res.send(err) will execute
      if (err)
        res.send(err);

      if(response) {
        res.json(response); // return all in JSON format
      } else {
        res.json(null);
      }


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