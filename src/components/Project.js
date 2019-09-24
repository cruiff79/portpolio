import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
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
                                <Col sm={3}><CardImg top width="100%" src="https://picsum.photos/id/1/500" alt="Card image cap" /></Col>
                                <Col sm={9}>
                                    <CardBody>
                                        <CardTitle>NotePad</CardTitle>
                                        <CardSubtitle>NotePad for Android</CardSubtitle>
                                        <CardText>Android + Firebase</CardText>
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
                                <Col sm={3}><CardImg top width="100%" src="https://picsum.photos/id/30/500" alt="Card image cap" /></Col>
                                <Col sm={9}>
                                    <CardBody>
                                        <CardTitle>NotePad</CardTitle>
                                        <CardSubtitle>NotePad for Android</CardSubtitle>
                                        <CardText>Android + Firebase</CardText>
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
                                <Col sm={3}><CardImg top width="100%" src="https://picsum.photos/id/100/500" alt="Card image cap" /></Col>
                                <Col sm={9}>
                                    <CardBody>
                                        <CardTitle>NotePad</CardTitle>
                                        <CardSubtitle>NotePad for Android</CardSubtitle>
                                        <CardText>Android + Firebase</CardText>
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