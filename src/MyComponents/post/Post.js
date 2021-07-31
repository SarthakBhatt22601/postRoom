import React from 'react';
import './Post.css';
import image from '../guest.png';

export const Post = ({post, onDelete}) => {
    return (
        <div className="item">
            <span className="close" onClick={()=>{onDelete(post)}}> &times; </span>
            <p> <img style={{width:'2.2vw',height:'2.2vw',borderRadius:'50%'}} src={image} alt="Dp" /> <span className="name"> Guest </span></p>
            <hr />
            <p style={{fontSize:'2vmin'}}>{post.content}</p>
            {post.ig !== "" ? <img src={post.ig} alt="gif" /> : null }
        </div>
    )
}
