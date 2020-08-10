import React, { useState } from 'react';

const API = process.env.REACT_APP_API;


const Formulario = ({guardarPosts}) => {
  const [titulo, guardarTitulo] = useState("");
  const [texto, guardarTexto] = useState("");

  const inputTitulo = (e) => {
    guardarTitulo(e.target.value);
  };
  const inputTexto = (e) => {
    guardarTexto(e.target.value);
  };
  const getPost = async () => {
    const res = await fetch(`http://127.0.0.1:8000/api/`);
    const response = await res.json();
    console.log(response);
    guardarPosts(response);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const res = await fetch(`${API}`, {
      method: "POST",
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        title:titulo,
        content: texto,
      }),
    });
    const data = await res.json();
    console.log('====================================');
    console.log(data);
    console.log('====================================');
    getPost();
    guardarTitulo("");
    guardarTexto("");
  }

 
  return (

        <form onSubmit={handleSubmit} className="card card-body">
          <input
            type="text"
            name=""
            onChange={inputTitulo}
            value={titulo}
            placeholder="ingrese titulo aqui.."
            className="form-control"
            autoFocus
          />
          <hr/>
           <textarea
            type="text"
            name=""
            onChange={inputTexto}
            value={texto}
            placeholder="ingrese texto aqui.."
            className="form-control"
            >
            </textarea>
            <button className="btn btn-primary btn-block">Guardar</button>
        </form>
  );
};
 
export default Formulario;