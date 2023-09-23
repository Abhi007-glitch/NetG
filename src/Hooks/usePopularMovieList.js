import  { useEffect } from 'react'
import { useDispatch  } from 'react-redux';
import { addPopularMovies } from '../Redux /Slices/movieSlice';
import { API_OPTION } from '../utils/constant';

const usePopularMovieList = () => {
    const dispatch = useDispatch();
    
    
    useEffect( () => {
      const fetchVideo = async () => {
          const data = await fetch(`https://api.themoviedb.org/3/movie/popular`, API_OPTION);
          const json = await data.json();
          
          dispatch(addPopularMovies(json.results));
        }
     fetchVideo();
    }, []);

       
}

export default usePopularMovieList;