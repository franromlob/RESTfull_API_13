// const express = require('express');
// const router = express.Router();

const router = require("express").Router();

let USERS = [
  { id: 1, name: "Usuario 1", email: "usuario1@example.com" },
  { id: 2, name: "Usuario 2", email: "usuario2@example.com" },
  { id: 3, name: "Usuario 3", email: "usuario3@example.com" },
];

// Método 'get' para obtener toda la Collection Users
router.get("/", (req, res) => {
  res.send(USERS);
});

// Método 'get' para obtener un único usuario
router.get("/:id", (req, res) => {
  // Convertimos el id de la URL en un entero
  const userId = parseInt(req.params.id);
  // Buscamos en el array por el valor que queremos buscar, en este cado por id
  const user = USERS.find((user) => user.id === userId);
  res.send(user);
});

//

// Método PATCH para obtener un único usuario
router.patch("/:id", (req, res) => {
  // Convertimos el id de la URL en un entero
  const userId = parseInt(req.params.id);
  // Desestructuración
  const { name, email } = req.body;

  // Buscamos en el Array por el valor que queremos buscar, en este caso por id
  const user = USERS.find((user) => user.id === userId);

  if (!user) {
    res.send("El usuario no existe");
  }

  if (name) {
    user.name = req.body.name;
  }

  if (email) {
    user.email = req.body.email;
  }

  res.send(user);
  // res.send(
  //   `Soy UPDATE (ACTUALIZAR) ${JSON.stringify(
  //     req.params.id
  //   )} - ${JSON.stringify(req.body)}`
  // );
});

// Método POST
router.post("/", (req, res) => {
  res.send(`Soy POST (CREAR) ${JSON.stringify(req.body)}`);
});

router.delete("/:id", (req, res) => {
  const userId = parseInt(req.params.id);

  const filteredUsers = USERS.filter((user) => user.id !== userId);

  if (filteredUsers.length === USERS.length) {
    res.send("El usuario no existe");
  } else {
    USERS = filteredUsers;
    res.send(filteredUsers);
  }
});

module.exports = router;
