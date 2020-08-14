import React, {  } from 'react';

const API = process.env.REACT_APP_API;


const Formulario = ({
  guardarPosts,
  titulo,
  texto,
  guardarTitulo,
  guardarTexto,
  editando,
  setEditando,
  idpost,
}) => {
  const inputTitulo = (e) => {
    guardarTitulo(e.target.value);
  };
  const inputTexto = (e) => {
    guardarTexto(e.target.value);
  };
  const getPost = async () => {
    const res = await fetch(`${API}`);
    const response = await res.json();
    console.log(response);
    guardarPosts(response);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!editando){
      const res = await fetch(`${API}`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          title: titulo,
          content: texto,
        }),
      });
      const data = await res.json();
      
      console.log(data);
    }
    else {
      const res = await fetch(`${API}${idpost}/`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          title: titulo,
          content: texto,
        }),
      });
      const data = await res.json();
      console.log(data);
      setEditando(false);
    }
    
    getPost();
    guardarTitulo("");
    guardarTexto("");
  };

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
      <hr />
      <textarea
        type="text"
        name=""
        onChange={inputTexto}
        value={texto}
        placeholder="ingrese texto aqui.."
        className="form-control mb-3"
      ></textarea>
      {
        editando? <button className="btn btn-danger btn-block">Editar/Listo</button>
        : <button className="btn btn-primary btn-block">Guardar</button>
      }
      
    </form>
  );
};
 
export default Formulario;