import React from 'react';

export default class ColoredText extends React.Component {

    render() {

        return (
            <div>
                <h1 className={this.props.color}>{this.props.text}</h1>
            </div>
        )
    }
}