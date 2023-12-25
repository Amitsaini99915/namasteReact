import { useState } from "react";
import logo from "../../assets/images/Swiggy_logo.png";
import { Link } from "react-router-dom";
import UserContext from "../utiles/UserContext";
import { useContext } from "react";
import { useSelector } from "react-redux";


const Header = () => {
  const [userDetail, setUserDetail] = useState("login");
  const data = useContext(UserContext);
  const cartItem = useSelector((store) => store.cart.items)

  console.log(cartItem,"cartItemcartItemcartItemcartItem")
  // const { setUserName } = useContext(UserContext);
  // setUserName("user");
  console.log(data, "datadatadatadata");
  console.log("header");
  return (
    <div className="navbar_wrapper shadow">
      <div className="flex items-center justify-between container mx-auto py-2 px-4 max-w-[1200px]">
        <div className="logo w-56">
          <img className="logo_image w-full" src={logo} alt="" />
        </div>
        
        <ul className="nav_list flex items-center justify-center">
          <li className="px-4 py-2 hover:font-bold">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 py-2 hover:font-bold">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4 py-2 hover:font-bold">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4 py-2 font-bold hover:font-bold">
            <Link to="/cart ">cart - ({cartItem.length})</Link>
          </li>
          <button
            onClick={() => {
              userDetail === "login"
                ? setUserDetail("logout")
                : setUserDetail("login");
            }}
          >
            {userDetail}
          </button>
          <li className="px-4 py-2 font-bold">{data.loginDate}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
