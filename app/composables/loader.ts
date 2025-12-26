export const useLoader = () => {
  const isLoading = useState("loading", () => false);
  const loadBar = useLoadingIndicator();

  const startLoading = () => {
    isLoading.value = true;
    loadBar.start();
  };
  const finishLoading = () => {
    isLoading.value = false;
    loadBar.finish();
  };

  return {
    startLoading, finishLoading, isLoading
  };
};
