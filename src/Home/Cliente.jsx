import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import db from '../Firebase'; 

import ListaClientes from '../Components/ListaClientes';

const Cliente = () => {
  const [clientes, setClientes] = useState([]);
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  useEffect(() => {
    const unsubscribe = db.collection('clientes').onSnapshot((snapshot) => {
      const clientesData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setClientes(clientesData);
    });

    return () => unsubscribe();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const novoCliente = {
      nome,
      endereco,
      email,
      telefone,
    };

  
    db.collection('clientes').add(novoCliente);

    setNome('');
    setEndereco('');
    setEmail('');
    setTelefone('');
  };

  const handleEditCliente = (cliente) => {

    console.log('Editar cliente:', cliente);
  };

  const handleDeleteCliente = (cliente) => {
  
    console.log('Excluir cliente:', cliente);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <form onSubmit={handleSubmit}>
          <TextField label="Nome" value={nome} onChange={(e) => setNome(e.target.value)} fullWidth />
          <TextField label="Endereço" value={endereco} onChange={(e) => setEndereco(e.target.value)} fullWidth />
          <TextField label="E-mail" type="email" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth />
          <TextField label="Telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} fullWidth />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Cadastrar Cliente
          </Button>
        </form>
      </Grid>
      <Grid item xs={6}>
        <ListaClientes clientes={clientes} onEditCliente={handleEditCliente} onDeleteCliente={handleDeleteCliente} />
      </Grid>
    </Grid>
  );
};

export default Cliente;
