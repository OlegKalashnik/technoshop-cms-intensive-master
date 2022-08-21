import { tableGoods } from './elems.js';
import { currencyFormatRUB } from './utils.js';

// const createRow = ({ id, category, title, price }) => {
//   tableGoods.insertAdjacentHTML(
//     'beforeend',
//     `
//     <tr class="table-row table-goods-item" data-id="${id}">
//       <td>${id}</td>
//       <td>${title}</td>
//       <td>${category}</td>
//       <td class="text-end">${currencyFormatRUB(price)}</td>
//       <td class="d-flex">
//         <button class="btn-table btn-delete">
//           <svg width="30" height="30">
//             <use xlink:href="#delete" />
//           </svg>
//         </button>
//       </td>
//     </tr>
//   `
//   );
// };

const createRow = ({ id, category, title, price }) => {
  let row = document.createElement('tr');
  row.classList.add('table-row', 'table-goods-item');
  row.setAttribute('data-id', `${id}`);

  let idTd = document.createElement('td');
  idTd.textContent = id;
  row.append(idTd);

  let titleTd = document.createElement('td');
  titleTd.textContent = title;
  row.append(titleTd);

  let categoryTd = document.createElement('td');
  categoryTd.textContent = category;
  row.append(categoryTd);

  let priceTd = document.createElement('td');
  priceTd.classList.add('text-end');
  priceTd.textContent = currencyFormatRUB(price);
  row.append(priceTd);

  let buttonTd = document.createElement('td');
  buttonTd.classList.add('d-flex');
  let button = document.createElement('button');
  button.classList.add('btn-table', 'btn-delete');
  button.insertAdjacentHTML(
    'afterbegin',
    `
      <svg width="30" height="30">
        <use xlink:href="#delete" />
      </svg>
    `
  );
  // let svg = document.createElement('svg');
  // svg.setAttribute('width', '30');
  // svg.setAttribute('height', '30');
  // // svg.insertAdjacentHTML('afterbegin', '<use xlink:href="#delete" />');
  // let use = document.createElement('use');
  // use.setAttribute('xlink:href', '#delete');
  // svg.append(use);
  // button.append(svg);
  buttonTd.append(button);
  row.append(buttonTd);

  return row;
};

export const tableRander = (goods) => {
  tableGoods.textContent = '';

  const tableRows = goods.map(createRow);
  tableGoods.append(...tableRows);
  // goods.forEach(createRow);
};
