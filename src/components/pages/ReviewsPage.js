import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { fetchReviews } from 'components/API/ApiFilms';

const ReviewPage = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!movieId) {
      return;
    }
    fetchReviews(movieId).then(r => setReviews(r.results));
  }, [movieId]);

  return (
    <div>
      <ul style={{ listStyle: 'none' }}>
        {reviews.length === 0 ? (
          <div>
            <b>There are no customer reviews for this movie yet.</b>
          </div>
        ) : (
          reviews.map(review => (
            <li
              key={review.id}
              style={{
                border: '1px solid black',
                marginBottom: '2px',
                borderRadius: '10px',
                padding: '5px 10px',
              }}
            >
              <p>
                author:{' '}
                <span style={{ fontWeight: 'bold' }}>{review.author}</span>
              </p>
              <p>review: {review.content}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export { ReviewPage };
