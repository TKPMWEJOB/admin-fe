import { IconButton } from "@mui/material";
import { InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { TextField } from "@mui/material";

export default function ({ handleSearch }) {
    return (
        <TextField
            style={{ marginBottom: "20px" }}
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