require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");
const investmentRoutes = require("./routes/investmentRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json()); // Para lidar com JSON no corpo da requisição

// Configuração do Swagger
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0", // Versão do OpenAPI
    info: {
      title: "API de Investimentos",
      version: "1.0.0",
      description: "Documentação da API de Investimentos",
      contact: {
        name: "Seu Nome",
        email: "seu.email@example.com",
      },
      servers: ["http://localhost:5000"], // URL base da API
    },
  },
  apis: ["./src/routes/*.js"], // Caminho para os arquivos de rotas
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

// Conectar ao MongoDB
mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("MongoDB conectado!"))
  .catch((error) => console.error("Erro ao conectar ao MongoDB:", error));

// Usar as rotas
app.use("/api", investmentRoutes);

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log(`Documentação Swagger disponível em http://localhost:${PORT}/api-docs`);
});