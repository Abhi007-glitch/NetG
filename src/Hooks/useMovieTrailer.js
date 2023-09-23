import  { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addMovieTrailer } from '../Redux /Slices/movieSlice';
import { API_OPTION } from '../utils/constant';

const useMovieTrailer = (id) => {
  
    const dispatch = useDispatch();

  console.log("ID ",id);
 

  useEffect( () => {
    const fetchVideo = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, API_OPTION);
        const json = await data.json();
        const moivelength = json.results.length;
        const movie = json.results.at(moivelength - 1);
        dispatch(addMovieTrailer(movie));
      }
   fetchVideo();
  }, [id,dispatch]);
}

export default useMovieTrailer;