import React from "react";
import spaceshipImage from "../assets/spaceship.png";
import "./Spaceship.css";

const Spaceship: React.FC = () => {
    return (
        <div className="spaceship-container">
            <img src={spaceshipImage} alt="Spaceship" />
        </div>
    );
};

export default Spaceship;