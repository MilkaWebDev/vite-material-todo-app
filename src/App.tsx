
import { useState, useEffect, } from 'react';
import './App.css';


//hooks
import setStorage from './hooks/setStorage';
import { useForm } from "react-hook-form";
import getStorage from './hooks/getStorage';

//interface
import { TaskFormState, ConfirmDialogState } from './models/interface';


//components
import Header from "../src/components/Header"
import Form from './components/Form';
import ToDoList from './components/ToDoList';
import ConfirmDialog from './small-components/ConfirmDialog';


const App: React.FC = () => {
  //estados
  const [count, setCount] = useState<number>(0)
  const [newTask, setNewTask] = useState<TaskFormState>({ id: count, task: "", complete: false });
  const [list, setList] = useState<TaskFormState[]>(
    [],
  );

  const [error, setError] = useState<boolean>(false);
  const [helperText, setHelperText] = useState<string>("");
  const [edit, setEdit] = useState<boolean>(false)
  const [estado, setEstado] = useState<string>("todas");


  //estados que controlan l confirm Dialog
  const [confirmDialog, setConfirmDialog] = useState<ConfirmDialogState>({
    open: false,
    accion: "",
    elemento: "",
    onConfirm: null,
  });

  const handleClose = (): void => {
    setConfirmDialog({ ...confirmDialog, open: false });
  }

  //hook form
  const { handleSubmit, reset, clearErrors } = useForm({});

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
  const addNew = (e: React.MouseEvent<HTMLButtonElement>): void => {
    if (verificacion(newTask.task)) {
      if (edit) {
        const newArr = list.map(obj => {
          if (obj.id === newTask.id) {
            return newTask;
          }
          return obj;
        });
        setList(newArr);
        setNewTask({ id: count, task: "", complete: false })
        setEdit(false)
        reset();

      } else {
        setList([...list, newTask])
        setNewTask({ id: count, task: "", complete: false })
        setCount(count + 1)
        setStorage(list);

        reset();
      }

    }
    e.preventDefault();
  }

  //funcion para editar tarea existente
  const editTask = (e: React.MouseEvent<HTMLButtonElement>, item: TaskFormState): void => {
    setEdit(true)
    setNewTask(item)
  }

  //funcion que controla el checkbox
  const completeTask = (e: React.MouseEvent<HTMLButtonElement>, item: TaskFormState): void => {
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
        handleClose();
      },
    });

  }

  const changeState = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setEstado(e?.target?.value)
  }

  //funcion para filtrar lista
  const filterList = (): TaskFormState[] | undefined => {
    if (estado === "todas") { return list }
    else if (estado === "true") { return list.filter(item => item?.complete) }
    else if (estado === "false") { return list.filter(item => !item?.complete) }
  }

  useEffect(() => {
    setStorage(list)
  }, [list])


  return (
    <div className='general-container'>

      <Header />
      <Form error={error} helperText={helperText} newTask={newTask} addNew={addNew} handleChange={handleChange} edit={edit} />

      {confirmDialog && <ConfirmDialog confirmDialog={confirmDialog} handleClose={handleClose} />}

      <ToDoList list={list} editTask={editTask} completeTask={completeTask} deleteTask={deleteTask} estado={estado} filterList={filterList} changeState={changeState} />

    </div>

  );
}

export default App;
