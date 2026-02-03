import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    idChat: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Chat",
        required: true
    },
    idUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    message: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        required: true
    }
})

const Message = mongoose.model("Message", messageSchema);

export default Message;