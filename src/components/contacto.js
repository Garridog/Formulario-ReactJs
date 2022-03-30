import React, {useState} from 'react';
import Imgcon from '../img/imgcontact.svg';

 export const Contacto = () => {

    const [datos, setDatos] = useState({
        nombreCompleto: '',
        fechaNacimiento: ' ',
        correoElectronico: ' ',
        sexo: '',
        hobbie: ''
    })

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        });
    }


    const enviarDatos = (event) => {
        event.preventDefault();
        console.log(datos.nombreCompleto + "" + datos.fechaNacimiento + "" + datos.correoElectronico + "" + datos.sexo + "" + datos.hobbie);
        let body = {nombre: datos.nombreCompleto, fecha: datos.fechaNacimiento.toString(), correo: datos.correoElectronico.toString(),sexo: datos.sexo, hobbie: datos.hobbie};
        console.log(body);
        let bodyRequest = JSON.stringify(body);
        fetch('http://localhost:8080/user',{
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
              body: bodyRequest})
    }



    return(
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-sm mt-5 ">
                    <img src={Imgcon} alt="" className="img-fluid"/>
                </div>
                <div className="col-sm shadow p-3 mb-5 bg-white rounded mt-5 txtcontacto ms-5">
                    <h3>Formulario de Contacto</h3>
                    <hr/>
                    <form id="contacto" onSubmit={enviarDatos}>
                    <div className="mb-3 mx-auto">
                        <label className="form-label">Nombre Completo</label>
                        <input type="text" className="form-control"  name="nombreCompleto" id="exampleFormControlInput1" placeholder="Introduzca Nombre Completo" onChange={handleInputChange}/>
                    </div>
                    <div className="mb-3 mx-auto">
                        <label className="form-label">Fecha de Nacimiento</label>
                        <input type="text" className="form-control" name="fechaNacimiento" placeholder="Introduce (dd/mm/yyyy)" id="exampleFormControlInput1"/>
                    </div>
                    <div className="mb-3 mx-auto">
                        <label className="form-label">Correo Electronico</label>
                        <input type="email" className="form-control" name="correoElectronico" id="exampleFormControlInput1" placeholder="Introduzca Correo" onChange={handleInputChange}/>
                    </div>
                    <div className="mb-3 mx-auto">
                        <label className="form-label">Sexo</label>
                        <input type="text" className="form-control" name="sexo" id="exampleFormControlInput1" placeholder="Introduzca Sexo" onChange={handleInputChange}/>
                    </div>

                    <div className="mb-3 mx-auto">
                        <label className="form-label">Hobbies</label>
                        <input type="text" className="form-control" name="hobbie" id="exampleFormControlInput1" placeholder="Introduzca Hobbies" onChange={handleInputChange}/>
                    </div>
                    
                    <button className="btn btn-dark" >Enviar</button>
                    </form>
                </div>
            </div>
    </div>
    )
}