import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import { styled } from '@mui/material/styles';
import * as React from 'react';

import Courses from './pages/Dashboard';
import Admins from './pages/AdminManagement';
import Users from './pages/UserManagement';

import CustomAppBar from './components/appbar/AppBar'
import CustomDrawer from './components/drawer/CustomDrawer'
import { UserContext } from './contexts/UserContext';
import { SnackbarContext } from './contexts/SnackbarContext';
import SnackBars from './components/snackbars/SnackBars'

function App() {
  const localUser = JSON.parse(localStorage.getItem("user"));
  const [open, setOpen] = React.useState(false);
  const [userInfo, setUserInfo] = React.useState({
    isLogin: localUser?.isLogin,
    info: localUser?.info,
  });

  const [openErrorSnack, setOpenErrorSnack] = React.useState(false);
  const [openSuccessSnack, setOpenSuccessSnack] = React.useState(false);
  const [SnackMsg, setSnackMsg] = React.useState("");

  const handleDrawerOpen = () => {
    if (userInfo.isLogin)
      setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  function updateUser(isLogin, info) {
    let newUser = {
      isLogin,
      info,
    };
    setUserInfo(newUser);
    console.log(isLogin, info);
    localStorage.setItem("user", JSON.stringify(newUser));
  }

  const handleOpenErrorSnack = (isOpen) => {
    setOpenErrorSnack(isOpen);
  };

  const handleOpenSuccessSnack = (isOpen) => {
    setOpenSuccessSnack(isOpen);
  };
  
  const handleSetMsgSnack = (msg) => {
    setSnackMsg(msg);
  }

  return (
    <Router>
      <SnackbarContext.Provider value={{ handleOpenErrorSnack, handleOpenSuccessSnack, handleSetMsgSnack }} >
        <UserContext.Provider value={{userInfo, updateUser}}>
          <CustomAppBar open={open} handleDrawerOpen={handleDrawerOpen} />
          { userInfo.isLogin ? <CustomDrawer handleDrawerClose={handleDrawerClose} open={open}/> : "" }
          <div onClick={handleDrawerClose} style={{ top: '0', bottom: '0', left: '0', right: '0', position: 'absolute' }}>
            <DrawerHeader />
            <Routes>
              <Route exact path="/" element={<Courses />} />
              <Route path="/admins" element={<Admins />} />
              <Route path="/users" element={<Users />} />
            </Routes>
          </div>

          <SnackBars 
            openErrorSnack={openErrorSnack} 
            openSuccessSnack={openSuccessSnack} 
            SnackMsg={SnackMsg} 
            setOpenErrorSnack={setOpenErrorSnack} 
            setOpenSuccessSnack={setOpenSuccessSnack}
          />
        </UserContext.Provider>
      </SnackbarContext.Provider>
    </Router>
  );
}

export default App;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));