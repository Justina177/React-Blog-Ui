import React from 'react';
import './Login.css'

export default function Login() {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form action="" className="loginForm">
        <label htmlFor="">Email</label>
        <input type="text" placeHolder="Enter your email..." className="loginInput" />
        <label htmlFor="">Password</label>
        <input type="password" placeholder="Enter your password..." className="loginInput" />
        <button className="loginButton">Login</button>
      </form>
      <button className="loginRegisterButton">Register</button>
    </div>
  )
}
