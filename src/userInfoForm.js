import React from 'react';

export default class UserInfoForm extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            label: ''
        }
    
        this.onTyping = this.onTyping.bind(this);
        this.onEnterKey = this.onEnterKey.bind(this);
    }
    
    onTyping = (e) => {
        this.setState({
            label: e.target.value.toUpperCase()
        })
        return (
            console.log(this.state)
        )
    }

    onEnterKey(event) {
        event.preventDefault();
        alert('Отправленное имя: ' + this.state.label);
        console.log('onEnterKey');
    }

    render () {
        return(
            <form onSubmit={this.onEnterKey}>
                <input 
                    type="text"
                    placeholder={this.props.placeholder}
                    onChange={this.onTyping}
                    value={this.state.label}/>
                <input type="submit" value={this.props.submitBtn} />
            </form>
        )
    }
}