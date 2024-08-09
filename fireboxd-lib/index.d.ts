import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';
export const connectorConfig: ConnectorConfig;

export type TimestampString = string;

export type UUIDString = string;

export type Int64String = string;

export type DateString = string;


export interface AddMoviesResponse {
  movie_insert: Movie_Key;
}

export interface AddMoviesVariables {
  title: string;
  genre: string;
  imageUrl: string;
}

export interface CreateRatingResponse {
  rating_insert: Rating_Key;
}

export interface CreateRatingVariables {
  id: UUIDString;
  rating: number;
}

export interface CurrentMovieResponse {
  movie?: {
    id: UUIDString;
    title: string;
    genre: string;
    imageUrl: string;
  } & Movie_Key;
}

export interface CurrentMovieVariables {
  id: UUIDString;
}

export interface ListAllMoviesResponse {
  movies: ({
    id: UUIDString;
    title: string;
    genre: string;
    imageUrl: string;
    ratings_on_movie: ({
      rating: number;
    })[];
  } & Movie_Key)[];
}

export interface ListMyReviewsResponse {
  ratings: ({
    id: UUIDString;
    rating: number;
    movie: {
      id: UUIDString;
      title: string;
      imageUrl: string;
    } & Movie_Key;
  } & Rating_Key)[];
}

export interface Movie_Key {
  id: UUIDString;
  __typename?: 'Movie_Key';
}

export interface Rating_Key {
  id: UUIDString;
  __typename?: 'Rating_Key';
}

export interface UpdateImageResponse {
  movie_update?: Movie_Key | null;
}

export interface UpdateRatingResponse {
  rating_update?: Rating_Key | null;
}

export interface UpdateRatingVariables {
  id: UUIDString;
  rating: number;
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}



/* Allow users to create refs without passing in DataConnect */
export function addMoviesRef(vars: AddMoviesVariables): MutationRef<AddMoviesResponse, AddMoviesVariables>;
/* Allow users to pass in custom DataConnect instances */
export function addMoviesRef(dc: DataConnect, vars: AddMoviesVariables): MutationRef<AddMoviesResponse,AddMoviesVariables>;

export function addMovies(vars: AddMoviesVariables): MutationPromise<AddMoviesResponse, AddMoviesVariables>;
export function addMovies(dc: DataConnect, vars: AddMoviesVariables): MutationPromise<AddMoviesResponse,AddMoviesVariables>;


/* Allow users to create refs without passing in DataConnect */
export function updateRatingRef(vars: UpdateRatingVariables): MutationRef<UpdateRatingResponse, UpdateRatingVariables>;
/* Allow users to pass in custom DataConnect instances */
export function updateRatingRef(dc: DataConnect, vars: UpdateRatingVariables): MutationRef<UpdateRatingResponse,UpdateRatingVariables>;

export function updateRating(vars: UpdateRatingVariables): MutationPromise<UpdateRatingResponse, UpdateRatingVariables>;
export function updateRating(dc: DataConnect, vars: UpdateRatingVariables): MutationPromise<UpdateRatingResponse,UpdateRatingVariables>;


/* Allow users to create refs without passing in DataConnect */
export function createRatingRef(vars: CreateRatingVariables): MutationRef<CreateRatingResponse, CreateRatingVariables>;
/* Allow users to pass in custom DataConnect instances */
export function createRatingRef(dc: DataConnect, vars: CreateRatingVariables): MutationRef<CreateRatingResponse,CreateRatingVariables>;

export function createRating(vars: CreateRatingVariables): MutationPromise<CreateRatingResponse, CreateRatingVariables>;
export function createRating(dc: DataConnect, vars: CreateRatingVariables): MutationPromise<CreateRatingResponse,CreateRatingVariables>;


/* Allow users to create refs without passing in DataConnect */
export function updateImageRef(): MutationRef<UpdateImageResponse, undefined>;/* Allow users to pass in custom DataConnect instances */
export function updateImageRef(dc: DataConnect): MutationRef<UpdateImageResponse,undefined>;

export function updateImage(): MutationPromise<UpdateImageResponse, undefined>;
export function updateImage(dc: DataConnect): MutationPromise<UpdateImageResponse,undefined>;


/* Allow users to create refs without passing in DataConnect */
export function listMyReviewsRef(): QueryRef<ListMyReviewsResponse, undefined>;/* Allow users to pass in custom DataConnect instances */
export function listMyReviewsRef(dc: DataConnect): QueryRef<ListMyReviewsResponse,undefined>;

export function listMyReviews(): QueryPromise<ListMyReviewsResponse, undefined>;
export function listMyReviews(dc: DataConnect): QueryPromise<ListMyReviewsResponse,undefined>;


/* Allow users to create refs without passing in DataConnect */
export function listAllMoviesRef(): QueryRef<ListAllMoviesResponse, undefined>;/* Allow users to pass in custom DataConnect instances */
export function listAllMoviesRef(dc: DataConnect): QueryRef<ListAllMoviesResponse,undefined>;

export function listAllMovies(): QueryPromise<ListAllMoviesResponse, undefined>;
export function listAllMovies(dc: DataConnect): QueryPromise<ListAllMoviesResponse,undefined>;


/* Allow users to create refs without passing in DataConnect */
export function currentMovieRef(vars: CurrentMovieVariables): QueryRef<CurrentMovieResponse, CurrentMovieVariables>;
/* Allow users to pass in custom DataConnect instances */
export function currentMovieRef(dc: DataConnect, vars: CurrentMovieVariables): QueryRef<CurrentMovieResponse,CurrentMovieVariables>;

export function currentMovie(vars: CurrentMovieVariables): QueryPromise<CurrentMovieResponse, CurrentMovieVariables>;
export function currentMovie(dc: DataConnect, vars: CurrentMovieVariables): QueryPromise<CurrentMovieResponse,CurrentMovieVariables>;


