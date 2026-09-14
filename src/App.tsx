import React from "react";
import "./App.css";
import zazuImage from "./thousandyardzazu.webp";
import { Button, Container, Row, Col } from "react-bootstrap";
import { ChangeType } from "./components/ChangeType";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Ian Collis UD CISC275 with React Hooks and TypeScript
            </header>

            {/* <div style={{ backgroundColor: "red", padding: "10px" }}></div> */}

            <h1>I still like this image</h1>
            <img
                src={zazuImage}
                alt="cool cat"
                style={{ width: "250px", height: "auto" }}
            />
            <div>
                cat list
                <ul>
                    <li>cat 1</li>
                    <li>cat 2</li>
                    <li>cat 3</li>
                </ul>
            </div>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "100px",
                                height: "100px",
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "100px",
                                height: "100px",
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>

            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World!
            </p>
            <hr></hr>
            {/* <DoubleHalf></DoubleHalf> */}
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
        </div>
    );
}

export default App;
