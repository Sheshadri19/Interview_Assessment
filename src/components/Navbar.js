import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; 
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useMediaQuery,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import EditIcon from "@mui/icons-material/Edit";
import BarChartIcon from "@mui/icons-material/BarChart";
import PersonIcon from "@mui/icons-material/Person";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import LockIcon from "@mui/icons-material/Lock";
import { auth, onAuthStateChanged, signOut } from "../firebaseConfig"; // Import Firebase auth methods

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [user, setUser] = useState(null); // State for the logged-in user
  const location = useLocation();
  const navigate = useNavigate(); // Initialize useNavigate hook for programmatic navigation
  const isMobile = useMediaQuery("(max-width: 768px)");

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

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = () => {
    signOut(auth); // Sign the user out
  };

  const navItems = [
    { label: "Home", path: "/", icon: <HomeIcon /> },
    { label: "Rich Text Editor", path: "/richtexteditor", icon: <EditIcon /> },
    { label: "Counter", path: "/counter", icon: <FormatListBulletedIcon /> },
    { label: "User Form", path: "/userform", icon: <PersonIcon /> },
    { label: "Dashboard", path: "/dashboard", icon: <BarChartIcon /> },
  ];

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#1e88e5" }}>
      <Toolbar>
        {isMobile ? (
          <>
            <IconButton edge="start" color="inherit" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              My App
            </Typography>
          </>
        ) : (
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            My App
          </Typography>
        )}

        {!isMobile &&
          navItems.map((item) => (
            <Button
              key={item.path}
              component={Link}
              to={item.path}
              color="inherit"
              sx={{
                backgroundColor: location.pathname === item.path ? "#1565c0" : "transparent",
                borderRadius: 2,
                mx: 1,
              }}
            >
              {item.icon} &nbsp; {item.label}
            </Button>
          ))}

        {/* Show user icon or login button */}
        {user ? (
          <>
            <Avatar
              sx={{ ml: 2, cursor: "pointer" }}
              onClick={() => navigate("/auth")} // Redirect to /auth page when avatar is clicked
            >
              {user.displayName ? user.displayName[0] : "U"} {/* Show first letter of displayName */}
            </Avatar>
            <Button color="inherit" onClick={handleLogout} sx={{ mx: 1 }}>
              Logout
            </Button>
          </>
        ) : (
          <Button
            component={Link}
            to="/auth"
            color="inherit"
            sx={{
              backgroundColor: location.pathname === "/auth" ? "#1565c0" : "transparent",
              borderRadius: 2,
              mx: 1,
            }}
          >
            <LockIcon /> &nbsp; Login
          </Button>
        )}
      </Toolbar>

      {/* Drawer for Mobile View */}
      <Drawer anchor="left" open={mobileOpen} onClose={handleDrawerToggle}>
        <Box sx={{ width: 250 }}>
          <List>
            {navItems.map((item) => (
              <ListItem
                key={item.path}
                button
                component={Link}
                to={item.path}
                onClick={handleDrawerToggle}
                sx={{
                  backgroundColor: location.pathname === item.path ? "#bbdefb" : "transparent",
                }}
              >
                {item.icon} &nbsp;
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
