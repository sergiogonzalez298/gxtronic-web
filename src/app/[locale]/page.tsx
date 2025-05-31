'use client';

import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Chip,
} from '@mui/material';
import {
  Engineering,
  HighQuality,
  Speed,
  Support,
} from '@mui/icons-material';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function Home() {
  const t = useTranslations('home');
  
  const features = [
    {
      icon: <Engineering fontSize="large" />,
      title: t('features.design.title'),
      description: t('features.design.description'),
    },
    {
      icon: <HighQuality fontSize="large" />,
      title: t('features.quality.title'),
      description: t('features.quality.description'),
    },
    {
      icon: <Speed fontSize="large" />,
      title: t('features.efficiency.title'),
      description: t('features.efficiency.description'),
    },
    {
      icon: <Support fontSize="large" />,
      title: t('features.support.title'),
      description: t('features.support.description'),
    },
  ];

  return (
    <Box>
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
          background: 'linear-gradient(135deg, #1976d2 0%, #115293 100%)',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h1" gutterBottom>
                {t('title')}
              </Typography>
              <Typography variant="h5" gutterBottom>
                {t('subtitle')}
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, opacity: 0.9 }}>
                {t('description')}
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Link href="/productos" style={{ textDecoration: 'none' }}>
                  <Button variant="contained" color="secondary" size="large">
                    {t('viewProducts')}
                  </Button>
                </Link>
                <Link href="/contacto" style={{ textDecoration: 'none' }}>
                  <Button variant="outlined" color="inherit" size="large">
                    {t('contact')}
                  </Button>
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: 2,
                  p: 3,
                  textAlign: 'center',
                }}
              >
                <Typography variant="h4" gutterBottom>
                  {t('ledDrivers')}
                </Typography>
                <Typography variant="body1">
                  {t('ledDriversDesc')}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h2" align="center" gutterBottom>
          {t('whyChoose.title')}
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 6, color: 'text.secondary' }}>
          {t('whyChoose.description')}
        </Typography>
        
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ height: '100%', textAlign: 'center' }}>
                <CardContent>
                  <Box sx={{ color: 'primary.main', mb: 2 }}>
                    {feature.icon}
                  </Box>
                  <Typography variant="h6" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box sx={{ bgcolor: 'grey.50', py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h3" gutterBottom>
                {t('products.title')}
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                {t('products.description')}
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 3 }}>
                <Chip label={t('products.chips.dimmable')} />
                <Chip label={t('products.chips.highPower')} />
                <Chip label={t('products.chips.industrial')} />
                <Chip label={t('products.chips.certified')} />
              </Box>
              <Link href="/productos" style={{ textDecoration: 'none' }}>
                <Button variant="contained" size="large">
                  {t('products.viewCatalog')}
                </Button>
              </Link>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  bgcolor: 'white',
                  borderRadius: 2,
                  p: 4,
                  boxShadow: 2,
                }}
              >
                <Typography variant="h6" gutterBottom>
                  {t('applications.title')}
                </Typography>
                <Box component="ul" sx={{ pl: 2 }}>
                  <li>{t('applications.commercial')}</li>
                  <li>{t('applications.publicLighting')}</li>
                  <li>{t('applications.industrial')}</li>
                  <li>{t('applications.architectural')}</li>
                  <li>{t('applications.emergency')}</li>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
