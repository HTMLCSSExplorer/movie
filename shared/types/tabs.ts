export type TabValue =
  | "day"
  | "week"
  | "popular"
  | "stream"
  | "ontv"
  | "rent"
  | "theather"
  | "rent"
  | "freemovie"
  | "freeshow";
export interface TabItem {
  label: string;

  value: TabValue;
}
