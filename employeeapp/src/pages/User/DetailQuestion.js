import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailQuestion } from "../../redux/actions/questionsAction";
import { getQuestionDetailSelector } from "../../redux/selectors/questionsSelector";
import { Container, Row, Card, Toast, Button, Col } from "react-bootstrap";
import { getUserSelector } from "../../redux/selectors/authSelector";
import { toast } from "react-hot-toast";

function DetailQuestion() {
    const { question_id } = useParams();
    const dispatch = useDispatch();
    const data = useSelector(getQuestionDetailSelector);
    const user = useSelector(getUserSelector);
    console.log(data);
    console.log(user);
    useEffect(() => {
        dispatch(getDetailQuestion(question_id));
    }, [dispatch]);

    return (
        <>
            <Container fluid>
                <h1 className="text-center">Poll by {data[0]?.author}</h1>
                <img src={user.avatarURL} />
                <h3>Would you rather</h3>
                <Row>
                    <Col lg="6">
                        <Card style={{ width: "18rem" }}>
                            <Card.Body>
                                <Card.Title>
                                    {data[0]?.optionOne.text}
                                </Card.Title>
                                <Button variant="success" disabled>
                                    {user.answers[data[0]?.id] == "optionOne"
                                        ? "Is Answer"
                                        : "Click"}
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg="6">
                        <Card style={{ width: "18rem" }}>
                            <Card.Body>
                                <Card.Title>
                                    {data[0]?.optionTwo.text}
                                </Card.Title>
                                <Button variant="success" disabled>
                                    {user.answers[data[0]?.id] == "optionTwo"
                                        ? "Is Answer"
                                        : "Click"}
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default DetailQuestion;
