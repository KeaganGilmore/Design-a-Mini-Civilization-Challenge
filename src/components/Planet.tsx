import React from "react";
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
    return (
        <div className={`planet ${completed ? "completed" : ""}`} onClick={onClick}>
            <img src={planet.image} alt={planet.name} />
            <span>{planet.name}</span>
            {completed && <div className="checkmark">✓</div>}
        </div>
    );
};

export default Planet;
