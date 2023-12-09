import { useState } from "react";

const User=({name})=>{
    const [count] = useState(0);
    return(
        <div className="user-card">
            <div>count : {count}</div>
            <div>Name : {name}</div>
            <div>Place : Haryana</div>
        </div>
    )
}
export default User;