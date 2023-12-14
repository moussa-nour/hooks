import React from 'react'
import MovieCard from './MovieCard'

function MovieListe({movies}) {
  return (
    <div className='grid-container'>
      {movies.map((movie)=>
      <MovieCard movie={movie}/>)}
    </div>
  )
}

export default MovieListe
