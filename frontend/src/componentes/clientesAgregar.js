import axios from 'axios';
import uniqid from 'uniqid';
import React,{useEffect,useState} from 'react'
import { useParams,useNavigate } from 'react-router';
import Swal from 'sweetalert2';

export default function ClientesAgregar()
{
    const[id, setId] = useState('') 
    const[id_tipodoc, setIdTipodoc] = useState('')
    const[nombre, setNombre] = useState('')
    const[telefono, setTelefono] = useState('')
    const[direccion, setDireccion] = useState('')
    const[email, setEmail] = useState('')
    const navigate = useNavigate()

    function clientesInsertar()
    {
        const clientesinsertar = {
            id: id,
            id_tipodocumento : id_tipodoc,
            nombre : nombre,
            telefono: telefono,
            direccion: direccion,
            email: email
        }

        axios.post('api/clientes/agregar', clientesinsertar).then(res =>{
            console.log(res.data)
            Swal.fire({
                position: 'center',
                icon : 'success',
                title: 'Cliente almacenado correctamente.',
                showConfirmButton : false,
                timer: 2000
            })
            navigate('/clientesListar')
        }).catch(err =>{console.log(err.stack)})
    }

    function clientesRegresar()
    {
        navigate('/clientesListar')
    }

    return(
        <div className='container mt-5'>
            <h3>Registro de clientes</h3>
            <div className='row'>
                <div className='col-md-4'></div>
                <div className='col-md-4'>
                    <form>
                        <div className='form-control'>
                            <label for="id_cliente" className='form-label'>Id Cliente</label>
                            <input type="number" className='form-control' id="id_cliente" value={id} onChange={(e)=>{
                                setId(e.target.value)}}></input>
                        </div>
                        <div className='form-control'>
                            <label for="id_tipodoc" className='form-label'>Tipo Documento</label>
                            <input type="text" className='form-control' id="id_tipodoc" value={id_tipodoc} onChange={(e)=>{
                                setIdTipodoc(e.target.value)}}></input>
                        </div>
                        <div className='form-control'>
                            <label for="nombre" className='form-label'>Nombre</label>
                            <input type="text" className='form-control' id="nombre" value={nombre} onChange={(e)=>{
                                setNombre(e.target.value)}}></input>
                        </div>
                        <div className='form-control'>
                            <label for="telefono" className='form-label'>Teléfono</label>
                            <input type="number" className='form-control' id="telefono" value={telefono} onChange={(e)=>{
                                setTelefono(e.target.value)}}></input>
                        </div>
                        <div className='form-control'>
                            <label for="direccion" className='form-label'>Dirección</label>
                            <input type="text" className='form-control' id="direccion" value={direccion} onChange={(e)=>{
                                setDireccion(e.target.value)}}></input>
                        </div>
                        <div className='form-control'>
                            <label for="email" className='form-label'>E-mail</label>
                            <input type="email" className='form-control' id="email" value={email} onChange={(e)=>{
                                setEmail(e.target.value)}}></input>
                        </div>
                        <div className='form-control'>
                            <button type='button' onClick={clientesRegresar} className="btn btn-warning">Regresar</button>
                            <button type='button' onClick={clientesInsertar} className="btn btn-success">Agregar</button>
                        </div>
                    </form>
                </div>
                <div className='col-md-4'>
                </div>
            </div>
        </div>
    )
}