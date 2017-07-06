
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.holamundo2 = function(req, res){
    res.render('holamundo', { title: 'Hola Mundo 2!!' });
};