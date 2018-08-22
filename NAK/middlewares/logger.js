const constants = require('../utils/constants');
const logger = require('../utils/logger')(constants.PROJECT_NAME);


const log = (req, res, next) => {
  logger.info(`${constants.FILE_NAME}.js:`, { method: req.method, originalUrl: req.originalUrl });
  next();
};

module.exports = log;
