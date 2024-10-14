import { useState } from "react";
import "./ingresoTarea.css";

const IngresoTarea = ({agregarTarea}) => {

    const [tarea, setTarea] = useState("")

    const manejarCambio = (e) => {
        setTarea(e.target.value)
    }

    const manejarEnvio = (e) => {
        e.preventDefault();
        if (tarea.trim()) {
            agregarTarea(tarea);
            setTarea("");
        }
    }

    return (
        <form onSubmit={manejarEnvio}>
            <input type="text"
                value={tarea}
                onChange={manejarCambio}
                placeholder="Ingrese la tarea" 
                className="input"
                />
            {/* <button type="submit">agregar tarea</button> */}
        </form>
    )
}

export default IngresoTarea;