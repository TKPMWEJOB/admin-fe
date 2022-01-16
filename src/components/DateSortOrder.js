import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import { InputLabel } from "@mui/material";
import { FormControl } from "@mui/material";

export default function ({ params, setParams, setRefetchData, refetchData }) {
    const handleOrder = (e) => {
        let newParams = params;
        newParams["order"] = e.target.value;
        setParams(newParams);
        setRefetchData(!refetchData);
    }

    return (
        <FormControl>
            <InputLabel id="demo-simple-select-label">Order by</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={params.order}
                label="Order by"
                onChange={handleOrder}
            >
                <MenuItem value="DESC">Newest</MenuItem>
                <MenuItem value="ASC">Oldest</MenuItem>
            </Select>
        </FormControl>
    )
}