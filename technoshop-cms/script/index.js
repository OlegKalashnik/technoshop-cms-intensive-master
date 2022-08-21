import { modalBtn, modal } from './elems.js';
import { formController } from './formController.js';
import { modalController } from './modalController.js';
import { previewController } from './previewController.js';
import { tableConntroller } from './tableConntroller.js';

const init = () => {
  modalController({
    modal,
    modalBtn,
    classOpen: 'd-block',
    classClose: 'btn-close',
  });

  previewController();
  tableConntroller();
  formController();
};
init();
