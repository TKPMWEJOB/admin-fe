import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';

import SignupDialog from './authentication/SignupDialog'

export default function CreateAdminButton({ setRefetchData }) {
    const [openSignup, setOpenSignup] = React.useState(false);

    const handleCreateSignup = () => {
        setOpenSignup(true);
    };

    const handleCloseSignup = () => {
        setOpenSignup(false);
    };

    return (
        <>
            <Tooltip title="Create new admin account" arrow>
                <IconButton size="large" edge="start" color="inherit" aria-label="menu"
                    onClick={handleCreateSignup}>
                    <AddIcon />
                </IconButton>
            </Tooltip>
            <SignupDialog
                open={openSignup}
                handleClose={handleCloseSignup}
                dialogTitle="Sign Up"
                setRefetchData={setRefetchData}
            />
        </>
    );
}
