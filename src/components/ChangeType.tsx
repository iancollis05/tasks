import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [type, setType] = useState<QuestionType>("short_answer_question");

    function makeType(): void {
        setType(
            type === "short_answer_question" ?
                "multiple_choice_question"
            :   "short_answer_question",
        );
    }
    return (
        <div>
            The question type is:
            {type === "short_answer_question" ?
                " Short Answer"
            :   " Multiple Choice"}
            <Button onClick={makeType}>Change Type</Button>
        </div>
    );
}
