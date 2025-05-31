'use client';

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
} from '@mui/material';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import LanguageSelector from './LanguageSelector';

export default function Header() {
  const t = useTranslations('navigation');

  const navigationItems = [
    { label: t('home'), href: '/' },
    { label: t('products'), href: '/productos' },
    { label: t('services'), href: '/servicios' },
    { label: t('about'), href: '/nosotros' },
    { label: t('contact'), href: '/contacto' },
  ];

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
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
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
            <Box sx={{ ml: 2 }}>
              <LanguageSelector />
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}