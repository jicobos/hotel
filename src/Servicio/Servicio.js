import './Servicio.css';

function Servicio (props){
    return(
        <div className="servicio">
            <h2>{props.tipoServicio}</h2>
            <p>Numero Hospedaje : {props.idHospedaje}</p>
           
        </div>
    );
}

export default Servicio;