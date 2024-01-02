
import MovieCard from "./MovieCard";

const MovieList = (props) => {

       const {Title,Movies}= props;
    
        
        // A container with horizontal scroll feature of movies list 
        // each list would have a genre or type 


        return Movies && (
                <div className="px-6">
                <h1 className="text-lg md:text-3xl py-4 text-white">{Title}</h1>
                 <div  className="flex overflow-x-scroll ">
                        <div className="flex ">
                                {
                                        Movies?.map((Movie) => { return (<MovieCard key={Movie.id} id={Movie.id} poster_path={Movie?.poster_path} />) })
                                }
                        </div>

                </div>
                </div>

        )
}

export default MovieList;