import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [selected, setSelected] = useState<string>(options[0]);

    return (
        <div>
            <div className="h3">Multiple Choice Questions</div>
            <Form.Group controlId="multipleChoice">
                <Form.Label>Pick an answer:</Form.Label>
                <Form.Select
                    value={selected}
                    onChange={(e) => {
                        setSelected(e.target.value);
                    }}
                >
                    {options.map((option: string) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <div>{selected === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
