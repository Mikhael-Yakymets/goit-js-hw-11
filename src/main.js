// напиши всю логіку роботи додатка
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// Import functions
import { getImagesGallery } from './js/pixabay-api';
import { gallaryMarkUp } from './js/render-functions';
import { showLoader } from './js/render-functions';
import { hideLoader } from './js/render-functions';

//#region tacke imput
const refs = {
  form: document.querySelector('.js-search-form'),
};

const { form } = refs;

form.addEventListener('submit', onSearchSubmit);

async function onSearchSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const { searchText } = form.elements;

  showLoader();

  try {
    const { hits, totalHits } = await getImagesGallery(searchText.value);

    if (!hits || hits.length === 0) {
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topCenter',
      });
      return;
    }

    gallaryMarkUp(hits);
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: `Error fetching images: ${error}`,
      position: 'topCenter',
    });
  } finally {
    hideLoader();
  }

  searchText.value = '';
}
