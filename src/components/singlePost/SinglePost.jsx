import React from 'react';
import './SinglePost.css'
import img5 from '../../Img/bl2.png'

export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img src={img5} alt="" className="singlePostImg" />
            <h1 className="singlePostTitle">
                Top Exercises to Boost Your Cardiovascular Fitness
            <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
            </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: <b>Tina</b></span>
                <span className="singlePostDate">1 hour Ago</span>
            </div>
            <p className="singlePostDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum illum 
                praesentium quae laudantium porro, est blanditiis repellendus commodi, 
                tempore alias unde pariatur. Soluta similique, animi perferendis error 
                repudiandae iusto enim, atque inventore aut, ipsum consequatur. Eveniet, 
                dolores dolorem explicabo maxime eius dignissimos, quis voluptate commodi, 
                rerum molestiae aliquid iure ipsa. Nobis quia quasi exercitationem officiis 
                placeat incidunt laborum impedit amet ullam, qui harum quod. Delectus culpa 
                unde voluptates dolore quidem blanditiis quo quaerat, architecto, necessitatibus 
                reiciendis autem doloribus placeat facere deleniti a quis? Rem corporis sunt 
                tenetur animi perspiciatis quisquam a dolore sed aut rerum odio consectetur 
                repellendus maiores reprehenderit porro soluta ex fugit aperiam incidunt, 
                eaque voluptates qui adipisci. Sint, cum ea nobis quas ducimus quod. Amet, 
                eligendi eaque. Quaerat facilis autem quae cumque odit, reiciendis dolor! 
                Deserunt et ad odio soluta delectus saepe, vero doloremque ut ipsum corporis 
                voluptates! Nobis, sequi quia. Animi laudantium et reiciendis voluptate pariatur!
            </p>
        </div>
    </div>
  )
}
