import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);

    function startQuiz(): void {
        setProgress(true);
        setAttempts(attempts - 1);
    }
    function stopQuiz(): void {
        setProgress(!progress);
    }
    function addMulligan(): void {
        setAttempts(attempts + 1);
    }

    return (
        <div>
            You have {attempts} attempts left!
            <Button onClick={startQuiz} disabled={progress || attempts === 0}>
                Start Quiz
            </Button>
            <Button onClick={stopQuiz} disabled={!progress}>
                Stop Quiz
            </Button>
            <Button onClick={addMulligan} disabled={progress}>
                Mulligan
            </Button>
        </div>
    );
}
