import React, { useEffect, useState, useSyncExternalStore } from 'react'
import './RowPost.css'
import axios from 'axios'
import VideoUrl, {API_KEY, imageUrl, originals} from '../../Constants/urls'
import YouTube from 'react-youtube';

function RowPost(props) {
    const [movies, setMovies] = useState([])
    const [ytVideo, setYtVideo] = useState('')
    useEffect(() => {
      axios.get(props.url).then((response) => {
        setMovies(response.data.results.slice(0,10));
      })
    }, [])
    
    function searchTriler(id){
        axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`).then((response) => {
            console.log(response.data.results);
            // setYtVideo(response.data.results[0].key)
            if(response.data.results[0]){
                setYtVideo(response.data.results[0])
                console.log(response.data.results[0].key);
            }
        })
    }
    
    const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      }
    }
    return (
        <div className='row'>
            <h2>{props.categorie}</h2>
            <div className='posters'>
            {
            movies.map((movie,idx) => {
                return (
                        <img onClick={
                            ()=> {
                                searchTriler(movie.id)
                            }
                        } className={props.isSmall ? 'smallPoster' :'poster'} alt='poster' src={imageUrl+movie.backdrop_path} />
                    )
                })
            }
            </div>
            {console.log("-----")}
            {console.log(ytVideo.key)}
            { ytVideo && <button onClick={() => setYtVideo('')}>X</button> }
            {ytVideo && <YouTube opts={opts} videoId={ytVideo.key}/> }
        </div>
    )
}

export default RowPost
