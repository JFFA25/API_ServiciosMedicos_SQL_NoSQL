import express from "express";
import dotenv from "dotenv";
import { setupSwagger } from "./swagger.js";
import { conectarMongo, conectarMySQL } from "./db.js"; 
import poblacionRoutes from './routes/poblacion.routes.js';

dotenv.config();
const app = express();
app.use(express.json());

// Conexiones
conectarMongo();
conectarMySQL();

// Rutas
app.use("/", poblacionRoutes); // Usas las rutas

setupSwagger(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor híbrido corriendo en puerto ${PORT}`);
});