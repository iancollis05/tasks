import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [editing, setEditing] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);

    return (
        <div>
            <span>Edit Mode</span>
            <Form.Check
                type="switch"
                id="is-edit-switch"
                label="Edit Mode"
                checked={editing}
                onChange={(e) => {
                    setEditing(e.target.checked);
                }}
            />

            {editing ?
                <div>
                    <Form.Control
                        type="text"
                        value={userName}
                        onChange={(e) => {
                            setUserName(e.target.value);
                        }}
                    />
                    <Form.Check
                        type="checkbox"
                        id="is-student-checkbox"
                        label="student"
                        checked={student}
                        onChange={(e) => {
                            setStudent(e.target.checked);
                        }}
                    />
                </div>
            :   <span>
                    {userName} {student ? "is a student" : "is not a student"}
                </span>
            }
        </div>
    );
}
