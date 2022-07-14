const GET = `
    SELECT
        c.*,
        json_agg(p.*) AS products
    FROM
        categories AS c
        LEFT JOIN products AS p ON c.category_id = p.category_id
        WHERE c.status = 'active' AND CASE
            WHEN $1 > 0 THEN c.category_id = $1
                ELSE true
            END 
    GROUP BY
        c.category_id;
`;

const GETIMAGES = `
    SELECT
        *
    FROM
        images
`;

const POST = `
    INSERT INTO categories (category_name)
        VALUES ($1) RETURNING category_id, category_name

`;

const DELETE = `
    UPDATE
        categories AS c
    SET
        status = 'deleted'
    WHERE
        c.category_id = $1
    RETURNING *;
`;


const PUT = `
    UPDATE
        categories
    SET
        category_name = $1
    WHERE
        category_id = $2
        AND status = 'active'
    RETURNING *;
`;

module.exports = {
  GET,
  GETIMAGES,
  POST,
  DELETE,
  PUT
};
