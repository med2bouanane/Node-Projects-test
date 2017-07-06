
/*
 * GET home page.
 */
/*
exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};*/

var sus = require('../models/suscriptors');

module.exports = function(app){

    app.get('/',function(req,res){
        res.render('index',{title:'Lista de suscriptores'});
    });

    app.post('/',function(req,res){

        sus.new({name:req.param('name'),email:req.param('email')},function(e){
           res.render('index',{title:'Lista Suscriptores'});
        });
    });
}