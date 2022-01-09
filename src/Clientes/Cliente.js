import './Clientes.css'

function Cliente (props){
    return(
        <div className="cliente">
            <h2>{props.nombre}</h2>
            <p>Apellido: {props.apellido}</p>
            <p>Cedula: {props.cedula}</p>
            <p>Dirección: {props.direccion}</p>
            <p>Correo: {props.correo}</p>
            <p>Teléfono: {props.telefono}</p>
        </div>
    );
}

export default Cliente;