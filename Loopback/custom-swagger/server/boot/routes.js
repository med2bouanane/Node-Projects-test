
// http://localhost:3000/ping
// No se muestra en SWAGGER

const userController = require('../../common/controllers/userController');

module.exports = function(app) {
  // FORMA 1
  app.get('/api/ping', function(req, res) {
    res.send('pong');
  });

  // FORMA 2
  var router = app.loopback.Router();
  router.get('/api/ping2', function(req, res) {
    res.send('pongaroo');
  });

  // FORMA 3
  app.use('/express-status', function(req, res, next) {
    res.json({ running: true });
  });

  router.post('/signup', userController.signUp);
  router.post('/signuin', userController.signIn);

  app.use(router);

}

