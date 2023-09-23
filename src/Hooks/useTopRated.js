import  { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addTopRatedMovies } from '../Redux /Slices/movieSlice';
import { API_OPTION } from '../utils/constant';

const useTopRated = () => {
    const dispatch = useDispatch();
    
    
    useEffect( () => {
      const fetchVideo = async () => {
          const data = await fetch(`https://api.themoviedb.org/3/movie/top_rated`, API_OPTION);
          const json = await data.json();
          
          dispatch(addTopRatedMovies(json.results));
        }
     fetchVideo();
    }, []);
}

export default useTopRated