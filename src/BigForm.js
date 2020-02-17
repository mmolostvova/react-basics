import React from 'react';

import './BigForm.css';

export default class BigForm extends React.Component {
    
    constructor (props) {
        super(props);

        this.state = {
            login: '',
            birthDate: null,
            email: '',
            phoneNum: null,
            checkbox: false
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.canBeSubmitted = this.canBeSubmitted.bind(this);
    }

    handleInputChange = (event) => {     
        
        const nam = event.target.name;
        const val = event.target.value;
        
        this.setState({[nam]: val}, () => console.log(this.state));        
    }

    canBeSubmitted() {
        const { login, birthDate, email, phoneNum, checkbox } = this.state;
        return (
          login.length > 0 && birthDate !== null && email.length > 0 && phoneNum !== null && checkbox !== false
        );
      }

    handleSubmit = (event) => {
        if (!this.canBeSubmitted()) {
            event.preventDefault();
            return;
        }
        return (
            alert("Your data:" + JSON.stringify(this.state))
        )
    }
    
    render () {
        
        const isEnabled = this.canBeSubmitted();

        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Put your login here:
                    <input 
                        type='text' 
                        name='login'
                        value={this.state.login}
                        onChange={this.handleInputChange}/>
                </label>
                <label>
                    Date of birth:
                    <input 
                        type='date'    
                        name='birthDate'
                        value={this.state.birthDate}
                        onChange={this.handleInputChange}/>
                </label>
                <label>
                    Email:
                    <input 
                        type='email' 
                        name='email'
                        value={this.state.email}
                        onChange={this.handleInputChange}/>
                </label>
                <label>
                    Phone number:
                    <input 
                        type='tel' 
                        // pattern='([0-9]{3})[0-9]{3}-[0-9]{2}-[0-9]{2}' 
                        name='phoneNum'
                        value={this.state.phoneNum}
                        onChange={this.handleInputChange}/>
                </label>
                <label>
                    Do you like this form?*
                    <input 
                        type='checkbox'
                        name='checkbox'
                        value={this.state.checkbox}
                        onChange={this.handleInputChange}/>
                </label>
                <input type='submit' disabled={!isEnabled}/>
            </form>
        )
    }
}