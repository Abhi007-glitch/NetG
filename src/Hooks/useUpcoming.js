import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addUpcomingMovies } from '../Redux /Slices/movieSlice';
import { API_OPTION } from '../utils/constant';

const useUpcoming = () => {
    const dispatch = useDispatch();
    
    
    useEffect( () => {
      const fetchVideo = async () => {
          const data = await fetch(`https://api.themoviedb.org/3/movie/upcoming`, API_OPTION);
          const json = await data.json();
          
          dispatch(addUpcomingMovies(json.results));
        }
     fetchVideo();
    }, []);

}

export default useUpcoming;