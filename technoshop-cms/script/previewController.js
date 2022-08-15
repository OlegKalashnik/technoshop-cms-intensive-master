import { preview, image } from './elems.js';
import { toBase64 } from './utils.js';

const showPreview = (src) => {
  preview.style.display = 'block';
  preview.src = src;
};

export const hidePreview = () => {
  preview.style.display = '';
  preview.src = '';
};

export const previewController = () => {
  image.addEventListener('change', async () => {
    if (image.files.length) {
      const src = await toBase64(image.files[0]);
      showPreview(src);
    }
  });
};
