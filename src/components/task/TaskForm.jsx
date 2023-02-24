import React, { useState, useContext} from "react";
import { TaskContext } from "../../context/TaskContext";

function TaskForm() {
    const [title, setTittle] = useState("");
    const [description, setDescription] = useState("");
    const {createTask} = useContext(TaskContext)

    /**
     * Cuando se envíe el formulario, evite la acción predeterminada, registre el título y la
     * descripción, y cree una tarea con el título y la descripción.
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title, description)
        createTask({
            title,
            description
        });
        setTittle("");
        setDescription("");
    };

    return (
        <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4" >
                <h1 className="text-2x1 font-bold text-white text-3xl text-center mb-4">Crea tu tarea</h1>
                <input
                    type="text"
                    className="bg-slate-300 text-slate-900 w-full p-3 rounded-md mb-4"
                    placeholder="Tarea"
                    onChange={(e) => setTittle(e.target.value)}
                    value={title}
                    autoFocus
                />
                <textarea
                    placeholder="Descripción de tarea"
                    className="bg-slate-300 text-slate-800 w-full p-3 rounded-md mb-4"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                ></textarea>
                <button className="bg-indigo-500 px-3 py-1 text-white" type="submit">Agregar</button>
            </form>
        </div>
    );
}

export default TaskForm;
