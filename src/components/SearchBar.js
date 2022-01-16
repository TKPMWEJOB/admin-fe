import { IconButton } from "@mui/material";
import { InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { TextField } from "@mui/material";

export default function ({ params, setParams, setRefetchData, refetchData }) {
    const handleSearch = (e) => {
        let newParams = params;
        newParams["name"] = e.target.value;
        setParams(newParams);
        setRefetchData(!refetchData);
    }

    return (
        <TextField
            style={{ marginRight: "20px", marginBottom: "20px" }}
            label="Search"
            onChange={handleSearch}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="start">
                        <IconButton>
                            <SearchIcon />
                        </IconButton>
                    </InputAdornment>
                )
            }}
        />
    )
}