import React, { useState, useEffect } from 'react';
import RessourceCard from './RessourceCard.jsx';
import LoadingSpinner from './LoadingSpinner.jsx';
import ErrorMessage from './ErrorMassage.jsx';

const RessourceList = ({ onSelectedRessource }) => {
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
            return (
                <LoadingSpinner label="Ressourcen werden geladen..."/>
        );}

       

        if (error) {
            return (
                <ErrorMessage
                    variant="error"
                    title="Ooooops"
                    massage={"Fehler beim Laden der Ressource: ${error}"}
                    hint="Bitte prüfen, ob das Backend unter http://lacalhost:5002 läuft, oder später erneut versuchen."
                    />
            )
        }

        if ( ressources.length === 0) {
            return (
               <ErrorMessage
               variant="info"
               title="Keine Ressourcen verfügbar"
               massag="Es wurden keine Ressourcen gefunden."
               hint="Vielleicht sind keine Daten vorhanden"
               />
            )
            
        }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ressources.map((ressource) => (
                <RessourceCard key={ressource.id} 
                ressource={ressource} 
                onClick={() => onSelectedRessource(ressource.id)}
                />
            ))}

        </div>
    );
};

export default RessourceList;