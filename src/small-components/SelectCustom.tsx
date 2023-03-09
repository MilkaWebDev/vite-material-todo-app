import React from 'react'
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { ISelectCustom } from '../models/interface';


const SelectCustom = (props: ISelectCustom) => {
    const { estado, changeState } = props
    return (
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">Estado de tarea</InputLabel>
            <Select
                labelId="demo-simple-select-standard-label"
                color="secondary"
                id="demo-simple-select-standard"
                value={estado}
                onChange={changeState}
                label="Estado"
                style={{ width: "15rem" }}
            >

                <MenuItem value={"todas"}>Todas</MenuItem>
                <MenuItem value={"pendientes"}>Pendientes</MenuItem>
                <MenuItem value={"completadas"}>Completas</MenuItem>
            </Select>
        </FormControl>
    )
}

export default SelectCustom