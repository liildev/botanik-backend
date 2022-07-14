const { fetchAll, fetch } = require("../../libs/postgres.js");
const model = require("./query.js");

const GETNEWS = async () => {
  const news = await fetchAll(model.GET);
  return news;
};

const POSTNEWS = async ({ title, description }) => {
  try {
    return await fetch(title, description);
  } catch (error) {
    console.error(error);
  }
};

const PUTPRODUCTS = async (
  { id },
  { productName, price, count, description }
) => {
  try {
    return await fetch(model.PUT, id, productName, price, count, description);
  } catch (error) {
    console.error(error);
  }
};

const DELETEPRODUCTS = async ({ id }) => {
  try {
    return await fetch(model.DELETE, id);
  } catch (error) {
    console.error(error);
  }
};
module.exports = {
  GETNEWS,
  POSTNEWS,
  PUTPRODUCTS,
  DELETEPRODUCTS,
};
