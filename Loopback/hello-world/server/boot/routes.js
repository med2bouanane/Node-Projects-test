
// http://localhost:3000/ping
// No se muestra en SWAGGER
module.exports = function(app) {
  // FORMA 1
  // app.get('/ping', function(req, res) {
  //   res.send('pong');
  // });

  // FORMA 2
  var router = app.loopback.Router();
  router.get('/ping', function(req, res) {
    res.send('pongaroo');
  });
  app.use(router);

}

