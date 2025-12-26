export const ShuffledArray = <T>(array: T[]): T[] => {
  const result: T[] = [...array];

  let currentIndex: number = result.length;

  while (currentIndex !== 0) {
    const randomIndex: number = Math.floor(
      Math.random() * currentIndex
    );
    currentIndex--;

    [result[currentIndex], result[randomIndex]] = [
      result[randomIndex] as T,
      result[currentIndex] as T,
    ];
  }
  return result;
};
