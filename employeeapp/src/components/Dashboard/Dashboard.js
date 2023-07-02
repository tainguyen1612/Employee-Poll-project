import React from "react";
import { useDispatch } from "react-redux";
import { getDetailQuestion } from "../../redux/actions/questionsAction";
import { Card, Button, Col, Container, Row } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";

function Dashboard(props) {
    const { doingList, doneList } = props;
    const dispatch = useDispatch();
    const navigate = useDispatch();

    return (
        <>
            <Container fluid>
                <Row>
                    <h1 className="text-center">New Question</h1>
                    {doingList?.map((el, i) => {
                        return (
                            <Col lg="2" key={i}>
                                <Card style={{ width: "18rem" }}>
                                    <Card.Body>
                                        <Card.Title>{el.author}</Card.Title>
                                        <Card.Text>
                                            {new Date(
                                                el.timestamp
                                            ).toLocaleString()}
                                        </Card.Text>
                                        <Link
                                            className="w-100 text-decoration-none "
                                            variant="success"
                                        >
                                            Show
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
                <hr />
                <Row>
                    <h1 className="text-center">Done</h1>
                    {doneList?.map((el, i) => {
                        return (
                            <Col lg="2" key={i}>
                                <Card style={{ width: "18rem" }}>
                                    <Card.Body>
                                        <Card.Title>{el.author}</Card.Title>
                                        <Card.Text>
                                            {new Date(
                                                el.timestamp
                                            ).toLocaleString()}
                                        </Card.Text>
                                        <Link
                                            className="w-100 text-decoration-none "
                                            variant="success"
                                            to={"/questions/" + el.id}
                                        >
                                            Show
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </>
    );
}

export default Dashboard;
