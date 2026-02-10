import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "./App.css";
import img from "./cat.jpg";
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

            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
