import React, { useEffect, useState, Fragment } from 'react'
// import { getPost } from '../helpers/getPost';
import Formulario from './Formulario';
import './styled.css';

export const Post = () => {

    const [posts, guardarPosts] = useState([]);

    const getPost = async() => {
        const res = await fetch(`http://127.0.0.1:8000/api/`);
        const response = await res.json();
        console.log(response);
        guardarPosts(response);
    }

    useEffect(()=>{
        getPost();
    },[])
    return (
      <Fragment>
        <div className="row">
          <div className="col col-5">
            <Formulario />
          </div>
          <div className="col col-7">
            {posts.map((post) => (
              <div className="post" key={post.id}>
                <h5>{post.title}</h5>
                <p>{post.content}</p>
              </div>
            ))}
          </div>
        </div>
      </Fragment>
    );
}
