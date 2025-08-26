import React, { useState, useEffect } from 'react';
import RessourceCard from './RessourceCard.jsx';

const RessourceList = () => {
    const [ressources, setRessources] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect (() => {
        const fetchRessources = async () => {
            setIsLoading(true);
            setError(null);

            try {

                
                const response = await fetch('http://localhost:5002/resources');

                if (!response.ok) {
                    throw new Error(`HTTP-Fehler! Status: ${response.status} - ${response.statusText}`);
                }

                const data = await response.json();
                setRessources(data);

            } catch (err) {
                console.error("Fehler beim Abrufen der Ressourcen: ", err);
                setError(err.message);

            } finally {
                setIsLoading(false);

            };

        };
        fetchRessources();
    }, []);

        if (isLoading) {
            return (<div className="flex justify-center items-center py-20 bg-gray-50 rounded-2xl shadow-inner-sm">
                <svg className="animate-spin h-10 w-10 text-main-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>

                </svg>
                <p className="ml-4 text-xl text-gray-700 font-medium">Ressourcen werden geladen...</p>
            </div>
        );}

       

        if (error) {
            return <div className="bg-red-50 border-l-4 border-red-400 text-red-800 p-6 rounded-r-xl relative text-center" role="alert">;
             <strong className="font-bold text-xl block mb-2">Ooooops!...</strong>
             <span className="block text-lg">Fehler beim laden der Ressourcen: {error}</span>
             <p className="text-sm mt-3 text-red-700">Bitte überprüfen Sie, ob das Backend unter `http://localhost:5002/` läuft, oder versuchen Sie es später erneut.</p>
        </div>
        }

        if ( ressources.length === 0) {
            return (
                <div className="bg-main-dark/10 border-l-4 border-accent-light text-main-dark p-6 rounded-r-xl text-center" role="alert">
                <p className="font-bold text-xl block mb-2">Keine Ressourcen verfügbar</p>
                <p className="text-lg">Es wurden keine Ressourcen vom Backend unter `http://localhost:5002/resources` gefunden. Vielleicht sind keine Daten vorhanden?</p>

                </div>
            )
            
        }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ressources.map((ressource) => (
                <RessourceCard key={ressource.id} ressource={ressource} />
            ))}

        </div>
    );
};

export default RessourceList;