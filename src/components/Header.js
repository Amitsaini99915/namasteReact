import logo from '../../assets/images/Swiggy_logo.png'

const Header = () => {
    return(
        <div className="navbar_wrapper">
            <div className="header container">
                <div className="logo">
                    <img className='logo_image' src={logo} alt="" />
                </div>
                <div className="navbar">
                    <ul className='nav_list'>
                        <li><a href="">Search</a></li>
                        <li><a href="">Offers</a></li>
                        <li><a href="">Help</a></li>
                        <li><a href="">Sign In</a></li>
                        <li><a href="">Cart</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Header