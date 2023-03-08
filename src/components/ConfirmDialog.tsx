import * as React from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded';
import { Grid, Button, Typography } from '@mui/material';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
    },
    '& .MuiDialogActions-root': {
    },
}));


export default function ConfirmDialog({ confirmDialog, handleClose }) {

    const { open, accion, elemento, onConfirm } = confirmDialog;

    return (
        <div>

            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <DialogContent dividers>
                    <Grid style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', height: "2rem", margin: 0 }}>
                        <IconButton onClick={handleClose}>
                            <CloseIcon style={{ width: "1.5rem", height: "1.5rem", color: "grey" }} />
                        </IconButton>
                    </Grid>
                    <Grid style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <ErrorRoundedIcon style={{ width: "3rem", height: "3rem", color: "#D81B23", marginBottom: "1rem" }} />
                    </Grid>

                    <Typography gutterBottom style={{ fontWeight: 500 }}>
                        ¿Está seguro de querer {accion} la tarea {elemento}?
                    </Typography>

                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={onConfirm} style={{ margin: "0 auto", background: "#D81B23", color: "white" }}>
                        {accion?.toUpperCase()}
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </div>
    );
}
