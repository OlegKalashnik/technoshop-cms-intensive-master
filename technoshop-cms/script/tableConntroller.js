import { tableRander } from './tableViewer.js';
import { getGoods } from './serviceApi.js';

export const tableConntroller = async () => {
  const goods = await getGoods();
  tableRander(goods);
};
