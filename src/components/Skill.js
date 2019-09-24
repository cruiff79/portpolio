import React from 'react';

class Skill extends React.Component {
    render() {
        return (
            <div className="App-skill" id="skill">
                <h1>Skill</h1>
                <div className="skill-content">
                    <h3>Language</h3>
                    <h5>Java, C#, Ruby, Android</h5>
                    <h3>Database</h3>
                    <h5>Oracle, Mysql, Firebase</h5>
                </div>
            </div>
        );
    }
}

export default Skill;