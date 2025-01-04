import React from 'react';
import { Container, Typography } from '@mui/material';

const Blank: React.FC = () => {
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
        Blank Page
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
        This is a placeholder page. Replace the content in <code>src/pages/Blank.tsx</code>.
      </Typography>
    </Container>
  );
};

export default Blank;
