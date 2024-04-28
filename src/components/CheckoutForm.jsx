'use client';

import React from 'react';
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Paper,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import MuiLink from '@mui/material/Link'; // Importando o Link do Material UI
import Link from 'next/link'; // Importando o Link do Next.js

const CheckoutFormContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  margin: theme.spacing(2, 'auto'),
  maxWidth: 900,
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  fontWeight: 'bold',
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

export default function CheckoutForm() {
  return (
    <CheckoutFormContainer>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <SectionTitle variant="h6">Dados pessoais</SectionTitle>
          <TextField fullWidth margin="normal" label="Nome" variant="outlined" />
          <TextField fullWidth margin="normal" label="Data de nascimento" variant="outlined" />
          <TextField fullWidth margin="normal" label="CPF" variant="outlined" />
          <TextField fullWidth margin="normal" label="Senha" type="password" variant="outlined" />
          <TextField fullWidth margin="normal" label="Confirmação de senha" type="password" variant="outlined" />
        </Grid>
        <Grid item xs={12} md={6}>
          <SectionTitle variant="h6">Dados para contato</SectionTitle>
          <TextField fullWidth margin="normal" label="Telefone" variant="outlined" />
          <TextField fullWidth margin="normal" label="E-mail" variant="outlined" />
          <Box>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Receber confirmações via SMS" />
            <FormControlLabel control={<Checkbox />} label="Receber confirmações via E-mail" />
          </Box>
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="Li e aceito os Termos de Uso"
          />
          <SubmitButton fullWidth variant="contained" color="primary">
            Continuar
          </SubmitButton>
          <Typography variant="body2" color="textSecondary" align="center" marginTop={2}>
            Ao inserir os seus dados pessoais e dar o aceite nos termos de uso, você está criando uma conta na nossa aplicação. Compre nossos produtos e serviços e realize os agendamentos de forma fácil e prática.
          </Typography>
          <Typography variant="body2" align="center" marginTop={2}>
            Já tem uma conta?{' '}
            <Link href="/login">
              <MuiLink component="a">Entrar</MuiLink> {/* Definindo o componente do Material UI como 'a' */}
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </CheckoutFormContainer>
  );
}
