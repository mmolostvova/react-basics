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
      counter: 1,
      field1: '',
      field2: '',
    };

    this.onAddLogo = this.onAddLogo.bind(this);
    this.onRemoveLogo = this.onRemoveLogo.bind(this);
    this.onChangeField1 = this.onChangeField1.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
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

  onChangeField1 = (e) => {
    //console.log('onChangeField1', argument.target.value);
    this.setState({
        field1: e.target.value
    }, () => console.log(this.state.field1))
  }

  onSubmitForm = (event) => {
    event.preventDefault();
    alert('Отправленное имя: ' + this.state.field1);
    console.log('onSubmitForm');
  }

  render () {
    console.log('render #2')

    const renderedLogos = [];

    for(let i = 0; i < this.state.counter; i++) {
      renderedLogos.push(<img src={logo} className="App-logo-active" alt="logo" />);
      console.log('------------#7')
    }
    
    return (
      
    <div className="App">
      <header className="App-header">
        {renderedLogos}
        <ColoredText text='Some text1' color='red'/>
        <ColoredText text='Some text2' color='yellow'/>
        <UserInfoForm 
          placeholder="Type your name here" 
          submitBtn="Send"
          onTyping={this.onChangeField1}
          value={this.state.field1}
          onPressSubmit={this.onSubmitForm}/>
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
