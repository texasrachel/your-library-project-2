import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

    // <Breadcrumbs aria-label="breadcrumb">
    //   <Link color="inherit" href="/" onClick={handleClick}>
    //     Material-UI
    //   </Link>
    //   <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
    //     Core
    //   </Link>
    //   <Typography color="textPrimary">Breadcrumb</Typography>
    // </Breadcrumbs>

const NavBar = () => {
  return(
      <div>
      <AppBar position="static">
          <Toolbar>
              <Typography variant="title" color="inherit">
              React & Material-UI Sample Application
              </Typography>
          </Toolbar>
      </AppBar>
      </div>
  )
}
export default NavBar;
