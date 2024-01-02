import { useCallback } from "react";
import useMovieDescription from "../Hooks/useMovieDescription";
import { Poster_Base_URL } from "../utils/constant";


const MovieCard =({poster_path,id})=>{
    
    console.log("MOVIE ID ",id);
   const temp =useMovieDescription(id); 
    
    if (!poster_path) return;
    return(
        <div className="w-36 pr-4 "  >
             <img alt="MovieCardImg" src={"https://image.tmdb.org/t/p/w500/"+poster_path} />
        </div>
    )
}

export default MovieCard;