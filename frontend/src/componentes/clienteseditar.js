import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {useParams, useNavigate} from 'react-router';
import Swal from 'sweetalert2';

export default function ClientesEditar()
{
    const parametros = useParams()
    const[id, setId] = useState('') 
    const[id_tipodoc, setIdTipodoc] = useState('')
    const[nombre, setNombre] = useState('')
    const[telefono, setTelefono] = useState('')
    const[direccion, setDireccion] = useState('')
    const[email, setEmail] = useState('')
    const navigate = useNavigate()
    
    useEffect(()=>{
        axios.get('/api/clientes/cargar/${parametros.id}').then(res => {
        console.log(res.data[0])
        const dataClientes = res.data[0]
        setId(dataClientes.id)
        setIdTipodoc(dataClientes.id_tipodoc)
        setNombre(dataClientes.nombre)
        setTelefono(dataClientes.telefono)
        setDireccion(dataClientes.direccion)
        setEmail(dataClientes.email)
        })
    }, [])

    function clientesActualizar()
    {
        const pedidoactualizar = {
            id: parametros.id,
            id_tipodoc: id_tipodocumento,
            nombre: nombre,
            telefono: telefono,
            direccion: direccion,
            email: email
        }

        console.log(clientesactualizar)

        axios.post(`/api/clientes/editar/${parametros.id}`,clientesActualizar).then(res => {
            console.log(res.data)
            Swal.fire({ position: 'center', icon: 'success',  title: 'El registro fue actualizado exitosamente!', showConfirmButton: false, timer: 1500 })
            navigate('/clientesListar')
            })
            .catch(err => {console.log(err.stack)})
    
    }

    function clientesRegresar()
    {
        navigate('/clintesListar')
    }

    return(
        <div className="container mt-5">
            <h4>Clientes</h4>
            <div className="row">
                <div className="col-md-12">
                <div className="mb-3">
                        <label htmlFor="id_cliente" className="form-label">Id Cliente</label>
                        <input type="text" className="form-control" id="id_cliente" value={id} onChange={(e) => {setId(e.target.value)}}></input>
                    </div>                    
                    <div className="mb-3">
                        <label htmlFor="fecha" className="form-label">Fecha</label>
                        <input type="text" className="form-control" id="fecha" value={fecha} onChange={(e) => {setFecha(e.target.value)}}></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="valor" className="form-label">Valor</label>
                        <input type="text" className="form-control" id="valor" value={valor} onChange={(e) => {setValor(e.target.value)}}></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="activo" className="form-label">Activo</label>
                        <input type="text" className="form-control" id="activo" value={activo} onChange={(e) => {setActivo(e.target.value)}}></input>
                    </div>                
                    <div className="mb-12">
                        <button type="button" onClick={pedidosRegresar} className="btn btn-primary">Atras</button>
                        <button type="button" onClick={pedidosActualizar} className="btn btn-success">Actualizar</button>
                    </div>
                </div>
            </div>
        </div>
    )

}
