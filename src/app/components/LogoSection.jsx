'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';

const colors = {
  background: '#e4e4e4',
  text: '#484848',
  icon: '#484848',
};

const LogoSection = styled(Box)(({ theme }) => ({
  backgroundColor: colors.background,
  padding: theme.spacing(2),
  display: 'flex',
  alignItems: 'center',
  borderRadius: theme.shape.borderRadius,
}));

const Logo = styled('div')(({ theme }) => ({
  backgroundColor: '#acacac',
  borderRadius: '50%',
  width: '80px',
  height: '80px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: theme.spacing(2),
}));

const StyledLink = styled('a')(({ theme }) => ({
  textDecoration: 'none',
  color: colors.text,
  display: 'flex',
  alignItems: 'center',
  marginRight: theme.spacing(2),
  '&:hover': {
    textDecoration: 'none',
  },
}));

export default function LogoSectionComponent() {
  return (
    <LogoSection>
      <Logo>
        {/* Logo aqui */}
        <Typography variant="h6" color="white">+</Typography>
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
