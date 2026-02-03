import Chat from "../models/chat.js";

export async function createChat(req, res) {
    try {
        const chat = await Chat.create(req.body);
        res.status(201).json({
            success: true,
            data: chat,
            message: "Chat creado"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            data: null,
            message: "Error al crear chat: " + error.message
        });
    }
}

export async function viewChatsByUserId(req, res) {
    try {
        const chats = await Chat.find({ participants: req.params.userId });
        res.status(200).json({
            success: true,
            data: chats,
            message: "Chats obtenidos"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            data: null,
            message: "Error al obtener chats: " + error.message
        });
    }
}
