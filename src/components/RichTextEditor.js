// RichTextEditor.js
import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 
import { Button, Typography, Paper, Box } from '@mui/material';
import { animated, useSpring } from 'react-spring';

const RichTextEditor = () => {
  const [editorText, setEditorText] = useState('');
  const [isSaved, setIsSaved] = useState(false);

  // Animation for smooth appearance
  const fadeIn = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(-20px)' },
  });

  // Handle editor change
  const handleChange = (value) => {
    setEditorText(value);
    setIsSaved(false);
  };

  // Save data to localStorage
  const saveData = () => {
    localStorage.setItem('editorData', editorText);
    setIsSaved(true);
    alert('Data saved!');
  };

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedData = localStorage.getItem('editorData');
    if (savedData) {
      setEditorText(savedData);
      setIsSaved(true);
    }
  }, []);

  // Prompt user to confirm before leaving if there are unsaved changes
  useEffect(() => {
    const beforeUnloadListener = (event) => {
      if (!isSaved) {
        event.preventDefault();
        event.returnValue = ''; // Triggers browser's confirmation popup
      }
    };

    window.addEventListener('beforeunload', beforeUnloadListener);
    return () => window.removeEventListener('beforeunload', beforeUnloadListener);
  }, [isSaved]);

  return (
    <animated.div style={fadeIn}>
      <Paper elevation={5} sx={{ padding: 4, borderRadius: 2 }}>
        <Typography variant="h4" color="primary" gutterBottom>
          Rich Text Editor
        </Typography>

        <ReactQuill 
          value={editorText}
          onChange={handleChange}
          modules={{
            toolbar: [
              [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
              [{ 'list': 'ordered'}, { 'list': 'bullet' }],
              [{ 'align': [] }],
              ['bold', 'italic', 'underline'],
              ['link'],
              [{ 'color': [] }, { 'background': [] }],
              ['clean'],
            ],
          }}
          style={{ height: 300, marginBottom: 20 }}
        />

        <Box display="flex" justifyContent="center">
          <Button 
            variant="contained" 
            color="primary" 
            onClick={saveData} 
            sx={{ marginRight: 2 }}
          >
            Save
          </Button>

          <Button 
            variant="outlined" 
            color="secondary" 
            onClick={() => setEditorText('')} 
            sx={{ marginLeft: 2 }}
          >
            Clear
          </Button>
        </Box>
      </Paper>
    </animated.div>
  );
};

export default RichTextEditor;
