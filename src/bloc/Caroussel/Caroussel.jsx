import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRef, useState,useEffect} from 'react';
import { useActionData } from 'react-router-dom';

const MyCarousel = ({carouselData,styleImage,styleCaroucel,idCurrent}) => {
    const sliderRef = useRef(null)
    const [currentIndex, setCurrentIndex] = useState(0);
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      accessibility:true,
      beforeChange: (current, next) => setCurrentIndex(next), // Set the current index before the slide changes
    };
  
    useEffect(() => {
      // Update the idCurrent whenever the currentIndex changes
      if (carouselData.length > 0) {
        idCurrent(carouselData[currentIndex]);
      }
    }, [carouselData, currentIndex, idCurrent]);
    return (
        <section style={styleCaroucel} className='styleCaroucel'>
            <Slider {...settings}  ref={sliderRef}>
                {carouselData.map(item => (
                <div key={item.id}>
                    <img src={item.img} style={styleImage} className='styleImage' alt={`Image ${item.id}`} />
                </div>
                ))}
            </Slider>
        </section>
    );
  };
export default MyCarousel