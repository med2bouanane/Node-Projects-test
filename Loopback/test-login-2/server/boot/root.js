'use strict';

const auth = require('../middleware/auth'),
  loopback = require('loopback');

module.exports = function(server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  router.get('/', server.loopback.status());
  
  

  // Solo para find, hay que hacer lo mismo para todos los metodos http
  // router.use('/api/products',auth(), function(req, res, next) {
  //   //res.json({ running: true });
  //  loopback.getModel('product').find((err,product)=>{
  //    if(!err)
  //     res.json(product)
  //  })

  // });

  
  server.use(router);

};
