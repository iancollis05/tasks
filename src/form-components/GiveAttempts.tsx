import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<string>("");

    const addedAttempts = parseInt(requestedAttempts) || 0;

    return (
        <div>
            <div className="h3">Give Attempts</div>
            <span> Attempts Left: {attempts}</span>

            <Form.Group controlId="formGiveAttempts">
                <Form.Label>Request More Attemtps:</Form.Label>
                <Form.Control
                    type="number"
                    value={requestedAttempts}
                    onChange={(e) => {
                        setRequestedAttempts(e.target.value);
                    }}
                />
            </Form.Group>

            <Button
                onClick={() => {
                    setAttempts(attempts - 1);
                }}
                disabled={attempts <= 0}
            >
                use
            </Button>

            <Button
                onClick={() => {
                    setAttempts(attempts + addedAttempts);
                }}
            >
                gain
            </Button>
        </div>
    );
}
