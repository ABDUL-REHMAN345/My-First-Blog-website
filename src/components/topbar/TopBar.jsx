import { Link } from "react-router-dom";
import "./topbar.css"

export default function TopBar() {
    const user = false;
    return (
        <div className="top">

            <div className="topLeft">
                <i className="topIcons fa-brands fa-square-facebook"></i>
                <i className="topIcons fa-brands fa-twitter"></i>
                <i className="topIcons fa-brands fa-pinterest"></i>
                <i className="topIcons fa-brands fa-instagram"></i>
            </div>
            <div className="topCentre">
                <ul className="topList">
                    <li className="topListItems">
                        <Link className="link" to="/">HOME</Link>
                    </li>
                    <li className="topListItems"><Link className="link" to="/about">ABOUT</Link></li>
                    <li className="topListItems"><Link className="link" to="/contact us">CONTACT US</Link></li>
                    <li className="topListItems"><Link className="link" to="/write">WRITE</Link></li>
                    <li className="topListItems">
                        {user && "LOGOUT"}
                    </li>
                </ul>

            </div>
            <div className="topRight">
                {
                    user ? (
                        <img
                            className="topImage"
                            src="https://th.bing.com/th/id/R.605abb74c40a3d3feba546688f7b9b70?rik=9znFrxPzHnPB1g&pid=ImgRaw&r=0" alt="No Image" />
                            ):(
                            <ul className="topList">
                                <li className="topListItems">
                            <Link className="link" to="/login"><b> LOGIN </b></Link>
                               </li>
                               <li className="topListItems">
                            <Link className="link" to="/register"><b> REGISTER </b></Link>
                            </li>
                            </ul>
                    ) 
}
                <i className=" topSearchIcon fa-solid fa-magnifying-glass"></i>

            </div>
        </div>
    )
};
