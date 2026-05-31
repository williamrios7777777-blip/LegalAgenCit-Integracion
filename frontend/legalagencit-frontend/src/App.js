import React, { useState } from 'react';
import './App.css';

/**
 * COMPONENTE FRONT-END: Gestión de Citas LegalAgenCit
 * Este componente permite visualizar el listado de citas programadas.
 * Cumple con los estándares de codificación PascalCase para componentes.
 */
function App() {
  // Estado local para almacenar las citas (Simulando datos de la base de datos)
  // Usamos el Hook useState como indica el material de formación
  const [citas] = useState([
    { id: 1, cliente: "William Rios", abogado: "Dr. Casas", fecha: "2026-05-20", estado: "Confirmada" },
    { id: 2, cliente: "Juan Perez", abogado: "Dra. Soto", fecha: "2026-05-25", estado: "Pendiente" },
    { id: 3, cliente: "Ana Maria", abogado: "Dr. Casas", fecha: "2026-06-02", estado: "Cancelada" }
  ]);

  return (
    <div className="App">
      {/* Cabecera de la aplicación */}
      <header className="header-legal">
        <h1>LegalAgenCit</h1>
        <p>Módulo de Gestión de Citas Front-End</p>
      </header>

      <main className="container">
        <h2>Mis Citas Programadas</h2>
        
        {/* Renderizado de listas usando .map() como explica el material */}
        <div className="citas-list">
          {citas.map(cita => (
            <div key={cita.id} className="cita-card">
              <h3>{cita.abogado}</h3>
              <p><strong>Cliente:</strong> {cita.cliente}</p>
              <p><strong>Fecha:</strong> {cita.fecha}</p>
              <span className={`status ${cita.estado.toLowerCase()}`}>
                {cita.estado}
              </span>
            </div>
          ))}
        </div>
        
        <button className="btn-primary" onClick={() => alert('Función para agendar nueva cita')}>
          Agendar Nueva Cita
        </button>
      </main>
    </div>
  );
}

export default App;