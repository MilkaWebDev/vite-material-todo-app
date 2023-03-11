import React from 'react'
import { Grid, Typography } from '@mui/material';
import '../App.css';

const Header = ({ title }: { title: string }) => {

    return (
        <Grid className='header'>
            <Typography style={{
                fontSize: "25px",
                color: "white",
                fontWeight: 500
            }}>{title}</Typography>
        </Grid>
    )
}

export default Header