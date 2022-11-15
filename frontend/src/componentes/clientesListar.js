import axios from 'axios';
import React,{useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import ClientesBorrar from './clientesborrar';

//Crear un método para trabajar
function ClientesListar()
{
    const[dataCliente, setdataCliente]=useState([])

    useEffect(()=>{
        axios.get('api/clientes/listar').then(res =>{
          console.log(res.data);
          setdataCliente(res.data);
        }).catch(err=>{console.log(err.stack)})
    },[])
    return( 
        <div className='container mt-5'>
            <h4>Listado de clientes.</h4>
            <div className='row'>
                <div className='col-md-12'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <td colSpan={7} align="right">
                                    <Link to={'/clientesAgregar'}>
                                        <li className='btn btn-success'>Agregar Cliente</li>
                                    </Link>
                                </td>
                            </tr>
                            <tr className='table-dark'>
                                <th>ID</th>
                                <th>NOMBRE</th>
                                <th>TELÉFONO</th>
                                <th>DIRECCIÓN</th>
                                <th>EMAIL</th>
                                <th colSpan={2}>Controles</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                dataCliente.map(misclientes=>(
                                    <tr className='table-dark'>
                                        <td>{misclientes.id}</td>
                                        <td>{misclientes.nombre}</td>
                                        <td>{misclientes.direccion}</td>
                                        <td>{misclientes.telefono}</td>
                                        <td>{misclientes.email}</td>
                                        <td align="center"><Link to={'/clientesseditar/${misclientes.id}'}><li className='btn btn-info'>Editar</li></Link></td>
                                        <td align="center"><li className='btn btn-danger' onClick={()=>{ClientesBorrar(misclientes.id)}}>Borrar</li></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ClientesListar;