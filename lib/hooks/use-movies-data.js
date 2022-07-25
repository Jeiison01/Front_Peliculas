import { useReducer, useEffect, useRef } from 'react';
import { searchMoviesApi} from '../api/search-movies-api';
import {
  moviesDataReducer,
  MOVIES_SEARCH_ACTIONS,
  MOVIES_SEARCH_INITIAL_STATE
} from '../reducers/movies-search.reducer';


const searchMovies = async (
  search,
  page,
  startSearch,
  searchSuccess,
  searchError
) => {
  startSearch();

  const { success, data, statusCode } = await searchMoviesApi(search, page);

  if (success) searchSuccess(data.results);
  else searchError(`Error: ${statusCode}`);
};

export const useMoviesData = () => {
  const [moviesData, setMoviesData] = useReducer(
    moviesDataReducer,
    MOVIES_SEARCH_INITIAL_STATE
  );

  const isInitialized = useRef(false)

  const startSearch = () =>
    setMoviesData({
      type: MOVIES_SEARCH_ACTIONS.START_SEARCH
    });

  const searchSuccess = movies =>
    setMoviesData({
      type: MOVIES_SEARCH_ACTIONS.SEARCH_SUCCESS,
      movies
    });

  const searchError = error =>
    setMoviesData({
      type: MOVIES_SEARCH_ACTIONS.SEARCH_ERROR,
      error
    });

    const setSearchTerm = searchTerm =>
    setMoviesData({
      type: MOVIES_SEARCH_ACTIONS.SET_SEARCH_TERM,
      searchTerm
    });

  const setPage = page =>
    setMoviesData({
      type: MOVIES_SEARCH_ACTIONS.SET_PAGE,
      page
    });

  useEffect(() => {
    const searchTimeout = () => 
      searchMovies(
        moviesData.searchTerm,
        moviesData.page,
        startSearch,
        searchSuccess,
        searchError
      );


    if(isInitialized.current){
      searchTimeout()
      isInitialized.current = true;
    }else{
      const timeoutId = setTimeout(searchTimeout, 200); 
      return () => clearTimeout(timeoutId)
    }

  }, [moviesData.searchTerm, moviesData.page]);
  return { ...moviesData,setSearchTerm, setPage };
};
