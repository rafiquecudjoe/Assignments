import React, { useState } from "react";
import pic from "./img/login.svg";
import pic3 from "./img/avatar.svg";
import pic4 from "./img/authen.svg";
import Mycss from "./login.module.css";
import Button from "../../components/appcomponents/button";
import InputField from "../../components/appcomponents/InputField";

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
      <img className={Mycss.wave} src={pic4}></img>
      <div className={Mycss.container}>
        <div className={Mycss.img}></div>
        <div className={Mycss.login_content}>
          <form className={Mycss.form_control}>
            <img src={pic3} />
            <h2 className={Mycss.title}>Welcome</h2>

            {/* Username section */}
            <div className={Mycss.input_div}>
              <div className={Mycss.divdiv}>
                <InputField
                  placeholder="Username"
                  type="text"
                  className={Mycss.input}
                  onChange={Updateusername}
                />
              </div>
            </div>

            {/* Password Section */}
            <div className={Mycss.input_div}>
              <div className={Mycss.div}>
                <InputField
                  placeholder="Password"
                  type="password"
                  className={Mycss.input}
                  onChange={Updatepassword}
                />
              </div>
            </div>

            <a href="#">Forgot Password?</a>

            <Button
              className=""
              // onClick={() => gotoPage("/Signup")}
              text="Login"
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
