import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Box, Paper, TextField, Button, Typography } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    phone: ''
  });

  const [isSaved, setIsSaved] = useState(true);

  // Animation for form entry
  const formAnimation = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(-20px)' },
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
    setIsSaved(false);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Auto-generate user ID
    const userId = new Date().getTime();

    // Save data to localStorage
    localStorage.setItem('userData', JSON.stringify({ ...formData, userId }));

    // Mark form as saved
    setIsSaved(true);

    // Show success toast
    toast.success('Data saved successfully!', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: 'colored'
    });
  };

  // Show alert if the user tries to close the tab with unsaved changes
  useEffect(() => {
    const beforeUnloadListener = (event) => {
      if (!isSaved) {
        event.preventDefault();
        event.returnValue = ''; // This triggers the default warning message in most browsers
      }
    };

    window.addEventListener('beforeunload', beforeUnloadListener);

    return () => {
      window.removeEventListener('beforeunload', beforeUnloadListener);
    };
  }, [isSaved]);

  return (
    <>
      <ToastContainer />
      <animated.div style={formAnimation}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
          bgcolor="#f4f4f9"
          padding={3}
        >
          <Paper
            elevation={3}
            sx={{
              width: '100%',
              maxWidth: 600,
              padding: 4,
              borderRadius: 2,
              bgcolor: '#ffffff',
              boxShadow: 5,
            }}
          >
            <Typography variant="h4" gutterBottom align="center" color="primary">
              User Data Form
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                margin="normal"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <TextField
                label="Address"
                variant="outlined"
                fullWidth
                margin="normal"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <TextField
                label="Phone"
                variant="outlined"
                fullWidth
                margin="normal"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
              <Box textAlign="center" marginTop={2}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  size="large"
                  sx={{ width: '50%' }}
                >
                  Save Data
                </Button>
              </Box>
            </form>
          </Paper>
        </Box>
      </animated.div>
    </>
  );
};

export default UserForm;
