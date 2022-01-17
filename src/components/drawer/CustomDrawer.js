import * as React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useContext } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';

import { UserContext } from '../../contexts/UserContext';

const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));
  
const StyledLink = styled(Link)`
    text-decoration: none;
    color: #1565c0;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;
  
const menuItems = [
    {
        name: 'Courses',
        icon: <MailIcon></MailIcon>,
        path: '/'
    },
    {
        name: 'User Management',
        icon: <MailIcon></MailIcon>,
        path: '/users'
    },
    {
        name: 'Admin Management',
        icon: <MailIcon></MailIcon>,
        path: '/admins'
    }
]

export default function CustomDrawer({handleDrawerClose, open}) {
  const theme = useTheme();
  
  return (
    <Box sx={{ flexGrow: 1 }}>
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
                },
            }}
            variant="persistent"
            anchor="left"
            open={open}
        >
            <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
                {menuItems.map((item, index) => (
                    <StyledLink to={item.path} style={{ textDecoration: 'none' }} key={item.name}>
                    <ListItem button key={item.name} onClick={handleDrawerClose}>
                        <ListItemIcon>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.name} />
                    </ListItem>
                    </StyledLink>
                ))}
            </List>
            <Divider />
        </Drawer>
    </Box>
  );
}
