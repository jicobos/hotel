import Mascota from './Mascota';

const data=[
    {nombre:"pupi", tipo:"perro", raza:"golden", edad:"2",tipoComida:"adulto", enfermedades:"ninguna",idCliente:"1"},
    {nombre:"dog", tipo:"gato", raza:"persia", edad:"3",tipoComida:"cachorro", enfermedades:"ninguna",idCliente:"4"},
    {nombre:"coco", tipo:"perro", raza:"labrador", edad:"7",tipoComida:"adulto", enfermedades:"ninguna",idCliente:"8"}
];
function Mascotas(){
    return(
      <div>
        <div  style={{maxWidth: "33%"}}>

          <h1 style={{textAlign: "center"}}>Mascota</h1>
        </div>
        {data.map(
            mascota =>(<Mascota
            nombre={mascota.nombre}
            tipo={mascota.tipo}
            raza={mascota.raza}
            edad={mascota.edad}
            tipoComida={mascota.tipoComida}
            enfermedades={mascota.enfermedades}
            idCliente={mascota.idCliente}
            />))}
    </div>)
}

export default Mascotas;

