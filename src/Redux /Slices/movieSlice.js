import { createSlice } from "@reduxjs/toolkit";

const moviesConfig = {
    name :"movie",
    initialState:{
        nowPlayingList:null,
        movieTrailer:null,
        popularMoviesList:null,
        topRatedList:null,
        upComingMovieList:null,
        movieDescription:[]
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingList = action.payload;
        },
        addMovieTrailer:(state,action)=>{
           state.movieTrailer = action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.popularMoviesList=action.payload;
        },
        addTopRatedMovies:(state,action)=>{
            state.topRatedList=action.payload;
        },
        addUpcomingMovies:(state,action)=>{
            state.upComingMovieList=action.payload;
        },
        addMovieDescrition:(state,action)=>{
           state.movieDescription.push(action.payload);
        }
    }
}


const movieSlice = createSlice(moviesConfig);

export const {addNowPlayingMovies,addMovieTrailer,addTopRatedMovies,addPopularMovies,addUpcomingMovies,addMovieDescrition} = movieSlice.actions;

export default movieSlice.reducer;