import React from 'react';
import img4 from '../../Img/pexels-music.jpeg';
import './Post.css';

export default function Post() {
  return (
    <div className="post">
        <img src={img4} alt="" className="postImg" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">The Evolution of Music.</span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
        <div className="postDesc">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Corporis maxime asperiores eveniet dignissimos impedit. 
                Dolorum, quidem ipsa! Quis neque unde tenetur ipsum esse 
                accusamus modi cumque harum earum ipsam expedita eos distinctio 
                inventore minus, labore dolorum quidem architecto sequi sapiente 
                accusantium sed molestias dicta. Lorem ipsum dolor sit amet 
                consectetur adipisicing elit. Voluptates, officia.
            </p>
        </div>
    </div>
  )
}
