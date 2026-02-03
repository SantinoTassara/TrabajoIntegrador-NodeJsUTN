import dotenv from "dotenv";
dotenv.config();

const config = {
    CONNECTION_STRING: process.env.CONNECTION_STRING,
}

export default config;