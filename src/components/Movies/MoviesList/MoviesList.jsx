import { Link, useLocation } from 'react-router-dom';
import css from './moviesList.module.css';

const MoviesList = ({ items }) => {
  const location = useLocation();

  const elements = items.map(({ id, title, vote_average }) => (
    <li key={id} className={css.movieListItem}>
      <Link
        className={css.movieLink}
        to={`/movies/${id}`}
        state={{ from: location }}
      >
        {title}
      </Link>
      <p className={css.rating}>Rating: {vote_average}</p>
    </li>
  ));
  return <ul className={css.moviesList}>{elements}</ul>;
};

export default MoviesList;
