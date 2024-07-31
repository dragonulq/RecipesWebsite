'use client';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import '../styles/AppBar.css';
import {useEffect} from "react";

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  useEffect(() => {
    const setHeaderMinHeight = () => {
      const breakpoints = {
        xs: '(min-width: 0px) and (max-width: 899px)',
        md: '(min-width: 900px)',
      };
      const isXs = window.matchMedia(breakpoints.xs).matches;
      const isMd = window.matchMedia(breakpoints.md).matches;
      const appBar = document.getElementsByClassName("home-app-bar").item(0);
      if(isMd) {
        const originalViewportHeight= window.screen.height;
        const heightFactor= 0.1;
        const minHeightMediumScreen= heightFactor * originalViewportHeight + "px";
        appBar.style.minHeight = minHeightMediumScreen;
      }
      const minHeightXs = "40px";
      if(isXs) {
        appBar.style.minHeight = minHeightXs;
      }
    };
    setHeaderMinHeight();
    window.addEventListener('resize', setHeaderMinHeight);

  }, []);

  return (
      <AppBar className="home-app-bar"
              position="static"
              sx={{height:{xs:"4vh", md:"12vh"},
                   minHeight:{xs:"40px", md:"100px"}}}
      >
        <Container className="search-bar-container" sx={{display:{xs:'none', md:'block'}}}>

        </Container>
        <Container className="options-container" sx={{display:{xs:'none', md:'block'}}}>

        </Container>
      </AppBar>
  );
}

export default ResponsiveAppBar;