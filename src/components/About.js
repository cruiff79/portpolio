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
                        <Col sm={9}>
                            <li>Over 3 years of experience as a web developer.</li>
                            <li>Familiar with Java and Spring Framework as a full stack developer.</li>
                            <li>Graduated from Business Information Technology at Red River College in Canada.</li>
                            <li>Learned and studied C#, ASP .NET, PHP, React JS, Node JS.</li>
                            <li>Love learning new IT skills and doing self-study.</li>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default About;
