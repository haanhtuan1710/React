import React from "react";

class DisplayInfor extends React.Component {
    render() {

        //destructuring array,object
        const { listUser } = this.props;
        //props viet tat cua properties, ke thua du lieu tu cha sang con
        return (
            <div>
                {listUser.map((user) => {
                    return (
                        <div key={user.id}>
                            <div> Name {user.name} </div>
                            <div> Age {user.age}</div>
                            <hr/>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default DisplayInfor