import React from 'react';
import './Topbar.css';
import img1 from '../../Img/f4.jpg'
import { Link } from 'react-router-dom';

export default function Topbar() {
  const user = false;
  return (
    <div className="top">
      <div className="topLeft">
          <i className="topIcon fa-brands fa-square-facebook"></i>
          <i className="topIcon fa-brands fa-square-twitter"></i>
          <i className="topIcon fa-brands fa-square-instagram"></i>
          <i className="topIcon fa-brands fa-square-pinterest"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">HOME</Link>
          </li>
          <li className="topListItem">
          <Link className="link" to="/">ABOUT</Link>
          </li>
          <li className="topListItem">
          <Link className="link" to="/">CONTACT</Link>
          </li>
          <li className="topListItem">
          <Link className="link" to="/write">WRITE</Link>
          </li>
          <li className="topListItem">
          </li>{ user && "LOGOUT" }
        </ul>
      </div>
      <div className="topRight">
        {
        user ? (

          <img src={img1} alt="" className="topimg" />
        ) : ( 
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to ="/login">LOGIN</Link>
            </li>
            <li className="topListItem">
              <Link className="link" to ="/register">REGISTER</Link>
            </li>
          </ul>
        )
        }
          <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>

        
      </div>
    </div>
  )
}
