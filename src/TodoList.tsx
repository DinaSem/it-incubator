import React from 'react';
import {FilterType} from "./App";


export type TodoListPropsType ={
    title:string
    tasks: Array<TaskTipe>
    removeTask: (taskID:number) => void
    changeFilter: (value:FilterType) => void
}
export type TaskTipe ={
    id: number
    title: string
    isDone: boolean
}

function TodoList(props:TodoListPropsType){
    const liJSXelement = props.tasks.map(task => {
        return(
            <li key = {task.id}>
                <button onClick={()=>props.removeTask(task.id)}>x</button>
                <input type="checkbox" checked={task.isDone}/>
                <span>{task.title}</span>

            </li>
        )
    })

    return(
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {liJSXelement}

            </ul>
            <div>
                <button onClick={()=>props.changeFilter('All')}>All</button>
                <button onClick={()=>props.changeFilter('Active')}>Active</button>
                <button onClick={()=>props.changeFilter('Completed')}>Completed</button>
            </div>
        </div>
    )
}
export default TodoList;