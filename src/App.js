import React from "react";
import BigForm from "./BigForm/BigForm";
import Counter from "./Counter/Counter";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor #1");
  }

  componentDidMount() {
    console.log("componentDidMount #3");
  }


  render() {
    console.log("render #2");

    return (
      <div className="App">
        <BigForm />
        <Counter />
      </div>
    );
  }
}
