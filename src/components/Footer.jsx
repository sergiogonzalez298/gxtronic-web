import { Box, Container, Grid, Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) => theme.palette.grey[900],
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              GXTRONIC
            </Typography>
            <Typography variant="body2">
              Innovación y excelencia en soluciones empresariales
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Enlaces Rápidos
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Link
                component={RouterLink}
                to="/"
                color="inherit"
                sx={{ mb: 1 }}
              >
                Inicio
              </Link>
              <Link
                component={RouterLink}
                to="/about"
                color="inherit"
                sx={{ mb: 1 }}
              >
                Nosotros
              </Link>
              <Link
                component={RouterLink}
                to="/services"
                color="inherit"
                sx={{ mb: 1 }}
              >
                Servicios
              </Link>
              <Link
                component={RouterLink}
                to="/contact"
                color="inherit"
              >
                Contacto
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Contacto
            </Typography>
            <Typography variant="body2" paragraph>
              Email: info@gxtronic.com
            </Typography>
            <Typography variant="body2" paragraph>
              Teléfono: +1 234 567 890
            </Typography>
            <Typography variant="body2">
              Dirección: Ciudad Empresarial, 12345
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ mt: 3, textAlign: 'center' }}>
          <Typography variant="body2" color="inherit">
            © {new Date().getFullYear()} Gxtronic. Todos los derechos reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;