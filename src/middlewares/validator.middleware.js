export const validateUser = (req, res, next) => {
    const { name, phone } = req.body;
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
    next();
};

export const validateMessage = (req, res, next) => {
    const { idChat, idUser, message } = req.body;
    if (!idChat || !idUser || !message?.trim()) {
        return res.status(400).json({
            success: false,
            data: null,
            message: "El mensaje no puede estar vacío y debe tener un chat y usuario asociado."
        });
    }
    next();
};

export const validateChat = (req, res, next) => {
    const { participants } = req.body;
    if (!participants || participants.length < 2) {
        return res.status(400).json({
            success: false,
            data: null,
            message: "El chat debe tener al menos 2 participantes."
        });
    }
    next();
};
