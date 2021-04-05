import React, { useState } from "react";
import Mycss1 from "../Signup/Signup.module.css";
import Button from "../../components/appcomponents/button";
import InputField from "../../components/appcomponents/InputField";
import pic1 from "./img/login-green2.svg";
import pic3 from "../Login/img/avatar.svg";

function Signup() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');



    function UpdateName(e) {
        setName(e.target.value)
    }

    function UpdateEmail(e) {
        setEmail(e.target.value)
    }
    function UpdateUsername(e) {
        setUsername(e.target.value)
    }
    function UpdatePassword(e) {
        setPassword(e.target.value)
    }
    function UpdateConfirmpassword(e) {
        setConfirmpassword(e.target.value)
    }



    function Signup(e) {
        e.preventDefault();
    }





  return (
    <>
      <img className={Mycss1.wave} src={pic1} />
      <div className={Mycss1.container}>
        <div className={Mycss1.img} />
        <div className={Mycss1.login_content}>
          <form className={Mycss1.form_control}>
            <img src={pic3} />
            <h2 className={Mycss1.title}>Welcome</h2>

            {/* Name section */}
            <div className={Mycss1.input_div}>
              <div className={Mycss1.divdiv}>
                <InputField
                  // value={username}
                  placeholder="Name"
                  type="text"
                  className={Mycss1.input}
                    onChange={UpdateName}
                />
              </div>
            </div>

            {/* Email Section */}
            <div className={Mycss1.input_div}>
              <div className={Mycss1.div}>
                <InputField
                  placeholder="Email"
                  type="email"
                  className={Mycss1.input}
                    onChange={UpdateEmail}
                
                />
              </div>
            </div>
            {/* Username Session */}
            <div className={Mycss1.input_div}>
              <div className={Mycss1.div}>
                <InputField
                  placeholder="Username"
                  type="text"
                  className={Mycss1.input}
                    onChange={UpdateUsername}
                
                />
              </div>
            </div>
            {/* Password Session */}
            <div className={Mycss1.input_div}>
              <div className={Mycss1.div}>
                <InputField
                  placeholder="Password"
                  type="password"
                  className={Mycss1.input}
                    onChange={UpdatePassword}
                  
                />
              </div>
            </div>
            {/* Confirm Password Session */}
            <div className={Mycss1.input_div}>
              <div className={Mycss1.div}>
                <InputField
                  placeholder="Confirm Password"
                  type="password"
                  className={Mycss1.input}
                    onChange={UpdateConfirmpassword}
                  // value={password}
                />
              </div>
            </div>

            <a href="#">Forgot Password?</a>

            <Button
              className=""
              // onClick={() => gotoPage("/Signup")}
              text="Signup"
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
