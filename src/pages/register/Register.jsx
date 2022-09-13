import "./register.css"

export default function Register() {
    return (
        <div className="Register">
            <div className="form">
                <span className="RegisterTitle"><b>Register</b></span>
                <form className="RegisterForm">
                    <label><b> Username </b> </label>
                    <input type="text" className="RegisterInput" placeholder="Enter your username..." />
                    <label><b> Email</b> </label>
                    <input type="text" className="RegisterInput" placeholder="Enter your Email..." />
                    <label> <b>Password </b></label>
                    <input type="text" className="RegisterInput" placeholder="Enter your Password..." />
                    <button className="RegisterButton"><b>Register</b></button>
                </form>
                <button className="RegisterRegisterButton">Login</button>
            </div>
        </div>
    );
}
