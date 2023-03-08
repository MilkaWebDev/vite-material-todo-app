import React from 'react'
import { TaskFormState } from '../models/interface';

const getStorage = () => {
    let array: TaskFormState[] = JSON.parse(localStorage.getItem('ToDoList') || '[]');
    return array
}

export default getStorage