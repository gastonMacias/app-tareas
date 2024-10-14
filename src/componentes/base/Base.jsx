import IngresoTarea from "../ingresoTarea/IngresoTarea";
import Tarea from "../tarea/Tarea";
import { useState } from "react";
import "./base.css";

const Base = () => {

    const [tareas, setTareas] = useState([]);

    const agregarTarea = (nuevaTarea) => {
        setTareas([...tareas, nuevaTarea])
    }

    const handleClose = (index) => {
        const nuevasTareas = tareas.filter((_, i) => i !== index); // Filtra las tareas, eliminando la que corresponde al índice
        setTareas(nuevasTareas); // Actualiza el estado con las tareas restantes
      };


    return (
        <div className="base">
            <IngresoTarea agregarTarea={agregarTarea} />
            <div>
                {tareas.map((tarea, index) => (
                    <Tarea key={index}
                        texto={tarea}
                        onClose={() => handleClose(index)}
                    />
                ))}
            </div>

        </div>
    )
}

export default Base;