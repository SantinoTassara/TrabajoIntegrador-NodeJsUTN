import User from "../models/users.js";

export async function getAllUsers(req, res) {
    try {
        const users = await User.find();
        res.status(200).json({
            success: true,
            data: users,
            message: "Usuarios obtenidos"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            data: null,
            message: "Error al obtener usuarios: " + error.message
        });
    }
}


export async function createUser(req, res) {
    try {
        const user = await User.create(req.body);
        res.status(201).json({
            success: true,
            data: user,
            message: "Usuario creado"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            data: null,
            message: "Error al crear usuario: " + error.message
        });
    }
}
export async function deleteUser(req, res) {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        res.status(200).json({
            success: true,
            data: user,
            message: "Usuario eliminado"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            data: null,
            message: "Error al eliminar usuario: " + error.message
        });
    }
}