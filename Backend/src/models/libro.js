const mongoose = require('mongoose');

const libroSchema = new mongoose.Schema({
  Titulo: {
    type: String,
    required: true,
    trim: true
  },
  Autor: {
    type: String,
    required: true,
    trim: true
  },
  Año: {
    type: Number,
    required: true
  },
  Categoria: {
    type: String,
    required: true,
    trim: true
  }
});

// Exportamos el modelo con un nombre descriptivo
module.exports = mongoose.model('Libro', libroSchema);
