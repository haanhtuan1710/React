//class component
// function component

import React from "react";

class MyComponent extends React.Component {

    //jsx, ham render ke thua tu react.component, cho phep code html trong js
    render(){
        return (

            <div>my first component
                {Math.random()}
            </div>
        );
    }
}

export default MyComponent;