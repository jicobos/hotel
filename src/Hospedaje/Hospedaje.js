import './Hospedaje.css'

function Hospedaje (props){
    return(
        <div className="hospedaje">
            <h2>{props.fechaIngreso}</h2>
            <p>Fecha Salida: {props.fechaSalida}</p>
            <p>Numero de Habitacion: {props.numeroHabitacion}</p>
            <p>Mascota: {props.idMascota}</p>
        </div>
    );
}

export default Hospedaje;