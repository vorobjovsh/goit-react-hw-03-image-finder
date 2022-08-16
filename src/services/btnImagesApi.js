/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

const fetchImagesAddBtn = (name, countPage) => {
  const key = '29244059-9afec784de07f5aed2be70bd0';

  return axios
  .get(`https://pixabay.com/api/?q=${name}&page=${countPage}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`);
};

export default {
  fetchImagesAddBtn,
};
