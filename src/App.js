import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      // time: 0
    }
  }

  // startTimer = () =>{
  //   this.timer = setInterval(() => this.setState({time: this.state.time + 1}), 1000);
  // }

  // pauseTimer = () =>{
  //   clearInterval(this.timer);
  // }

  render(){
    return (
      <div className="App">
        <h1>Cooking timer!</h1>
      </div>
    );
  }
}

export default App;
