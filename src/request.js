const axios = require("axios");
const APIURL = "https://pixabay.com/api";

export const getImages = (page = 1) =>
  axios.get(`${APIURL}/?page=${page}&key=6473511-0417f2cad683f1bee54cafe15`);

export const getImagesId = (id, page = 1) =>
  axios.get(`${APIURL}/?page=${page}&key=6473511-0417f2cad683f1bee54cafe15'&id=${id}`);

export const searchImages = (keyword, page = 1) =>
  axios.get(
    `${APIURL}/?page=${page}&key=6473511-0417f2cad683f1bee54cafe15'&q=${keyword}`
  );