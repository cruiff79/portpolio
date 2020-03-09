import React from 'react';
import github from '../image/github.png';
import java from '../image/java.jpg';
import csharp from '../image/csharp.png';
import php from '../image/php.png';
import javascript from '../image/javascript.png';
import spring from '../image/spring.png';
import codeigniter from '../image/codeigniter.png';
import jquery from '../image/jquery.jpg';
import oracle from '../image/oracle.jpg';
import mysql from '../image/mysql.png';

class Skill extends React.Component {
    render() {
        return (
            <div className="App-skill" id="skill">
                <h1>Skill</h1>
                <div className="image/skill-content">
                    <img src={java} alt="java" className="skill-image" />
                    <img src={csharp} alt="csharp" className="skill-image" />
                    <img src={php} alt="php" className="skill-image" />
                    <img src={javascript} alt="javascript" className="skill-image" />
                    <img src={spring} alt="spring" className="skill-image" />
                    <img src={codeigniter} alt="codeigniter" className="skill-image" />
                    <img src={jquery} alt="jquery" className="skill-image" />
                    <img src={oracle} alt="oracle" className="skill-image" />
                    <img src={mysql} alt="mysql" className="skill-image" />
                </div>
            </div>
        );
    }
}

export default Skill;
