import React from 'react';
import './App.css';
import {Stage, Sprite} from '@inlet/react-pixi';

class App extends React.Component {
  state = {
    canvasWidth: window.innerWidth,
    canvasHeight: window.innerHeight
  };

  onResize = () => {
    this.setState({
      canvasWidth: window.innerWidth,
      canvasHeight: window.innerHeight
    });
  };

  componentDidMount() {
    window.addEventListener('resize', this.onResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize)
  }

  render () {
    return (
      <Stage width={this.state.canvasWidth} height={this.state.canvasHeight}>
        <Sprite image="/assets/Zagotovka_one.png"/>
      </Stage>
    );
  }
}

export default App;
