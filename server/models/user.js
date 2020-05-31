const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
    'pk' : String,
    'username' : String,
    'full_name' : String,
    'is_private' : Boolean,
    'profile_pic_url' : String,
    'is_verified' : Boolean,
})

module.exports = mongoose.model('nullUser',userSchema)