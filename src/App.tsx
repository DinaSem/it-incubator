import React from 'react';
import './App.css';
import TodoList, {TaskTipe} from "./TodoList";

function App() {
    const todoListTitle_1: string = "What to learn"
    const todoListTitle_2: string = "What to buy"
    const task_1: Array<TaskTipe> =[
        {id:1, title:"HTML", isDone:true},
        {id:2, title:"CSS", isDone:true},
        {id:3, title:"React", isDone:false}
    ]
    const task_2: Array<TaskTipe> =[
        {id:4, title:"milk", isDone:true},
        {id:5, title:"bread", isDone:true},
        {id:6, title:"apples", isDone:false}
    ]
    return (
        <div className="App">
            <TodoList
                title={todoListTitle_1}
                tasks={task_1}/>
            <TodoList
                title={todoListTitle_2}
                tasks={task_2}/>
        </div>
    );
}

export default App;
