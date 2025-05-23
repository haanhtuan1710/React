//class component
// function component

import React from "react";

class MyComponent extends React.Component {

    state = {
        name: 'hat',
        address: 'hn',
        age: 18
    };

    //jsx, ham render ke thua tu react.component, cho phep code html trong js
    render(){
        return (

            <div> 
                My name is {this.state.name} and 
                I'm from {this.state.address}
                
            </div>
        );
    }
}

export default MyComponent;