import React from 'react';
import { Grid, Paper, Typography, IconButton, Box } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const exames = [
  { id: 1, nome: 'Exame 01', preco: 'R$ 00,00' },
  { id: 2, nome: 'Exame 02', preco: 'R$ 00,00' },
  { id: 3, nome: 'Exame 03', preco: 'R$ 00,00' },
  { id: 4, nome: 'Exame 04', preco: 'R$ 00,00' },
  { id: 5, nome: 'Exame 05', preco: 'R$ 00,00' },
  { id: 6, nome: 'Exame 06', preco: 'R$ 00,00' },
  // ... outros exames
];

const Item = ({ nome, preco }) => (
  <Grid item xs={6} sm={3} md={3}>
    <Box display="flex" justifyContent="space-between" alignItems="center" bgcolor="background.paper" p={2}>
      <Typography variant="body1">{nome}</Typography>
      <Box display="flex" alignItems="center">
        <Typography variant="body1" sx={{ minWidth: '80px' }}>{preco}</Typography>
        <IconButton aria-label="adicionar exame">
          <AddCircleIcon sx={{ color: 'green' }} />
        </IconButton>
      </Box>
    </Box>
  </Grid>
);

export default function ExamesTable() {
  return (
    <Paper sx={{ padding: 2, backgroundColor: '#e0e0e0' }} elevation={0}>
      <Typography variant="h6" sx={{ pl: 2, mb: 2, fontWeight: 'bold', color: 'green' }}>
        Exames
      </Typography>
      <Grid container spacing={2}>
        {exames.map((exame) => (
          <Item key={exame.id} nome={exame.nome} preco={exame.preco} />
        ))}
      </Grid>
    </Paper>
  );
}
