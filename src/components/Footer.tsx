import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => (
  <Box sx={{ py: 4, textAlign: 'center', bgcolor: 'background.default' }}>
    <Typography variant="body2" color="textSecondary">
      &copy; 2024 PlayPuse, Inc. All rights reserved
    </Typography>
  </Box>
);

export default Footer;
