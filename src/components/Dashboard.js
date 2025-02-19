import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Avatar, Paper, Grid } from '@mui/material';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { auth, onAuthStateChanged } from '../firebaseConfig'; 
import { useSpring, animated } from 'react-spring';

function Dashboard() {
  const [user, setUser] = useState(null);
  const [counter, setCounter] = useState(0);
  const [activityData, setActivityData] = useState({
    increment: 0,
    decrement: 0,
    featureVisits: 0,
  });

  // Check Firebase authentication status
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser); // Set user if logged in
      } else {
        setUser(null); // Set user to null if not logged in
      }
    });

    return () => unsubscribe(); // Clean up the listener on component unmount
  }, []);

  // Data for the Line Chart (User Activity over time)
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'User Activity - Increment Actions',
        data: [activityData.increment, 20, 30, 40, 50], // Update with dynamic data
        borderColor: 'blue',
        fill: false,
      },
      {
        label: 'User Activity - Decrement Actions',
        data: [activityData.decrement, 10, 20, 30, 40], // Update with dynamic data
        borderColor: 'green',
        fill: false,
      },
      {
        label: 'Feature Visits',
        data: [activityData.featureVisits, 5, 15, 25, 35], // Update with dynamic data
        borderColor: 'orange',
        fill: false,
      },
    ],
  };

  // Handle counter increment and decrement
  const incrementCounter = () => {
    setCounter(counter + 1);
    setActivityData((prevData) => ({
      ...prevData,
      increment: prevData.increment + 1,
    }));
  };

  const decrementCounter = () => {
    setCounter(counter - 1);
    setActivityData((prevData) => ({
      ...prevData,
      decrement: prevData.decrement + 1,
    }));
  };

  // Track feature visits (e.g., user clicks on different sections)
  const visitFeature = () => {
    setActivityData((prevData) => ({
      ...prevData,
      featureVisits: prevData.featureVisits + 1,
    }));
  };

  // Animations using react-spring
  const profileAnimation = useSpring({
    opacity: user ? 1 : 0,
    transform: user ? 'translateY(0)' : 'translateY(-20px)',
    config: { tension: 170, friction: 25 },
  });

  const counterAnimation = useSpring({
    opacity: 1,
    transform: 'scale(1)',
    from: { opacity: 0, transform: 'scale(0.8)' },
    config: { tension: 170, friction: 25 },
    delay: 200,
  });

  const chartAnimation = useSpring({
    opacity: 1,
    transform: 'scale(1)',
    from: { opacity: 0, transform: 'scale(0.8)' },
    config: { tension: 180, friction: 25 },
    delay: 400,
  });

  return (
    <Box p={5}>
      {/* User Profile Section with Animation */}
      <animated.div style={profileAnimation}>
        {user ? (
          <Box mb={4}>
            <Paper elevation={6} sx={{ p: 3, display: 'flex', alignItems: 'center', backgroundColor: '#f5f5f5' }}>
              <Avatar
                sx={{
                  width: 80,
                  height: 80,
                  mr: 2,
                  border: '3px solid #1e88e5',
                  boxShadow: 3,
                }}
              >
                {user.displayName ? user.displayName[0] : 'U'}
              </Avatar>
              <Box>
                <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#1e88e5' }}>
                  {user.displayName || 'User'}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  {user.email}
                </Typography>
                <Button
                  variant="contained"
                  sx={{ mt: 2, backgroundColor: '#1e88e5', color: 'white' }}
                  onClick={visitFeature}
                >
                  Explore Dashboard
                </Button>
              </Box>
            </Paper>
          </Box>
        ) : (
          <Typography variant="h6" color="error">
            You are not logged in.
          </Typography>
        )}
      </animated.div>

      {/* Counter Section with Animation */}
      <animated.div style={counterAnimation}>
        <Box mb={4}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6">Counter: {counter}</Typography>
            <Button variant="contained" onClick={incrementCounter} sx={{ mr: 2 }}>
              Increment
            </Button>
            <Button variant="contained" onClick={decrementCounter}>
              Decrement
            </Button>
          </Paper>
        </Box>
      </animated.div>

      {/* Feature Visit Section */}
      <Box mb={4}>
        <Paper elevation={3} sx={{ p: 3 }}>
          <Typography variant="h6">Feature Visits</Typography>
          <Button variant="contained" onClick={visitFeature}>
            Visit Feature
          </Button>
        </Paper>
      </Box>

      {/* Chart Section with Animation */}
      <animated.div style={chartAnimation}>
        <Box>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              User Activity Trends
            </Typography>
            <Line data={chartData} />
          </Paper>
        </Box>
      </animated.div>
    </Box>
  );
}

export default Dashboard;
