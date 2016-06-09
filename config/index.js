/**
 * Basic configuration object
 */
module.exports = {
  auth: {
    secret: 'Little secret, big responsability...'
  },
  database: {
    local: 'mongodb://localhost/jwtapi',
    mLab: '' // if you want to use mLab for example
  }
};
