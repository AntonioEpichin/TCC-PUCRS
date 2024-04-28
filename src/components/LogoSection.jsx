'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';

const colors = {
  background: '#e4e4e4',
  text: '#757575', // Cor do texto cinza claro, ajustado conforme o mockup
  icon: '#757575', // Cor dos ícones
};

const LogoSection = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.white, // Fundo branco para a seção
  padding: theme.spacing(2, 2, 2, 2), // Espaçamento interno da seção (8px em todas as direções
  display: 'flex',
  alignItems: 'center',
  borderRadius: theme.shape.borderRadius,
}));

const Logo = styled('div')({
  width: '80px',
  height: '80px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: '16px', // Espaçamento à direita da imagem
});

const StyledLink = styled('a')({
  textDecoration: 'none',
  color: colors.text, // Cor do texto cinza claro
  display: 'flex',
  alignItems: 'center',
  marginRight: '16px', // Espaçamento entre os ícones e o texto
  '&:hover': {
    textDecoration: 'none',
  },
});

export default function LogoSectionComponent() {
  return (
    <LogoSection>
      <Logo>
        <img src="/images/logo.png" alt="Logomarca" style={{ width: '100%', height: 'auto', borderRadius: '50%' }} />
      </Logo>
      <Box>
        <StyledLink href="https://www.google.com/maps/search/?api=1&query=YourAddress" target="_blank" rel="noopener noreferrer">
          <PlaceIcon sx={{ color: colors.icon }} />
          <Typography variant="body1" component="span" marginLeft={1}>
            Endereço
          </Typography>
        </StyledLink>
        <StyledLink href="https://wa.me/YourPhoneNumber" target="_blank" rel="noopener noreferrer">
          <PhoneIcon sx={{ color: colors.icon }} />
          <Typography variant="body1" component="span" marginLeft={1}>
            Contato
          </Typography>
        </StyledLink>
      </Box>
    </LogoSection>
  );
}
