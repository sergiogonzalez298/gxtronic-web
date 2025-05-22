import { Box, Container, Typography, Grid, Card, CardContent, Avatar } from '@mui/material';

function About() {
  const teamMembers = [
    {
      name: 'Carlos Rodríguez',
      position: 'CEO',
      description: 'Líder visionario con más de 15 años de experiencia en el sector tecnológico.',
    },
    {
      name: 'Ana Martínez',
      position: 'CTO',
      description: 'Experta en desarrollo de soluciones tecnológicas innovadoras.',
    },
    {
      name: 'Miguel Sánchez',
      position: 'Director de Operaciones',
      description: 'Especialista en optimización de procesos y gestión de proyectos.',
    },
  ];

  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="lg">
        {/* Historia de la Empresa */}
        <Typography variant="h2" align="center" gutterBottom>
          Nuestra Historia
        </Typography>
        <Typography variant="body1" paragraph align="center" sx={{ mb: 6 }}>
          Desde nuestra fundación, nos hemos dedicado a proporcionar soluciones tecnológicas
          innovadoras que impulsan el crecimiento y éxito de nuestros clientes. Con años de
          experiencia en el sector, hemos desarrollado un profundo entendimiento de las
          necesidades empresariales modernas.
        </Typography>

        {/* Valores de la Empresa */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" align="center" gutterBottom>
            Nuestros Valores
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Innovación
                  </Typography>
                  <Typography variant="body1">
                    Buscamos constantemente nuevas formas de mejorar y crear soluciones
                    que marquen la diferencia en el mercado.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Excelencia
                  </Typography>
                  <Typography variant="body1">
                    Nos comprometemos a mantener los más altos estándares de calidad
                    en todos nuestros servicios y productos.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Compromiso
                  </Typography>
                  <Typography variant="body1">
                    Trabajamos incansablemente para asegurar el éxito y satisfacción
                    de nuestros clientes.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* Equipo */}
        <Typography variant="h3" align="center" gutterBottom>
          Nuestro Equipo
        </Typography>
        <Grid container spacing={4}>
          {teamMembers.map((member, index) => (
            <Grid item key={index} xs={12} md={4}>
              <Card sx={{ height: '100%', textAlign: 'center' }}>
                <CardContent>
                  <Avatar
                    sx={{
                      width: 120,
                      height: 120,
                      margin: '0 auto 16px',
                      bgcolor: 'primary.main',
                    }}
                  >
                    {member.name.charAt(0)}
                  </Avatar>
                  <Typography variant="h5" gutterBottom>
                    {member.name}
                  </Typography>
                  <Typography variant="subtitle1" color="primary" gutterBottom>
                    {member.position}
                  </Typography>
                  <Typography variant="body1">
                    {member.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default About;