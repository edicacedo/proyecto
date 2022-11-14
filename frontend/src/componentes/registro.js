import React from "react";

export default function Registro() 
{
    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4">

                </div>
                <div className="col-md-4">
                    <h3>Registrarse</h3>
                    <form>
                        <div className="form-group">
                            <label for="nombre" id="nombres">Nombres</label>
                            <input type="text" className="form-control" placeholder="Nombres" id="nombres"></input>
                        </div>
                        <div className="form-group">
                            <label for="contraseña" id="contraseña">Nombres</label>
                            <input type="password" className="form-control" placeholder="Contraseña" id="contraseña"></input>
                        </div>
                        <div className="form-group">
                            <label for="edad" id="edad">Edad</label>
                            <input type="number" className="form-control" placeholder="Edad" id="edad"></input>
                        </div>
                        <div className="form-group">
                            <label for="fecha" id="fecha">Fecha</label> 
                            <input type="date" className="form-control" placeholder="Fecha" id="fecha"></input>
                        </div>
                        <div className="form-group">
                            <br></br>
                            <input type="submit" value="Registrarse" className="btn btn-success"></input>
                        </div>
                    </form>
                </div>
                <div className="col-md-4">

                </div>
            </div>
        </div>
    )
}