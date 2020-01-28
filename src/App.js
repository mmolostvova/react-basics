import React from 'react';
import ColoredText from './colored-text';
import UserInfoForm from './userInfoForm';

import logo from './logo.svg';
import './App.css';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    console.log('constructor #1');

    this.state = {
      counter: 1
    };

    this.onAddLogo = this.onAddLogo.bind(this);
    this.onRemoveLogo = this.onRemoveLogo.bind(this);
  }
  
  componentDidMount() {
    console.log('componentDidMount #3')
  }

  onAddLogo() {
    console.log('onAddLogo')
    console.log(this.state)
    this.setState((state) => {
      return { counter: state.counter + 1 };
    });
  }

  onRemoveLogo() {
    console.log('onRemoveLogo')
    console.log(this.state)
    if (this.state.counter > 1) {
      this.setState((state) => {
        return { counter: state.counter - 1 };
      })
    } else {
      alert('You can\'t remove last logo')
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate #4', nextProps, nextState)
    if (this.state.counter === nextState.counter) {
      return false 
    } else {
      return true
    }
  }

  componentDidUpdate() {
    console.log('componentDidUpdate #5');
  }

  render () {
    console.log('render #2')

    const renderedLogos = [];

    for(let i = 0; i < this.state.counter; i++) {
      renderedLogos.push(<img src={logo} className="App-logo" alt="logo" />);
      console.log('------------#7')
    }
    
    return (
      
    <div className="App">
      <header className="App-header">
        {renderedLogos}
        <ColoredText text='Some text1' color='red'/>
        <ColoredText text='Some text2' color='yellow'/>
        <UserInfoForm placeholder="Type your name here" submitBtn="Send"/>
        <UserInfoForm placeholder="Add your lastname" submitBtn="Send"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      <button 
        className="btn"
        onClick={this.onAddLogo}>
          Add logo
      </button>
      <button 
        className="btn delete-btn"
        onClick={this.onRemoveLogo}>
          Remove logo
      </button>
      </header>
    </div>
  );
}
}
