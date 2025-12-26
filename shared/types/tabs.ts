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
export interface TabItem {
  label: string;

  value: TabValue;
}

 
