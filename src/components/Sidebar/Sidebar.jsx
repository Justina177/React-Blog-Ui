import React from 'react';
import './Sidebar.css';
import img3 from '../../Img/pexels-bhoopal-m-1446161.jpg';

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img src={img3} alt="" />
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Obcaecati repudiandae odit quaerat hic perferendis reiciendis 
        
            </p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItems">Life</li>
                <li className="sidebarListItems">Music</li>
                <li className="sidebarListItems">Style</li>
                <li className="sidebarListItems">Sport</li>
                <li className="sidebarListItems">Tech</li>
                <li className="sidebarListItems">Cinema</li>
            </ul>
        </div>

        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-square-facebook"></i>
          <i className="sidebarIcon fa-brands fa-square-twitter"></i>
          <i className="sidebarIcon fa-brands fa-square-instagram"></i>
          <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
            </div>
        </div>


    </div>
  )
}
