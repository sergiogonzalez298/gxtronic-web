import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Alert,
  Snackbar,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí se implementaría la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
    setOpenSnackbar(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
    });
  };

  const contactInfo = [
    {
      icon: <LocationOnIcon sx={{ fontSize: 40 }} />,
      title: 'Ubicación',
      details: ['Ciudad Empresarial', '12345'],
    },
    {
      icon: <PhoneIcon sx={{ fontSize: 40 }} />,
      title: 'Teléfono',
      details: ['+1 234 567 890', '+1 234 567 891'],
    },
    {
      icon: <EmailIcon sx={{ fontSize: 40 }} />,
      title: 'Email',
      details: ['info@gxtronic.com', 'soporte@gxtronic.com'],
    },
  ];

  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" gutterBottom>
          Contáctenos
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph sx={{ mb: 6 }}>
          Estamos aquí para ayudarle con sus necesidades tecnológicas
        </Typography>

        <Grid container spacing={4}>
          {/* Información de Contacto */}
          <Grid item xs={12} md={4}>
            <Grid container spacing={3}>
              {contactInfo.map((info, index) => (
                <Grid item xs={12} key={index}>
                  <Card sx={{ height: '100%' }}>
                    <CardContent sx={{ textAlign: 'center' }}>
                      <Box sx={{ color: 'primary.main', mb: 2 }}>{info.icon}</Box>
                      <Typography variant="h6" gutterBottom>
                        {info.title}
                      </Typography>
                      {info.details.map((detail, idx) => (
                        <Typography key={idx} variant="body1" color="text.secondary">
                          {detail}
                        </Typography>
                      ))}
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Formulario de Contacto */}
          <Grid item xs={12} md={8}>
            <Card>
              <CardContent>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        label="Nombre"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Teléfono"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Empresa"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        multiline
                        rows={4}
                        label="Mensaje"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="large"
                        fullWidth
                      >
                        Enviar Mensaje
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={() => setOpenSnackbar(false)}
        >
          <Alert
            onClose={() => setOpenSnackbar(false)}
            severity="success"
            sx={{ width: '100%' }}
          >
            ¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
}

export default Contact;