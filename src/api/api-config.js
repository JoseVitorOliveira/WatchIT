const apiConfig = {
  baseUrl: import.meta.env.VITE_BASE_URL,
  apiKey: import.meta.env.VITE_API_KEY,
  largeImage: (imgPath) => `${import.meta.env.VITE_LARGE_IMAGE_URL}/${imgPath}`,
  w500Image: (imgPath) => `${import.meta.env.VITE_W500_IMAGE_URL}/${imgPath}`,
};

export default apiConfig;
