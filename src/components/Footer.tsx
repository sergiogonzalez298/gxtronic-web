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
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  const tContact = useTranslations('contact.info');

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
              {t('description')}
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              {t('contact')}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Email sx={{ mr: 1, fontSize: 20 }} />
              <Link color="inherit" href="mailto:info@gxtronic.com">
                {tContact('email.content')}
              </Link>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Phone sx={{ mr: 1, fontSize: 20 }} />
              <Typography variant="body2">{tContact('phone.content')}</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <LocationOn sx={{ mr: 1, fontSize: 20 }} />
              <Typography variant="body2">{tContact('location.content')}</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              {t('followUs')}
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
            © {new Date().getFullYear()} GXTRONIC. {t('allRightsReserved')}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}