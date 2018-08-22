const request = require('request-promise-native');


const revokeToken = (token) => {
  const optionsPOST = {
    method: 'POST',
    uri: 'https://api-dev.svc.kiloutou.fr:8089/api/oauth/revoke',
    qs: {
      token_type_hint: token,

    },
    // headers: {
    // //   'content-type': 'application/form-data',
    //   'content-type': 'application/x-www-form-urlencoded', // Is set automatically
    // },
    json: true, // Automatically parses the JSON string in the response
  };

  return request(optionsPOST)
    .then(res => res)
    .catch(err => err);
};


module.exports = { revokeToken };
