import {Link } from "react-router-dom";

const Header = () => {

    return (
        <div id="header">
            {/* <img src="https://th.bing.com/th/id/OIP.nQruJOZiBmBMD9uM5YAHpAFIC-?pid=ImgDet&rs=1" alt="Mygo Minds" /><br /> */}
            <img src="https://mygominds.com/images/MGM_FULL_LOGO.png" alt="Mygo Minds"/><br />
            <div id="links">
            <Link to="/Home" style={{marginRight:30}} className="link">Home</Link>
            <Link to="/Register" style={{marginRight:30}} className="link">Register</Link>
            <Link to="/Login" style={{marginRight:30}} className="link">Login</Link>
            </div>
           
        </div>
    )
};
export default Header;