
import { useState, useEffect, } from 'react';
import './App.css';

//hooks
import { useForm } from "react-hook-form";
import getStorage from './hooks/getStorage';
import useLocalStorage from './hooks/useLocalStorage';


//interface
import { TaskFormState, IConfirmDialogState } from './models/interface';

//components
import Header from "../src/components/Header"
import Form from './components/Form';
import ToDoList from './components/ToDoList';
import ConfirmDialog from './small-components/ConfirmDialog';
import SnackBar from './small-components/SnackBar';


const App = () => {
  //estados
  const [count, setCount] = useState<number>(0)
  const [newTask, setNewTask] = useState<TaskFormState>({ id: count, task: "", complete: false });
  const [list, setList] = useState<TaskFormState[]>([]);

  const [error, setError] = useState<boolean>(false);
  const [helperText, setHelperText] = useState<string>("");
  const [edit, setEdit] = useState<boolean>(false)
  const [estado, setEstado] = useState<string>("todas");

  const { loading, snackState, CloseSnackState } = useLocalStorage(list)


  //estados que controlan confirm Dialog
  const INITIAL_STATE_DIALOG =
  {
    open: false,
    accion: "",
    elemento: "",
    onConfirm: () => console.log("no agrego funcion"),
  }
  const [confirmDialog, setConfirmDialog] = useState<IConfirmDialogState>(INITIAL_STATE_DIALOG);

  const handleCloseConfirmDialog = (): void => {
    setConfirmDialog(INITIAL_STATE_DIALOG);
  }


  //hook form
  const { reset } = useForm({});

  const verificacion = (task: string): boolean => {
    let repeti2 = list.find(item => item.task.toUpperCase() === task.toUpperCase())
    if (repeti2 && !error) {
      setHelperText("Ya agrego esa tarea")
      setError(true)
      return false;
    } else if (/\s/g.test(task)) {
      setHelperText("Este campo no puede tener espacion en blanco")
      setError(true)
      return false;
    }
    else if (task === "") {
      setHelperText("Este campo no puede tener espacion en blanco")
      setError(true)
      return false;

    } else {
      setError(false);
      return true;
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    let task = e.target.value
    setError(false)
    if (edit) {
      setNewTask({ ...newTask, task: task })
    }
    else {
      setNewTask({ id: count, task: task, complete: false })
    }

  }

  //Funcion para agregar nueva tarea
  const addNew = (e: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLDivElement>): void => {
    if (verificacion(newTask.task)) {
      if (edit) {
        const newArr = list.map(obj => {
          if (obj.id === newTask.id) {
            return newTask;
          }
          return obj;
        });
        setList(newArr);

      } else {
        setList([...list, newTask])
        setCount(count + 1)
      }

      setNewTask({ id: count, task: "", complete: false })
      setEdit(false)
      reset();
    }
    e.preventDefault();
  }

  //funcion para editar tarea existente
  const editTask = (e: React.MouseEvent<HTMLButtonElement>, item: TaskFormState): void => {
    setEdit(true)
    setNewTask(item)
  }

  //funcion que controla el checkbox
  const completeTask = (e: React.ChangeEvent<HTMLInputElement>, item: TaskFormState): void => {
    const newArr = list.map(obj => {
      if (obj.id === item.id) {
        item.complete = !item.complete
        return item;
      }
      return obj;
    });
    setList(newArr);

  }

  //funcion para eliminar tarea
  const deleteTask = (e: React.MouseEvent<HTMLButtonElement>, item: TaskFormState): void => {
    setConfirmDialog({
      open: true,
      accion: "eliminar",
      elemento: item.task,
      onConfirm: () => {
        let newArr = list.filter(elem => elem.id !== item.id)
        setList(newArr);
        handleCloseConfirmDialog();

      },
    });
  }

  const changeState = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setEstado(e?.target?.value)
  }

  //funcion para filtrar lista
  const filterList = (): TaskFormState[] | any[] => {
    if (estado === "completadas") { return list.filter(item => item?.complete) }
    else if (estado === "pendientes") { return list.filter(item => !item?.complete) }
    else { return list }
  }


  return (
    <div className='general-container'>
      <Header />
      <Form error={error} helperText={helperText} newTask={newTask} addNew={addNew} handleChange={handleChange} edit={edit} />
      <ToDoList list={list} editTask={editTask} completeTask={completeTask} deleteTask={deleteTask} estado={estado} filterList={filterList} changeState={changeState} loading={loading} />
      <ConfirmDialog open={confirmDialog.open} accion={confirmDialog.accion} elemento={confirmDialog.elemento} onConfirm={confirmDialog.onConfirm} handleClose={handleCloseConfirmDialog} />
      <SnackBar open={snackState.open} message={snackState.message} severity={snackState.severity} handleClose={CloseSnackState} />

    </div>

  );
}

export default App;
