import * as React from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import { Grid, Button, Typography } from '@mui/material';
import { IConfirmDialogState } from '../models/interface';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
    },
    '& .MuiDialogActions-root': {
    },
}));


export default function ConfirmDialog(props: IConfirmDialogState) {

    const { open, accion, elemento, onConfirm, handleClose } = props

    return (
        <div>

            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <DialogContent dividers>

                    <Grid style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <WarningRoundedIcon style={{ width: "3rem", height: "3rem", color: "#D81B23", marginBottom: "1rem" }} />
                    </Grid>

                    <Typography gutterBottom style={{ fontWeight: 500 }}>
                        ¿Está seguro de querer {accion} la tarea {elemento}?
                    </Typography>

                </DialogContent>
                <DialogActions>

                    <Button autoFocus onClick={handleClose} style={{ margin: "0 auto", background: "white", color: "#D81B23" }}>
                        CANCELAR
                    </Button>
                    <Button autoFocus onClick={onConfirm} style={{ margin: "0 auto", background: "#D81B23", color: "white", width: "150px" }}>
                        {accion?.toUpperCase()}
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </div>
    );
}
