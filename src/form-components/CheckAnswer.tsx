import React, { useState } from "react";
import { Form } from "react-bootstrap";

interface answerCheck {
    expectedAnswer: string;
}

export function CheckAnswer({
    expectedAnswer,
}: answerCheck): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    function updateChange(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }
    return (
        <div>
            <span>Check Answer</span>
            <Form.Group controlId="formCheckAnswer">
                <Form.Label>Check your answer: </Form.Label>
                <Form.Control value={answer} onChange={updateChange} />
            </Form.Group>
            <div>{answer === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
