import React, {useState} from 'react';
import './AddPost.css';
import image from '../guest.png';
import AddGif from '../addGif/AddGif';

export default function AddPost(props) {
    const [content, setContent] = useState("");
    const [ig, setIg] = useState("");

    const submit = (e) =>{
        e.preventDefault();
        if(!content)
            alert("You can't make empty post");
        else
            props.addPost(content,ig);   
        props.togglePop();    
    }

    const  handleClick = () => {
        props.togglePop();
    };
    
    return (
    <div className="modal_content">
        <span className="close" onClick={handleClick}> &times; </span>
        <form onSubmit={submit}>
            <p style={{fontSize:'1vmax',textAlign:'center',fontWeight:'bold'}}>Create post</p>
            <hr />
            <p><img style={{width:'2.2vw',height:'2.2vw',borderRadius:'50%'}} src={image} alt="Dp" /> <span className="name"> Guest </span></p>
            <textarea id="content" value={content} onChange={(e)=>setContent(e.target.value)} placeholder="Hey, What's on your mind, Guest?" cols="46" rows="8"></textarea>
            {ig !== "" ? <img src={ig} alt="gif" /> : null }
            {props.gifPop ? <AddGif toggleGif={props.toggleGif} ig={ig} setIg={setIg} /> : null}
            <div className="gif">
                <input type="button" value="gif" onClick={props.toggleGif} />
            </div> 
            <div className="submit">
                <input type="submit" value="Post" />
            </div>
        </form>
    </div>
    );
}