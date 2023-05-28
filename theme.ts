"use client";
import { createTheme } from '@mui/material/styles';

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#64748B', // Replace with your desired primary color
    },
  },
  typography: {
    fontFamily: 'serif', // Replace with your desired font family
  },
});

export default theme;
