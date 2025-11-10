const express = require('express');
const {
  getLibros,
  getLibroById,
  createLibro,
  updateLibro,
  deleteLibro
} = require('../controllers/libroController');

const router = express.Router();

// 📘 Obtener todos los libros
router.get('/', getLibros);

// 📗 Obtener un libro por ID
router.get('/:id', getLibroById);

// 📕 Crear un nuevo libro
router.post('/', createLibro);

// 📙 Actualizar un libro por ID
router.put('/:id', updateLibro);

// 📒 Eliminar un libro por ID
router.delete('/:id', deleteLibro);

module.exports = router;
