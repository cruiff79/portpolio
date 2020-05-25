import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import projectImage from '../image/main.png';
import reactMovie from '../image/react-movie.png';
import { Container, Row, Col } from 'reactstrap';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

class Project extends React.Component {
    render() {
        return (
            <div className="App-project" id="project">
                <h1>Project</h1>
                <div className="project-card">
                    <Card>
                        <Container>
                            <Row>
                                <Col sm={3}><a href="https://github.com/cruiff79/spring_library_project"><CardImg top width="100%" height="100%" src={projectImage} alt="Library" /></a></Col>
                                <Col sm={9}>
                                    <CardBody>
                                        <CardTitle><a href="https://github.com/cruiff79/spring_library_project"><h3>Library System</h3></a></CardTitle>
                                        <CardSubtitle>This project is to manage library such as list books, search books and rental books with sign-in.</CardSubtitle>
                                        <CardText>Java + JSP + HTML5 + CSS + javascript + Spring + mybatis + Oracle + tomcat</CardText>
                                    </CardBody>
                                </Col>
                            </Row>
                        </Container>
                    </Card>
                </div>
                <div className="project-card">
                    <Card>
                        <Container>
                            <Row>
                                <Col sm={3}><a href="https://github.com/cruiff79/React-Movie"><CardImg top width="100%" height="100%" src={reactMovie} alt="Movie" /></a></Col>
                                <Col sm={9}>
                                    <CardBody>
                                        <CardTitle><a href="https://github.com/cruiff79/React-Movie"><h3>Movie Information</h3></a></CardTitle>
                                        <CardSubtitle>This project is to show movie information from movie API.</CardSubtitle>
                                        <CardText>React + Node.js + Express + HTML5 + CSS + Bootstrap + json + mysql</CardText>
                                    </CardBody>
                                </Col>
                            </Row>
                        </Container>
                    </Card>
                </div>
            </div>
        );
    }
}

export default Project;