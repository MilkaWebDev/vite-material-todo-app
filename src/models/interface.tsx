export interface TaskFormState {
    id: number;
    task: string;
    complete: boolean
}

export interface IForm {
    error: boolean,
    helperText: string,
    newTask: TaskFormState,
    addNew: (e: React.KeyboardEvent<HTMLDivElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    edit: boolean,
    loading: boolean

}

export interface IToDoList {
    list: TaskFormState[],
    editTask: (e: React.MouseEvent<HTMLButtonElement>, item: TaskFormState) => void,
    completeTask: (e: React.ChangeEvent<HTMLInputElement>, item: TaskFormState) => void,
    deleteTask: (e: React.MouseEvent<HTMLButtonElement>, item: TaskFormState) => void,
    estado?: string,
    filterList(): TaskFormState[] | any[],
    changeState: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    loading: boolean,

}

export interface ITask extends Partial<IToDoList> {
    item: TaskFormState
}

export interface ISelectCustom extends Partial<IToDoList> { }

export interface IConfirmDialogState {
    open: boolean,
    accion: string,
    elemento: string,
    onConfirm: () => void,
    handleClose?: () => void,

}

export interface ISnackBar {
    message: string,
    open: boolean,
    severity?: "error" | "success" | "info" | "warning" | undefined;
    handleClose?: () => void,
}
