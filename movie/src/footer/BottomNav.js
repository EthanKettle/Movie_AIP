import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Trending from '../Trending';

export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);

  return (

      <Box sx={{ pb: 7 }} ref={ref}>
        <CssBaseline />
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <Link to='/'>
              <BottomNavigationAction label="Home" icon={<HomeIcon />} />
            </Link>
            <Link to='/trending'>
              <BottomNavigationAction label="Trending" icon={<WhatshotIcon />} />
            </Link>
            <Link to='/search'>
              <BottomNavigationAction label="Search" icon={<SearchIcon />} />
            </Link>
          

          </BottomNavigation>
        </Paper>
      </Box>

    
  );
}
