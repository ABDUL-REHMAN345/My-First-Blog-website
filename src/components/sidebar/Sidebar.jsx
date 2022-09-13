import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar"> 
            <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img className="sidebarImage"src="https://th.bing.com/th/id/OIP.RE-nLFjOR7aSt2rgjIjhIQHaE7?pid=ImgDet&rs=1" alt="No Image" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, eveniet. Deleniti, explicabo repudiandae. Omnis ducimus perferendis delectus quaerat. Necessitatibus, atque laboriosam pariatur magnam ad asperiores quasi dolores praesentium repellendus ipsa?</p>
            </div>
            
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sports</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Cinema</li>

                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                <i className="sidebarIcons fa-brands fa-square-facebook"></i>
                <i className="sidebarIcons fa-brands fa-twitter"></i>
                <i className="sidebarIcons fa-brands fa-pinterest"></i>
                <i className="sidebarIcons fa-brands fa-instagram"></i>
            </div>
        </div>
        </div>   
    );
}
