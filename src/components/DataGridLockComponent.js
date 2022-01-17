import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { Switch, Stack, Typography, Tooltip } from "@mui/material";
import { UserContext } from '../contexts/UserContext'
import { SnackbarContext } from "../contexts/SnackbarContext";

export default function DataGridLockComponent({ params }) {
  const [selected, setSelected] = useState([]);
  const { userInfo, updateUser } = useContext(UserContext);
  const { handleOpenErrorSnack, handleOpenSuccessSnack, handleSetMsgSnack } = useContext(SnackbarContext);

    useEffect(async () => {
        setSelected(params.value);
    }, [])

    async function handleChange() {
        try {
            const res = await axios.put(`${process.env.REACT_APP_API_URL}/admin/users`, {
                isLocked: !selected,
                id: params.id,
            });
            
            setSelected(!selected);
        } catch (error) {
            if (error.response?.status === 401) {
                updateUser(false, null);
            }
            handleOpenErrorSnack(true);
            handleSetMsgSnack(error.response.data.message);
        }
    }

    return (
        <Stack direction="row" spacing={1} alignItems="center">
            <Switch 
                checked={selected}
                onChange={handleChange}
            />
            <p>{selected ? "Locked" : "Unlock"}</p>
        </Stack>
    )
}