import PropTypes from 'prop-types'
import React from "react";

function HelloWorldComponent({ name }) {
    return (
        <div>Hello, {name}</div>
    )
}

HelloWorldComponent.propTypes = {
    name: PropTypes.string
}

class Greeting extends React.Component {
    render() {
        return (
            <h1>Hello, {this.props.name}</h1>
        );
    }
}

// Specifies the default values for props:
Greeting.defaultProps = {
    name: 'Stranger'
};



export default HelloWorldComponent
