import React from "react";
import './DisplayInfor.scss';

class DisplayInfor extends React.Component {

    state = {
        isShowListUser: true
    }
    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }
    render() {

        //destructuring array,object
        const { listUser } = this.props;
        //props viet tat cua properties, ke thua du lieu tu cha sang con
        return (
            <div className="display-infor-container">
                <div>
                    <span onClick={() => { this.handleShowHide() }}> {this.state.isShowListUser === true ? "Hide list users" : "Show list users"} </span>
                </div>
                {
                    this.state.isShowListUser &&
                    <div>
                        {listUser.map((user) => {
                            return (

                                <div key={user.id} className={+user.age >= 18 ? "green" : "red"}>
                                    <div> Name {user.name} </div>
                                    <div> Age {user.age}</div>
                                    <hr />
                                </div>


                            )
                        })}
                    </div>
                }
            </div>
        )
    }
}

export default DisplayInfor