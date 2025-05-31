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
  Phone,
  LocationOn,
  AccessTime,
  Business,
} from '@mui/icons-material';
import { useState } from 'react';

const contactInfo = [
  {
    icon: <Email fontSize="large" />,
    title: 'Email',
    content: 'info@gxtronic.com',
    subtitle: 'ventas@gxtronic.com',
  },
  {
    icon: <Phone fontSize="large" />,
    title: 'Teléfono',
    content: '+34 XXX XXX XXX',
    subtitle: 'Lunes a Viernes 9:00 - 18:00',
  },
  {
    icon: <LocationOn fontSize="large" />,
    title: 'Ubicación',
    content: 'España',
    subtitle: 'Zona de cobertura: Europa',
  },
  {
    icon: <AccessTime fontSize="large" />,
    title: 'Horario',
    content: 'Lun - Vie: 9:00 - 18:00',
    subtitle: 'Sáb: 9:00 - 14:00',
  },
];

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    tipoConsulta: '',
    mensaje: '',
  });

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
            Contacto
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9 }}>
            Estamos aquí para ayudarte con tus proyectos de iluminación LED
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 8 }}>
            <Card>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h4" gutterBottom>
                  Envíanos tu consulta
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
                  Completa el formulario y nuestro equipo técnico se pondrá en contacto contigo
                </Typography>

                <Box component="form" onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="Nombre completo"
                        value={formData.nombre}
                        onChange={handleChange('nombre')}
                        required
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="Empresa"
                        value={formData.empresa}
                        onChange={handleChange('empresa')}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="Email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange('email')}
                        required
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="Teléfono"
                        value={formData.telefono}
                        onChange={handleChange('telefono')}
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>

                  c    <FormControl fullWidth>
                        <InputLabel>Tipo de consulta</InputLabel>
                        <Select
                          value={formData.tipoConsulta}
                          onChange={handleChange('tipoConsulta')}
                          label="Tipo de consulta"
                          required
                        >
                          <MenuItem value="productos">Información de productos</MenuItem>
                          <MenuItem value="cotizacion">Solicitud de cotización</MenuItem>
                          <MenuItem value="personalizado">Desarrollo personalizado</MenuItem>
                          <MenuItem value="soporte">Soporte técnico</MenuItem>
                          <MenuItem value="distribucion">Oportunidades de distribución</MenuItem>
                          <MenuItem value="otro">Otro</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        label="Mensaje"
                        multiline
                        rows={4}
                        value={formData.mensaje}
                        onChange={handleChange('mensaje')}
                        placeholder="Describe tu proyecto o consulta..."
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
                        Enviar Consulta
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
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
            ¿Por qué elegir GXTRONIC?
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box sx={{ textAlign: 'center' }}>
                <Business color="primary" sx={{ fontSize: 48, mb: 2 }} />
                <Typography variant="h6" gutterBottom>
                  Experiencia Industrial
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Más de 10 años desarrollando soluciones LED para la industria
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box sx={{ textAlign: 'center' }}>
                <Phone color="primary" sx={{ fontSize: 48, mb: 2 }} />
                <Typography variant="h6" gutterBottom>
                  Soporte Personalizado
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Atención directa con nuestros ingenieros especializados
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box sx={{ textAlign: 'center' }}>
                <LocationOn color="primary" sx={{ fontSize: 48, mb: 2 }} />
                <Typography variant="h6" gutterBottom>
                  Cobertura Europea
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Envíos rápidos y soporte técnico en toda Europa
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 6 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 8 }}>
              <Typography variant="h5" gutterBottom>
                ¿Necesitas una respuesta inmediata?
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.9 }}>
                Para consultas urgentes o soporte técnico inmediato,
                llámanos directamente durante horario comercial.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                fullWidth
                startIcon={<Phone />}
              >
                +34 XXX XXX XXX
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
