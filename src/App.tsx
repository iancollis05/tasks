import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Counter } from "./components/Counter";
import { RevealAnswer } from "./components/RevealAnswer";
import { ChangeType } from "./components/ChangeType";
import { StartAttempt } from "./components/StartAttempt";
import "./App.css";
import img from "./cat.jpg";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ChooseTeam } from "./bad-components/ChooseTeam";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { CheckAnswer } from "./form-components/CheckAnswer";
import { GiveAttempts } from "./form-components/GiveAttempts";
import { EditMode } from "./form-components/EditMode";
import { ChangeColor } from "./form-components/ChangeColor";
import { MultipleChoiceQuestion } from "./form-components/MultipleChoiceQuestion";
function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript (Ian Collis)
            </header>
            <h1>Chat is this header fire</h1>

            <div>
                This is <span style={{ color: "blue" }}> colored text</span>{" "}
                (not a hyperlink.)
            </div>

            <div>
                <Container>
                    <Row>
                        <Col>
                            First column.
                            <div
                                style={{
                                    display: "flex",
                                    width: "100px",
                                    height: "50px",
                                    backgroundColor: "red",
                                    justifyContent: "center",
                                }}
                            ></div>
                            <p> </p>
                        </Col>

                        <Col>
                            Second column.
                            <div
                                style={{
                                    width: "100px",
                                    height: "50px",
                                    backgroundColor: "red",
                                }}
                            ></div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <p>Ian Collis</p>
            <img src={img} alt="How I feel being in ROTC" />

            <p>Hello World!</p>
            <p> Is this a W list</p>
            <ol>
                <li>Hello World!</li>
                <li>Hello Dr. Bart!</li>
                <li>Hello TAs!</li>
            </ol>

            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
            <hr></hr>
            <DoubleHalf></DoubleHalf>
            <hr></hr>
            <ChooseTeam></ChooseTeam>
            <hr></hr>
            <ColoredBox></ColoredBox>
            <hr></hr>
            <ShoveBox></ShoveBox>
            <hr></hr>
            <Counter></Counter>
            <hr></hr>
            <RevealAnswer></RevealAnswer>
            <hr></hr>
            <ChangeType></ChangeType>
            <hr></hr>
            <StartAttempt></StartAttempt>
            <hr></hr>
            <TwoDice></TwoDice>
            <hr></hr>
            <CycleHoliday></CycleHoliday>
            <hr></hr>
            <CheckAnswer expectedAnswer="42"></CheckAnswer>
            <hr></hr>
            <GiveAttempts></GiveAttempts>
            <hr></hr>
            <EditMode></EditMode>
            <hr></hr>
            <ChangeColor></ChangeColor>
            <hr></hr>
            <MultipleChoiceQuestion
                options={["Alpha", "Gamma", "Beta"]}
                expectedAnswer="Alpha"
            />

            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
