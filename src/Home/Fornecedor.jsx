import React from 'react';
import { TextField, Typography, Grid } from '@mui/material';

const Fornecedor = ({ 
  nomeEmpresa,
  endereco,
  telefone,
  email,
  descricaoProdutosServicos,
  precosCondicoesComerciais,
  referenciasExperiencia,
  certificacoesLicencas,
  condicoesContratacao,
  politicasQualidadeGarantia,
  politicasSuporteCliente,
  capacidadeProducaoFornecimento
}) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6">Informações do Fornecedor</Typography>
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
      <Grid item xs={12}>
        <TextField label="Preços e condições comerciais" value={precosCondicoesComerciais} fullWidth multiline />
      </Grid>
      <Grid item xs={12}>
        <TextField label="Referências e experiência" value={referenciasExperiencia} fullWidth multiline />
      </Grid>
      <Grid item xs={12}>
        <TextField label="Certificações e licenças" value={certificacoesLicencas} fullWidth multiline />
      </Grid>
      <Grid item xs={12}>
        <TextField label="Condições de contratação" value={condicoesContratacao} fullWidth multiline />
      </Grid>
      <Grid item xs={12}>
        <TextField label="Políticas de qualidade e garantia" value={politicasQualidadeGarantia} fullWidth multiline />
      </Grid>
      <Grid item xs={12}>
        <TextField label="Políticas de suporte ao cliente" value={politicasSuporteCliente} fullWidth multiline />
      </Grid>
      <Grid item xs={12}>
        <TextField label="Capacidade de produção ou fornecimento" value={capacidadeProducaoFornecimento} fullWidth multiline />
      </Grid>
    </Grid>
  );
};

export default Fornecedor;
