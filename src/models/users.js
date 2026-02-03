import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    pfp: {
        type: String,
        required: false,
        //pfp = Foto de perfil (se ingresa una url)
    },
    phone: {
        type: String,
        required: true,
    }

})

const User = mongoose.model("User", userSchema);

export default User;
