import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

// Swagger config (Actualizada ruta de apis)
const options = {
  definition: {
    openapi: "3.0.0",
    info: { title: "API Hospital Híbrida", version: "1.0.0" }
  },
  apis: ["./API/server.js", "./API/routes/*.js"] // Include routes if added later
};

const swaggerSpec = swaggerJsdoc(options);

export const setupSwagger = (app) => {
  app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
