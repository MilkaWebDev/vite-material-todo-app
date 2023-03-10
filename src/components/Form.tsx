
import { Grid, TextField, Container, Button } from '@mui/material';
import '../App.css';
import { IForm } from '../models/interface';


const Form = (props: IForm) => {

    const { error, helperText, newTask, addNew, handleChange, edit, loading } = props

    return (
        <Container maxWidth="sm" className="form-container">
            <form>
                <Grid container alignItems="center">
                    <Grid item md={12}>
                        <TextField
                            type="text"
                            id="outlined-basic"
                            fullWidth
                            label={(edit ? "Tarea a modificar" : "Ingrese una tarea")}
                            variant="outlined"
                            error={error}
                            autoComplete='off'
                            helperText={error ? helperText : ""}
                            value={newTask.task}
                            onKeyDown={(e) => {
                                if (!error && e.key === "Enter") {
                                    addNew(e);
                                }
                            }}
                            onChange={(e) => handleChange(e)}
                        />
                    </Grid>
                    <Button
                        onClick={(e) => addNew(e)}
                        disabled={error || loading}
                        style={{ margin: "1rem auto 0 auto", background: (error ? "grey" : "#9c4bf2"), color: "white" }}  >
                        {edit ? "Modificar" : "Agregar"}
                    </Button>
                </Grid>
            </form>
        </Container>
    )
}

export default Form