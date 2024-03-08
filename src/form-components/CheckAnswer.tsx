import React, { useState } from "react";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [userInput, setUserInput] = useState<string>("");

    const makeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserInput(event.target.value);
    };
    return (
        <div>
            <h3>Check Answer</h3>
            <input type="text" value={userInput} onChange={makeChange} />
            {userInput === expectedAnswer ? <span>✔️</span> : <span>❌</span>}
        </div>
    );
}
