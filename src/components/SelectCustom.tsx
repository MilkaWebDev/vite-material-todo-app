import React from 'react'
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';


const SelectCustom = ({ estado, changeState }) => {
    return (
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">Estado de tarea</InputLabel>
            <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={estado}
                onChange={changeState}
                label="Estado"
                style={{ width: "15rem" }}
            >

                <MenuItem value={"todas"}>Todas</MenuItem>
                <MenuItem value={"false"}>Pendientes</MenuItem>
                <MenuItem value={"true"}>Completas</MenuItem>
            </Select>
        </FormControl>
    )
}

export default SelectCustom