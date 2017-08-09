'use strict';


module.exports = function(Test) {

    Test.status = function(cb) {
    var currentDate = new Date();
    var currentHour = currentDate.getHours();
    var OPEN_HOUR = 6;
    var CLOSE_HOUR = 20;
    console.log('Current hour is %d', currentHour);
    var response;
    if (currentHour >= OPEN_HOUR && currentHour < CLOSE_HOUR) {
      response = 'We are open for business.';
    } else {
      response = 'Sorry, we are closed. Open daily from 6am to 8pm.';
    }
    cb(null, response);
    };

  // Esto se muestra en SWAGGER
  // model.remoteMethod(requestHandlerFunctionName, [options])
      // model = Test
      // requestHandlerFunctionName = status => (Test.status)
      // options = object con los parámetros de configuración de REST
  // http://localhost:3000/api/tests/status    
  Test.remoteMethod(
    
    'status', 
    
    {
      http: {
        path: '/status',
        verb: 'get'
      },
      returns: {
        arg: 'status',
        type: 'string'
      }
    }
  );

};
