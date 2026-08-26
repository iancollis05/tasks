import React from "react";
import "./App.css";
import zazuImage from "./thousandyardzazu.webp";
import { Button, Container, Row, Col } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Ian Collis UD CISC275 with React Hooks and TypeScript
            </header>

            <div style={{ backgroundColor: "red", padding: "10px" }}></div>

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
        </div>
    );
}

export default App;
