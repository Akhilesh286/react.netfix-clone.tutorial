import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../Constants/network'
import {trending} from '../../Constants/urls'
import {imageUrl} from '../../Constants/urls'

function Banner() {
    const [movie, setMovie] = useState('')
    useEffect(() => {
        axios.get(trending).then( (response) => {
            setMovie(response.data.results[Math.floor(Math.random() * 20)]);
        })
    }, [])
    console.log(movie);
    return (
        <div 
         style={{backgroundImage:`url(${ movie ? imageUrl+movie.backdrop_path : ''})`}}
         className='banner'>
            <div className='content' >
                <h1 className='title'>{movie ? movie.title ? movie.title : movie.name : ''}</h1>
                <div className='banner_buttons' >
                    <button className='button' >Play</button>
                    <button className='button' >My list</button>
                </div>
                <h1 className='description'>{movie? movie.overview : ''}</h1>
            </div>
        <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner
