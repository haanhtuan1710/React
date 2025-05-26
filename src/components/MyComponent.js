//class component
// function component

import React from "react";

class MyComponent extends React.Component {

    state = {
        name: 'hat',
        address: 'hn',
        age: 18
    };

    handleClick(event) {
        console.log("click me")
        //console.log("Random", Math.floor(Math.random()*100 + 1))

        // merge state => react class
        this.setState({
            name: 'hat1',
            age: Math.floor(Math.random()*100 + 1)
        })

    }

    handleOnMouseOver(event) {
        //console.log(event.pageX)
    }

    //jsx, ham render ke thua tu react.component, cho phep code html trong js
    render() {
        return (

            <div>
                My name is {this.state.name} and
                I'm from {this.state.age}
                <button onMouseOver={this.handleOnMouseOver}>Hover me</button>
                <button onClick={(event) => this.handleClick(event)}>Click me</button>

            </div>
        );
    }
}

export default MyComponent;