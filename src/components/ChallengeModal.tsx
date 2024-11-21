import React, { useState } from "react";
import "./ChallengeModal.css";

interface ChallengeModalProps {
    planet: {
        name: string;
        challenge: {
            type: string;
            question?: string;
            prompt?: string;
            answer?: string;
        };
    };
    onComplete: () => void;
    onClose: () => void;
}

const ChallengeModal: React.FC<ChallengeModalProps> = ({ planet, onComplete, onClose }) => {
    const [input, setInput] = useState("");

    const handleSubmit = () => {
        if (planet.challenge.type === "language") {
            if (input.trim().split(" ").length >= 50) {
                alert("Great entry! You've completed this challenge.");
                onComplete();
            } else {
                alert("Please write at least 50 words.");
            }
        } else {
            if (input.trim().toLowerCase() === planet.challenge.answer?.toLowerCase()) {
                alert("Correct! You've completed this challenge.");
                onComplete();
            } else {
                alert("Incorrect. Try again!");
            }
        }
    };

    return (
        <div className="challenge-modal">
            <div className="modal-content">
                <h2>{planet.name} Challenge</h2>
                <p>{planet.challenge.question || planet.challenge.prompt}</p>
                {planet.challenge.type === "language" ? (
                    <textarea
                        placeholder="Your Mission Log..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                ) : (
                    <input
                        type="text"
                        placeholder="Your Answer..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                )}
                <div className="modal-buttons">
                    <button onClick={handleSubmit}>Submit</button>
                    <button onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    );
};

export default ChallengeModal;
