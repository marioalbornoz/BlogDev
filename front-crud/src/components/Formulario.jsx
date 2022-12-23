import React, {  } from 'react';

const API = process.env.REACT_APP_API;


const Formulario = ({
  guardarPosts,
  ip,
  bodega,
  name,
  guardarIP,
  guardarName,
  guardarBodega,

  editando,
  setEditando,
  idpost,
}) => {
  const inputIP = (e) => {
    guardarIP(e.target.value);
  };
  const inputName = (e) => {
    guardarName(e.target.value);
  };
  const inputBodega = (e) => {
    guardarBodega(e.target.value);
  }
  const getPost = async () => {
    const res = await fetch(`${API}`);
    const {data} = await res.json();
    console.log(data);
    guardarPosts(data);
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
          name: name,
          warehouse:bodega,
          ip: ip,
        }),
      });
      const data = await res.json();
      
      console.log(data);
    }
    else {
      const res = await fetch(`${API}/${idpost}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          warehouse:bodega,
          ip: ip,
        }),
      });
      const data = await res.json();
      console.log(data);
      setEditando(false);
    }
    
    getPost();
    guardarIP("");
    guardarName("");
  };

  return (
    <form onSubmit={handleSubmit} className="card card-body">
      <input
        type="text"
        name=""
        onChange={inputIP}
        value={ip}
        placeholder="IP de la impresora"
        className="form-control"
        autoFocus
        required
      />
      <hr />
      <input
        type="text"
        name=""
        onChange={inputBodega}
        value={bodega}
        placeholder="ingrese bodega aqui.."
        className="form-control"
        autoFocus
        required
      />
      <hr />
      <textarea
        type="text"
        name=""
        onChange={inputName}
        value={name}
        placeholder="ingrese nombre de la impresora"

        className="form-control mb-3"
      ></textarea>
      {editando ? (
        <button className="btn btn-danger btn-block">Editar/Listo</button>
      ) : (
        <button className="btn btn-primary btn-block">Guardar</button>
      )}
    </form>
  );
};
 
export default Formulario;