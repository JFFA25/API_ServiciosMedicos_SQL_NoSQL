import express from "express";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

import { conectarMongo, pool } from "../database/db.js";

dotenv.config();

const app = express();
app.use(express.json());

// Conectar Mongo
conectarMongo();

// Conectar MySQL
(async () => {
  try {
    const [rows] = await pool.query("SELECT 1");
    console.log("MySQL conectado");
  } catch (error) {
    console.error("Error MySQL:", error);
  }
})();


// Swagger config
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Servicios Médicos",
      version: "1.0.0",
      description: "API con MongoDB + MySQL"
    }
  },
  apis: ["./API/app.js"] // aquí mismo definiremos endpoints
};

const swaggerSpec = swaggerJsdoc(options);

// Ruta Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));


// ENDPOINT MYSQL
/**
 * @swagger
 * /pacientes:
 *   get:
 *     summary: Obtener pacientes (MySQL)
 */
app.get("/pacientes", async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM tbb_pacientes");
  res.json(rows);
});


// ENDPOINT MONGO
import mongoose from "mongoose";

const Usuario = mongoose.model("Usuario", {
  nombre: String,
  correo: String
});

/**
 * @swagger
 * /usuarios:
 *   get:
 *     summary: Obtener usuarios (MongoDB)
 */
app.get("/usuarios", async (req, res) => {
  const usuarios = await Usuario.find();
  res.json(usuarios);
});


// Servidor
app.listen(process.env.PORT || 3000, () => {
  console.log("Servidor corriendo");
});