import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { getMovieCast } from 'service/apiFilms';
import css from './movieCastPage.module.css';
import noImage from '../../images/no-image.gif';

const MovieCastPage = () => {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setLoading(true);
        const {
          data: { cast },
        } = await getMovieCast(id);
        setCast(cast);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCast();
  }, [id]);

  return (
    <>
      {error && <p className={css.error}>{error}</p>}
      {loading && <Loader />}
      {cast && (
        <ul className={css.castList}>
          {cast.map(({ id, profile_path, name, character }) => (
            <li key={id} className={css.castItem}>
              <img
                className={css.castImage}
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w300/${profile_path}`
                    : noImage
                }
                alt={name}
              />
              <p className={css.castInformation}>Actor: {name}</p>
              <p className={css.castInformation}>Character: {character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default MovieCastPage;
