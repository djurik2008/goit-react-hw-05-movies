import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovie } from 'service/apiFilms';
import MoviesList from '../MoviesList/MoviesList';
import SearchForm from '../SearchForm/SearchForm';
import Loader from 'components/Loader/Loader';
import css from './moviesSearch.module.css';

const MoviesSearch = () => {
  const [movies, setMovies] = useState([]);
  //   const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get('search') ?? '';

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        const {
          data: { results },
        } = await getSearchMovie(search);
        setMovies(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [search]);

  const handleSearch = ({ search: word }) => {
    if (search === word) {
      return;
    }
    setSearchParams({ search: word });
    setMovies([]);
  };

  return (
    <>
      <SearchForm onSubmit={handleSearch} />
      {error && <p className={css.error}>{error}</p>}
      {loading && <Loader />}
      {movies && (
        <div>
          <MoviesList items={movies} />
        </div>
      )}
    </>
  );
};

export default MoviesSearch;
