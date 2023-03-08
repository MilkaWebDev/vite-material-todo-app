import React from 'react'
import { ListItem, ListItemText, ListItemIcon, IconButton, Checkbox } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const Task = ({ item, editTask, completeTask, deleteTask }) => {

    return (
        <ListItem key={item.id} >
            <Checkbox
                checked={item.complete}
                onChange={(e) => completeTask(e, item)}
                inputProps={{ 'aria-label': 'controlled' }}

            />
            <ListItemText style={{ textDecoration: (item.complete ? "line-through" : "none") }} primary={item.task} />

            <IconButton edge="end" onClick={(e) => editTask(e, item)} disabled={item.complete}>
                <EditIcon />
            </IconButton>
            <IconButton edge="end" aria-label="delete" disabled={item.complete} onClick={(e) => deleteTask(e, item)}>
                <DeleteIcon />
            </IconButton>

        </ListItem>
    )
}

export default Task