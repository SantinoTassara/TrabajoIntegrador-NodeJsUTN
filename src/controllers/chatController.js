import Chat from "../models/chat.js";

export async function createChat(req, res) {
    try {
        const chat = await Chat.create(req.body);
        res.status(201).json(chat);
    } catch (error) {
        res.status(500).json("Error al crear chat:" + error.message);
    }
}

export async function viewChatsByUserId(req, res) {
    try {
        const chats = await Chat.find({ participants: req.params.userId });
        res.status(200).json(chats);
    } catch (error) {
        res.status(500).json("Error al obtener chats:" + error.message);
    }
}
