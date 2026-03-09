import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [diceOne, setValueOne] = useState<number>(1);
    const [diceTwo, setValueTwo] = useState<number>(2);
    return (
        <div>
            <span data-testid="left-die">{diceOne}</span>
            <Button
                onClick={() => {
                    setValueOne(d6());
                }}
            >
                Roll Left
            </Button>
            <Button
                onClick={() => {
                    setValueTwo(d6());
                }}
            >
                Roll Right
            </Button>
            <span data-testid="right-die">{diceTwo}</span>
            {diceOne === diceTwo && diceOne === 1 && <div>Lose</div>}
            {diceOne === diceTwo && diceOne !== 1 && <div>Win</div>}
        </div>
    );
}
