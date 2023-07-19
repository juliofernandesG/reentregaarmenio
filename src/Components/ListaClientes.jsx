import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Button, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';

const ListaClientes = ({ clientes, onEditCliente, onDeleteCliente }) => {
  return (
    <List>
      {clientes.map((cliente, index) => (
        <ListItem key={index}>
          <ListItemText primary={cliente.nome} secondary={cliente.email} />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="edit" onClick={() => onEditCliente(cliente)}>
              <Edit />
            </IconButton>
            <IconButton edge="end" aria-label="delete" onClick={() => onDeleteCliente(cliente)}>
              <Delete />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

export default ListaClientes;
