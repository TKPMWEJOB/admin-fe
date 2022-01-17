import * as React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import axios from 'axios';

export default function LoggedButtons({handleAvatarClick}) {
    const { userInfo, updateUser } = useContext(UserContext);
    const navigate = useNavigate();
    
    const handleSignout = async () => {
        let response = await axios.get(`${process.env.REACT_APP_API_URL}/auth/logout`);
        console.log(response);
        updateUser(false, null);
        navigate('/');
    };

    return (
    <Box sx={{display: "flex",flexDirection: "row"}}>
        <Tooltip title="User Profile" arrow>
            <Avatar sx={{cursor: 'pointer'}} src="/user.png" onClick={handleAvatarClick}/>
        </Tooltip>
        <Button color="inherit" onClick={handleSignout} sx={{ml: 2}}>Sign out</Button>
    </Box>
    );
}
