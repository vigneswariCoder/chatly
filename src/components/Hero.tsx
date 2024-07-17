import React from 'react';
import { Box, Button, Typography } from '@mui/material';

const Hero: React.FC = () => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      py: 8,
      bgcolor: 'background.default',
      color: 'text.primary',
    }}
  >
    <Typography variant="h2" component="h1" gutterBottom>
      One Task at a Time
    </Typography>
    <Typography variant="h5" component="p" gutterBottom>
      Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes.
    </Typography>
    <Button variant="contained" color="primary" sx={{ mt: 2 }}>
      Get for free
    </Button>
  </Box>
);

export default Hero;
