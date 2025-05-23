//class component
// function component

import React from "react";

class MyComponent extends React.Component {

    state = {
        name: 'hat',
        address: 'hn',
        age: 18
    };

    handleClick(event){
        //console.log("click me")
        console.log("My name is", this.state.name)
    }

    handleOnMouseOver(event) {
        console.log(event.pageX)
    }

    //jsx, ham render ke thua tu react.component, cho phep code html trong js
    render() {
        return (

            <div>
                My name is {this.state.name} and
                I'm from {this.state.address}
                <button onMouseOver={this.handleOnMouseOver}>Hover me</button>
                <button onClick={this.handleClick}>Click me</button>

            </div>
        );
    }
}

export default MyComponent;