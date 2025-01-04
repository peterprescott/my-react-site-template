import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent } from '@mui/material';

const About: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography 
        variant="h4" 
        component="h1" 
        gutterBottom 
        sx={{ 
          textAlign: 'center', 
          mb: 4,
          fontFamily: "'Roboto Mono', monospace" 
        }}
      >
        About This Template
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Project Overview
              </Typography>
              <Typography variant="body1" paragraph>
                This is a minimal React website template designed to be easily 
                customizable. It includes a basic structure with routing, 
                theming, and responsive design.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Key Features
              </Typography>
              <Box sx={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: 1,
                justifyContent: 'center'
              }}>
                {['React', 'TypeScript', 'Material-UI', 'Routing', 'Theme Toggle'].map((feature) => (
                  <Box 
                    key={feature} 
                    sx={{ 
                      bgcolor: 'primary.light', 
                      color: 'primary.contrastText',
                      px: 2, 
                      py: 0.5, 
                      borderRadius: 2 
                    }}
                  >
                    {feature}
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Typography 
        variant="body1" 
        sx={{ 
          textAlign: 'center', 
          maxWidth: 600, 
          mx: 'auto',
          mt: 4 
        }}
      >
        Feel free to modify this template to suit your specific needs. 
        Replace the content, add new pages, and customize the styling.
      </Typography>
    </Container>
  );
};

export default About;
