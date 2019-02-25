var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// The factSchema is used to embedded docs in as tudent doc.
// There is no model and no 'facts' collection
var monSchema = new Schema({
  title: { String },
  details: {String},
},
{
  timestamps: true
});

var userSchema = new Schema({
  name: String,
  email: String,
  mons: [monSchema],
  googleId: String
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);