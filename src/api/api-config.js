const apiConfig = {
  baseUrl: import.meta.env.BASE_URL,
  apiKey: import.meta.env.API_KEY,
  largeImage: (imgPath) => `${import.meta.env.LARGE_IMAGE_URL}/${imgPath}`,
  w500Image: (imgPath) => `${import.meta.env.W500_IMAGE_URL}/${imgPath}`,
};

export default apiConfig;
