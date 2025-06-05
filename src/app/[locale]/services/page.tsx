'use client';

import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import {
  CheckCircle,
  Build,
  Support,
  Speed,
  Assignment,
  ExpandMore,
} from '@mui/icons-material';

const services = [
  {
    title: 'Desarrollo Personalizado',
    icon: <Build fontSize="large" />,
    description: 'Diseñamos y fabricamos drivers LED personalizados según tus especificaciones.',
    features: [
      'Análisis de requisitos técnicos',
      'Diseño de circuitos optimizados',
      'Prototipado y testing',
      'Certificación y homologación',
      'Producción en serie',
    ],
  },
  {
    title: 'Soporte Técnico',
    icon: <Support fontSize="large" />,
    description: 'Equipo especializado para resolver dudas técnicas y problemas de implementación.',
    features: [
      'Consultoría técnica especializada',
      'Resolución de problemas',
      'Optimización de sistemas',
      'Actualizaciones de firmware',
      'Soporte 24/7 para clientes premium',
    ],
  },
  {
    title: 'Instalación y Puesta en Marcha',
    icon: <Speed fontSize="large" />,
    description: 'Servicios completos de instalación y configuración para proyectos grandes.',
    features: [
      'Planificación de instalación',
      'Configuración en sitio',
      'Pruebas de funcionamiento',
      'Capacitación del personal',
      'Documentación técnica',
    ],
  },
  {
    title: 'Mantenimiento Preventivo',
    icon: <Assignment fontSize="large" />,
    description: 'Programas de mantenimiento para garantizar el óptimo funcionamiento.',
    features: [
      'Inspecciones periódicas',
      'Limpieza y calibración',
      'Reemplazo de componentes',
      'Informes de estado',
      'Garantía extendida',
    ],
  },
];

const faqs = [
  {
    question: '¿Qué garantía ofrecen en sus productos?',
    answer: 'Ofrecemos 3 años de garantía en todos nuestros drivers LED estándar y hasta 5 años en productos industriales. La garantía cubre defectos de fabricación y mal funcionamiento bajo condiciones normales de uso.',
  },
  {
    question: '¿Realizan envíos internacionales?',
    answer: 'Sí, realizamos envíos a toda Europa y América. Los tiempos de entrega varían según el destino, generalmente entre 3-7 días laborables en Europa y 7-14 días en América.',
  },
  {
    question: '¿Pueden desarrollar drivers con especificaciones particulares?',
    answer: 'Absolutamente. Contamos con un equipo de ingeniería especializado que puede desarrollar drivers personalizados según sus requerimientos específicos. El tiempo de desarrollo típico es de 4-8 semanas.',
  },
  {
    question: '¿Qué certificaciones tienen sus productos?',
    answer: 'Todos nuestros productos cuentan con certificación CE, RoHS y la mayoría también tienen certificación UL. Para aplicaciones específicas, podemos obtener certificaciones adicionales según sea necesario.',
  },
  {
    question: '¿Ofrecen capacitación técnica?',
    answer: 'Sí, ofrecemos programas de capacitación técnica tanto presenciales como virtuales. Incluyen instalación, configuración, mantenimiento y solución de problemas.',
  },
];

export default function ServiciosPage() {
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
            Nuestros Servicios
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9 }}>
            Soluciones completas para todas tus necesidades en drivers LED
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={index}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box sx={{ color: 'primary.main', mr: 2 }}>
                      {service.icon}
                    </Box>
                    <Typography variant="h5">{service.title}</Typography>
                  </Box>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    {service.description}
                  </Typography>
                  <List dense>
                    {service.features.map((feature, featureIndex) => (
                      <ListItem key={featureIndex} sx={{ px: 0 }}>
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          <CheckCircle color="primary" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary={feature} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box sx={{ bgcolor: 'grey.50', py: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" align="center" gutterBottom>
            Proceso de Trabajo
          </Typography>
          <Typography variant="body1" align="center" sx={{ mb: 4, color: 'text.secondary' }}>
            Así es como trabajamos contigo para entregar la mejor solución
          </Typography>
          
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 3 }}>
              <Box sx={{ textAlign: 'center' }}>
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    bgcolor: 'primary.main',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 2,
                  }}
                >
                  <Typography variant="h4">1</Typography>
                </Box>
                <Typography variant="h6" gutterBottom>
                  Consulta
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Analizamos tus necesidades y requerimientos específicos
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
              <Box sx={{ textAlign: 'center' }}>
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    bgcolor: 'primary.main',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 2,
                  }}
                >
                  <Typography variant="h4">2</Typography>
                </Box>
                <Typography variant="h6" gutterBottom>
                  Propuesta
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Desarrollamos una propuesta técnica y comercial personalizada
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
              <Box sx={{ textAlign: 'center' }}>
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    bgcolor: 'primary.main',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 2,
                  }}
                >
                  <Typography variant="h4">3</Typography>
                </Box>
                <Typography variant="h6" gutterBottom>
                  Desarrollo
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Fabricamos y testemos la solución según especificaciones
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
              <Box sx={{ textAlign: 'center' }}>
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    bgcolor: 'primary.main',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 2,
                  }}
                >
                  <Typography variant="h4">4</Typography>
                </Box>
                <Typography variant="h6" gutterBottom>
                  Entrega
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Instalación, puesta en marcha y soporte continuo
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Preguntas Frecuentes
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 4, color: 'text.secondary' }}>
          Respuestas a las consultas más comunes sobre nuestros servicios
        </Typography>
        
        <Box sx={{ maxWidth: 800, mx: 'auto' }}>
          {faqs.map((faq, index) => (
            <Accordion key={index}>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography variant="h6">{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>

      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 6 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 8 }}>
              <Typography variant="h4" gutterBottom>
                ¿Listo para empezar tu proyecto?
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.9 }}>
                Contacta con nuestro equipo técnico para una consulta gratuita 
                y descubre cómo podemos ayudarte.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                fullWidth
              >
                Solicitar Consulta
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}