import React from 'react'
import { Link } from 'react-router-dom'

//CSS
import '../styles/ServiceCard.css'


const ServiceCard = ({service}) => {
  if(!service) return null
  
  
    return (
    <div className='card_container'>
        <Link to={`services/${service.id}`} >
            <div className='card_image'>
                <img src={''} alt={service.name} />
            </div>

            <div className='card_content'>
                <div>{service.name}</div>
                <div>{service.description}</div>
                <div>${service.price}</div>
            </div>
        </Link>
    </div>
  )
}

export default ServiceCard