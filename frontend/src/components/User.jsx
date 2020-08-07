import React, { useState } from 'react';
import { useEffect } from 'react';

const Users = () => {
  const [titulo, guardarTitulo] = useState("");
  const [texto, guardarTexto] = useState("");

  const inputTitulo = (e) => {
    guardarTitulo(e.target.value);
  };
  const inputTexto = (e) => {
    guardarTexto(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("enviando");
  }

  const getUsers = async() => {
        const res = await fetch('https://sinca.mma.gob.cl/index.php/json/listadomapa2k19/');
        const response = await res.json();
        console.log(response);
  }

  useEffect(()=>{
      getUsers();
  },[])
  return (
    <div className="row">
      <div className="col-md-4">
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
      </div>
      <div className="col md-8"></div>
    </div>
  );
};
 
export default Users;