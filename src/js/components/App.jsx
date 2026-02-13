import React, { useState } from 'react';
// Antes: import Navbar from './components/Navbar';
import Navbar from './Navbar'; 
import Header from './Header';
import Card from './Card';

function App() {
  // 1. Datos originales de las tarjetas
  const initialCards = [
    { id: 1, title: "Desarrollo Web", text: "Creación de sitios modernos con React y Bootstrap." },
    { id: 2, title: "Diseño UI/UX", text: "Interfaces intuitivas centradas en el usuario final." },
    { id: 3, title: "Marketing Digital", text: "Estrategias para posicionar tu marca en el mercado." },
    { id: 4, title: "Consultoría IT", text: "Asesoramiento técnico para optimizar procesos." },
  ];

  // 2. Estados: uno para el texto del buscador y otro para los datos
  const [searchTerm, setSearchTerm] = useState("");

  // 3. Lógica de filtrado
  const filteredCards = initialCards.filter(card =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    card.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <Navbar />
      <Header />

      {/* Sección del Buscador */}
      <div className="container px-lg-5 mt-4">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <input 
              type="text" 
              className="form-control form-control-lg shadow-sm" 
              placeholder="Buscar servicios (ej: Web, Diseño...)" 
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <p className="text-muted mt-2 ps-2">
              {filteredCards.length} resultados encontrados
            </p>
          </div>
        </div>
      </div>

      {/* Sección de Tarjetas */}
      <section className="pt-4">
        <div className="container px-lg-5">
          <div className="row">
            {filteredCards.length > 0 ? (
              filteredCards.map(card => (
                <Card key={card.id} title={card.title} text={card.text} />
              ))
            ) : (
              <div className="col-12 text-center py-5">
                <h3 className="text-muted">No se encontraron resultados para "{searchTerm}"</h3>
              </div>
            )}
          </div>
        </div>
      </section>

      <footer className="py-5 bg-dark mt-auto">
        <div className="container">
          <p className="m-0 text-center text-white">Copyright &copy; Tu Sitio 2026</p>
        </div>
      </footer>
    </div>
  );
}

export default App;