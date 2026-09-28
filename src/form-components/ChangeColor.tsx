import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "red",
    "blue",
    "green",
    "yellow",
    "orange",
    "purple",
    "cyan",
    "magenta",
];

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>(COLORS[0]);

    return (
        <div>
            <span>Change Color</span>
            {COLORS.map((c) => (
                <Form.Check
                    inline
                    key={c}
                    type="radio"
                    name="colors"
                    id={`color-${c}`}
                    label={c}
                    value={c}
                    checked={color === c}
                    onChange={(e) => {
                        setColor(e.target.value);
                    }}
                />
            ))}
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: color,
                    color: "white",
                    padding: "10px",
                    marginTop: "10px",
                }}
            >
                {color}
            </div>
        </div>
    );
}
