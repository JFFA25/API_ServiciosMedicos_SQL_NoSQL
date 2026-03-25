import express from "express";
import { conectarMongo, conectarMySQL } from "../database/db.js";

const app = express();

// Conectar ambas DB
conectarMongo();

app.listen(3000, () => {
  console.log("Servidor corriendo en puerto 3000");
});