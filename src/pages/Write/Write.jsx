import React from 'react';
import './Write.css';
import img1 from '../../Img/pexels-errin-casano-2356045.jpg';
export default function Write() {
  return (
    <div className="write">
      <img src={img1} alt="" className="writeImg" />
        <div className="writeForm">
            <div className="writeFormGroup">
                <label htmlForm="fileInput">
                <i className="writeIcon fa-solid fa-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}} />
                <input 
                  type="text" 
                  placeholder="Title" 
                  className="writeInput" 
                  autoFocus={true} 
                />
            </div>
            <div className="writeFormGroup">
              <textarea 
                placeholder="Tell Your Story..." 
                type="text" 
                className="writeInput writeText"
              />
            </div>
            <button className="writeSubmit">Publish</button>
        </div>
    </div>
  )
}
