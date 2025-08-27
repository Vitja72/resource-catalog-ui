import './index.css';
import React, { useState } from 'react';
import RessourceDetail from './components/RessourceDetail.jsx';
import RessourceList from './components/RessourceList.jsx'


function App() {

  const [selectedRessourceId, setSelectedRessourceId] = useState(null);

  const handleSelectRessource = (id) => {
    setSelectedRessourceId(id);

  };

   const handleBackToList = () => {
    setSelectedRessourceId(null);
   }

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <header className="bg-main-dark py-6 shadow-xl">
        <div className="container mx-auto px-6 max-w-screen-xl flex justify-between items-center">
          <h1 className="text-4xl font-extrabold text-white tracking-tight">Ressourcen-Katalog</h1>
          <nav></nav>
        </div>
      </header>

      <main className="container mx-auto px-6 max-w-screen-xl py-8 mt-8">
      {selectedRessourceId ? (
        <RessourceDetail
        ressourceId={selectedRessourceId}
        onBack={handleBackToList}
        />
      ) : (
        <div>
        <h2>Entdecken Sie unsere Ressourcen</h2>
        <RessourceList onSelectedRessource={handleSelectRessource} />
        </div>
      )}
      </main>

    </div>
  )
}

export default App
