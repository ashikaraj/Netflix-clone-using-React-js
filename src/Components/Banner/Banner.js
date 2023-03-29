import React, { useEffect, useState } from 'react'
import {API_KEY,imageUrl} from '../../constants/constants'
import axios from '../../axios'

import "./Banner.css"
function Banner() {
       const [tv,setTv]=useState()
  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data.results[0])
      setTv(response.data.results[0])
    });
   
  },[])

  return (
    <div
    style={{backgroundImage: `url(${tv ? imageUrl+tv.backdrop_path :""})`}}
     className='banner'>
        <div className='content'>
            <h1 className='title'>{tv ? tv.name:""}</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>

            </div>
            <h1 className='description'>{tv ? tv.overview:"" }</h1>
        </div>
        <div>
            <div className="fade-bottom"></div>
        </div>
      
    </div>
  )
}

export default Banner
