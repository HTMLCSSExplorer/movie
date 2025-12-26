import { MediaApiResponse } from "~~/shared/types/media";
import { TabValue } from "~~/shared/types/tabs";

interface Body {
  queryType: TabValue;
}
const BASE_URL = "https://api.themoviedb.org/3/";

const ENDPOINTS: Record<TabValue, string[]> = {
  day: ["trending/all/day?language=en-US"],
  week: ["trending/all/week?language=en-US"],
  popular: ["movie/popular?language=en-US&page=1", "tv/popular?language=en-US&page=1"],
  stream: [
    "discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&watch_region=US&with_watch_monetization_types=flatrate",
    "discover/movie?include_adult=false&include_video=false&language=en-US&page=1&region=US&sort_by=popularity.desc&with_watch_monetization_types=flatrate",
  ],
  ontv: ["tv/on_the_air?language=en-US&page=1"],
  rent: [
    "discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&watch_region=US&with_watch_monetization_types=rent",
    "discover/movie?include_adult=false&include_video=false&language=en-US&page=1&region=US&sort_by=popularity.desc&with_watch_monetization_types=rent",
  ],
  theather: ["movie/now_playing?language=en-US&page=1"],
  freemovie: [
    "discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_watch_monetization_types=free",
  ],
  freeshow: [
    "discover/tv?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_watch_monetization_types=free",
  ],
};

export default defineEventHandler(async (event) => {
  const baseApiResponse: MediaApiResponse = emptyApiResponse();
  const options = apiHeaders();
  const { queryType } = await readBody<Body>(event);
  const endpoint = ENDPOINTS[queryType];
  if (!endpoint) {
    throw createError({
      statusCode: 400,
      message: "Invalid  query type",
    });
  }

  const urls = endpoint.map((path) => `${BASE_URL}${path}`);
 
  
  try {
    const response = await Promise.all<MediaApiResponse>(urls.map((url) => $fetch(url, options)));
    return response;
  } catch (error: any) {
    console.error("TMDB fetch error:", error.message);
    return baseApiResponse;
  }
});
