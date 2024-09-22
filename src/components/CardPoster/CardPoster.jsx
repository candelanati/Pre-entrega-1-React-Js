import { Children, useState } from 'react'
import './CardPoster.css'

function CardPoster (){
    return (
        <>
            <div className='div-card'>
                <div className='div-card-poster'>
                    <img src="../../../public/img/oscuro.jpg" alt="" />
                </div>
                <div className='div-card-poster'>
                    <img src="../../../public/img/cover.jpg" alt="" />
                </div>
                
            </div>
        </>
    )
}


export default CardPoster