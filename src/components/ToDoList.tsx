import { useState } from 'react'
import { Typography, List, Container, CircularProgress } from '@mui/material';
import Task from './Task';
import SelectCustom from '../small-components/SelectCustom';
import { IToDoList, TaskFormState } from '../models/interface'

const ToDoList = (props: IToDoList) => {

    const { list, editTask, completeTask, deleteTask, estado, filterList, changeState, loading } = props

    if (loading) return (<CircularProgress color="secondary" style={{ marginTop: "3rem" }} />)

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