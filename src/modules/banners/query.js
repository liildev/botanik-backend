const GET = `
    SELECT
        *
    FROM
        banners AS b
    WHERE
        b.status = 'active'
    AND CASE WHEN $1 > 0 THEN
        b.banner_id = $1
    ELSE
        TRUE
    END;
`


const POST = `
    INSERT INTO banners (banner_image)
        VALUES ($1) RETURNING *;

`

const DELETE = `
    UPDATE banners
    SET status = 'deleted'
    WHERE banner_id = $1
    RETURNING *
`

module.exports = {
    GET,
    POST,
    DELETE
}