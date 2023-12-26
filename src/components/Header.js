import { useState } from "react";
import logo from "../../assets/images/Swiggy_logo.png";
// import mobilelogo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import UserContext from "../utiles/UserContext";
import { useContext } from "react";
import { useSelector } from "react-redux";
import profile_image from "../../assets/images/profile_image.png";
import useOnlineStatus from "../utiles/useOnlineStatus";


const Header = () => {
  const [userDetail, setUserDetail] = useState("login");
  const data = useContext(UserContext);
  const cartItem = useSelector((store) => store.cart.items);
  const onlineStatus = useOnlineStatus();
  // console.log(cartItem, "cartItemcartItemcartItemcartItem");

  // console.log(data, "datadatadatadata");
  // console.log("header");
  return (
    <div className="navbar_wrapper shadow">
      <div className="flex items-center justify-between container mx-auto py-2 max-w-[1200px]">
        <div className="logo w-[60px] lg:w-56">
        <Link to="/">
          <img className="logo_image w-full " src={logo} alt="" />
          </Link>
        </div>

        <ul className="nav_list hidden  lg:flex items-center justify-center ">
          <li className="px-4 py-2 font-medium hover:text-[#fc8019] transition-all ease-linear duration-300">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 py-2 font-medium hover:text-[#fc8019] transition-all ease-linear duration-300">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4 py-2 font-medium hover:text-[#fc8019] transition-all ease-linear duration-300">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="relative px-4 py-2 font-medium hover:text-[#fc8019] transition-all ease-linear duration-300">
            <Link className={`flex items-center justify-start text-xl ${cartItem.length>0 ? "text-green-500":""}`} to="/cart ">
              <span className="relative w-[20px] h-[20px] inline-block">
              <svg className={`_1GTCc _173fq stroke-current  fill-current ${cartItem.length ===0 ? 'text-[#686b78] ':'text-[#60b246] fill-current'}`} viewBox="-1 0 37 32" height="20" width="20"><path d="M4.438 0l-2.598 5.11-1.84 26.124h34.909l-1.906-26.124-2.597-5.11z"></path></svg>
                <span className="absolute top-0 right-0 text-sm w-full h-[20px] text-center text-white">      {cartItem.length} 
                </span>
              </span>
               cart
               </Link>
          </li>
          <div className=" w-10 relative rounded-full">
            <img
              className="w-full rounded-full"
              src={profile_image}
              alt="profile_image"
            />
            {onlineStatus ? (
              <div className="w-3 h-3 bg-green-600 rounded-full absolute bottom-0 right-1"></div>
            ) : (
              <div className="w-3 h-3 bg-red-600 rounded-full absolute bottom-0 right-1"></div>
            )}
          </div>
          <li className=" p-2 font-bold hover:text-[#fc8019] transition-all ease-linear duration-300 ">{data.loginDate}</li>
        
        </ul>
      </div>
    </div>
  );
};
export default Header;
