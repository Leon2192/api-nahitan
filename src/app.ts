import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import projectRoutes from "./routes/project.routes";
import cors from "cors";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "https://44.216.124.74/",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);

app.use(express.json());
app.use(projectRoutes);

mongoose
  .connect(process.env.DB_URI || "")
  .then(() => console.log("Conectado a la base de datos"))
  .catch((err) => console.error("Error al conectar a la base de datos:", err));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
