import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='contenedorFooter'>
        <div>
            <h3>Proyecto desarrollado por Matías Isnardi para el curso de React de Coderhouse 2022</h3>
        </div>
        <div>
            <h4>Contacto:</h4>
            <a className='linkFacebook' title='Facebook' href='https://www.facebook.com/matias.isnardi'><img src='https://res.cloudinary.com/dho3gtxbk/image/upload/v1669471605/proyecto%20react%20coder/facebook_32px_hayn00.png' alt='logo Facebook'></img></a>
            <a className='linkInstagram'title='Instagram' href='https://www.instagram.com/matiisnardi/'><img src='https://res.cloudinary.com/dho3gtxbk/image/upload/v1669471493/proyecto%20react%20coder/instagram_32px_tzigdd.png' alt='logo Instagram'></img></a>
            <a className='linkLinkedIn'title='LinkedIn' href='https://www.linkedin.com/in/matias-alejandro-isnardi/'><img src='https://res.cloudinary.com/dho3gtxbk/image/upload/v1669471376/proyecto%20react%20coder/linkedin_32px_qr34b1.png' alt='logo Linkedin'></img></a>
        </div>
    </div>    
  )
}

export default Footer