import React from 'react';
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Button from '@material-ui/core/Button';
import './Header.scss';

function Header() {
  return (
      <Grid
        container
        className="header"
        justify="space-around"
        alignItems="center"
      >
        <Grid 
          container 
          className="first-menu"
          justify="space-around"
          alignItems="center"
        >
          <a href="https://mkdecision.com/" className="logo">
            <img 
              src={process.env.PUBLIC_URL + "/img/logo.png"}
              alt="MK Decision Logo"
              className="logo-img"
            />
          </a>
          <a href="https://mkdecision.com/platform/" className="menu-item">
            <span className="menu-item">
              Platform
            </span>
          </a>
          <a href="https://mkdecision.com/key-features/" className="menu-item">
            <span className="menu-item">
              Solutions 
            </span>
          </a>
          <a href="https://mkdecision.com/about-us/" className="menu-item">
            <span  className="menu-item">
              Company 
            </span>
          </a>
        </Grid>
        <div className="menu-item contact">
          <Button color="primary" variant="contained" disableElevation className="contact-button">
            <span>Contact us </span><FontAwesomeIcon className="icon" icon={faChevronRight} />
          </Button>
        </div>
      </Grid>
  );
}

export default Header;
