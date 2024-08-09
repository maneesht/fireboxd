import MovieCard from "./MovieCard";
import { getDCInstance } from "../util";
import { listAllMovies, listMyReviews } from "@fireboxd/generated";

interface ListMyReviewsProps {
  token: string;
}
export async function ListMyReviews({ token }: ListMyReviewsProps) {
  const dc = await getDCInstance(token);
  const movies = await listMyReviews(dc);
  return (
    <div>
      {movies.data.ratings.map((rating) => (
        <MovieCard movie={{...rating.movie, rating: rating.rating}} />
      ))}
    </div>
  );
}
