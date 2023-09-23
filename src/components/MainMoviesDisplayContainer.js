import { useSelector } from "react-redux";
import MovieTitle from "./MovieTitle";
import VideoPlayer from "./VideoPlayer";

const MainMoviesDisplayContainer = ()=>{
    
    const moviesList= useSelector((store)=>(store.movie?.nowPlayingList));
    if (!moviesList)
        return; // early return
    let x = Math.floor((Math.random() * 15) + 1);
    const {id,title,overview,poster_path} = moviesList[x];
   

    return(
        <div  >
        <MovieTitle id={id} title={title} overview={overview} poster_path={poster_path} />
        <VideoPlayer id={id} 
        />
            
            
        </div>
    )
}


export default MainMoviesDisplayContainer;