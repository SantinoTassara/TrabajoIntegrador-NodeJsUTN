## Trabajo Integrador - Diplomatura en Desarrollo Web con JavaScript - UTN

### Alumno

- Santino Tassara Franco

### Descripción

API REST basica de mensajeria para el Curso de Node.js de la UTN E-Learning.

### Requisitos

- Node.js 18 o superior
- MongoDB 5.0 o superior


### Instalacion(Opcional)

1. Clona el repositorio
2. Ejecuta `npm install` para instalar las dependencias
3. Ejecuta `npm start` para iniciar el servidor

### Uso (DEJO EJEMPLOS PARA REALIZAR LOS POST MAS ABAJO)

- POST /user: Crear un usuario
- DELETE /user/:id: Eliminar un usuario
- POST /chat: Crear un chat
- GET /chat/:userId: Obtener los chats de un usuario
- POST /message: Crear un mensaje
- GET /message/:chatId: Obtener los mensajes de un chat

### Tecnologías

- Node.js
- Express
- MongoDB
- Mongoose

### Postman JSON (Ejemplos con usuarios y chats creados)

- CreateUser
```json
{
    {
    "name": "Usuario4",
    "pfp": "",
    "phone": "1234567894"
    }
}
```

- CreateChat
```json
{
    {
    "participants": ["6984c29e3e19b41e603fb2f1", "6984d3ab3e19b41e603fb2fe"]
    }
}
```

-createMessage
```json
{
    {
    "idChat": "6984d36c3e19b41e603fb2fb",
    "idUser": "6984c2af3e19b41e603fb2f4",
    "message": "Hola"
    }
}
```

### Contacto

-GitHub: https://github.com/SantinoTassara
-Portafolio: https://santinotassara.vercel.app/
-linkedin: https://www.linkedin.com/in/santinotassara/
-Correo: santinotassaraar@gmail.com




