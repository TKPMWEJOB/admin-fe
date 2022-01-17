import * as React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useContext } from 'react';
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Home';

import { UserContext } from '../../contexts/UserContext';
import SigninButton from './SigninButton';
import LoggedButtons from './LoggedButtons';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function CustomAppBar({handleDrawerOpen, open}) {
  const { userInfo } = useContext(UserContext);
console.log(userInfo);
  const navigate = useNavigate();

  const handleGoUserProfile = () => {
    const href = '/user';
    navigate(href);
    window.location.reload();
  }
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      {
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Moorssalc Elgoog Admin
          </Typography>
          <Typography variant="h6" sx={{ flexGrow: 1}} />
          {userInfo.isLogin ? <LoggedButtons handleAvatarClick={handleGoUserProfile} /> : <SigninButton />}
        </Toolbar>
      </AppBar>
      }
    </Box>
  );
}
