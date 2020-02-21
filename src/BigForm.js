import React from "react";
//import Moment from "moment";

import logo from "./logo.svg";
import "./BigForm.css";

export default class BigForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      email: "",
      birthDate: null,
      phoneNumber: null,
      checkbox: false,
      password: "",
      isLogoRotating: [false, false, false, false, false, false],
      errors: {
        userName: "",
        email: "",
        birthDate: "",
        phoneNumber: "",
        checkbox: "",
        password: ""
      }
    };

    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleBirthDateChange = this.handleBirthDateChange.bind(this);
    this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.canBeSubmitted = this.canBeSubmitted.bind(this);
  }

  handleUserNameChange = event => {
    const val = event.target.value;
    const dataCheck = [...this.state.isLogoRotating];
    dataCheck[0] = val.length > 2;
    this.setState(
      state => ({
        userName: val,
        isLogoRotating: dataCheck,
        errors: {
          ...state.errors,
          userName: dataCheck[0] ? "" : "Name must be longer than 2 symbols"
        }
      }),
      () => console.log(this.state.isLogoRotating)
    );
  };

  handleEmailChange = (event) => {
    const val = event.target.value;
    const dataCheck = [...this.state.isLogoRotating];
    dataCheck[1] = val.includes('@');
    this.setState(
      state => ({
        email: val,
        isLogoRotating: dataCheck,
        errors: {
          ...state.errors,
          email: dataCheck[1] ? "" : "Email must contain the '@'"
        }
      }),
      () => console.log(this.state.isLogoRotating)
    );
  };

  handleBirthDateChange = (event) => {
    const val = event.target.value;
    const dataCheck = [...this.state.isLogoRotating];
    const isYearValid = new Date(val).getFullYear()
    dataCheck[2] = isYearValid < 2005 && isYearValid > 1935;

    this.setState(
      state => ({
        birthDate: val,
        isLogoRotating: dataCheck,
        errors: {
          ...state.errors,
          birthDate: dataCheck[2] ? "" : "Enter the correct birth year"
        }
      }),
      () => console.log(this.state.isLogoRotating)
    )
  };

  handlePhoneNumberChange = (event) => {
    const val = event.target.value;
    const dataCheck = [...this.state.isLogoRotating];
    const regex = new RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{2})[-. ]?([0-9]{2})$/);
    dataCheck[3] = regex.test(val)

    this.setState(
      state => ({
        phoneNumber: val,
        isLogoRotating: dataCheck,
        errors: {
          ...state.errors,
          phoneNumber: dataCheck[3] ? "" : "Put your phone number in a correct format: (000) 000 00 00"
        }
      }),
      () => console.log(this.state.isLogoRotating, dataCheck[3])
    );
  };

  handleCheckboxChange = () => {
    const dataCheck = [...this.state.isLogoRotating];
    dataCheck[4] = !dataCheck[4];
    
    this.setState(
      state => ({
        checkbox: !this.state.checkbox,
        isLogoRotating: dataCheck,
        errors: {
          ...state.errors,
          checkbox: dataCheck[4] ? "" : "You have to check this"
        }
      }),
      () => console.log(this.state.isLogoRotating, dataCheck[4])
    )
  };

  handlePasswordChange = (event) => {
    const val = event.target.value;
    const dataCheck = [...this.state.isLogoRotating];
    dataCheck[5] = val.length > 7;
    this.setState(
      state => ({
        password: val,
        isLogoRotating: dataCheck,
        errors: {
          ...state.errors,
          password: dataCheck[5] ? "" : "Password must be longer than 7 symbols"
        }
      }),
      () => console.log(this.state.isLogoRotating)
    );
  };

  canBeSubmitted = () => {
    const { userName, birthDate, email, phoneNumber, checkbox, password } = this.state;

    //const { isLogoRotating } = this.state;
    
    return (
      userName.length > 0 && 
      birthDate !== null && 
      email.length > 0 && 
      phoneNumber !== null && 
      checkbox !== false && 
      password.length > 7
      );
    //isLogoRotating === [true, true, true, true, true, true]
  }

  handleSubmit = event => {

    if (!this.canBeSubmitted()) {
      event.preventDefault();
      return;
    }
    return (
      alert ("Your data:" + JSON.stringify(this.state))
      //console.log(this.state)
    )
  };

  render() {
    const isEnabled = this.canBeSubmitted();

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="progress-bar">
          <img
            src={logo}
            className={
              this.state.isLogoRotating[0] ? "App-logo-active" : "App-logo"
            }
            alt="logo"
          />
          <img
            src={logo}
            className={
              this.state.isLogoRotating[1] ? "App-logo-active" : "App-logo"
            }
            alt="logo"
          />
          <img
            src={logo}
            id="3"
            className={
              this.state.isLogoRotating[2] ? "App-logo-active" : "App-logo"
            }
            alt="logo"
          />
          <img
            src={logo}
            id="4"
            className={
              this.state.isLogoRotating[3] ? "App-logo-active" : "App-logo"
            }
            alt="logo"
          />
          <img
            src={logo}
            id="5"
            className={
              this.state.isLogoRotating[4] ? "App-logo-active" : "App-logo"
            }
            alt="logo"
          />
          <img
            src={logo}
            id="5"
            className={
              this.state.isLogoRotating[5] ? "App-logo-active" : "App-logo"
            }
            alt="logo"
          />          
        </div>
        <label>
          Put your name here:
          <input
            type="text"
            value={this.state.userName}
            onChange={this.handleUserNameChange}
          />
        </label>
        {this.state.errors.userName.length ? (
          <p>{this.state.errors.userName}</p>
        ) : null}
        <label>
          Email:
          <input
            type="email"
            value={this.state.email}
            onChange={this.handleEmailChange}
          />
        </label>
        {this.state.errors.email.length ? (
          <p>{this.state.errors.email}</p>
        ) : null}
        <label>
          Date of birth:
          <input
            type="date"
            value={this.state.birthDate}
            onChange={this.handleBirthDateChange}
          />
        </label>
        {this.state.errors.birthDate.length ? (
          <p>{this.state.errors.birthDate}</p>
        ) : null}
        <label>
          Phone number:
          <input
            type="tel"
            value={this.state.phoneNumber}
            onChange={this.handlePhoneNumberChange}
          />
        </label>
        {this.state.errors.phoneNumber.length ? (
          <p>{this.state.errors.phoneNumber}</p>
        ) : null}
        <label>
          I agree with Privacy Policy
          <input
            type="checkbox"
            value={this.state.checkbox}
            onChange={this.handleCheckboxChange}
          />
        </label>
        {this.state.errors.checkbox.length ? (
          <p>{this.state.errors.checkbox}</p>
        ) : null}
        <label>
          Make up the password
          <input
            type="password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
          />
        </label>
        {this.state.errors.password.length ? (
          <p>{this.state.errors.password}</p>
        ) : null}
        <input type="submit" disabled={!isEnabled} />
      </form>
    );
  }
}
