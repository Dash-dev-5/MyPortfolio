import './portfolio.scss'
import React from 'react'
import { Datapring } from '../Pricing/DataPricing'
import MyCarousel from '../../bloc/Caroussel/Caroussel'
function Portfolio() {
    const carouselData = Datapring
 
    const styleImage = {
    
    }
     let idCurrent =''; 

  return (
    <div className="bg-portfolio">
        <MyCarousel carouselData={carouselData}  idCurrent={idCurrent}/>
        <p>{idCurrent}</p>
    </div>
  )
}

export default Portfolio
