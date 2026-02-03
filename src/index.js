import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import chatRoutes from "./routes/chat.routes.js";
import userRoutes from "./routes/user.routes.js";
import messageRoutes from "./routes/message.routes.js";

const app = express();
const port = 3000;

connectDB();

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

app.use(express.json());
app.use(cors());
app.use("/chat", chatRoutes);
app.use("/user", userRoutes);
app.use("/message", messageRoutes);



//Les dejo el link de mi Portfolio por si lo quieren checkear, hay un proyecto que realizamos con node y express (Faltan algunos proyectos mb)
// https://santinotassara.vercel.app/
