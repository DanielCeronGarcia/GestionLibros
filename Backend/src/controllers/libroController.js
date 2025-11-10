const Libro = require('../models/libro'); // Importamos el modelo

// 📘 GET: obtener todos los libros
const getLibros = async (req, res) => {
  try {
    const libros = await Libro.find();
    res.json(libros);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los libros', error });
  }
};

// 📗 GET: obtener un libro por ID
const getLibroById = async (req, res) => {
  try {
    const libro = await Libro.findById(req.params.id);
    if (!libro) {
      return res.status(404).json({ message: 'Libro no encontrado' });
    }
    res.json(libro);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el libro', error });
  }
};

// 📕 POST: crear un nuevo libro
const createLibro = async (req, res) => {
  try {
    const { Titulo, Autor, Año, Categoria } = req.body;

    const nuevoLibro = new Libro({
      Titulo,
      Autor,
      Año,
      Categoria
    });

    const libroGuardado = await nuevoLibro.save();
    res.status(201).json(libroGuardado);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el libro', error });
  }
};

// 📙 PUT: actualizar un libro por ID
const updateLibro = async (req, res) => {
  try {
    const { id } = req.params;
    const libroActualizado = await Libro.findByIdAndUpdate(id, req.body, { new: true });

    if (!libroActualizado) {
      return res.status(404).json({ message: 'Libro no encontrado' });
    }

    res.json(libroActualizado);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el libro', error });
  }
};

// 📒 DELETE: eliminar un libro por ID
const deleteLibro = async (req, res) => {
  try {
    const { id } = req.params;
    const libroEliminado = await Libro.findByIdAndDelete(id);

    if (!libroEliminado) {
      return res.status(404).json({ message: 'Libro no encontrado' });
    }

    res.json({ message: 'Libro eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el libro', error });
  }
};

module.exports = {
  getLibros,
  getLibroById,
  createLibro,
  updateLibro,
  deleteLibro
};
