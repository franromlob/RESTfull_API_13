// Importamos el módulo de Express
const express = require("express");

// Declaramos el puerto donde se levantará el servidor
const PORT = 3000;

// Así inicializamos Express y podemos acceder a todas las
// funcionalidades que no proporciona.
const app = express();

// Analizamos los archivos JSON
app.use(express.json());

const users = require("./controllers/usersControllers");
app.use("/users", users);

app.listen(PORT, () => {
  console.log(`Server running http://localhost:${PORT}`);
});

// // 1. Importamos el módulo 'http' de Node.js (para crear el servidor)
// const { Console } = require("console");
// const http = require("http");

// // 2. Definimos el puerto donde correrá el servidor (ej: 3000)
// const PORT = 3000;

// // 3. Creamos el servidor con createServer
// const server = http.createServer((req, res) => {
//   // 4. Configuramos el tipo de contenido de la respuesta HTML
//   res.setHeader("Content-Type", "text/html");

//   // 5. Enviamos una respuesta al cliente (contenido HTML)
//   res.end("<h1>Hola, mundo!</h1>");
// });

// // 6. Ponemos el servidor a 'escuchar' en el puerto definido
// server.listen(PORT, () => {
//   // 7. Esto se ejecuta cuando el servidor inicia correctamente
//   console.log(`Servidor corriendo en http://localhost:${PORT}`);
// });
