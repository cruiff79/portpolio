import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'reactstrap';

class About extends React.Component {
    render() {
        return (
            <div className="App-about" id="about">
                <Container>
                    <Row>
                        <Col sm={3}><h1>About Me</h1></Col>
                        <Col sm={9}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default About;