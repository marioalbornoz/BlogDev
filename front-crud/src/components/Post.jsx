import React, { useState, Fragment, useEffect } from "react";
// import { getPost } from '../helpers/getPost';
import Formulario from "./Formulario";
import "./styled.css";
import Alert from "./Alert";
import Card from "./Card";
// import { getPost } from "../helpers/getPost";

const API = process.env.REACT_APP_API;

export const Post = () => {
  const [posts, guardarPosts] = useState([]);
  const [ip, guardarIP] = useState("");
  const [name, guardarName] = useState("");
  const [bodega, guardarBodega] = useState("");

  const [editando, setEditando] = useState(false);
  const [idpost, setID] = useState("");

  const [alertedit, mostraralertEdit] = useState(false);

  useEffect(() => {
    getPost();
  }, []);

  const getPost = async () => {
    const res = await fetch(`${API}`);
    const {data} = await res.json();
    console.log(data);
    guardarPosts(data);
   
  };

  const handleDelete = async (id) => {
    mostraralertEdit(false);
    await fetch(`${API}/${id}`, { method: "DELETE" });
    setEditando(false);
    await getPost();
  };

  const handleEdit = async (id) => {
    mostraralertEdit(false);
    const res = await fetch(`${API}/${id}`);
    const {data} = await res.json();

    // State que es usado al momento de editar
    setEditando(true);
    setID(id);

    // Se llena el formulario con los datos tomados
    guardarIP(data.ip);
    guardarBodega(data.warehouse)
    guardarName(data.name);
  };
  const handleAlertEdit = () => {
    mostraralertEdit(true);
  };

  return (
    <Fragment>
      <div className="row">
        <div className="col col-lg-4 col-md-5 justify-content-md-center col-xs-12">
          <Formulario
            ip={ip}
            guardarIP={guardarIP}
            name={name}
            bodega={bodega}
            guardarBodega={guardarBodega}
            
            guardarName={guardarName}
            guardarPosts={guardarPosts}
            editando={editando}
            setEditando={setEditando}
            idpost={idpost}
          />
          {alertedit ? (
            <Alert
              message="Presiona dos veces la tarjeta para editar"
              mostraralertEdit={mostraralertEdit}
            />
          ) : null}
        </div>
        <div className="col col-lg-8 col-md-7 col-xs-12 posteos">
          {posts.map((post) => (
            <Card
              post={post}
              key={post._id}
              handleAlertEdit={handleAlertEdit}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
};
