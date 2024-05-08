import { Link } from 'react-router-dom'; // Import Link component

function MovieCard({ title }) {
  const id = 1; // Replace with logic to get movie ID

  return (
    <article>
      <h2>{title}</h2>
      <Link to={`/movie/${id}`}>View Info</Link> {/* Link to movie details */}
    </article>
  );
};

export default MovieCard;
