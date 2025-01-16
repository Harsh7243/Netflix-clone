import React, { useEffect } from "react";
import Home from './pages/Home/Home';
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Login from './pages/Login/Login'
import Player from "./pages/Player/Player";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () =>{

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(()=>{
    onAuthStateChanged(auth, async(user)=>{
      if(user){
        const cur_path = location.pathname;
        console.log("Logged In");
        if(cur_path==="/Login")
        navigate('/');
      }else{
        console.log("Logged Out");
        navigate('/Login');
      }
    });
  },[navigate, location]);

  return(
  <div className="relative">
    <ToastContainer theme="dark"/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Login" element={<Login />}/>
      <Route path='/player/:id' element={<Player/>}/>
    </Routes>
  </div>
  )
}

export default App;