import pool from '../config/db.js';

// Obtener todos los usuarios
export const listarUsuarios = async (req, res) => {

  try {

    const [rows] = await pool.query('SELECT * FROM usuarios');

    res.json(rows);

  } catch (error) {

    res.status(500).json({ error: error.message });

  }
};

// Obtener un usuario por ID
export const obtenerUsuario = async (req, res) => {
    console.log("¡Entró a la función obtenerUsuario!");
  try {
    
    const { id } = req.params;

    const [rows] = await pool.query(

      'SELECT * FROM usuarios WHERE id = ?',

      [id]

    );

    if (rows.length === 0) {

      return res.status(404).json({ error: 'Usuario no encontrado' });

    }

    res.json(rows[0]);

  } catch (error) {

    res.status(500).json({ error: error.message });

  }
};

// Crear nuevo usuario
export const crearUsuario = async (req, res) => {
  // Por implementar
};

// Actualizar usuario
export const actualizarUsuario = async (req, res) => {
  // Por implementar
};

// Eliminar usuario
export const eliminarUsuario = async (req, res) => {
  // Por implementar

  
};