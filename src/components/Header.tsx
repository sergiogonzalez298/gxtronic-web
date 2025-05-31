'use client';

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import LanguageSelector from './LanguageSelector';
import { useState } from 'react';

export default function Header() {
  const t = useTranslations('navigation');
  const [mobileOpen, setMobileOpen] = useState(false);

  const navigationItems = [
    { label: t('home'), href: '/' },
    { label: t('products'), href: '/productos' },
    { label: t('services'), href: '/servicios' },
    { label: t('about'), href: '/nosotros' },
    { label: t('contact'), href: '/contacto' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
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
            
            {/* Desktop Navigation */}
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

            {/* Mobile menu button */}
            <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
              <LanguageSelector />
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ ml: 1 }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        <List>
          {navigationItems.map((item) => (
            <ListItem key={item.href} disablePadding>
              <Link href={item.href} style={{ textDecoration: 'none', width: '100%' }}>
                <ListItemText 
                  primary={item.label} 
                  sx={{ 
                    p: 2,
                    '&:hover': {
                      backgroundColor: 'rgba(0, 0, 0, 0.04)'
                    }
                  }}
                  onClick={handleDrawerToggle}
                />
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}