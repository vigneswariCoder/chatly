import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';

const features = [
  {
    title: 'Integration ecosystem',
    description: 'Enhance your productivity by connecting with your favorite tools, keeping all your essentials in one place.',
  },
  {
    title: 'Goal setting and tracking',
    description: 'Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.',
  },
  {
    title: 'Secure data encryption',
    description: 'With end-to-end encryption, your data is securely stored and protected from unauthorized access.',
  },
];

const Features: React.FC = () => (
  <Box sx={{ py: 8 }}>
    <Grid container spacing={4} justifyContent="center">
      {features.map((feature, index) => (
        <Grid item xs={12} md={4} key={index}>
          <Paper sx={{ p: 4, textAlign: 'center', bgcolor: 'background.paper' }}>
            <Typography variant="h6" gutterBottom>
              {feature.title}
            </Typography>
            <Typography variant="body1">
              {feature.description}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Features;
