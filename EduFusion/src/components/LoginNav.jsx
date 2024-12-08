import React from "react";
import "../components/LoginNav.css";

function LoginNav() {
  return (
    <>
    <div className="LoginNav">
      <img src="/logo.png" alt="Logo" />
      <h1 style={{ color: "blue" }}>Edu</h1><h1 className="fusion">Fusion</h1>
      <p>Transforming digital education</p>
    </div>

    <form action="" method="">
      <h1>Login</h1>
      <input type="text" placeholder="Username"></input><br/><br/><br/>
      <input type="password" placeholder="Password"></input><br/><br/><br/>
      <p>Forgot Password?</p><br></br>
      <button type="submit">Login</button>
    </form>
    <div className="img2">
    <img src="/login.png" alt="Login" />
    </div>
    </>
  );
}

export default LoginNav;
