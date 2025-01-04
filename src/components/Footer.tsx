import React from 'react';
import { Box, AppBar, Container, Toolbar, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box component="footer" sx={{ mt: 'auto' }}>
      <AppBar position="static" elevation={0}>
        <Container>
          <Toolbar disableGutters sx={{ justifyContent: 'center', height: '48px' }}>
            <Typography variant="h5" color="inherit" sx={{ fontSize: '1.2rem' }}>
              &copy; {new Date().getFullYear()}
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Footer;
