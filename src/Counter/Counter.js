import React from "react";

import heart from "./heart.svg";

import "./Counter.css";
import { Button } from "react-bootstrap";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor #1");

    this.state = {
      counter: 1
    };

    this.onAddLogo = this.onAddLogo.bind(this);
    this.onRemoveLogo = this.onRemoveLogo.bind(this);
  }

  onAddLogo() {
    console.log("onAddLogo");
    console.log(this.state);
    this.setState(state => {
      return { counter: state.counter + 1 };
    });
  }

  onRemoveLogo() {
    console.log("onRemoveLogo");
    console.log(this.state);
    if (this.state.counter > 1) {
      this.setState(state => {
        return { counter: state.counter - 1 };
      });
    } else {
      alert("You can't remove last heart");
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate #4", nextProps, nextState);
    if (this.state.counter === nextState.counter) {
      return false;
    } else {
      return true;
    }
  }

  render() {
    console.log("render #2");

    const renderedLogos = [];

    for (let i = 0; i < this.state.counter; i++) {
      renderedLogos.push(
        <img src={heart} className="App-logo-active" alt="logo" />
      );
      console.log("------------#7");
    }

      return (
        <div className="counter">
          {renderedLogos}
          <Button variant="success" onClick={this.onAddLogo}>
            Add heart
          </Button>
          <Button variant="danger" onClick={this.onRemoveLogo}>
            Remove heart
          </Button>
        </div>
      );
    }
    
  }
