import React from 'react';
import './App.css';
import NaviBar from './components/NaviBar';
import About from './components/About';
import Skill from './components/Skill';
import Project from './components/Project';
import Contact from './components/Contact';

class App extends React.Component {
  state = {
    num: 0,
    title: ''
  }

  render() {
    let _title = 'Developer Jinyoung Park\'s Portpolio';
    let arrTitle = Array.from(_title);

    if(this.state.num !== arrTitle.length) {
      this.timer = setTimeout(() => {
        this.setState({
          num: this.state.num + 1,
          title: this.state.title + arrTitle[this.state.num]
        });
      }, 150);
    }
    
    return (
      <div className="App">
        <NaviBar />
        <header className="App-header">
          <h1>{this.state.title}</h1>
        </header>
        <About />
        <Skill />
        <Project />
        <Contact />
      </div>
    );
  }
}

export default App;
