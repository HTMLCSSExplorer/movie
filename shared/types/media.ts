import type { LanguageCode } from "./languageCodes";

export type ActingDepartments = "Acting";
export type MediaItem = TVMedia | MovieMedia | PersonMedia;
export type MediaType = "movie" | "tv" | "person";

export interface BaseMedia {
  adult: boolean;
  backdrop_path?: string;
  id: number;
  original_language: LanguageCode;
  overview: string;
  poster_path?: string;
  genre_ids: number[];
  popularity: number;
  video?: boolean;
  vote_average: number;
  vote_count: number;
}
export interface MovieMedia extends BaseMedia {
  title: string;
  original_title: string;
  media_type: "movie";
  release_date: string;
}
export interface TVMedia extends BaseMedia {
  name: string;
  original_name: string;
  media_type: "tv";
  first_air_date: string;
}

export interface PersonMedia extends BaseMedia {
  gender: number;
  known_for_department: ActingDepartments | ActingDepartments[];
  name: string;
  media_type: "person";

  original_name: string;
  profile_path?: string;
  known_for: MediaItem[];
}
export interface PaginationApiResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}
export type MovieMediaApiResponse = PaginationApiResponse<MovieMedia>;
export type TvMediaApiResponse = PaginationApiResponse<TVMedia>;
export type PersonMediaApiResponse = PaginationApiResponse<PersonMedia>;
export type MediaApiResponse = MovieMediaApiResponse | TvMediaApiResponse | PersonMediaApiResponse;
