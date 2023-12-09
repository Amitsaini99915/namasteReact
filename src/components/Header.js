import { useState } from 'react';
import logo from '../../assets/images/Swiggy_logo.png'
import { Link } from 'react-router-dom';

const Header = () => {
    const [userDetail, setUserDetail] = useState("login");
    // const [searchintput , setSearchInput] = useState("")
    console.log("rerander header")
    return(
        <div className="navbar_wrapper">
            <div className="header container">
                <div className="logo">
                    <img className='logo_image' src={logo} alt="" />
                </div>
                {/* <div className="search_bar">
                    <input type="text" value={searchintput} onChange={(e)=>setSearchInput(e.target.value)} />
                    <button onClick={()=>{
                        console.log(searchintput,"searchintput")
                    }}>search</button>
                </div> */}
                <div className="navbar">
                    <ul className='nav_list'>
                    <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        
                        {/* <li><a href="">Search</a></li>
                        <li><a href="">Offers</a></li>
                        <li><a href="">Help</a></li>
                        <li><a href="">Sign In</a></li>
                        <li><a href="">Cart</a></li> */}
                        <button onClick={()=>{
                            userDetail ==="login"?setUserDetail("logout"):setUserDetail("login");
                        }}>{userDetail}</button>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Header