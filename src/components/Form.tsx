
import { Grid, TextField, Container, Button } from '@mui/material';
import '../App.css';


const Form: React.FC = ({ error, helperText, newTask, addNew, handleChange, edit }) => {

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
                        disabled={error}
                        style={{ margin: "1rem auto 0 auto", background: (error ? "grey" : "#9c4bf2"), color: "white" }}  >
                        {edit ? "Modificar" : "Agregar"}
                    </Button>
                </Grid>
            </form>
        </Container>
    )
}

export default Form