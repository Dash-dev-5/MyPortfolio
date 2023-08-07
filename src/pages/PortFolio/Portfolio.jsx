import './portfolio.scss'
import React, { useEffect } from 'react'
import { Datapring } from '../Pricing/DataPricing'
import MyCarousel from '../../bloc/Caroussel/Caroussel'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
function Portfolio() {
    const carouselData = Datapring
 
    const styleImage = {
    
    }
    const [currentComment, setCurrentComment] = useState('');

    const handleCommentChange = newComment => {
      setCurrentComment(newComment);
    };
    // useEffect(
    //     const comm
    //     ,[currentComment])
    const [statecomment,setStatecomment] = useState(false)
    const handelVisibleCommentaire = ()=>{
        setStatecomment(!statecomment);
    }
  return (
    <div className="bg-portfolio">
        <MyCarousel carouselData={carouselData}  idCurrent={handleCommentChange}/>
        <div className="title">
            <h2>{currentComment.name}</h2>
            <h3>Technologies :{currentComment.technologie}</h3>
            <NavLink to={currentComment.link} target='_blank'>Clique ici pour voir le projet</NavLink>
        </div>
        <p className={statecomment ? 'visibleComment': ''}>{currentComment.commentaire}</p>
        <div className="read_div">
            <button type="button" className='read-more' onClick={handelVisibleCommentaire}>{statecomment ? 'Cacher': 'Lire tous'}</button>
        </div>
    </div>
  )
}

export default Portfolio
