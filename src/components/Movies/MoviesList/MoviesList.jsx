import { Link } from 'react-router-dom';

const MoviesList = ({ items }) => {
  const elements = items.map(({ id, title, vote_average }) => (
    <li key={id}>
      <Link to={`/movies/${id}`}>{title}</Link>
      <p>Rating: {vote_average}</p>
    </li>
  ));
  return <ul>{elements}</ul>;
};

export default MoviesList;
