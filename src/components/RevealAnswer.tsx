import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [reveal, setReveal] = useState<boolean>(false);

    function setVisibility(): void {
        setReveal(!reveal);
    }

    return (
        <div>
            <Button onClick={setVisibility}>Reveal Answer</Button>
            {reveal && <div>42</div>}
        </div>
    );
}
