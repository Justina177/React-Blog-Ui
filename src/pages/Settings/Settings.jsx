import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import img2 from '../../Img/shoe1.jpg';
import './Settings.css'

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form 
          action="" 
          className="settingsForm">
            <label htmlFor="">Profile Picture</label>
            <div className="settingsPP">
              <img src={img2} alt="" />
              <label htmlFor="fileInput">
                <i className="settingsPPIcon fa-solid fa-user-plus"></i>
              </label>
              <input type="file" id="fileInput" style={{display: "none" }} />
            </div>
            <label htmlFor="">Username</label>
            <input type="text" placeHolder="Tina" />
            <label htmlFor="">Email</label>
            <input type="text" placeholder="jetech@yahoo.com" />
            <label htmlFor="">Password</label>
            <input type="password"  />
           <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  )
}
