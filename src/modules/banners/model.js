const { fetchAll, fetch } = require('../../libs/postgres.js')
const model = require('./query.js')


const GETBANNERS = async ({id}) => {
    try {
        return await fetchAll(model.GET, id)
    } catch (error) {
        console.error(error);
    }
}


const POSTBANNERS = async ({main: [main]}) => {
    try {
        return await fetch(model.POST, main.filename)
    } catch (error) {
        console.error(error);
    }
}

const DELETEBANNERS = async ({id}) => {
    try {
        return await fetch(model.DELETE, id)
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    GETBANNERS,
    POSTBANNERS,
    DELETEBANNERS
}