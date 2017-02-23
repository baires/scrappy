import Xray from 'x-ray';

import { today, garbarinoJsonName } from './constants';

const x = Xray({
  filters: {
    date() {
      return today;
    },
    trim(value) {
      return value.replace(/\n/g, '').trim();
    },
  },
});

x('https://www.garbarino.com/productos/notebooks/4363', '.gb-list-grid li .gb-list-cluster', [{
  title: '.gb-list-cluster-title | trim',
  brandName: x('.gb-list-cluster > a@href', '.gb-breadcrumb-brand'),
  link: '.gb-list-cluster a@href',
  price: x('.gb-list-cluster > a@href', '#final-price | trim'),
  createdAt: '#final-price| date',
}])
  .limit(3)
  .write(`./data/${garbarinoJsonName}.json`);
