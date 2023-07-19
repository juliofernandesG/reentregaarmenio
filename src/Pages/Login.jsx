import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const ClienteForm = ({ onAddCliente }) => {
  const initialState = {
    nome: '',
    endereco: '',
    email: '',
    telefone: '',
  };

  const [cliente, setCliente] = useState(initialState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCliente((prevCliente) => ({
      ...prevCliente,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddCliente(cliente);
    setCliente(initialState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Nome"
        name="nome"
        value={cliente.nome}
        onChange={handleInputChange}
        fullWidth
      />
      <TextField
        label="Endereço"
        name="endereco"
        value={cliente.endereco}
        onChange={handleInputChange}
        fullWidth
      />
      <TextField
        label="E-mail"
        type="email"
        name="email"
        value={cliente.email}
        onChange={handleInputChange}
        fullWidth
      />
      <TextField
        label="Telefone"
        name="telefone"
        value={cliente.telefone}
        onChange={handleInputChange}
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Cadastrar Cliente
      </Button>
    </form>
  );
};

export default ClienteForm;
