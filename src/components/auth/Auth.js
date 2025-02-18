import React from 'react';
import { Button, Typography, Box, Paper, Avatar } from '@mui/material';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import { useAuth } from './AuthProvider';
import { useSpring, animated } from 'react-spring';
import GoogleIcon from '@mui/icons-material/Google';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const Auth = () => {
  const { user } = useAuth();

  // React Spring animations for login button and user welcome text
  const loginButtonAnimation = useSpring({
    opacity: 1,
    transform: 'scale(1)',
    from: { opacity: 0, transform: 'scale(0.8)' },
    config: { tension: 170, friction: 26 },
  });

  const logoutButtonAnimation = useSpring({
    opacity: user ? 1 : 0,
    transform: user ? 'scale(1)' : 'scale(0.8)',
    from: { opacity: 0, transform: 'scale(0.8)' },
    config: { tension: 170, friction: 26 },
  });

  const welcomeTextAnimation = useSpring({
    opacity: user ? 1 : 0,
    transform: user ? 'translateY(0)' : 'translateY(-20px)',
    from: { opacity: 0, transform: 'translateY(-20px)' },
    config: { tension: 200, friction: 25 },
  });

  const handleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error('Login failed:', error.message);
      alert(`Login Failed: ${error.message}`);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Logout failed:', error.message);
      alert(`Logout Failed: ${error.message}`);
    }
  };

  return (
    <Box
      p={5}
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      flexDirection="column"
      sx={{
        background: 'linear-gradient(135deg, #1e88e5, #0d47a1)', // Gradient that matches navbar
        minHeight: '100vh',
      }}
    >
      <Paper
        elevation={10}
        sx={{
          p: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderRadius: 3,
          boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
          background: '#fff',
          maxWidth: '400px',
          width: '100%',
        }}
      >
        {/* Welcome Message with Animation */}
        <animated.div style={welcomeTextAnimation}>
          {user && (
            <Typography
              variant="h5"
              sx={{
                fontWeight: 'bold',
                color: '#1e88e5',
                marginBottom: 3,
                textAlign: 'center',
              }}
            >
              Welcome, {user.displayName}
            </Typography>
          )}
        </animated.div>

        {/* Avatar for User (Profile Image) */}
        {user && (
          <Avatar sx={{ width: 56, height: 56, mb: 3 }}>
            {user.displayName ? user.displayName[0] : 'U'}
          </Avatar>
        )}

        {/* Login/Logout Buttons with Animation */}
        {user ? (
          <animated.div style={logoutButtonAnimation}>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleLogout}
              sx={{
                width: '200px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              startIcon={<ExitToAppIcon />}
            >
              Logout
            </Button>
          </animated.div>
        ) : (
          <animated.div style={loginButtonAnimation}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleLogin}
              sx={{
                width: '200px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              startIcon={<GoogleIcon />}
            >
              Login with Google
            </Button>
          </animated.div>
        )}
      </Paper>
    </Box>
  );
};

export default Auth;
