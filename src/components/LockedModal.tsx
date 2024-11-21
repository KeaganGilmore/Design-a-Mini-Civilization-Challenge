import React from "react";
import "./LockedModal.css";

interface LockedModalProps {
    incompletePlanets: string[];
    onClose: () => void;
}

const LockedModal: React.FC<LockedModalProps> = ({ incompletePlanets, onClose }) => {
    return (
        <div className="locked-modal">
            <div className="modal-content">
                <h2>Complete the following planets to unlock:</h2>
                <ul>
                    {incompletePlanets.map((planet, index) => (
                        <li key={index}>{planet}</li>
                    ))}
                </ul>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default LockedModal;