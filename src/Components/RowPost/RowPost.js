import React,{useEffect,useState} from 'react'
import Youtube from 'react-youtube'
import './RowPost.css'
import {imageUrl,API_KEY} from '../../constants/constants'
import axios from '../../axios'

function RowPost(props) {
  const[tv,setTv]=useState([])
  const [urlId,setUrlId]=useState('')

  useEffect(()=>{
    axios.get(props.url).then (response=>{
      console.log(response.data)
      setTv(response.data.results)
    }).catch(err=>{
      // alert('Network Error')
    })

  },[])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie=(id)=>{
    console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&lanfuage=en-US`).then(response=>{
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0])
      }else{
        console.log('Trailer not available')
      }
    })

  }
  return (
    <div className='row'>
      <h2>{props.title}</h2>
    <div className="posters">
      {tv.map((obj)=>

     
        <img onClick={()=>handleMovie(obj.id)}className={props.isSmall ? 'smallPoster' :'poster'} alt='poster' src= {`${imageUrl+obj.backdrop_path}`} />
      )}
    </div>
    {urlId && <Youtube opts={opts} videoId={urlId.key}/>}

    </div>
  )
}

export default RowPost
