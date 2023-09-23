import React, { useEffect } from 'react'
import { API_OPTION, Poster_Base_URL } from '../utils/constant';

const MovieTitle = ({id,title,overview,poster_path}) => {
   
  console.log("Sent from MainMovie to movie title : ",poster_path)
  
  useEffect(()=>{
    const fetchPoster = async ()=>{
      const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/images`,API_OPTION );
      const json = await data.json();
      const postersList = json.posters;
      console.log("posters Movie Title : ",postersList);
       poster_path = postersList[1].file_path;
      
    }
    fetchPoster();


  },[]);

  return (
    <div className='absolute text-white pt-[10%] aspect-video w-screen pl-12 bg-gradient-to-r to-black'>
           <img className=" w-36 h-52"src={Poster_Base_URL+poster_path} alt='poster img'/>
           <h1 className='font-bold text-4xl py-7'>{title}</h1>
           <p className='text-base w-1/3'>{overview}</p>
           <div className='flex my-5'>
            <button className='mx-4 text-lg font-medium py-2 px-7  text-black bg-white'> Play</button>
            <button className='mx-4 text-lg font-medium py-2 px-7 bg-slate-500 text-white'>About</button>
           </div>
           
    </div>

  )
}

export default MovieTitle