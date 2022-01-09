import Hospedaje from './Hospedaje';

const data=[
    {fechaIngreso:"01/01/2022", fechaSalida:"02/01/2022", numeroHabitacion:"212", idMascota:"5"},
    {fechaIngreso:"01/01/2022", fechaSalida:"08/01/2022", numeroHabitacion:"201", idMascota:"6"},
    {fechaIngreso:"01/01/2022", fechaSalida:"07/01/2022", numeroHabitacion:"278", idMascota:"2"}
];
function Hospedajes(){
    return(
      <div>
        <div  style={{maxWidth: "33%"}}>

          <h1 style={{textAlign: "center"}}>Hospedaje</h1>
        </div>
        {data.map(
            hospedaje =>(<Hospedaje
            fechaIngreso={hospedaje.fechaIngreso} 
            fechaSalida={hospedaje.fechaSalida}
            numeroHabitacion={hospedaje.numeroHabitacion}
            idMascota={hospedaje.idMascota}
            />))}
    </div>)
}

export default Hospedajes;

