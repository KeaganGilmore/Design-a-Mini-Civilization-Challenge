import React, { useState, useEffect } from "react";
import planets from "./data/planets";
import "./App.css";
import Spaceship from "./components/Spaceship";
import Planet from "./components/Planet";
import ChallengeModal from "./components/ChallengeModal";
import LockedModal from "./components/LockedModal";
import notebookImage from "./assets/notebook.png";

const App: React.FC = () => {
    const [currentPlanetIndex, setCurrentPlanetIndex] = useState<number>(
        parseInt(localStorage.getItem("currentPlanetIndex") || "0")
    );
    const [completedPlanets, setCompletedPlanets] = useState<number[]>(
        JSON.parse(localStorage.getItem("completedPlanets") || "[]")
    );
    const [showChallenge, setShowChallenge] = useState<boolean>(false);
    const [showCornerstone, setShowCornerstone] = useState<boolean>(false);
    const [showLockedModal, setShowLockedModal] = useState<boolean>(false);
    const [cornerstoneCompleted, setCornerstoneCompleted] = useState<boolean>(false);
    const [showPartyScreen, setShowPartyScreen] = useState<boolean>(false);

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
        if (completedPlanets.length + 1 === planets.length) {
            setShowCornerstone(true);
        }
    };

    const handleCornerstoneComplete = () => {
        setCornerstoneCompleted(true);
        setShowCornerstone(false);
        setShowPartyScreen(true);
    };

    const handleNotebookClick = () => {
        if (completedPlanets.length === planets.length && cornerstoneCompleted) {
            setShowCornerstone(true);
        } else {
            setShowLockedModal(true);
        }
    };

    const handleBackToMain = () => {
        setShowPartyScreen(false);
    };

    const allTasksCompleted = completedPlanets.length === planets.length && cornerstoneCompleted;
    const incompletePlanets = planets.filter((_, index) => !completedPlanets.includes(index)).map(planet => planet.name);

    return (
        <div className="app-container">
            <h1>Galactic Quest: A Space Adventure</h1>
            <Spaceship />
            <div className="task-status">
                {allTasksCompleted ? (
                    <span className="task-complete">✔ Task Complete</span>
                ) : (
                    <span className="task-incomplete">✘ Task Incomplete</span>
                )}
            </div>
            <div className="notebook-container" onClick={handleNotebookClick}>
                <img
                    src={notebookImage}
                    alt="Notebook"
                    className={allTasksCompleted ? "notebook-shake" : ""}
                />
            </div>
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
            {showCornerstone && (
                <ChallengeModal
                    planet={{
                        name: "Cornerstone",
                        challenge: {
                            type: "history",
                            question: "Research the Voyager Golden Record. Find something unique that was on this record and write about it and why you think it was included. Secondly also write about an object you would have stored on it and why.",
                        },
                    }}
                    onComplete={handleCornerstoneComplete}
                    onClose={() => setShowCornerstone(false)}
                />
            )}
            {showLockedModal && (
                <LockedModal
                    incompletePlanets={incompletePlanets}
                    onClose={() => setShowLockedModal(false)}
                />
            )}
            {showPartyScreen && (
                <div className="party-screen">
                    <h2>Well Done! You've completed the Cornerstone Challenge!</h2>
                    <button onClick={handleBackToMain}>Back to Main</button>
                </div>
            )}
        </div>
    );
};

export default App;