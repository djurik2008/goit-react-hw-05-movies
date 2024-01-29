import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieById } from 'service/apiFilms';
import Loader from 'components/Loader/Loader';
import css from './movieDetails.module.css';

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        const { data } = await getMovieById(id);
        setMovie(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [id]);

  const { poster_path, title, overview } = movie;
  const goBack = () => navigate(-1);

  return (
    <div>
      {error && <p className={css.error}>{error}</p>}
      {loading && (
        <div className={css.loader}>
          <Loader />
        </div>
      )}
      <button type="button" onClick={goBack}>
        Go back
      </button>
      {movie && (
        <div className={css.movieContainer}>
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                : 'noImage'
            }
            alt="title"
            width="350"
          />
          <div className={css.movieDescr}>
            <h2>{title}</h2>
            <p>{overview}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
