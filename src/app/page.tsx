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

const features = [
  {
    icon: <Engineering fontSize="large" />,
    title: 'Diseño Avanzado',
    description: 'Drivers LED con tecnología de vanguardia y diseño optimizado para máximo rendimiento.',
  },
  {
    icon: <HighQuality fontSize="large" />,
    title: 'Alta Calidad',
    description: 'Productos fabricados con los más altos estándares de calidad y certificaciones internacionales.',
  },
  {
    icon: <Speed fontSize="large" />,
    title: 'Eficiencia Energética',
    description: 'Soluciones que maximizan la eficiencia energética y reducen el consumo.',
  },
  {
    icon: <Support fontSize="large" />,
    title: 'Soporte Técnico',
    description: 'Equipo de soporte técnico especializado para asesoramiento y resolución de dudas.',
  },
];

export default function Home() {
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
                GXTRONIC
              </Typography>
              <Typography variant="h5" gutterBottom>
                Fabricante de Drivers LED
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, opacity: 0.9 }}>
                Líderes en la fabricación de drivers LED de alta calidad para aplicaciones 
                industriales y comerciales. Soluciones innovadoras que garantizan eficiencia, 
                durabilidad y rendimiento óptimo.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button variant="contained" color="secondary" size="large">
                  Ver Productos
                </Button>
                <Button variant="outlined" color="inherit" size="large">
                  Contactar
                </Button>
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
                  Drivers LED
                </Typography>
                <Typography variant="body1">
                  Tecnología avanzada para iluminación profesional
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h2" align="center" gutterBottom>
          ¿Por qué elegir GXTRONIC?
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 6, color: 'text.secondary' }}>
          Ofrecemos soluciones completas en drivers LED con la más alta calidad y tecnología
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
                Nuestros Productos
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                Fabricamos una amplia gama de drivers LED diseñados para diferentes 
                aplicaciones y necesidades específicas.
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 3 }}>
                <Chip label="Drivers Dimables" />
                <Chip label="Alta Potencia" />
                <Chip label="Uso Industrial" />
                <Chip label="Certificados" />
              </Box>
              <Button variant="contained" size="large">
                Ver Catálogo Completo
              </Button>
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
                  Aplicaciones Principales
                </Typography>
                <Box component="ul" sx={{ pl: 2 }}>
                  <li>Iluminación comercial</li>
                  <li>Alumbrado público</li>
                  <li>Aplicaciones industriales</li>
                  <li>Proyectos arquitectónicos</li>
                  <li>Sistemas de emergencia</li>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
