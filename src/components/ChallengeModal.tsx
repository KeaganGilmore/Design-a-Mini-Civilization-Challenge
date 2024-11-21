import React, { useState, useEffect } from "react";
import "./ChallengeModal.css";

interface ChallengeModalProps {
    planet: {
        name: string;
        challenge: {
            type: string;
            question?: string;
            answers?: string[];
            prompt?: string;
        };
    };
    onComplete: () => void;
    onClose: () => void;
}

const ChallengeModal: React.FC<ChallengeModalProps> = ({ planet, onComplete, onClose }) => {
    const [response, setResponse] = useState<string>("");
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

    useEffect(() => {
        const savedResponses = JSON.parse(localStorage.getItem("savedResponses") || "{}");
        if (savedResponses[planet.name]) {
            setResponse(savedResponses[planet.name].response);
        }
    }, [planet.name]);

    const handleSubmit = () => {
        if (planet.challenge.answers) {
            const correct = planet.challenge.answers.some(answer =>
                answer.toLowerCase() === response.toLowerCase().trim()
            );
            setIsCorrect(correct);
            saveResponse(correct);
            if (correct) {
                onComplete();
            }
        } else {
            saveResponse(false);
            onComplete();
        }
    };

    const saveResponse = (correct: boolean) => {
        const savedResponses = JSON.parse(localStorage.getItem("savedResponses") || "{}");
        savedResponses[planet.name] = { response, isCorrect: correct };
        localStorage.setItem("savedResponses", JSON.stringify(savedResponses));
    };

    return (
        <div className="challenge-modal">
            <div className="modal-content">
                <h2>{planet.name} Challenge</h2>
                <p>{planet.challenge.question || planet.challenge.prompt}</p>
                {planet.challenge.type === "language" ? (
                    <textarea
                        value={response}
                        onChange={(e) => setResponse(e.target.value)}
                    />
                ) : (
                    <input
                        type="text"
                        value={response}
                        onChange={(e) => setResponse(e.target.value)}
                    />
                )}
                <div className="modal-buttons">
                    <button onClick={handleSubmit}>Submit</button>
                    <button onClick={onClose}>Close</button>
                </div>
                {isCorrect === false && <p>Incorrect, please try again.</p>}
            </div>
        </div>
    );
};

export default ChallengeModal;