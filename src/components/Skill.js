import React from 'react';

class Skill extends React.Component {
    render() {
        return (
            <div className="App-skill" id="skill">
                <h1>Skill</h1>
                <div className="skill-content">
                    <h3>Language</h3>
                    <h5>Java, C#, php, javascript</h5>
                    <h3>Framework</h3>
                    <h5>Spring, CodeIgniter</h5>
                    <h3>Database</h3>
                    <h5>Oracle, Mysql</h5>
                </div>
            </div>
        );
    }
}

export default Skill;