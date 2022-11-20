import { ArrowBack, ArrowForward } from '@material-ui/icons';
import React,{useState} from 'react';
import {Data} from '../variables/Data'

import '../styles/Carousel.css'

const Carousel = ({slides}) => {

    const [slide,setSlide] = useState(0)

    const length = slides.length

    const prevSlide = () => {
        setSlide(slide === 0 ? length - 1 : slide - 1)
    }

    const nextSlide = () => {
        setSlide(slide === length - 1 ? 0 : slide + 1)
    }
  return (
        <div className='carousel'>

                <div className="arrows">
                    <ArrowBack className='arrow-b' onClick={prevSlide}/>
                    <ArrowForward className='arrow-f' onClick={nextSlide}/>
                </div>

                {Data.map((item,index) => {
                    return (
                        <div>
                            {index === slide && (
                            <img src={item.img} alt="" className='carousel-img'/>
                            )}
                        </div>
                    )
                })}


        </div>
        );
};

export default Carousel;
