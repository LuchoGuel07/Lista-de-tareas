import {useState, useEffect,createContext} from 'react'
import { task as data} from '../data/task'

export const TaskContext = createContext()

export function TaskContextProvider(props) {

    const [task, setTask] = useState([])

    let maxId = task.reduce((max, task) => (task.id > max ? task.id : max), 0);

    function createTask(tasks) {
        setTask([...task, {
            title: tasks.title,
            id: maxId + 1,
            description:tasks.description
        }])
    }

    function deleteTask(id) {
        const newTask = task.filter(task => task.id !== id)
        setTask(newTask)
    }
    
    useEffect(() => {
        setTask(data)
    }, [])


    return (
        <TaskContext.Provider value={{
            task,
            createTask,
            deleteTask
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}

