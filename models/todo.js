const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
const ModelSchema = new Schema({
    name: String,
    textData: String,
    quillData: Schema.Types.Mixed,
    dueDate: {
        type: Date,
        validate: {
            validator: function(v) {
                let today = new Date() 
                today = today.setHours(0, 0, 0, 0)
                if (today >= v) {
                    return true
                } else {
                    return false 
                }
            },
            message: 'must be greater than today'
        }
    },
    status: Boolean,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    } 
});

const Model = mongoose.model('Todos', ModelSchema)
module.exports = Model