import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../CSS/Slider.css";



function Slider() {
  return (
    <div className='carousel-slider container'>
        <Carousel  useKeyboardArrows infiniteLoop transitionTime={500} swipeable={true} emulateTouch={true}>
            <div>
                <img src="../images/banner1.png" />
            </div>
            <div>
                <img src="../images/banner2.png" />
            </div>
            <div>
                <img src="../images/banner3.png" />
            </div>
        </Carousel>
    </div>
  )
}

export default Slider