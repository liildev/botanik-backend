const GET = `
    SELECT
        *
    FROM
        news;
`;


const POST = `
    INSERT INTO news (title, news_image, description)
        VALUES ($1, $2, $3, $4) RETURNING *
`


const PUT = `
    UPDATE news 
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
        news
    SET
        status = 'deleted'
    WHERE
        product_id = $1
    RETURNING *;

`

module.exports = {
  GET,
  POST,
  PUT,
  DELETE
};



