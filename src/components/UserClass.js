import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            useInfo:{
                name : "Demo",
                location:"Location"
            }
        }
        console.log("child constructor call")
    }
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/Amitsaini99915")
        const json = await data.json();
        console.log(json);
        this.setState({
            useInfo : json,
        })
    }
    componentDidUpdate(){
        console.log("component did update")
    }
    componentWillUnmount(){
        console.log("component will mount")
    }
    render(){
        const {name} = this.props
        console.log("child render call")
        return(
            <div className="user-card">
                <div>Name : {this.state.useInfo.login}</div>
                <div>Place : {this.state.useInfo.location}</div>
            </div>
        )
    }
}
export default UserClass;