import 'animate.css';

import { getPropertyByCountry } from "../helpers";
import '../ui/property.css'

export const Property = ({ city ='', guest=0  }) => {
  //  const data = getPropertyByCity('Helsinki');
  const data = getPropertyByCountry("Finland")


const dataFiltrada = data.filter( propiedad => propiedad.city == `${city}` && propiedad.maxGuests >= `${guest}` )


  return (
    <div className="properties">
      
      <div className="contenedor-titulo">
        <h3 className="titulo">Stays in Finland</h3>
        <small><b>{dataFiltrada.length}</b> stays</small>
      </div>

      {dataFiltrada.length == 0 ? <span>Nada por aqui, haz una busqueda</span>:null}

      <div className="contenido">
          {
              dataFiltrada.map( (property) => (  
                <div key={property.photo} className="card-property animate__animated animate__fadeIn">
                  <img className="property-photo" src={`${property.photo}`} alt={`${property.title}`} />
                  
                  <div  className='card-contenido'>
                                        
                    { property.superHost 
                              ? <div className="super-host"> 
                                  <small className="title-superHost">{property.superHost = 'Super Host'}</small>
                                  {`${property.type} ${property.beds===null? ``: `. ${property.beds} beds`}`}
                                </div>  

                              : `${property.type}` }

                    <div className="rating">
                      <span className="material-symbols-outlined icon-star">star</span>
                      <span className="rating-propiedad">{property.rating}</span>
                    </div>

                  </div>
                  
                    <div className="titulo-propiedad">

                  {property.title}
                    </div>
                </div>
                
              ))

          }
        
      </div>
      
    </div>
    
  );
};
