import React from "react";
import BigForm from "./BigForm/BigForm";
import Counter from "./Counter/Counter";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from "react-router-dom";
import { Nav } from "react-bootstrap";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignedUp: false
    };
    console.log("APP constructor");

    this.onSignUp = this.onSignUp.bind(this);
    this.renderPageForm = this.renderPageForm.bind(this);
    this.renderPageCounter = this.renderPageCounter.bind(this);
  }

  componentDidMount() {
    console.log("APP componentDidMount");
  }

  onSignUp() {
    this.setState({
      isSignedUp: true
    });
  }

  renderPageForm() {
    if (this.state.isSignedUp) {
      return <Redirect to="/counter" />;
    }
    return <BigForm onSubmit={this.onSignUp} />;
  }

  renderPageCounter() {
    if (this.state.isSignedUp) {
      return <Counter />;
    }
    return <Nav.Link href="/form">Go to login page</Nav.Link>;
  }

  render() {
    console.log("APP render");
    return (
      <Router>
        <div>
          <Link to="/home">Home</Link>
          <Link to="/form" eventKey="link-1">
            Sign Up
          </Link>
          <Link to="counter" eventKey="link-2">
            Counter
          </Link>
        </div>
        <Switch>
          <Route path="/form" render={this.renderPageForm} />
          <Route path="/counter" render={this.renderPageCounter} />
          <Route path="/">
            <h1>Main page</h1>
          </Route>
        </Switch>
      </Router>
    );
  }
}
