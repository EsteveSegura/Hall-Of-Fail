const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let nullUserSchema = new Schema({
    'pk' : String,
    'username' : String,
    'full_name' : String,
    'is_private' : Boolean,
    'profile_pic_url' : String,
    'is_verified' : Boolean,
    'likesCount' : Number,
})

module.exports = mongoose.model('nullUser',nullUserSchema)