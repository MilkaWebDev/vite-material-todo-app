import React from 'react'
import { TaskFormState } from '../models/interface';

//no estoy muy segura si el type de valor sea string o que devuelva void(asumo que si porque no hay ningun return)
const setStorage = (list: TaskFormState[]) => {
    const guardarLocal = (clave: string, valor: string): void => { localStorage.setItem(clave, valor) };
    guardarLocal("ToDoList", JSON.stringify(list));
}

export default setStorage