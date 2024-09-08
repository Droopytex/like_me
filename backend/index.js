const { leerPosts, escribirPosts } = require("./funciones");
const cors = require("cors");

const express = require("express");

const app = express();
const port = 3000;

app.listen(port, () => console.log("Servidor escuhando en puerto 3000!"));

app.use(express.json()); //uso de middleword

app.use(cors()); //uso de cors

//ruta GET
app.get("/posts", async (req, res) => {
  const obtenerPost = await leerPosts();
  res.json(obtenerPost);
});

//ruta POST
app.post("/posts", async (req, res) => {
  const { titulo, url, descripcion } = req.body;
  await escribirPosts(titulo, url, descripcion);
  res.send("El post fue agregado");
});
