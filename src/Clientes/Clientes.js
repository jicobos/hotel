import Cliente from './Cliente';

const data=[
    {nombre:"Jose", apellido:"Cobos", cedula:"0104506407", direccion:"Urb Garcia",correo:"joscob22@gmail.com", telefono:"0992714979"},
    {nombre:"Paz", apellido:"Muñoz", cedula:"0302214427", direccion:"Urb Garcia",correo:"pazmunoz09@gmail.com", telefono:"0984278570"},
    {nombre:"Kevin", apellido:"Ortiz", cedula:"0104506407", direccion:"Paccha",correo:"kxortiz@gmail.com", telefono:"0997854821"}
];
function Clientes(){
    return(
      <div>
        <div  style={{maxWidth: "33%"}}>

          <h1 style={{textAlign: "center"}}>Cliente</h1>
        </div>
        {data.map(
            cliente =>(<Cliente 
            nombre={cliente.nombre}
            apellido={cliente.apellido}
            cedula={cliente.cedula}
            direccion={cliente.direccion}
            correo={cliente.correo}
            edad={cliente.edad}
            telefono={cliente.telefono}
            />))}
    </div>)
}

export default Clientes;

