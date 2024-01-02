import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constant";
import { addMovieDescrition } from "../Redux /Slices/movieSlice";
import useMovieDetailFilter from "./useMovieDetailFilter";
import { useEffect } from "react";

const useMovieDescription = (id) => {

    console.log("OUTSIDE UseMOvieDescription ", id);
    useEffect(() => {

        const getData = async () => {

            console.log("UseMOvieDescription ", id);
            const data = await fetch("https://api.themoviedb.org/3/movie/" + 820525, API_OPTION);
            const json = await data.json();


            // const filterData = useMovieDetailFilter(json);
        };
        getData();

    },[id]);

   

    // dispatch(addMovieDescrition(filterData));
   
}

export default useMovieDescription;