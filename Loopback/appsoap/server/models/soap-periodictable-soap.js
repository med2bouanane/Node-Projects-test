
'use strict';
var server = require('../../server/server');

module.exports = function(periodictableperiodictableSoap) {

  var soapDataSource = server.datasources.periodicSoapDS;
  var periodictableperiodictableSoap;

  soapDataSource.once('connected', function () {
    // Create the model
    periodictableperiodictableSoap = soapDataSource.createModel('periodictableperiodictableSoap', {});
  });


  /**
   * GetAtoms
   * @param {GetAtoms} GetAtoms GetAtoms
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  periodictableperiodictableSoap.GetAtoms = function(GetAtoms, callback) {
      periodictableperiodictableSoap.GetAtoms(GetAtoms, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetAtomicWeight
   * @param {GetAtomicWeight} GetAtomicWeight GetAtomicWeight
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  periodictableperiodictableSoap.GetAtomicWeight = function(GetAtomicWeight, callback) {
      periodictableperiodictableSoap.GetAtomicWeight(GetAtomicWeight, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetAtomicNumber
   * @param {GetAtomicNumber} GetAtomicNumber GetAtomicNumber
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  periodictableperiodictableSoap.GetAtomicNumber = function(GetAtomicNumber, callback) {
      periodictableperiodictableSoap.GetAtomicNumber(GetAtomicNumber, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetElementSymbol
   * @param {GetElementSymbol} GetElementSymbol GetElementSymbol
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  periodictableperiodictableSoap.GetElementSymbol = function(GetElementSymbol, callback) {
      periodictableperiodictableSoap.GetElementSymbol(GetElementSymbol, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  // Map to REST/HTTP

  periodictableperiodictableSoap.remoteMethod('GetAtoms',
  { isStatic: true,
  produces: 
   [ { produces: 'application/json' },
     { produces: 'application/xml' } ],
  accepts: 
   [ { arg: 'GetAtoms',
       type: 'GetAtoms',
       description: 'GetAtoms',
       required: true,
       http: { source: 'body' } } ],
  returns: 
   [ { arg: 'data',
       type: 'GetAtomsResponse',
       description: 'GetAtomsResponse',
       root: true } ],
  http: { verb: 'post', path: '/GetAtoms' },
  description: 'GetAtoms' }
  );
  
  periodictableperiodictableSoap.remoteMethod('GetAtomicWeight',
  { isStatic: true,
  produces: 
   [ { produces: 'application/json' },
     { produces: 'application/xml' } ],
  accepts: 
   [ { arg: 'GetAtomicWeight',
       type: 'GetAtomicWeight',
       description: 'GetAtomicWeight',
       required: true,
       http: { source: 'body' } } ],
  returns: 
   [ { arg: 'data',
       type: 'GetAtomicWeightResponse',
       description: 'GetAtomicWeightResponse',
       root: true } ],
  http: { verb: 'post', path: '/GetAtomicWeight' },
  description: 'GetAtomicWeight' }
  );
  
  periodictableperiodictableSoap.remoteMethod('GetAtomicNumber',
  { isStatic: true,
  produces: 
   [ { produces: 'application/json' },
     { produces: 'application/xml' } ],
  accepts: 
   [ { arg: 'GetAtomicNumber',
       type: 'GetAtomicNumber',
       description: 'GetAtomicNumber',
       required: true,
       http: { source: 'body' } } ],
  returns: 
   [ { arg: 'data',
       type: 'GetAtomicNumberResponse',
       description: 'GetAtomicNumberResponse',
       root: true } ],
  http: { verb: 'post', path: '/GetAtomicNumber' },
  description: 'GetAtomicNumber' }
  );
  
  periodictableperiodictableSoap.remoteMethod('GetElementSymbol',
  { isStatic: true,
  produces: 
   [ { produces: 'application/json' },
     { produces: 'application/xml' } ],
  accepts: 
   [ { arg: 'GetElementSymbol',
       type: 'GetElementSymbol',
       description: 'GetElementSymbol',
       required: true,
       http: { source: 'body' } } ],
  returns: 
   [ { arg: 'data',
       type: 'GetElementSymbolResponse',
       description: 'GetElementSymbolResponse',
       root: true } ],
  http: { verb: 'post', path: '/GetElementSymbol' },
  description: 'GetElementSymbol' }
  );
  
}
