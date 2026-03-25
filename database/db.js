import mongoose from "mongoose";
import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

// Conexion a MongoDB
export const conectarMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB conectado");
  } catch (error) {
    console.error("Error MongoDB:", error);
  }
};

// Conexion MySQL
export const conectarMySQL = async () => {
  try {
    const conexion = await mysql.createConnection({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DB,
      port: process.env.MYSQL_PORT
    });

    console.log("MySQL conectado");
    return conexion;
  } catch (error) {
    console.error("Error MySQL:", error);
  }
};