import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie.view";

export const MainView = () => {
  const [movies, setMovies] = useState([
    {
      _id: "64f494bc153401240829e59b",
      Title: "Shawshank Redemption",
      Description: "Two imprisoned men bond over a number of years, finding solace and eve…",
      ImageURL: "https://i.ibb.co/MfpQPr0/shawshank-poster.png",
    },
    {
      _id: "64f49568153401240829e5a0",
      Title: "Jurassic Park",
      Description: "A pragmatic paleontologist visiting an almost complete theme park is t…",
      ImageURL: "https://i.ibb.co/hKT0Pr4/jurassic-poster.png",
    },
    {
      _id: "64f495b3153401240829e5a4",
      Title: "Star Wars",
      Description: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wooki…",
      ImageURL: "https://i.ibb.co/FD5JpRC/starwars-poster.png",
    },
    {
      _id: "64f4957b153401240829e5a1",
      Title: "Inside Out",
      Description: "After young Riley is uprooted from her Midwest life and moved to San F…",
      ImageURL: "https://i.ibb.co/hFYsjhH/inside-poster.png",
    }
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  if (selectedMovie) {
    return (
      <MovieView 
        movie={selectedMovie}
        onBackClick={() => setSelectedMovie(null)} 
      />
    );
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard 
          key={movie._id} 
          movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
      ))}
    </div>
  );
};