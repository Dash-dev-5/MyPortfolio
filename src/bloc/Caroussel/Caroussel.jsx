import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRef, useState,useEffect} from 'react';
import { useActionData } from 'react-router-dom';

const MyCarousel = ({carouselData,styleImage,styleCaroucel,idCurrent}) => {
    const sliderRef = useRef(null)
    const [idCurrents,setIdCurrents] = useState()
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      accessibility:true,
      
    };

  const afterSlideChange = (currentSlideIndex) => {
        const slides = sliderRef.current.props.children;
        const currentImageID = slides[currentSlideIndex].key;
        console.log('ID de l\'image courante : ', currentImageID);
      setIdCurrents(imageID);
  };
    
    useEffect(()=>idCurrent=idCurrents,[idCurrents])
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