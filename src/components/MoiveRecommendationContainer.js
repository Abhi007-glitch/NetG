import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import usePopularMovieList from "../Hooks/usePopularMovieList";
import useTopRated from "../Hooks/useTopRated";
import useUpcoming from "../Hooks/useUpcoming";

const MovieRecommendationContainer = ()=>{

    //calling custom hooks 
    usePopularMovieList();
    useTopRated();
    useUpcoming();
    

    const NowPlayingData = useSelector(state => state.movie?.nowPlayingList);
    const TopRatedList = useSelector(state => state.movie?.topRatedList);
    const UpComingList = useSelector(state=>state.movie?.upComingMovieList);
    const popularMovieList= useSelector(state=>state.movie?.popularMoviesList);
 

    console.log("New List",popularMovieList);
    return (
        <div className=" bg-black">
        <div className="-mt-36 md:-mt-40 pl-4  relative z-20">
 
            <MovieList Title={"Now Playing"} Movies={NowPlayingData}/> 
            <MovieList Title={"Top Rated Movies"} Movies={TopRatedList}/>
            <MovieList Title={"Popular Movies"} Movies={popularMovieList}/>
            <MovieList  Title={"UpComing Movies"} Movies={UpComingList} />
            
                       
        </div>
          
        </div>
    )
}

export default MovieRecommendationContainer;