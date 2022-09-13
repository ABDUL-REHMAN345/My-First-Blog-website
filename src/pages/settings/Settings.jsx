import Sidebar from "../../components/sidebar/Sidebar"
import "./settings.css"

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Your Account</span>
                </div>
                <form className="settingsForm">
                    <label > <b>Profile Picture </b>     </label>
                    <div className="settingsPP">
                        <img className="settingsImg"
                            src="https://th.bing.com/th/id/OIP.6kbSAsrE-gPa0ql1rh2IWwHaE8?pid=ImgDet&w=549&h=366&rs=1" alt="No Image" />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon fa-solid fa-user"></i>
                        </label>
                        <input type="file" id="fileInput" style={{ display: "none" }} />
                    </div>
                    <label > Username </label>
                <input type="text" placeholder="Enter Your Name" />
                <label > Email </label>
                <input type="Email" placeholder="Enter Your Email" />
                <label > Password </label>
                <input type="Password" placeholder="Enter Your Password" />
               <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
 
    )
}
