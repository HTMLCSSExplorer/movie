import type { MediaApiResponse } from "../types/media";

export const emptyApiResponse = (): MediaApiResponse => {
  return {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  };
};
