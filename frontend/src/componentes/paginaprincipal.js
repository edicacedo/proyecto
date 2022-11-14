import React from 'react';
import imagen from '../assest/imagen1.jpg';

function PaginaPrincipal()
{

    return(
        <div className="container mt-5">
            <h4>Pagina Principal.</h4>
            <div className="row">
                <div className="col-md-12">
                    <img src={imagen}></img>
                </div>
            </div>
        </div>
    )

}

export default PaginaPrincipal;