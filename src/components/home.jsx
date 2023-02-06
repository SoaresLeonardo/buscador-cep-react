import React, { useState } from 'react';
import './homeStyles.css';
import { AiOutlineSearch } from 'react-icons/ai';
import { RiZzzFill } from 'react-icons/ri';
import api from '../services/api';

export default function Home() {
  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});

  async function handleSearch() {
    if (!input) {
      alert('Preencha o cep!');
      return;
    }

    try {
      const response = await api.get(`${input}/json`);
      setCep(response.data);
      setInput('');
    } catch {
      alert('Error');
    }
  }

  return (
    <div className="container">
      <div className="container-header">
        <p>Buscar CEP</p>
      </div>
      <div className="main">
        <div className="container-input">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Insira seu cep..."
          />
          <button type="button" className="buttonSearch" onClick={handleSearch}>
            <AiOutlineSearch />
          </button>
        </div>
        {Object.keys(cep).length > 1 && (
          <div className="result">
            <h2>CEP: {cep.cep}</h2>
            <span>{cep.logradouro}</span>
            <span>Complemento: {cep.complemento}</span>
            <span>{cep.bairro}</span>
            <span>
              {cep.localidade} - {cep.uf}
            </span>
          </div>
        )}
        {Object.keys(cep).length <= 0 && (
          <div className="initial-message">
            <span>
              <RiZzzFill />
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
