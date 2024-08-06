import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

//CSS
import '../styles/Services.css'

// Card that will be batched and displayed in the services page
import ServiceCard from '../components/ServiceCard'



const Services = () => {
  
  const [services, setServices] = useState([])
  const API = import.meta.env.VITE_BASE_URL
  
  console.log('API:', API)

  useEffect(() => {
    fetch(`${API}/services`)
    .then((res) => res.json())
    .then((res) => {
      setServices(res)
      console.log('Fetched services:', res)
    })
    .catch((error) => {
      console.error('Error fetching services:', error)
    })
  },[API])
  
  
  
  return (
    <div className='services_container'>
      
      <h1>Services</h1>

      <div className='services_batchCards'>
        {services.map((service, index)=> {
            return (
              <div key={index}>
                <ServiceCard service={service} />
              </div>
            )
        })
        }
      </div>
      
    </div>
  )
}

export default Services