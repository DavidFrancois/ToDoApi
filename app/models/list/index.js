var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var plugins = require('./../plugins');

var schema = new Schema({
    name: { type: 'String', trim: true, required: false, maxlength: 255 },
    tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task', required: false }]
});

schema.plugin(plugins.created);

module.exports = mongoose.model('List', schema);