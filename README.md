# scrappy
Scrap notebooks price from several sources

## About

The idea is to have the latest price of notebook from [Fravega](http://fravega.com/) and [Garbarino](http://garbarino.com/) easily.

## Requirements

- Node 6+
- yarn or npm

## Install

Just `yarn` or `npm i`.

## Tasks

| Name                           | Description                                         |
|--------------------------------|-----------------------------------------------------|
| `npm run garbarino`            | scrap garbarino site and generate a json file       |
| `npm run fravega`              | scrap fravega site and generate a json file         |
| `npm run scrap`                | scrap garbarino and fraevga and generate json files |
| `npm run export-csv-garbarino` | generate csv file from garbarino json               |
| `npm run export-csv-fravega`   | generate csv file from fravega json                 |
| `npm run export-csv`           | generate csv file from fravega and garbarino        |
| `npm run bundle-csv-fravega`   | Merge and bundle fravega csv on a single file       |
| `npm run bundle-csv-garbarino` | Merge and bundle garbarino csv on a single file     |

##Data

You can find all the data file under [data](https://github.com/baires/scrappy/tree/master/data).
