'use client';

import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
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
import { useTranslations } from 'next-intl';


export default function NosotrosPage() {
  const t = useTranslations('about');
  
  const values = [
    {
      icon: <Engineering fontSize="large" />,
      title: t('values.innovation.title'),
      description: t('values.innovation.description'),
    },
    {
      icon: <StarRate fontSize="large" />,
      title: t('values.quality.title'),
      description: t('values.quality.description'),
    },
    {
      icon: <Public fontSize="large" />,
      title: t('values.sustainability.title'),
      description: t('values.sustainability.description'),
    },
    {
      icon: <EmojiObjects fontSize="large" />,
      title: t('values.expertise.title'),
      description: t('values.expertise.description'),
    },
  ];
  
  const achievements = [
    t('achievements.experience'),
    t('achievements.presence'),
    t('achievements.projects'),
    t('achievements.certifications'),
    t('achievements.team'),
    t('achievements.rnd'),
  ];

  const timeline = [
    {
      year: '2013',
      title: t('timeline.2013.title'),
      description: t('timeline.2013.description'),
    },
    {
      year: '2015',
      title: t('timeline.2015.title'),
      description: t('timeline.2015.description'),
    },
    {
      year: '2017',
      title: t('timeline.2017.title'),
      description: t('timeline.2017.description'),
    },
    {
      year: '2019',
      title: t('timeline.2019.title'),
      description: t('timeline.2019.description'),
    },
    {
      year: '2021',
      title: t('timeline.2021.title'),
      description: t('timeline.2021.description'),
    },
    {
      year: '2024',
      title: t('timeline.2024.title'),
      description: t('timeline.2024.description'),
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
        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h3" gutterBottom>
              {t('ourHistory')}
            </Typography>
            <Typography variant="body1" paragraph>
              {t('historyText')}
            </Typography>
            <Typography variant="body1" paragraph>
              {t('historyText2')}
            </Typography>
            <Typography variant="body1">
              {t('historyText3')}
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                bgcolor: 'grey.100',
                borderRadius: 2,
                p: 4,
                textAlign: 'center',
              }}
            >
              <Typography variant="h4" color="primary.main" gutterBottom>
                {t('ourMission')}
              </Typography>
              <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
                &ldquo;{t('missionText')}&rdquo;
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Box sx={{ bgcolor: 'grey.50', py: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" gutterBottom>
            {t('ourValues')}
          </Typography>
          <Typography variant="body1" align="center" sx={{ mb: 4, color: 'text.secondary' }}>
            {t('ourValuesDesc')}
          </Typography>
          
          <Grid container spacing={4}>
            {values.map((value, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
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
          <Grid size={{ xs: 12, md: 8 }}>
            <Typography variant="h3" gutterBottom>
              {t('ourJourney')}
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
          
          <Grid size={{ xs: 12, md: 4 }}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {t('ourAchievements')}
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
            <Grid size={{ xs: 12, md: 8 }}>
              <Typography variant="h4" gutterBottom>
                {t('ledFuture')}
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.9 }}>
                {t('ledFutureDesc')}
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box sx={{ textAlign: 'center' }}>
                <Lightbulb sx={{ fontSize: 80, mb: 2, opacity: 0.8 }} />
                <Typography variant="h6">
                  {t('continuousInnovation')}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}