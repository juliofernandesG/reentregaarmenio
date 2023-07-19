import React from 'react';
import { TextField, Typography, Grid } from '@mui/material';

const Cotacao = ({ descricao, quantidade, precoUnitario, precoTotal, validade, condicoesPagamento, informacoesFornecedor }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6">Cotação</Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField label="Descrição do item ou serviço" value={descricao} fullWidth />
      </Grid>
      <Grid item xs={6}>
        <TextField label="Quantidade" value={quantidade} fullWidth />
      </Grid>
      <Grid item xs={6}>
        <TextField label="Preço unitário" value={precoUnitario} fullWidth />
      </Grid>
      <Grid item xs={6}>
        <TextField label="Preço total" value={precoTotal} fullWidth />
      </Grid>
      <Grid item xs={6}>
        <TextField label="Validade da cotação" value={validade} fullWidth />
      </Grid>
      <Grid item xs={12}>
        <TextField label="Condições de pagamento" value={condicoesPagamento} fullWidth multiline />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">Informações do Fornecedor</Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField label="Nome da empresa" value={informacoesFornecedor.nomeEmpresa} fullWidth />
      </Grid>
      <Grid item xs={12}>
        <TextField label="Endereço" value={informacoesFornecedor.endereco} fullWidth />
      </Grid>
      <Grid item xs={12}>
        <TextField label="Informações de contato" value={informacoesFornecedor.informacoesContato} fullWidth multiline />
      </Grid>
    </Grid>
  );
};

export default Cotacao;
