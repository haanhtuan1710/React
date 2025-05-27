
import React from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {

    state = {
        listUser: [
            { id: 1, name: "hat", age: "16" },
            { id: 2, name: "hat1", age: "18" },
            { id: 3, name: "hat2", age: "69" },
        ]
    }

    handleAddNewUser = (userObj) => {
        let listUserClone = [...this.state.listUser];
        
        // this.setState({
        //     listUser:[userObj, ...this.state.listUser]
        // })
    }

    //jsx, ham render ke thua tu react.component, cho phep code html trong js
    //Dry ; dont repeat urself
    render() {
        return (
            <div>
                <AddUserInfo 
                handleAddNewUser={this.handleAddNewUser} // them dau dong mo ngoac se thuc thi cau lenh chu khong phai gan nua
                />
                <br></br>
                <DisplayInfor
                    listUser={this.state.listUser}
                    
                />
            </div>
        );
    }
}

export default MyComponent;