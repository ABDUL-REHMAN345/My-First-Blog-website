import "./topbar.css"

export default function TopBar() {
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
                    <li className="topListItems">HOME</li>
                    <li className="topListItems">ABOUT</li>
                    <li className="topListItems">CONTACT US</li>
                    <li className="topListItems">WRITE</li>
                    <li className="topListItems">LOGOUT</li>
                </ul>

            </div>
            <div className="topRight">
            <img className="topImage" 
            src="https://th.bing.com/th/id/R.605abb74c40a3d3feba546688f7b9b70?rik=9znFrxPzHnPB1g&pid=ImgRaw&r=0" alt="No Image" />
            <i className=" topSearchIcon fa-solid fa-magnifying-glass"></i>
             </div>
        </div>
    )
}
