import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState(false);
    const [name, setName] = useState("Your Name");
    const [isStudent, setIsStudent] = useState(true);

    const initialMode = () => {
        setEditMode(!editMode);
    };

    const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleCheckBox = () => {
        setIsStudent(!isStudent);
    };

    return (
        <div>
            <Form.Check
                type="switch"
                checked={editMode}
                onChange={initialMode}
            ></Form.Check>
            <br />
            {editMode ? (
                <div>
                    <h3>Edit Mode</h3>
                    <label>
                        Name:
                        <input type="text" value={name} onChange={handleName} />
                    </label>
                    <br />
                    <label>
                        Student:
                        <label className="switch">
                            <input
                                type="checkbox"
                                checked={isStudent}
                                onChange={handleCheckBox}
                            />
                            <span className="slider"></span>
                        </label>
                    </label>
                </div>
            ) : (
                <div>
                    <h3>{`${name} is ${
                        isStudent ? "a student" : "not a student"
                    }`}</h3>
                </div>
            )}
        </div>
    );
}
