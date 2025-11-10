const express = require('express');
const cors = require('cors');
const libroRoutes = require('./routes/libroRoutes'); // Importamos la ruta correcta

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/libros', libroRoutes);

module.exports = app;
