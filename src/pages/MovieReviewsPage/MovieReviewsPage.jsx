import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { getMovieReviews } from 'service/apiFilms';
import css from './movieReviewsPage.module.css';

const MovieReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        const {
          data: { results },
        } = await getMovieReviews(id);
        setReviews(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, [id]);

  const reviewsList = reviews.map(({ id, author, content }) => (
    <li key={id} className={css.reviewItem}>
      <h3 className={css.name}>{author}</h3>
      <p className={css.reviewContent}>{content}</p>
    </li>
  ));

  return (
    <div className={css.reviewsContainer}>
      {error && <p className={css.error}>{error}</p>}
      {loading && <Loader />}
      {reviews && <ul className={css.reviewsList}>{reviewsList}</ul>}
    </div>
  );
};

export default MovieReviewsPage;
