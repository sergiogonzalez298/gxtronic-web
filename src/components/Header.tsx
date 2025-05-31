'use client';

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
} from '@mui/material';
import Link from 'next/link';

const navigationItems = [
  { label: 'Inicio', href: '/' },
  { label: 'Productos', href: '/productos' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Contacto', href: '/contacto' },
];

export default function Header() {
  return (
    <AppBar position="sticky" elevation={1}>
      <Container maxWidth="lg">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: 'bold' }}
          >
            <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              GXTRONIC
            </Link>
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {navigationItems.map((item) => (
              <Link key={item.href} href={item.href} style={{ textDecoration: 'none' }}>
                <Button
                  sx={{ 
                    ml: 2,
                    color: 'white',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)'
                    }
                  }}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}