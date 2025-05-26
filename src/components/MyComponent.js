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
            age: Math.floor(Math.random() * 100 + 1)
        })

    }

    handleOnMouseOver(event) {
        //console.log(event.pageX)
    }

    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }

    //jsx, ham render ke thua tu react.component, cho phep code html trong js
    render() {
        return (

            <div>
                My name is {this.state.name} and
                I'm from {this.state.age}
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <input type="text" onChange={(event) => this.handleOnChangeInput(event)} />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default MyComponent;