import React from 'react'
import "./About.css"
import miFoto from '../../media/miFoto.jpg'

const About = () => {
  return (
    <div className='about-conteiner'>
        <div className='about-desc'>
        <h5>Desarollador Full Stack</h5>
        <p>Soy estudiante para desarollador web Full Stack me gusta mucho tanto el front como el back puedo proporcionar un codigo limpio Tambien hago que el estilo web sea cada vez mas interactivo con animaciones web. un diseño responsivo hace que un sitio web sea accesible para todos los usuarios, independientemente de su dispositivo.</p>
        </div>
        <div className='about-img'>
            <img src= {miFoto} width="600" height="435" alt= 'Mi foto' />

        </div>
      
    </div>
  )
}

export default About
