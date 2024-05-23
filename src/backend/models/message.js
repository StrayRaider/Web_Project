const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");
const MessageSchema = new mongoose.Schema({
    id:{ type: String,default: () => uuidv4(),required:true},
    message: { type: String, required: true },
    sender: { type: String, required: true },
    receiver: { type: String, required: true },
    timestamp: {
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model("Message", MessageSchema);
