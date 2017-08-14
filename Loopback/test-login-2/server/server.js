'use strict';

const loopback = require('loopback'),
      boot = require('loopback-boot'),
      https = require('https'),
      sslConfig = require('./ssl/ssl-config');

var app = module.exports = loopback();

app.start = function() {
  // start the web server
  //return app.listen(function() {


    let options = {
      key: sslConfig.privateKey,
      cert: sslConfig.certificate,
    };
    let server = https.createServer(options, app);


    server.listen(app.get('port'), function() {
        var baseUrl =  'https://' + app.get('host') + ':' + app.get('port');//(httpOnly ? 'http://' : 'https://') + app.get('host') + ':' + app.get('port');
        app.emit('started', baseUrl);
        console.log('LoopBack server listening @ %s%s', baseUrl, '/');
        if (app.get('loopback-component-explorer')) {
          var explorerPath = app.get('loopback-component-explorer').mountPath;
          console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
        }
    });
    
    return server;

    // app.emit('started');
    // var baseUrl = 'https://' + app.get('url').replace(/\/$/, '');
    // console.log('Web server listening at: %s', baseUrl);
    // if (app.get('loopback-component-explorer')) {
    //   var explorerPath = app.get('loopback-component-explorer').mountPath;
    //   console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    // }
  //});
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});
