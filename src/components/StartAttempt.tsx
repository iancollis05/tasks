import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, changeAttempts] = useState<number>(4);
    const [started, changeStatus] = useState<boolean>(false);
    return (
        <div>
            <Button
                onClick={() => {
                    changeStatus(true);
                    changeAttempts(attempts - 1);
                }}
                disabled={started || attempts === 0}
            >
                Start Quiz
            </Button>

            <Button
                onClick={() => {
                    changeStatus(false);
                }}
                disabled={!started}
            >
                Stop Quiz
            </Button>

            <Button
                onClick={() => {
                    changeAttempts(attempts + 1);
                }}
                disabled={started}
            >
                Mulligan
            </Button>
            <div></div>
            {"You have " + attempts + " attempts remaining."}
        </div>
    );
}
