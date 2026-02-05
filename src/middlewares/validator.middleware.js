import User from "../models/users.js";
import Chat from "../models/chat.js"
import mongoose from "mongoose";

export const validateUser = async (req, res, next) => {
    const { _id, name, phone } = req.body;
    const existingUser = await User.findOne({ phone });
    try {

        if (_id && !mongoose.Types.ObjectId.isValid(_id)) {
            return res.status(400).json({
                success: false,
                data: null,
                message: "El _id proporcionado no tiene un formato válido de MongoDB."
            });
        }

        if (!name || !phone) {
            return res.status(400).json({
                success: false,
                data: null,
                message: "Faltan campos obligatorios: name y phone son requeridos."
            });
        }
        if (phone.length !== 10 || phone.includes(" ")) {
            return res.status(400).json({
                success: false,
                data: null,
                message: "El telefono debe tener 10 caracteres y deben ser solo numeros."
            });
        }
        if (existingUser) {
            return res.status(400).json({
                success: false,
                data: null,
                message: "El usuario ya existe."
            });
        }
        next();
    } catch (error) {
        res.status(500).json({
            success: false,
            data: null,
            message: "Error al validar el usuario: " + error.message
        });
    }
};

export const validateMessage = async (req, res, next) => {
    try {
        const { idChat, idUser, message } = req.body;

        const chat = await Chat.findById(idChat);
        const user = await User.findById(idUser);
        if (!chat || !user) {
            return res.status(400).json({
                success: false,
                data: null,
                message: "El chat y el usuario deben existir."
            });
        }
        if (!idChat || !idUser || !message?.trim()) {
            return res.status(400).json({
                success: false,
                data: null,
                message: "El mensaje no puede estar vacío y debe tener un chat y usuario asociado."
            });
        }
        if (!chat.participants.includes(idUser)) {
            return res.status(400).json({
                success: false,
                data: null,
                message: "El usuario no pertenece al chat."
            });
        }
        next();
    } catch (error) {
        res.status(500).json({
            success: false,
            data: null,
            message: "Error al validar el mensaje: " + error.message
        });
    }
};

export const validateChat = async (req, res, next) => {
    const { participants } = req.body;
    const foundUsers = await User.find({ _id: { $in: participants } });

    try {
        if (foundUsers.length !== participants.length) {
            return res.status(400).json({
                success: false,
                data: null,
                message: "No todos los participantes existen."
            });
        }
        if (!participants || participants.length < 2) {
            return res.status(400).json({
                success: false,
                data: null,
                message: "El chat debe tener al menos 2 participantes."
            });
        }
        const existingChat = await Chat.findOne({
            participants: { $all: participants, $size: participants.length }
        });

        if (existingChat) {
            return res.status(400).json({
                success: false,
                data: existingChat,
                message: "Ya existe un chat con estos participantes."
            });
        }
        next();
    } catch (error) {
        res.status(500).json({
            success: false,
            data: null,
            message: "Error al validar el chat: " + error.message
        });
    }
};
