import React from 'react';
import java from '../image/java.jpg';
import csharp from '../image/csharp.png';
import php from '../image/php.png';
import javascript from '../image/javascript.png';
import spring from '../image/spring.png';
import codeigniter from '../image/codeigniter.png';
import html from '../image/html.png';
import css from '../image/css.png';
import jquery from '../image/jquery.jpg';
import react from '../image/react.png';
import mybatis from '../image/mybatis.jpg';
import oracle from '../image/oracle.jpg';
import mysql from '../image/mysql.png';

class Skill extends React.Component {
    render() {
        return (
            <div className="App-skill" id="skill">
                <h1>Skill</h1>
                <div className="skill-content">
                    <img src={java} alt="java" className="skill-image" />
                    <img src={csharp} alt="csharp" className="skill-image" />
                    <img src={php} alt="php" className="skill-image" />
                </div>
                <div className="skill-content">
                    <img src={spring} alt="spring" className="skill-image" />
                    <img src={codeigniter} alt="codeigniter" className="skill-image" />
                </div>
                <div className="skill-content">
                    <img src={html} alt="html" className="skill-image" />
                    <img src={css} alt="css" className="skill-image" />
                    <img src={javascript} alt="javascript" className="skill-image" />
                    <img src={jquery} alt="jquery" className="skill-image" />
                    <img src={react} alt="react" className="skill-image" />
                </div>
                <div className="skill-content">
                    <img src={oracle} alt="oracle" className="skill-image" />
                    <img src={mysql} alt="mysql" className="skill-image" />
                </div>
                <div className="skill-content">
                    <img src={mybatis} alt="mybatis" className="skill-image" />
                </div>
            </div>
        );
    }
}

export default Skill;
