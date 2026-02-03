import mongoose from "mongoose";
import config from "../config/env.js";

export const connectDB = async () => {
    try {
        await mongoose.connect(config.CONNECTION_STRING);
        console.log("Conectado a MongoDB");
    } catch (error) {
        console.error("Error conectando a MongoDB:", error);
    }
};