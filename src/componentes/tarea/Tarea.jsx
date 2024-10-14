import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import "./tarea.css";


const Tarea = ({ texto, onClose }) => {

    return (
        <div className="tarea">
            <h3>{texto}</h3>
            <CheckCircleIcon />
            <HighlightOffIcon 
                onClick={onClose}
            />
        </div>
    )
}

export default Tarea;



// se va a pasar una prop llamada texto para crear las tareas en el h3, despues el button va a pasae a ser un icono