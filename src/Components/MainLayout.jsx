import React from 'react';
import { makeStyles } from '@mui/styles';
import { Toolbar, Typography } from '@mui/material';
import MenuSuperior from './Menusuperior';
import MenuLateral from './Menulateral';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const MainLayout = () => {
  const classes = useStyles();

  const handleLogout = () => {
    // Implemente a lógica para fazer logout aqui, ou passe a função de logout como prop para o MenuSuperior.
    console.log('Logout realizado');
  };

  return (
    <div className={classes.root}>
      <MenuSuperior onLogout={handleLogout} />
      <MenuLateral />

      {/* Conteúdo principal */}
      <main className={classes.content}>
        <Toolbar />
        {/* Adicione aqui o conteúdo principal da sua aplicação */}
        <Typography paragraph>
          Bem-vindo à sua aplicação! Aqui você pode adicionar seus componentes e páginas.
        </Typography>
      </main>
    </div>
  );
};

export default MainLayout;
