const express = require('express');
const router = express.Router();
const citaCtrl = require('../controllers/cita.controller');

// Cuando el usuario entre a /api/citas, se ejecuta la función del controlador
router.get('/', citaCtrl.getAppCitas);

module.exports = router;