import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "cyan",
    "magenta",
    "white",
];

export function ChangeColor(): React.JSX.Element {
    const [selectedColor, setSelectedColor] = useState<string>(COLORS[0]);

    return (
        <div>
            <div className="h3">Change Color</div>
            <div>
                {COLORS.map((color: string) => (
                    <Form.Check
                        key={color}
                        inline
                        type="radio"
                        name="colors"
                        onChange={(e) => {
                            setSelectedColor(e.target.value);
                        }}
                        id={`color-check-${color}`}
                        label={
                            <span style={{ backgroundColor: color }}>
                                {color}
                            </span>
                        }
                        value={color}
                        checked={selectedColor === color}
                    />
                ))}
            </div>
            <div>
                You have chosen{" "}
                <span
                    data-testid="colored-box"
                    style={{
                        backgroundColor: selectedColor,
                        display: "inline-block",
                        width: "50px",
                        height: "20px",
                        marginLeft: "5px",
                        verticalAlign: "middle",
                    }}
                >
                    {selectedColor}
                </span>
                .
            </div>
        </div>
    );
}
