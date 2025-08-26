import './App.css'
import RessourceList from './components/RessourceList.jsx'

function App() {

  
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <header className="bg-main-dark py-6 shadow-xl">
        <div className="container mx-auto px-6 max-w-screen-xl flex justify-between items-center">
          <h1 className="text-4xl font-extrabold text-white tracking-tight">Ressourcen-Katalog</h1>
          <nav></nav>
        </div>
      </header>

      <main className="container mx-auto px-6 max-w-screen-xl py-8 mt-8">
        <h2 className="text-3xl font-bold mb-10 text-gray-800"> Entdecken Sie unsere Ressourcen</h2>
        <RessourceList />
      </main>

    </div>
  )
}

export default App
