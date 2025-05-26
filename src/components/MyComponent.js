
import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {

    //jsx, ham render ke thua tu react.component, cho phep code html trong js
    render() {
        const myInfor = ['a','b','c']
        return (
            <div>
                <UserInfo />
                <br></br>
                <DisplayInfor name = "hat" age = "18"/>
                <hr/>
                <DisplayInfor name = "hat1" age = {29} myInfor={myInfor}/>
            </div>
        );
    }
}

export default MyComponent;