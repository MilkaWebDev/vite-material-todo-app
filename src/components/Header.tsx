import React from 'react'
import { Grid, Typography } from '@mui/material';
import '../App.css';

const Header = () => {

    return (
        <Grid className='header'>
            <Typography style={{
                fontSize: "25px",
                color: "white",
                fontWeight: 500
            }}>To Do App</Typography>
        </Grid>
    )
}

export default Header