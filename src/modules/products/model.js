const { fetchAll, fetch } = require("../../libs/postgres.js");
const model = require("./query.js");

const GETPRODUCTS = async ({ id }) => {
  try {
    return await fetchAll(model.GET, id);
  } catch (error) {
    console.error(error);
  }
};

const POSTPRODUCTS = async ({
  productName,
  price,
  count,
  description,
  categoryId,
}) => {
  try {
    return await fetch(
      model.POST,
      productName,
      price,
      count,
      description,
      categoryId
    );
  } catch (error) {
    console.error(error);
  }
};


const PRODUCTIMAGE = async ({id}, { main: [main], gallery }) => {
  try {
    let images = []
    images[0] = await fetch(model.POSTIMAGE, id, main.filename)
    for(let image of gallery) {
      images[images.length] = await fetch(model.POSTIMAGE, id, image.filename)
    }
    return images
  } catch (error) {
    console.error(error);
  }
}

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
  GETPRODUCTS,
  POSTPRODUCTS,
  PUTPRODUCTS,
  DELETEPRODUCTS,
  PRODUCTIMAGE
};
