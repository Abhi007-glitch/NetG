import React from 'react'

import {  useSelector } from 'react-redux';

import useMovieTrailer from '../Hooks/useMovieTrailer';

const VideoPlayer = ({ id }) => {
  const TrailerVideo = useSelector(state=>state.movie.movieTrailer); 
  useMovieTrailer(id);


  return (
    <div className=''>
      <iframe className='w-screen aspect-video '
      src={"https://www.youtube.com/embed/"+TrailerVideo?.key+ "?&autoplay=1&mute=1"} 
      title="YouTube video player"
      allowFullScreen
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
       ></iframe>
    </div>
  )
}

export default VideoPlayer;