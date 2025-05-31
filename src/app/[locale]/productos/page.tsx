'use client';

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Button,
  Divider,
} from '@mui/material';
import {
  Power,
  Lightbulb,
  Settings,
  Security,
} from '@mui/icons-material';
import { useTranslations } from 'next-intl';

const products = [
  {
    id: 1,
    name: 'Driver LED 24V - 60W',
    category: 'Potencia Media',
    image: '/api/placeholder/300/200',
    features: ['Dimable', '24V DC', '60W', 'IP67'],
    description: 'Driver LED de potencia media ideal para aplicaciones comerciales y residenciales.',
    specifications: {
      voltage: '24V DC',
      power: '60W',
      efficiency: '>90%',
      protection: 'IP67',
    },
  },
  {
    id: 2,
    name: 'Driver LED 48V - 150W',
    category: 'Alta Potencia',
    image: '/api/placeholder/300/200',
    features: ['Dimable', '48V DC', '150W', 'IP65'],
    description: 'Driver de alta potencia para aplicaciones industriales y alumbrado público.',
    specifications: {
      voltage: '48V DC',
      power: '150W',
      efficiency: '>92%',
      protection: 'IP65',
    },
  },
  {
    id: 3,
    name: 'Driver LED 12V - 30W',
    category: 'Baja Potencia',
    image: '/api/placeholder/300/200',
    features: ['Compacto', '12V DC', '30W', 'IP20'],
    description: 'Solución compacta para aplicaciones de interior y decorativas.',
    specifications: {
      voltage: '12V DC',
      power: '30W',
      efficiency: '>88%',
      protection: 'IP20',
    },
  },
  {
    id: 4,
    name: 'Driver LED 24V - 100W Industrial',
    category: 'Industrial',
    image: '/api/placeholder/300/200',
    features: ['Robusto', '24V DC', '100W', 'IP68'],
    description: 'Driver industrial resistente para entornos exigentes y condiciones adversas.',
    specifications: {
      voltage: '24V DC',
      power: '100W',
      efficiency: '>94%',
      protection: 'IP68',
    },
  },
];


export default function ProductosPage() {
  const t = useTranslations('products');
  
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
            <Grid item xs={12} sm={6} md={3} key={index}>
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
          {products.map((product) => (
            <Grid item xs={12} md={6} key={product.id}>
              <Card sx={{ height: '100%' }}>
                <CardMedia
                  sx={{
                    height: 200,
                    bgcolor: 'grey.100',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography variant="h6" color="text.secondary">
                    {t('productImage')}
                  </Typography>
                </CardMedia>
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                    <Typography variant="h6">{product.name}</Typography>
                    <Chip
                      label={product.category}
                      size="small"
                      color="primary"
                      variant="outlined"
                    />
                  </Box>
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
                      <Grid item xs={6}>
                        <Typography variant="caption" color="text.secondary">
                          Voltaje: {product.specifications.voltage}
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="caption" color="text.secondary">
                          Potencia: {product.specifications.power}
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="caption" color="text.secondary">
                          Eficiencia: {product.specifications.efficiency}
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="caption" color="text.secondary">
                          Protección: {product.specifications.protection}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>

                  <Button variant="contained" fullWidth>
                    {t('requestInfo')}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box sx={{ bgcolor: 'grey.50', py: 6 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={8}>
              <Typography variant="h5" gutterBottom>
                {t('customDriver')}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {t('customDriverDesc')}
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Button variant="contained" size="large" fullWidth>
                {t('contactSpecialist')}
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}