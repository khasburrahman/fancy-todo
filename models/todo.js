const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
const ModelSchema = new Schema({
    name: String,
    data: Schema.Types.Mixed,
    dueDate: Date,
    status: Boolean,
});

const Model = mongoose.model('Users', ModelSchema)
module.exports = Model