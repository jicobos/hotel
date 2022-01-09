import './Mascotas.css';

function Mascota (props){
    return(
        <div className="mascota">
            <h2>{props.nombre}</h2>
            <p>Tipo : {props.tipo}</p>
            <p>Raza : {props.raza}</p>
            <p>Edad : {props.edad}</p>
            <p>tipoComida : {props.tipoComida}</p>
            <p>Enfermedades : {props.enfermedades}</p>
            <p>Cliente : {props.idCliente}</p>
        </div>
    );
}

export default Mascota;