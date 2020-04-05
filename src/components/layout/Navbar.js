import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MyButton from '../../util/MyButton';
import PostScream from '../scream/PostScream';
import Notifications from './Notifications';
// MUI stuff
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
// Icons
import HomeIcon from '@material-ui/icons/Home';
import DogWhite from '../../images/dog-white.svg';

class Navbar extends Component {
  render () {
    const { authenticated } = this.props;
    return (
      <AppBar>
        <Toolbar className="nav-container">
          <div className='logo-and-title'>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <img height='26px' src={ DogWhite } alt='dogLogo' />
            </IconButton>
            <Typography variant="h6" >
              <span style={ { color: '#fff' } }> Bark-At</span>
            </Typography>
          </div>
          { authenticated ? (
            <div className='action-container'>
              <PostScream />
              <Link to="/">
                <MyButton tip="Home">
                  <HomeIcon />
                </MyButton>
              </Link>
              <Notifications />
            </div>
          ) : (
              <div className='authenticated-action-container'>
                <Button color="inherit" component={ Link } to="/login">
                  Login
              </Button>
                <Button color="inherit" component={ Link } to="/">
                  Home
              </Button>
                <Button color="inherit" component={ Link } to="/signup">
                  Signup
              </Button>
              </div>
            ) }
        </Toolbar>
      </AppBar>
    );
  }
}

Navbar.propTypes = {
  authenticated: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated
});

export default connect(mapStateToProps)(Navbar);
