
const bunyan = require('bunyan');
const bformat = require('bunyan-format');
// const restify = require('restify');

const formatOut = bformat({ color: true });
const pathLog = '../logs.log';
/**
 * the logger
 * @param {string} _name - name that will be used for log traces
 * @returns - the log object
 */
const log = (_name) => {
  const _log = bunyan.createLogger({
    name: _name, 
    streams: [
        { stream: formatOut }, 
        { path: pathLog }
    ],
    serializers: {
        req: bunyan.stdSerializers.req
      }
  });
  return _log;
};

module.exports = log;

// res: restify.bunyan.serializers.response,