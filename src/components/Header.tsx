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
  Divider,
  Avatar,
} from '@mui/material';
import { 
  Menu as MenuIcon,
  Home,
  Inventory,
  MiscellaneousServices,
  Info,
  ContactMail,
  Close,
} from '@mui/icons-material';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import LanguageSelector from './LanguageSelector';
import { useState } from 'react';

export default function Header() {
  const t = useTranslations('navigation');
  const [mobileOpen, setMobileOpen] = useState(false);

  const navigationItems = [
    { label: t('home'), href: '/', icon: <Home /> },
    { label: t('products'), href: '/productos', icon: <Inventory /> },
    { label: t('services'), href: '/servicios', icon: <MiscellaneousServices /> },
    { label: t('about'), href: '/nosotros', icon: <Info /> },
    { label: t('contact'), href: '/contacto', icon: <ContactMail /> },
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
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 300,
            background: 'linear-gradient(135deg, #1976d2 0%, #115293 100%)',
            color: 'white',
          },
        }}
      >
        {/* Header del drawer */}
        <Box sx={{ 
          p: 3, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Avatar 
              sx={{ 
                bgcolor: 'rgba(255, 255, 255, 0.2)', 
                width: 40, 
                height: 40,
                fontSize: '1.2rem',
                fontWeight: 'bold'
              }}
            >
              GX
            </Avatar>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              GXTRONIC
            </Typography>
          </Box>
          <IconButton 
            onClick={handleDrawerToggle}
            sx={{ 
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)'
              }
            }}
          >
            <Close />
          </IconButton>
        </Box>

        {/* Navigation items */}
        <List sx={{ px: 2, py: 3 }}>
          {navigationItems.map((item) => (
            <ListItem key={item.href} disablePadding sx={{ mb: 1 }}>
              <Link href={item.href} style={{ textDecoration: 'none', width: '100%' }}>
                <Box
                  onClick={handleDrawerToggle}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    p: 2,
                    borderRadius: 2,
                    color: 'white',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      transform: 'translateX(8px)',
                    }
                  }}
                >
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  }}>
                    {item.icon}
                  </Box>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      fontWeight: 500,
                      fontSize: '1.1rem'
                    }}
                  >
                    {item.label}
                  </Typography>
                </Box>
              </Link>
            </ListItem>
          ))}
        </List>

        <Divider sx={{ mx: 2, borderColor: 'rgba(255, 255, 255, 0.1)' }} />

        {/* Language selector section */}
        <Box sx={{ p: 3 }}>
          <Typography variant="body2" sx={{ mb: 2, opacity: 0.8 }}>
            Idioma / Language
          </Typography>
          <LanguageSelector />
        </Box>

        {/* Footer del drawer */}
        <Box sx={{ 
          mt: 'auto', 
          p: 3, 
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          textAlign: 'center'
        }}>
          <Typography variant="body2" sx={{ opacity: 0.7, fontSize: '0.85rem' }}>
            © 2024 GXTRONIC
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.7, fontSize: '0.85rem' }}>
            LED Driver Solutions
          </Typography>
        </Box>
      </Drawer>
    </>
  );
}