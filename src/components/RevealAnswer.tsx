import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [show, showAnswer] = useState<boolean>(false);
    return (
        <div>
            <Button
                onClick={() => {
                    showAnswer(!show);
                }}
            >
                Reveal Answer
            </Button>
            {show && <div>42</div>}
        </div>
    );
}
