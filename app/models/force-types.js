// grab the mongoose module
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var forceTypesSchema= new Schema({
  name: String
});

// define our codex model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Forcetype', forceTypesSchema);