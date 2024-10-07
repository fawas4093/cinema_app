import React from 'react'
import Movie from './Movie'
const MovieList = ({movies}) => {
  return (
    <div className="container">
        <div className="row">
            {movies.map((movie,index) =>(
                <Movie
                    key={index}
                    title={movie.title}
                    image={movie.image}
                    description={movie.description}
                />           
            ))}
        </div>     
    </div>
  )
}

export default MovieList
