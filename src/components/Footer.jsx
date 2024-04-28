'use client';

import React from 'react';
import { Grid, Typography, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const FooterSection = styled(Paper)(({ theme }) => ({
  backgroundColor: '#e0e0e0', // A cor do fundo cinza do seu mockup
  padding: theme.spacing(3, 2),
  marginTop: theme.spacing(4),
  color: '#757575', // A cor do seu texto, se necessário
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(6, 0), // Ajuste o padding conforme necessário para telas maiores
  },
}));

export default function Footer() {
  return (
    <FooterSection component="footer" square variant="outlined">
      <Grid container spacing={4} justifyContent="space-around">
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="subtitle1" color="inherit">
            INFORMAÇÕES GERAIS
          </Typography>
          <Typography variant="body2" color="inherit">
            Aqui vai o texto ou links para informações gerais.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="subtitle1" color="inherit">
            FORMAS DE PAGAMENTO
          </Typography>
          <Typography variant="body2" color="inherit">
            Detalhes das formas de pagamento aceitas.
          </Typography>
        </Grid>
        {/* Pode adicionar mais Grid items aqui para mais conteúdo */}
      </Grid>
    </FooterSection>
  );
}
