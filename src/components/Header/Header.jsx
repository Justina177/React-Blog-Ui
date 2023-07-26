import React from 'react';
import './Header.css';
import img2 from "../../Img/pexels-errin-casano-2356045.jpg";

export default function Header() {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className="headerTitleSm">React & Node</span>
            <span className="headerTitleLg">Blog</span>
        </div>
        <img src={img2} alt="" className="headerImg" />

    </div>
  )
}
