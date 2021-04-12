import { FetchTodosAction, ClearTodosAction, DeleteTodoAction } from './todos'

export enum ActionTypes {
    fetchTodos,
    clearTodos,
    deleteTodo
}

export type Action = FetchTodosAction | ClearTodosAction | DeleteTodoAction
