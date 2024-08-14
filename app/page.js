'use client';

import React from 'react';
import { Container, Typography, Button, Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles'; 

const HeroContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '80vh',
  backgroundColor: '#f5f5f5',
  textAlign: 'center',
  padding: theme.spacing(4),
}));


const FeatureBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'center',
}));

const FeatureItem = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  padding: theme.spacing(2),
}));

export default function Home() {
  return (
    <Container maxWidth="lg">
      {/* Hero Section */}
      <HeroContainer>
        <Typography variant="h2" component="h1" gutterBottom>
          Flashcards Made Easy
        </Typography>
        <Typography variant="h6" component="p" color="textSecondary" gutterBottom>
          Convert any text into flashcards for effective learning.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
          <Button variant="contained" color="primary" href='/signup'>
            Sign Up
          </Button>
          <Button variant="outlined" color="primary" href='/signin'>
            Log In
          </Button>
          <Button variant='conatined' color='secondary' href='/generate'>
            Generate 
          </Button>
        </Box>
      </HeroContainer>

      {/* Features Section */}
      <FeatureBox>
        <Typography variant="h4" component="h2" gutterBottom>
          Features
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <FeatureItem>
              <Typography variant="h6" component="h3" gutterBottom>
                Easy Conversion
              </Typography>
              <Typography color="textSecondary">
                Paste your text, and we'll do the rest. Automatically generate flashcards in seconds.
              </Typography>
            </FeatureItem>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FeatureItem>
              <Typography variant="h6" component="h3" gutterBottom>
                Customizable
              </Typography>
              <Typography color="textSecondary">
                Adjust the content and format of your flashcards to suit your study style.
              </Typography>
            </FeatureItem>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FeatureItem>
              <Typography variant="h6" component="h3" gutterBottom>
                Accessible Anywhere
              </Typography>
              <Typography color="textSecondary">
                Access your flashcards on any device, anytime, anywhere.
              </Typography>
            </FeatureItem>
          </Grid>
        </Grid>
      </FeatureBox>

      {/* Pricing Section */}
      <Box sx={{ textAlign: 'center', mt: 8 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Simple Pricing
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Choose a plan that fits your needs.
        </Typography>
        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', gap: 2 }}>
          <Button variant="contained" color="secondary">
            View Pricing
          </Button>
        </Box>
      </Box>
    </Container>
  );
}