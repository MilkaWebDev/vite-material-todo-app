export interface TaskFormState { id: number; task: string; complete: boolean }

export interface ConfirmDialogState {
    open: boolean,
    accion: string,
    elemento: string,
    onConfirm: (() => void) | null
}