
import React from "react";
import UserInfo from "./UserInfo";

class MyComponent extends React.Component {

    //jsx, ham render ke thua tu react.component, cho phep code html trong js
    render() {
        return (
            <div>
                <UserInfo />
            </div>
        );
    }
}

export default MyComponent;