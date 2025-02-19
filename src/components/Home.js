import React from 'react';
import { Button, Typography, Box, Grid, Card, CardContent, Icon } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { FormatBold, Devices, SaveAlt } from '@mui/icons-material';
import { useSpring, animated } from 'react-spring';

const Home = () => {
  const navigate = useNavigate();

  // Animations using React Spring for header, cards, and buttons
  const headerAnimation = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(-20px)' },
    config: { tension: 200, friction: 25 },
  });

  const cardAnimation = useSpring({
    opacity: 1,
    transform: 'scale(1)',
    from: { opacity: 0, transform: 'scale(0.8)' },
    reset: true,
    delay: 200,
    config: { tension: 180, friction: 25 },
  });

  const buttonAnimation = useSpring({
    opacity: 1,
    transform: 'scale(1)',
    from: { opacity: 0, transform: 'scale(0.8)' },
    config: { tension: 170, friction: 26 },
    delay: 500,
  });

  // Navigate to the rich text editor page
  const handleNavigate = () => {
    navigate('/richtexteditor');
  };

  return (
    <Box
      sx={{
        textAlign: 'center',
        marginTop: '5%',
        backgroundColor: 'white', // Light mode background
        minHeight: '100vh',
        color: 'black', // Text color for light mode
        padding: 4,
        transition: 'all 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* Header Animation */}
      <animated.div style={headerAnimation}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            marginBottom: 3,
            fontSize: '2.5rem',
            color: 'secondary.main', // Header color
          }}
        >
          Welcome to My
          <br />
          Feature Rich Text Editor App
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 400,
            marginBottom: 3,
            fontSize: '1.25rem',
            color: 'text.primary', // Subheading color
          }}
        >
          A powerful and easy-to-use rich text editor with multiple features.
        </Typography>
      </animated.div>

      {/* Cards for Features */}
      <Grid container spacing={4} justifyContent="center">
        {/* Card 1: Rich Text Features */}
        <Grid item xs={12} sm={6} md={4}>
          <animated.div style={cardAnimation}>
            <Card
              sx={{
                maxWidth: 345,
                boxShadow: 6,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: 2,
                backgroundColor: '#f5f5f5', // Card background color
              }}
            >
              <Icon sx={{ fontSize: 50, color: 'primary.main' }}>
                <FormatBold />
              </Icon>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h6" gutterBottom>
                  Rich Text Features
                </Typography>
                <Typography variant="body2" color={'text.primary'}>
                  Bold, italic, underline, lists, and more—everything you need for rich text editing.
                </Typography>
              </CardContent>
            </Card>
          </animated.div>
        </Grid>

        {/* Card 2: Responsive Design */}
        <Grid item xs={12} sm={6} md={4}>
          <animated.div style={cardAnimation}>
            <Card
              sx={{
                maxWidth: 345,
                boxShadow: 6,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: 2,
                backgroundColor: '#f5f5f5', // Card background color
              }}
            >
              <Icon sx={{ fontSize: 50, color: 'primary.main' }}>
                <Devices />
              </Icon>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h6" gutterBottom>
                  Responsive Design
                </Typography>
                <Typography variant="body2" color={'text.primary'}>
                  Optimized for all devices, providing a seamless experience across screens.
                </Typography>
              </CardContent>
            </Card>
          </animated.div>
        </Grid>

        {/* Card 3: Data Persistence */}
        <Grid item xs={12} sm={6} md={4}>
          <animated.div style={cardAnimation}>
            <Card
              sx={{
                maxWidth: 345,
                boxShadow: 6,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: 2,
                backgroundColor: '#f5f5f5', // Card background color
              }}
            >
              <Icon sx={{ fontSize: 50, color: 'primary.main' }}>
                <SaveAlt />
              </Icon>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h6" gutterBottom>
                  Data Persistence
                </Typography>
                <Typography variant="body2" color={'text.primary'}>
                  Save and load your work using local storage, ensuring no data is lost.
                </Typography>
              </CardContent>
            </Card>
          </animated.div>
        </Grid>
      </Grid>

      {/* Action Button Animation */}
      <animated.div style={buttonAnimation}>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleNavigate}
          sx={{
            marginTop: 4,
            padding: '10px 20px',
            fontSize: '1rem',
            borderRadius: 2,
            boxShadow: 3,
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          Start Using the Editor
        </Button>
      </animated.div>
    </Box>
  );
};

export default Home;
