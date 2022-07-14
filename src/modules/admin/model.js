const {fetch} = require('../../libs/postgres.js');
const { LOG } = require('./query.js');

const ADMINLOGIN = async ({ username, password }) => {
  const user = await fetch(LOG, username, password);
  return user
};

module.exports = {
  ADMINLOGIN,
};
