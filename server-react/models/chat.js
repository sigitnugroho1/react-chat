var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const Chat = new Schema({
    name: String,
    chat: String
})

module.exports = mongoose.model('Chat', Chat);
