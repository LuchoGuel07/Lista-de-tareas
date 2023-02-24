import React, {useContext} from 'react'
import TaskCard from './TaskCard'
import { TaskContext } from '../../context/TaskContext'

export default function TaskList() {

    const {task} = useContext(TaskContext)
    
    if (task.length === 0) {
        return (
                <div>
                    <h1 className='text-white text-4xl font-bold text-center'>No hay tareas 😶‍🌫️</h1>
                </div>
        )
    }

    return (
        <div>
            <div className='grid grid-cols-4 gap-2'>
                {task.map((task) => (
                    <TaskCard key={task.id} task={task}/>
                    ))}
            </div>
        </div>
        
    )
}

