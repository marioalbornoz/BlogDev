import React, {useState, Fragment, useEffect } from 'react'
// import { getPost } from '../helpers/getPost';
import Formulario from './Formulario';
import './styled.css';
// import { getPost } from "../helpers/getPost";

const API = process.env.REACT_APP_API;

export const Post = () => {

    const [posts, guardarPosts] = useState([]);

    useEffect(() => {
      getPost();
    }, []);

    const getPost = async() => {
      const res = await fetch(`${API}`);
      const response = await res.json();
      console.log(response);
      guardarPosts(response);
  }

    const handleDelete = async(id) => {
      await fetch(`${API}${id}`, { method: "DELETE" })
      await getPost();
    }
    
    return (
      <Fragment>
        <div className="row">
          <div className="col col-4">
            <Formulario guardarPosts = {guardarPosts}/>
          </div>
          <div className="col col-8 posteos">
            {posts.map((post) => (
              <div className="card w-45 m-2" key={post.id}>
                <div className="card-header">
                  <h5>{post.title}</h5>{" "}
                  <button type="submit" onClick={()=>handleDelete(post.id)} className="btn btn-ligth">
                    x
                  </button>
                </div>
                <div className="card-body">
                <p>{post.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Fragment>
    );
}
