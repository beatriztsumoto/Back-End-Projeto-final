import express from "express";
import dotenv from "dotenv";
import lojasRoutes from "./src/routes/lojasRoutes.js";
import cuponsRoutes from "./src/routes/cuponsRoutes.js";
import descontosRoutes from "./src/routes/descontosRoutes.js";

const app = express();
app.use(express.json());

dotenv.config();
const serverPort = process.env.PORT || 3001;

app.get("/", (req, res) => {
    res.send("🚀 Servidor funcionando...");
});

app.use("/lojas", lojasRoutes);
app.use("/cupons", cuponsRoutes);
app.use("/descontos", descontosRoutes);

app.listen(serverPort, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${serverPort} 🚀`);
});