import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setIsEditing(event.target.checked);
    }

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }

    return (
        <div>
            <div className="h3">Edit Mode</div>

            <Form.Check
                type="switch"
                id="is-editing-switch"
                label="Edit Mode"
                checked={isEditing}
                onChange={updateEditMode}
            />

            <div>
                {isEditing ?
                    <>
                        <Form.Group controlId="formUserName">
                            <Form.Label>Name:</Form.Label>
                            <Form.Control value={name} onChange={updateName} />
                        </Form.Group>
                        <Form.Check
                            type="checkbox"
                            id="is-student-check"
                            label="Is Student?"
                            checked={isStudent}
                            onChange={updateStudent}
                        />
                    </>
                :   <span>
                        {name} is {isStudent ? "a student" : "not a student"}.
                    </span>
                }
            </div>
        </div>
    );
}
