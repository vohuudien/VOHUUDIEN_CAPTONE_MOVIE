import { useNavigate } from 'react-router-dom'

import useRequest from 'hooks/useRequest'
import movieAPI from 'apis/movieAPI'



const MovieShowing = () => {
  const navigate = useNavigate()
  const {data: movies, isLoading, error} = useRequest(movieAPI.getMovies)
  const goToMovie = (movieId) => {
    navigate(`/movie/${movieId}`)
  }

  return (
    <ul>
      {movies?.map(movie => {
        return <li key={movie.maPhim}>
          <span>{movie.tenPhim}</span>
          <button onClick={()=> goToMovie(movie.maPhim)}>Chi tiết</button>
          </li>
      })}
    </ul>
  )
}

export default MovieShowing