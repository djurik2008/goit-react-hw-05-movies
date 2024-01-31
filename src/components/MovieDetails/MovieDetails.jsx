import {
  useParams,
  useNavigate,
  useLocation,
  Link,
  Outlet,
} from 'react-router-dom';

import { useState, useEffect, Suspense } from 'react';
import { getMovieById } from 'service/apiFilms';
import Loader from 'components/Loader/Loader';
import css from './movieDetails.module.css';
import noImage from '../../images/no-image.gif';

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

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
  const from = location.state?.from || '/';

  const goBack = () => navigate(from);

  return (
    <div className={css.movieDetailsContainer}>
      {error && <p className={css.error}>{error}</p>}
      {loading && <Loader />}
      <button type="button" onClick={goBack} className={css.goBackButton}>
        Go back
      </button>
      {movie && (
        <div className={css.movieContainer}>
          <img
            className={css.moviePoster}
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                : noImage
            }
            alt="title"
          />
          <div className={css.movieDescr}>
            <h2 className={css.movieTitle}>{title}</h2>
            <p className={css.movieOverview}>{overview}</p>
          </div>
        </div>
      )}
      <Link to="cast" state={{ from }} className={css.link}>
        Cast
      </Link>
      <Link to="reviews" state={{ from }} className={css.link}>
        Reviews
      </Link>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
