import React from 'react';
import { TextField, Typography, Grid } from '@mui/material';

const Fornecedor = ({ 
  nomeEmpresa,
  endereco,
  telefone,
  email,
  descricaoProdutosServicos
}) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6">Cadastra fornecedor</Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField label="Nome da empresa" value={nomeEmpresa} fullWidth />
      </Grid>
      <Grid item xs={12}>
        <TextField label="Endereço" value={endereco} fullWidth />
      </Grid>
      <Grid item xs={12}>
        <TextField label="Telefone" value={telefone} fullWidth />
      </Grid>
      <Grid item xs={12}>
        <TextField label="E-mail" value={email} fullWidth />
      </Grid>
      <Grid item xs={12}>
        <TextField label="Descrição dos produtos/serviços" value={descricaoProdutosServicos} fullWidth multiline />
      </Grid>

    </Grid>
  );
};

export default Fornecedor;
