import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header: React.FC = () => (
  <AppBar position="static" color="transparent" elevation={0}>
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'text.primary', fontSize: '28px' }}>
        PlayPuse
      </Typography>
      <Button
        variant="contained"
        sx={{
          background: 'orange',
          ':hover': {
            bgcolor: '#9c6501',
          }
        }}>
        Get App
      </Button>
    </Toolbar>
  </AppBar>
);

export default Header;
