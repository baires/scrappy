import { today, fravegaJsonName } from './constants';

const Xray = require('x-ray');

const x = Xray({
  filters: {
    date() {
      return today;
    },
  },
});

x('http://www.fravega.com/informatica/notebooks', '.resultItemsWrapper .informatica-compra-al-mejor-precio-en-fravega-com', [{
  title: 'h3 a',
  brandName: x('.image > a@href', '.brandName'),
  link: '.image a@href',
  price: x('.image > a@href', '.skuBestPrice'),
  createdAt: '.skuBestPrice | date',
}])
  .limit(3)
  .write(`./data/${fravegaJsonName}.json`);
