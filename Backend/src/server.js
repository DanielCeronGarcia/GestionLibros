const mongoose = require("mongoose");
const app = require("./app");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("✅ Conectado a MongoDB Atlas");

    try {
      const db = mongoose.connection.db;
      console.log("📂 Base de datos usada por Mongoose:", db.databaseName);

      const cols = await db.listCollections().toArray();
      console.log("📁 Colecciones en esa DB:", cols.map((c) => c.name));

      // Intento directo a la colección 'Animes'
      try {
        const docs = await db.collection("libros").find({}).limit(5).toArray();
        console.log("📄 Documentos en 'Animes':", docs);
      } catch (err) {
        console.error("❌ Error al leer colección 'Animes':", err.message);
      }

      // Intento directo a la colección 'animes'
      try {
        const docs2 = await db.collection("libros").find({}).limit(5).toArray();
        console.log("📄 Documentos en 'animes':", docs2);
      } catch (err) {
        console.error("❌ Error al leer colección 'animes':", err.message);
      }
    } catch (err) {
      console.error("❌ Error al listar colecciones:", err.message);
    }

    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
    });
  })
  .catch((err) => console.error("❌ Error de conexión:", err.message));