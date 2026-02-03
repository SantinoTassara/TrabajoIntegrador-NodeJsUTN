import Message from "../models/message.js";

export async function createMessage(req, res) {
    try {
        const message = await Message.create(req.body);
        res.status(201).json({
            success: true,
            data: message,
            message: "Mensaje creado"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            data: null,
            message: "Error al crear mensaje: " + error.message
        });
    }
}

export async function viewMessagesByChatId(req, res) {
    try {
        const messages = await Message.find({ idChat: req.params.chatId });
        res.status(200).json({
            success: true,
            data: messages,
            message: "Mensajes obtenidos"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            data: null,
            message: "Error al obtener mensajes: " + error.message
        });
    }
}