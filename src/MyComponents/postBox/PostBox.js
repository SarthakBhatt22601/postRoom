import React from 'react';
import './PostBox.css';
import {Post} from '../post/Post';

export default function PostBox(props){
    return (
        <div>
            <div className="postBox">
                {props.posts.length === 0 
                    ? <h2 style={{textAlign:'center',color:'black',fontStyle:'oblique'}}>"You've gotta share what's going on in your mind"</h2>
                    : [...props.posts].reverse().map((post)=>{
                    return (<Post post={post} key={post.sno} onDelete={props.onDelete} />)
                })}
            </div>
        </div>
    )
}
