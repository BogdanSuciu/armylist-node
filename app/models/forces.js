// grab the mongoose module
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var forcesSchema= new Schema({
  codex_id: String,
  force_types: Array
});

// define our codex model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Force', forcesSchema);