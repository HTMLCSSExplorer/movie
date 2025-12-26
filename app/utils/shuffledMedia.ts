const { media } = useMedia();
export const getShuffledMedia = async (
  value: TabValue
): Promise<MediaItem[]> => {
  const res = await media(value);
  return ShuffledArray([
    ...(res[0]?.results ?? []),
    ...(res[1]?.results ?? []),
  ]);
};
