import type { CountryCode } from "./countryCodes";
import type { LanguageCode } from "./languageCodes";

//-------------------------
// ******Media Items*******
//-------------------------
export type MediaType = "movie" | "tv" | "person";
export type MediaItem = Movie | Show | Person;

// ******Base Media*******
export type BaseMedia = {
  adult?: boolean;
  backdrop_path?: string;
  genre_ids: number[];
  id: number;
  original_language: LanguageCode;
  overview: string;
  poster_path?: string;
  popularity: number;
  vote_average: number;
  vote_count: number;
};

// ******Movie Media*******
export interface Movie extends BaseMedia {
  original_title: string;
  release_date: string;
  title: string;
  video: boolean;
  media_type?: "movie";
}

// ******Tv Show Media*******
export interface Show extends BaseMedia {
  first_air_date: string;
  name: string;
  origin_country: CountryCode[];
  original_name: string;
  media_type?: "tv";
}

// ******Person Media*******
export interface Person extends BaseMedia {
  media_type?: "person";
  gender: number;
  known_for_department: string;
  name: string;
  original_name: string;
  profile_path?: string;
  known_for: MediaItem[];
}

//-------------------------
// ******Sections*******
//-------------------------

export type TabValue =
  | "day"
  | "week"
  | "popular"
  | "stream"
  | "ontv"
  | "rent"
  | "theather"
  | "freemovie"
  | "freeshow";

export class TabsItem {
  constructor(
    public label: string,
    public value: TabValue
  ) {}
}
