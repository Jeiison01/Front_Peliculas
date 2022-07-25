import MovieCard from "./movie-card"

const MoviesGrid = ({movies, loading, error}) => {

  if(loading) return <p>Cargando...</p>

  if(error) return <p>{error}</p>

  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {movies && movies.map(movie => (
          <MovieCard 
          key={movie.id}
          image={movie.image}
          year={movie.year}
          title={movie.title}
          rating={movie.rating}
          />
          ))}
      </div>
  )
}

export default MoviesGrid