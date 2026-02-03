import Message from "../models/message.js";

export async function createMessage(req, res) {
    try {
        const message = await Message.create(req.body);
        res.status(201).json(message);
    } catch (error) {
        res.status(500).json("Error al crear mensaje:" + error.message);
    }
}

export async function viewMessagesByChatId(req, res) {
    try {
        const messages = await Message.findAll({ chatId: req.params.chatId });
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json("Error al obtener mensajes:" + error.message);
    }
}