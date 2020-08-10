import React, { useState } from 'react';




const Formulario = () => {
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