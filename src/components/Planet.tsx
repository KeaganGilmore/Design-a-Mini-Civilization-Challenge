import React, { useEffect, useState } from "react";
import "./Planet.css";

interface PlanetProps {
    planet: {
        name: string;
        image: string;
    };
    onClick: () => void;
    completed: boolean;
}

const Planet: React.FC<PlanetProps> = ({ planet, onClick, completed }) => {
    const [response, setResponse] = useState<string>("");

    useEffect(() => {
        const savedResponses = JSON.parse(localStorage.getItem("savedResponses") || "{}");
        if (savedResponses[planet.name]) {
            setResponse(savedResponses[planet.name].response);
        }
    }, [planet.name]);

    return (
        <div className={`planet ${completed ? "completed" : ""}`} onClick={onClick}>
            <img src={planet.image} alt={planet.name} />
            <span>{planet.name}</span>
            {response && <div className="response">Your response: {response}</div>}
        </div>
    );
};

export default Planet;