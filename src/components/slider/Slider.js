import React from 'react'
import Carousel from "@brainhubeu/react-carousel"
import "@brainhubeu/react-carousel/lib/style.css"

const Slider = () => {
  return (
    <div className='crousel-conteiner'>
        <div className='carousel-title'>
            <h2>My Projects</h2>
        </div> 
        <Carousel
            arrows
            slidesPerPage={3}
            infinite
            animationSpeed={200}
            center
            offset={50}
            itemWidth={400}
            
        
        />
      
    </div>
  )
}

export default Slider
