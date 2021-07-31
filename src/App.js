import './App.css';
import Header from './MyComponents/header/Header';
import Add from './MyComponents/add/Add';
import PostBox from './MyComponents/postBox/PostBox';
import React, { useEffect, useState } from 'react';

function App() {

  let initPost;
  if(localStorage.getItem("posts") === null){
    initPost = [];
  }
  else{
    initPost = JSON.parse(localStorage.getItem("posts"));
  }

  const [posts, setPosts] = useState(initPost);

  const addPost = (content,ig) => {
    let sno;
    if(posts.length === 0){
      sno = 1;
    }
    else{
      sno = posts[posts.length - 1].sno + 1;
    }
    const post = {
      sno: sno,
      content: content,
      ig: ig
    };
    setPosts([...posts,post]);   
  }

  const onDelete = (post)=>{
    setPosts(posts.filter((e)=>{
      return e!==post;
    }))
  }

  useEffect(() => {
      localStorage.setItem("posts",JSON.stringify(posts));
  }, [posts])

  return (
    <div>
      <Header />
      <Add addPost={addPost} />
      <PostBox posts={posts} onDelete={onDelete} />
    </div>
  );
}

export default App;
