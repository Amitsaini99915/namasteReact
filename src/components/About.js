import UserClass from "./UserClass";
import {Component} from "react";

// import User from "./user";
class About extends Component{
    constructor(){
        super();
        console.log("parent constructor call")
    }
    componentDidMount(){
        console.log("parent componentdidMount ")
    }
    render(){
        console.log("parent render call")
        return (
            <div className="container content">
                <UserClass name = {"Amit saini class"} />
                
            </div>
        )
    }
}



// const About = ()=>{
//     return (
//         <div className="container content">
//             <UserClass name = {"Amit saini class"} />
//         </div>
//     )
// }
export default About;