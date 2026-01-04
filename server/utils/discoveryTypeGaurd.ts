const discoveryValues = [
  "collection",
  "company",
  "keyword",
  "movie",
  "multi",
  "person",
  "tv",
  "network",
  "award",
] as const;

export const isDiscoveryValue = (
  value: unknown
): value is DiscoveryValue => {
  return (
    typeof value === "string" &&
    discoveryValues.includes(value as DiscoveryValue)
  );
};
