import MovieCard from "./MovieCard";
import { getDCInstance } from "../util";
import { listAllMovies } from "@fireboxd/generated";
import { updateImage } from "../../../fireboxd-lib";

interface ListAllMoviesProps {
  token: string;
}
export async function ListAllMovies({ token }: ListAllMoviesProps) {
  const dc = await getDCInstance(token);
  const movies = await listAllMovies(dc);
  return (
    <div className="flex flex-wrap space-between -mx-2">
      {movies.data.movies.map((movie) => (
        <MovieCard key={movie.id} movie={{...movie, rating: movie.ratings_on_movie[0]?.rating, movieId: movie.id}} />
      ))}
    </div>
  );
}
