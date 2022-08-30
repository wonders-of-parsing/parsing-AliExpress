const http = require("http");
const { parse } = require("node-html-parser");
const fs = require("fs");
const extract = require("extract-json-from-string");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer(() => {
  const text = `data`;

  const root = extract(text);
  const content = root[5].mods.itemList.content;
  const result = [];
  content.forEach((product) => {
    const parsedProduct = {
      title: product.title.displayTitle,
      store: product.store.storeName,
      sold: product.trade?.tradeDesc || 0,
      price: product.prices.salePrice.formattedPrice,
    };
    result.push(parsedProduct);
  });
  console.log(result);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
