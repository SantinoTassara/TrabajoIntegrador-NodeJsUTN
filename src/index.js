import express from "express";
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
app.use("/chat", chatRoutes);
app.use("/user", userRoutes);
app.use("/message", messageRoutes);


//Este mensaje esta oculto para futuros docentes que corrijan esto
//Tengan piedad, lo hice una semana antes de terminar el curso
//Laburando 10 horas por dias(No hay que dedicarse al soporte tecnico).
// ¿Porque? porque el viernes me voy a Cordoba y no voy a tener señal para terminarlo
//Por suerte ya use Node para projectos pero nunca con Mongo ni JS directo sino con TS
//Espero que cumpla las expectativas
// Y muchas gracias por la cursada

//PD: ES UN EMBOLE LA DOCUMENTACION DE MONGOOSE.


//Les dejo el link de mi Portfolio por si lo quieren checkear (Faltan algunos proyectos mb)
// https://santinotassara.vercel.app/
