import {v1} from "uuid";
import {FilterValuesType, TaskType} from "../App";

type AddTaskActionType = {
    type: 'ADD-TASK';
    payload: {
        title: string;
    };
}
type RemoveTaskActionType = {
    type: 'REMOVE-TASK';
    payload: {
        taskId: string;
    };
}
type FilterTaskActionType = {
    type: 'FILTER-TASK';
    payload: {
        filter: FilterValuesType
    };
}

type ActionType =
    | AddTaskActionType
    | RemoveTaskActionType
    | FilterTaskActionType


const initialState: TaskType[] = [
    {id: v1(), title: 'HTML&CSS', isDone: true},
    {id: v1(), title: 'JS', isDone: true},
    {id: v1(), title: 'ReactJS', isDone: false},
]

export const tasksReducer = (initialState: TaskType[], action: ActionType ):TaskType[]  => {
    switch (action.type) {
        case 'ADD-TASK':
            const newTask = {id: v1(), title: action.payload.title, isDone: false}
            return [...initialState, newTask]
        case 'REMOVE-TASK':
            return initialState.filter((task) => task.id !== action.payload.taskId)
        default:
            return initialState;
    }
}

export const addTaskAC = (title: string) => {
    return {
        type: 'ADD-TASK',
        payload: {
            title
        }
    } as const
}
export const removeTaskAC = (taskId: string) => {
    return {
        type: 'REMOVE-TASK',
        payload: {
            taskId
        }
    } as const
}
