const { fetch, fetchAll } = require("../../libs/postgres.js");
const { GET, GETIMAGES, POST, DELETE, PUT } = require("./query.js");

const CATEGOIRES = async ({ id = 0 }) => {
  try {
    let categories = await fetchAll(GET, id);
    let images = await fetchAll(GETIMAGES);

    return categories.map((category) => {
      console.log(category.products[0]);
      category.products = category.products[0] == null ? [] : category.products;
      category.products.map((product) => {
        delete product.product_id;
        product.image = images.filter(
          (image) => image.product_id == product.product_id
        );

        return product;
      });
      return category;
    });
  } catch (error) {
    console.error(error);
  }
};

const POSTCATEGOIRES = async ({ categoryName }) => {
  try {
    return await fetch(POST, categoryName);
  } catch (error) {
    console.error(error);
  }
};

const DELETECATEGOIRES = async ({ id }) => {
  try {
    return await fetch(DELETE, id);
  } catch (error) {
    console.error(error);
  }
};

const PUTCATEGOIRES = async ({ categoryName }, { id }) => {
  try {
    return await fetch(PUT, categoryName, id);
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  CATEGOIRES,
  POSTCATEGOIRES,
  DELETECATEGOIRES,
  PUTCATEGOIRES,
};
