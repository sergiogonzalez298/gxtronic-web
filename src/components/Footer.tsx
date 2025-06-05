'use client';

import {
  Box,
  Container,
  Typography,
  Link,
  IconButton,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import {
  Email,
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
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" gutterBottom sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              GXTRONIC
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, textAlign: { xs: 'center', md: 'left' } }}>
              {t('description')}
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" gutterBottom sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              {t('contact')}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'flex-start' } }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Email sx={{ mr: 1, fontSize: 20 }} />
                <Link color="inherit" href="mailto:info@gxtronic.com">
                  {tContact('email.content')}
                </Link>
              </Box>
              {/*<Box sx={{ display: 'flex', alignItems: 'center' }}>*/}
              {/*  <LocationOn sx={{ mr: 1, fontSize: 20 }} />*/}
              {/*  <Typography variant="body2">{tContact('location.content')}</Typography>*/}
              {/*</Box>*/}
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" gutterBottom sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              {t('followUs')}
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}>
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
