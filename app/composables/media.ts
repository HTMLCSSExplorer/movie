export const useMedia = () => {
  const defaultMediaApiResponse: MediaApiResponse = emptyApiResponse();

  const media = async (tabValue: TabValue): Promise<MediaApiResponse[]> => {
    try {
      const response = await $fetch<MediaApiResponse[]>("/api/media", {
        method: "POST",
        body: {
          queryType: tabValue,
        },
      });

      return response;
    } catch (error: any) {
      console.log(`❌Error getting  media object: ${error.message}`);
      return [defaultMediaApiResponse];
    }
  };

  return { media };
};
