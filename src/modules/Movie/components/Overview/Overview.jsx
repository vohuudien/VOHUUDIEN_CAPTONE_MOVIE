import React from 'react'

import movieAPI from 'apis/movieAPI'
import useRequest from 'hooks/useRequest'

const Overview = ({movieId}) => {
  const {data: movie, isLoading, error} = useRequest(()=> movieAPI.getMovieDetails(movieId))
  if(!movie){
    return null
  }
  return (
    <div>
      <h1>{movie.tenPhim}</h1>
    </div>
  )
}

export default Overview