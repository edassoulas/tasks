import React, { useState } from "react";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [selected, setSelected] = useState<string>(options[0]);
    //const [result, setResult] = useState<string | null>(null);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelected(event.target.value);
        //setResult(null); //to reset result when user chooses new option
    };
    /*const handleAnswer = () => {
        setResult(selected === expectedAnswer ? "✔️" : "❌");
    };*/

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <select value={selected} onChange={handleChange}>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <>{selected === expectedAnswer ? "✔️" : "❌"}</>
        </div>
    );
}
