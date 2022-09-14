import{Link} from "react-router-dom";
import "./login.css"

export default function Login() {
  return (
    <div className="login">
        <span className="loginTitle"><b>Login</b></span>
<form className="loginForm">
    <label ><b>Email</b></label>
    <input type="text"  className="loginInput" placeholder="Enter your Name..." />
    <label ><b>Password</b></label>
    <input type="password"  className="loginInput" placeholder="Enter your password..." />
<button className="loginButton">Login</button>
</form>
<button className="RegisterLoginButton">
<Link className="link" to ="/register">REGISTER</Link>
</button>
</div>
   
  )
}
