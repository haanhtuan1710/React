import React from "react";

class DisplayInfor extends React.Component{
    render(){
        //destructuring array,object
        const {age,name} = this.props;
        //props viet tat cua properties, ke thua du lieu tu cha sang con
        return(
            <div>
                <div>Name {name}</div>
                <div>Age {age}</div>
            </div>
        )
    }
}

export default DisplayInfor