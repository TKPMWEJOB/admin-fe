import * as React from 'react';
import Button from '@mui/material/Button';

import SigninDialog from '../authentication/SigninDialog';

export default function SigninButton() {
  const [openSignin, setOpenSignin] = React.useState(false);

  const handleCreateSignin = () => {
    setOpenSignin(true);
  };

  const handleCloseSignin = () => {
    setOpenSignin(false);
  };

  return (
    <div>
        <SigninDialog 
          open={openSignin}
          handleClose={handleCloseSignin}
          dialogTitle="Sign In"
        />
        <Button color="inherit" onClick={handleCreateSignin}>Sign in</Button>
    </div>
  );
}
