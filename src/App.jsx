import { useMoviesData } from '../lib/hooks/use-movies-data';
import MoviesGrid from '../components/movies-grid';

const App = () => {
  const { movies, searchTerm, page, error, loading, setSearchTerm, setPage } =
    useMoviesData();

  return (
    <div className="">
      <input
        type="text"
        value={searchTerm}
        onChange={ev => setSearchTerm(ev.target.value)}
      ></input>
      <MoviesGrid movies={movies} loading={loading} error={error} />
      <button onClick={() => setPage(page + 1)}>Página: {page}</button>
    </div>
  );
};

export default App;
