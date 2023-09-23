import React, { useCallback, useEffect } from 'react'
import Header from './Header'
import { API_OPTION } from '../utils/constant'
import { useDispatch } from 'react-redux'

import { addNowPlayingMovies } from '../Redux /Slices/movieSlice'
import MainMoviesDisplayContainer from './MainMoviesDisplayContainer'
import MovieRecommendationContainer from './MoiveRecommendationContainer'
import usePopularMovieList from '../Hooks/usePopularMovieList'

const Browse = () => {
  
  const dispatch = useDispatch();
  const fetchData = useCallback( async ()=>{
    
    const data =await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',API_OPTION);
    const json = await data.json();
    console.log("Browse" ,json.results);
    dispatch(addNowPlayingMovies(json.results));

  },[dispatch]
  )


  useEffect(()=>{
   
    fetchData();


  },[]);
 
  
  

  return (
    <div>
  
      <Header />
      <>
      {/* 
        MovieDisplayContainer
        
        Recommended MovieDisplay Container List 
            Each row containing list of moives cards
              card pop up in the y direction on hover
       */}
       <MainMoviesDisplayContainer/>
       <MovieRecommendationContainer/>
    </>
    </div>
  
  )
}

export default Browse;