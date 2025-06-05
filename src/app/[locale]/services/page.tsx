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
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function ServicesPage() {
  const t = useTranslations('services');
  
  const services = [
    {
      title: t('serviceTypes.customDevelopment.title'),
      icon: <Build fontSize="large" />,
      description: t('serviceTypes.customDevelopment.description'),
      features: [
        'Technical requirements analysis',
        'Optimized circuit design',
        'Prototyping and testing',
        'Certification and approval',
        'Series production',
      ],
    },
    {
      title: t('serviceTypes.technicalSupport.title'),
      icon: <Support fontSize="large" />,
      description: t('serviceTypes.technicalSupport.description'),
      features: [
        'Specialized technical consulting',
        'Problem solving',
        'System optimization',
        'Firmware updates',
        '24/7 support for premium clients',
      ],
    },
    {
      title: t('serviceTypes.installation.title'),
      icon: <Speed fontSize="large" />,
      description: t('serviceTypes.installation.description'),
      features: [
        'Installation planning',
        'On-site configuration',
        'Functionality testing',
        'Staff training',
        'Technical documentation',
      ],
    },
    {
      title: t('serviceTypes.maintenance.title'),
      icon: <Assignment fontSize="large" />,
      description: t('serviceTypes.maintenance.description'),
      features: [
        'Periodic inspections',
        'Cleaning and calibration',
        'Component replacement',
        'Status reports',
        'Extended warranty',
      ],
    },
  ];

  const faqs = [
    {
      question: 'What warranty do you offer on your products?',
      answer: 'We offer 3 years warranty on all our standard LED drivers and up to 5 years on industrial products. The warranty covers manufacturing defects and malfunction under normal use conditions.',
    },
    {
      question: 'Do you make international shipments?',
      answer: 'Yes, we ship throughout Asia and internationally. Delivery times vary depending on destination, generally between 3-7 business days in Asia and 7-14 days internationally.',
    },
    {
      question: 'Can you develop drivers with particular specifications?',
      answer: 'Absolutely. We have a specialized engineering team that can develop custom drivers according to your specific requirements. Typical development time is 4-8 weeks.',
    },
    {
      question: 'What certifications do your products have?',
      answer: 'All our products have CE, RoHS certification and most also have UL certification. For specific applications, we can obtain additional certifications as needed.',
    },
    {
      question: 'Do you offer technical training?',
      answer: 'Yes, we offer both in-person and virtual technical training programs. They include installation, configuration, maintenance and troubleshooting.',
    },
  ];

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
            {t('title')}
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9 }}>
            {t('subtitle')}
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
            {t('workProcess')}
          </Typography>
          <Typography variant="body1" align="center" sx={{ mb: 4, color: 'text.secondary' }}>
            {t('workProcessDesc')}
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
                  {t('workSteps.consultation.title')}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {t('workSteps.consultation.description')}
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
                  {t('workSteps.proposal.title')}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {t('workSteps.proposal.description')}
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
                  {t('workSteps.development.title')}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {t('workSteps.development.description')}
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
                  {t('workSteps.delivery.title')}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {t('workSteps.delivery.description')}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography variant="h4" align="center" gutterBottom>
          {t('faq')}
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 4, color: 'text.secondary' }}>
          {t('faqDesc')}
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
                {t('readyToStart')}
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.9 }}>
                {t('readyToStartDesc')}
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  fullWidth
                >
                  {t('requestConsultation')}
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}