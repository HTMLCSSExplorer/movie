export const sanitizeString = (input: string): string => {
  return input
    .toLowerCase()
    .replace(/%25/g, "_")
    .replace(/[ /_;,:-]+/g, "_")
    .replace(/_+/g, "_")
    .replace(/^_+|_+$/g, "");
};
