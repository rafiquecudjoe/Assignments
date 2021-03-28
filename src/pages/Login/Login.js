import React, { useState } from "react";
import pic from "./img/login.svg";
import pic3 from "./img/avatar.svg";
import pic4 from "./img/login-green2.svg";
import "./login.css";
import Button from "../../components/appcomponents/button"
import InputField from "../../components/appcomponents/InputField"


function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  

  function Updateusername(e) {
    setUsername(e.target.value);
  }

  function Updatepassword(e) {
    setPassword(e.target.value);
  }

  function submit(e) {
    e.preventDefault();

    if (username == "allen" && password == "test") {
      //implement to to dashboard
    } else {
      //implement go to login page
    }
  }

 
  return (
    <>
      <img className="wave" src={pic4}></img>
      <div className="container">
        <div className="img"></div>
        <div className="login-content">
          <form className="form-control">
            <img src={pic3} />
            <h2 className="ttile">Welcome</h2>

            {/* Username section */}
            <div className="input-div one">
              <div className="div">
                <InputField
                  // value={username}
                  placeholder="Username"
                  type="text"
                  className="input"
                  onChange={Updateusername}
                />
              </div>
            </div>

            {/* Password Section */}
            <div className="input-div pass">
              <div className="div">
                <InputField
                  placeholder="Password"
                  type="password"
                  className="input"
                  onChange={Updatepassword}
                  // value={password}
                />
              </div>
            </div>

            <a href="#">Forgot Password?</a>

            <Button className=""
              // onClick={() => gotoPage("/Signup")}
              text="Login" />
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
