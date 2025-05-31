'use client';

import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import {
  Email,
  LocationOn,
  AccessTime,
  Business,
  Support,
} from '@mui/icons-material';
import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

export default function ContactoPage() {
  const t = useTranslations('contact');
  const tInfo = useTranslations('contact.info');

  const contactInfo = [
    {
      icon: <Email fontSize="large" />,
      title: tInfo('email.title'),
      content: tInfo('email.content'),
      subtitle: tInfo('email.subtitle'),
    },
    {
      icon: <LocationOn fontSize="large" />,
      title: tInfo('location.title'),
      content: tInfo('location.content'),
      subtitle: tInfo('location.subtitle'),
    },
    {
      icon: <AccessTime fontSize="large" />,
      title: tInfo('schedule.title'),
      content: tInfo('schedule.content'),
      subtitle: tInfo('schedule.subtitle'),
    },
  ];

  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    tipoConsulta: '',
    mensaje: '',
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | { target: { value: string } }) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <Box>
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 6,
          background: 'linear-gradient(135deg, #1976d2 0%, #115293 100%)',
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" gutterBottom>
            {t('title')}
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9 }}>
            {t('subtitle')}
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 8 }}>
            <Card>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h4" gutterBottom>
                  {t('form.title')}
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
                  {t('form.description')}
                </Typography>

                {mounted ? (
                  <Box component="form" onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label={t('form.fullName')}
                        value={formData.nombre}
                        onChange={handleChange('nombre')}
                        required
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label={t('form.company')}
                        value={formData.empresa}
                        onChange={handleChange('empresa')}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label={t('form.email')}
                        type="email"
                        value={formData.email}
                        onChange={handleChange('email')}
                        required
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>

                      <FormControl fullWidth>
                        <InputLabel>{t('form.queryType')}</InputLabel>
                        <Select
                          value={formData.tipoConsulta}
                          onChange={handleChange('tipoConsulta')}
                          label={t('form.queryType')}
                          required
                        >
                          <MenuItem value="productos">{t('form.queryTypes.products')}</MenuItem>
                          <MenuItem value="cotizacion">{t('form.queryTypes.quote')}</MenuItem>
                          <MenuItem value="personalizado">{t('form.queryTypes.custom')}</MenuItem>
                          <MenuItem value="soporte">{t('form.queryTypes.support')}</MenuItem>
                          <MenuItem value="distribucion">{t('form.queryTypes.distribution')}</MenuItem>
                          <MenuItem value="otro">{t('form.queryTypes.other')}</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        label={t('form.message')}
                        multiline
                        rows={4}
                        value={formData.mensaje}
                        onChange={handleChange('mensaje')}
                        placeholder={t('form.messagePlaceholder')}
                        required
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        sx={{ mt: 2 }}
                      >
                        {t('form.submit')}
                      </Button>
                    </Grid>
                    </Grid>
                  </Box>
                ) : (
                  <Box sx={{ p: 4, textAlign: 'center' }}>
                    <Typography variant="body2" color="text.secondary">
                      {t('form.loading')}
                    </Typography>
                  </Box>
                )}
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Grid container spacing={3}>
              {contactInfo.map((info, index) => (
                <Grid key={index} size={{ xs: 12 }}>
                  <Card>
                    <CardContent sx={{ textAlign: 'center' }}>
                      <Box sx={{ color: 'primary.main', mb: 2 }}>
                        {info.icon}
                      </Box>
                      <Typography variant="h6" gutterBottom>
                        {info.title}
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                        {info.content}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {info.subtitle}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>

      <Box sx={{ bgcolor: 'grey.50', py: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" align="center" gutterBottom>
            {t('whyChoose')}
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box sx={{ textAlign: 'center' }}>
                <Business color="primary" sx={{ fontSize: 48, mb: 2 }} />
                <Typography variant="h6" gutterBottom>
                  {t('reasons.experience.title')}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {t('reasons.experience.description')}
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box sx={{ textAlign: 'center' }}>
                <Support color="primary" sx={{ fontSize: 48, mb: 2 }} />
                <Typography variant="h6" gutterBottom>
                  {t('reasons.support.title')}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {t('reasons.support.description')}
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box sx={{ textAlign: 'center' }}>
                <LocationOn color="primary" sx={{ fontSize: 48, mb: 2 }} />
                <Typography variant="h6" gutterBottom>
                  {t('reasons.coverage.title')}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {t('reasons.coverage.description')}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

    </Box>
  );
}
