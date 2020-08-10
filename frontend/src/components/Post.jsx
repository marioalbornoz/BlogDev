import React, {useState, Fragment, useEffect } from 'react'
// import { getPost } from '../helpers/getPost';
import Formulario from './Formulario';
import './styled.css';
// import { getPost } from "../helpers/getPost";

const API = process.env.REACT_APP_API;

export const Post = () => {

    const [posts, guardarPosts] = useState([]);
    const [titulo, guardarTitulo] = useState("");
    const [texto, guardarTexto] = useState("");
    const [editando, setEditando] = useState(false);
    const [idpost, setID] = useState('');

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

    const handleEdit = async(id) => {
      const res = await fetch(`${API}${id}`)
      const data = await res.json();

      // State que es usado al momento de editar
      setEditando(true);
      setID(id)
      
      // Se llena el formulario con los datos tomados
      guardarTitulo(data.title);
      guardarTexto(data.content)
    }
    
    return (
      <Fragment>
        <div className="row">
          <div className="col col-4">
            <Formulario
              titulo={titulo}
              guardarTitulo={guardarTitulo}
              texto ={texto}
              guardarTexto = {guardarTexto}
              guardarPosts={guardarPosts}
              editando = {editando}
              idpost = {idpost}
            />
          </div>
          <div className="col col-8 posteos">
            {posts.map((post) => (
              <div className="card w-45 m-2" key={post.id}>
                <div className="card-header">
                  <h5>{post.title}</h5>{" "}
                  <button
                    type="submit"
                    onClick={() => handleDelete(post.id)}
                    className="btn btn-ligth"
                  >
                    x
                  </button>
                </div>
                <div
                  className="card-body"
                  onDoubleClick={() => handleEdit(post.id)}
                >
                  <p>{post.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Fragment>
    );
}