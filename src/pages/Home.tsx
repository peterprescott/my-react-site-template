import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Home: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: 'calc(100vh - 128px)', 
      textAlign: 'center' 
    }}>
      <Typography 
        variant="h3" 
        component="h1" 
        gutterBottom
        sx={{ 
          fontWeight: 'bold',
          mb: 2 
        }}
      >
        React Website Template
      </Typography>
      
      <Typography 
        variant="h6" 
        component="p" 
        color="text.secondary"
        sx={{ 
          maxWidth: 600,
          mb: 4 
        }}
      >
        A clean, minimal React template with Material-UI, ready to be customized 
        for your next project.
      </Typography>

      <Box sx={{ 
        display: 'flex', 
        gap: 2 
      }}>
        <Typography variant="body1">
          Start editing this page in <code>src/pages/Home.tsx</code>
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;
