import User from "../models/users.js";

export async function createUser(req, res) {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json("Error al crear usuario:" + error.message);
    }
}
export async function deleteUser(req, res) {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json("Error al eliminar usuario:" + error.message);
    }
}