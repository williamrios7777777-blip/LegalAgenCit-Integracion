const mysql = require('mysql2');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // Vacío por defecto en XAMPP
    database: 'legalagencit'
});

mysqlConnection.connect(function (err) {
    if (err) {
        console.error('Error conectando a la DB:', err);
        return;
    }
    console.log('¡Base de datos LegalAgenCit Conectada!');
});

module.exports = mysqlConnection;