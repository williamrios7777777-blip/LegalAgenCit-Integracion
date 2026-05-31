const db = require('../database'); // Llama a la conexión

const citaCtrl = {};

// Función para obtener las citas de la base de datos
citaCtrl.getAppCitas = (req, res) => {
    db.query('SELECT * FROM citas', (err, rows) => {
        if (err) return res.status(500).send('Error en la base de datos');
        res.json(rows);
    });
};

module.exports = citaCtrl;