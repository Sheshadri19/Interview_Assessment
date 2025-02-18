import React, { useState } from 'react';
import { Button, Typography, Box, Grid, Card, CardContent, IconButton, Icon } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { FormatBold, Devices, SaveAlt, Brightness4, Brightness7 } from '@mui/icons-material';
import { useSpring, animated } from 'react-spring';

const Home = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);

  // Animations using React Spring
  const darkModeToggleAnimation = useSpring({
    opacity: darkMode ? 1 : 0,
    transform: darkMode ? 'rotate(180deg)' : 'rotate(0deg)',
    config: { tension: 170, friction: 26 },
  });

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

  const handleNavigate = () => {
    navigate('/richtexteditor');
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Box
      sx={{
        textAlign: 'center',
        marginTop: '5%',
        backgroundColor: darkMode ? '#121212' : 'white',
        minHeight: '100vh',
        color: darkMode ? 'white' : 'black',
        padding: 4,
        transition: 'all 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* Dark Mode Toggle Icon */}
      <animated.div style={darkModeToggleAnimation}>
        <IconButton
          onClick={toggleDarkMode}
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            color: darkMode ? 'white' : 'black',
          }}
        >
          {darkMode ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </animated.div>

      {/* Header Animation */}
      <animated.div style={headerAnimation}>
        <Typography variant="h2" sx={{ fontWeight: 700, marginBottom: 3, fontSize: '2.5rem', color: darkMode ? 'primary.main' : 'secondary.main' }}>
          Welcome to My<br />
          Feature Rich Text Editor App
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: 400, marginBottom: 3, fontSize: '1.25rem', color: darkMode ? 'text.secondary' : 'text.primary' }}>
          A powerful and easy-to-use rich text editor with multiple features.
        </Typography>
      </animated.div>

      {/* Cards for Features */}
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <animated.div style={cardAnimation}>
            <Card sx={{ maxWidth: 345, boxShadow: 6, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2, backgroundColor: darkMode ? '#333' : '#f5f5f5' }}>
              <Icon sx={{ fontSize: 50, color: 'primary.main' }}>
                <FormatBold />
              </Icon>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h6" gutterBottom>
                  Rich Text Features
                </Typography>
                <Typography variant="body2" color={darkMode ? 'text.secondary' : 'text.primary'}>
                  Bold, italic, underline, lists, and more—everything you need for rich text editing.
                </Typography>
              </CardContent>
            </Card>
          </animated.div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <animated.div style={cardAnimation}>
            <Card sx={{ maxWidth: 345, boxShadow: 6, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2, backgroundColor: darkMode ? '#333' : '#f5f5f5' }}>
              <Icon sx={{ fontSize: 50, color: 'primary.main' }}>
                <Devices />
              </Icon>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h6" gutterBottom>
                  Responsive Design
                </Typography>
                <Typography variant="body2" color={darkMode ? 'text.secondary' : 'text.primary'}>
                  Optimized for all devices, providing a seamless experience across screens.
                </Typography>
              </CardContent>
            </Card>
          </animated.div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <animated.div style={cardAnimation}>
            <Card sx={{ maxWidth: 345, boxShadow: 6, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2, backgroundColor: darkMode ? '#333' : '#f5f5f5' }}>
              <Icon sx={{ fontSize: 50, color: 'primary.main' }}>
                <SaveAlt />
              </Icon>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h6" gutterBottom>
                  Data Persistence
                </Typography>
                <Typography variant="body2" color={darkMode ? 'text.secondary' : 'text.primary'}>
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
