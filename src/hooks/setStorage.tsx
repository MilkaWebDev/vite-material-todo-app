import React from 'react'

const setStorage = (list: any) => {
    const guardarLocal = (clave: string, valor: any) => { localStorage.setItem(clave, valor) };
    guardarLocal("ToDoList", JSON.stringify(list));
}

export default setStorage