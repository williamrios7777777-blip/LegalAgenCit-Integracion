const express = require('express');
const cors = require('cors'); // Librería para que React pueda hablar con Node
const app = express();
const PORT = 3000;

// 1. Configuraciones (Middlewares)
app.use(cors()); // Esto evita errores de seguridad al conectar con el Frontend
app.use(express.json()); // Permite recibir datos en formato JSON

// 2. Rutas del sistema
// Aquí le decimos que para cualquier cosa de citas, use el archivo de rutas creado
app.use('/api/citas', require('./routes/cita.routes'));

// 3. Ruta de bienvenida (Opcional)
app.get('/', (req, res) => {
    res.send('Servidor de Integración LegalAgenCit funcionando');
});

// 4. Arrancar servidor
app.listen(PORT, () => {
    console.log(`Servidor Backend corriendo en http://localhost:${PORT}`);
});