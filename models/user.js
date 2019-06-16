const { hash } = require('../helpers/password.helper')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
const ModelSchema = Schema({
    email: { type: String, unique: true, required: true, dropDups: true },
    password: { type: String, required: true }
})

ModelSchema.pre('save', function (next) {
    this.password = hash(this.password)
    next()
});

const Model = mongoose.model('Users', ModelSchema)
module.exports = Model