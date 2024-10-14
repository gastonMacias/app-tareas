import IngresoTarea from "../ingresoTarea/IngresoTarea";
import Tarea from "../tarea/Tarea";
import "./base.css";

const Base = () => {
    return (
        <div className="base">
            <IngresoTarea />
            <Tarea />
            <Tarea />
            <Tarea />
        </div>
    )
}

export default Base;