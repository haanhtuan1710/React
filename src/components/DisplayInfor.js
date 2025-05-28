import React, { useState } from "react";
import './DisplayInfor.scss';
import logo from './../logo.svg';

//stateful
// class DisplayInfor extends React.Component {

//     state = {
//         isShowListUser: true
//     }

//     render() {

//         //destructuring array,object
//         const { listUser } = this.props;
//         //props viet tat cua properties, ke thua du lieu tu cha sang con
//         return (
//             <div className="display-infor-container">
//                 {
//                     true &&
//                     <>
//                         {listUser.map((user) => {
//                             return (

//                                 <div key={user.id} className={+user.age >= 18 ? "green" : "red"}>
//                                     <div> Name {user.name} </div>
//                                     <div> Age {user.age}</div>

//                                     <div>
//                                         <button onClick={()=>this.props.handleDeleteUser(user.id)}> Delete </button>
//                                     </div>
//                                     <hr />
//                                 </div>
//                             )
//                         })}
//                     </>
//                 }
//             </div>
//         )
//     }
// }


//stateless
const DisplayInfor = (props) => {
    const { listUser } = props;

    const [isShowHideListUser, setShowHideListUser] = useState(true);
    const handleShowHide = () => {
        setShowHideListUser(!isShowHideListUser);
    }

    return (
        <div className="display-infor-container">
            <div>
                <span onClick={() => handleShowHide()}>
                    {isShowHideListUser == true ? "Hide list user" : "Show list user"}
                </span>
            </div>
            {
                isShowHideListUser &&
                <>
                    {listUser.map((user) => {
                        return (

                            <div key={user.id} className={+user.age >= 18 ? "green" : "red"}>
                                <div> Name {user.name} </div>
                                <div> Age {user.age}</div>

                                <div>
                                    <button onClick={() => props.handleDeleteUser(user.id)}> Delete </button>
                                </div>
                                <hr />
                            </div>
                        )
                    })}
                </>
            }
        </div>
    )

}

export default DisplayInfor