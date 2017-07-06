
/*
 * GET users listing.
 */
/*
exports.list = function(req, res){
  res.send("respond with a resource");
};
*/
module.exports = function(app){

    app.get('/users',function(req,res){
        res.send("respond with a resource");
    });
}