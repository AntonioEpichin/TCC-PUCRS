'use client';

import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
  Typography
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Link from 'next/link';



const CreateAccountContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  margin: theme.spacing(2, 'auto'),
  maxWidth: 600,
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const FormTextField = styled(TextField)(({ theme }) => ({
  margin: theme.spacing(1, 0),
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  backgroundColor: '#428041', // Substitua por sua cor verde padrão
  color: '#fff',
  '&:hover': {
    backgroundColor: '#43A047', // Um pouco mais escuro para o efeito hover
  },
}));

export default function CreateAccountForm() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Assim que o componente monta, atualizamos o estado para indicar que estamos no lado do cliente
    setIsClient(true);
  }, []);

  return (
    <CreateAccountContainer>
      <SectionTitle variant="h5" align="center">
        Criar Conta
      </SectionTitle>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormTextField fullWidth label="Nome" variant="outlined" required />
          <FormTextField fullWidth label="E-mail" variant="outlined" required />
          <FormTextField fullWidth label="Telefone" variant="outlined" required type="tel" />
          <FormTextField fullWidth label="Data de nascimento" variant="outlined" required type="date" InputLabelProps={{ shrink: true }} />
          <FormTextField fullWidth label="CPF" variant="outlined" required />
          <FormTextField fullWidth label="Senha" variant="outlined" required type="password" />
          <FormTextField fullWidth label="Confirmação de senha" variant="outlined" required type="password" />
          <FormControlLabel
            control={<Checkbox name="agreeTerms" color="primary" />}
            label="Li e aceito os Termos de Uso"
          />
        </Grid>
        <Box mt={2} width="100%">
          <SubmitButton
            type="submit"
            fullWidth
            variant="contained"
          >
            Continuar
          </SubmitButton>
        </Box>
        <Box mt={2} width="100%">
          <Typography variant="body2" align="center">
            Já tem uma conta?{' '}
            {/* Renderiza o Link apenas no lado do cliente */}
            {isClient && (
              <Link href="/login" passHref>
                Entrar
              </Link>
            )}
          </Typography>
        </Box>
      </Grid>
    </CreateAccountContainer>
  );
}
