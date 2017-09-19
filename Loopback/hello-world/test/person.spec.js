//http://localhost:3000/explorer/#!/person/person_find


const request = require('request'),
      assert = require('chai').assert
      person = require('../common/models/person');


      describe("API Rest Person: ", function() {
        describe("API / GET: ", function() {
                
            it("should respond with status 200: ", function(done) {


                request('http://localhost:3000/explorer/#!/person/person_find', function (error, response, body) {
                    console.log('error:', error); // Print the error if one occurred 
                    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
                    //console.log('body:', body); // Print the HTML for the Google homepage. 
                    assert.equal(response.statusCode, 200);
                    done();
                  })
            });        
    });

})
