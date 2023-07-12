import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import { login } from "../Redux/AuthReducer/action";
import { useDispatch, useSelector } from "react-redux";

    export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isAuth } = useSelector((state) => state.authReducer);
    const token = localStorage.getItem("token");
    // console.log("isAuth", isAuth, token);
  
    useEffect(() => {
      if(isAuth || token) {
        navigate("/today");
      }
    }, [isAuth])
  
    const handleSubmit = () => {
      const payload = {
        email,
        password,
      };
      dispatch(login(payload));
      setEmail("")
      setPassword("")
    };
  
  return (
    <div>
      <section className="login-background">
        <div>
          <div>
            <div>
              <div>
                <div className="mainBody">
                  <h3 className="login">Log in</h3>

                  <div className="inputBox">
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      id="typeEmailX-2"
                      className="email"
                    />
                    <label className="emailInfo"for="typeEmailX-2">
                      Email
                    </label>
                  </div>

                  <div className="inputBox">
                    <input
                      type="password"
                      name="pass"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      id="typePasswordX-2"
                      className="password"
                    />
                    <label className="passwordInfo" for="typePasswordX-2">
                      Password
                    </label>
                  </div>

                  <button className="loginn"type="submit"onClick={handleSubmit} >
                    Login
                  </button>
                  <p className="already">
                        no account?{" "}
                        <Link to="/signup">Register here</Link>
                      </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
