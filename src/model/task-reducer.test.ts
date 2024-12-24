import {TaskType} from "../App";
import {v1} from "uuid";
import {addTaskAC, removeTaskAC, tasksReducer} from "./tasks-reducer";

test('Add task in Todolist', () => {

    const startState: TaskType[] = [
        {id: v1(), title: 'HTML&CSS', isDone: true},
        {id: v1(), title: 'JS', isDone: true},
        {id: v1(), title: 'ReactJS', isDone: false},
    ]

    const newTitle = 'New Title'

    const endState = tasksReducer(startState, addTaskAC(newTitle))

    expect(endState.length).toBe(4)
    expect(endState[3].title).toBe(newTitle)
})

test('Remove task from Todolist', () => {
    const taskId1 = v1()
    const taskId2 = v1()
    const taskId3 = v1()
    const startState: TaskType[] = [
        {id: taskId1, title: 'HTML&CSS', isDone: true},
        {id: taskId2, title: 'JS', isDone: true},
        {id: taskId3, title: 'ReactJS', isDone: false},
    ]

    const endState = tasksReducer(startState, removeTaskAC(taskId3))

    expect(endState.length).toBe(2)
    expect(endState[1].title).toBe('JS')
})