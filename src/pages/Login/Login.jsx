import React, { useState } from "react";
import './Login.css';
import logo from '../../assets/logo.png';
import { login, signup } from "../../firebase";
import spin from "../../assets/netflix_spinner.gif"

const Login = () =>{

    const [signState, setSignState] = useState("Sign In");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const user_auth = async(event)=>{
        event.preventDefault();
        setLoading(true);
        if(signState==="Sign In"){
            await login(email,password);
        }
        else{
            await signup(name,email,password);
        }
        setLoading(false);
    }
    
    return(
    loading?<div className="login-spin"><img src={spin} alt=""/></div>:
    <div className="login">
        <img src={logo} className="login-logo" alt=""/>
        <div className="login-form">
            <h1>{signState}</h1>
            <form>
                {signState==="Sign Up"?<input value={name} onChange={(eve)=>{setName(eve.target.value)}} type="text" placeholder="Username"/>:<></>}
                <input value={email} onChange={(eve)=>{setEmail(eve.target.value)}} type="email" placeholder={signState==="Sign Up"?"E-mail":"E-mail"}/>
                <input value={password} onChange={(eve)=>{setPassword(eve.target.value)}} type="password" placeholder="Password"/>
                {signState==="Sign Up"?<input type="password" placeholder="Confirm Password"/>:<></>}
                <button onClick={user_auth} type="submit">{signState}</button>
                {signState==="Sign In"?<div className="form-help">
                    <div className="remember">
                        <input type="checkbox"/>
                        <label htmlFor="">Remember Me</label>
                    </div>
                    <a href="/SignUp">Need Help?</a>
                    </div>:<></>
                }
            </form>
            <div className="form-switch"> 
                {signState==="Sign Up"?<p>Already have account? <span onClick={()=>{setSignState("Sign In")}}>Sign In Now</span></p>:<p>New to Netflix? <span onClick={()=>{setSignState("Sign Up")}}>Sign Up Now</span></p>}
            </div>
        </div>
    </div>
    )
}

export default Login;