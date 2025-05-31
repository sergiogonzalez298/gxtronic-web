'use client';

import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Button,
  Divider,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import {
  Power,
  Lightbulb,
  Settings,
  Security,
} from '@mui/icons-material';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';



export default function ProductosPage() {
  const t = useTranslations('products');
  const tFeatures = useTranslations('products.productFeatures');
  
  const getLocalizedProducts = () => [
    {
      id: 1,
      name: 'GXTronic 24V 100W',
      category: t('categoryTypes.mediumPower.name'),
      reference: '91885',
      image: '/images/products/gxtronic-24v-100w.jpg',
      features: [tFeatures('ganTechnology'), tFeatures('naturalCooling'), tFeatures('manualDimming'), tFeatures('silent')],
      description: 'Fuente de alimentación compacta con tecnología de nitruro de galio (GaN) para instalaciones de tiras LED.',
      specifications: {
        voltage: '24V DC',
        power: '100W',
        amperage: '4.1A',
        protection: 'IP20',
        dimming: '1-100%, 2-50%, 3-20%, 4-10%',
      },
    },
    {
      id: 2,
      name: 'GXTronic 24V 200W',
      category: t('categoryTypes.highPower.name'),
      reference: '91887',
      image: '/images/products/gxtronic-24v-200w.jpg',
      features: [tFeatures('ganTechnology'), tFeatures('compactDesign'), tFeatures('highEfficiency'), tFeatures('naturalCooling')],
      description: 'Fuente de alimentación de alta potencia con tecnología GaN para aplicaciones profesionales.',
      specifications: {
        voltage: '24V DC',
        power: '200W',
        amperage: '8.3A',
        protection: 'IP20',
        cooling: 'Convección natural',
      },
    },
    {
      id: 3,
      name: 'GXTronic 24V 400W',
      category: t('categoryTypes.highPower.name'),
      reference: '91889',
      image: '/images/products/gxtronic-24v-400w.jpg',
      features: [tFeatures('ganTechnology'), tFeatures('maxPower'), tFeatures('robustDesign'), tFeatures('highEfficiency')],
      description: 'Fuente de alimentación de máxima potencia para instalaciones LED de gran escala.',
      specifications: {
        voltage: '24V DC',
        power: '400W',
        amperage: '16.6A',
        protection: 'IP20',
        cooling: 'Convección natural',
      },
    },
    {
      id: 4,
      name: 'GXTronic 24V 60W',
      category: t('categoryTypes.lowPower.name'),
      reference: '91884',
      image: '/images/products/gxtronic-24v-60w.jpg',
      features: [tFeatures('ganTechnology'), tFeatures('compactDesign'), tFeatures('manualDimming'), tFeatures('efficient')],
      description: 'Fuente de alimentación compacta con tecnología GaN ideal para aplicaciones de menor potencia.',
      specifications: {
        voltage: '24V DC',
        power: '60W',
        amperage: '2.5A',
        protection: 'IP20',
        dimming: '1-100%, 2-50%, 3-20%, 4-10%',
      },
    },
  ];
  
  const categories = [
    {
      name: t('categoryTypes.lowPower.name'),
      description: t('categoryTypes.lowPower.description'),
      icon: <Lightbulb />,
    },
    {
      name: t('categoryTypes.mediumPower.name'),
      description: t('categoryTypes.mediumPower.description'),
      icon: <Power />,
    },
    {
      name: t('categoryTypes.highPower.name'),
      description: t('categoryTypes.highPower.description'),
      icon: <Settings />,
    },
    {
      name: t('categoryTypes.industrial.name'),
      description: t('categoryTypes.industrial.description'),
      icon: <Security />,
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
        <Typography variant="h4" gutterBottom>
          {t('categories')}
        </Typography>
        <Grid container spacing={3} sx={{ mb: 6 }}>
          {categories.map((category, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
              <Card sx={{ height: '100%', textAlign: 'center' }}>
                <CardContent>
                  <Box sx={{ color: 'primary.main', mb: 2 }}>
                    {category.icon}
                  </Box>
                  <Typography variant="h6" gutterBottom>
                    {category.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {category.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Typography variant="h4" gutterBottom>
          {t('catalog')}
        </Typography>
        <Grid container spacing={4}>
          {getLocalizedProducts().map((product) => (
            <Grid size={{ xs: 12, md: 6 }} key={product.id}>
              <Card sx={{ height: '100%' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt={product.name}
                  sx={{
                    objectFit: 'contain',
                    bgcolor: 'grey.50',
                    p: 2,
                  }}
                />
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="h6">{product.name}</Typography>
                    <Chip
                      label={product.category}
                      size="small"
                      color="primary"
                      variant="outlined"
                    />
                  </Box>
                  {product.reference && (
                    <Typography variant="caption" color="text.secondary" sx={{ mb: 2, display: 'block' }}>
                      Ref: {product.reference}
                    </Typography>
                  )}
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {product.description}
                  </Typography>
                  
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle2" gutterBottom>
                      {t('features')}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
                      {product.features.map((feature, index) => (
                        <Chip key={index} label={feature} size="small" />
                      ))}
                    </Box>
                  </Box>

                  <Box sx={{ mb: 3 }}>
                    <Typography variant="subtitle2" gutterBottom>
                      {t('specifications')}
                    </Typography>
                    <Grid container spacing={1}>
                      {Object.entries(product.specifications).map(([key, value], index) => (
                        <Grid size={{ xs: 6 }} key={index}>
                          <Typography variant="caption" color="text.secondary">
                            {key === 'voltage' && 'Voltaje: '}
                            {key === 'power' && 'Potencia: '}
                            {key === 'amperage' && 'Amperaje: '}
                            {key === 'protection' && 'Protección: '}
                            {key === 'dimming' && 'Dimming: '}
                            {key === 'cooling' && 'Refrigeración: '}
                            {value}
                          </Typography>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>

                  <Link href="/contacto" style={{ textDecoration: 'none' }}>
                    <Button variant="contained" fullWidth>
                      {t('requestInfo')}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box sx={{ bgcolor: 'grey.50', py: 6 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 8 }}>
              <Typography variant="h5" gutterBottom>
                {t('customDriver')}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {t('customDriverDesc')}
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Link href="/contacto" style={{ textDecoration: 'none' }}>
                <Button variant="contained" size="large" fullWidth>
                  {t('contactSpecialist')}
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}