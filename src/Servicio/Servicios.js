import Servicio from './Servicio';

const data=[
    {tipoServicio:"baño", idHospedaje:"6"},
    {tipoServicio:"desparacitacion", idHospedaje:"4"},
    {tipoServicio:"baño", idHospedaje:"9"}
];
function Servicios(){
    return(
      <div>
        <div  style={{maxWidth: "33%"}}>

          <h1 style={{textAlign: "center"}}>Servicios</h1>
        </div>
        {data.map(
            servicio =>(<Servicio
            tipoServicio={servicio.tipoServicio}
            idHospedaje={servicio.idHospedaje}
            />))}
    </div>)
}

export default Servicios;
