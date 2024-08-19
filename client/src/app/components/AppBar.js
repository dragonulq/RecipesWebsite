'use client';
import * as React from 'react';
import {useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import '../styles/AppBar.css';
import SearchBar from './SearchBar';
import Button from '@mui/material/Button';
import HeaderOption from './HeaderOption';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const headerOptions = ['What to cook', 'Recipes', 'Ingredients', 'Ocassions', 'About'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const buttonStyle = {
    borderRadius: '50px',  // This makes the button pill-shaped
    padding: '10px 20px',  // Add some padding for a better appearance
    borderWidth: '2px',    // Optional: adjust the border thickness
    borderColor: 'grey',   // Optional: adjust the border color
    textTransform: 'none', // Optional: disable uppercase text
    margin:'0px 5px',
  };

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
      const logoContainer = document.getElementsByClassName("logo-container").item(0);
      const logo = document.getElementsByClassName("logo").item(0);
      const logoContainerHeight = getComputedStyle(logoContainer).height;
      logo.style.minHeight = logoContainerHeight;
      logo.style.maxHeight = logoContainerHeight;

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
        <Container className="outer-search-bar-container"
                   sx={{display: {xs: 'none', md: 'flex'}, alignItems: "center"}}>
          <div className="padding-div">

          </div>
          <div className="logo-container">
            <img src="images/img.png" alt="logo" className="logo"/>
          </div>
          <div className="inner-search-bar-container">
            <SearchBar/>
          </div>
          {/*<Button variant="contained"*/}
          {/*        sx={{height:"50%", borderTopLeftRadius:"50%", borderBottomLeftRadius:"50%", padding:"10px 20px", fontSize:"12px"}}>*/}
          {/*  Sign Up*/}
          {/*</Button>*/}
          <div className="login-buttons-div">
            <Button
                variant="outlined"
                sx={buttonStyle}
            >
              Sign Up
            </Button>
            <Button
                variant="contained"
                sx={buttonStyle}
            >
              Log In
            </Button>
          </div>


          {/*{new Array(7).fill().map((_, i) => (*/}
          {/*    <div key={i} style={{backgroundColor: 'brown' }}>*/}
          {/*      Dummy div {i}*/}
          {/*    </div>*/}
          {/*))}*/}
          <div className="padding-div">

          </div>
        </Container>
        <Container className="options-container" sx={{display: {xs: 'none', md: 'flex'}}}>
          <div className="padding-div">

          </div>
          {
            headerOptions.map((o, i) => (
              <HeaderOption optionName={o}/>
            ))
          }
          <div className="padding-div">

          </div>
        </Container>
      </AppBar>
  );
}

export default ResponsiveAppBar;