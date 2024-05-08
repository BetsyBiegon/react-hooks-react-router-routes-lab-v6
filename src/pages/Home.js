import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard"; // Import MovieCard component

function Home() {
  const [movies, setMovies] = useState([]); // Add state for movies

  useEffect(() => {
    // Fetch movie data here (replace with your logic)
    setMovies([
      { title: "Doctor Strange" },
      { title: "The Imitation Game" },
      { title: "Black Mass" },
    ]);
  }, []);

  return (
    <>
      <header>
        <h1>Home Page</h1>
      </header>
      <main>
        {movies.map((movie) => (
          <MovieCard key={movie.title} title={movie.title} /> // Use MovieCard component
        ))}
      </main>
    </>
  );
};

export default Home;
