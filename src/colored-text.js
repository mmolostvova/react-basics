import React from 'react';

export default class ColoredText extends React.Component {

    render() {

        return (
            <div>
                <p className={this.props.color}>{this.props.text}</p>
            </div>
        )
    }
}