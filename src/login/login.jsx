import React from 'react'
import './login.scss'
import { useState } from 'react';
import { useContext } from 'react';
import { tocken } from '../App';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { isdarkmode } from '../home/home/home1';

function Login() {
  const { token, settocken } = useContext(tocken)
  let name, value;
  const navigat = useNavigate();
  let [user, setuser] = useState({
    Email: "",
    Password: "",
  });
  const getUserData = (e) => {
    name = e.target.name;
    value = e.target.value;
    setuser({ ...user, [name]: value });
  };
  isdarkmode()

  const postdata = async () => {
    if (user.Email && user.Password) {
      axios.post("/login", { email: user.Email, password: user.Password },
        {
          header: {
            "Content-Type": "application/json"
          }
        }).then(res => {
          settocken(()=>res.data.accsestoken)
          navigat("/webapp1/")
        })
    }
  }
  return (
    <div className='maincontanerlogin'>
      <div className='logincenterall'>
        <div className='maincentervontainer'><input type='string' name="Email" required onChange={getUserData} value={user.Email} placeholder='Email' /></div>
        <div className='maincentervontainer'><input type='password' name='Password' required onChange={getUserData} value={user.Password} placeholder='Password' /></div>
        <div><button onClick={() => postdata()}>Login</button><button onClick={() => navigat("/register")}>Register</button></div>
      </div></div>
  )
}

export default Login;