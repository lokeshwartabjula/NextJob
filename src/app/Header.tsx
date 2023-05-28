"use client";

import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  Slide,
  Box,
  Typography,
} from "@mui/material";
// import Image from 'next/image'

interface Props {
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children } = props;
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export const Header: React.FC = () => {
  return (
    <HideOnScroll>
      <AppBar position="sticky" >
        <Toolbar>
          <Box display="flex" flexGrow={1} alignItems="center">
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, marginLeft: 2 }}
            >
              Company Name
            </Typography>
          </Box>
          <Box display="flex">
            <Typography variant="body1" component="div" sx={{ marginRight: 2 }}>
              Menu1
            </Typography>
            <Typography variant="body1" component="div" sx={{ marginRight: 2 }}>
              Menu2
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};
