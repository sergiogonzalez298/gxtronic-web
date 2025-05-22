import { Box, Container, Typography, Grid, Card, CardContent, CardActions, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Services() {
  const navigate = useNavigate();

  const services = [
    {
      title: 'Desarrollo de Software',
      description: 'Creamos soluciones de software personalizadas que se adaptan perfectamente a las necesidades específicas de su empresa.',
      features: [
        'Aplicaciones web empresariales',
        'Sistemas de gestión',
        'Integración de APIs',
        'Desarrollo móvil'
      ]
    },
    {
      title: 'Consultoría Tecnológica',
      description: 'Asesoramiento experto para optimizar sus procesos tecnológicos y maximizar la eficiencia operativa.',
      features: [
        'Análisis de infraestructura',
        'Optimización de procesos',
        'Planificación estratégica',
        'Auditoría tecnológica'
      ]
    },
    {
      title: 'Soluciones Cloud',
      description: 'Servicios cloud avanzados para mejorar la escalabilidad y accesibilidad de sus sistemas.',
      features: [
        'Migración a la nube',
        'Arquitectura cloud',
        'Seguridad en la nube',
        'Optimización de costos'
      ]
    },
    {
      title: 'Ciberseguridad',
      description: 'Protección integral para sus activos digitales y datos empresariales críticos.',
      features: [
        'Evaluación de seguridad',
        'Implementación de firewalls',
        'Monitoreo continuo',
        'Respuesta a incidentes'
      ]
    },
    {
      title: 'Inteligencia Artificial',
      description: 'Implementación de soluciones de IA para automatizar procesos y obtener insights valiosos.',
      features: [
        'Machine Learning',
        'Procesamiento de datos',
        'Automatización inteligente',
        'Análisis predictivo'
      ]
    },
    {
      title: 'Soporte Técnico',
      description: 'Servicio de soporte técnico profesional 24/7 para mantener sus sistemas funcionando óptimamente.',
      features: [
        'Soporte remoto',
        'Mantenimiento preventivo',
        'Resolución de problemas',
        'Actualizaciones de sistema'
      ]
    }
  ];

  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" gutterBottom>
          Nuestros Servicios
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph sx={{ mb: 6 }}>
          Soluciones tecnológicas integrales para impulsar su negocio
        </Typography>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item key={index} xs={12} md={6} lg={4}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" component="h2" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {service.description}
                  </Typography>
                  <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                    Características:
                  </Typography>
                  <ul>
                    {service.features.map((feature, idx) => (
                      <li key={idx}>
                        <Typography variant="body1">{feature}</Typography>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button
                    size="large"
                    color="primary"
                    onClick={() => navigate('/contact')}
                    sx={{ ml: 1, mb: 1 }}
                  >
                    Solicitar Información
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Typography variant="h4" gutterBottom>
            ¿Necesita una solución personalizada?
          </Typography>
          <Typography variant="body1" paragraph>
            Contáctenos para discutir sus necesidades específicas y encontrar la mejor solución para su empresa.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => navigate('/contact')}
          >
            Contactar Ahora
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Services;