import Ratings from "./Ratings";

interface Movie {
    title: string;
    imageUrl: string;
    rating?: number;
    ratingId?: string;
    movieId: string;
}

interface MovieCardProps {
    movie: Movie;
}
export default function MovieCard({ movie }: MovieCardProps) {
const { title, imageUrl, rating, ratingId, movieId } = movie;
    let color = "red";
    if(rating) {
      if(rating >= 4){
        color = "green";
      } else if(rating === 3) {
        color = "yellow";
      }
    }
    return (
      <div className="min-10 py-6 justify-center sm:py-12 w-1/3 px-2">
        <div className="py-3 sm:max-w-xl sm:mx-auto">
          <div className="bg-white text-black shadow-lg border-gray-100 max-h-80	 border sm:rounded-3xl p-8 flex space-x-8">
            <div className="h-48 overflow-visible w-1/2">
              <img
                className="rounded-3xl shadow-lg"
                src={imageUrl}
                alt={title}
              />
            </div>
            <div className="flex flex-col w-1/2 space-y-4">
              <div className="flex justify-between items-start">
                <h2 className="text-3xl font-bold">{title}</h2>
              </div>
              <Ratings rating={rating || 0} id={ratingId} movieId={movieId} />
            </div>
          </div>
        </div>
      </div>
    );
}