import { useState } from 'react'
import { Typography, List, Container, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import Task from './Task';
import SelectCustom from './SelectCustom';
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
                        {filterList()?.map((item: TaskFormState) => <Task key={item.id} item={item} editTask={editTask} completeTask={completeTask} deleteTask={deleteTask} />)}
                    </List>
                </>

            )}

        </Container>
    );
}

export default ToDoList