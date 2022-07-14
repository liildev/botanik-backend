const GET = `
SELECT
    p.*,
    json_agg(i.*) AS images
FROM
    products AS p
    LEFT JOIN images AS i ON p.product_id = i.product_id
WHERE
    p.status = 'active'
    AND CASE WHEN $1 > 0 THEN
        p.product_id = $1
    ELSE
        TRUE
    END
GROUP BY
    p.product_id;
`;


const POST = `
    INSERT INTO products (product_name, price, count, description, category_id)
        VALUES ($1, $2, $3, $4, $5) RETURNING *
`


const PUT = `
    UPDATE products 
    SET
        product_name = $2,
        price = $3,
        count = $4,
        description = $5
    WHERE product_id = $1
    RETURNING *     
`


const DELETE = `
    UPDATE
        products
    SET
        status = 'deleted'
    WHERE
        product_id = $1
    RETURNING *;

`

const POSTIMAGE = `
    INSERT INTO images (product_id, image)
    VALUES ($1, $2)
    RETURNING *
`


module.exports = {
  GET,
  POST,
  PUT,
  DELETE,
  POSTIMAGE
};
