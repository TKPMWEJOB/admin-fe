import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { Switch, Stack, Typography, Tooltip } from "@mui/material";
import { UserContext } from '../contexts/UserContext'
import { SnackbarContext } from "../contexts/SnackbarContext";

export default function DataGridMappingComponent({ params }) {
  const [selected, setSelected] = useState([]);
  const { userInfo, updateUser } = useContext(UserContext);
  const { handleOpenErrorSnack, handleOpenSuccessSnack, handleSetMsgSnack } = useContext(SnackbarContext);

    useEffect(async () => {
        setSelected(params.value);
        console.log(params);
    }, [])

    async function handleChange() {
        try {
            const res = await axios.put(`${process.env.REACT_APP_API_URL}/admin/users`, {
                isMapping: !selected,
                id: params.id,
            });
            console.log(selected);
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
            <p>{selected ? "Yes" : "No"}</p>
        </Stack>
    )
}