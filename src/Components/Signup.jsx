import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import Login from './Login';

  export default function Signup() {
  const[name, setName]=useState("")
  const[email, setEmail]=useState("")
  const[password, setPassword]=useState("")

  const handleSubmit=()=>{
    const payload={
      name,
      email,
      password
    }
    fetch("http://localhost:4500/users/register",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(payload)
    }).then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
    setName("")
    setEmail("")
    setPassword("")
  }

  return (
    <div>
      <section className="createAccountBody">
        <div >
          <div >
            <div >
              <div >
                <div >
                  <div className="maincreateBody" >
                    <h2 className="createAccount">Create an account</h2>

                    <form>
                      <div>
                        <input className="name"
                          type="text"
                          name="username"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          id="form3Example1cg" 
                        />
                        <label className="yourName" for="form3Example1cg">
                          Your Name
                        </label>
                      </div>
                        <br/>
                      <div>
                        <input  className="name"
                          type="email"
                          name="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          id="form3Example3cg"
                        />
                        <label  className="yourName" for="form3Example3cg">
                          Your Email
                        </label>
                      </div>

                      <br/>
                      
                      <div>
                        <input
                          type="password"
                          name="pass"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          id="form3Example4cg"
                          className="name"
                        />
                        <label  className="yourName" for="form3Example4cg">
                          Password
                        </label>
                      </div>

                      <div className="registerNow">
                        <button
                          type="button"
                          className="register"
                          onClick={handleSubmit}>
                          Register
                        </button>
                      </div>

                      <p className="already">
                        Have already an account?{" "}
                        <Link to="/login">Login here</Link>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

