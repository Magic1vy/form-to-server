const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

const messageSchema = {
    name: String,
    email: String,
    phone: Number,
    message: String
}

const Message = mongoose.model("MyMessage", messageSchema)

module.exports = Message;