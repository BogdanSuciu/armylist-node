// grab the mongoose module
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var referenceSheetsSchema= new Schema();

// define our codex model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('referencesheet', referenceSheetsSchema);