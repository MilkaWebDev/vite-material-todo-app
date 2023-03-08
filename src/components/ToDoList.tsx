import { useState } from 'react'
import { Typography, List, Container, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import Task from './Task';
import SelectCustom from '../small-components/SelectCustom';
import { TaskFormState } from '../models/interface';

const ToDoList = ({ list, editTask, completeTask, deleteTask, estado, filterList, changeState }) => {

    return (
        <Container maxWidth="sm">
            {!list.length ? (
                <Typography variant="h6" color="error" style={{ textAlign: "center" }}>No se agregaron tareas aun</Typography>
            ) : (
                <>
                    <SelectCustom estado={estado} changeState={changeState} />
                    <List>
                        {filterList().length > 0 ? (
                            (filterList()?.map((item: TaskFormState) => <Task key={item.id} item={item} editTask={editTask} completeTask={completeTask} deleteTask={deleteTask} />))
                        ) : (
                            <Typography variant="h6" color="error" style={{ textAlign: "center", marginTop: "3rem" }}>No hay tareas {estado}</Typography>
                        )}
                    </List>
                </>

            )}

        </Container>
    );
}
export default ToDoList