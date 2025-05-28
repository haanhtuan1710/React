
import React, { useState } from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfor from "./DisplayInfor";

// class MyComponent extends React.Component {

//     state = {
//         listUser: [
//             { id: 1, name: "hat", age: "16" },
//             { id: 2, name: "hat1", age: "18" },
//             { id: 3, name: "hat2", age: "69" },
//         ]
//     }

//     handleAddNewUser = (userObj) => {
//         //let listUserClone = [...this.state.listUser];

//         this.setState({
//             listUser:[userObj, ...this.state.listUser]
//         })
//     }

//     handleDeleteUser = (userId)=>{
//         let listUserClone = this.state.listUser;
//         listUserClone = listUserClone.filter(item => item.id !== userId);
//         this.setState({
//             listUser : listUserClone
//         })
//     }

//     //jsx, ham render ke thua tu react.component, cho phep code html trong js
//     //Dry ; dont repeat urself
//     render() {
//         return (
//             <>
//                 <div className="a">
//                     <AddUserInfo
//                         handleAddNewUser={this.handleAddNewUser} // them dau dong mo ngoac se thuc thi cau lenh chu khong phai gan nua
//                     />
//                     <br></br>
//                     <DisplayInfor
//                         listUser={this.state.listUser}
//                         handleDeleteUser = {this.handleDeleteUser}

//                     />
//                 </div>
//                 <div className="b">

//                 </div>
//             </>
//         );
//     }
// }

const MyComponent = (props) => {

    const [listUser, setListUser] = useState(
        [
        { id: 1, name: "hat", age: "16" },
        { id: 2, name: "hat1", age: "18" },
        { id: 3, name: "hat2", age: "69" },
        ]
    )

    const handleAddNewUser = (userObj) => {
        //let listUserClone = [...this.state.listUser];
        setListUser([userObj, ...listUser])
        // this.setState({
        //     listUser: [userObj, ...this.state.listUser]
        // })
    }

    const handleDeleteUser = (userId) => {
        let listUserClone = listUser;
        listUserClone = listUserClone.filter(item => item.id !== userId);
        setListUser(listUserClone)
        
        // this.setState({
        //     listUser: listUserClone
        // })
    }
    return (
        <>
            <div className="a">
                <AddUserInfo
                    handleAddNewUser={handleAddNewUser} // them dau dong mo ngoac se thuc thi cau lenh chu khong phai gan nua
                />
                <br></br>
                <DisplayInfor
                    listUser={listUser}
                    handleDeleteUser={handleDeleteUser}
                />
            </div>
            <div className="b">

            </div>
        </>
    )
}

export default MyComponent;