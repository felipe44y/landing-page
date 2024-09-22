import "./form.css";
import React, { useState } from "react";

function Form() {
  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [denuncia, setDenuncia] = useState("");

  return (
    <form className="area-form">
      <div className="inputs-area">
        <label htmlFor="nome">Nome:</label>
        <input
          placeholder="Nome"
          type="text"
          id="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
      </div>

      <div className="inputs-area">
        <label htmlFor="endereco">Endereço do foco:</label>
        <input
          placeholder="Endereço"
          type="text"
          id="endereco"
          value={endereco}
          onChange={(e) => setEndereco(e.target.value)}
          required
        />
      </div>

      <div className="inputs-area">
        <label htmlFor="situacao">Descreva a situação:</label>
        <textarea
          placeholder="Descrição"
          id="situacao"
          value={denuncia}
          onChange={(e) => setDenuncia(e.target.value)}
          required
        />
        <button className="btn-enviar">ENVIAR</button>
      </div>
    </form>
  );
}

export default Form;
