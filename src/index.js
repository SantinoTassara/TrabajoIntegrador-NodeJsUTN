import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import chatRoutes from "./routes/chat.routes.js";
import userRoutes from "./routes/user.routes.js";
import messageRoutes from "./routes/message.routes.js";

const app = express();
const port = 3000;

connectDB();

app.use(express.json());
app.use(cors());

app.use("/chat", chatRoutes);
app.use("/user", userRoutes);
app.use("/message", messageRoutes);


if (process.env.NODE_ENV !== 'production') {
    app.listen(port, () => {
        console.log(`Servidor local en puerto ${port}`);
    });
}


export default app;
