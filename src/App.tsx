import React, {useState} from 'react';
import './App.css';
import TodoList, {TaskTipe} from "./TodoList";

export type FilterType= 'All'|'Active'|'Completed'

function App() {
    const todoListTitle_1: string = "What to learn"

    let [task1, setTasks] = useState<Array<TaskTipe>>([
        {id: 1, title: "HTML", isDone: true},
        {id: 2, title: "CSS", isDone: true},
        {id: 3, title: "React", isDone: false},
        {id: 4, title: "Redux", isDone: false}
    ])

    const removeTask = (taskID: number) => {
        let newTask = task1.filter(task => task.id !== taskID);
        setTasks(newTask)
    }

    let [filter, setFilter] = useState<FilterType>('All')
    let drushlack = task1
    if (filter === 'Active') {
        drushlack = task1.filter(f => !f.isDone)
    }
    if (filter === "Completed") {
        drushlack = task1.filter(f => f.isDone)
    }
    if (filter === "All") {
        drushlack = task1
    }

    const changeFilter = (value:FilterType) =>{
        setFilter(value)
    }



    return (
        <div className="App">
            <TodoList
                title={todoListTitle_1}
                tasks={drushlack}
                removeTask={removeTask}
                changeFilter={changeFilter}/>
        </div>
    );
}

export default App;
