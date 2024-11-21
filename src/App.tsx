import React, { useState, useEffect } from "react";
import planets from "./data/planets";
import "./App.css";
import Spaceship from "./components/Spaceship";
import Planet from "./components/Planet";
import ChallengeModal from "./components/ChallengeModal";

const App: React.FC = () => {
    const [currentPlanetIndex, setCurrentPlanetIndex] = useState<number>(
        parseInt(localStorage.getItem("currentPlanetIndex") || "0")
    );
    const [completedPlanets, setCompletedPlanets] = useState<number[]>(
        JSON.parse(localStorage.getItem("completedPlanets") || "[]")
    );
    const [showChallenge, setShowChallenge] = useState<boolean>(false);

    useEffect(() => {
        localStorage.setItem("currentPlanetIndex", currentPlanetIndex.toString());
        localStorage.setItem("completedPlanets", JSON.stringify(completedPlanets));
    }, [currentPlanetIndex, completedPlanets]);

    const handlePlanetClick = (index: number) => {
        setCurrentPlanetIndex(index);
        setShowChallenge(true);
    };

    const handleChallengeComplete = () => {
        setCompletedPlanets([...completedPlanets, currentPlanetIndex]);
        setShowChallenge(false);
    };

    return (
        <div className="app-container">
            <h1>Galactic Quest: A Space Adventure</h1>
            <Spaceship />
            <div className="planets-container">
                {planets.map((planet, index) => (
                    <Planet
                        key={planet.name}
                        planet={planet}
                        onClick={() => handlePlanetClick(index)}
                        completed={completedPlanets.includes(index)}
                    />
                ))}
            </div>
            {showChallenge && (
                <ChallengeModal
                    planet={planets[currentPlanetIndex]}
                    onComplete={handleChallengeComplete}
                    onClose={() => setShowChallenge(false)}
                />
            )}
        </div>
    );
};

export default App;