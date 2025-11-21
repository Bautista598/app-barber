import express from "express";
import cors from "cors";
import { MongoClient, ServerApiVersion } from "mongodb";

import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

const app = express();
app.use(cors());
app.use(express.json());

const mongoPass = process.env.MONGO_PASS;
console.log("PASS:", mongoPass);

const uri = `mongodb+srv://senrei598_db_user:${mongoPass}@barber-app-db.s1gmbxf.mongodb.net/?appName=barber-app-db`;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function connectDB() {
    try {
        await client.connect();
        console.log("🔥 Conectado a MongoDB");

       
    } catch (err) {
        console.error("❌ Error de conexión:", err);
    }
}

let db;

connectDB().then(database => {
    db = database;
});

// ✔ Ruta de prueba
app.get("/api/test", async (req, res) => {
    try {
        const result = await db.collection("test").find().toArray();
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: "Error al consultar MongoDB" });
    }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Servidor corriendo en puerto ${PORT}`));