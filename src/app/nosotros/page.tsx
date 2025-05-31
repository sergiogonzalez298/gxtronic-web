'use client';

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@mui/lab';
import {
  Engineering,
  Lightbulb,
  Public,
  EmojiObjects,
  CheckCircle,
  StarRate,
} from '@mui/icons-material';

const values = [
  {
    icon: <Engineering fontSize="large" />,
    title: 'Innovación',
    description: 'Desarrollo continuo de tecnologías avanzadas para drivers LED de última generación.',
  },
  {
    icon: <StarRate fontSize="large" />,
    title: 'Calidad',
    description: 'Compromiso con los más altos estándares de calidad en todos nuestros productos.',
  },
  {
    icon: <Public fontSize="large" />,
    title: 'Sostenibilidad',
    description: 'Soluciones eficientes que contribuyen al ahorro energético y cuidado del medio ambiente.',
  },
  {
    icon: <EmojiObjects fontSize="large" />,
    title: 'Expertise',
    description: 'Equipo de ingenieros especializados con amplia experiencia en electrónica de potencia.',
  },
];

const achievements = [
  'Más de 10 años de experiencia en el sector',
  'Presencia en más de 15 países europeos',
  '50+ proyectos industriales completados',
  'Certificaciones CE, RoHS y UL',
  'Equipo de 25+ ingenieros especializados',
  'I+D+i con inversión del 15% de facturación',
];

const timeline = [
  {
    year: '2013',
    title: 'Fundación de GXTRONIC',
    description: 'Inicio como empresa especializada en electrónica de potencia para LED.',
  },
  {
    year: '2015',
    title: 'Primera línea de producción',
    description: 'Lanzamiento de nuestra primera serie de drivers LED de alta eficiencia.',
  },
  {
    year: '2017',
    title: 'Expansión europea',
    description: 'Apertura de mercados en Francia, Alemania e Italia.',
  },
  {
    year: '2019',
    title: 'Certificación ISO 9001',
    description: 'Obtención de certificación de calidad y optimización de procesos.',
  },
  {
    year: '2021',
    title: 'División I+D+i',
    description: 'Creación del departamento de investigación y desarrollo.',
  },
  {
    year: '2024',
    title: 'Nuevas tecnologías',
    description: 'Lanzamiento de drivers inteligentes con IoT y control remoto.',
  },
];

export default function NosotrosPage() {
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
            Acerca de GXTRONIC
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9 }}>
            Líderes en innovación y fabricación de drivers LED
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h3" gutterBottom>
              Nuestra Historia
            </Typography>
            <Typography variant="body1" paragraph>
              GXTRONIC nació en 2013 con la visión de revolucionar el sector de la iluminación LED 
              a través de drivers de alta eficiencia y calidad superior. Desde nuestros inicios, 
              nos hemos especializado en el desarrollo de soluciones electrónicas de potencia 
              que maximizan el rendimiento de los sistemas de iluminación LED.
            </Typography>
            <Typography variant="body1" paragraph>
              Con más de una década de experiencia, nos hemos consolidado como una empresa 
              líder en el mercado europeo, ofreciendo productos innovadores que cumplen con 
              los más altos estándares internacionales de calidad y eficiencia energética.
            </Typography>
            <Typography variant="body1">
              Nuestro compromiso con la excelencia nos ha llevado a establecer relaciones 
              duraderas con clientes en toda Europa, desde pequeñas empresas hasta 
              grandes corporaciones industriales.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                bgcolor: 'grey.100',
                borderRadius: 2,
                p: 4,
                textAlign: 'center',
              }}
            >
              <Typography variant="h4" color="primary.main" gutterBottom>
                Nuestra Misión
              </Typography>
              <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
                &ldquo;Desarrollar y fabricar drivers LED de alta calidad que permitan 
                a nuestros clientes crear soluciones de iluminación eficientes, 
                duraderas y sostenibles para un futuro mejor.&rdquo;
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Box sx={{ bgcolor: 'grey.50', py: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" gutterBottom>
            Nuestros Valores
          </Typography>
          <Typography variant="body1" align="center" sx={{ mb: 4, color: 'text.secondary' }}>
            Los principios que guían nuestro trabajo diario
          </Typography>
          
          <Grid container spacing={4}>
            {values.map((value, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card sx={{ height: '100%', textAlign: 'center' }}>
                  <CardContent>
                    <Box sx={{ color: 'primary.main', mb: 2 }}>
                      {value.icon}
                    </Box>
                    <Typography variant="h6" gutterBottom>
                      {value.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {value.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={8}>
            <Typography variant="h3" gutterBottom>
              Nuestra Trayectoria
            </Typography>
            <Timeline position="left">
              {timeline.map((item, index) => (
                <TimelineItem key={index}>
                  <TimelineSeparator>
                    <TimelineDot color="primary" />
                    {index < timeline.length - 1 && <TimelineConnector />}
                  </TimelineSeparator>
                  <TimelineContent>
                    <Paper elevation={1} sx={{ p: 2, mb: 2 }}>
                      <Typography variant="h6" color="primary.main">
                        {item.year}
                      </Typography>
                      <Typography variant="subtitle1" gutterBottom>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.description}
                      </Typography>
                    </Paper>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Nuestros Logros
                </Typography>
                <List>
                  {achievements.map((achievement, index) => (
                    <ListItem key={index} sx={{ px: 0 }}>
                      <ListItemIcon>
                        <CheckCircle color="primary" />
                      </ListItemIcon>
                      <ListItemText primary={achievement} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 6 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={8}>
              <Typography variant="h4" gutterBottom>
                El Futuro de la Iluminación LED
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.9 }}>
                Continuamos innovando para ofrecer las mejores soluciones en drivers LED, 
                incorporando tecnologías emergentes como IoT, control inteligente y 
                sistemas de monitoreo avanzado.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Lightbulb sx={{ fontSize: 80, mb: 2, opacity: 0.8 }} />
                <Typography variant="h6">
                  Innovación Continua
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}