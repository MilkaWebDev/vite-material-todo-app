import { useState, useEffect } from 'react';
import { ISnackBar, TaskFormState } from '../models/interface';

export default function useLocalStorage(list: TaskFormState[]) {

    const [loading, setLoading] = useState<boolean>(false);
    const [isFirstRender, setIsFirstRender] = useState<boolean>(true);

    const INITIAL_STATE_SNACKBAR = {
        message: "",
        open: false,
        severity: undefined
    }

    const [snackState, setSnackState] = useState<ISnackBar>(INITIAL_STATE_SNACKBAR);

    const CloseSnackState = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') { return }
        setSnackState(INITIAL_STATE_SNACKBAR);
    };

    useEffect(() => {
        if (isFirstRender) {
            setIsFirstRender(false);
        } else if (!isFirstRender) {
            setLoading(true)
            try {
                const guardarLocal = (clave: string, valor: string): void => { localStorage.setItem(clave, valor) };
                guardarLocal("ToDoList", JSON.stringify(list));
                setSnackState({
                    open: true,
                    message: `Lista Actualizada`,
                    severity: "success"
                })
            } catch (error) {
                setSnackState({
                    open: true,
                    message: `No se pudo actualizar lista`,
                    severity: "error"
                })
            } finally {
                setLoading(false)
            }

        }

    }, [list]);

    return { loading, snackState, CloseSnackState };
}
