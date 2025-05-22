import { Box, Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const features = [
    {
      title: 'Soluciones Innovadoras',
      description: 'Desarrollamos soluciones tecnológicas avanzadas adaptadas a las necesidades de su empresa.',
    },
    {
      title: 'Experiencia Comprobada',
      description: 'Años de experiencia brindando servicios de calidad a empresas de diversos sectores.',
    },
    {
      title: 'Soporte 24/7',
      description: 'Asistencia técnica continua para garantizar el funcionamiento óptimo de sus sistemas.',
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" gutterBottom>
            Transformamos Ideas en Soluciones Digitales
          </Typography>
          <Typography variant="h5" paragraph>
            Expertos en tecnología e innovación empresarial
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={() => navigate('/contact')}
            sx={{ mt: 2 }}
          >
            Contáctanos
          </Button>
        </Container>
      </Box>

      {/* Features Section */}
      <Container sx={{ py: 8 }} maxWidth="lg">
        <Typography variant="h3" align="center" gutterBottom>
          Nuestros Servicios Destacados
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {features.map((feature, index) => (
            <Grid item key={index} xs={12} md={4}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h5" component="h2" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
        <Container maxWidth="md">
          <Typography variant="h3" align="center" gutterBottom>
            ¿Listo para Innovar?
          </Typography>
          <Typography variant="h6" align="center" paragraph>
            Descubre cómo podemos ayudarte a alcanzar tus objetivos empresariales
          </Typography>
          <Box sx={{ textAlign: 'center', mt: 3 }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={() => navigate('/services')}
            >
              Ver Todos los Servicios
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default Home;