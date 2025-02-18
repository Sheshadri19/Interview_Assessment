import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { animated, useSpring } from 'react-spring';

function Counter() {
  const [count, setCount] = useState(0);
  const backgroundSpring = useSpring({
    background: `rgba(0, 0, 255, ${count / 10})`,
    config: { tension: 200, friction: 20 }
  });

  return (
    <animated.div style={{ ...backgroundSpring, height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Box>
        <Button variant="contained" color="primary" onClick={() => setCount(count + 1)}>Increment</Button>
        <Button variant="contained" color="secondary" onClick={() => setCount(count - 1)} style={{ marginLeft: 8 }}>Decrement</Button>
        <Button variant="outlined" onClick={() => setCount(0)} style={{ marginLeft: 8 }}>Reset</Button>
        <Typography variant="h6" mt={3}>Count: {count}</Typography>
      </Box>
    </animated.div>
  );
}

export default Counter;
