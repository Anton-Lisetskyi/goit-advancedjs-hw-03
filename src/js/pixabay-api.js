import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';


const API_KEY = '47639623-264b1095d84da06504953512f';

async function getImg(searchValue) {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: searchValue,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  const url = `https://pixabay.com/api/?${searchParams.toString()}`;

  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();

    if (!data.hits || data.hits.length === 0) {
      iziToast.error({
        title: 'Error',
        message: 'No images found for the query.',
        position: 'topRight',
      });
      throw new Error('No images found for the query.');
    }

    return data;
  } catch (error) {
    console.error('Error fetching images:', error.message);
    throw error;
  }
}

export { getImg };