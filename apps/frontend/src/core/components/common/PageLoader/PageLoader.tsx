import { Box, CircularProgress } from '@mui/material';
import React from 'react';

export const PageLoader = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100%"
    >
      <CircularProgress value={200} size={90} />
    </Box>
  );
};
