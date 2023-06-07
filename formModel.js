const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
mongoose.connect("mongodb+srv://valeriiacode:oGhRH1992pIpbSRE@cluster0.fincetk.mongodb.net/?retryWrites=true&w=majority")


const messageSchema = {
    name: String,
    email: String,
    phone: Number,
    message: String
}

const Message = mongoose.model("MyMessage", messageSchema)

module.exports = Message;