'use client';

import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
} from '@mui/material';
import {
  Email,
  Phone,
  LocationOn,
  LinkedIn,
  Facebook,
} from '@mui/icons-material';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'primary.dark',
        color: 'white',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              GXTRONIC
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Fabricante líder de drivers LED de alta calidad para aplicaciones 
              industriales y comerciales.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Contacto
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Email sx={{ mr: 1, fontSize: 20 }} />
              <Link color="inherit" href="mailto:info@gxtronic.com">
                info@gxtronic.com
              </Link>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Phone sx={{ mr: 1, fontSize: 20 }} />
              <Typography variant="body2">+34 XXX XXX XXX</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <LocationOn sx={{ mr: 1, fontSize: 20 }} />
              <Typography variant="body2">España</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Síguenos
            </Typography>
            <Box>
              <IconButton color="inherit" size="small">
                <LinkedIn />
              </IconButton>
              <IconButton color="inherit" size="small">
                <Facebook />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ borderTop: 1, borderColor: 'grey.700', mt: 4, pt: 2 }}>
          <Typography variant="body2" align="center">
            © {new Date().getFullYear()} GXTRONIC. Todos los derechos reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}