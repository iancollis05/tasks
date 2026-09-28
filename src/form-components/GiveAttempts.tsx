import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [reqAttempts, setReqAttempts] = useState<string>("");
    return (
        <div>
            <span>Give Attempts</span>
            <Form.Group controlId="formReqAttemtps">
                <Form.Label>Request Additional Attempts </Form.Label>
                <Form.Control
                    type="number"
                    value={reqAttempts}
                    onChange={(e) => {
                        setReqAttempts(e.target.value);
                    }}
                />
            </Form.Group>
            <span> You have {attempts} attempts left!</span>
            <Button
                onClick={() => {
                    setAttempts(attempts - 1);
                }}
                disabled={attempts === 0}
            >
                use
            </Button>
            <Button
                onClick={() => {
                    setAttempts((parseInt(reqAttempts) || 0) + attempts);
                }}
            >
                gain
            </Button>
        </div>
    );
}
