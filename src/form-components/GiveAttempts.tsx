import React, { useState } from "react";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState(3);
    const [requestedAttempts, setRequestedAttempts] = useState("");

    const handleAttempts = () => {
        if (attemptsLeft > 0) {
            setAttemptsLeft(attemptsLeft - 1);
        }
    };

    const handleGain = () => {
        const parseAttempts = parseInt(requestedAttempts);
        if (!isNaN(parseAttempts)) {
            setAttemptsLeft(attemptsLeft + parseAttempts);
            setRequestedAttempts("");
        }
    };
    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRequestedAttempts(event.target.value);
    };

    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts Left: {attemptsLeft}</p>
            <input
                type="number"
                value={requestedAttempts}
                onChange={handleInput}
            />
            <button onClick={handleAttempts} disabled={attemptsLeft === 0}>
                use
            </button>
            <button onClick={handleGain}>Gain</button>
        </div>
    );
}
