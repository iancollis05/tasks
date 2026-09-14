import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday =
    | "Christmas"
    | "Easter"
    | "Halloween"
    | "Saint_Patricks"
    | "Valentines";

const SEQUENTIAL_HOLIDAY: Record<Holiday, Holiday> = {
    Valentines: "Saint_Patricks",
    Saint_Patricks: "Easter",
    Easter: "Halloween",
    Halloween: "Christmas",
    Christmas: "Valentines",
};
const ALPHABETICAL_HOLIDAY: Record<Holiday, Holiday> = {
    Christmas: "Easter",
    Easter: "Halloween",
    Halloween: "Saint_Patricks",
    Saint_Patricks: "Valentines",
    Valentines: "Christmas",
};
const HOLIDAY_EMOJIS: Record<Holiday, string> = {
    Christmas: "🎄",
    Easter: "🐣",
    Halloween: "🎃",
    Saint_Patricks: "☘️",
    Valentines: "💘",
};

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("Christmas");

    return (
        <div>
            <Button
                onClick={() => {
                    setHoliday(ALPHABETICAL_HOLIDAY[holiday]);
                }}
            >
                Next by Alphabet: {ALPHABETICAL_HOLIDAY[holiday]}
            </Button>
            <div></div> Holiday: {HOLIDAY_EMOJIS[holiday]}
            <div></div>
            <Button
                onClick={() => {
                    setHoliday(SEQUENTIAL_HOLIDAY[holiday]);
                }}
            >
                Next by Year: {SEQUENTIAL_HOLIDAY[holiday]}
            </Button>
        </div>
    );
}
