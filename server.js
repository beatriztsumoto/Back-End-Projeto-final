import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import lojasRoutes from "./src/routes/lojasRoutes.js";
import cuponsRoutes from "./src/routes/cuponsRoutes.js";
import descontosRoutes from "./src/routes/descontosRoutes.js";
import categoriasRoutes from "./src/routes/categoriasRoutes.js";

dotenv.config();
const serverPort = process.env.PORT || 3001;

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("🚀 Servidor funcionando...");
});

app.use("/lojas", lojasRoutes);
app.use("/cupons", cuponsRoutes);
app.use("/descontos", descontosRoutes);
app.use("/categorias", categoriasRoutes);

app.listen(serverPort, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${serverPort} 🚀`);
});