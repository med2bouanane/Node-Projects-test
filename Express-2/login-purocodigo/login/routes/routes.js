const express = require('express'),
	  router = express.Router(),
	  passport = require('passport'),
	  authMiddleware = require('../middlewares/auth-middleware')
	  controllers = require('../controllers/mainController') // import all our controllers that are in the controllers folder


//console.log('CONTROLLERS => ',controllers);
// Home
router.get('/', controllers.homeController.main)

// GET: registrar usuario
router.get('/auth/signup',controllers.UserController.getSignUp)
// POST: registrar usuario
router.post('/auth/signup',controllers.UserController.postSignUp)
// GET: Login
router.get('/auth/signin',controllers.UserController.getSignIn)
// POST: Login
router.post('/auth/signin',passport.authenticate('local',{
	successRedirect : '/auth/panel',
	failureRedirect : '/auth/signin',
	failureFlash : true
}))

// GET: Logout
router.get('/auth/logout',controllers.UserController.logout)

// GET: 
router.get('/auth/panel',authMiddleware.isLogged,controllers.UserController.getUserPanel)
module.exports = router
