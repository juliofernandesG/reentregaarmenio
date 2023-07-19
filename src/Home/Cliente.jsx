import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const Cliente = ({ onAddCliente }) => {
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const novoCliente = {
      nome,
      endereco,
      email,
      telefone,
    };
    onAddCliente(novoCliente);
    setNome('');
    setEndereco('');
    setEmail('');
    setTelefone('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField label="Nome" value={nome} onChange={(e) => setNome(e.target.value)} fullWidth />
      <TextField label="Endereço" value={endereco} onChange={(e) => setEndereco(e.target.value)} fullWidth />
      <TextField label="E-mail" type="email" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth />
      <TextField label="Telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} fullWidth />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Cadastrar Cliente
      </Button>
    </form>
  );
};

export default Cliente;
