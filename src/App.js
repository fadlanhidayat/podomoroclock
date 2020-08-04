import React from 'react';
import logo from './logo.svg';
import './App.css';
import SetTimer from './components/SetTimer.js';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      breakTime: 5,
      sessionTime: 25,
      time: 25
    }
  }

  increaseHandler = (title) => {
    if (title == 'Session Length'){
      this.setState({
        sessionTime: this.state.sessionTime + 1
      })
    }else this.setState({
      breakTime: this.state.breakTime + 1
    })
  }

  decreaseHandler = (title) => {
    if (title == 'Session Length'){
      this.setState({
        sessionTime: this.state.sessionTime - 1
      })
    }else this.setState({
      breakTime: this.state.breakTime - 1
    })
  }

  render(){
    const {breakTime, sessionTime, time} = this.state;

    const sessionTimer = {
      title : "Session Length",
      time : sessionTime,
      increaseCount : () => this.increaseHandler(sessionTimer.title),
      decreaseCount : () => this.decreaseHandler(sessionTimer.title)
    }

    const breakTimer = {
      title : "Break Length",
      time : breakTime,
      increaseCount : () => this.increaseHandler(breakTimer.title),
      decreaseCount : () => this.decreaseHandler(breakTimer.title)
    }

    return(
      <div>
        <h1>Pomodoro Clock</h1>

        <div className="flex">
          <SetTimer 
            {...breakTimer}
          />
          <SetTimer 
            {...sessionTimer}
          />
        </div>

        <div className="session-timer">
          <h4>session</h4>
          <span>{time}</span>
          <div className="session-button">
            <button>start</button>
            <button>skip</button>
            <button>Reset</button>
          </div>
        </div>
        
        
        
      </div>
    )
  }
}

export default App;
