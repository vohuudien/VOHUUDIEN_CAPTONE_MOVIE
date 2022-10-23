import movieAPI from 'apis/movieAPI'
import useRequest from 'hooks/useRequest'
import React from 'react'

const Showtimes = ({movieId}) => {
  const {data: cinema, isLoading, error} = useRequest(()=> movieAPI.getCinemaOfMovie(movieId))
  
  if(!cinema){
    return null
  }
  console.log(cinema.heThongRapChieu)
  return (
    <div></div>
  )
}

export default Showtimes