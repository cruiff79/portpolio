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
                        <Col sm={9}>I have some experience as a Java web developer, and to further develop my skills, I studied programming at Red River College. Over 4 years of experience as a team member in IT field, I am familiar with the need to integrate with a company’s workplace culture. I also have experience in collaborating with project teams in order to achieve specific goals and to improve communication among colleagues. I am familiar with Java programming as a full stack developer using Java, Spring Framework, HTML, JavaScript, JSP, SQL, PL-SQL and Oracle database. In work field, I used MVC design pattern to create and maintain project such as Spring Framework with JSP, Java and Oracle database. In addition, I learned C#, ASP .NET Framework and PHP with Mysql in the BIT program.
I would like to improve my skills, so I am still doing self-study.</Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default About;
