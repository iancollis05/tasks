import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday =
    | "Christmas"
    | "Halloween"
    | "New Year"
    | "St Patrick"
    | "Valentine";

const NEXT_ALPHABETICAL: Record<Holiday, Holiday> = {
    Christmas: "Halloween",
    Halloween: "New Year",
    "New Year": "St Patrick",
    "St Patrick": "Valentine",
    Valentine: "Christmas",
};

const NEXT_YEAR: Record<Holiday, Holiday> = {
    "New Year": "Valentine",
    Valentine: "St Patrick",
    "St Patrick": "Halloween",
    Halloween: "Christmas",
    Christmas: "New Year",
};

const EMOJIS: Record<Holiday, string> = {
    Christmas: "🎄",
    Halloween: "🎃",
    "New Year": "🎆",
    "St Patrick": "🍀",
    Valentine: "💘",
};

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("Christmas");

    return (
        <div>
            <div>Holiday: {EMOJIS[holiday]}</div>
            <Button
                onClick={() => {
                    setHoliday(NEXT_ALPHABETICAL[holiday]);
                }}
            >
                Next Alphabetical Holiday
            </Button>

            <Button
                onClick={() => {
                    setHoliday(NEXT_YEAR[holiday]);
                }}
            >
                Advance by Year
            </Button>
        </div>
    );
}
