import React from 'react'
import capadocia from '../images/capadocia.jpg'

const Cappadocia = () => {
  return (
   
     <div style={{ position: 'relative', textAlign: 'justify' }}>
        <img src={capadocia} alt="capadocia" style={{ width: '100%', height: '620px'}} />     
        <div style={{
        position: 'absolute',
        top: '70%',
        left: '30%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
        fontSize: '4rem',
        fontWeight: 'bold',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        zIndex : '-1px'
      }}>
       Travel 
       <div style={{ position: 'relative', textAlign: 'justify' }}>Reservation</div>
       <div style={{ position: 'relative', textAlign: 'justify' }}>Form</div>
      </div>
    </div>  

   
  )
}

export default Cappadocia
